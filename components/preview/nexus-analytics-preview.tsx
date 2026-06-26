"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Cpu,
  Database,
  Layers,
  Lock,
  ShieldCheck,
  TrendingUp,
  Zap
} from "lucide-react";

type TenantName = "Atlas Health" | "Meridian Capital" | "Northline Ops" | "Sable Media";

const tenantChartData: Record<TenantName, { actual: number[]; target: number[] }> = {
  "Atlas Health": {
    actual: [40, 65, 45, 90, 75, 100, 82, 120, 110, 140],
    target: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140]
  },
  "Meridian Capital": {
    actual: [80, 70, 95, 85, 110, 105, 130, 125, 150, 145],
    target: [70, 80, 90, 100, 110, 120, 130, 140, 150, 160]
  },
  "Northline Ops": {
    actual: [30, 40, 35, 50, 45, 60, 55, 75, 70, 90],
    target: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130]
  },
  "Sable Media": {
    actual: [120, 110, 130, 115, 140, 125, 150, 135, 160, 155],
    target: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190]
  }
};

const tenants = [
  { name: "Atlas Health" as TenantName, users: "18.2K", status: "SCALED", ltv: "$420K", load: "42%", loadValue: 42, health: "99.98%", forecast: "$8.4M", nodes: 20 },
  { name: "Meridian Capital" as TenantName, users: "9.7K", status: "PROTECTED", ltv: "$890K", load: "57%", loadValue: 57, health: "100%", forecast: "$12.1M", nodes: 22 },
  { name: "Northline Ops" as TenantName, users: "31.4K", status: "SYNCED", ltv: "$1.2M", load: "68%", loadValue: 68, health: "99.91%", forecast: "$15.7M", nodes: 18 },
  { name: "Sable Media" as TenantName, users: "6.8K", status: "EXPANDING", ltv: "$210K", load: "36%", loadValue: 36, health: "99.96%", forecast: "$4.2M", nodes: 16 }
];

const tenantInsights: Record<TenantName, { title: string; desc: string; icon: "zap" | "trend" | "shield" }[]> = {
  "Atlas Health": [
    { icon: "zap", title: "Profile Expansion", desc: "Member conversion increased after patient retention workflows activated." },
    { icon: "trend", title: "Growth Catalyst", desc: "LTV velocity is 12% above quarterly projection. Upgrade path active." },
    { icon: "shield", title: "Compliance Locked", desc: "SOC2 Type II data audit completed with 100% integrity." }
  ],
  "Meridian Capital": [
    { icon: "shield", title: "Treasury Gate Sealed", desc: "Cross-role approval layers are enforcing clean investment handoffs." },
    { icon: "trend", title: "Yield Acceleration", desc: "Forecast model identifies a premium client segment outperforming target." },
    { icon: "zap", title: "Latency Compression", desc: "Dashboard query cache reduced executive reporting delay." }
  ],
  "Northline Ops": [
    { icon: "trend", title: "Route Demand Spike", desc: "Commercial provider load is trending above baseline across two regions." },
    { icon: "zap", title: "Dispatch Expansion", desc: "Tenant queue depth supports additional field-team routing capacity." },
    { icon: "shield", title: "Access Stable", desc: "Role isolation layers verified across operations and finance users." }
  ],
  "Sable Media": [
    { icon: "zap", title: "Creator Cohort Active", desc: "Subscription group behavior is ready for higher-touch retention testing." },
    { icon: "trend", title: "Content Yield Signal", desc: "Campaign revenue curve projects a strong membership expansion window." },
    { icon: "shield", title: "Asset Vault Clean", desc: "All media delivery permissions are synchronized across client roles." }
  ]
};

function scaleChartData(data: { actual: number[]; target: number[] }, timeRange: string) {
  const factor = timeRange === "DAILY" ? 0.62 : timeRange === "WEEKLY" ? 0.82 : 1;
  return {
    actual: data.actual.map((value, index) => Math.round(value * factor + index * (timeRange === "DAILY" ? 2 : 1))),
    target: data.target.map((value) => Math.round(value * factor))
  };
}

function GlobalKPI({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="flex min-w-[200px] flex-col gap-2 border border-white/5 bg-[#0c0d0f] p-6 transition-all hover:border-cyan-500/30">
      <div className="flex items-center justify-between text-slate-600 transition-colors group-hover:text-cyan-500">
        <span className="text-[8px] font-black uppercase tracking-[0.4em]">{label}</span>
        {icon}
      </div>
      <div className="text-3xl font-black tracking-tighter text-white">{value}</div>
    </div>
  );
}

