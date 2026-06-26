"use client";

import { useEffect, useState } from "react";
import {
  Cloud,
  Globe,
  Plane,
  Truck,
} from "lucide-react";

type RouteProfile = {
  id: string;
  type: "Air" | "Ground";
  dest: string;
  status: string;
  etaAccuracy: string;
  security: string;
  velocity: string;
  transferMode: string;
  scanIntegrity: string;
  etaLock: string;
  exceptions: string;
  linkQuality: string;
  risk: number;
  cyberScore: number;
  routeScore: number;
  routeStatus: string;
  bars: number[];
  weather: {
    origin: { label: string; temp: string; cond: string; wind: string };
    destination: { label: string; temp: string; cond: string; wind: string };
    visibility: string;
    pressure: string;
    dewPoint: string;
    windAngle: number;
    windStrength: number;
  };
};

const routeProfiles: RouteProfile[] = [
  {
    id: "AF-901",
    type: "Air",
    dest: "Private Hangar - Dock 4",
    status: "Rerouting",
    etaAccuracy: "96%",
    security: "100%",
    velocity: "1.2k",
    transferMode: "Air_Priority",
    scanIntegrity: "14 / 14 Verified",
    etaLock: "10:14 Zulu",
    exceptions: "Manual_Override",
    linkQuality: "99.2% STABLE",
    risk: 96.8,
    cyberScore: 100,
    routeScore: 88,
    routeStatus: "Correcting",
    bars: [65, 88, 55, 95, 75, 90, 82, 60],
    weather: {
      origin: { label: "LHR_LONDON", temp: "12°C", cond: "Overcast", wind: "14kt NE" },
      destination: { label: "JFK_NEWYORK", temp: "24°C", cond: "Clear", wind: "08kt S" },
      visibility: "9.2 KM",
      pressure: "1013.2 hPa",
      dewPoint: "+4.2°C",
      windAngle: 145,
      windStrength: 65
    }
  },
  {
    id: "GF-204",
    type: "Ground",
    dest: "Cold Vault - Clinic Wing",
    status: "Loading",
    etaAccuracy: "92%",
    security: "98%",
    velocity: "860",
    transferMode: "Ground_Cold_Chain",
    scanIntegrity: "11 / 12 Verified",
    etaLock: "11:08 Zulu",
    exceptions: "0",
    linkQuality: "97.8% STABLE",
    risk: 93.4,
    cyberScore: 98,
    routeScore: 91,
    routeStatus: "Stable",
    bars: [45, 58, 68, 74, 70, 82, 78, 88],
    weather: {
      origin: { label: "LAX_SECURE", temp: "19°C", cond: "Clear", wind: "06kt W" },
      destination: { label: "CLINIC_WING", temp: "07°C", cond: "Overcast", wind: "04kt N" },
      visibility: "7.8 KM",
      pressure: "1016.4 hPa",
      dewPoint: "+2.8°C",
      windAngle: 90,
      windStrength: 42
    }
  },
  {
    id: "MX-778",
    type: "Ground",
    dest: "Metro Hub - Secure Estate",
    status: "Departed",
    etaAccuracy: "89%",
    security: "99%",
    velocity: "1.0k",
    transferMode: "Ground_Escort",
    scanIntegrity: "18 / 18 Verified",
    etaLock: "13:42 Zulu",
    exceptions: "Weather_Hold",
    linkQuality: "94.1% STABLE",
    risk: 90.6,
    cyberScore: 99,
    routeScore: 84,
    routeStatus: "Correcting",
    bars: [70, 62, 88, 72, 94, 68, 81, 76],
    weather: {
      origin: { label: "METRO_HUB", temp: "17°C", cond: "Overcast", wind: "18kt E" },
      destination: { label: "ESTATE_GATE", temp: "20°C", cond: "Clear", wind: "10kt S" },
      visibility: "6.4 KM",
      pressure: "1009.8 hPa",
      dewPoint: "+5.1°C",
      windAngle: 210,
      windStrength: 58
    }
  }
];

