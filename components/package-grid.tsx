import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { packages } from "@/lib/packages";

export function PackageGrid() {
  return (
    <div className="rounded-[2rem] border border-zinc-900 bg-[#050508] p-4 sm:p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {packages.map((item) => {
          const card = (
            <article
              className={`package-card relative z-10 h-full w-full overflow-hidden bg-[#0c0d12] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${
                item.popular
                  ? "package-card-popular rounded-2xl border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
                  : "rounded-2xl shadow-lg"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 ${
                  item.popular
                    ? "bg-[radial-gradient(ellipse_at_32%_24%,rgba(12,13,18,0.18)_0%,rgba(3,3,6,0.78)_56%,rgba(0,0,0,0.96)_100%)]"
                    : "bg-gradient-to-b from-zinc-900/40 via-zinc-950/80 to-black"
                }`}
                aria-hidden="true"
              />
              <div className={`relative z-10 ${item.popular ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.72)]" : ""}`}>
                <div className="flex min-h-7 items-center justify-between gap-4">
                  {item.popular ? (
                    <span className="rounded-full border border-white/20 bg-slate-950/20 px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-lg">
                      Most Popular
                    </span>
                  ) : (
                    <span />
                  )}
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    <span
                      className="h-2 w-2 animate-pulse rounded-full bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.58)]"
                      aria-hidden="true"
                    />
                    Live Framework
                  </span>
                </div>
                <div
                  className={`mt-5 ${
                    item.popular ? "package-popular-copy rounded-2xl bg-black/20 p-4 backdrop-blur-sm" : ""
                  }`}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">{item.industry}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold normal-case leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/80">{item.summary}</p>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-zinc-800/60 bg-black/40 px-4 py-3 text-sm font-medium text-zinc-300 backdrop-blur-xl transition-colors hover:bg-zinc-900/70"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-zinc-700/70 bg-zinc-900/80 text-slate-100">
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
                      ? "stratum-action-gradient hover:brightness-110"
                      : "border border-white/15 bg-transparent hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]"
                  }`}
                >
                  Explore Package
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          );

          return (
            <div
              key={item.slug}
              className={
                item.popular
                  ? "package-popular-shell relative isolate h-full rounded-2xl"
                  : "relative h-full w-full overflow-hidden rounded-2xl border border-zinc-900 bg-[#0c0d12] shadow-lg"
              }
            >
              {item.popular ? (
                <>
                  <div className="package-popular-glow animate-gradient-breath" aria-hidden="true" />
                  {card}
                </>
              ) : (
                card
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
