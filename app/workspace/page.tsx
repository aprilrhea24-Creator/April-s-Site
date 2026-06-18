import { redirect } from "next/navigation";
import { Activity, CircleDollarSign, LockKeyhole, UsersRound } from "lucide-react";

import { requireAdmin } from "@/lib/auth";

const stats = [
  { label: "Qualified pipeline", value: "$84.6K", icon: CircleDollarSign },
  { label: "Active client systems", value: "12", icon: UsersRound },
  { label: "Automation uptime", value: "99.7%", icon: Activity }
];

export default async function WorkspacePage() {
  try {
    await requireAdmin();
  } catch {
    redirect("/login");
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Private workspace</p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white">Premium analytics dashboard preview.</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            This guarded module demonstrates the executive dashboard clients receive when their operational system goes live.
          </p>
        </div>
        <div className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-sm text-cyan-100">
          <LockKeyhole className="mr-2 inline h-4 w-4" />
          Admin only
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-panel rounded-2xl p-6">
            <stat.icon className="h-6 w-6 text-cyan-200" />
            <p className="mt-5 text-sm text-slate-400">{stat.label}</p>
            <p className="mt-2 text-4xl font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel rounded-[2rem] p-6">
          <h2 className="text-2xl font-semibold text-white">Implementation timeline</h2>
          <div className="mt-6 space-y-4">
            {["Discovery approved", "Prototype review", "Automation QA", "Launch and training"].map((stage, index) => (
              <div key={stage} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-white">{stage}</p>
                  <p className="text-sm text-cyan-100">{25 * (index + 1)}%</p>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300" style={{ width: `${25 * (index + 1)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel rounded-[2rem] p-6">
          <h2 className="text-2xl font-semibold text-white">Client intelligence</h2>
          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <p className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">At-risk scope changes are flagged before they become unpaid labor.</p>
            <p className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">Deposits, milestones, and approvals remain attached to the project record.</p>
            <p className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">Executive reporting can be customized for each client&apos;s industry.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