function QuickTile({ label, value, sub, color = "indigo" }: { label: string; value: string; sub: string; color?: string }) {
  return (
    <div className="group relative flex flex-col overflow-hidden border border-white/[0.04] bg-white/[0.02] p-6 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-indigo-500">
      <div className="absolute left-0 top-0 h-0 w-[2px] bg-indigo-500 transition-all duration-700 group-hover:h-full" />
      <span className="mb-3 text-[7px] font-black uppercase tracking-[0.3em] text-slate-600">{label}</span>
      <span className={`text-4xl font-black tracking-tighter ${color === "emerald" ? "text-emerald-500" : "text-white"}`}>{value}</span>
      <span className="mt-2 text-[8px] font-bold uppercase tracking-widest text-slate-500 transition-colors group-hover:text-indigo-400">{sub}</span>
    </div>
  );
}

function Panel({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <div className="group relative flex h-full flex-col border border-white/[0.05] bg-[#0c0e14]/40 p-10 shadow-2xl backdrop-blur-xl transition-all duration-500">
      <div className="mb-10 flex items-center justify-between border-b border-white/[0.02] pb-6">
        <div className="flex items-center gap-4">
          <div className="h-4 w-[2px] bg-indigo-500 transition-all duration-700 group-hover:h-8" />
          <div className="text-[12px] font-black uppercase tracking-[0.5em] text-slate-500 transition-colors group-hover:text-white">{title}</div>
        </div>
        {badge ? (
          <span className="border border-indigo-500/10 bg-indigo-500/5 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.2em] text-indigo-400">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function AssetCard({
  id,
  type,
  dest,
  status,
  active = false,
  onClick
}: {
  id: string;
  type: string;
  dest: string;
  status: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex cursor-pointer items-center justify-between border p-6 text-left transition-all hover:bg-white/[0.03] ${active ? "border-indigo-500/20 bg-indigo-500/[0.03]" : "border-white/[0.02] bg-white/[0.01]"}`}
    >
      <div className="flex items-center gap-6">
        <div className={`flex h-14 w-14 items-center justify-center border bg-black/40 ${active ? "border-indigo-500" : "border-white/5"}`}>
          {type === "Air" ? <Plane size={20} className={active ? "text-indigo-400" : "text-slate-600"} /> : <Truck size={20} className={active ? "text-indigo-400" : "text-slate-600"} />}
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="text-[13px] font-black uppercase tracking-widest text-white">{id}</div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{dest}</p>
        </div>
      </div>
      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${active ? "text-indigo-400" : "text-slate-600"}`}>{status}</span>
    </button>
  );
}

function WeatherNode({ label, temp, cond, wind, active = false }: { label: string; temp: string; cond: string; wind: string; active?: boolean }) {
  return (
    <div className={`flex flex-col gap-2 border p-4 ${active ? "border-indigo-500/30 bg-indigo-500/[0.02]" : "border-white/[0.03] bg-white/[0.01]"}`}>
      <span className="text-[7px] font-black uppercase tracking-widest text-slate-600">{label}</span>
      <div className="flex items-center justify-between">
        <span className="text-sm font-black text-white">{temp}</span>
        {cond === "Clear" ? <div className="h-3 w-3 rounded-full bg-amber-500" /> : <Cloud size={12} className="text-slate-400" />}
      </div>
      <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">{wind}</span>
    </div>
  );
}

function WindVector({ angle, strength }: { angle: number; strength: number }) {
  return (
    <svg className="h-full w-full" viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="38" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/[0.02]" />
      <g transform={`rotate(${angle}, 40, 40)`}>
        <line x1="40" y1="40" x2="40" y2="10" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
        <path d="M 36,20 L 40,10 L 44,20 Z" fill="#6366f1" />
      </g>
      <text x="40" y="60" textAnchor="middle" fill="white" fontSize="10" fontWeight="900">
        {strength}kt
      </text>
    </svg>
  );
}

function TelemetryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.02] py-2">
      <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">{label}</span>
      <span className="text-[9px] font-black uppercase text-white">{value}</span>
    </div>
  );
}

function DetailBox({ label, value, color = "white" }: { label: string; value: string; color?: string }) {
  return (
    <div className="flex flex-col gap-1.5 border border-white/[0.03] bg-black/40 p-4">
      <span className="text-[7px] font-black uppercase tracking-widest text-slate-600">{label}</span>
      <span className={`text-[9px] font-black uppercase tracking-widest ${color === "indigo" ? "text-indigo-400" : "text-white"}`}>{value}</span>
    </div>
  );
}

