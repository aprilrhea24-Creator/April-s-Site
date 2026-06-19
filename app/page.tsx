import Link from "next/link";
import { ArrowRight, BarChart3, Bot, ShieldCheck, Sparkles, Workflow } from "lucide-react";

import { PackageGrid } from "@/components/package-grid";

const outcomes = [
  { icon: Workflow, title: "Operational apps", text: "Replace spreadsheets and scattered tools with one branded workflow hub." },
  { icon: Bot, title: "Automation layers", text: "Route requests, notify teams, calculate pricing, and reduce repetitive admin." },
  { icon: BarChart3, title: "Margin dashboards", text: "Track capacity, pipeline, fulfillment, and revenue signals before they drift." }
];

const process = ["Map the friction", "Design the client workflow", "Build the portal", "Automate the handoffs"];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.2),transparent_18%),radial-gradient(circle_at_82%_8%,rgba(236,72,153,0.18),transparent_16%)]" />
      <section className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-100 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            April&apos;s private app studio
          </div>
          <div className="space-y-5">
            <h1 className="font-display text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              Custom business apps that remove friction and protect margins.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Aura App Studio builds premium portals, dashboards, booking systems, and internal automation for businesses that
              need their operations to feel as polished as their brand.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#67e8f9,#a78bfa,#f0abfc)] px-6 py-3 font-semibold text-slate-950 shadow-glow hover:brightness-110"
            >
              Build My System <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/solutions" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-slate-100 backdrop-blur-md hover:bg-white/10">
              View Solution Templates
            </Link>
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-5">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-slate-400">Pipeline Health</p>
                <p className="text-3xl font-semibold text-white">94%</p>
              </div>
              <div className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1 text-sm text-cyan-100">Live preview</div>
            </div>
            <div className="mt-5 grid gap-3">
              {process.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cyan-100">{index + 1}</div>
                  <div>
                    <p className="font-medium text-white">{step}</p>
                    <p className="text-sm text-slate-400">Automated handoff stage</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-fuchsia-200/20 bg-fuchsia-300/10 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-100">Margin guard</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">Deposits, change requests, scope boundaries, and client approvals stay visible from day one.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-5 px-4 pb-20 sm:px-6 md:grid-cols-3 lg:px-8">
        {outcomes.map((item) => (
          <article key={item.title} className="glass-panel rounded-2xl p-6">
            <item.icon className="h-7 w-7 text-cyan-200" />
            <h2 className="mt-5 text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Signature packages</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Proven system foundations, tailored to the way you operate.</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Explore transparent package scopes before configuring the final workflow around your business.
          </p>
        </div>
        <PackageGrid />
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="glass-panel grid gap-8 rounded-[2rem] p-6 md:grid-cols-[0.8fr_1.2fr] lg:p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Built to monetize</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">From first inquiry to retained system support.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Low Booking Deposit",
                text: "Secure your spot with a flat reservation fee that applies directly to your build."
              },
              {
                title: "Secure Client Portal",
                text: "Track real-time progress milestones and test your live staging links securely."
              },
              {
                title: "Transparent Milestones",
                text: "Review and approve progress dynamically before signing your final handover."
              },
              {
                title: "Ironclad Protection",
                text: "Clear refund policies and guaranteed ownership transfer upon project completion."
              }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm text-slate-200">
                <ShieldCheck className="mb-3 h-5 w-5 text-teal-200" />
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 leading-6 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
