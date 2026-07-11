import Link from "next/link";
import { ArrowLeft, ArrowRight, BarChart3, Database, MapPinned, Plane, ShieldCheck, Users } from "lucide-react";

import { getPackage } from "@/lib/packages";

type LandingKey = "booking-core" | "dispatch-autonomous" | "secure-console" | "global-intelligence";
type PackageDetail = NonNullable<ReturnType<typeof getPackage>>;

const dashboardHrefs: Record<LandingKey, string> = {
  "booking-core": "/preview/booking-core",
  "dispatch-autonomous": "/preview/dispatch-autonomous",
  "secure-console": "/preview/secure-console",
  "global-intelligence": "/preview/global-intelligence"
};

const packageSlugs: Record<LandingKey, string> = {
  "booking-core": "premium-restaurant",
  "dispatch-autonomous": "field-team-command",
  "secure-console": "enterprise-booking",
  "global-intelligence": "founder-saas"
};

export function SolutionLandingPage({ landingKey }: { landingKey: LandingKey }) {
  const packageDetail = getPackage(packageSlugs[landingKey]);
  if (!packageDetail) return null;

  switch (landingKey) {
    case "booking-core":
      return <LuminaLanding packageDetail={packageDetail} />;
    case "dispatch-autonomous":
      return <AeroFlightLanding packageDetail={packageDetail} />;
    case "secure-console":
      return <VanguardLanding packageDetail={packageDetail} />;
    case "global-intelligence":
      return <NexusLanding packageDetail={packageDetail} />;
  }
}

