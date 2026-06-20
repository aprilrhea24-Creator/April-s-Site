import Link from "next/link";
import { ArrowUpRight, CalendarDays, ChartNoAxesCombined, Check, Database, ShieldCheck } from "lucide-react";

import { packages } from "@/lib/packages";

const showcaseModules = [
  {
    slug: "premium-restaurant",
    preview: "booking-core",
    format: "desktop",
    code: "SBK-01",
    system: "Allocation intelligence",
    accent: "cyan",
    metric: "Routed",
    metricLabel: "Capacity allocation state"
  },
  {
    slug: "field-team-command",
    preview: "flow-automation",
    format: "mobile",
    code: "SFA-02",
    system: "Dispatch automation",
    accent: "emerald",
    metric: "Active",
    metricLabel: "Controlled work queue state"
  },
  {
    slug: "enterprise-booking",
    preview: "enterprise-matrix",
    format: "mobile",
    code: "SEM-03",
    system: "Enterprise orchestration",
    accent: "violet",
    metric: "Synced",
    metricLabel: "Cross-market capacity state"
  },
  {
    slug: "founder-saas",
    preview: "platform-suite",
    format: "desktop",
    code: "SPS-04",
    system: "Platform infrastructure",
    accent: "fuchsia",
    metric: "Isolated",
    metricLabel: "Tenant boundary state"
  }
] as const;

const accentStyles = {
  cyan: {
    glow: "bg-cyan-500/20",
    border: "border-cyan-400/30",
    text: "text-cyan-300",
    fill: "from-cyan-400 to-blue-600"
  },
  emerald: {
    glow: "bg-emerald-500/20",
    border: "border-emerald-400/30",
    text: "text-emerald-300",
    fill: "from-emerald-300 to-teal-600"
  },
  violet: {
    glow: "bg-violet-500/20",
    border: "border-violet-400/30",
    text: "text-violet-300",
    fill: "from-violet-300 to-indigo-600"
  },
  fuchsia: {
    glow: "bg-fuchsia-500/20",
    border: "border-fuchsia-400/30",
    text: "text-fuchsia-300",
    fill: "from-fuchsia-300 to-purple-700"
  }
} as const;

