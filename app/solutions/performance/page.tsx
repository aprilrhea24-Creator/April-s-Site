"use client";

import { ArrowLeft, Check, Flame, Timer, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const classes = [
  { time: "06:00", name: "Velocity HIIT", coach: "Mara", intensity: "Elite" },
  { time: "09:30", name: "Power Circuit", coach: "Jax", intensity: "Strong" },
  { time: "17:45", name: "Neon Ride", coach: "Ari", intensity: "High" },
  { time: "19:15", name: "Recovery Flow", coach: "Noa", intensity: "Reset" }
];

const tiers = [
  { name: "Core", price: "$39", detail: "8 sessions monthly" },
  { name: "Velocity", price: "$79", detail: "Unlimited classes" },
  { name: "Apex", price: "$129", detail: "Unlimited plus coaching" }
];

export default function PerformancePreviewPage() {
  const [selectedClass, setSelectedClass] = useState(classes[0].name);
  const [selectedTier, setSelectedTier] = useState(tiers[1].name);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08070d]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_8%,rgba(244,63,94,0.34),transparent_24%),radial-gradient(circle_at_18%_40%,rgba(217,70,239,0.18),transparent_25%),linear-gradient(180deg,#08070d_0%,#170711_48%,#07070c_100%)]" />

      <Link
        href="/solutions"
        className="fixed left-4 top-20 z-40 inline-flex items-center gap-2 rounded-full border border-rose-200/20 bg-[rgba(28,8,18,0.78)] px-4 py-2.5 text-sm font-semibold text-rose-50 shadow-lg backdrop-blur-xl hover:bg-rose-300/10 sm:left-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Stratum Solutions
      </Link>

      <main className="relative mx-auto max-w-7xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.28em] text-rose-300">
              <Flame className="h-5 w-5" />
              Kinetix Systems
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold uppercase leading-[0.9] text-white sm:text-7xl">
              Train harder. Move faster. Own every metric.
            </h1>
          </div>
          <div className="glass-panel rounded-[2rem] border-rose-300/20 bg-rose-400/[0.08] p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Weekly output</span>
              <Zap className="h-5 w-5 text-rose-300" />
            </div>
            <p className="mt-4 text-5xl font-extrabold text-white">84%</p>
            <div className="mt-5 h-2 rounded-full bg-white/10">
              <div className="h-2 w-[84%] rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-400" />
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-rose-300">Class schedule calendar</p>
                <h2 className="mt-3 text-3xl font-extrabold text-white">Today&apos;s training grid</h2>
              </div>
              <Timer className="h-7 w-7 text-fuchsia-300" />
            </div>
            <div className="mt-7 grid gap-3">
              {classes.map((item) => {
                const selected = item.name === selectedClass;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setSelectedClass(item.name)}
                    className={`grid grid-cols-[4rem_1fr_auto] items-center gap-4 rounded-2xl border p-4 text-left ${
                      selected
                        ? "border-rose-300/45 bg-rose-400/15"
                        : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                    }`}
                  >
                    <span className="font-bold text-rose-200">{item.time}</span>
                    <span>
                      <span className="block font-bold text-white">{item.name}</span>
                      <span className="mt-1 block text-xs text-slate-400">Coach {item.coach}</span>
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-200">
                      {item.intensity}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-fuchsia-300">Subscription tiers</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white">Choose your pace</h2>
            <div className="mt-7 space-y-3">
              {tiers.map((tier) => {
                const selected = selectedTier === tier.name;
                return (
                  <button
                    key={tier.name}
                    type="button"
                    onClick={() => setSelectedTier(tier.name)}
                    className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left ${
                      selected
                        ? "border-fuchsia-300/50 bg-gradient-to-r from-rose-500/20 to-fuchsia-500/15"
                        : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                    }`}
                  >
                    <span>
                      <span className="block text-lg font-extrabold text-white">{tier.name}</span>
                      <span className="mt-1 block text-sm text-slate-400">{tier.detail}</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="text-xl font-extrabold text-rose-200">{tier.price}</span>
                      {selected ? <Check className="h-5 w-5 text-fuchsia-200" /> : null}
                    </span>
                  </button>
                );
              })}
            </div>
            <button className="mt-6 w-full rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-500 px-6 py-3 font-extrabold text-white hover:brightness-110">
              Activate {selectedTier}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
