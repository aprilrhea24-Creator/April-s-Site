import Link from "next/link";
import {
  CalendarClock,
  ChartSpline,
  SlidersHorizontal,
  ChevronRight
} from "lucide-react";

import { PackageGrid } from "@/components/package-grid";
import { ShowcaseGrid } from "@/components/showcase-grid";
import { WhyStratum } from "@/components/why-stratum";

export default function SolutionsPage() {
  return (
    <section className="bg-[linear-gradient(180deg,#000000_0%,#070a10_50%,#0b0f17_100%)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Solution showcase</p>
        <h1 className="mt-4 font-sans text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Stratum product frameworks engineered for distinct markets.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Four command-center frameworks combine distinct operational priorities with specialized workflows, responsive
          interfaces, and conversion systems built for the way each market operates.
        </p>
      </div>

      <ShowcaseGrid />

      <div className="mt-12">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Build packages</p>
          <h2 className="mt-3 font-sans text-3xl font-bold normal-case leading-snug text-white">
            Choose the operational foundation behind your style.
          </h2>
        </div>
        <PackageGrid />
        <WhyStratum />
      </div>

      <div className="mt-12 glass-panel grid gap-6 rounded-[2rem] p-6 md:grid-cols-3">
        {[
          { icon: SlidersHorizontal, label: "Personalized tabs", text: "Industry-specific fields, statuses, and user roles." },
          { icon: CalendarClock, label: "Workflow timing", text: "Booking, onboarding, delivery, and renewal stages." },
          { icon: ChartSpline, label: "Analytics layer", text: "Dashboards focused on sales, capacity, and margin risk." }
        ].map((item) => (
          <div key={item.label}>
            <item.icon className="h-6 w-6 text-fuchsia-200" />
            <h3 className="mt-4 font-sans font-extrabold leading-tight tracking-tight text-white">{item.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>

      <Link href="/consultation" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 hover:bg-cyan-100">
        Configure a Build Request
        <ChevronRight className="h-4 w-4" />
      </Link>
      </div>
    </section>
  );
}
