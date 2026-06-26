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
  accent: string;
  glow: string;
  signal: string;
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
    accent: "linear-gradient(90deg,#3b82f6,#6366f1)",
    glow: "radial-gradient(circle at 18% 16%,rgba(59,130,246,0.18),transparent 30%),radial-gradient(circle at 88% 14%,rgba(99,102,241,0.15),transparent 28%)",
    signal: "#3b82f6",
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
    accent: "linear-gradient(90deg,#6366f1,#3b82f6)",
    glow: "radial-gradient(circle at 20% 16%,rgba(99,102,241,0.18),transparent 30%),radial-gradient(circle at 86% 20%,rgba(59,130,246,0.14),transparent 30%)",
    signal: "#6366f1",
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
    accent: "linear-gradient(90deg,#f97316,#fb923c)",
    glow: "radial-gradient(circle at 20% 16%,rgba(249,115,22,0.18),transparent 30%),radial-gradient(circle at 86% 20%,rgba(251,146,60,0.14),transparent 28%)",
    signal: "#f97316",
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
    accent: "linear-gradient(90deg,#00f2fe,#0066ff,#9d00ff)",
    glow: "radial-gradient(circle at 18% 16%,rgba(0,242,254,0.14),transparent 30%),radial-gradient(circle at 88% 12%,rgba(157,0,255,0.16),transparent 28%)",
    signal: "#00f2fe",
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
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `${config.glow}, linear-gradient(180deg,#050508 0%,#080a10 100%)`
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to solutions
          </Link>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">{config.eyebrow}</p>
              <h1 className="mt-5 max-w-4xl font-sans text-5xl font-bold leading-[1.03] tracking-[-0.03em] text-white sm:text-6xl">
                {config.title}
              </h1>
              <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-zinc-300 sm:text-lg">{config.subtitle}</p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href={config.dashboardHref}
                  className="group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-bold text-white shadow-[0_0_28px_rgba(0,242,254,0.18)] transition-all hover:scale-[1.02]"
                  style={{ background: config.accent }}
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
              <div className="pointer-events-none absolute inset-0" style={{ background: config.glow }} />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">Selected Framework</p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">{packageDetail.title}</h2>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                    <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: config.signal }} />
                    Live Example
                  </span>
                </div>

                <div className="mt-7 rounded-2xl border border-white/10 bg-black/45 p-5">
                  <div className="flex items-center gap-3">
                    <LayoutDashboard className="h-5 w-5 text-cyan-200" style={{ color: config.signal }} />
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
                      <Check className="h-4 w-4 text-cyan-200" style={{ color: config.signal }} />
                      <p className="mt-3 text-sm font-bold leading-6 text-white">{item}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={config.dashboardHref}
                  className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-sm font-bold text-white transition-all hover:brightness-110"
                  style={{ background: config.accent }}
                >
                  {config.dashboardLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0c0d12] p-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">Investment</p>
          <p className="mt-4 text-4xl font-bold tracking-tight text-white">{packageDetail.price.startingAt}</p>
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
