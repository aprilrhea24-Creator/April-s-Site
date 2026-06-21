import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, Clock3 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPackage, packages } from "@/lib/packages";

export function generateStaticParams() {
  return packages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPackage(slug);

  if (!item) {
    return { title: "Package Not Found | Stratum Studio" };
  }

  return {
    title: `${item.title} | Stratum Studio`,
    description: item.summary
  };
}

export default async function PackagePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPackage(slug);

  if (!item) {
    notFound();
  }

  const consultationHref = `/consultation?package=${item.consultationPackage}&tier=${item.consultationTier}`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050508]">
      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Link href="/solutions" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-100">
          <ArrowLeft className="h-4 w-4" />
          All packages
        </Link>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#0c0d12] p-7 shadow-2xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_40%,rgba(0,0,0,0.22),rgba(0,0,0,0.82)_72%)]" />
          <div className="relative z-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">{item.industry}</p>
                {item.popular ? (
                  <span className="rounded-full border border-zinc-700/70 bg-black/60 px-3 py-1 text-xs font-medium text-cyan-50 backdrop-blur-xl">
                    Most Popular
                  </span>
                ) : null}
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#22d3ee] animate-pulse" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                  Live Framework
                </span>
              </div>
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-white sm:text-6xl">{item.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{item.summary}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={consultationHref}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 font-semibold text-white transition-all hover:brightness-110"
              >
                Book This Package
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/solutions/${item.previewSlug}/preview`}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-black/60 px-6 py-3 font-semibold text-white backdrop-blur-xl transition-all hover:border-cyan-300/50 hover:bg-zinc-900/80"
              >
                Launch Interactive Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="rounded-full border border-zinc-800/60 bg-black/60 px-5 py-3 text-sm text-zinc-300 backdrop-blur-xl">
                Starting at {item.price.startingAt}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Full scope</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">What the package includes</h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {item.scope.map((scopeItem) => (
                <article
                  key={scopeItem.title}
                  className="relative overflow-hidden rounded-2xl border border-zinc-800/40 bg-[#0c0d12] p-5 backdrop-blur-xl"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.18),rgba(0,0,0,0.72)_80%)]" />
                  <div className="relative z-10">
                    <Check className="h-5 w-5 text-cyan-200" />
                    <h3 className="mt-4 font-semibold text-white">{scopeItem.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{scopeItem.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="relative h-fit overflow-hidden rounded-[2rem] border border-zinc-800/60 bg-[#0c0d12] p-6 backdrop-blur-xl lg:sticky lg:top-28">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(0,0,0,0.12),rgba(0,0,0,0.8)_76%)]" />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.22em] text-fuchsia-200">Transparent pricing</p>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#22d3ee] animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                    Live Framework
                  </span>
                </div>
              </div>
              <p className="mt-5 text-sm text-zinc-400">Package starting point</p>
              <p className="mt-2 text-4xl font-semibold text-white">{item.price.startingAt}</p>
              <div className="my-6 h-px bg-zinc-800/70" />
              <p className="text-sm font-mono uppercase tracking-[0.16em] text-zinc-400">Initialization Deposit //</p>
              <p className="mt-2 text-2xl font-semibold text-cyan-100">{item.price.reservation}</p>
              <p className="mt-2 text-xs leading-6 text-zinc-400">{item.price.depositDescription}</p>
              <p className="mt-5 text-sm leading-7 text-zinc-400">{item.price.note}</p>
              <Link
                href={consultationHref}
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3 font-semibold text-white transition-all hover:brightness-110"
              >
                Book This Package
              </Link>
            </div>
          </aside>
        </div>

        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Timeline</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">A clear path from discovery to launch</h2>
          <div className="mt-8 grid gap-4">
            {item.timeline.map((milestone, index) => (
              <article
                key={milestone.phase}
                className="relative overflow-hidden rounded-2xl border border-zinc-800/40 bg-[#0c0d12] p-5 backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,0,0,0.12),rgba(0,0,0,0.76)_82%)]" />
                <div className="relative z-10 grid gap-4 sm:grid-cols-[3rem_0.6fr_1.4fr] sm:items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800/60 bg-black/60 text-sm font-semibold text-cyan-100 backdrop-blur-xl">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{milestone.phase}</p>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm text-cyan-100">
                      <Clock3 className="h-4 w-4" />
                      {milestone.window}
                    </p>
                  </div>
                  <p className="text-sm leading-7 text-zinc-400">{milestone.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
