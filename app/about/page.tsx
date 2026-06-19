import { Code2, Fingerprint, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">About April&apos;s Site</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white">A private studio for calm, capable business software.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Stratum Studio is the professional portfolio and storefront for April&apos;s custom application work. The studio
          focuses on elegant operational systems: client portals, intake flows, booking logic, dashboards, automation, and
          internal tools that help small teams work with the polish of much larger companies.
        </p>
        <p className="mt-4 text-base leading-8 text-slate-300">
          This page is intentionally written as flexible agency boilerplate so real source history, case studies, credentials,
          and client outcomes can be layered in later without changing the foundation.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { icon: Code2, label: "Custom builds", text: "Next.js, dashboards, automations, and operational UX." },
            { icon: Fingerprint, label: "Private process", text: "Scoped discovery, protected client data, and clear approvals." },
            { icon: Sparkles, label: "Premium finish", text: "Glass interfaces, clean workflows, and conversion-minded pages." }
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
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
