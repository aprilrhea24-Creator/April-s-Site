"use client";

import { ArrowLeft, CheckCircle2, ChevronRight, Database, Gauge, Layers3, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import type { FrameworkPreview as FrameworkPreviewData } from "@/lib/framework-previews";

const accentStyles = {
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-400/30",
    background: "bg-cyan-400/10",
    gradient: "from-cyan-300 via-blue-500 to-violet-600",
    glow: "bg-cyan-500/20"
  },
  emerald: {
    text: "text-emerald-300",
    border: "border-emerald-400/30",
    background: "bg-emerald-400/10",
    gradient: "from-emerald-300 via-teal-500 to-cyan-700",
    glow: "bg-emerald-500/20"
  },
  violet: {
    text: "text-violet-300",
    border: "border-violet-400/30",
    background: "bg-violet-400/10",
    gradient: "from-violet-300 via-indigo-500 to-blue-700",
    glow: "bg-violet-500/20"
  },
  fuchsia: {
    text: "text-fuchsia-300",
    border: "border-fuchsia-400/30",
    background: "bg-fuchsia-400/10",
    gradient: "from-fuchsia-300 via-purple-500 to-indigo-700",
    glow: "bg-fuchsia-500/20"
  }
} as const;

export function FrameworkPreview({ framework }: { framework: FrameworkPreviewData }) {
  const [activeMode, setActiveMode] = useState(framework.modes[0].id);
  const mode = framework.modes.find((entry) => entry.id === activeMode) ?? framework.modes[0];
  const accent = accentStyles[framework.accent];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] pt-8 text-white" style={{ backgroundColor: "#030712" }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.7) 1px,transparent 1px)",
          backgroundSize: "42px 42px"
        }}
      />
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        style={{ backgroundColor: "rgba(6,182,212,0.2)" }}
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl"
        style={{ backgroundColor: "rgba(217,70,239,0.2)" }}
      />

      <div className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-cyan-950/20 py-2 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400 backdrop-blur-xl">
        Framework Baseline Model // Total Creative &amp; Workflow Sovereignty Vested to Client
      </div>

      <main className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl transition hover:border-cyan-400/30 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Stratum Solutions
        </Link>

        <section className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className={`font-mono text-xs uppercase tracking-[0.28em] ${accent.text}`}>{framework.eyebrow}</p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-600">{framework.tier}</p>
            <h1 className="mt-5 max-w-2xl font-serif text-5xl font-semibold leading-[1.03] text-white sm:text-6xl">
              {framework.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">{framework.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {framework.modes.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => setActiveMode(entry.id)}
                  className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-all ${
                    activeMode === entry.id
                      ? `${accent.border} ${accent.background} ${accent.text}`
                      : "border-white/10 bg-white/[0.03] text-zinc-500 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {entry.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className={`absolute inset-10 rounded-full ${accent.glow} blur-3xl`} />
            <div className="relative rounded-2xl border border-white/10 bg-zinc-950/60 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-cyan-500/30">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">{framework.niche}</p>
                  <h2 className="mt-2 text-xl font-bold text-white">{framework.dashboardTitle}</h2>
                </div>
                <span className={`inline-flex items-center gap-2 rounded-full border ${accent.border} ${accent.background} px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] ${accent.text}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
                  Command active
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-[0.34fr_0.66fr]">
                <div className="space-y-3">
                  {[Layers3, ShieldCheck, Database].map((Icon, index) => (
                    <div key={index} className="rounded-xl border border-white/[0.07] bg-black/30 p-4">
                      <Icon className={`h-4 w-4 ${index === 1 ? "text-emerald-300" : accent.text}`} />
                      <div className="mt-4 h-1.5 w-3/4 rounded-full bg-white/10" />
                      <div className="mt-2 h-1 w-1/2 rounded-full bg-white/[0.05]" />
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-black/30 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">Active logic surface</p>
                      <h3 className="mt-2 text-lg font-bold text-white">{mode.title}</h3>
                    </div>
                    <Gauge className={`h-5 w-5 ${accent.text}`} />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{mode.description}</p>
                  <div className="mt-5 space-y-3">
                    {mode.routes.map((route) => (
                      <div
                        key={route.name}
                        className="grid gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 sm:grid-cols-[1fr_auto] sm:items-center"
                      >
                        <div>
                          <p className="text-sm font-semibold text-white">{route.name}</p>
                          <p className="mt-1 text-xs leading-5 text-zinc-500">{route.detail}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] ${accent.text}`}>
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          {route.state}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-2xl border border-white/10 bg-zinc-950/60 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-cyan-500/30">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className={`font-mono text-xs uppercase tracking-[0.26em] ${accent.text}`}>Bespoke Logic Routing</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white">
                The baseline bends around the operation.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-zinc-300">
                I dive into your brand&apos;s specific creative direction to nail the exact image and workflow required for
                optimal conversion.
              </p>
              <Link
                href="/consultation"
                className={`mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${accent.gradient} px-6 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(34,211,238,0.12)] transition hover:brightness-110`}
              >
                Configure this framework
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
