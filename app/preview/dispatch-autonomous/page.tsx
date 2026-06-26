"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, MapPinned, PackageCheck, Plane, RadioTower, Truck } from "lucide-react";

const routeSteps = [
  { label: "Hangar pickup", detail: "Asset sealed", icon: Plane },
  { label: "Ground transfer", detail: "Driver synced", icon: Truck },
  { label: "Private handoff", detail: "Client confirmed", icon: PackageCheck }
];

const loadParameters = [
  ["Cold-chain variance", "0.7deg"],
  ["Custody scans", "14"],
  ["Route exceptions", "0"],
  ["ETA confidence", "96%"]
];

const velocityBars = [
  { label: "Intake", value: 72 },
  { label: "Route", value: 88 },
  { label: "Load", value: 64 },
  { label: "Transit", value: 94 },
  { label: "Handoff", value: 82 }
];

function TelemetryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-300">
      <span className="h-2 w-2 animate-pulse rounded-full bg-[#22d3ee] shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
      {label}
    </span>
  );
}

function DeliverySequence() {
  const [active, setActive] = useState(1);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-200">Delivery sequence</p>
        <RadioTower className="h-5 w-5 text-cyan-200" />
      </div>
      <div className="mt-5 space-y-3">
        {routeSteps.map((step, index) => {
          const Icon = step.icon;
          const isActive = active === index;

          return (
            <button
              key={step.label}
              type="button"
              onClick={() => setActive(index)}
              className={`grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 rounded-xl border px-4 py-3 text-left transition-all ${
                isActive
                  ? "border-cyan-300/45 bg-cyan-300/10 shadow-[0_0_28px_rgba(34,211,238,0.16)]"
                  : "border-white/10 bg-zinc-950/80 hover:border-white/25"
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/50">
                <Icon className="h-5 w-5 text-cyan-100" />
              </span>
              <span>
                <span className="block text-sm font-bold text-white">{step.label}</span>
                <span className="mt-1 block text-xs text-zinc-500">{step.detail}</span>
              </span>
              <ChevronState active={isActive} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ChevronState({ active }: { active: boolean }) {
  return (
    <span
      className={`flex h-7 w-7 items-center justify-center rounded-full border transition ${
        active ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-200" : "border-white/10 bg-white/[0.03] text-zinc-500"
      }`}
    >
      <Check className="h-4 w-4" />
    </span>
  );
}

function VelocityChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md">
      <div className="flex h-72 items-end gap-4">
        {velocityBars.map((bar) => (
          <div key={bar.label} className="flex h-full flex-1 flex-col justify-end gap-3">
            <div className="relative overflow-hidden rounded-t-xl border border-cyan-300/20 bg-zinc-950/90">
              <div
                className="relative rounded-t-xl bg-gradient-to-t from-cyan-500 via-blue-500 to-fuchsia-400 shadow-[0_0_28px_rgba(34,211,238,0.28)]"
                style={{ height: `${bar.value * 2.2}px` }}
              >
                <span className="absolute left-1/2 top-3 -translate-x-1/2 font-mono text-[10px] font-bold text-white">
                  {bar.value}
                </span>
              </div>
            </div>
            <p className="text-center font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{bar.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DispatchAutonomousPreviewPage() {
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
          <TelemetryBadge label="AeroFreight live command" />
        </div>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0d12]/90 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.62)] backdrop-blur-md sm:p-8">
          <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-cyan-200">Studio Control</p>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
                AeroFreight Private Logistics
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
                White-glove fleet transport command console for private air-ground routing, load-state telemetry,
                custody events, and executive delivery confidence.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["3 active routes", "0 route exceptions", "96% ETA confidence"].map((metric) => (
                <div key={metric} className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">Metric</p>
                  <p className="mt-2 text-sm font-bold text-white">{metric}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-10 grid gap-6 lg:grid-cols-2">
            <article className="grid gap-6 rounded-3xl border border-cyan-300/15 bg-white/[0.035] p-6 backdrop-blur-md xl:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">Autonomous Route Commander</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">3 dynamic air/ground routes active</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Coordinate private pickup windows, runway transfer timing, and white-glove handoff proof from one
                  local visual command flow.
                </p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/45 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Technical log</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    Route BR-27 merged with ground lane 04. Weather buffer held. Custody scan verified.
                  </p>
                </div>
              </div>
              <DeliverySequence />
            </article>

            <article className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-md xl:grid-cols-[0.88fr_1.12fr]">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-fuchsia-200">Real-Time Load Parameters</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">Telemetry synced</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Operational thresholds stay visible across cold-chain, custody, ETA, and priority handling criteria.
                </p>
              </div>
              <div className="grid gap-3 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md sm:grid-cols-2">
                {loadParameters.map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-zinc-950/80 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">{label}</p>
                    <p className="mt-3 text-2xl font-bold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <section className="relative z-10 mt-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-cyan-200">Velocity Vibe Check</p>
            <article className="mt-4 grid gap-6 rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-md lg:grid-cols-[0.76fr_1.24fr]">
              <div>
                <div className="flex items-center gap-3">
                  <MapPinned className="h-6 w-6 text-cyan-200" />
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">Dispatch Workflow Analytics</p>
                </div>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">Package fulfillment velocity</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  High-contrast local CSS vector charting keeps route performance legible without external analytics calls.
                </p>
              </div>
              <VelocityChart />
            </article>
          </section>
        </section>
      </div>
    </main>
  );
}
