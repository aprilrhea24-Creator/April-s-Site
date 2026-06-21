import Link from "next/link";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-5xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="glass-panel w-full rounded-[2rem] p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-200/10 text-cyan-100">
          <span aria-hidden="true" className="text-3xl">
            ?
          </span>
        </div>
        <p className="mt-8 text-sm uppercase tracking-[0.28em] text-cyan-200">Page not found</p>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold text-white sm:text-5xl">
          This workspace route is not available.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
          The page may have moved into the Stratum Studio architecture, or the private module may not be exposed publicly.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="stratum-action-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold hover:brightness-110"
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
