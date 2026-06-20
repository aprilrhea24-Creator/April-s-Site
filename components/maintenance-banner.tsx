import Link from "next/link";

export function MaintenanceBanner() {
  return (
    <aside className="mx-auto mt-10 flex max-w-7xl flex-col gap-6 rounded-2xl border border-white/[0.07] bg-zinc-950/60 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h3 className="maintenance-banner-title font-serif text-xl font-medium tracking-wide text-white">
          Already have a Stratum Studio build completed?
        </h3>
        <p className="mt-1.5 max-w-xl font-sans text-xs leading-relaxed text-zinc-400">
          Subscribe here for regular updates, system layout adjustments, and continuous site health checks to keep your
          pipeline running at maximum scale.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <span className="mr-2 font-mono text-sm font-semibold text-zinc-300">$199/mo</span>
        <Link
          href="/consultation?service=ongoing-support"
          className="whitespace-nowrap rounded-xl border border-white/10 bg-zinc-900 px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-widest text-zinc-100 transition-all duration-300 hover:border-cyan-400"
        >
          Activate Ongoing Support →
        </Link>
      </div>
    </aside>
  );
}
