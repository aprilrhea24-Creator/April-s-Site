import Link from "next/link";
import {
  ArrowUpRight,
  CalendarClock,
  ChartSpline,
  Crown,
  Dumbbell,
  SlidersHorizontal,
  Workflow
} from "lucide-react";

import { PackageGrid } from "@/components/package-grid";

const archetypes = [
  {
    id: "bespoke-hospitality",
    eyebrow: "The Luxury Archetype",
    title: "Bespoke Hospitality",
    href: "/solutions/hospitality",
    focus: "Premium catering, visual menus, and elite client booking forms.",
    icon: Crown,
    glow:
      "bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.3),transparent_34%),linear-gradient(145deg,rgba(120,53,15,0.28),rgba(15,18,36,0.76))]",
    border: "border-amber-200/25",
    accent: "text-amber-100",
    previewBackground: "from-amber-300/20 via-orange-300/10 to-transparent",
    previewItems: ["Curated menu gallery", "Private event request", "VIP booking confirmation"]
  },
  {
    id: "kinetix-systems",
    eyebrow: "The Performance Archetype",
    title: "Kinetix Systems",
    href: "/solutions/performance",
    focus: "High-energy fitness tracking, scheduling pipelines, and subscription management.",
    icon: Dumbbell,
    glow:
      "bg-[radial-gradient(circle_at_78%_8%,rgba(244,63,94,0.34),transparent_34%),linear-gradient(145deg,rgba(88,15,35,0.34),rgba(15,18,36,0.78))]",
    border: "border-rose-300/25",
    accent: "text-rose-100",
    previewBackground: "from-rose-400/20 via-fuchsia-400/10 to-transparent",
    previewItems: ["Member performance", "Class scheduling", "Subscription status"]
  },
  {
    id: "matrix-operations",
    eyebrow: "The Enterprise Archetype",
    title: "Matrix Operations",
    href: "/solutions/enterprise",
    focus: "Clean data dashboards, automated operations hubs, and file management layers.",
    icon: Workflow,
    glow:
      "bg-[radial-gradient(circle_at_24%_8%,rgba(59,130,246,0.28),transparent_32%),radial-gradient(circle_at_82%_78%,rgba(16,185,129,0.2),transparent_34%),linear-gradient(145deg,rgba(8,47,73,0.32),rgba(15,18,36,0.8))]",
    border: "border-emerald-200/20",
    accent: "text-emerald-100",
    previewBackground: "from-blue-400/20 via-emerald-400/10 to-transparent",
    previewItems: ["Executive overview", "Automated task hub", "Secure file library"]
  }
];

export default function SolutionsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Solution showcase</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white">Template systems customized around your business model.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Each package starts as a proven architecture, then gets reshaped around your offers, approval paths, data fields,
          analytics, and client-facing experience.
        </p>
      </div>

      <section className="mt-12">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-violet-200">Visual frameworks</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Three distinct styles. One adaptable studio.</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Preview how the same operational foundation can shift its visual energy to match your audience and industry.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {archetypes.map((archetype) => (
            <article
              id={archetype.id}
              key={archetype.id}
              className={`glass-panel ${archetype.glow} flex h-full flex-col rounded-[2rem] border ${archetype.border} p-6`}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className={`text-xs uppercase tracking-[0.22em] ${archetype.accent}`}>{archetype.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{archetype.title}</h3>
                </div>
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/20 ${archetype.accent}`}>
                  <archetype.icon className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-200">{archetype.focus}</p>

              <div className={`mt-6 rounded-2xl border border-white/10 bg-gradient-to-br ${archetype.previewBackground} p-4 backdrop-blur-lg`}>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-medium text-white">Live framework</span>
                  <span className={`h-2 w-2 rounded-full bg-current shadow-[0_0_14px_currentColor] ${archetype.accent}`} />
                </div>
                <div className="mt-3 space-y-2">
                  {archetype.previewItems.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-black/20 px-3 py-2.5">
                      <span className={`text-xs font-semibold ${archetype.accent}`}>0{index + 1}</span>
                      <span className="text-xs text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href={archetype.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/[0.13]"
                >
                  Preview Live Style
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Build packages</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Choose the operational foundation behind your style.</h2>
        </div>
        <PackageGrid />
      </div>

      <div className="mt-12 glass-panel grid gap-6 rounded-[2rem] p-6 md:grid-cols-3">
        {[
          { icon: SlidersHorizontal, label: "Personalized tabs", text: "Industry-specific fields, statuses, and user roles." },
          { icon: CalendarClock, label: "Workflow timing", text: "Booking, onboarding, delivery, and renewal stages." },
          { icon: ChartSpline, label: "Analytics layer", text: "Dashboards focused on sales, capacity, and margin risk." }
        ].map((item) => (
          <div key={item.label}>
            <item.icon className="h-6 w-6 text-fuchsia-200" />
            <h3 className="mt-4 font-semibold text-white">{item.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>

      <Link href="/consultation" className="mt-10 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-100">
        Configure a Build Request
      </Link>
    </section>
  );
}
