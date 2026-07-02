import Link from "next/link";
import {
  CalendarClock,
  ChartSpline,
  SlidersHorizontal,
  ChevronRight,
  BarChart3,
  Cpu,
  ShieldCheck,
  Truck,
  type LucideIcon
} from "lucide-react";

import { BreathingBackground } from "@/components/breathing-background";
import { PackageGrid } from "@/components/package-grid";
import { WhyStratum } from "@/components/why-stratum";

const previewPortals = [
  {
    href: "/solutions/booking-core",
    label: "Lumina Wellness Portal",
    system: "Stratum Booking Core",
    meta: "Aesthetics intake, secure client scheduling, and practitioner roster routing.",
    icon: Cpu,
    tone: "cyan"
  },
  {
    href: "/solutions/secure-console",
    label: "Vanguard Ops Center",
    system: "Secure Console",
    meta: "Enterprise database isolation, payment pipeline governance, and approval queues.",
    icon: ShieldCheck,
    tone: "violet"
  },
  {
    href: "/solutions/dispatch-autonomous",
    label: "AeroFreight Private Logistics",
    system: "Dispatch Autonomous",
    meta: "Private fleet routing, telemetry sync, custody scans, and velocity analytics.",
    icon: Truck,
    tone: "cyan"
  },
  {
    href: "/solutions/global-intelligence",
    label: "Nexus Corp Analytics",
    system: "Global Intelligence",
    meta: "Multi-tenant SaaS infrastructure, cloud logs, and predictive revenue intelligence.",
    icon: BarChart3,
    tone: "violet"
  }
] satisfies Array<{
  href: string;
  label: string;
  system: string;
  meta: string;
  icon: LucideIcon;
  tone: "cyan" | "violet";
}>;

function SolutionCard({ portal }: { portal: (typeof previewPortals)[number] }) {
  const Icon = portal.icon;
  const isCyan = portal.tone === "cyan";
  const accent = isCyan
    ? {
        icon: "border-cyan-300/25 bg-cyan-300/[0.04] text-cyan-300 shadow-[0_0_34px_rgba(34,211,238,0.08)]",
        label: "text-cyan-300/70",
        glow: "bg-cyan-400/10",
        button: "hover:border-cyan-300/35 hover:shadow-[0_0_26px_rgba(34,211,238,0.14)]"
      }
    : {
        icon: "border-violet-300/25 bg-violet-300/[0.04] text-violet-300 shadow-[0_0_34px_rgba(168,85,247,0.08)]",
        label: "text-violet-300/70",
        glow: "bg-violet-500/10",
        button: "hover:border-violet-300/35 hover:shadow-[0_0_26px_rgba(168,85,247,0.14)]"
      };

  return (
    <Link
      href={portal.href}
      className="group relative flex min-h-[23rem] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#121212]/95 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.42)] transition-all duration-500 hover:-translate-y-1 hover:border-white/15"
    >
      <div className={`pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full blur-3xl ${accent.glow}`} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.035),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_55%)]" aria-hidden="true" />

      <div className="relative z-10 flex w-full flex-col">
        <div className="flex items-start justify-between gap-5">
          <span className={`flex h-[4.55rem] w-[4.55rem] items-center justify-center rounded-3xl border ${accent.icon}`}>
            <Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70">
            <ChevronRight className="h-5 w-5 -rotate-45" aria-hidden="true" />
          </span>
        </div>

        <div className="mt-20">
          <p className={`font-mono text-[10px] font-bold uppercase tracking-[0.42em] ${accent.label}`}>{portal.system}</p>
          <h3 className="mt-6 max-w-[18rem] font-sans text-3xl font-extrabold leading-[1.05] tracking-tight text-white">
            {portal.label}
          </h3>
          <p className="mt-6 max-w-[24rem] text-base font-semibold leading-8 text-zinc-500">{portal.meta}</p>
        </div>

        <span
          className={`mt-auto inline-flex w-full items-center justify-between rounded-[1.25rem] border border-white/[0.08] bg-white/[0.055] px-7 py-4 font-mono text-[11px] font-black uppercase tracking-[0.28em] text-white transition-all duration-300 ${accent.button}`}
        >
          View Live Solution
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export default function SolutionsPage() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050505] py-20">
      <BreathingBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Solution showcase</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Stratum product frameworks engineered for distinct markets.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Four command-center frameworks combine distinct operational priorities with specialized workflows, responsive
          interfaces, and conversion systems built for the way each market operates.
        </p>
      </div>

      <div className="mt-12">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Build packages</p>
          <h2 className="mt-3 font-display text-3xl font-bold normal-case leading-snug text-white">
            Choose the operational foundation behind your style.
          </h2>
        </div>
        <PackageGrid />
        <WhyStratum />
      </div>

      <div className="mt-12 rounded-[2rem] border border-zinc-900 bg-[#050508] p-4 sm:p-6">
        <div className="rounded-3xl border border-white/10 bg-[#0c0d12] p-6 backdrop-blur-xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">Live Solution Pages</p>
              <h2 className="mt-3 font-display text-3xl font-bold normal-case leading-snug text-white">
                Landing pages that explain the workflow before the dashboard example.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Each page shows how the framework can be customized around the client&apos;s brand, workflow, and dashboard needs.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#22d3ee] shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
              Local Preview Runtime
            </span>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {previewPortals.map((portal) => (
              <SolutionCard key={portal.href} portal={portal} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden rounded-3xl p-[1px] md:p-[1.5px]">
        <div
          className="feature-dock-border-spinner pointer-events-none absolute inset-[-300%] z-0 animate-[spin_4s_linear_infinite] will-change-transform [transform:translateZ(0)]"
          style={{
            background:
              "conic-gradient(from 30deg, transparent 0deg 205deg, rgba(34,211,238,0.16) 220deg, #22d3ee 242deg, #3b82f6 266deg, #a855f7 296deg, #d946ef 322deg, rgba(217,70,239,0.18) 340deg, transparent 356deg 360deg)"
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 h-full w-full overflow-hidden rounded-[23px] bg-[#0c0d12] backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
            {[
              { icon: SlidersHorizontal, label: "Personalized tabs", text: "Industry-specific fields, statuses, and user roles." },
              { icon: CalendarClock, label: "Workflow timing", text: "Booking, onboarding, delivery, and renewal stages." },
              { icon: ChartSpline, label: "Analytics layer", text: "Dashboards focused on sales, capacity, and margin risk." }
            ].map((item) => (
              <div key={item.label}>
                <item.icon className="h-6 w-6 text-fuchsia-200" />
                <h3 className="mt-4 font-display font-extrabold leading-tight tracking-tight text-white">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link href="/consultation" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 hover:bg-cyan-100">
        Configure a Build Request
        <ChevronRight className="h-4 w-4" />
      </Link>
      </div>
    </section>
  );
}
