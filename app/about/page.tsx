import { Code2, Fingerprint, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#050508] px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-zinc-800/40 bg-[#0c0d12] p-6 shadow-2xl sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(0,0,0,0.08),rgba(0,0,0,0.8)_78%)]" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">The Stratum Standard</p>
              <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Human ambition, engineered into digital authority.
              </h1>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#22d3ee] animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                Live Mission Protocol
              </span>
            </div>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-2xl border border-zinc-900/60 bg-black/60 p-6 backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_45%,rgba(0,0,0,0.04),rgba(0,0,0,0.68)_88%)]" />
            <div className="relative z-10">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-zinc-500">
                Executive Mission Statement
              </p>
              <p className="mt-5 max-w-5xl font-sans text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-8">
                Stratum Studio exists to bridge human ambition with technological evolution, transforming complex operational
                friction into flawless, high-performance digital infrastructure. Born from a passion for troubleshooting complex
                systems and an unyielding drive for innovation, we engineer hyper-personalized brands from the ground up. We
                believe that technology is a living, constantly changing force that shapes the fabric of our society—and we
                refuse to let our clients be left behind. By combining rigorous, hands-on engineering principles with tailored,
                custom-coded Next.js architectures, we don&apos;t just build websites; we deploy absolute sovereignty, giving
                your brand complete and undeniable market supremacy.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-zinc-500">
                  Three-Pillar Value Matrix
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-white">The Stratum Standard</h2>
              </div>
              <p className="max-w-lg text-sm leading-7 text-zinc-400">
                A disciplined foundation for systems that remain secure, distinctive, and entirely owned by the businesses they
                are built to serve.
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Code2,
                  label: "Custom Engineering",
                  text: "Bespoke Next.js architectures, secure database states, and fluid interface layouts."
                },
                {
                  icon: Fingerprint,
                  label: "Proprietary Pipeline",
                  text: "Rigidly guarded data isolation layers, private testing sandboxes, and absolute code ownership."
                },
                {
                  icon: Sparkles,
                  label: "Pristine Finish",
                  text: "High-saturation ambient illumination, sleek glass backdrops, and frictionless client conversion points."
                }
              ].map((item, index) => (
                <article
                  key={item.label}
                  className="relative overflow-hidden rounded-2xl border border-zinc-900/60 bg-zinc-950/95 p-7 backdrop-blur-xl transition-colors duration-300 hover:border-zinc-700/70"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(0,0,0,0.02),rgba(0,0,0,0.66)_90%)]" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800/70 bg-black/60">
                        <item.icon className="h-5 w-5 text-cyan-200" />
                      </div>
                      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-zinc-600">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{item.label}</h3>
                    <p className="mt-3 font-sans text-sm leading-7 text-zinc-400">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
