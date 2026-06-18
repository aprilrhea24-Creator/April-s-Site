import Link from "next/link";
import { Blocks, CalendarClock, ChartSpline, SlidersHorizontal } from "lucide-react";

const templates = [
  {
    title: "Premium Restaurant Package",
    industry: "Hospitality",
    features: ["Reservation logic", "VIP profiles", "Shift dashboards", "Automated deposits"],
    accent: "from-cyan-300/30 to-blue-500/10"
  },
  {
    title: "Enterprise Booking Matrix",
    industry: "Professional Services",
    features: ["Capacity routing", "Custom intake rules", "Approval workflows", "Revenue forecasting"],
    accent: "from-fuchsia-300/30 to-violet-500/10"
  },
  {
    title: "Field Team Command Center",
    industry: "Operations",
    features: ["Dispatch boards", "Asset status", "Client updates", "Exception alerts"],
    accent: "from-teal-300/30 to-emerald-500/10"
  },
  {
    title: "Founder SaaS Starter",
    industry: "B2B SaaS",
    features: ["Auth flows", "Billing paths", "Admin console", "Usage dashboards"],
    accent: "from-indigo-300/30 to-pink-500/10"
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

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {templates.map((template) => (
          <article key={template.title} className={`glass-panel rounded-[2rem] bg-gradient-to-br ${template.accent} p-6`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-100">{template.industry}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{template.title}</h2>
              </div>
              <Blocks className="h-7 w-7 text-white/70" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {template.features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-200 backdrop-blur-md">
                  {feature}
                </div>
              ))}
            </div>
          </article>
        ))}
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
