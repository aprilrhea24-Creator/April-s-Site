import { SendHorizonal } from "lucide-react";

const industries = ["Hospitality", "Professional services", "Healthcare operations", "Field service", "B2B SaaS", "Custom"];
const features = ["User profiles", "Custom business logic", "Dashboard analytics", "Payments and deposits", "Automated notifications", "Admin console"];

export default function ConsultationPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Build request</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white">Configure a high-tier app specification package.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Submit the core data April needs to scope a private operational app, automation workflow, or SaaS storefront.
        </p>
      </div>

      <form className="mt-12 grid gap-6 glass-panel rounded-[2rem] p-6 lg:grid-cols-2" action="/api/build-requests" method="POST">
        <label className="space-y-2">
          <span className="text-sm text-slate-300">Name</span>
          <input name="name" required className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none focus:border-cyan-200" />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-slate-300">Business email</span>
          <input name="email" type="email" required className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none focus:border-cyan-200" />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-slate-300">Industry</span>
          <select name="industry" className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none focus:border-cyan-200">
            {industries.map((industry) => (
              <option key={industry}>{industry}</option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm text-slate-300">Estimated budget</span>
          <select name="budget" className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none focus:border-cyan-200">
            <option>$3K-$7.5K foundation</option>
            <option>$7.5K-$15K advanced system</option>
            <option>$15K+ private SaaS build</option>
          </select>
        </label>
        <fieldset className="lg:col-span-2">
          <legend className="text-sm text-slate-300">Desired features</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <label key={feature} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm text-slate-200">
                <input type="checkbox" name="features" value={feature} className="h-4 w-4 accent-cyan-300" />
                {feature}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="space-y-2 lg:col-span-2">
          <span className="text-sm text-slate-300">Workflow notes</span>
          <textarea name="notes" rows={6} className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none focus:border-cyan-200" />
        </label>
        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#67e8f9,#a78bfa,#f0abfc)] px-6 py-3 font-semibold text-slate-950 shadow-glow hover:brightness-110 lg:col-span-2">
          Submit Specification <SendHorizonal className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
}
