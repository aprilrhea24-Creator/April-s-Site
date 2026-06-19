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
    return { title: "Package Not Found | Aura App Studio" };
  }

  return {
    title: `${item.title} | Aura App Studio`,
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

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(34,211,238,0.18),transparent_19%),radial-gradient(circle_at_84%_12%,rgba(168,85,247,0.18),transparent_18%)]" />
      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Link href="/solutions" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-100">
          <ArrowLeft className="h-4 w-4" />
          All packages
        </Link>

        <div className="mt-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">{item.industry}</p>
            {item.popular ? (
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-cyan-50 backdrop-blur-lg">
                Most Popular
              </span>
            ) : null}
          </div>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-white sm:text-6xl">{item.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{item.summary}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#67e8f9,#a78bfa,#f0abfc)] px-6 py-3 font-semibold text-slate-950 shadow-glow hover:brightness-110"
            >
              Start This Build
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm text-slate-200 backdrop-blur-lg">
              Starting at {item.price.startingAt}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Full scope</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">What the package includes</h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {item.scope.map((scopeItem) => (
                <article key={scopeItem.title} className="glass-panel rounded-2xl p-5">
                  <Check className="h-5 w-5 text-cyan-200" />
                  <h3 className="mt-4 font-semibold text-white">{scopeItem.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{scopeItem.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="glass-panel h-fit rounded-[2rem] p-6 lg:sticky lg:top-28">
            <p className="text-sm uppercase tracking-[0.22em] text-fuchsia-200">Transparent pricing</p>
            <p className="mt-5 text-sm text-slate-400">Package starting point</p>
            <p className="mt-2 text-4xl font-semibold text-white">{item.price.startingAt}</p>
            <div className="my-6 h-px bg-white/10" />
            <p className="text-sm text-slate-400">Launch reservation</p>
            <p className="mt-2 text-2xl font-semibold text-cyan-100">{item.price.reservation}</p>
            <p className="mt-5 text-sm leading-7 text-slate-300">{item.price.note}</p>
            <Link
              href="/consultation"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-100 px-5 py-3 font-semibold text-slate-950 hover:bg-white"
            >
              Configure This Package
            </Link>
          </aside>
        </div>

        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Timeline</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">A clear path from discovery to launch</h2>
          <div className="mt-8 grid gap-4">
            {item.timeline.map((milestone, index) => (
              <article key={milestone.phase} className="glass-panel grid gap-4 rounded-2xl p-5 sm:grid-cols-[3rem_0.6fr_1.4fr] sm:items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/10 text-sm font-semibold text-cyan-100">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-white">{milestone.phase}</p>
                  <p className="mt-1 inline-flex items-center gap-2 text-sm text-cyan-100">
                    <Clock3 className="h-4 w-4" />
                    {milestone.window}
                  </p>
                </div>
                <p className="text-sm leading-7 text-slate-300">{milestone.description}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
