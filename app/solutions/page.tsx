import Link from "next/link";
import {
  CalendarClock,
  ChartSpline,
  SlidersHorizontal,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";

import { PackageGrid } from "@/components/package-grid";
import { WhyStratum } from "@/components/why-stratum";

const previewPortals = [
  {
    href: "/preview/booking-core",
    label: "Lumina Wellness Portal",
    system: "Stratum Booking Core",
    meta: "Aesthetics intake, secure client scheduling, and practitioner roster routing."
  },
  {
    href: "/preview/secure-console",
    label: "Vanguard Ops Center",
    system: "Secure Console",
    meta: "Enterprise database isolation, payment pipeline governance, and approval queues."
  },
  {
    href: "/preview/dispatch-autonomous",
    label: "AeroFreight Private Logistics",
    system: "Dispatch Autonomous",
    meta: "Private fleet routing, telemetry sync, custody scans, and velocity analytics."
  },
  {
    href: "/preview/global-intelligence",
    label: "Nexus Corp Analytics",
    system: "Global Intelligence",
    meta: "Multi-tenant SaaS infrastructure, cloud logs, and predictive revenue intelligence."
  }
];

export default function SolutionsPage() {
  return (
    <section className="bg-[linear-gradient(180deg,#000000_0%,#070a10_50%,#0b0f17_100%)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">Live Preview Portal</p>
              <h2 className="mt-3 font-display text-3xl font-bold normal-case leading-snug text-white">
                Standalone command-center simulations for premium buyers.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Each route opens a separate high-fidelity application preview using local client-side state only.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#22d3ee] shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
              Local Preview Runtime
            </span>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {previewPortals.map((portal) => (
              <Link
                key={portal.href}
                href={portal.href}
                className="group rounded-2xl border border-white/10 bg-black/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_0_34px_rgba(34,211,238,0.12)]"
              >
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">{portal.system}</p>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold leading-tight text-white">{portal.label}</h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-cyan-200 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{portal.meta}</p>
                <span className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#00f2fe] via-[#0066ff] to-[#9d00ff] px-4 py-2 text-xs font-bold text-white shadow-[0_0_20px_rgba(0,242,254,0.14)]">
                  Live Preview
                </span>
              </Link>
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
