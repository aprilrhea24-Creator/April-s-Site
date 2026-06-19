import { Code2, Fingerprint, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/5 bg-zinc-950/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/10">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">The Stratum Standard</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white">
          An elite production house for high-performance operational systems.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Stratum Studio builds dedicated digital machinery for teams demanding total operational supremacy. We replace
          fragmented, manual work arrays with centralized interactive web portals, autonomous scheduling grids, and pristine
          frontends designed to cement market authority.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
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
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/5 bg-zinc-950/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/10"
            >
              <item.icon className="h-6 w-6 text-cyan-200" />
              <h2 className="mt-4 font-semibold text-white">{item.label}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
