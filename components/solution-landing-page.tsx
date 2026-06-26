import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  Database,
  LayoutDashboard,
  Map,
  Plane,
  Search,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Users
} from "lucide-react";

import { getPackage } from "@/lib/packages";

type LandingKey = "booking-core" | "dispatch-autonomous" | "secure-console" | "global-intelligence";

type LandingConfig = {
  packageSlug: string;
  eyebrow: string;
  brand: string;
  title: string;
  subtitle: string;
  terminal: string;
  mode: "clinical" | "logistics" | "tactical" | "intelligence";
  backgroundImage?: string;
  dashboardHref: string;
  dashboardLabel: string;
  scenario: string;
  accent: string;
  glow: string;
  signal: string;
  metrics: Array<{ label: string; value: string }>;
  panels: Array<{ title: string; badge: string; lines: string[] }>;
  schedule: Array<{ time: string; id: string; status: string }>;
  subject: {
    name: string;
    id: string;
    fields: Array<{ label: string; value: string }>;
  };
  workflow: string[];
  outcomes: string[];
};

const landingPages: Record<LandingKey, LandingConfig> = {
  "booking-core": {
    packageSlug: "premium-restaurant",
    eyebrow: "Lumina Wellness",
    brand: "Lumina Wellness Portal",
    title: "Lumina Wellness Portal",
    subtitle:
      "Aesthetics clinic enterprise terminal — operational monitoring, client intake, provider scheduling, and secure profile management.",
    terminal: "Management Console",
    mode: "clinical",
    backgroundImage: "https://storage.googleapis.com/producer-app-public/assets/7e8180ee-e9ae-4da5-828a-8903bf769de2.jpg",
    dashboardHref: "/preview/booking-core",
    dashboardLabel: "View workflow example on dashboard",
    scenario: "Example dashboard: Lumina Wellness Portal",
    accent: "linear-gradient(90deg,#3b82f6,#6366f1)",
    glow: "radial-gradient(circle at 18% 16%,rgba(59,130,246,0.18),transparent 30%),radial-gradient(circle at 88% 14%,rgba(99,102,241,0.15),transparent 28%)",
    signal: "#3b82f6",
    metrics: [
      { label: "Active Profiles", value: "84" },
      { label: "Providers", value: "12" },
      { label: "Pending Review", value: "0" },
      { label: "Utilization", value: "96%" }
    ],
    panels: [
      { title: "Patient Grid", badge: "Terminal", lines: ["84 active health profiles", "Local state synchronization", "Direct data access"] },
      { title: "Data Vault", badge: "Encrypted", lines: ["Consent form pending", "Clinical media verified", "Deposit gateway secure"] }
    ],
    schedule: [
      { time: "09:00", id: "LUM-084", status: "Current" },
      { time: "10:30", id: "LUM-136", status: "Up Next" },
      { time: "12:00", id: "LUM-112", status: "Suite C" },
      { time: "14:30", id: "LUM-201", status: "Suite D" }
    ],
    subject: {
      name: "Ari M.",
      id: "Ref ID: LUM-084",
      fields: [
        { label: "Primary Care", value: "Laser Resurfacing" },
        { label: "Risk Factor", value: "Low Risk" },
        { label: "Facility", value: "Suite B" },
        { label: "Account Value", value: "$1,840.00" }
      ]
    },
    workflow: ["Client intake records", "Provider scheduling matrix", "Secure deposit status", "Live treatment analytics"],
    outcomes: ["Cleaner client onboarding", "Fewer manual handoffs", "Stronger repeat-client visibility"]
  },
  "dispatch-autonomous": {
    packageSlug: "field-team-command",
    eyebrow: "AeroFlight",
    brand: "AeroFlight Private Logistics",
    title: "AeroFlight Private Logistics",
    subtitle:
      "White-glove fleet transport command console — route orchestration, active custody events, private movement logs, and velocity control.",
    terminal: "Fleet Command",
    mode: "logistics",
    dashboardHref: "/preview/dispatch-autonomous",
    dashboardLabel: "View workflow example on dashboard",
    scenario: "Example dashboard: AeroFreight Private Logistics",
    accent: "linear-gradient(90deg,#6366f1,#3b82f6)",
    glow: "radial-gradient(circle at 20% 16%,rgba(99,102,241,0.18),transparent 30%),radial-gradient(circle at 86% 20%,rgba(59,130,246,0.14),transparent 30%)",
    signal: "#6366f1",
    metrics: [
      { label: "Active Routes", value: "3" },
      { label: "Fleet Units", value: "18" },
      { label: "Custody Scans", value: "126" },
      { label: "Velocity", value: "98%" }
    ],
    panels: [
      { title: "Route Commander", badge: "Live", lines: ["Air-ground sequence active", "Priority corridor locked", "Weather relay synced"] },
      { title: "Load Parameters", badge: "Synced", lines: ["Cold-chain stable", "Payload weight balanced", "Custody manifest clear"] }
    ],
    schedule: [
      { time: "06:45", id: "AERO-17", status: "Departed" },
      { time: "08:10", id: "AERO-22", status: "In Transit" },
      { time: "09:35", id: "AERO-31", status: "Rerouting" },
      { time: "11:20", id: "AERO-44", status: "Arriving" }
    ],
    subject: {
      name: "Route A-17",
      id: "Manifest: PRV-902",
      fields: [
        { label: "Asset Class", value: "Private Cargo" },
        { label: "Risk Factor", value: "Controlled" },
        { label: "Link Quality", value: "99.2%" },
        { label: "ETA Window", value: "12 min" }
      ]
    },
    workflow: ["Route command states", "Fleet and load telemetry", "Exception tracking", "Fulfillment velocity views"],
    outcomes: ["Sharper operational timing", "Better field visibility", "Less status-update friction"]
  },
  "secure-console": {
    packageSlug: "enterprise-booking",
    eyebrow: "Van Guard",
    brand: "Vanguard Ops Center",
    title: "Vanguard Ops Center",
    subtitle:
      "Global enterprise infrastructure and database terminal — approval gates, isolated clusters, escrow controls, and active security routing.",
    terminal: "Security Console",
    mode: "tactical",
    backgroundImage: "https://storage.googleapis.com/producer-app-public/assets/1066cfe7-6bc7-45d1-b7d5-3f08449139e7.jpg",
    dashboardHref: "/preview/secure-console",
    dashboardLabel: "View workflow example on dashboard",
    scenario: "Example dashboard: Vanguard Ops Center",
    accent: "linear-gradient(90deg,#f97316,#fb923c)",
    glow: "radial-gradient(circle at 20% 16%,rgba(249,115,22,0.18),transparent 30%),radial-gradient(circle at 86% 20%,rgba(251,146,60,0.14),transparent 28%)",
    signal: "#f97316",
    metrics: [
      { label: "Clusters", value: "4" },
      { label: "Approvals", value: "2" },
      { label: "Audit Score", value: "99%" },
      { label: "Escrow State", value: "Lock" }
    ],
    panels: [
      { title: "Database Matrix", badge: "Isolated", lines: ["Four clusters active", "Tenant boundary enforced", "Access logs synchronized"] },
      { title: "Approval Queue", badge: "Action", lines: ["Build release pending", "Finance gate reviewed", "Admin override protected"] }
    ],
    schedule: [
      { time: "09:12", id: "VG-Cluster-01", status: "Active" },
      { time: "09:18", id: "VG-Build-92", status: "Pending" },
      { time: "09:24", id: "VG-Audit-18", status: "Clear" },
      { time: "09:30", id: "VG-Escrow-07", status: "Locked" }
    ],
    subject: {
      name: "Cluster Delta",
      id: "Node: VGC-04",
      fields: [
        { label: "Isolation", value: "Enforced" },
        { label: "Pending Action", value: "Approve Build" },
        { label: "Vault State", value: "Protected" },
        { label: "Risk Index", value: "Low" }
      ]
    },
    workflow: ["Approval queues", "Role-based access layers", "Cluster status monitoring", "Audit and governance signals"],
    outcomes: ["Clearer internal approvals", "Stronger access separation", "More accountable operations"]
  },
  "global-intelligence": {
    packageSlug: "founder-saas",
    eyebrow: "Nexus",
    brand: "Nexus Corp Analytics",
    title: "Nexus Corp Analytics",
    subtitle:
      "Elite B2B SaaS enterprise platform and predictive data portal — tenant intelligence, revenue forecasting, server telemetry, and executive command views.",
    terminal: "Intelligence Matrix",
    mode: "intelligence",
    backgroundImage: "https://storage.googleapis.com/producer-app-public/assets/c97f3ebb-38c0-44dd-abde-e8ee583e5d9e.jpg",
    dashboardHref: "/preview/global-intelligence",
    dashboardLabel: "View workflow example on dashboard",
    scenario: "Example dashboard: Nexus Corp Analytics",
    accent: "linear-gradient(90deg,#00f2fe,#0066ff,#9d00ff)",
    glow: "radial-gradient(circle at 18% 16%,rgba(0,242,254,0.14),transparent 30%),radial-gradient(circle at 88% 12%,rgba(157,0,255,0.16),transparent 28%)",
    signal: "#00f2fe",
    metrics: [
      { label: "Tenants", value: "24" },
      { label: "MRR Signal", value: "$86K" },
      { label: "Forecast", value: "+18%" },
      { label: "Uptime", value: "99.9%" }
    ],
    panels: [
      { title: "Tenant Layer", badge: "Scaled", lines: ["Multi-tenant records active", "Usage signals live", "Plan boundaries mapped"] },
      { title: "Revenue Forecasting", badge: "Predictive", lines: ["Demand curve rising", "Yield model calibrated", "Executive graph stream active"] }
    ],
    schedule: [
      { time: "Q1", id: "NEX-Revenue", status: "+14%" },
      { time: "Q2", id: "NEX-Tenant", status: "+22%" },
      { time: "Q3", id: "NEX-Yield", status: "+18%" },
      { time: "Q4", id: "NEX-Scale", status: "+31%" }
    ],
    subject: {
      name: "Enterprise Tenant",
      id: "Nexus ID: CORP-24",
      fields: [
        { label: "Plan Layer", value: "Enterprise" },
        { label: "Seat Volume", value: "420 users" },
        { label: "Revenue Risk", value: "Low" },
        { label: "Forecast", value: "$148K ARR" }
      ]
    },
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
    <main className={`min-h-screen bg-[#050508] text-white ${config.mode === "tactical" ? "font-mono" : ""}`}>
      <section className="relative overflow-hidden border-b border-white/5">
        {config.backgroundImage ? (
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <img
              src={config.backgroundImage}
              alt=""
              className={`h-full w-full object-cover ${
                config.mode === "clinical"
                  ? "scale-105 opacity-20 mix-blend-lighten"
                  : config.mode === "tactical"
                    ? "scale-110 opacity-30 blur-[2px] mix-blend-lighten"
                    : "opacity-40 mix-blend-lighten"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#050508]/50 to-[#050508]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050508_100%)] opacity-80" />
          </div>
        ) : null}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `${config.glow}, linear-gradient(180deg,#050508 0%,#080a10 100%)`
          }}
        />
        <div
          className={`pointer-events-none absolute inset-0 z-0 ${
            config.mode === "logistics"
              ? "bg-[radial-gradient(circle_at_1px_1px,rgba(245,158,11,0.08)_1px,transparent_0)] bg-[size:50px_50px] opacity-80"
              : config.mode === "tactical"
                ? "bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.28)_50%),linear-gradient(90deg,rgba(255,115,22,0.08),rgba(0,0,0,0.02),rgba(255,115,22,0.05))] bg-[size:100%_4px,4px_100%] opacity-25"
                : "bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35"
          }`}
        />
        <div className="relative mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to solutions
          </Link>

          <div className="mt-14">
            <div className="flex items-center gap-3">
              <span className="h-px w-10" style={{ backgroundColor: config.signal }} />
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.38em]" style={{ color: config.signal }}>
                {config.terminal}
              </p>
            </div>
            <div className="mt-6 grid gap-10 border-b border-white/5 pb-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <h1
                  className={`max-w-4xl text-6xl leading-[0.98] text-white sm:text-7xl lg:text-8xl ${
                    config.mode === "tactical"
                      ? "font-mono font-black uppercase tracking-[-0.06em]"
                      : config.mode === "logistics"
                        ? "font-sans font-black uppercase italic tracking-[-0.055em]"
                        : "font-sans font-bold tracking-[-0.04em]"
                  }`}
                >
                  {config.title.split(" ").slice(0, -1).join(" ")}
                  <span
                    className={`block ${
                      config.mode === "tactical"
                        ? "text-orange-500"
                        : config.mode === "intelligence"
                          ? "bg-gradient-to-r from-white via-cyan-200 to-slate-600 bg-clip-text text-transparent"
                          : "font-light italic tracking-[-0.02em] text-slate-500"
                    }`}
                  >
                    {config.title.split(" ").slice(-1)}
                  </span>
                </h1>
                <p className="mt-8 max-w-3xl font-mono text-xs font-bold uppercase leading-loose tracking-[0.24em] text-slate-500">
                  {config.subtitle}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {config.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/5 bg-[#0c0d0e]/90 p-5 transition-all hover:border-white/10">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">{metric.label}</p>
                    <p className="mt-6 text-3xl font-bold tracking-tight text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <LandingPanel title={config.panels[0].title} badge={config.panels[0].badge} signal={config.signal} icon={<LayoutDashboard className="h-5 w-5" />}>
                <div className="space-y-3">
                  {config.panels[0].lines.map((line, index) => (
                    <div key={line} className={`rounded-xl border p-4 ${index === 0 ? "border-white/10 bg-white/[0.03]" : "border-white/5 bg-black/30"}`}>
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: index === 0 ? config.signal : "rgba(71,85,105,0.75)" }} />
                        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-300">{line}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </LandingPanel>

              <LandingPanel title={config.panels[1].title} badge={config.panels[1].badge} signal={config.signal} icon={<ShieldCheck className="h-5 w-5" />}>
                <div className="space-y-4">
                  {config.panels[1].lines.map((line, index) => (
                    <div key={line} className="flex items-center justify-between border-b border-white/5 py-3 last:border-b-0">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{line}</span>
                      <span className="rounded bg-white/5 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest" style={{ color: index === 0 ? config.signal : "#f8fafc" }}>
                        {index === 0 ? "Active" : "Secure"}
                      </span>
                    </div>
                  ))}
                </div>
              </LandingPanel>
            </div>

            <div className="lg:col-span-5">
              <LandingPanel title="Operational Timeline" badge="Live" signal={config.signal} icon={<Calendar className="h-5 w-5" />}>
                <div className="space-y-4">
                  {config.schedule.map((item, index) => (
                    <div
                      key={item.id}
                      className={`group rounded-2xl border p-5 transition-all ${index === 0 ? "border-white/10 bg-white/[0.035]" : "border-white/5 bg-black/30 hover:border-white/10"}`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-sm font-bold text-white">{item.time}</span>
                          <span className="h-4 w-px bg-white/10" />
                          <span className="font-mono text-sm font-bold" style={{ color: index === 0 ? config.signal : "#ffffff" }}>{item.id}</span>
                        </div>
                        <span className="rounded bg-white/10 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-300">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </LandingPanel>
            </div>

            <div className="lg:col-span-3">
              <LandingPanel title="Intelligence Detail" badge="Selected" signal={config.signal} icon={<Search className="h-5 w-5" />}>
                <div className="flex flex-col items-center border-b border-white/5 pb-8 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-black/40">
                    <Users className="h-9 w-9 text-slate-700" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold tracking-tight text-white">{config.subject.name}</h2>
                  <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">{config.subject.id}</p>
                </div>
                <div className="mt-7 space-y-5">
                  {config.subject.fields.map((field) => (
                    <div key={field.label} className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">{field.label}</span>
                      <span className="text-right font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-white">{field.value}</span>
                    </div>
                  ))}
                </div>
              </LandingPanel>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-white/5 bg-[#0c0d0e]/90 p-7 shadow-xl shadow-black/20">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Activity className="h-5 w-5" style={{ color: config.signal }} />
                  <h2 className="font-mono text-xs font-bold uppercase tracking-[0.26em] text-slate-400">Live Framework Visualization</h2>
                </div>
                <span className="rounded border border-white/5 bg-white/5 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-500">
                  {config.scenario}
                </span>
              </div>
              <LandingVisualization landingKey={landingKey} signal={config.signal} />
            </div>

            <div className="rounded-3xl border border-white/5 bg-[#0c0d0e]/90 p-7 shadow-xl shadow-black/20">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.28em]" style={{ color: config.signal }}>
                Customizable Build Layer
              </p>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white">
                This is the landing experience before the live dashboard.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                The visual style, workflow labels, profile fields, dashboard widgets, approvals, and reporting logic can be rebuilt around the client&apos;s exact business model.
              </p>
              <div className="mt-7 grid gap-3">
                {config.workflow.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/5 bg-black/30 p-4">
                    <Check className="h-4 w-4" style={{ color: config.signal }} />
                    <p className="mt-3 text-sm font-bold leading-6 text-white">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href={config.dashboardHref}
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-4 text-sm font-bold text-white shadow-[0_0_28px_rgba(0,242,254,0.18)] transition-all hover:scale-[1.02]"
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

function LandingPanel({
  title,
  badge,
  icon,
  signal,
  children
}: {
  title: string;
  badge: string;
  icon: React.ReactNode;
  signal: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 rounded-3xl border border-white/5 bg-[#0c0d0e]/90 p-7 shadow-xl shadow-black/20 transition-all hover:border-white/10">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/[0.03] p-2" style={{ color: signal }}>
            {icon}
          </div>
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.26em] text-slate-400">{title}</h2>
        </div>
        <span className="rounded border border-white/5 bg-white/5 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-500">
          {badge}
        </span>
      </div>
      {children}
    </section>
  );
}

function LandingVisualization({ landingKey, signal }: { landingKey: LandingKey; signal: string }) {
  if (landingKey === "booking-core") {
    return (
      <div className="grid gap-4 md:grid-cols-7">
        {Array.from({ length: 21 }).map((_, index) => (
          <div
            key={index}
            className="min-h-24 rounded-2xl border border-white/5 bg-black/35 p-3"
            style={{
              boxShadow: index % 5 === 0 ? `0 0 24px ${signal}33` : undefined,
              borderColor: index % 5 === 0 ? `${signal}66` : undefined
            }}
          >
            <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-600">Suite {String.fromCharCode(65 + (index % 4))}</p>
            <p className="mt-5 text-sm font-bold text-white">{index % 5 === 0 ? "Reserved" : "Open"}</p>
          </div>
        ))}
      </div>
    );
  }

  if (landingKey === "dispatch-autonomous") {
    return (
      <div className="relative min-h-80 overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-6">
        <Map className="absolute right-8 top-8 h-8 w-8 text-slate-700" />
        {[12, 38, 64, 84].map((left, index) => (
          <div key={left} className="absolute h-2 rounded-full" style={{ left: `${left}%`, top: `${22 + index * 14}%`, width: `${18 + index * 5}%`, background: `linear-gradient(90deg,transparent,${signal},transparent)` }} />
        ))}
        <div className="relative z-10 grid gap-4 md:grid-cols-3">
          {["AIR", "GROUND", "FINAL"].map((stage, index) => (
            <div key={stage} className="rounded-2xl border border-white/5 bg-[#0c0d12]/90 p-5">
              <Plane className="h-5 w-5" style={{ color: signal }} />
              <p className="mt-8 font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-slate-500">{stage}</p>
              <p className="mt-2 text-2xl font-bold text-white">{92 + index * 2}%</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (landingKey === "secure-console") {
    return (
      <div className="grid gap-4 md:grid-cols-4">
        {["Core DB", "Escrow", "RBAC", "Audit"].map((node, index) => (
          <div key={node} className="rounded-2xl border border-white/5 bg-black/35 p-5">
            <Database className="h-5 w-5" style={{ color: signal }} />
            <p className="mt-8 text-sm font-bold text-white">{node}</p>
            <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
              {index === 1 ? "Pending approval" : "Active cluster"}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-[1fr_1.2fr]">
      <div className="rounded-3xl border border-white/5 bg-black/35 p-6">
        <Server className="h-6 w-6" style={{ color: signal }} />
        <p className="mt-8 font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-slate-500">Tenant Intelligence</p>
        <p className="mt-3 text-4xl font-bold text-white">24</p>
      </div>
      <div className="flex h-72 items-end gap-3 rounded-3xl border border-white/5 bg-black/35 p-6">
        {[36, 54, 48, 72, 66, 88, 94].map((height, index) => (
          <div key={index} className="flex flex-1 flex-col items-center gap-3">
            <div className="w-full rounded-t-xl" style={{ height: `${height}%`, background: `linear-gradient(180deg,${signal},rgba(59,130,246,0.16))` }} />
            <span className="font-mono text-[9px] font-bold text-slate-600">Q{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
