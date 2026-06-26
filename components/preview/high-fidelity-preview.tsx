"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  CalendarDays,
  Database,
  Layers3,
  LockKeyhole,
  MapPinned,
  Network,
  Plane,
  RadioTower,
  ShieldCheck,
  Truck,
  UserRoundCheck
} from "lucide-react";

type PreviewKind = "booking" | "secure" | "dispatch" | "global";

type PreviewConfig = {
  kind: PreviewKind;
  wrapper: string;
  terminal: string;
  alert: string;
  badge: string;
  metrics: string[];
};

const configs: Record<PreviewKind, PreviewConfig> = {
  booking: {
    kind: "booking",
    wrapper: "Lumina Wellness Portal",
    terminal: "Ultra-Luxury Aesthetics Clinic Terminal",
    alert: "84 ACTIVE ELECTRONIC HEALTH PROFILES",
    badge: "LUMINA / CLINIC OPS",
    metrics: ["84 ACTIVE PROFILES", "12 PROVIDERS", "0 PENDING REVIEW", "96% ROOM UTILIZATION"]
  },
  secure: {
    kind: "secure",
    wrapper: "Vanguard Ops Center",
    terminal: "Global Enterprise Infrastructure & Database Terminal",
    alert: "4 ISOLATED CLUSTERS ACTIVE",
    badge: "VANGUARD / ENTERPRISE OPS",
    metrics: ["4 ACTIVE CLUSTERS", "2 APPROVALS", "41MS API LATENCY", "0 EXPOSED RECORDS"]
  },
  dispatch: {
    kind: "dispatch",
    wrapper: "AeroFreight Private Logistics",
    terminal: "White-Glove Fleet Transport Command Console",
    alert: "3 DYNAMIC AIR/GROUND ROUTES ACTIVE",
    badge: "AEROFREIGHT / ROUTE OPS",
    metrics: ["3 ACTIVE ROUTES", "14 CUSTODY SCANS", "0 ROUTE EXCEPTIONS", "96% ETA CONFIDENCE"]
  },
  global: {
    kind: "global",
    wrapper: "Nexus Corp Analytics",
    terminal: "Elite B2B SaaS Enterprise Platform & Predictive Data Portal",
    alert: "FULLY SCALABLE MULTI-TENANT INFRASTRUCTURE ACTIVE",
    badge: "NEXUS / SAAS INTEL",
    metrics: ["52.1K ACTIVE USERS", "12 REPLICAS", "$8.4M FORECAST ARR", "99.98% SERVICE HEALTH"]
  }
};

const patients = [
  { id: "LUM-084", name: "Ari M.", treatment: "Laser Resurfacing", risk: "Low", room: "Suite B", spend: "$1,840" },
  { id: "LUM-112", name: "Kira V.", treatment: "Injectables", risk: "Review", room: "Suite C", spend: "$920" },
  { id: "LUM-136", name: "Noor S.", treatment: "Hydrafacial Elite", risk: "Clear", room: "Suite A", spend: "$480" },
  { id: "LUM-201", name: "Mila R.", treatment: "Membership Consult", risk: "VIP", room: "Suite D", spend: "$2,250" }
];

const scheduleMatrix = [
  ["09:00", "LUM-084", "Suite B"],
  ["10:30", "LUM-136", "Suite A"],
  ["12:00", "LUM-112", "Suite C"],
  ["14:30", "LUM-201", "Suite D"],
  ["16:00", "LUM-084", "Suite B"],
  ["17:15", "LUM-136", "Suite A"]
];

const approvalClusters = [
  { label: "Production Branch", owner: "Cluster A", load: "18 tenants" },
  { label: "Escrow Settlement", owner: "Cluster B", load: "42 events" },
  { label: "Role Vault", owner: "Cluster C", load: "9 policy maps" },
  { label: "Audit Seal", owner: "Cluster D", load: "214 hashes" }
];

const routeCards = [
  { label: "AF-901", origin: "Private Hangar", target: "Executive Dock", type: "Air" },
  { label: "GF-204", origin: "Cold Vault", target: "Clinic Wing", type: "Ground" },
  { label: "MX-778", origin: "Metro Hub", target: "Secure Estate", type: "Hybrid" }
];

const tenants = [
  { name: "Atlas Health", users: "18.2K", state: "Scaled" },
  { name: "Meridian Capital", users: "9.7K", state: "Protected" },
  { name: "Northline Ops", users: "31.4K", state: "Synced" },
  { name: "Sable Media", users: "6.8K", state: "Expanding" }
];

const revenuePoints = [42, 54, 49, 72, 68, 86, 94, 108];

function TerminalBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5 font-mono text-[10px] font-black uppercase tracking-[0.26em] text-zinc-300">
      <span className="h-2 w-2 animate-pulse rounded-full bg-[#22d3ee] shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
      {children}
    </span>
  );
}

