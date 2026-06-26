import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, LayoutDashboard, SlidersHorizontal } from "lucide-react";

import { getPackage } from "@/lib/packages";

type LandingKey = "booking-core" | "dispatch-autonomous" | "secure-console" | "global-intelligence";

type LandingConfig = {
  packageSlug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  dashboardHref: string;
  dashboardLabel: string;
  scenario: string;
  workflow: string[];
  outcomes: string[];
};

const landingPages: Record<LandingKey, LandingConfig> = {
  "booking-core": {
    packageSlug: "premium-restaurant",
    eyebrow: "Lumina Wellness",
    title: "A tailored booking and client-intake system for premium service teams.",
    subtitle:
      "This framework shows how Stratum Booking Core can be shaped into a wellness, hospitality, salon, clinic, or private booking experience with custom fields, scheduling rules, and client records built around your actual workflow.",
    dashboardHref: "/preview/booking-core",
    dashboardLabel: "View workflow example on dashboard",
    scenario: "Example dashboard: Lumina Wellness Portal",
    workflow: ["Client intake records", "Provider scheduling matrix", "Secure deposit status", "Live treatment analytics"],
    outcomes: ["Cleaner client onboarding", "Fewer manual handoffs", "Stronger repeat-client visibility"]
  },
  "dispatch-autonomous": {
    packageSlug: "field-team-command",
    eyebrow: "AeroFlight",
    title: "A logistics command layer for teams that move people, assets, or work in the field.",
    subtitle:
      "This framework can become a dispatch console, field-service tracker, private fleet portal, or delivery operations hub with routing states, telemetry, job status, and customer-facing milestones customized to your process.",
    dashboardHref: "/preview/dispatch-autonomous",
    dashboardLabel: "View workflow example on dashboard",
    scenario: "Example dashboard: AeroFreight Private Logistics",
    workflow: ["Route command states", "Fleet and load telemetry", "Exception tracking", "Fulfillment velocity views"],
    outcomes: ["Sharper operational timing", "Better field visibility", "Less status-update friction"]
  },
  "secure-console": {
    packageSlug: "enterprise-booking",
    eyebrow: "Van Guard",
    title: "A secure approval and operations console for teams that need control at scale.",
    subtitle:
      "This framework can be tailored into a leadership dashboard, approval queue, database management surface, or private internal command center with role-based access and workflow gates that match your team structure.",
    dashboardHref: "/preview/secure-console",
    dashboardLabel: "View workflow example on dashboard",
    scenario: "Example dashboard: Vanguard Ops Center",
    workflow: ["Approval queues", "Role-based access layers", "Cluster status monitoring", "Audit and governance signals"],
    outcomes: ["Clearer internal approvals", "Stronger access separation", "More accountable operations"]
  },
  "global-intelligence": {
    packageSlug: "founder-saas",
    eyebrow: "Nexus",
    title: "A scalable analytics and client-portal foundation for platform-driven companies.",
    subtitle:
      "This framework can become a SaaS control center, multi-tenant client portal, investor-facing analytics hub, or executive intelligence layer with dashboards customized around your data model and growth strategy.",
    dashboardHref: "/preview/global-intelligence",
    dashboardLabel: "View workflow example on dashboard",
    scenario: "Example dashboard: Nexus Corp Analytics",
    workflow: ["Tenant intelligence matrix", "Predictive revenue graphs", "Cloud server telemetry", "Live audit logs"],
    outcomes: ["Better client visibility", "More useful executive reporting", "A platform ready for scale"]
  }
};

export function SolutionLandingPage({ landingKey }: { landingKey: LandingKey }) {
  const config = landingPages[landingKey];
  const packageDetail = getPackage(config.packageSlug);

  if (!packageDetail) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(0,242,254,0.12),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(157,0,255,0.12),transparent_24%),linear-gradient(180deg,#050508_0%,#080a10_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to solutions
          </Link>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">{config.eyebrow}</p>
              <h1 className="mt-5 max-w-4xl font-sans text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {config.title}
              </h1>
              <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-zinc-300 sm:text-lg">{config.subtitle}</p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href={config.dashboardHref}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#00f2fe] via-[#0066ff] to-[#9d00ff] px-6 py-3 text-sm font-bold text-white shadow-[0_0_28px_rgba(0,242,254,0.22)] transition-all hover:scale-[1.02] hover:shadow-[0_0_38px_rgba(157,0,255,0.26)]"
                >
                  {config.dashboardLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={`/consultation?package=${packageDetail.consultationPackage}&tier=${packageDetail.consultationTier}`}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:border-cyan-300/40 hover:bg-white/10"
                >
                  Customize this build
                  <SlidersHorizontal className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0d12]/90 p-6 shadow-2xl backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(0,242,254,0.09),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(157,0,255,0.12),transparent_34%)]" />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">Selected Framework</p>
                    <h2 className="mt-3 text-2xl font-black tracking-tight text-white">{packageDetail.title}</h2>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#22d3ee]" />
                    Live Example
                  </span>
                </div>

                <div className="mt-7 rounded-2xl border border-white/10 bg-black/45 p-5">
                  <div className="flex items-center gap-3">
                    <LayoutDashboard className="h-5 w-5 text-cyan-200" />
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">{config.scenario}</p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    The dashboard is only one example. Your version can use different labels, user roles, data fields,
                    automations, visual style, and approval steps based on how your business actually works.
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {config.workflow.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/35 p-4">
                      <Check className="h-4 w-4 text-cyan-200" />
                      <p className="mt-3 text-sm font-bold leading-6 text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0c0d12] p-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">Investment</p>
          <p className="mt-4 text-4xl font-black tracking-tight text-white">{packageDetail.price.startingAt}</p>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            Starts with a {packageDetail.price.reservation} initialization deposit. Final architecture is shaped around
            your workflow, brand, and operational requirements.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0c0d12] p-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">Tailored outcomes</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {config.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-2xl border border-white/10 bg-black/35 p-5">
                <p className="text-sm font-bold leading-6 text-white">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
