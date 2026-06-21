import { Boxes, CheckCircle2, Code2, XCircle } from "lucide-react";

const comparisons = [
  {
    label: "Generic Plug-In Platforms",
    focus: "Static Broadsheets",
    description:
      "Low-cost template platforms are engineered to be generic. They offer rigid layout structures, locked styling paths, and un-optimized third-party widgets that force your operational workflow to adapt to their limitations. When your business scales, your system breaks.",
    reality: "You are renting an un-optimized slice of shared infrastructure with zero code ownership.",
    icon: Boxes,
    signal: XCircle,
    tone: "zinc"
  },
  {
    label: "The Stratum Engine Standard",
    focus: "Custom Enterprise Assets",
    description:
      "Stratum Studio builds dedicated, custom-coded Next.js architectures designed from scratch around your specific business logic. We don't use templates. Every single intake pipeline, scheduling engine, database relationship, and premium visual layout is custom-engineered to optimize your client retention and back-end flow. You retain absolute code ownership of a high-performance corporate asset.",
    reality: "A highly tailored operational core engineered to give your brand complete market supremacy.",
    icon: Code2,
    signal: CheckCircle2,
    tone: "cyan"
  }
] as const;

export function WhyStratum() {
  return (
    <section className="mx-auto mt-24 max-w-7xl" aria-labelledby="architecture-vs-templates">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">Why Stratum</p>
        <h2
          id="architecture-vs-templates"
          className="mt-4 font-sans text-4xl font-bold leading-tight text-white sm:text-5xl"
        >
          Architecture vs. Templates
        </h2>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          Why premium operations demand bespoke engineering over shared sandbox builders.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {comparisons.map((item) => {
          const Icon = item.icon;
          const Signal = item.signal;
          const isStratum = item.tone === "cyan";

          const card = (
            <article
              className={`relative overflow-hidden p-8 shadow-[0_30px_90px_rgba(0,0,0,0.45)] transition-all duration-500 ${
                isStratum
                  ? "z-10 h-full w-full rounded-[15px] bg-[#0c0d12] backdrop-blur-xl"
                  : "h-full rounded-[15px] bg-[#0a0b10]/95 backdrop-blur-2xl"
              }`}
            >
              {isStratum ? (
                <div
                  className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl"
                  style={{ backgroundColor: "rgba(6,182,212,0.15)" }}
                  aria-hidden="true"
                />
              ) : null}

              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p
                      className={`font-mono text-[10px] uppercase tracking-[0.24em] ${
                        isStratum ? "text-cyan-300" : "text-zinc-600"
                      }`}
                    >
                      {item.label}
                    </p>
                    <h3 className="mt-4 text-2xl font-bold text-white">{item.focus}</h3>
                  </div>
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                      isStratum
                        ? "border-cyan-400/25 bg-cyan-400/10 text-cyan-300"
                        : "border-white/10 bg-white/[0.03] text-zinc-500"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <p className="mt-7 text-base leading-8 text-zinc-300">{item.description}</p>

                <div
                  className={`mt-8 flex items-start gap-3 border-t pt-6 ${
                    isStratum ? "border-cyan-400/15" : "border-white/[0.07]"
                  }`}
                >
                  <Signal className={`mt-0.5 h-5 w-5 shrink-0 ${isStratum ? "text-cyan-300" : "text-zinc-600"}`} />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">Operational reality</p>
                    <p className={`mt-2 text-sm font-medium leading-6 ${isStratum ? "text-cyan-50" : "text-zinc-400"}`}>
                      {item.reality}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );

          return isStratum ? (
            <div key={item.label} className="why-stratum-signature-shell relative isolate h-full rounded-2xl p-[1.5px]">
              <div className="why-stratum-signature-glow" aria-hidden="true" />
              {card}
            </div>
          ) : (
            <div key={item.label} className="why-generic-signature-shell h-full rounded-2xl p-[1px]">
              {card}
            </div>
          );
        })}
      </div>
    </section>
  );
}