function Panel({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <div className="relative flex h-full flex-col border border-white/5 bg-[#0c0d0f] p-8 shadow-2xl">
      <div className="mb-8 flex items-center justify-between">
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">{title}</div>
        {badge ? <span className="border border-cyan-500/10 bg-cyan-500/5 px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.3em] text-cyan-500">{badge}</span> : null}
      </div>
      {children}
    </div>
  );
}

function TimeRangeButton({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-10 border px-6 text-[9px] font-black uppercase tracking-[0.3em] transition-all ${
        active ? "border-white bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.15)]" : "border-white/5 bg-transparent text-slate-500 hover:border-white/20 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function TenantCard({ name, users, status, selected, ltv, onClick }: { name: TenantName; users: string; status: string; selected: boolean; ltv: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden border p-6 text-left transition-all duration-300 ${
        selected ? "border-cyan-500/50 bg-cyan-500/5 shadow-[0_0_30px_rgba(6,182,212,0.1)]" : "border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]"
      }`}
    >
      {selected ? (
        <>
          <div className="absolute left-0 top-0 h-full w-1 bg-cyan-500" />
          <div className="absolute left-0 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-cyan-500/20" />
        </>
      ) : null}
      <div className="mb-4 flex items-center justify-between">
        <div className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${selected ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`}>{name}</div>
        <span className={`rounded-sm px-2 py-0.5 text-[8px] font-black ${selected ? "bg-cyan-500 text-black" : "bg-white/5 text-slate-600"}`}>{status}</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[8px] font-bold uppercase tracking-widest text-slate-700">Active_Users</span>
          <span className="text-[10px] font-black text-white">{users}</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[8px] font-bold uppercase tracking-widest text-slate-700">Est_LTV</span>
          <span className="text-[10px] font-black text-cyan-500">{ltv}</span>
        </div>
      </div>
    </button>
  );
}

function InsightItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group flex cursor-default gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/5 bg-white/5 transition-colors group-hover:border-cyan-500/30">{icon}</div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-black uppercase tracking-wider text-white">{title}</span>
        <p className="text-[9px] font-medium uppercase leading-relaxed text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function LogEntry({ time, tag, msg, color }: { time: string; tag: string; msg: string; color: string }) {
  return (
    <div className="flex items-start gap-4 whitespace-nowrap">
      <span className="w-16 text-slate-700">{time}</span>
      <span className={`w-12 font-black ${color}`}>[{tag}]</span>
      <span className="text-slate-400">{msg}</span>
    </div>
  );
}

function PredictiveChart({ data }: { data: { actual: number[]; target: number[] } }) {
  const max = 200;
  const width = 800;
  const height = 400;
  const getPath = (points: number[]) => points.map((p, i) => `${(i / (points.length - 1)) * width},${height - (p / max) * height}`).join(" ");
  const actualPath = getPath(data.actual);
  const targetPath = getPath(data.target);

  return (
    <div className="group flex h-full w-full flex-col justify-between">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="chartGradActual" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 0.2, 0.4, 0.6, 0.8, 1].map((p) => (
          <line key={p} x1="0" y1={p * height} x2={width} y2={p * height} stroke="white" strokeOpacity="0.03" strokeWidth="1" />
        ))}
        <polyline points={targetPath} fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="8 8" />
        <path d={`M 0 ${height} L ${actualPath} L ${width} ${height} Z`} fill="url(#chartGradActual)" />
        <polyline points={actualPath} fill="none" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
        {data.actual.map((p, i) => {
          const x = (i / (data.actual.length - 1)) * width;
          const y = height - (p / max) * height;
          return (
            <g key={`${p}-${i}`}>
              <circle cx={x} cy={y} r="4" fill="#06b6d4" />
            </g>
          );
        })}
      </svg>
      <div className="mt-10 flex justify-between border-t border-white/5 pt-6 text-[10px] font-black uppercase tracking-[0.5em] text-slate-800">
        <span>Cycle_Start</span>
        <span>Mid_Point</span>
        <span>Forecast_End</span>
      </div>
    </div>
  );
}