function BackToSolutions({ tone = "text-white/70" }: { tone?: string }) {
  return (
    <Link href="/solutions" className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition hover:text-white ${tone}`}>
      <ArrowLeft className="h-4 w-4" />
      All solution pages
    </Link>
  );
}

function DashboardCta({ href, tone = "bg-white text-black hover:bg-white/85" }: { href: string; tone?: string }) {
  return (
    <Link href={href} className={`group inline-flex items-center justify-center gap-3 px-6 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 ${tone}`}>
      View workflow example on dashboard
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

function LiveDot({ label, color = "bg-cyan-300" }: { label: string; color?: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/65">
      <span className={`h-2 w-2 rounded-full ${color} animate-pulse`} />
      {label}
    </span>
  );
}

function LuminaLanding({ packageDetail }: { packageDetail: PackageDetail }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#10100f] text-white">
      <div className="absolute inset-0 overflow-hidden bg-[#151412]">
        <video autoPlay loop muted playsInline preload="metadata" className="h-full w-full object-cover opacity-80 [animation:lumina-video-pan_34s_ease-in-out_infinite_alternate]">
          <source src="/lumina-wellness-reel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,15,0.9)_0%,rgba(16,16,15,0.5)_44%,rgba(16,16,15,0.18)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10100f] via-transparent to-black/30" />
      </div>

      <header className="relative z-10 border-b border-white/15 bg-[#171614]/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-lg font-black text-black">L</span>
            <span className="leading-none"><b className="block text-sm tracking-[0.16em]">LUMINA</b><i className="text-sm font-light text-[#d8b5ba]">Wellness</i></span>
          </div>
          <nav className="hidden items-center gap-9 text-[10px] font-bold uppercase tracking-[0.28em] text-white/70 lg:flex">
            <span>Treatments</span><span>Science</span><span>Philosophy</span><span>Portal</span>
          </nav>
          <Link href={`/consultation?package=${packageDetail.consultationPackage}&tier=${packageDetail.consultationTier}`} className="bg-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#f3dce0] sm:px-6">Book consult</Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-[1500px] items-end gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="max-w-4xl">
          <BackToSolutions tone="text-white/60" />
          <p className="mt-14 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.45em] text-[#f2c8cf]"><span className="h-px w-12 bg-[#e5b3bb]" /> Management console</p>
          <h1 className="mt-7 text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] text-white">Refining<br />the human<span className="mt-3 block font-light italic normal-case tracking-[-0.06em] text-white/35">canvas</span></h1>
          <p className="mt-9 max-w-xl text-xs font-medium uppercase leading-loose tracking-[0.22em] text-white/65">Aesthetics clinic enterprise terminal for operational monitoring, client intake, provider scheduling, and secure profile management.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            {["Treatment intake", "Provider roster", "Consent vault"].map((item) => <span key={item} className="border border-white/20 bg-black/20 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">{item}</span>)}
          </div>
        </div>

        <div className="space-y-5 rounded-3xl border border-white/15 bg-[#0e0e0d]/75 p-5 shadow-2xl backdrop-blur-2xl sm:p-7">
          <div className="flex items-center justify-between"><div className="flex items-center gap-3"><span className="rounded-lg bg-[#e5b3bb]/15 p-2 text-[#f2c8cf]"><Users className="h-5 w-5" /></span><h2 className="text-xs font-black uppercase tracking-[0.25em]">Patient grid</h2></div><LiveDot label="Terminal" color="bg-[#e5b3bb]" /></div>
          {["84 active health profiles", "Local state synchronization", "Direct data access"].map((item, index) => <div key={item} className="flex items-center gap-4 border border-white/10 bg-white/[0.035] p-4"><span className={`h-2 w-2 rounded-full ${index === 0 ? "bg-[#e5b3bb] shadow-[0_0_12px_rgba(229,179,187,0.9)]" : "bg-white/20"}`} /><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">{item}</span></div>)}
          <div className="border-t border-white/10 pt-5"><div className="mb-4 flex items-center justify-between"><h2 className="text-xs font-black uppercase tracking-[0.24em]">Scheduling matrix</h2><span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Today</span></div>{[["09:00", "LUM-084", "Current"], ["10:30", "LUM-136", "Up next"], ["12:00", "LUM-112", "Suite C"]].map(([time, id, state], index) => <div key={id} className="flex items-center justify-between border-t border-white/10 py-4"><span className="font-mono text-xs text-white/50">{time}</span><b className={index === 0 ? "text-sm text-[#f2c8cf]" : "text-sm"}>{id}</b><span className="text-[9px] font-bold uppercase tracking-wider text-white/45">{state}</span></div>)}</div>
          <DashboardCta href={dashboardHrefs["booking-core"]} tone="bg-[#e5b3bb] text-black hover:bg-[#f6d8de]" />
        </div>
      </section>
    </main>
  );
}

function VanguardLanding({ packageDetail }: { packageDetail: PackageDetail }) {
  const blocks = [["4", "Isolated clusters", "Tenant boundaries enforced"], ["2", "Approval gates", "Actions require release"], ["99%", "Audit score", "Continuous policy checks"]];
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071015] text-white">
      <div className="absolute inset-0"><video autoPlay loop muted playsInline preload="metadata" className="h-full w-full object-cover opacity-65 saturate-125"><source src="/vanguard-ops.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(3,10,16,0.96),rgba(3,10,16,0.56)_58%,rgba(3,10,16,0.82))]" /><div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,254,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,254,0.07)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" /></div>
      <header className="relative z-10 flex items-center justify-between border-b border-cyan-200/15 bg-[#061117]/75 px-5 py-5 backdrop-blur-xl sm:px-9"><div><p className="font-mono text-[10px] font-black uppercase tracking-[0.42em] text-cyan-300">VANGUARD // OPS</p><h1 className="mt-1 text-lg font-black uppercase tracking-[0.15em]">Secure console</h1></div><Link href={`/consultation?package=${packageDetail.consultationPackage}&tier=${packageDetail.consultationTier}`} className="border border-cyan-300/60 bg-cyan-300 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-950 hover:bg-white">Request clearance</Link></header>
      <section className="relative z-10 mx-auto max-w-[1500px] px-5 py-14 sm:px-9 lg:py-24"><BackToSolutions tone="text-cyan-100/60" /><div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><div><p className="text-[10px] font-black uppercase tracking-[0.48em] text-orange-300">Protocol active</p><h2 className="mt-6 max-w-5xl text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-[0.75] tracking-[-0.08em]">Absolute<br /><span className="text-cyan-300">Control</span></h2><p className="mt-9 max-w-2xl border-l-2 border-orange-300 pl-6 text-sm font-medium uppercase leading-loose tracking-[0.18em] text-cyan-50/70">Enterprise command layers for isolated clusters, release governance, escrow controls, and permission gates built around your operating risk.</p></div><div className="border border-cyan-100/15 bg-[#061117]/85 p-6 shadow-[0_0_80px_rgba(6,182,212,0.13)] backdrop-blur-xl"><div className="flex items-center justify-between"><LiveDot label="Network secure" /><ShieldCheck className="h-6 w-6 text-orange-300" /></div><div className="mt-7 space-y-3">{["Cluster Delta / protected", "Finance release / queued", "Policy matrix / enforced"].map((line, index) => <div key={line} className="flex items-center justify-between border border-white/10 bg-black/25 px-4 py-4"><span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]">{line}</span><span className={index === 1 ? "text-orange-300" : "text-cyan-300"}>{index === 1 ? "WAIT" : "OK"}</span></div>)}</div><div className="mt-6"><DashboardCta href={dashboardHrefs["secure-console"]} tone="w-full bg-cyan-300 text-slate-950 hover:bg-white" /></div></div></div>
        <div className="mt-20 grid gap-px overflow-hidden border border-cyan-100/15 bg-cyan-100/10 md:grid-cols-3">{blocks.map(([value, title, detail]) => <div key={title} className="bg-[#061117]/85 p-8 backdrop-blur-xl"><p className="text-5xl font-black tracking-tight text-cyan-100">{value}</p><h3 className="mt-6 text-xs font-black uppercase tracking-[0.24em] text-orange-200">{title}</h3><p className="mt-3 text-xs leading-6 text-cyan-50/55">{detail}</p></div>)}</div>
      </section>
    </main>
  );
}

function AeroFlightLanding({ packageDetail }: { packageDetail: PackageDetail }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0"><video autoPlay loop muted playsInline preload="metadata" className="h-full w-full object-cover opacity-70 saturate-110"><source src="/aeroflight.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/85" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(197,160,89,0.1)_1px,transparent_1px),linear-gradient(rgba(197,160,89,0.1)_1px,transparent_1px)] bg-[size:52px_52px] opacity-25" /></div>
      <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-5 py-6 backdrop-blur-md sm:px-10"><div className="flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center border border-[#c5a059] text-[#c5a059]"><Plane className="h-5 w-5" /></span><div><b className="block text-sm uppercase tracking-[0.2em]">AeroFlight</b><span className="text-[9px] font-black uppercase tracking-[0.34em] text-[#c5a059]">Strategic mobility</span></div></div><Link href={`/consultation?package=${packageDetail.consultationPackage}&tier=${packageDetail.consultationTier}`} className="border border-white/80 bg-white px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-black hover:bg-[#c5a059]">Inquire</Link></header>
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-85px)] max-w-[1600px] flex-col justify-center px-5 py-16 sm:px-10"><BackToSolutions tone="text-white/55" /><div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><div><p className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.55em] text-[#c5a059]"><span className="h-1 w-16 bg-[#c5a059]" /> Route intelligence AF-901</p><h1 className="mt-10 text-[clamp(4.4rem,12vw,12rem)] font-black uppercase leading-[0.73] tracking-[-0.09em]">Move<br />with<br /><span className="text-white/35">certainty.</span></h1><p className="mt-9 max-w-xl border-l-4 border-[#c5a059] bg-black/35 p-6 text-xs font-bold uppercase leading-loose tracking-[0.2em] text-white/70 backdrop-blur-xl">A white-glove command layer for air and ground custody, live route geometry, and exceptions resolved before the client has to ask.</p></div><div className="border border-white/15 bg-black/70 p-6 shadow-2xl backdrop-blur-xl"><div className="flex items-center justify-between"><div><LiveDot label="Uplink live" color="bg-[#c5a059]" /><h2 className="mt-4 text-2xl font-black uppercase tracking-tight">Live route intelligence</h2></div><MapPinned className="h-8 w-8 text-[#c5a059]" /></div><div className="relative mt-7 h-48 overflow-hidden border border-white/10 bg-[#071018]"><svg viewBox="0 0 600 240" className="h-full w-full"><path d="M54 72 C180 25 248 168 374 122 S510 54 558 164" fill="none" stroke="#c5a059" strokeDasharray="8 9" strokeWidth="2" /><path d="M48 174 C190 210 330 70 548 72" fill="none" stroke="#7dd3fc" strokeDasharray="5 10" strokeWidth="2" />{[[54,72,"LHR"],[374,122,"DXB"],[548,164,"JFK"],[48,174,"AMS"]].map(([cx,cy,label]) => <g key={String(label)}><circle cx={Number(cx)} cy={Number(cy)} r="8" fill="#c5a059" /><text x={Number(cx)-14} y={Number(cy)-15} fill="white" fontSize="11">{String(label)}</text></g>)}</svg><span className="absolute bottom-4 right-5 text-right text-[10px] font-black uppercase tracking-[0.2em] text-[#c5a059]">Link quality<br /><b className="text-xl text-white">99.2% stable</b></span></div><div className="mt-6 grid grid-cols-2 gap-3">{[["Transfer mode","Air priority"],["Scan integrity","14 / 14 verified"],["ETA lock","10:14 Zulu"],["Exceptions","Manual override"]].map(([label,value]) => <div key={label} className="border border-white/10 bg-white/[0.03] p-4"><p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/45">{label}</p><p className="mt-3 text-xs font-black uppercase tracking-wider text-white">{value}</p></div>)}</div><div className="mt-6"><DashboardCta href={dashboardHrefs["dispatch-autonomous"]} tone="w-full border border-[#c5a059] bg-[#c5a059] text-black hover:bg-white" /></div></div></div>
      </section>
    </main>
  );
}

function NexusLanding({ packageDetail }: { packageDetail: PackageDetail }) {
  const metrics = [["24", "Tenants", "Active enterprise layers"], ["$86K", "MRR signal", "Current live revenue"], ["+18%", "Forecast", "Demand lift"], ["99.9%", "Uptime", "Network stable"]];
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020204] text-white">
      <div className="absolute inset-0"><video autoPlay loop muted playsInline preload="metadata" className="h-full w-full object-cover opacity-65 contrast-125"><source src="/nexus-background.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#020204]/45 to-[#020204]" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,transparent_0%,#020204_82%)]" /></div>
      <div className="pointer-events-none absolute left-5 top-28 z-10 hidden space-y-6 font-mono lg:block">{[["TENANT_SIGNAL","24_ACTIVE"],["MRR_HEARTBEAT","$86,402"],["FORECAST_DELTA","+18.4%"]].map(([a,b]) => <div key={a}><p className="text-[8px] font-bold tracking-[0.45em] text-[#d4af37]">{a}</p><p className="mt-1 text-[10px] font-black tracking-wider text-white/75">{b}</p></div>)}</div>
      <header className="relative z-20 flex items-center justify-between border-b border-white/10 bg-black/40 px-5 py-6 backdrop-blur-xl sm:px-10"><div className="flex items-center gap-4"><span className="grid h-11 w-11 rotate-45 place-items-center border border-[#d4af37] bg-black/50"><Database className="h-5 w-5 -rotate-45 text-[#d4af37]" /></span><div><b className="block text-sm uppercase tracking-[0.22em]">Nexus Corp</b><span className="text-[9px] font-mono font-black uppercase tracking-[0.38em] text-[#d4af37]">Analytics</span></div></div><Link href={`/consultation?package=${packageDetail.consultationPackage}&tier=${packageDetail.consultationTier}`} className="bg-[#d4af37] px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] text-black hover:bg-white">Launch</Link></header>
      <section className="relative z-10 mx-auto max-w-[1600px] px-5 py-16 sm:px-10 lg:py-24"><BackToSolutions tone="text-white/50" /><div className="mt-20"><p className="text-[10px] font-black uppercase tracking-[0.6em] text-[#d4af37]">Elite enterprise platform</p><h1 className="mt-7 text-[clamp(4rem,12vw,11rem)] font-black uppercase leading-[0.7] tracking-[-0.095em]">Operational<br /><span className="font-light italic text-white/35">authority</span></h1><div className="mt-12 max-w-3xl border-l border-[#d4af37] pl-7 text-sm font-medium uppercase leading-loose tracking-[0.16em] text-white/70">Predictive data, tenant intelligence, and executive reporting, shaped into one living system for complex enterprise operations.</div></div><div className="mt-20 grid gap-px border border-white/10 bg-white/10 md:grid-cols-4">{metrics.map(([value,label,detail]) => <div key={label} className="bg-black/75 p-7 backdrop-blur-xl"><p className="text-4xl font-light text-white">{value}</p><p className="mt-5 text-[10px] font-black uppercase tracking-[0.25em] text-[#d4af37]">{label}</p><p className="mt-2 text-xs text-white/45">{detail}</p></div>)}</div><div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"><div className="relative overflow-hidden border border-white/10 bg-black/65 p-2 shadow-[0_0_100px_rgba(212,175,55,0.1)]"><video autoPlay loop muted playsInline preload="metadata" className="h-full min-h-[270px] w-full object-cover opacity-75"><source src="/nexus-operations.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" /><div className="absolute bottom-7 left-7"><LiveDot label="Live intelligence reel" color="bg-[#d4af37]" /><p className="mt-4 text-2xl font-black uppercase">Tenant layer visualization</p></div></div><div className="border border-white/10 bg-black/70 p-7 backdrop-blur-xl"><div className="flex items-center justify-between"><div><LiveDot label="Forecast model" color="bg-[#d4af37]" /><h2 className="mt-4 text-2xl font-black uppercase">Revenue horizon</h2></div><BarChart3 className="text-[#d4af37]" /></div><div className="mt-10 flex h-32 items-end gap-3">{[36,48,41,66,55,77,72,92].map((height,index) => <span key={index} style={{ height: `${height}%` }} className="flex-1 bg-gradient-to-t from-[#d4af37] to-white/80 transition-transform hover:scale-y-110" />)}</div><div className="mt-8"><DashboardCta href={dashboardHrefs["global-intelligence"]} tone="w-full bg-[#d4af37] text-black hover:bg-white" /></div></div></div><div className="mt-8 grid gap-6 md:grid-cols-2"><div className="border border-white/10 bg-black/60 p-7"><p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4af37]">Customizable architecture</p><p className="mt-4 text-xl font-bold leading-snug">The metrics, data model, alert logic, and visual reporting layers can be rebuilt around the client&apos;s own business rules.</p></div><div className="relative overflow-hidden border border-white/10 bg-black/60 p-2"><video autoPlay loop muted playsInline preload="metadata" className="h-44 w-full object-cover opacity-70"><source src="/nexus-forecast.mp4" type="video/mp4" /></video></div></div></section>
    </main>
  );
}