function CargoFlowMap({ route }: { route: RouteProfile }) {
  const routeVisuals: Record<
    string,
    {
      nodes: { label: string; x: number; y: number; active?: boolean; hollow?: boolean }[];
      primaryPath: string;
      secondaryPath: string;
      focus: { x: number; y: number };
    }
  > = {
    "AF-901": {
      nodes: [
        { label: "LHR", x: 78, y: 118, hollow: true },
        { label: "AMS", x: 78, y: 200, hollow: true },
        { label: "DXB", x: 338, y: 118, hollow: true },
        { label: "JFK", x: 338, y: 200, active: true }
      ],
      primaryPath: "M 78 118 C 170 95 260 104 338 200",
      secondaryPath: "M 78 200 C 178 228 268 218 338 200",
      focus: { x: 338, y: 200 }
    },
    "GF-204": {
      nodes: [
        { label: "LAX", x: 62, y: 172, hollow: true },
        { label: "PHX", x: 170, y: 116 },
        { label: "DEN", x: 292, y: 90, hollow: true },
        { label: "CLN", x: 346, y: 184, active: true }
      ],
      primaryPath: "M 62 172 C 126 92 238 78 346 184",
      secondaryPath: "M 62 172 C 160 210 268 220 346 184",
      focus: { x: 346, y: 184 }
    },
    "MX-778": {
      nodes: [
        { label: "HUB", x: 64, y: 132, hollow: true },
        { label: "STG", x: 180, y: 92 },
        { label: "EST", x: 304, y: 126, hollow: true },
        { label: "GTE", x: 332, y: 210, active: true }
      ],
      primaryPath: "M 64 132 C 142 70 250 78 332 210",
      secondaryPath: "M 64 132 C 134 198 250 238 332 210",
      focus: { x: 332, y: 210 }
    }
  };

  const visual = routeVisuals[route.id] ?? routeVisuals["AF-901"];

  return (
    <div className="relative min-h-[500px] overflow-hidden bg-[#080b12] p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-45" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_58%,rgba(59,130,246,0.12),transparent_18%),radial-gradient(circle_at_18%_18%,rgba(99,102,241,0.08),transparent_26%)]" />

      <div className="relative z-10 flex items-start justify-between gap-6">
        <h3 className="max-w-md font-mono text-3xl font-black uppercase leading-snug tracking-[0.35em] text-slate-400">
          Live Route Intelligence: {route.id}
        </h3>
        <div className="border border-indigo-500/20 bg-indigo-500/5 px-8 py-5 text-center font-mono text-xl font-black uppercase leading-tight tracking-[0.25em] text-indigo-300 shadow-[0_0_40px_rgba(99,102,241,0.08)]">
          Uplink
          <br />
          Live
        </div>
      </div>

      <div className="relative z-10 my-10 h-px bg-white/5" />

      <div className="relative z-10 min-h-[260px] overflow-hidden rounded-lg border border-white/10 bg-[#111520]/70 shadow-2xl shadow-black/40">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 260" preserveAspectRatio="none">
          <defs>
            <filter id={`routeGlow-${route.id}`}>
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d={visual.primaryPath} fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="7 9" opacity="0.42" />
          <path d={visual.secondaryPath} fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="7 9" opacity="0.38" />
          <circle r="3.5" fill="#3b82f6" filter={`url(#routeGlow-${route.id})`}>
            <animateMotion path={visual.primaryPath} dur="3.2s" repeatCount="indefinite" rotate="auto" />
          </circle>
          <circle r="3" fill="#3b82f6" opacity="0.8">
            <animateMotion path={visual.secondaryPath} dur="4.4s" repeatCount="indefinite" rotate="auto" />
          </circle>
          <circle cx={visual.focus.x} cy={visual.focus.y} r="18" fill="none" stroke="#3b82f6" strokeOpacity="0.15" strokeWidth="2">
            <animate attributeName="r" values="14;24;14" dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.45;0.05;0.45" dur="2.6s" repeatCount="indefinite" />
          </circle>
          {visual.nodes.map((node) => (
            <g key={node.label}>
              <text x={node.x - 8} y={node.y - 16} fill="white" fontSize="10" fontWeight="900" letterSpacing="2">
                {node.label}
              </text>
              <circle
                cx={node.x}
                cy={node.y}
                r={node.active ? 9 : 6}
                fill={node.active ? "#3b82f6" : node.hollow ? "#111520" : "#3b82f6"}
                stroke="#60a5fa"
                strokeWidth="2"
                filter={node.active ? `url(#routeGlow-${route.id})` : undefined}
              />
              {node.active ? (
                <circle cx={node.x} cy={node.y} r="3" fill="#93c5fd">
                  <animate attributeName="opacity" values="1;0.25;1" dur="1.4s" repeatCount="indefinite" />
                </circle>
              ) : null}
            </g>
          ))}
        </svg>

        <div className="absolute bottom-8 right-8 flex flex-col items-end">
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">Link Quality</span>
          <span className="font-mono text-xl font-black uppercase text-white">{route.linkQuality}</span>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid grid-cols-2 gap-5">
        <DetailBox label="Transfer Mode" value={route.transferMode} />
        <DetailBox label="Scan Integrity" value={route.scanIntegrity} />
        <DetailBox label="ETA Lock" value={route.etaLock} color="indigo" />
        <DetailBox label="Exceptions" value={route.exceptions} color="indigo" />
      </div>
    </div>
  );
}

