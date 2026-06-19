import { ArrowRight, Blocks, Check } from "lucide-react";
import Link from "next/link";

import { packages } from "@/lib/packages";

export function PackageGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {packages.map((item) => {
        const card = (
          <article
            className={`package-card relative h-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 p-8 shadow-[0_4px_30px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/40 ${
              item.popular
                ? "package-card-popular ring-1 ring-cyan-400/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]"
                : ""
            }`}
          >
            {!item.popular ? (
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70`}
                aria-hidden="true"
              />
            ) : null}
            <div className={`relative z-10 ${item.popular ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.72)]" : ""}`}>
              <div className="flex min-h-7 items-center justify-between gap-4">
                {item.popular ? (
                  <span className="rounded-full border border-white/20 bg-slate-950/20 px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-lg">
                    Most Popular
                  </span>
                ) : (
                  <span />
                )}
                <div className="flex items-center gap-3">
                  {item.popular ? (
                    <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/80">
                      <span
                        className="h-2 w-2 rounded-full bg-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.95)]"
                        aria-hidden="true"
                      />
                      Live Framework
                    </span>
                  ) : null}
                  <Blocks className="h-7 w-7 text-white/80" />
                </div>
              </div>
              <div
                className={`mt-5 ${
                  item.popular ? "package-popular-copy rounded-2xl bg-black/20 p-4 backdrop-blur-sm" : ""
                }`}
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">{item.industry}</p>
                <h3 className="mt-3 font-sans text-2xl font-bold normal-case leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/80">{item.summary}</p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {item.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/80 px-4 py-3 text-sm font-medium tracking-wide text-zinc-200 transition-colors hover:bg-zinc-900/50"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-white/70">{item.industryFit}</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <span className="mb-1 block text-xs uppercase tracking-wider text-zinc-500">Investment //</span>
                <span className="block text-2xl font-bold text-white">From {item.price.startingAt}</span>
              </div>
              <Link
                href={`/packages/${item.slug}`}
                className={`group mt-5 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition-all ${
                  item.popular
                    ? "bg-gradient-to-r from-[#00D4E8] via-[#168BFF] to-[#7C3AED] shadow-[0_0_28px_rgba(22,139,255,0.22)] hover:brightness-110 hover:shadow-[0_0_36px_rgba(124,58,237,0.32)]"
                    : "border border-white/15 bg-transparent hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]"
                }`}
              >
                Explore Package
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        );

        return item.popular ? (
          <div key={item.slug} className="package-popular-shell rounded-2xl">
            <div className="package-popular-glow animate-gradient-breath" aria-hidden="true" />
            {card}
          </div>
        ) : (
          <div key={item.slug}>{card}</div>
        );
      })}
    </div>
  );
}
