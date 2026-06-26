"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CalendarDays, ShieldCheck, Sparkles } from "lucide-react";

const scheduleSlots = [
  { time: "09:30", label: "Skin analysis", room: "Suite A" },
  { time: "11:15", label: "Injectables", room: "Suite C" },
  { time: "14:00", label: "Laser reset", room: "Suite B" }
];

const rosters = [
  { name: "Aesthetic Lead", load: "4 consults", status: "Active" },
  { name: "Nurse Injector", load: "6 consults", status: "Ready" },
  { name: "Laser Specialist", load: "2 consults", status: "Protected" }
];

const vaultRows = ["Medical consent", "Pre-treatment photos", "Membership eligibility", "Payment authorization"];

function TelemetryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-300">
      <span className="h-2 w-2 animate-pulse rounded-full bg-[#22d3ee] shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
      {label}
    </span>
  );
}

function SchedulerWidget() {
  const [selected, setSelected] = useState(1);
  const activeSlot = scheduleSlots[selected];

  return (
    <div className="rounded-2xl border border-white/10 bg-black/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-200">Schedule lock</p>
          <p className="mt-2 text-lg font-bold text-white">{activeSlot.label}</p>
        </div>
        <CalendarDays className="h-6 w-6 text-cyan-200" />
      </div>
      <div className="mt-5 grid gap-3">
        {scheduleSlots.map((slot, index) => (
          <button
            key={slot.time}
            type="button"
            onClick={() => setSelected(index)}
            className={`grid grid-cols-[4.5rem_1fr_auto] items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
              selected === index
                ? "border-cyan-300/40 bg-cyan-300/10 shadow-[0_0_28px_rgba(34,211,238,0.16)]"
                : "border-white/10 bg-zinc-950/70 hover:border-white/20"
            }`}
          >
            <span className="font-mono text-xs font-bold text-cyan-100">{slot.time}</span>
            <span className="text-sm font-semibold text-white">{slot.label}</span>
            <span className="text-xs text-zinc-500">{slot.room}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function VaultToggleRows() {
  const [verified, setVerified] = useState<Record<string, boolean>>({
    "Medical consent": false,
    "Pre-treatment photos": true,
    "Membership eligibility": false,
    "Payment authorization": true
  });

  const pendingCount = useMemo(() => vaultRows.filter((row) => !verified[row]).length, [verified]);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500">Vault state</p>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-zinc-300">
          {pendingCount} Pending Review
        </span>
      </div>
      <div className="mt-5 space-y-3">
        {vaultRows.map((row) => {
          const isVerified = verified[row];

          return (
            <button
              key={row}
              type="button"
              onClick={() => setVerified((current) => ({ ...current, [row]: !current[row] }))}
              className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-left transition-all hover:border-cyan-300/30"
            >
              <span className="text-sm font-semibold text-white">{row}</span>
              <span
                className={`rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                  isVerified
                    ? "bg-emerald-300/10 text-emerald-200"
                    : "bg-fuchsia-300/10 text-fuchsia-200 group-hover:bg-cyan-300/10 group-hover:text-cyan-200"
                }`}
              >
                {isVerified ? "Verified Secure" : "Pending"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function BookingCorePreviewPage() {
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
          <TelemetryBadge label="Lumina live terminal" />
        </div>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0d12]/90 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.62)] backdrop-blur-md sm:p-8">
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-cyan-200">Studio Control</p>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
                Lumina Wellness Portal
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
                Ultra-luxury aesthetics clinic terminal for intake manifests, practitioner routing, consent verification,
                and protected client booking intelligence.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["84 active profiles", "12 elite providers", "0 exposed records"].map((metric) => (
                <div key={metric} className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">Metric</p>
                  <p className="mt-2 text-sm font-bold text-white">{metric}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-10 grid gap-6 lg:grid-cols-2">
            <article className="grid gap-6 rounded-3xl border border-cyan-300/15 bg-white/[0.035] p-6 backdrop-blur-md xl:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">Intake Manifest Engine</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">84 active electronic health profiles</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Pre-visit records, service eligibility, allergies, notes, and membership requirements resolve before
                  clients ever enter the studio.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["HIPAA-aware intake", "Smart schedule guard", "Photo vault"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-xs text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <SchedulerWidget />
            </article>

            <article className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-md xl:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-fuchsia-200">Tiered Practitioner Rosters</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">12 elite providers scheduled</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Route each request to the correct practitioner tier while protecting premium provider capacity.
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md">
                {rosters.map((roster) => (
                  <div key={roster.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-950/75 px-4 py-3">
                    <div>
                      <p className="text-sm font-bold text-white">{roster.name}</p>
                      <p className="mt-1 text-xs text-zinc-500">{roster.load}</p>
                    </div>
                    <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                      {roster.status}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <section className="relative z-10 mt-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-cyan-200">Vibe Check</p>
            <article className="mt-4 grid gap-6 rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-md lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-cyan-200" />
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">Live Consultation Vault</p>
                </div>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">0 Pending Review</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Touch any row to simulate a vault verification handoff. The interface stays local, fast, and client-safe.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white">
                  <Sparkles className="h-4 w-4 text-cyan-200" />
                  Protected handoff ready
                </div>
              </div>
              <VaultToggleRows />
            </article>
          </section>
        </section>
      </div>
    </main>
  );
}
