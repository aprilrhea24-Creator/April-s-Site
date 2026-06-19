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
    border: "border-amber-200/25",
    accent: "text-amber-100",
    ambient: "left-[8%] top-[8%] bg-amber-400",
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
    border: "border-rose-300/25",
    accent: "text-rose-100",
    ambient: "right-[6%] top-[10%] bg-rose-500",
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
    border: "border-emerald-200/20",
    accent: "text-emerald-100",
    ambient: "bottom-[2%] left-[14%] bg-emerald-400",
    previewBackground: "from-blue-400/20 via-emerald-400/10 to-transparent",
    previewItems: ["Executive overview", "Automated task hub", "Secure file library"]
  }
];

export default function SolutionsPage() {
  return (
    <section className="bg-[linear-gradient(180deg,#000000_0%,#070a10_50%,#0b0f17_100%)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Solution showcase</p>
        <h1 className="mt-4 font-sans text-4xl font-bold normal-case leading-snug text-white sm:text-5xl">
          Template systems customized around your business model.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Each package starts as a proven architecture, then gets reshaped around your offers, approval paths, data fields,
          analytics, and client-facing experience.
        </p>
      </div>

      <section className="mt-12">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-violet-200">Visual frameworks</p>
          <h2 className="mt-3 font-sans text-3xl font-bold normal-case leading-snug text-white">
            Three distinct styles. One adaptable studio.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Preview how the same operational foundation can shift its visual energy to match your audience and industry.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {archetypes.map((archetype) => (
            <div key={archetype.id} className="relative isolate h-full">
              <div className={`archetype-ambient ${archetype.ambient}`} aria-hidden="true" />
              <article
                id={archetype.id}
                className={`flex h-full flex-col rounded-[2rem] border bg-zinc-950/70 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl ${archetype.border}`}
              >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className={`text-xs uppercase tracking-[0.22em] ${archetype.accent}`}>{archetype.eyebrow}</p>
                  <h3 className="mt-3 font-sans text-2xl font-bold normal-case leading-snug text-white">{archetype.title}</h3>
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
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Build packages</p>
          <h2 className="mt-3 font-sans text-3xl font-bold normal-case leading-snug text-white">
            Choose the operational foundation behind your style.
          </h2>
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
            <h3 className="mt-4 font-sans font-bold normal-case leading-snug text-white">{item.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>

      <Link href="/consultation" className="mt-10 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-100">
        Configure a Build Request
      </Link>
      </div>
    </section>
  );
}
