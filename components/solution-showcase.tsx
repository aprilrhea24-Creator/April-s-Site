import type { CSSProperties } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  CircleDollarSign,
  Dumbbell,
  Fingerprint,
  Layers3,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
  Zap
} from "lucide-react";

const capitalStats = [
  { value: "220+", label: "High-Stakes Operations" },
  { value: "99.8%", label: "Decision Accuracy" },
  { value: "$42M", label: "Protected Pipeline" }
];

const kinetixSignals = [
  { label: "Power output", value: "92%", width: "92%" },
  { label: "Weekly velocity", value: "+18.4", width: "78%" },
  { label: "Recovery index", value: "Optimal", width: "86%" }
];

const protocolActions = ["Acquire", "Transfer", "Monitor"];

function PreviewController({
  href,
  colors
}: {
  href: string;
  colors: string;
}) {
  return (
    <span className="preview-ring inline-flex rounded-full p-px" style={{ "--preview-ring": colors } as CSSProperties}>
      <Link
        href={href}
        className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-white shadow-[0_0_18px_rgba(255,255,255,0.08)] transition hover:brightness-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        style={{ background: colors }}
      >
        Preview Live Style
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </span>
  );
}

export function SolutionShowcase() {
  return (
    <section className="mt-14 space-y-10" aria-label="Stratum live framework previews">
      <article className="relative isolate overflow-hidden rounded-lg border border-[#D4AF37]/30 bg-[#080b10] shadow-[0_36px_120px_rgba(0,0,0,0.68)]">
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D4AF37]/15 blur-[90px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-[#D4AF37] via-[#D4AF37]/35 to-transparent" />
        <div className="grid gap-8 p-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative z-10 flex flex-col gap-8">
            <div>
              <span className="inline-flex border border-[#D4AF37]/25 bg-[#D4AF37]/5 px-3 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#e5c75f]">
                Next.js + Tailwind
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#e5c75f]">
              <Building2 className="h-5 w-5" />
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em]">Stratum Capital</p>
            </div>
            <div>
              <h2 className="font-sans text-4xl font-extrabold leading-tight tracking-tight text-white">
                Uncompromising Strategy. Absolute Dedication.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Complete elite design handoff, interactive onboarding forms, and high-security client intake routing.
              </p>
            </div>
            <div className="border-l border-[#D4AF37]/40 pl-4">
              <p className="text-sm text-zinc-400">Investment</p>
              <p className="mt-1 text-2xl font-extrabold text-white">From $3,500</p>
            </div>
            <div className="grid grid-cols-3 gap-3 border-y border-[#D4AF37]/15 py-5">
              {capitalStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-sans text-xl font-extrabold leading-tight tracking-tight text-white">{stat.value}</p>
                  <p className="mt-1 text-[0.68rem] leading-4 text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <PreviewController
                href="/packages/premium-restaurant"
                colors="linear-gradient(90deg,#7c5f13,#D4AF37,#f7e7a3,#D4AF37)"
              />
            </div>
          </div>

          <div className="relative z-10 border border-[#D4AF37]/20 bg-[#05070a]/90 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#d4af37]">Executive mandate</p>
                <p className="mt-1 font-bold text-white">Strategic Operations Console</p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]" />
                Secured
              </span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="border border-white/10 bg-white/[0.025] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-white">Opportunity command</p>
                  <TrendingUp className="h-4 w-4 text-[#d4af37]" />
                </div>
                <div className="mt-5 flex h-36 items-end gap-2">
                  {[38, 52, 44, 76, 62, 88, 96].map((height, index) => (
                    <div key={`${height}-${index}`} className="flex-1 bg-gradient-to-t from-[#705817] to-[#e2c457]" style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-[0.65rem] uppercase tracking-[0.14em] text-slate-600">
                  <span>Pipeline</span>
                  <span>Q4 mandate</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border border-white/10 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Private briefing</p>
                  <div className="mt-4 space-y-3">
                    <div className="h-10 border border-white/10 bg-white/[0.035] px-3 text-xs leading-10 text-slate-500">Principal name</div>
                    <div className="h-10 border border-white/10 bg-white/[0.035] px-3 text-xs leading-10 text-slate-500">Capital objective</div>
                    <button className="flex h-10 w-full items-center justify-center bg-[#D4AF37] text-xs font-bold text-black">
                      Request confidential review
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-[#D4AF37]/15 bg-[#D4AF37]/5 p-3">
                    <ShieldCheck className="h-4 w-4 text-[#d4af37]" />
                    <p className="mt-3 text-xs font-bold text-white">Risk controls</p>
                  </div>
                  <div className="border border-[#D4AF37]/15 bg-[#D4AF37]/5 p-3">
                    <CircleDollarSign className="h-4 w-4 text-[#d4af37]" />
                    <p className="mt-3 text-xs font-bold text-white">Capital clarity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="relative isolate overflow-hidden rounded-lg border border-orange-500/30 bg-[#080706] shadow-[0_36px_120px_rgba(0,0,0,0.7)]">
        <div className="pointer-events-none absolute -right-20 top-16 h-96 w-96 rounded-full bg-orange-500/25 blur-[100px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-red-700/25 blur-[90px]" />
        <div className="grid gap-8 p-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative z-10 flex flex-col gap-8">
            <div>
              <span className="inline-flex border border-orange-400/25 bg-orange-500/5 px-3 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-orange-300">
                React + Node.js
              </span>
            </div>
            <div className="flex items-center gap-3 text-orange-400">
              <Dumbbell className="h-5 w-5" />
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em]">Stratum Kinetix</p>
            </div>
            <div>
              <h2 className="font-sans text-5xl font-extrabold leading-[0.94] tracking-tight text-white sm:text-6xl">
                <span className="block">TRAIN HARDER.</span>
                <span className="block text-orange-500">MOVE FASTER.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                Performance membership portal, live class scheduling, athlete progress analytics, and recurring subscription flows.
              </p>
            </div>
            <div className="border-l border-orange-500/50 pl-4">
              <p className="text-sm text-zinc-400">Investment</p>
              <p className="mt-1 text-2xl font-extrabold text-white">From $4,800</p>
            </div>
            <div className="mt-auto">
              <PreviewController
                href="/solutions/flow-automation/preview"
                colors="linear-gradient(90deg,#7f1d1d,#ff3d00,#ff8a00,#dc2626)"
              />
            </div>
          </div>

          <div className="relative z-10 grid min-h-[430px] gap-4 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden border border-orange-500/20 bg-[linear-gradient(155deg,#15100d,#060606)] p-5">
              <div className="absolute -right-14 top-16 h-52 w-52 rotate-12 border border-orange-400/30 bg-gradient-to-br from-orange-500/25 to-red-800/10 shadow-[0_0_45px_rgba(249,115,22,0.22)]">
                <div className="absolute inset-5 border border-white/10 bg-black/50" />
                <Zap className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-orange-400" />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-orange-300">Carbon series / 07</p>
              <p className="mt-3 max-w-40 font-sans text-2xl font-extrabold leading-tight tracking-tight text-white">
                Built for measurable momentum.
              </p>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs text-slate-500">Asset frame active</span>
                <Sparkles className="h-4 w-4 text-orange-400" />
              </div>
            </div>
            <div className="border border-white/10 bg-black/70 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-red-300">Performance stream</p>
                  <p className="mt-1 font-bold text-white">Live athlete telemetry</p>
                </div>
                <BarChart3 className="h-5 w-5 text-orange-400" />
              </div>
              <div className="mt-7 space-y-5">
                {kinetixSignals.map((signal) => (
                  <div key={signal.label}>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">{signal.label}</span>
                      <span className="font-bold text-white">{signal.value}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden bg-white/5">
                      <div
                        className="kinetix-data-stream h-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-300"
                        style={{ width: signal.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="border border-white/10 bg-white/[0.035] p-3">
                  <p className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-500">Next class</p>
                  <p className="mt-2 text-sm font-bold text-white">Velocity Lab</p>
                  <p className="mt-1 text-xs text-orange-300">18:30 / 4 spots</p>
                </div>
                <div className="border border-white/10 bg-white/[0.035] p-3">
                  <p className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-500">Membership</p>
                  <p className="mt-2 text-sm font-bold text-white">Apex Unlimited</p>
                  <p className="mt-1 text-xs text-emerald-300">Active</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
                Loading current performance state
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="relative isolate overflow-hidden rounded-lg border border-[rgba(34,211,238,0.25)] bg-[#03040a] shadow-[0_36px_120px_rgba(0,0,0,0.72)]">
        <div className="pointer-events-none absolute left-1/3 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_24px_rgba(34,211,238,0.8)]" />
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/25 blur-[100px]" />
        <div className="grid gap-8 p-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative z-10 flex flex-col gap-8">
            <div>
              <span className="inline-flex border border-cyan-300/20 bg-cyan-300/5 px-3 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cyan-200">
                Mobile-First Svelte
              </span>
            </div>
            <div className="flex items-center gap-3 text-cyan-300">
              <Fingerprint className="h-5 w-5" />
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em]">Stratum Protocol</p>
            </div>
            <div>
              <h2 className="font-sans text-4xl font-extrabold leading-tight tracking-tight text-white">
                The Future of Blue Chip Exposure
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Responsive asset dashboard, secure portfolio actions, mobile account controls, and real-time allocation visibility.
              </p>
            </div>
            <div className="border-l border-cyan-300/40 pl-4">
              <p className="text-sm text-zinc-400">Investment</p>
              <p className="mt-1 text-2xl font-extrabold text-white">From $6,500</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Verified access", "Live allocation", "Secure custody"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 border border-cyan-300/15 bg-cyan-300/5 px-3 py-2 text-xs text-cyan-100">
                  <Check className="h-3.5 w-3.5" />
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-auto">
              <PreviewController
                href="/solutions/enterprise-matrix/preview"
                colors="linear-gradient(90deg,#00F2FE,#168BFF,#A800FF,#00F2FE)"
              />
            </div>
          </div>

          <div className="relative z-10 grid items-center gap-5 md:grid-cols-[1fr_210px]">
            <div className="relative min-h-[420px] overflow-hidden border border-cyan-300/20 bg-[linear-gradient(145deg,rgba(3,12,27,0.96),rgba(8,5,24,0.95))] p-5">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-cyan-300/30 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/20 shadow-[0_0_65px_rgba(37,99,235,0.28)]">
                <div className="absolute inset-8 border border-purple-300/30 bg-black/35" />
                <Layers3 className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-cyan-200" />
              </div>
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Protocol index</p>
                  <p className="mt-2 text-3xl font-extrabold text-white">STRM / 84.26</p>
                </div>
                <WalletCards className="h-6 w-6 text-purple-300" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                {[
                  ["Exposure", "64.8%"],
                  ["Yield", "12.4%"],
                  ["Risk", "Low"]
                ].map(([label, value]) => (
                  <div key={label} className="border border-white/10 bg-black/45 p-3 backdrop-blur-xl">
                    <p className="text-[0.62rem] uppercase tracking-[0.14em] text-slate-500">{label}</p>
                    <p className="mt-2 text-sm font-bold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto w-[220px] rounded-[2rem] border border-cyan-200/35 bg-black p-2 shadow-[0_0_55px_rgba(34,211,238,0.24)]">
              <div className="min-h-[410px] overflow-hidden rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,#071426,#090414)] p-4">
                <div className="mx-auto h-1.5 w-14 rounded-full bg-white/15" />
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.15em] text-cyan-300">Portfolio</p>
                    <p className="mt-1 text-lg font-extrabold text-white">$284.9K</p>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/15">
                    <Fingerprint className="h-4 w-4 text-purple-200" />
                  </div>
                </div>
                <div className="mt-5 h-28 border border-cyan-300/15 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 p-3">
                  <div className="flex h-full items-end gap-1">
                    {[28, 46, 38, 64, 58, 82, 74, 94].map((height, index) => (
                      <span key={`${height}-${index}`} className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-300" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-1.5">
                  {protocolActions.map((action, index) => (
                    <button
                      key={action}
                      className={`min-h-14 border px-1 text-[0.62rem] font-bold ${
                        index === 0
                          ? "border-cyan-200/40 bg-cyan-300 text-slate-950"
                          : "border-white/10 bg-white/5 text-white"
                      }`}
                    >
                      {action}
                    </button>
                  ))}
                </div>
                <div className="mt-5 space-y-2">
                  {[
                    ["Protocol Core", "+8.2%"],
                    ["Blue Index", "+3.7%"]
                  ].map(([name, change]) => (
                    <div key={name} className="flex items-center justify-between border-b border-white/10 py-2 text-xs">
                      <span className="text-slate-300">{name}</span>
                      <span className="text-emerald-300">{change}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
