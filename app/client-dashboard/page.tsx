import { redirect } from "next/navigation";
import { FolderKanban, LineChart, MessageSquareText } from "lucide-react";

import { requireUser } from "@/lib/auth";

export default async function ClientDashboardPage() {
  try {
    await requireUser();
  } catch {
    redirect("/login");
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Client dashboard</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white">Your project command center.</h1>
        <p className="mt-5 max-w-2xl text-slate-300">
          A preview of the polished workspace client companies receive for milestones, approvals, reporting, and support.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { icon: FolderKanban, label: "Milestones", value: "Prototype active" },
            { icon: MessageSquareText, label: "Approvals", value: "2 pending" },
            { icon: LineChart, label: "Impact", value: "18 hrs saved" }
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <item.icon className="h-6 w-6 text-cyan-200" />
              <p className="mt-5 text-sm text-slate-400">{item.label}</p>
              <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