function TenantCommandDeck({
  tenant,
  timeRange
}: {
  tenant: (typeof tenants)[number];
  timeRange: string;
}) {
  const commandMetrics = [
    { label: "Forecast Ceiling", value: tenant.forecast, sub: `${timeRange} model` },
    { label: "Tenant Health", value: tenant.health, sub: "Uptime guard" },
    { label: "Expansion Nodes", value: `${tenant.nodes}/24`, sub: "Cloud layer" }
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
      <div className="border border-cyan-500/10 bg-[#0c0d0f] p-8 shadow-2xl shadow-black/30">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-500 shadow-[0_0_16px_rgba(6,182,212,0.8)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.45em] text-cyan-500">Tenant Command Focus</span>
        </div>
        <h2 className="text-4xl font-black uppercase leading-none tracking-tight text-white">{tenant.name}</h2>
        <p className="mt-4 max-w-lg text-[11px] font-bold uppercase leading-loose tracking-[0.18em] text-slate-600">
          Switching tenants recalculates forecast curves, infrastructure load, active nodes, and operational insight layers so each client sees a tailored SaaS command center.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {commandMetrics.map((metric) => (
          <div key={metric.label} className="relative overflow-hidden border border-white/5 bg-[#0c0d0f] p-6">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/5 blur-2xl" />
            <span className="relative z-10 text-[9px] font-black uppercase tracking-[0.35em] text-slate-600">{metric.label}</span>
            <div className="relative z-10 mt-5 text-3xl font-black tracking-tight text-white">{metric.value}</div>
            <div className="relative z-10 mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-500">{metric.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function NexusAnalyticsPreview() {
  const [selectedTenant, setSelectedTenant] = useState<TenantName>("Atlas Health");
  const [time, setTime] = useState("");
  const [timeRange, setTimeRange] = useState("QUARTERLY");
  const selectedTenantData = tenants.find((tenant) => tenant.name === selectedTenant) ?? tenants[0];
  const activeInsights = tenantInsights[selectedTenant];
  const activeChartData = useMemo(() => scaleChartData(tenantChartData[selectedTenant], timeRange), [selectedTenant, timeRange]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#020203] font-sans text-slate-400 selection:bg-cyan-500/30">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.02)_0%,transparent_100%)]" />
        <div className="absolute left-0 top-0 h-px w-full bg-white/5" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col gap-10 p-6 pt-20 lg:p-10">
        <section className="relative flex flex-col items-end justify-between gap-10 lg:flex-row">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-cyan-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-cyan-500/70">Elite B2B Enterprise Platform</span>
            </div>
            <div className="text-6xl font-black uppercase leading-[0.8] tracking-[-0.05em] text-white md:text-[8rem]">
              Nexus Corp
              <br />
              <span className="bg-gradient-to-r from-white via-slate-400 to-slate-800 bg-clip-text text-transparent">Analytics</span>
            </div>
          </div>
          <div className="flex gap-4">
            <GlobalKPI label="Active Users" value={selectedTenantData.users} icon={<Layers size={14} />} />
            <GlobalKPI label="Net Server Load" value={selectedTenantData.load} icon={<Cpu size={14} />} />
          </div>
        </section>

        <section className="group relative overflow-hidden border border-white/5 bg-[#0c0d0f] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)]">
          <div className="pointer-events-none absolute right-0 top-0 p-10 opacity-[0.02] transition-opacity group-hover:opacity-[0.05]">
            <Database size={240} className="text-cyan-500" />
          </div>

          <div className="p-10">
            <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500">Command_Focus_Active</span>
                </div>
                <div className="text-6xl font-black uppercase leading-none tracking-tighter text-white">{selectedTenant}</div>
                <div className="flex flex-wrap gap-3 text-[9px] font-black uppercase tracking-[0.25em] text-slate-600">
                  <span>Forecast {selectedTenantData.forecast}</span>
                  <span className="text-cyan-500">Health {selectedTenantData.health}</span>
                  <span>{timeRange}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <TimeRangeButton active={timeRange === "DAILY"} onClick={() => setTimeRange("DAILY")}>Daily</TimeRangeButton>
                <TimeRangeButton active={timeRange === "WEEKLY"} onClick={() => setTimeRange("WEEKLY")}>Weekly</TimeRangeButton>
                <TimeRangeButton active={timeRange === "QUARTERLY"} onClick={() => setTimeRange("QUARTERLY")}>Quarterly</TimeRangeButton>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
              <div className="lg:col-span-3">
                <div className="relative h-[450px] w-full">
                  <PredictiveChart data={activeChartData} />
                </div>
              </div>

              <div className="flex flex-col gap-8 border-l border-white/5 pl-10">
                <div>
                  <span className="mb-6 block text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">Operational_Intelligence</span>
                  <div className="space-y-6">
                    {activeInsights.map((insight) => (
                      <InsightItem
                        key={insight.title}
                        icon={
                          insight.icon === "zap" ? (
                            <Zap size={14} className="text-amber-500" />
                          ) : insight.icon === "trend" ? (
                            <TrendingUp size={14} className="text-emerald-500" />
                          ) : (
                            <ShieldCheck size={14} className="text-cyan-500" />
                          )
                        }
                        title={insight.title}
                        desc={insight.desc}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-auto border-t border-white/5 pt-8">
                  <div className="mb-4 flex items-end justify-between">
                    <span className="text-[10px] font-black uppercase text-white">System Load</span>
                    <span className="text-[10px] font-bold text-cyan-500">{selectedTenantData.load}</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                    <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: selectedTenantData.load }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TenantCommandDeck tenant={selectedTenantData} timeRange={timeRange} />

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-4">
            <Panel title="Intelligence Matrix" badge="TENANTS">
              <div className="mt-4 flex flex-col gap-3">
                {tenants.map((tenant) => (
                  <TenantCard key={tenant.name} {...tenant} selected={selectedTenant === tenant.name} onClick={() => setSelectedTenant(tenant.name)} />
                ))}
              </div>
            </Panel>
            <Panel title="Security Protocol" badge="AES_256">
              <div className="mt-4 space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase">
                    <span className="text-slate-500">Encryption_Status</span>
                    <span className="flex items-center gap-2 text-emerald-500"><Lock size={10} /> Active</span>
                  </div>
                  <div className="flex h-10 items-center overflow-hidden border border-white/5 bg-black/40 px-4">
                    <span className="break-all font-mono text-[10px] tracking-widest text-cyan-500/50">0x8821AF99C23B11D0E44A12</span>
                  </div>
                </div>
                <button className="h-12 w-full bg-white text-[9px] font-black uppercase tracking-[0.4em] text-black transition-all hover:bg-cyan-500 hover:text-white">Rotate_Security_Keys</button>
              </div>
            </Panel>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-8">
            <div className="grid h-full gap-8 md:grid-cols-2">
              <Panel title="Network Topology" badge="GLOBAL">
                <div className="mt-4 grid h-full content-start gap-3 lg:grid-cols-6">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="group relative flex aspect-square items-center justify-center border border-white/5 bg-white/[0.02]">
                      <div className={`h-1.5 w-1.5 rounded-full ${i < selectedTenantData.nodes ? "bg-cyan-500" : "bg-slate-800"}`} />
                      {i === selectedTenantData.nodes ? <div className="absolute inset-0 animate-pulse bg-cyan-500/10" /> : null}
                    </div>
                  ))}
                </div>
              </Panel>
              <Panel title="System Audit" badge="LIVE">
                <div className="relative mt-4 h-[280px] overflow-hidden border border-white/5 bg-black/40 p-6 font-mono">
                  <div className="space-y-3 text-[10px]">
                    <LogEntry time="12:04:22" tag="SEC" msg="Handshake verified node_01" color="text-slate-500" />
                    <LogEntry time="12:04:24" tag="DB" msg={`${selectedTenant} cache purge OK`} color="text-cyan-500" />
                    <LogEntry time="12:04:28" tag="SYS" msg={`${timeRange} forecast iteration #882`} color="text-slate-500" />
                    <LogEntry time="12:04:31" tag="SEC" msg="Compliance lock verified" color="text-emerald-500" />
                    <LogEntry time="12:04:35" tag="INFRA" msg={`Node expansion: ${selectedTenantData.nodes}/24 active`} color="text-amber-500" />
                    <LogEntry time="12:04:42" tag="AUTH" msg="Admin session renewal" color="text-slate-500" />
                    <LogEntry time="12:05:01" tag="DB" msg="Async query optimize completed" color="text-cyan-500" />
                  </div>
                  <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#0c0d0f] to-transparent" />
                </div>
                <div className="mt-4 text-right text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">{time}</div>
              </Panel>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
