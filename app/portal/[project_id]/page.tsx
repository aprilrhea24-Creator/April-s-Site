import { ExternalLink, MessageSquareText, Send, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { postClientMessage } from "@/app/portal/[project_id]/actions";
import { SignOffModal } from "@/components/portal/sign-off-modal";
import { requireUser } from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";

const statusLabels = {
  DISCOVERY: "Discovery",
  IN_PROGRESS: "In progress",
  CLIENT_REVIEW: "Client review",
  SIGNED_OFF: "Signed off",
  COMPLETED: "Completed"
} as const;

export const dynamic = "force-dynamic";

export default async function ClientPortalPage({
  params,
  searchParams
}: {
  params: Promise<{ project_id: string }>;
  searchParams: Promise<{ signoff?: string }>;
}) {
  let session;

  try {
    session = await requireUser();
  } catch {
    redirect("/login");
  }

  const { project_id: projectId } = await params;
  const { signoff } = await searchParams;
  const project = await getPrisma().clientProject.findFirst({
    where: {
      id: projectId,
      ...(session.role === "ADMIN" ? {} : { clientId: session.userId })
    },
    include: {
      client: true,
      signOff: true,
      messages: {
        include: { user: true },
        orderBy: { createdAt: "asc" }
      }
    }
  });

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {signoff === "complete" ? (
        <div className="mb-6 rounded-2xl border border-emerald-200/30 bg-emerald-300/10 px-5 py-4 text-sm text-emerald-100 backdrop-blur-md">
          Project sign-off is complete. Your timestamped release receipt is securely recorded.
        </div>
      ) : null}
      {signoff === "invalid" ? (
        <div className="mb-6 rounded-2xl border border-rose-200/30 bg-rose-300/10 px-5 py-4 text-sm text-rose-100 backdrop-blur-md">
          Confirm final testing and provide your full legal name before signing.
        </div>
      ) : null}

      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Secure client portal</p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white">{project.name}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">{project.summary}</p>
        </div>
        <SignOffModal projectId={project.id} projectName={project.name} signed={Boolean(project.signOff)} />
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="glass-panel rounded-2xl p-6">
          <p className="text-sm text-slate-400">Project status</p>
          <p className="mt-3 text-2xl font-semibold text-white">{statusLabels[project.status]}</p>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <p className="text-sm text-slate-400">Delivery progress</p>
          <p className="mt-3 text-2xl font-semibold text-white">{project.progress}%</p>
          <div className="mt-4 h-2 rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-300"
              style={{ width: `${Math.min(100, Math.max(0, project.progress))}%` }}
            />
          </div>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <p className="text-sm text-slate-400">Staging build</p>
          {project.stagingUrl ? (
            <a
              href={project.stagingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-semibold text-cyan-100 hover:text-white"
            >
              Open staging site
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <p className="mt-3 text-sm text-slate-300">Staging access is being prepared.</p>
          )}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="glass-panel rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <MessageSquareText className="h-6 w-6 text-cyan-200" />
            <h2 className="text-2xl font-semibold text-white">Project messages</h2>
          </div>

          <div className="mt-6 max-h-[32rem] space-y-4 overflow-y-auto pr-1">
            {project.messages.length ? (
              project.messages.map((message) => {
                const clientMessage = message.author === "CLIENT";

                return (
                  <div
                    key={message.id}
                    className={`max-w-[88%] rounded-2xl border p-4 ${
                      clientMessage
                        ? "ml-auto border-cyan-200/20 bg-cyan-300/10"
                        : "border-white/10 bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        {message.author === "ADMIN"
                          ? "Aura App Studio"
                          : message.author === "SYSTEM"
                            ? "System record"
                            : message.user?.name ?? project.client.name}
                      </p>
                      <time className="text-xs text-slate-500">{message.createdAt.toLocaleDateString()}</time>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-200">{message.body}</p>
                  </div>
                );
              })
            ) : (
              <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm text-slate-400">
                No project messages yet.
              </p>
            )}
          </div>

          <form action={postClientMessage} className="mt-6 grid gap-3">
            <input type="hidden" name="projectId" value={project.id} />
            <label className="space-y-2">
              <span className="text-sm text-slate-300">Send a message</span>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Share feedback or ask a project question"
                className="glass-field"
              />
            </label>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-100 px-5 py-3 font-semibold text-slate-950 hover:bg-white sm:justify-self-end">
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>

        <aside className="glass-panel h-fit rounded-[2rem] p-6">
          <ShieldCheck className="h-7 w-7 text-violet-200" />
          <h2 className="mt-5 text-2xl font-semibold text-white">Release readiness</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Review the staging build, verify final acceptance criteria, then complete the secure ownership release.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <p className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">1. Complete staging review</p>
            <p className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">2. Confirm final testing</p>
            <p className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">3. Sign the ownership release</p>
          </div>
          <Link href="/policies" className="mt-6 inline-flex text-sm text-cyan-100 hover:text-white">
            Review studio policies
          </Link>
        </aside>
      </div>
    </section>
  );
}
