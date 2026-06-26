"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Fingerprint,
  Globe,
  Maximize2,
  ShieldAlert
} from "lucide-react";

const approvalQueue = [
  { title: "Root Seal Request", id: "SEC-420X", status: "Ready", alert: false },
  { title: "Escrow Liquidity", id: "ESC-092Z", status: "Wait", alert: true },
  { title: "Node Synchronization", id: "SYN-112B", status: "Ready", alert: false }
];

function QuickStat({ label, value, sub, alert = false, active = false }: { label: string; value: string; sub: string; alert?: boolean; active?: boolean }) {
  return (
    <div className={`border bg-[#0c0c0c] p-4 transition-all hover:bg-orange-500/5 ${alert ? "border-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.2)]" : "border-white/5"}`}>
      <div className="mb-1 text-[8px] font-black uppercase tracking-widest text-orange-900">{label}</div>
      <div className={`text-2xl font-black tracking-tighter ${alert ? "text-orange-500" : "text-white"}`}>{value}</div>
      <div className="mt-1 flex items-center gap-2">
        <div className={`h-1 w-1 rounded-full ${active ? "animate-pulse bg-emerald-500" : "bg-orange-900"}`} />
        <span className="text-[7px] font-black uppercase tracking-widest text-orange-900">{sub}</span>
      </div>
    </div>
  );
}

