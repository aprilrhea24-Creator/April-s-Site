import { ArrowRight, Blocks } from "lucide-react";
import Link from "next/link";

import { packages } from "@/lib/packages";

export function PackageGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {packages.map((item) => {
        const card = (
          <article className={`glass-panel h-full rounded-[2rem] bg-gradient-to-br ${item.accent} p-6`}>
            <div className="flex min-h-7 items-center justify-between gap-4">
              {item.popular ? (
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-cyan-50 backdrop-blur-lg">
                  Most Popular
                </span>
              ) : (
                <span />
              )}
              <Blocks className="h-7 w-7 text-white/70" />
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.22em] text-cyan-100">{item.industry}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-200 backdrop-blur-md">
                  {feature}
                </div>
              ))}
            </div>
            <Link
              href={`/packages/${item.slug}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white hover:border-cyan-200/40 hover:bg-white/[0.13]"
            >
              Explore Package
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        );

        return item.popular ? (
          <div key={item.slug} className="rounded-[2rem] bg-gradient-to-br from-cyan-300/80 via-violet-400/70 to-fuchsia-300/60 p-px shadow-[0_24px_90px_rgba(71,85,255,0.18)]">
            {card}
          </div>
        ) : (
          <div key={item.slug}>{card}</div>
        );
      })}
    </div>
  );
}