function RiskGauge({ value }: { value: number }) {
  const circum = 2 * Math.PI * 45;
  const offset = circum - (value / 100) * circum;
  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <svg className="h-full w-full -rotate-90 overflow-visible">
        <circle cx="64" cy="64" r="45" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/[0.03]" />
        <circle cx="64" cy="64" r="45" stroke="#10b981" strokeWidth="4" fill="transparent" strokeDasharray={circum} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <span className="absolute text-2xl font-black text-white">{value}%</span>
    </div>
  );
}

function RiskItem({ label, score, status }: { label: string; score: number; status: string }) {
  return (
    <div className="flex items-center justify-between border border-white/[0.03] bg-black/40 p-3">
      <span className="text-[8px] font-bold uppercase text-slate-600">{label}</span>
      <span className={`text-[10px] font-black uppercase ${status === "Correcting" ? "text-indigo-400" : "text-emerald-500"}`}>{score}%</span>
    </div>
  );
}

export function AeroFreightPreview() {
  const [time, setTime] = useState("");
  const [selectedRouteId, setSelectedRouteId] = useState(routeProfiles[0].id);
  const selectedRoute = routeProfiles.find((route) => route.id === selectedRouteId) ?? routeProfiles[0];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" }));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#050608] font-sans text-slate-300 selection:bg-indigo-500/20">
      <div className="pointer-events-none fixed inset-0 z-10 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.05),transparent_40%)]" />

      <main className="relative z-10 mx-auto flex w-full max-w-[1700px] flex-col gap-16 p-6 pt-20 lg:p-10">
        <section className="relative flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div className="relative z-10 flex flex-col">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-[2px] w-12 bg-indigo-500" />
              <span className="text-[10px] font-black uppercase leading-none tracking-[0.7em] text-indigo-400">Command Terminal v4.0</span>
            </div>
            <div className="text-8xl font-black uppercase leading-[0.75] tracking-[-0.06em] text-white md:text-[11rem]">
              AeroFreight
              <br />
              <span className="bg-gradient-to-r from-white via-slate-400 to-slate-800 bg-clip-text font-light italic tracking-[-0.02em] text-transparent">Private</span>
              <br />
              <span className="flex items-center gap-8">
                Logistics
                <div className="relative hidden h-[2px] flex-1 overflow-hidden rounded-full bg-white/5 lg:block">
                  <div className="absolute inset-0 translate-x-[-100%] bg-indigo-500/20" />
                </div>
              </span>
            </div>
          </div>

          <div className="relative z-10 grid min-w-[380px] grid-cols-2 gap-4">
            <QuickTile label="Fleet Active" value="03" sub="Global Routes" />
            <QuickTile label="ETA Accuracy" value={selectedRoute.etaAccuracy} sub="ML Optimized" />
            <QuickTile label="Security" value={selectedRoute.security} sub="Verified" color="emerald" />
            <QuickTile label="Velocity" value={selectedRoute.velocity} sub="KG/H Load" />
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-4">
            <Panel title="Route Operations Command" badge="Autonomous">
              <div className="mt-4 space-y-3">
                {routeProfiles.map((route) => (
                  <AssetCard
                    key={route.id}
                    id={route.id}
                    type={route.type}
                    dest={route.dest}
                    status={route.status}
                    active={selectedRoute.id === route.id}
                    onClick={() => setSelectedRouteId(route.id)}
                  />
                ))}
              </div>
              <button className="mt-10 h-14 w-full bg-white text-[11px] font-black uppercase tracking-[0.5em] text-black transition-all hover:bg-blue-600 hover:text-white">
                Execute Local Check
              </button>
            </Panel>

            <Panel title="Atmospheric Telemetry" badge="ZULU_OBS_04">
              <div className="mt-4 flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <WeatherNode {...selectedRoute.weather.origin} />
                  <WeatherNode {...selectedRoute.weather.destination} active />
                </div>
                <div className="group flex items-center justify-between rounded-sm border border-white/[0.03] bg-black/40 p-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[7px] font-black uppercase tracking-widest text-indigo-400">Visibility Index</span>
                    <span className="text-xl font-black uppercase tracking-tighter text-white">{selectedRoute.weather.visibility}</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">Optimal Flight Ceiling</span>
                  </div>
                  <div className="relative flex h-20 w-20 items-center justify-center">
                    <WindVector angle={selectedRoute.weather.windAngle} strength={selectedRoute.weather.windStrength} />
                  </div>
                </div>
                <div className="space-y-3">
                  <TelemetryRow label="Barometric Pressure" value={selectedRoute.weather.pressure} />
                  <TelemetryRow label="Dew Point Delta" value={selectedRoute.weather.dewPoint} />
                </div>
              </div>
            </Panel>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-5">
            <Panel title={`Live Route Intelligence: ${selectedRoute.id}`} badge="Uplink Live">
              <div className="mt-4 flex flex-col gap-6">
                <div className="group relative w-full overflow-hidden rounded-sm border border-white/5 bg-[#0d0f14]">
                  <CargoFlowMap route={selectedRoute} />
                </div>
              </div>
            </Panel>

            <Panel title="Dispatch Workflow Analytics" badge="Fulfillment Velocity">
              <div className="mt-8 flex h-[320px] w-full flex-col justify-between">
                <div className="relative flex flex-1 items-end justify-between gap-4 px-4">
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-between opacity-20">
                    {[1, 2, 3, 4].map((i) => <div key={i} className="h-px w-full bg-white/10" />)}
                  </div>
                  {selectedRoute.bars.map((h, i) => (
                    <div key={i} className="z-10 flex flex-1 flex-col items-center gap-4">
                      <div className="flex h-full w-full items-end overflow-hidden">
                        <div className="w-full bg-gradient-to-t from-blue-900 via-blue-500 to-white/30 transition-all duration-1000 ease-out" style={{ height: `${h}%` }} />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-700">V{i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-white/5 px-4 pt-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white">24H Efficiency Optimized</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">{time} ZULU</span>
                </div>
              </div>
            </Panel>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-3">
            <Panel title="Global Grid" badge="North_Atlantic">
              <div className="relative mt-4 flex aspect-square w-full items-center justify-center overflow-hidden rounded-sm border border-white/5 bg-black">
                <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)]" />
                <Globe size={180} className="relative z-10 text-slate-900 opacity-50" />
                <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                  <div className="h-[85%] w-[85%] rounded-full border border-white/5" />
                  <div className="absolute right-1/3 top-1/4 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)]" />
                </div>
              </div>
            </Panel>

            <Panel title="Executive Risk" badge="Integrity">
              <div className="mt-4 flex flex-col gap-6">
                <div className="relative flex justify-center overflow-hidden rounded-sm border border-white/5 bg-white/[0.02] py-4">
                  <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.4)]" />
                  <RiskGauge value={selectedRoute.risk} />
                </div>
                <div className="space-y-2">
                  <RiskItem label="Cyber Handshake" score={selectedRoute.cyberScore} status="Stable" />
                  <RiskItem label="Route Deviations" score={selectedRoute.routeScore} status={selectedRoute.routeStatus} />
                </div>
              </div>
            </Panel>
          </div>
        </section>
      </main>
    </div>
  );
}