function DesktopFrame({
  title,
  metric,
  metricLabel,
  accent
}: {
  title: string;
  metric: string;
  metricLabel: string;
  accent: keyof typeof accentStyles;
}) {
  const styles = accentStyles[accent];

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#08080a]">
      <div className={`absolute left-1/2 top-1/2 h-48 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full ${styles.glow} blur-[80px]`} />
      <div className="absolute inset-x-[7%] bottom-[12%] top-[9%] rounded-xl border border-white/10 bg-[#030407] p-2 shadow-[0_30px_70px_rgba(0,0,0,0.72)]">
        <div className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,#0d121d,#050609)]">
          <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/70" />
            <span className="ml-3 font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-600">Stratum / secure console</span>
          </div>
          <div className="grid h-[calc(100%-2rem)] grid-cols-[0.28fr_0.72fr]">
            <div className="border-r border-white/[0.06] p-3">
              <div className={`h-6 w-6 rounded-md border ${styles.border} bg-white/[0.04]`} />
              <div className="mt-5 space-y-2">
                {[68, 82, 52, 74].map((width) => (
                  <div key={width} className="h-1.5 rounded-full bg-white/[0.07]" style={{ width: `${width}%` }} />
                ))}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">{title}</p>
                  <p className="mt-1 text-xs font-bold text-white">Operational command</p>
                </div>
                <span className={`rounded-full border ${styles.border} bg-black/40 px-2 py-1 font-mono text-[7px] uppercase ${styles.text}`}>
                  Live
                </span>
              </div>
              <div className="mt-4 grid grid-cols-[0.62fr_0.38fr] gap-3">
                <div className="rounded-lg border border-white/[0.07] bg-black/30 p-3">
                  <div className="flex h-20 items-end gap-1.5">
                    {[42, 68, 54, 82, 64, 94, 78].map((height, index) => (
                      <span
                        key={`${height}-${index}`}
                        className={`flex-1 rounded-t-sm bg-gradient-to-t ${styles.fill}`}
                        style={{ height: `${height}%`, opacity: 0.45 + index * 0.07 }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] p-3">
                  <p className={`text-lg font-bold ${styles.text}`}>{metric}</p>
                  <p className="mt-1 text-[8px] leading-3 text-zinc-500">{metricLabel}</p>
                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.08]">
                    <div className={`h-full w-4/5 bg-gradient-to-r ${styles.fill}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[7%] left-1/2 h-[5%] w-[20%] -translate-x-1/2 rounded-b-lg bg-gradient-to-b from-zinc-700 to-zinc-950" />
      <div className="absolute bottom-[5%] left-1/2 h-[2%] w-[34%] -translate-x-1/2 rounded-full bg-zinc-800 shadow-[0_8px_16px_rgba(0,0,0,0.7)]" />
    </div>
  );
}

function MobileFrame({
  title,
  metric,
  metricLabel,
  accent
}: {
  title: string;
  metric: string;
  metricLabel: string;
  accent: keyof typeof accentStyles;
}) {
  const styles = accentStyles[accent];

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#08080a]">
      <div className={`absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full ${styles.glow} blur-[75px]`} />
      <div className="absolute left-1/2 top-1/2 h-[86%] w-[36%] min-w-[142px] max-w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/15 bg-black p-1.5 shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
        <div className="relative h-full overflow-hidden rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,#0d1420,#050509)] px-3 pb-3 pt-5">
          <div className="absolute left-1/2 top-2 h-1 w-10 -translate-x-1/2 rounded-full bg-white/15" />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-600">{title}</p>
              <p className="mt-1 text-[10px] font-bold text-white">Mobile command</p>
            </div>
            <ShieldCheck className={`h-3.5 w-3.5 ${styles.text}`} />
          </div>
          <div className={`mt-3 rounded-xl border ${styles.border} bg-white/[0.035] p-3`}>
            <p className={`text-xl font-bold ${styles.text}`}>{metric}</p>
            <p className="mt-1 text-[8px] text-zinc-500">{metricLabel}</p>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.08]">
              <div className={`h-full w-4/5 bg-gradient-to-r ${styles.fill}`} />
            </div>
          </div>
          <div className="mt-3 space-y-2">
            {[CalendarDays, Database, ChartNoAxesCombined].map((Icon, index) => (
              <div key={index} className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-black/25 p-2">
                <div className={`flex h-6 w-6 items-center justify-center rounded-md border ${styles.border} bg-white/[0.03]`}>
                  <Icon className={`h-3 w-3 ${styles.text}`} />
                </div>
                <div className="flex-1">
                  <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
                  <div className="mt-1.5 h-1 w-1/2 rounded-full bg-white/[0.05]" />
                </div>
                <Check className="h-3 w-3 text-emerald-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShowcaseGrid() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2">
      {showcaseModules.map((module, index) => {
        const item = packages.find((entry) => entry.slug === module.slug);

        if (!item) {
          return null;
        }

        return (
          <article
            key={item.slug}
            className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/20 transition-all duration-500 hover:border-cyan-500/30 ${
              index % 2 === 1 ? "lg:translate-y-12" : ""
            }`}
          >
            {module.format === "desktop" ? (
              <DesktopFrame
                title={item.title}
                metric={module.metric}
                metricLabel={module.metricLabel}
                accent={module.accent}
              />
            ) : (
              <MobileFrame
                title={item.title}
                metric={module.metric}
                metricLabel={module.metricLabel}
                accent={module.accent}
              />
            )}

            <div className="border-t border-white/5 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
                <span>{module.code}</span>
                <span>{module.format} system</span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-5">
                <div>
                  <p className={`font-mono text-xs uppercase tracking-widest ${accentStyles[module.accent].text}`}>
                    {module.system}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
                </div>
                <Link
                  href={`/solutions/${module.preview}/preview`}
                  aria-label={`Preview ${item.title}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-200"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.summary}</p>
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/5 pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">Investment architecture</span>
                <span className="text-lg font-bold text-white">From {item.price.startingAt}</span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
