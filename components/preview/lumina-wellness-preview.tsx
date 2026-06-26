"use client";

import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Calendar,
  ChevronRight,
  ClipboardCheck,
  LayoutGrid,
  PieChart as PieChartIcon,
  Search,
  ShieldCheck,
  TrendingUp,
  User,
  Users
} from "lucide-react";

type PatientProfile = {
  id: string;
  name: string;
  time: string;
  suite: string;
  status?: string;
  treatment: string;
  risk: string;
  riskTone: "safe" | "review" | "vip";
  value: string;
  utilization: string;
  pending: string;
  progress: string;
  vault: {
    consent: string;
    media: string;
    deposit: string;
  };
  trend: number[];
  segments: { label: string; value: number; color: string }[];
};

const patientProfiles: PatientProfile[] = [
  {
    id: "LUM-084",
    name: "Ari M.",
    time: "09:00",
    suite: "Suite B",
    status: "Current",
    treatment: "Laser Resurfacing",
    risk: "Low Risk",
    riskTone: "safe",
    value: "$1,840.00",
    utilization: "96%",
    pending: "0",
    progress: "68%",
    vault: { consent: "PENDING", media: "VERIFIED", deposit: "SECURE" },
    trend: [40, 35, 55, 45, 70, 65, 80, 75, 90, 85, 95, 100],
    segments: [
      { label: "Laser", value: 45, color: "#3b82f6" },
      { label: "Injectables", value: 30, color: "#6366f1" },
      { label: "Facial", value: 15, color: "#94a3b8" },
      { label: "Other", value: 10, color: "#1e293b" }
    ]
  },
  {
    id: "LUM-136",
    name: "Noor S.",
    time: "10:30",
    suite: "Suite A",
    status: "Up Next",
    treatment: "Hydrafacial Elite",
    risk: "Clear",
    riskTone: "safe",
    value: "$480.00",
    utilization: "88%",
    pending: "1",
    progress: "42%",
    vault: { consent: "VERIFIED", media: "QUEUED", deposit: "SECURE" },
    trend: [35, 42, 50, 48, 58, 62, 66, 64, 72, 76, 82, 88],
    segments: [
      { label: "Facial", value: 52, color: "#3b82f6" },
      { label: "Laser", value: 18, color: "#6366f1" },
      { label: "Wellness", value: 20, color: "#94a3b8" },
      { label: "Other", value: 10, color: "#1e293b" }
    ]
  },
  {
    id: "LUM-112",
    name: "Kira V.",
    time: "12:00",
    suite: "Suite C",
    treatment: "Injectables",
    risk: "Review",
    riskTone: "review",
    value: "$920.00",
    utilization: "91%",
    pending: "2",
    progress: "51%",
    vault: { consent: "REVIEW", media: "VERIFIED", deposit: "HOLD" },
    trend: [60, 52, 45, 58, 62, 56, 70, 64, 80, 74, 88, 84],
    segments: [
      { label: "Injectables", value: 55, color: "#3b82f6" },
      { label: "Facial", value: 20, color: "#6366f1" },
      { label: "Laser", value: 15, color: "#94a3b8" },
      { label: "Other", value: 10, color: "#1e293b" }
    ]
  },
  {
    id: "LUM-201",
    name: "Mila R.",
    time: "14:30",
    suite: "Suite D",
    treatment: "Membership Consult",
    risk: "VIP",
    riskTone: "vip",
    value: "$2,250.00",
    utilization: "98%",
    pending: "0",
    progress: "82%",
    vault: { consent: "SIGNED", media: "VERIFIED", deposit: "SECURE" },
    trend: [70, 74, 78, 76, 82, 86, 90, 88, 94, 96, 98, 100],
    segments: [
      { label: "VIP", value: 40, color: "#3b82f6" },
      { label: "Laser", value: 25, color: "#6366f1" },
      { label: "Injectables", value: 25, color: "#94a3b8" },
      { label: "Other", value: 10, color: "#1e293b" }
    ]
  }
];

function MetricCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="group rounded border border-white/5 bg-[#0c0d0e] p-5 transition-all hover:border-blue-500/20">
      <div className="mb-3 flex items-center gap-2 text-slate-600 transition-colors group-hover:text-blue-500">
        {icon}
        <span className="text-[9px] font-bold uppercase tracking-widest">{label}</span>
      </div>
      <div className="text-lg font-semibold tracking-tight text-white">{value}</div>
    </div>
  );
}

