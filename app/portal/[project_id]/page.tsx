import {
  ArrowLeft,
  Check,
  Circle,
  ExternalLink,
  FileSignature,
  LayoutDashboard,
  LockKeyhole,
  MessageSquareText,
  Send,
  ShieldCheck
} from "lucide-react";
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

const roadmap = [
  {
    title: "Blueprint",
    description: "Goals, workflows, and success measures are confirmed."
  },
  {
    title: "Build",
    description: "Your approved experience is designed and assembled."
  },
  {
    title: "Staging Review",
    description: "You test the live preview and share final feedback."
  },
  {
    title: "Launch Approval",
    description: "Final testing is complete and project sign-off unlocks."
  }
];

function getReachedMilestone(status: keyof typeof statusLabels, progress: number) {
  if (status === "CLIENT_REVIEW" || status === "SIGNED_OFF" || status === "COMPLETED") {
    return 4;
  }

  if (status === "IN_PROGRESS") {
    return progress >= 70 ? 3 : 2;
  }

  return 1;
}

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

  const reachedMilestone = getReachedMilestone(project.status, project.progress);
  const canSignOff = reachedMilestone === 4;

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
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
      {signoff === "locked" ? (
        <div className="mb-6 rounded-2xl border border-amber-200/25 bg-amber-300/10 px-5 py-4 text-sm text-amber-100 backdrop-blur-md">
          Project sign-off remains locked until the project reaches Milestone 4: Launch Approval.
        </div>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <aside className="glass-panel h-fit rounded-[2rem] p-5 lg:sticky lg:top-24">
          <Link href="/client-dashboard" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>

          <div className="mt-7 border-b border-white/10 pb-6">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Client portal</p>
            <p className="mt-3 font-semibold text-white">{project.name}</p>
            <span className="mt-3 inline-flex rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">
              {statusLabels[project.status]}
            </span>
          </div>

          <nav className="mt-6 space-y-2" aria-label="Project portal navigation">
            {[
              { href: "#overview", label: "Overview", icon: LayoutDashboard },
              { href: "#roadmap", label: "Roadmap", icon: Circle },
              { href: "#messages", label: "Messages", icon: MessageSquareText },
              { href: "#sign-off", label: "Sign-off", icon: FileSignature }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-white/[0.07] hover:text-white"
              >
                <item.icon className="h-4 w-4 text-cyan-200/80" />
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-7 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Project progress</p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <p className="text-3xl font-semibold text-white">{project.progress}%</p>
              <p className="text-xs text-slate-400">Milestone {reachedMilestone} of 4</p>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-300"
                style={{ width: `${Math.min(100, Math.max(0, project.progress))}%` }}
              />
            </div>
          </div>

          {project.stagingUrl ? (
            <a
              href={project.stagingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white hover:border-cyan-200/30 hover:bg-white/10"
            >
              Open Staging Site
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-xs leading-5 text-slate-400">
              Your staging link will appear here when the preview is ready.
            </p>
          )}
        </aside>

        <main className="min-w-0 space-y-8">
          <header id="overview" className="scroll-mt-28">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Active project</p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">{project.name}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{project.summary}</p>
          </header>

          <section id="roadmap" className="glass-panel scroll-mt-28 rounded-[2rem] p-6 sm:p-8">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-violet-200">Project lifecycle</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Your four-step launch roadmap</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Each stage stays visible, so you always know what is complete and what comes next.
              </p>
            </div>

            <div className="relative mt-8 grid gap-4 md:grid-cols-4">
              <div className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-white/10 md:block" />
              {roadmap.map((step, index) => {
                const stepNumber = index + 1;
                const reached = stepNumber <= reachedMilestone;
                const active = stepNumber === reachedMilestone;

                return (
                  <article
                    key={step.title}
                    className={`relative rounded-2xl border p-5 ${
                      active
                        ? "border-cyan-200/35 bg-cyan-300/10 shadow-[0_18px_50px_rgba(34,211,238,0.1)]"
                        : reached
                          ? "border-violet-200/20 bg-violet-300/[0.07]"
                          : "border-white/10 bg-black/15"
                    }`}
                  >
                    <div
                      className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold ${
                        reached
                          ? "border-cyan-200/35 bg-cyan-100 text-slate-950"
                          : "border-white/10 bg-slate-950 text-slate-500"
                      }`}
                    >
                      {stepNumber < reachedMilestone ? <Check className="h-4 w-4" /> : stepNumber}
                    </div>
                    <p className={`mt-5 font-semibold ${reached ? "text-white" : "text-slate-500"}`}>{step.title}</p>
                    <p className={`mt-2 text-sm leading-6 ${reached ? "text-slate-300" : "text-slate-600"}`}>
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="messages" className="glass-panel scroll-mt-28 rounded-[2rem] p-6">
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
                            ? "Stratum Studio"
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
          </section>

          <section
            id="sign-off"
            className={`scroll-mt-28 rounded-[2rem] border p-6 sm:p-8 ${
              canSignOff
                ? "border-cyan-200/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(139,92,246,0.12))] shadow-[0_24px_80px_rgba(34,211,238,0.08)] backdrop-blur-xl"
                : "border-white/10 bg-white/[0.05] backdrop-blur-xl"
            }`}
          >
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                {canSignOff ? (
                  <ShieldCheck className="h-7 w-7 text-cyan-200" />
                ) : (
                  <LockKeyhole className="h-7 w-7 text-slate-500" />
                )}
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  {canSignOff ? "Final approval is ready" : "Sign-off unlocks at Milestone 4"}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  {canSignOff
                    ? "Complete the final testing confirmation and digital signature to release the finished project."
                    : "Finish the staging review first. The ownership release remains securely locked until your project reaches final approval."}
                </p>
                <Link href="/policies" className="mt-4 inline-flex text-sm text-cyan-100 hover:text-white">
                  Review studio policies
                </Link>
              </div>
              <SignOffModal
                projectId={project.id}
                projectName={project.name}
                signed={Boolean(project.signOff)}
                canSignOff={canSignOff}
              />
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}
