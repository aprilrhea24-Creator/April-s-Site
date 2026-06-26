"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  CloudCog,
  DatabaseZap,
  Layers3,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles
} from "lucide-react";

const tenantLayers = [
  {
    name: "Atlas Health",
    users: "18.2K seats",
    state: "Scaled",
    tint: "from-cyan-400/30 to-blue-500/10"
  },
  {
    name: "Meridian Capital",
    users: "9.7K seats",
    state: "Protected",
    tint: "from-blue-500/25 to-purple-500/10"
  },
  {
    name: "Northline Ops",
    users: "31.4K seats",
    state: "Synced",
    tint: "from-fuchsia-500/25 to-cyan-400/10"
  }
];

const deploymentLogs = [
  { label: "Edge runtime", value: "Global", status: "Locked" },
  { label: "Database replicas", value: "12", status: "Healthy" },
  { label: "API latency", value: "41ms", status: "Optimal" },
  { label: "Failover window", value: "0.8s", status: "Armed" }
];

const forecastPoints = [
  { label: "Jan", value: 46 },
  { label: "Feb", value: 58 },
  { label: "Mar", value: 52 },
  { label: "Apr", value: 76 },
  { label: "May", value: 69 },
  { label: "Jun", value: 88 },
  { label: "Jul", value: 96 },
  { label: "Aug", value: 104 }
];

function TelemetryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-300">
      <span className="h-2 w-2 animate-pulse rounded-full bg-[#22d3ee] shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
      {label}
    </span>
  );
}

