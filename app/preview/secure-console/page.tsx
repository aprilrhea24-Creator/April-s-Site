"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Database, LockKeyhole, ShieldCheck, WalletCards } from "lucide-react";

const clusters = [
  { label: "Client A", x: "18%", y: "28%" },
  { label: "Client B", x: "42%", y: "18%" },
  { label: "Client C", x: "70%", y: "34%" },
  { label: "Client D", x: "50%", y: "68%" }
];

const approvalItems = [
  "Activate production branch",
  "Release invoice gate",
  "Provision role vault",
  "Seal audit record"
];

function TelemetryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-300">
      <span className="h-2 w-2 animate-pulse rounded-full bg-[#22d3ee] shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
      {label}
    </span>
  );
}

function DatabaseNodeNetwork() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.11),transparent_38%)]" />
      <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 420 280" aria-hidden="true">
        <line x1="76" y1="78" x2="176" y2="50" stroke="rgba(34,211,238,0.28)" strokeWidth="1" />
        <line x1="176" y1="50" x2="294" y2="95" stroke="rgba(168,85,247,0.26)" strokeWidth="1" />
        <line x1="294" y1="95" x2="210" y2="190" stroke="rgba(34,211,238,0.24)" strokeWidth="1" />
        <line x1="210" y1="190" x2="76" y2="78" stroke="rgba(217,70,239,0.22)" strokeWidth="1" />
      </svg>
      {clusters.map((cluster, index) => (
        <button
          key={cluster.label}
          type="button"
          onClick={() => setActive(index)}
          className={`absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border transition-all ${
            active === index
              ? "border-cyan-300/60 bg-cyan-300/15 shadow-[0_0_34px_rgba(34,211,238,0.24)]"
              : "border-white/10 bg-zinc-950/80 hover:border-white/25"
          }`}
          style={{ left: cluster.x, top: cluster.y }}
          aria-label={`Inspect ${cluster.label}`}
        >
          <Database className="h-6 w-6 text-cyan-100" />
        </button>
      ))}
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Selected cluster</p>
        <p className="mt-2 text-sm font-bold text-white">{clusters[active].label} / encrypted database boundary</p>
      </div>
    </div>
  );
}

function ApprovalQueue() {
  const [approved, setApproved] = useState<Record<string, boolean>>({});
  const approvedCount = useMemo(() => Object.values(approved).filter(Boolean).length, [approved]);
  const remaining = approvalItems.length - approvedCount;

  return (
    <div className="grid gap-5 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md lg:grid-cols-[1fr_0.78fr]">
      <div className="space-y-3">
        {approvalItems.map((item) => {
          const isApproved = approved[item];

          return (
            <div key={item} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3">
              <span className="text-sm font-semibold text-white">{item}</span>
              <button
                type="button"
                onClick={() => setApproved((current) => ({ ...current, [item]: true }))}
                disabled={isApproved}
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                  isApproved
                    ? "border border-emerald-300/20 bg-emerald-300/10 text-emerald-200"
                    : "bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:brightness-110"
                }`}
              >
                {isApproved ? "Approved" : "Approve System Build"}
              </button>
            </div>
          );
        })}
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-200">Metrics Feed</p>
        <div className="mt-5 space-y-4">
          {[
            ["Approved", approvedCount],
            ["Actions required", remaining],
            ["Audit confidence", `${80 + approvedCount * 5}%`]
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs text-zinc-500">{label}</span>
              <span className="font-mono text-lg font-bold text-white">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SecureConsolePreviewPage() {
  return (
    <main className="min-h-screen bg-[#050508] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-zinc-300 backdrop-blur-md transition hover:border-cyan-300/30 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to solutions
          </Link>
          <TelemetryBadge label="Vanguard secure runtime" />
        </div>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0d12]/90 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.62)] backdrop-blur-md sm:p-8">
          <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-cyan-200">Studio Control</p>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
                Vanguard Ops Center
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
                Global enterprise infrastructure and database terminal for isolated tenants, protected payments, approval
                governance, and immutable operational logs.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["4 isolated clusters", "2 actions required", "99.99% access seal"].map((metric) => (
                <div key={metric} className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">Metric</p>
                  <p className="mt-2 text-sm font-bold text-white">{metric}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-10 grid gap-6 lg:grid-cols-2">
            <article className="grid gap-6 rounded-3xl border border-cyan-300/15 bg-white/[0.035] p-6 backdrop-blur-md xl:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">Multi-Tenant Database Matrix</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">4 isolated clusters active</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Tenant boundaries remain visually explicit while administrative commands resolve through hardened data
                  ownership and project-specific isolation.
                </p>
              </div>
              <DatabaseNodeNetwork />
            </article>

            <article className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-md xl:grid-cols-[0.92fr_1.08fr]">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-fuchsia-200">Escrow Payment Pipelines</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">Settlement velocity locked</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Milestone releases, owner approvals, and protected balance events remain attached to the command ledger.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md">
                {["Deposit secured", "Milestone review", "Final handover"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 border-b border-white/10 py-4 last:border-b-0">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-950 text-sm font-bold text-cyan-100">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{item}</p>
                      <p className="mt-1 text-xs text-zinc-500">Encrypted event checkpoint</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <section className="relative z-10 mt-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-cyan-200">Security Check</p>
            <article className="mt-4 grid gap-6 rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-md lg:grid-cols-[0.76fr_1.24fr]">
              <div>
                <div className="flex items-center gap-3">
                  <LockKeyhole className="h-6 w-6 text-cyan-200" />
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">Multi-Tier Approval Queue</p>
                </div>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">2 actions required</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Trigger local approvals to watch the system feed update without calling any external database.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white">
                    <ShieldCheck className="h-4 w-4 text-cyan-200" />
                    RBAC enforced
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white">
                    <WalletCards className="h-4 w-4 text-fuchsia-200" />
                    Escrow locked
                  </span>
                </div>
              </div>
              <ApprovalQueue />
            </article>
          </section>
        </section>
      </div>
    </main>
  );
}
