"use client";

import { useEffect, useState } from "react";
import {
  Cloud,
  Globe,
  Plane,
  Truck,
} from "lucide-react";

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

function AssetCard({ id, type, dest, status, active = false }: { id: string; type: string; dest: string; status: string; active?: boolean }) {
  return (
    <div className={`group flex cursor-pointer items-center justify-between border p-6 transition-all hover:bg-white/[0.03] ${active ? "border-indigo-500/20 bg-indigo-500/[0.03]" : "border-white/[0.02] bg-white/[0.01]"}`}>
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
    </div>
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

function CargoFlowMap() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden p-4">
      <svg className="h-full w-full overflow-visible" viewBox="0 0 400 225">
        <path d="M 50,50 Q 200,20 350,150" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
        <circle r="2.5" fill="#3b82f6">
          <animateMotion path="M 50,50 Q 200,20 350,150" dur="4s" repeatCount="indefinite" rotate="auto" />
        </circle>
        <circle cx="50" cy="50" r="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="350" cy="150" r="5" fill="#3b82f6" stroke="#3b82f6" strokeWidth="1.5" />
      </svg>
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
            <QuickTile label="ETA Accuracy" value="96%" sub="ML Optimized" />
            <QuickTile label="Security" value="100%" sub="Verified" color="emerald" />
            <QuickTile label="Velocity" value="1.2k" sub="KG/H Load" />
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-4">
            <Panel title="Route Operations Command" badge="Autonomous">
              <div className="mt-4 space-y-3">
                <AssetCard id="AF-901" type="Air" dest="Private Hangar - Dock 4" status="Rerouting" active />
                <AssetCard id="GF-204" type="Ground" dest="Cold Vault - Clinic Wing" status="Loading" />
                <AssetCard id="MX-778" type="Ground" dest="Metro Hub - Secure Estate" status="Departed" />
              </div>
              <button className="mt-10 h-14 w-full bg-white text-[11px] font-black uppercase tracking-[0.5em] text-black transition-all hover:bg-blue-600 hover:text-white">
                Execute Local Check
              </button>
            </Panel>

            <Panel title="Atmospheric Telemetry" badge="ZULU_OBS_04">
              <div className="mt-4 flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <WeatherNode label="LHR_LONDON" temp="12°C" cond="Overcast" wind="14kt NE" />
                  <WeatherNode label="JFK_NEWYORK" temp="24°C" cond="Clear" wind="08kt S" active />
                </div>
                <div className="group flex items-center justify-between rounded-sm border border-white/[0.03] bg-black/40 p-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[7px] font-black uppercase tracking-widest text-indigo-400">Visibility Index</span>
                    <span className="text-xl font-black uppercase tracking-tighter text-white">9.2 KM</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">Optimal Flight Ceiling</span>
                  </div>
                  <div className="relative flex h-20 w-20 items-center justify-center">
                    <WindVector angle={145} strength={65} />
                  </div>
                </div>
                <div className="space-y-3">
                  <TelemetryRow label="Barometric Pressure" value="1013.2 hPa" />
                  <TelemetryRow label="Dew Point Delta" value="+4.2°C" />
                </div>
              </div>
            </Panel>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-5">
            <Panel title="Live Route Intelligence: AF-901" badge="Uplink Live">
              <div className="mt-4 flex flex-col gap-6">
                <div className="group relative aspect-video w-full overflow-hidden rounded-sm border border-white/5 bg-[#0d0f14]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent)]" />
                  <CargoFlowMap />
                  <div className="absolute bottom-4 right-4 flex flex-col items-end">
                    <span className="text-[7px] font-black uppercase tracking-widest text-blue-500">Link Quality</span>
                    <span className="text-[10px] font-black text-white">99.2% STABLE</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <DetailBox label="Transfer Mode" value="Air_Priority" />
                  <DetailBox label="Scan Integrity" value="14 / 14 Verified" />
                  <DetailBox label="ETA Lock" value="10:14 Zulu" color="indigo" />
                  <DetailBox label="Exceptions" value="Manual_Override" color="indigo" />
                </div>
              </div>
            </Panel>

            <Panel title="Dispatch Workflow Analytics" badge="Fulfillment Velocity">
              <div className="mt-8 flex h-[320px] w-full flex-col justify-between">
                <div className="relative flex flex-1 items-end justify-between gap-4 px-4">
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-between opacity-20">
                    {[1, 2, 3, 4].map((i) => <div key={i} className="h-px w-full bg-white/10" />)}
                  </div>
                  {[65, 88, 55, 95, 75, 90, 82, 60].map((h, i) => (
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
                  <RiskGauge value={96.8} />
                </div>
                <div className="space-y-2">
                  <RiskItem label="Cyber Handshake" score={100} status="Stable" />
                  <RiskItem label="Route Deviations" score={88} status="Correcting" />
                </div>
              </div>
            </Panel>
          </div>
        </section>
      </main>
    </div>
  );
}