function TenantLayerVisualization() {
  const [activeLayer, setActiveLayer] = useState(1);
  const activeTenant = tenantLayers[activeLayer];

  return (
    <div className="relative min-h-[330px] overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(34,211,238,0.14),transparent_36%),radial-gradient(circle_at_78%_72%,rgba(168,85,247,0.12),transparent_34%)]" />
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-200">Tenant layer map</p>
          <p className="mt-2 text-lg font-bold text-white">{activeTenant.name}</p>
        </div>
        <Network className="h-6 w-6 text-cyan-200" />
      </div>

      <div className="relative z-10 mt-7 grid gap-4">
        {tenantLayers.map((tenant, index) => {
          const isActive = activeLayer === index;

          return (
            <button
              key={tenant.name}
              type="button"
              onClick={() => setActiveLayer(index)}
              className={`relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                isActive
                  ? "border-cyan-300/45 bg-cyan-300/10 shadow-[0_0_34px_rgba(34,211,238,0.18)]"
                  : "border-white/10 bg-zinc-950/80 hover:border-white/25"
              }`}
            >
              <div className={`pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r ${tenant.tint} opacity-70`} />
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/55">
                    <Layers3 className="h-5 w-5 text-cyan-100" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white">{tenant.name}</span>
                    <span className="mt-1 block text-xs text-zinc-500">{tenant.users}</span>
                  </span>
                </div>
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-300">
                  {tenant.state}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DeploymentLogPanel() {
  return (
    <div className="grid gap-3 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md sm:grid-cols-2">
      {deploymentLogs.map((log) => (
        <div key={log.label} className="rounded-xl border border-white/10 bg-zinc-950/80 p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">{log.label}</p>
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.85)]" />
          </div>
          <p className="mt-3 text-2xl font-bold text-white">{log.value}</p>
          <p className="mt-1 text-xs text-cyan-200">{log.status}</p>
        </div>
      ))}
    </div>
  );
}

function PredictiveTrendChart() {
  const points = useMemo(() => {
    const max = Math.max(...forecastPoints.map((point) => point.value));
    const min = Math.min(...forecastPoints.map((point) => point.value));

    return forecastPoints
      .map((point, index) => {
        const x = 34 + index * 70;
        const y = 220 - ((point.value - min) / (max - min)) * 150;
        return `${x},${y}`;
      })
      .join(" ");
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-200">Forecast stream</p>
          <p className="mt-2 text-sm text-zinc-400">Revenue curve / next 8 cycles</p>
        </div>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
          +34.8% projected
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#050508] p-4">
        <svg viewBox="0 0 560 260" className="h-72 w-full" role="img" aria-label="Predictive revenue forecasting trend chart">
          <defs>
            <linearGradient id="globalForecastLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="45%" stopColor="#0066ff" />
              <stop offset="100%" stopColor="#9d00ff" />
            </linearGradient>
            <linearGradient id="globalForecastArea" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(34,211,238,0.22)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0)" />
            </linearGradient>
          </defs>
          {[40, 80, 120, 160, 200].map((y) => (
            <line key={y} x1="24" x2="536" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          ))}
          <polygon points={`34,230 ${points} 524,230`} fill="url(#globalForecastArea)" />
          <polyline
            points={points}
            fill="none"
            stroke="url(#globalForecastLine)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            filter="drop-shadow(0 0 14px rgba(34,211,238,0.55))"
          />
          {forecastPoints.map((point, index) => {
            const max = Math.max(...forecastPoints.map((item) => item.value));
            const min = Math.min(...forecastPoints.map((item) => item.value));
            const x = 34 + index * 70;
            const y = 220 - ((point.value - min) / (max - min)) * 150;

            return (
              <g key={point.label}>
                <circle cx={x} cy={y} r="7" fill="#050508" stroke="#22d3ee" strokeWidth="3" />
                <circle cx={x} cy={y} r="3" fill="#a855f7" />
                <text x={x} y="252" textAnchor="middle" fill="rgba(161,161,170,0.9)" fontSize="12" fontFamily="monospace">
                  {point.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default function GlobalIntelligencePreviewPage() {
  return (
    <main className="min-h-screen bg-[#050508] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-zinc-300 backdrop-blur-md transition hover:border-cyan-300/30 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to solutions
          </Link>
          <TelemetryBadge label="Nexus predictive runtime" />
        </div>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0d12]/90 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.62)] backdrop-blur-md sm:p-8">
          <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-cyan-200">Studio Control</p>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
                Nexus Corp Analytics
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
                Elite B2B SaaS enterprise platform and predictive data portal for multi-tenant scale, executive revenue
                intelligence, and resilient cloud-backed operational command.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["52.1K active users", "12 database replicas", "$8.4M forecasted ARR"].map((metric) => (
                <div key={metric} className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">Metric</p>
                  <p className="mt-2 text-sm font-bold text-white">{metric}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-10 grid gap-6 lg:grid-cols-2">
            <article className="grid gap-6 rounded-3xl border border-cyan-300/15 bg-white/[0.035] p-6 backdrop-blur-md xl:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">Global Intelligence Matrix</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">
                  Fully scalable multi-tenant infrastructure active
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Tenant-specific logic, account boundaries, analytics access, and data-growth thresholds stay visible
                  inside one executive-grade control plane.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Tenant isolation", "Usage intelligence", "Executive reporting"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-xs text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <TenantLayerVisualization />
            </article>

            <article className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-md xl:grid-cols-[0.88fr_1.12fr]">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-fuchsia-200">
                  Scalable Cloud Server Deployment
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">Active network logs locked</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Production runtime health, failover timing, API latency, and database replication sit in a dedicated
                  technical observability shell.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white">
                  <CloudCog className="h-4 w-4 text-cyan-200" />
                  Cloud guard online
                </div>
              </div>
              <DeploymentLogPanel />
            </article>
          </div>

          <section className="relative z-10 mt-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-cyan-200">System Telemetry</p>
            <article className="mt-4 grid gap-6 rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-md lg:grid-cols-[0.76fr_1.24fr]">
              <div>
                <div className="flex items-center gap-3">
                  <LineChart className="h-6 w-6 text-cyan-200" />
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">
                    Predictive Revenue Forecasting
                  </p>
                </div>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">Custom analytical graphs active</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Forecast revenue, usage, and product expansion with a polished local chart that shows what an elite
                  SaaS founder dashboard can feel like.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white">
                    <BarChart3 className="h-4 w-4 text-cyan-200" />
                    Expansion curve armed
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white">
                    <DatabaseZap className="h-4 w-4 text-fuchsia-200" />
                    Data model synced
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white">
                    <ShieldCheck className="h-4 w-4 text-emerald-200" />
                    Tenant guard sealed
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white">
                    <Sparkles className="h-4 w-4 text-purple-200" />
                    Founder view premium
                  </span>
                </div>
              </div>
              <PredictiveTrendChart />
            </article>
          </section>
        </section>
      </div>
    </main>
  );
}
