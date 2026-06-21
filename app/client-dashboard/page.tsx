import { ArrowRight, FolderKanban, LineChart, MessageSquareText } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

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

export default async function ClientDashboardPage() {
  let session;

  try {
    session = await requireUser();
  } catch {
    redirect("/login");
  }

  const projects = await getPrisma().clientProject.findMany({
    where: { clientId: session.userId },
    include: {
      _count: { select: { messages: true } },
      signOff: { select: { id: true } }
    },
    orderBy: { updatedAt: "desc" }
  });

  return (
    <section className="command-page px-4 py-20 sm:px-6 lg:px-8">
      <div className="command-panel relative mx-auto max-w-6xl overflow-hidden rounded-2xl p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(0,212,232,0.08),transparent_34%)]" />
        <div className="relative z-10">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Client dashboard</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white">Your project command center.</h1>
        <p className="mt-5 max-w-2xl text-zinc-400">
          Review active builds, open private project portals, and complete approvals from one secure workspace.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { icon: FolderKanban, label: "Active projects", value: String(projects.length) },
            {
              icon: MessageSquareText,
              label: "Project messages",
              value: String(projects.reduce((total, project) => total + project._count.messages, 0))
            },
            {
              icon: LineChart,
              label: "Average progress",
              value: projects.length
                ? `${Math.round(projects.reduce((total, project) => total + project.progress, 0) / projects.length)}%`
                : "0%"
            }
          ].map((item) => (
            <div key={item.label} className="command-surface rounded-xl p-5">
              <item.icon className="h-6 w-6 text-cyan-200" />
              <p className="mt-5 text-sm text-zinc-500">{item.label}</p>
              <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-5">
        {projects.length ? (
          projects.map((project) => (
            <article key={project.id} className="command-panel grid gap-5 rounded-2xl p-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
                  <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">
                    {statusLabels[project.status]}
                  </span>
                  {project.signOff ? (
                    <span className="rounded-full border border-emerald-200/20 bg-emerald-200/10 px-3 py-1 text-xs text-emerald-100">
                      Signed
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">{project.summary}</p>
                <div className="mt-4 h-2 max-w-xl overflow-hidden rounded-full bg-black/80">
                  <div
                    className="stratum-progress h-2 rounded-full"
                    style={{ width: `${Math.min(100, Math.max(0, project.progress))}%` }}
                  />
                </div>
              </div>
              <Link
                href={`/portal/${project.id}`}
                className="stratum-action-gradient inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition-all hover:brightness-110"
              >
                Open Portal
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))
        ) : (
          <div className="command-panel rounded-2xl p-8 text-center">
            <p className="text-lg font-semibold text-white">No project has been assigned yet.</p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Once your engagement is activated, its secure portal will appear here automatically.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
