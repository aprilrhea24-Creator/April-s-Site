"use client";

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
  status = ""
}: {
  time: string;
  id: string;
  suite: string;
  status?: string;
}) {
  return (
    <div
      className={`group cursor-pointer rounded-lg border p-5 transition-all ${
        status === "Current"
          ? "border-blue-500/20 bg-blue-500/5 shadow-lg shadow-blue-500/5"
          : "border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]"
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className={`text-xs font-bold ${status === "Current" ? "text-white" : "text-slate-500"}`}>{time}</span>
          <div className="h-3 w-px bg-white/10" />
          <span className={`text-xs font-semibold ${status === "Current" ? "text-blue-400" : "text-white"}`}>{id}</span>
        </div>
        {status ? (
          <span
            className={`rounded-sm px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest ${
              status === "Current" ? "bg-blue-600 text-white" : "bg-white/10 text-slate-400"
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
    </div>
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
      <span className={`text-[11px] font-semibold uppercase tracking-widest ${status === "safe" ? "text-blue-500" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}

function LineChart() {
  const data = [40, 35, 55, 45, 70, 65, 80, 75, 90, 85, 95, 100];
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

function DonutChart() {
  const segments = [
    { label: "Laser", value: 45, color: "#3b82f6" },
    { label: "Injectables", value: 30, color: "#6366f1" },
    { label: "Facial", value: 15, color: "#94a3b8" },
    { label: "Other", value: 10, color: "#1e293b" }
  ];
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
          <span className="text-xl font-bold tracking-tight text-white">84</span>
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
              <MetricCard label="Pending Review" value="0" icon={<ClipboardCheck size={14} />} />
              <MetricCard label="Utilization" value="96%" icon={<TrendingUp size={14} />} />
            </div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Panel title="Patient Influx & Trends" icon={<Activity size={18} />} badge="Live Data">
              <div className="relative mt-4 h-[240px] w-full">
                <LineChart />
              </div>
            </Panel>
          </div>
          <div className="lg:col-span-4">
            <Panel title="Treatment Distribution" icon={<PieChartIcon size={18} />} badge="Analytics">
              <div className="mt-4 flex h-[240px] w-full items-center justify-center">
                <DonutChart />
              </div>
            </Panel>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-4">
            <Panel title="Patient Grid" icon={<LayoutGrid size={18} />} badge="Terminal">
              <div className="flex flex-col gap-3">
                <StatusItem label="84 Active Health Profiles" active />
                <StatusItem label="Local State Synchronization" />
                <StatusItem label="Direct Data Access" />
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
                  <span className="rounded bg-white/5 px-2 py-1 text-[9px] font-bold text-slate-400">PENDING</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 py-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Clinical Media</span>
                  <span className="rounded bg-blue-500/10 px-2 py-1 text-[9px] font-bold text-blue-500">VERIFIED</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Deposit Gateway</span>
                  <span className="rounded bg-blue-500/10 px-2 py-1 text-[9px] font-bold text-blue-500">SECURE</span>
                </div>
              </div>
            </Panel>
          </div>

          <div className="lg:col-span-5">
            <Panel title="Scheduling Matrix" icon={<Calendar size={18} />} badge="Today">
              <div className="grid grid-cols-1 gap-4">
                <ScheduleCard time="09:00" id="LUM-084" suite="Suite B" status="Current" />
                <ScheduleCard time="10:30" id="LUM-136" suite="Suite A" status="Up Next" />
                <ScheduleCard time="12:00" id="LUM-112" suite="Suite C" />
                <ScheduleCard time="14:30" id="LUM-201" suite="Suite D" />
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
                <div className="text-xl font-semibold tracking-tight text-white">Ari M.</div>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">Ref ID: LUM-084</p>
              </div>

              <div className="space-y-5">
                <DataField label="Primary Care" value="Laser Resurfacing" />
                <DataField label="Risk Factor" value="Low Risk" status="safe" />
                <DataField label="Facility" value="Suite B" />
                <div className="border-t border-white/5 pt-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Account Value</span>
                    <span className="text-xs font-bold text-white">$1,840.00</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-2/3 bg-blue-600" />
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
