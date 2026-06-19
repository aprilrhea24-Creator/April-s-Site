import { SendHorizonal } from "lucide-react";

import { submitBuildRequest } from "@/app/consultation/actions";
import { BudgetCheckout } from "@/components/forms/budget-checkout";

const industries = ["Hospitality", "Professional services", "Healthcare operations", "Field service", "B2B SaaS", "Custom"];
const features = ["User profiles", "Custom business logic", "Dashboard analytics", "Payments and deposits", "Automated notifications", "Admin console"];

export default async function ConsultationPage({
  searchParams
}: {
  searchParams: Promise<{ status?: string; checkout?: string }>;
}) {
  const { status, checkout } = await searchParams;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Build request</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white">Configure a high-tier app specification package.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Submit the core data April needs to scope a private operational app, automation workflow, or SaaS storefront.
        </p>
      </div>

      {status === "success" ? (
        <div className="mt-8 rounded-2xl border border-emerald-200/30 bg-emerald-300/10 px-5 py-4 text-sm text-emerald-100 backdrop-blur-md">
          Your specification was saved. April will review the request and follow up through your business email.
        </div>
      ) : null}
      {status === "invalid" || status === "error" ? (
        <div className="mt-8 rounded-2xl border border-rose-200/30 bg-rose-300/10 px-5 py-4 text-sm text-rose-100 backdrop-blur-md">
          {status === "invalid"
            ? "Please check the required fields and submit the request again."
            : "The request could not be saved. Please try again shortly."}
        </div>
      ) : null}
      {checkout === "success" ? (
        <div className="mt-8 rounded-2xl border border-cyan-200/30 bg-cyan-300/10 px-5 py-4 text-sm text-cyan-100 backdrop-blur-md">
          Your build-tier reservation payment was completed successfully.
        </div>
      ) : null}
      {checkout === "cancelled" ? (
        <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-sm text-slate-300 backdrop-blur-md">
          Checkout was canceled. Your specification form is still available below.
        </div>
      ) : null}

      <form className="mt-8 grid gap-6 glass-panel rounded-[2rem] p-6 lg:grid-cols-2" action={submitBuildRequest}>
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
        <BudgetCheckout />
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