function Panel({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <div className="group relative border border-orange-500/10 bg-[#080808] p-6 shadow-2xl transition-all hover:border-orange-500/20">
      <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-orange-500/40" />
      <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-orange-500/40" />
      <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-3">
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-900 transition-colors group-hover:text-white">{title}</div>
        {badge ? (
          <span className="border border-orange-500/20 bg-orange-500/5 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-orange-500">
            {badge}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

function NodeBox({ index, active }: { index: number; active: boolean }) {
  return (
    <div className={`group relative flex aspect-square flex-col items-center justify-center border transition-all ${active ? "border-orange-500/40 bg-orange-500/5 shadow-[0_0_10px_rgba(249,115,22,0.1)]" : "border-white/5 bg-white/[0.01] hover:border-orange-500/20"}`}>
      <span className={`text-[9px] font-black ${active ? "text-orange-500" : "text-orange-900"}`}>{index.toString().padStart(2, "0")}</span>
      {active ? <div className="absolute bottom-1 h-1 w-1 animate-pulse rounded-full bg-orange-500" /> : null}
    </div>
  );
}

function TacticalBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="w-full">
      <div className="mb-2 flex justify-between">
        <span className="text-[9px] font-black uppercase tracking-widest text-orange-900">{label}</span>
        <span className="text-[9px] font-black text-white">{value}%</span>
      </div>
      <div className="relative h-1 w-full overflow-hidden bg-white/5">
        <div className="h-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)] transition-all duration-1000" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function DataRow({ label, value, color = "white" }: { label: string; value: string; color?: "white" | "orange" | "emerald" }) {
  const colors = { white: "text-white", orange: "text-orange-500", emerald: "text-emerald-500" };
  return (
    <div className="flex items-center justify-between border-b border-white/5 py-2 last:border-0">
      <span className="text-[8px] font-black uppercase tracking-widest text-orange-900">{label}</span>
      <span className={`text-[10px] font-black uppercase tracking-widest ${colors[color]}`}>{value}</span>
    </div>
  );
}

function QueueCard({
  title,
  id,
  status,
  alert = false,
  synced,
  onSync
}: {
  title: string;
  id: string;
  status: string;
  alert?: boolean;
  synced: boolean;
  onSync: () => void;
}) {
  return (
    <div className="group flex items-center justify-between border border-white/5 bg-white/[0.01] p-4 transition-all hover:bg-orange-500/5">
      <div>
        <div className="mb-0.5 text-[10px] font-black uppercase tracking-wider text-white">{title}</div>
        <span className="text-[8px] font-black tracking-widest text-orange-900">{id}</span>
      </div>
      <div className="flex items-center gap-6">
        <span className={`text-[8px] font-black uppercase tracking-widest ${synced ? "text-emerald-500" : alert ? "animate-pulse text-orange-500" : "text-emerald-500"}`}>
          {synced ? "Active" : status}
        </span>
        <button
          type="button"
          onClick={onSync}
          className="h-7 bg-white px-4 text-[8px] font-black uppercase tracking-widest text-black transition-all hover:bg-orange-500 hover:text-white"
        >
          {synced ? "Live" : "Sync"}
        </button>
      </div>
    </div>
  );
}

function TacticalWaveChart() {
  const points = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        x: (i / 49) * 100,
        y: 50 + Math.sin(i * 0.5) * 25 + Math.cos(i * 0.31) * 8
      })),
    []
  );
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  return (
    <div className="relative h-full w-full">
      <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="orangeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path d={path} fill="none" stroke="url(#orangeGrad)" strokeWidth="1.2" className="drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
        {points.filter((_, i) => i % 5 === 0).map((p) => (
          <circle key={`${p.x}-${p.y}`} cx={p.x} cy={p.y} r="0.9" fill="#f97316" className="animate-pulse" />
        ))}
      </svg>
    </div>
  );
}

export function VanguardOpsPreview() {
  const [time, setTime] = useState("");
  const [syncedIds, setSyncedIds] = useState<string[]>([]);
  const syncedCount = syncedIds.length;
  const pendingCount = approvalQueue.length - syncedCount;
  const auditScore = 88 + syncedCount * 4;
  const activeNodeCount = 2 + syncedCount * 3;
  const productionBranch = Math.min(93, 78 + syncedCount * 5);
  const escrowVault = Math.min(78, 42 + syncedCount * 12);
  const authProtocol = Math.min(66, 12 + syncedCount * 18);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#050505] font-mono text-orange-100 selection:bg-orange-500/30">
      <div className="pointer-events-none fixed inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] opacity-[0.05]" />

      <main className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col gap-10 p-6 lg:p-10">
        <section className="relative flex flex-col gap-6">
          <div className="absolute -left-2 -top-6 text-[7px] font-black uppercase tracking-[1.5em] text-orange-500/20">Tactical_OS_v4.0.0</div>
          <div className="flex flex-col text-6xl font-black uppercase leading-[0.8] tracking-tighter md:text-[10rem]">
            <span className="relative inline-block text-white">
              Vanguard
              <div className="absolute bottom-0 left-0 h-1 w-32 bg-orange-500" />
            </span>
            <div className="flex items-center gap-4">
              <span className="italic text-orange-500">Ops</span>
              <span className="text-2xl font-black tracking-[0.2em] text-slate-800 md:text-5xl">Matrix</span>
            </div>
          </div>
          <div className="mt-4 grid max-w-4xl grid-cols-2 gap-2 md:grid-cols-4">
            <QuickStat label="Clusters" value="04" sub="Isolated" />
            <QuickStat label="Approvals" value={pendingCount.toString().padStart(2, "0")} sub="Pending" alert={pendingCount > 0} active={pendingCount === 0} />
            <QuickStat label="Latency" value={`${41 - syncedCount * 4}ms`} sub="Response" />
            <QuickStat label="Leaks" value="00" sub="Security" active />
          </div>
          <div className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-900">Time_Stamp: <span className="text-white">{time}</span></div>
        </section>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-8">
            <div className="group relative overflow-hidden border-2 border-orange-500/10 bg-[#0a0a0a] p-1">
              <div className="absolute right-0 top-0 p-2 opacity-20 transition-opacity group-hover:opacity-100">
                <Maximize2 size={16} className="text-orange-500" />
              </div>
              <div className="h-full border border-orange-500/20 p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-6 w-1.5 bg-orange-500" />
                    <div className="text-xs font-black uppercase tracking-[0.5em] text-white">01. Real-time Network Matrix</div>
                  </div>
                  <div className="flex items-center gap-4 text-[8px] font-black uppercase text-orange-900">
                    <span>Scan_Freq: 1.24GHz</span>
                    <span className="animate-pulse text-orange-500">Live</span>
                  </div>
                </div>
                <div className="relative h-[300px] w-full">
                  <TacticalWaveChart />
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Panel title="02. Core Infrastructure" badge="16_NODES">
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <NodeBox key={i} index={i + 1} active={i === 3 || i === 7 || i < activeNodeCount} />
                  ))}
                </div>
              </Panel>
              <Panel title="03. Partition Analytics" badge="SECURE">
                <div className="mt-6 space-y-6">
                  <TacticalBar label="Production Branch" value={productionBranch} />
                  <TacticalBar label="Escrow Vault" value={escrowVault} />
                  <TacticalBar label="Auth Protocol" value={authProtocol} />
                  <div className="flex items-center justify-between border-t border-orange-500/10 pt-4">
                    <span className="text-[8px] font-black italic uppercase leading-none tracking-widest text-orange-900">&gt; INIT_AUDIT_LOG</span>
                    <Fingerprint size={18} className="text-orange-500/50" />
                  </div>
                </div>
              </Panel>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-4">
            <Panel title="Global Node Topology" badge="REGION_01">
              <div className="relative mt-4 flex aspect-square w-full items-center justify-center overflow-hidden border border-orange-500/20 bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent)]" />
                <Globe size={180} className="relative z-10 text-orange-900/20" />
                <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                  <div className="h-[80%] w-[80%] rounded-full border-2 border-orange-500/10" />
                  <div className="absolute h-[60%] w-[60%] animate-ping rounded-full border border-orange-500/10" />
                  <div className="absolute left-1/3 top-1/4 h-2 w-2 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,1)]" />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <DataRow label="Region" value="EUROPE_WEST" />
                <DataRow label="Protocol" value="SIGMA_HANDSHAKE" color="orange" />
                <DataRow label="Stability" value={pendingCount === 0 ? "FULLY_ACTIVE" : "OPTIMIZED"} color="emerald" />
              </div>
            </Panel>

            <Panel title="Approval Matrix" badge={`${pendingCount.toString().padStart(2, "0")}_PENDING`}>
              <div className="mt-4 space-y-2">
                {approvalQueue.map((item) => (
                  <QueueCard
                    key={item.id}
                    {...item}
                    synced={syncedIds.includes(item.id)}
                    onSync={() => setSyncedIds((current) => (current.includes(item.id) ? current : [...current, item.id]))}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setSyncedIds(approvalQueue.map((item) => item.id))}
                className="mt-6 h-12 w-full bg-white text-[10px] font-black uppercase tracking-[0.5em] text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:bg-orange-500 hover:text-white"
              >
                Execute_Global_Override
              </button>
            </Panel>

            <div className="group relative overflow-hidden border border-orange-500/20 bg-orange-500/5 p-8">
              <div className="absolute right-0 top-0 p-2 opacity-10 transition-opacity group-hover:opacity-100">
                <ShieldAlert size={20} className="text-orange-500" />
              </div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-2 w-2 bg-orange-500" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Critical Protocol</span>
              </div>
              <div className="flex flex-col">
                <span className="mb-2 text-[7px] font-black uppercase text-orange-900">Audit Score</span>
                <span className="text-2xl font-black uppercase tracking-tighter text-orange-500">{auditScore.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
