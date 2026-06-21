"use client";

import { ArrowLeft, CheckCircle2, ChevronRight, Database, Gauge, Layers3, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import type { FrameworkPreview as FrameworkPreviewData } from "@/lib/framework-previews";

const accentStyles = {
  cyan: {
    text: "text-slate-200",
    border: "border-zinc-700/60",
    background: "bg-zinc-900/70",
    gradient: "from-zinc-700 via-zinc-800 to-black",
    glow: "bg-black/60"
  },
  emerald: {
    text: "text-slate-200",
    border: "border-zinc-700/60",
    background: "bg-zinc-900/70",
    gradient: "from-zinc-700 via-zinc-800 to-black",
    glow: "bg-black/60"
  },
  violet: {
    text: "text-slate-200",
    border: "border-zinc-700/60",
    background: "bg-zinc-900/70",
    gradient: "from-zinc-700 via-zinc-800 to-black",
    glow: "bg-black/60"
  },
  fuchsia: {
    text: "text-slate-200",
    border: "border-zinc-700/60",
    background: "bg-zinc-900/70",
    gradient: "from-zinc-700 via-zinc-800 to-black",
    glow: "bg-black/60"
  }
} as const;

export function FrameworkPreview({ framework }: { framework: FrameworkPreviewData }) {
  const [activeMode, setActiveMode] = useState(framework.modes[0].id);
  const mode = framework.modes.find((entry) => entry.id === activeMode) ?? framework.modes[0];
  const accent = accentStyles[framework.accent];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050508] pt-8 text-white" style={{ backgroundColor: "#050508" }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.7) 1px,transparent 1px)",
          backgroundSize: "42px 42px"
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-zinc-950/70 to-black" />

      <div className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800/60 bg-[#090a0f]/90 py-2 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 backdrop-blur-xl">
        Framework Baseline Model // Total Creative &amp; Workflow Sovereignty Vested to Client
      </div>

      <main className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-800/60 bg-black/40 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl transition hover:border-zinc-700 hover:text-white"
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
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#090a0f] p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-zinc-700">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-zinc-950/80 to-black" />
              <div className="relative z-10">
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
                    <div key={index} className="rounded-xl border border-zinc-800/60 bg-black/40 p-4 backdrop-blur-xl">
                      <Icon className="h-4 w-4 text-slate-300" />
                      <div className="mt-4 h-1.5 w-3/4 rounded-full bg-white/10" />
                      <div className="mt-2 h-1 w-1/2 rounded-full bg-white/[0.05]" />
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-zinc-800/60 bg-zinc-950/60 p-5 backdrop-blur-xl">
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
                        className="grid gap-3 rounded-xl border border-zinc-800/60 bg-black/40 p-4 backdrop-blur-xl sm:grid-cols-[1fr_auto] sm:items-center"
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
          </div>
        </section>

        <section className="relative mt-20 overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#090a0f] p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-zinc-700">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-zinc-950/80 to-black" />
          <div className="relative z-10">
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
                className={`mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${accent.gradient} px-6 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition hover:brightness-110`}
              >
                Configure this framework
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}