function Panel({
  title,
  icon,
  badge = "",
  children
}: {
  title: string;
  icon: React.ReactNode;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-white/5 bg-[#0c0d0e] p-7 shadow-xl shadow-black/20 transition-all hover:border-white/10">
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded bg-blue-500/5 p-1.5 text-blue-500">{icon}</div>
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">{title}</div>
        </div>
        {badge ? (
          <span className="rounded border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-slate-500">
            {badge}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

function StatusItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 rounded border p-4 transition-all ${
        active ? "border-blue-500/10 bg-blue-500/[0.02]" : "border-white/5 bg-white/[0.01]"
      }`}
    >
      <div className={`h-1 w-1 rounded-full ${active ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "bg-slate-800"}`} />
      <span className={`text-[11px] font-medium uppercase tracking-widest ${active ? "text-blue-400" : "text-slate-600"}`}>
        {label}
      </span>
    </div>
  );
}

function ScheduleCard({
  time,
  id,
  suite,
  status = "",
  active = false,
  onClick
}: {
  time: string;
  id: string;
  suite: string;
  status?: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group cursor-pointer rounded-lg border p-5 transition-all ${
        active
          ? "border-blue-500/20 bg-blue-500/5 shadow-lg shadow-blue-500/5"
          : "border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]"
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className={`text-xs font-bold ${active ? "text-white" : "text-slate-500"}`}>{time}</span>
          <div className="h-3 w-px bg-white/10" />
          <span className={`text-xs font-semibold ${active ? "text-blue-400" : "text-white"}`}>{id}</span>
        </div>
        {status ? (
          <span
            className={`rounded-sm px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest ${
              active ? "bg-blue-600 text-white" : "bg-white/10 text-slate-400"
            }`}
          >
            {status}
          </span>
        ) : null}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">{suite}</span>
        <ChevronRight size={12} className="text-slate-700 transition-colors group-hover:text-white" />
      </div>
    </button>
  );
}

function DataField({
  label,
  value,
  status = ""
}: {
  label: string;
  value: string;
  status?: string;
}) {
  return (
    <div className="group flex items-center justify-between">
      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-600">{label}</span>
      <span
        className={`text-[11px] font-semibold uppercase tracking-widest ${
          status === "safe" ? "text-blue-500" : status === "review" ? "text-amber-400" : status === "vip" ? "text-indigo-300" : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function LineChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const width = 800;
  const height = 200;
  const points = data.map((d, i) => `${(i / (data.length - 1)) * width},${height - (d / max) * height}`).join(" ");

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-[180px] w-full overflow-visible">
        <defs>
          <linearGradient id="luminaLineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="luminaAreaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 0.25, 0.5, 0.75, 1].map((p) => (
          <line key={p} x1="0" y1={p * height} x2={width} y2={p * height} stroke="white" strokeOpacity="0.03" strokeWidth="1" />
        ))}
        <polyline points={points} fill="none" stroke="url(#luminaLineGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points={`${points} ${width},${height} 0,${height}`} fill="url(#luminaAreaGradient)" className="opacity-20" />
      </svg>
      <div className="flex justify-between border-t border-white/5 px-2 pt-4">
        {["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"].map((time) => (
          <span key={time} className="text-[9px] font-bold tracking-widest text-slate-600">
            {time}
          </span>
        ))}
      </div>
    </div>
  );
}

function DonutChart({ segments, total }: { segments: PatientProfile["segments"]; total: string }) {
  const size = 160;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  let currentOffset = 0;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          {segments.map((segment) => {
            const offset = (segment.value / 100) * circumference;
            const dashOffset = currentOffset;
            currentOffset += offset;
            return (
              <circle
                key={segment.label}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={segment.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${offset} ${circumference - offset}`}
                strokeDashoffset={-dashOffset}
                className="transition-all duration-1000 ease-out"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold tracking-tight text-white">{total}</span>
          <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">Total</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        {segments.map((segment) => (
          <div key={segment.label} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: segment.color }} />
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{segment.label}</span>
            <span className="ml-auto text-[9px] font-bold text-white">{segment.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LuminaWellnessPreview() {
  const [selectedPatientId, setSelectedPatientId] = useState(patientProfiles[0].id);
  const selectedPatient = patientProfiles.find((profile) => profile.id === selectedPatientId) ?? patientProfiles[0];

  return (
    <div className="min-h-screen w-full bg-[#08090a] font-sans text-slate-300 selection:bg-blue-500/30">
      <main className="mx-auto max-w-[1400px] px-6 pb-24 pt-24">
        <div className="mb-20">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-px w-8 bg-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500/80">Management Console</span>
          </div>
          <div className="mb-8 text-7xl font-medium leading-[1] tracking-tight text-white md:text-8xl">
            Lumina
            <br />
            Wellness
            <br />
            <span className="font-light italic tracking-normal text-slate-500">Portal</span>
          </div>
          <div className="flex flex-col justify-between gap-8 border-t border-white/5 pt-8 md:flex-row md:items-end">
            <p className="max-w-sm text-xs font-medium uppercase leading-loose tracking-widest text-slate-500">
              Aesthetics clinic enterprise terminal - Operational monitoring & profile management
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <MetricCard label="Active Profiles" value="84" icon={<Users size={14} />} />
              <MetricCard label="Providers" value="12" icon={<Activity size={14} />} />
              <MetricCard label="Pending Review" value={selectedPatient.pending} icon={<ClipboardCheck size={14} />} />
              <MetricCard label="Utilization" value={selectedPatient.utilization} icon={<TrendingUp size={14} />} />
            </div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Panel title="Patient Influx & Trends" icon={<Activity size={18} />} badge="Live Data">
              <div className="relative mt-4 h-[240px] w-full">
                <LineChart data={selectedPatient.trend} />
              </div>
            </Panel>
          </div>
          <div className="lg:col-span-4">
            <Panel title="Treatment Distribution" icon={<PieChartIcon size={18} />} badge="Analytics">
              <div className="mt-4 flex h-[240px] w-full items-center justify-center">
                <DonutChart segments={selectedPatient.segments} total={selectedPatient.pending === "0" ? "84" : `8${selectedPatient.pending}`} />
              </div>
            </Panel>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-4">
            <Panel title="Patient Grid" icon={<LayoutGrid size={18} />} badge="Terminal">
              <div className="flex flex-col gap-3">
                <StatusItem label={`${selectedPatient.id} Profile Active`} active />
                <StatusItem label={`${selectedPatient.suite} Local State Synchronization`} />
                <StatusItem label={`${selectedPatient.treatment} Direct Data Access`} />
              </div>
              <div className="mt-8">
                <button className="group flex w-full items-center justify-center gap-2 rounded bg-slate-100 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-white">
                  Execute Audit Check
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </Panel>

            <Panel title="Data Vault" icon={<ShieldCheck size={18} />} badge="Encrypted">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 py-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Consent Form</span>
                  <span className="rounded bg-white/5 px-2 py-1 text-[9px] font-bold text-slate-400">{selectedPatient.vault.consent}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 py-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Clinical Media</span>
                  <span className="rounded bg-blue-500/10 px-2 py-1 text-[9px] font-bold text-blue-500">{selectedPatient.vault.media}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Deposit Gateway</span>
                  <span className="rounded bg-blue-500/10 px-2 py-1 text-[9px] font-bold text-blue-500">{selectedPatient.vault.deposit}</span>
                </div>
              </div>
            </Panel>
          </div>

          <div className="lg:col-span-5">
            <Panel title="Scheduling Matrix" icon={<Calendar size={18} />} badge="Today">
              <div className="grid grid-cols-1 gap-4">
                {patientProfiles.map((profile) => (
                  <ScheduleCard
                    key={profile.id}
                    time={profile.time}
                    id={profile.id}
                    suite={profile.suite}
                    status={profile.status}
                    active={selectedPatient.id === profile.id}
                    onClick={() => setSelectedPatientId(profile.id)}
                  />
                ))}
              </div>
            </Panel>
          </div>

          <div className="lg:col-span-3">
            <Panel title="Patient Intelligence" icon={<Search size={18} />}>
              <div className="mb-10 flex flex-col items-center pt-4">
                <div className="relative mb-4 h-20 w-20 rounded border border-white/10 bg-[#0c0d0e] p-1">
                  <div className="flex h-full w-full items-center justify-center rounded bg-slate-900/50">
                    <User size={32} className="text-slate-700" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded bg-blue-600">
                    <ShieldCheck size={12} className="text-white" />
                  </div>
                </div>
                <div className="text-xl font-semibold tracking-tight text-white">{selectedPatient.name}</div>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">Ref ID: {selectedPatient.id}</p>
              </div>

              <div className="space-y-5">
                <DataField label="Primary Care" value={selectedPatient.treatment} />
                <DataField label="Risk Factor" value={selectedPatient.risk} status={selectedPatient.riskTone} />
                <DataField label="Facility" value={selectedPatient.suite} />
                <div className="border-t border-white/5 pt-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Account Value</span>
                    <span className="text-xs font-bold text-white">{selectedPatient.value}</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                    <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: selectedPatient.progress }} />
                  </div>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </main>
    </div>
  );
}