function Surface({
  label,
  headline,
  counter,
  children,
  icon: Icon
}: {
  label: string;
  headline: string;
  counter: string;
  children: React.ReactNode;
  icon: typeof Database;
}) {
  return (
    <article className="grid min-h-[320px] gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-md lg:grid-cols-[0.72fr_1.28fr]">
      <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.26em] text-cyan-200">{label}</p>
              <h2 className="mt-4 font-display text-3xl font-black leading-none text-white">{headline}</h2>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/80">
              <Icon className="h-5 w-5 text-cyan-200" />
            </span>
          </div>
          <div className="mt-6 grid gap-3">
            {[counter, "LOCAL STATE ONLY", "NO DATABASE CALL"].map((item) => (
              <div key={item} className="rounded-xl border border-zinc-800/80 bg-[#050508] px-4 py-3">
                <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#00f2fe] via-[#0066ff] to-[#9d00ff] px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(0,242,254,0.16)]"
        >
          Execute Local Check
        </button>
      </div>
      <div className="min-h-[280px] rounded-2xl border border-white/10 bg-[#050508] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        {children}
      </div>
    </article>
  );
}

function BookingSchedulingMatrix() {
  const [selected, setSelected] = useState(patients[0]);

  return (
    <div className="grid h-full gap-4 xl:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-cyan-200">Scheduling Matrix</p>
          <CalendarDays className="h-5 w-5 text-cyan-200" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {scheduleMatrix.map(([time, id, room], index) => {
            const patient = patients.find((item) => item.id === id) ?? patients[0];
            const active = selected.id === patient.id && index < 4;

            return (
              <button
                key={`${time}-${id}-${index}`}
                type="button"
                onClick={() => setSelected(patient)}
                className={`min-h-24 rounded-2xl border p-4 text-left transition-all ${
                  active
                    ? "border-cyan-300/55 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                    : "border-white/10 bg-zinc-950/80 hover:border-cyan-300/30"
                }`}
              >
                <p className="font-mono text-xs font-black text-cyan-100">{time}</p>
                <p className="mt-2 text-sm font-black text-white">{id}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">{room}</p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/55 p-5">
        <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">Patient Metadata</p>
        <div className="mt-5 flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
            <UserRoundCheck className="h-6 w-6 text-cyan-100" />
          </span>
          <div>
            <p className="text-xl font-black text-white">{selected.name}</p>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">{selected.id}</p>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {[
            ["Treatment", selected.treatment],
            ["Risk", selected.risk],
            ["Room", selected.room],
            ["Lifetime Value", selected.spend]
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{label}</span>
              <span className="text-sm font-black text-white">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BookingVault() {
  const [secure, setSecure] = useState<Record<string, boolean>>({
    "Consent Form": false,
    "Before Photos": true,
    "Treatment Plan": false,
    "Deposit Gate": true
  });

  return (
    <div className="grid h-full gap-3">
      {Object.entries(secure).map(([label, active]) => (
        <button
          key={label}
          type="button"
          onClick={() => setSecure((current) => ({ ...current, [label]: !current[label] }))}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-4 text-left hover:border-cyan-300/35"
        >
          <span className="font-black text-white">{label}</span>
          <span className={`rounded-full px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.18em] ${active ? "bg-emerald-300/10 text-emerald-200" : "bg-fuchsia-300/10 text-fuchsia-200"}`}>
            {active ? "Verified Secure" : "Pending"}
          </span>
        </button>
      ))}
    </div>
  );
}

function SecureApprovalQueue() {
  const [approved, setApproved] = useState<Record<string, boolean>>({});

  return (
    <div className="grid h-full gap-4 xl:grid-cols-[1fr_0.75fr]">
      <div className="space-y-3">
        {approvalClusters.map((cluster) => {
          const active = approved[cluster.label];
          return (
            <div key={cluster.label} className="grid gap-3 rounded-2xl border border-white/10 bg-zinc-950/80 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="font-black text-white">{cluster.label}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  {cluster.owner} / {cluster.load}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setApproved((current) => ({ ...current, [cluster.label]: true }))}
                className={`rounded-full px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.18em] transition ${
                  active ? "bg-emerald-300/10 text-emerald-200" : "bg-gradient-to-r from-[#00f2fe] via-[#0066ff] to-[#9d00ff] text-white"
                }`}
              >
                {active ? "Active Cluster" : "Approve Build"}
              </button>
            </div>
          );
        })}
      </div>
      <ClusterNodes approved={approved} />
    </div>
  );
}

function ClusterNodes({ approved }: { approved: Record<string, boolean> }) {
  return (
    <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.13),transparent_42%)]" />
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 260 260" aria-hidden="true">
        <line x1="54" y1="68" x2="154" y2="48" stroke="rgba(34,211,238,0.28)" />
        <line x1="154" y1="48" x2="208" y2="142" stroke="rgba(168,85,247,0.28)" />
        <line x1="208" y1="142" x2="90" y2="206" stroke="rgba(34,211,238,0.22)" />
        <line x1="90" y1="206" x2="54" y2="68" stroke="rgba(217,70,239,0.2)" />
      </svg>
      {approvalClusters.map((cluster, index) => {
        const coords = [
          ["22%", "26%"],
          ["58%", "18%"],
          ["78%", "55%"],
          ["34%", "78%"]
        ][index];
        const active = approved[cluster.label];

        return (
          <span
            key={cluster.label}
            className={`absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border ${
              active
                ? "border-cyan-300/60 bg-cyan-300/15 shadow-[0_0_28px_rgba(34,211,238,0.34)]"
                : "border-white/10 bg-zinc-950/90"
            }`}
            style={{ left: coords[0], top: coords[1] }}
          >
            <Database className="h-5 w-5 text-cyan-100" />
          </span>
        );
      })}
    </div>
  );
}

function DispatchRoutes() {
  const [activeRoute, setActiveRoute] = useState(routeCards[0]);

  return (
    <div className="grid h-full gap-4 xl:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-3">
        {routeCards.map((route) => {
          const active = activeRoute.label === route.label;
          return (
            <button
              key={route.label}
              type="button"
              onClick={() => setActiveRoute(route)}
              className={`grid w-full grid-cols-[3rem_1fr] gap-4 rounded-2xl border p-4 text-left transition ${
                active ? "border-cyan-300/50 bg-cyan-300/10" : "border-white/10 bg-zinc-950/80 hover:border-cyan-300/25"
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/50">
                {route.type === "Air" ? <Plane className="h-5 w-5 text-cyan-200" /> : <Truck className="h-5 w-5 text-cyan-200" />}
              </span>
              <span>
                <span className="block font-black text-white">{route.label}</span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  {route.origin} - {route.target}
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
        <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-cyan-200">Active Route</p>
        <p className="mt-3 text-3xl font-black text-white">{activeRoute.label}</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            ["Mode", activeRoute.type],
            ["Scan Count", "14"],
            ["ETA Lock", "96%"],
            ["Exception", "0"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-zinc-950/80 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">{label}</p>
              <p className="mt-2 text-xl font-black text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VelocityBars() {
  const bars = [72, 88, 64, 94, 82, 91];
  return (
    <div className="flex h-full min-h-72 items-end gap-4">
      {bars.map((bar, index) => (
        <div key={`${bar}-${index}`} className="flex h-full flex-1 flex-col justify-end gap-3">
          <div className="overflow-hidden rounded-t-2xl border border-cyan-300/20 bg-zinc-950/90">
            <div
              className="bg-gradient-to-t from-[#00f2fe] via-[#0066ff] to-[#9d00ff] shadow-[0_0_28px_rgba(34,211,238,0.28)]"
              style={{ height: `${bar * 2.25}px` }}
            />
          </div>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">V{index + 1}</p>
        </div>
      ))}
    </div>
  );
}

function TenantMatrix() {
  const [active, setActive] = useState(tenants[0]);
  return (
    <div className="grid h-full gap-4 xl:grid-cols-[1fr_0.75fr]">
      <div className="grid gap-3">
        {tenants.map((tenant) => (
          <button
            key={tenant.name}
            type="button"
            onClick={() => setActive(tenant)}
            className={`rounded-2xl border p-4 text-left transition ${
              active.name === tenant.name ? "border-cyan-300/50 bg-cyan-300/10" : "border-white/10 bg-zinc-950/80"
            }`}
          >
            <p className="font-black text-white">{tenant.name}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              {tenant.users} / {tenant.state}
            </p>
          </button>
        ))}
      </div>
      <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(34,211,238,0.14),transparent_42%)]" />
        <div className="relative z-10">
          <Network className="h-7 w-7 text-cyan-200" />
          <p className="mt-5 font-mono text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">Selected Tenant</p>
          <p className="mt-3 text-3xl font-black text-white">{active.name}</p>
          <p className="mt-2 text-xl font-black text-cyan-100">{active.users}</p>
        </div>
      </div>
    </div>
  );
}

function RevenueChart() {
  const points = useMemo(() => {
    const min = Math.min(...revenuePoints);
    const max = Math.max(...revenuePoints);
    return revenuePoints
      .map((value, index) => `${34 + index * 68},${222 - ((value - min) / (max - min)) * 152}`)
      .join(" ");
  }, []);

  return (
    <svg viewBox="0 0 560 270" className="h-full min-h-72 w-full" role="img" aria-label="Predictive revenue curve">
      <defs>
        <linearGradient id="previewLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="45%" stopColor="#0066ff" />
          <stop offset="100%" stopColor="#9d00ff" />
        </linearGradient>
      </defs>
      {[50, 90, 130, 170, 210].map((y) => (
        <line key={y} x1="24" x2="536" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
      ))}
      <polyline points={points} fill="none" stroke="url(#previewLine)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
      {revenuePoints.map((value, index) => {
        const min = Math.min(...revenuePoints);
        const max = Math.max(...revenuePoints);
        const x = 34 + index * 68;
        const y = 222 - ((value - min) / (max - min)) * 152;
        return (
          <g key={`${value}-${index}`}>
            <circle cx={x} cy={y} r="8" fill="#050508" stroke="#22d3ee" strokeWidth="3" />
            <text x={x} y="258" textAnchor="middle" fill="rgba(161,161,170,0.9)" fontSize="11" fontFamily="monospace">
              C{index + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function PrimaryWidget({ kind }: { kind: PreviewKind }) {
  if (kind === "booking") return <BookingSchedulingMatrix />;
  if (kind === "secure") return <SecureApprovalQueue />;
  if (kind === "dispatch") return <DispatchRoutes />;
  return <TenantMatrix />;
}

function SecondaryWidget({ kind }: { kind: PreviewKind }) {
  if (kind === "booking") return <BookingVault />;
  if (kind === "secure") return <ClusterNodes approved={{ "Production Branch": true, "Escrow Settlement": true }} />;
  if (kind === "dispatch") return <VelocityBars />;
  return <RevenueChart />;
}

export function HighFidelityPreview({ kind }: { kind: PreviewKind }) {
  const config = configs[kind];
  const primary =
    kind === "booking"
      ? ["INTAKE MANIFEST ENGINE", "PATIENT GRID", "84 ACTIVE ELECTRONIC HEALTH PROFILES", CalendarDays]
      : kind === "secure"
        ? ["MULTI-TENANT DATABASE MATRIX", "APPROVAL OPS", "4 ISOLATED CLUSTERS ACTIVE", Database]
        : kind === "dispatch"
          ? ["AUTONOMOUS ROUTE COMMANDER", "ROUTE OPS", "3 DYNAMIC AIR/GROUND ROUTES ACTIVE", RadioTower]
          : ["GLOBAL INTELLIGENCE MATRIX", "TENANT OPS", "FULLY SCALABLE MULTI-TENANT INFRASTRUCTURE ACTIVE", Layers3];
  const secondary =
    kind === "booking"
      ? ["VIBE CHECK", "LIVE CONSULTATION VAULT", "0 PENDING REVIEW", ShieldCheck]
      : kind === "secure"
        ? ["SECURITY CHECK", "MULTI-TIER APPROVAL QUEUE", "2 ACTIONS REQUIRED", LockKeyhole]
        : kind === "dispatch"
          ? ["VELOCITY VIBE CHECK", "DISPATCH WORKFLOW ANALYTICS", "PACKAGE FULFILLMENT VELOCITY", MapPinned]
          : ["SYSTEM TELEMETRY", "PREDICTIVE REVENUE FORECASTING", "CUSTOM ANALYTICAL GRAPHS ACTIVE", BarChart3];

  return (
    <main className="min-h-screen bg-[#050508] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-black text-zinc-300 backdrop-blur-md transition hover:border-cyan-300/30 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            ALL PACKAGES
          </Link>
          <TerminalBadge>{config.badge}</TerminalBadge>
        </div>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0d12]/95 p-5 shadow-[0_40px_140px_rgba(0,0,0,0.72)] backdrop-blur-md sm:p-8">
          <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="relative z-10">
            <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="font-mono text-[11px] font-black uppercase tracking-[0.32em] text-cyan-200">STUDIO CONTROL</p>
                <h1 className="mt-4 font-display text-5xl font-black leading-none text-white sm:text-7xl">{config.wrapper}</h1>
                <p className="mt-5 font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">{config.terminal}</p>
                <p className="mt-3 font-mono text-xs font-black uppercase tracking-[0.24em] text-cyan-200">{config.alert}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {config.metrics.map((metric) => (
                  <div key={metric} className="rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-md">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">LIVE METRIC</p>
                    <p className="mt-2 font-mono text-[11px] font-black uppercase tracking-[0.12em] text-white">{metric}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-5">
              <Surface label={primary[0] as string} headline={primary[1] as string} counter={primary[2] as string} icon={primary[3] as typeof Database}>
                <PrimaryWidget kind={kind} />
              </Surface>
              <Surface label={secondary[0] as string} headline={secondary[1] as string} counter={secondary[2] as string} icon={secondary[3] as typeof Database}>
                <SecondaryWidget kind={kind} />
              </Surface>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
