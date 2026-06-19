import Link from "next/link";
import { CalendarClock, ChartSpline, SlidersHorizontal } from "lucide-react";

import { PackageGrid } from "@/components/package-grid";

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

      <div className="mt-12">
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
