import { ChevronDown, SendHorizonal } from "lucide-react";

import { submitBuildRequest } from "@/app/consultation/actions";
import { BudgetCheckout } from "@/components/forms/budget-checkout";
import type { BuildTierKey } from "@/lib/build-tiers";

const industries = ["Hospitality", "Professional services", "Healthcare operations", "Field service", "B2B SaaS", "Custom"];
const features = [
  { label: "User Profiles & Secure Auth", price: "+$600" },
  { label: "Custom Business Logic Engine", price: "+$1,200" },
  { label: "Real-Time Dashboard Analytics", price: "+$900" },
  { label: "Secure Escrow & Payment Gates", price: "+$800" },
  { label: "Automated Notification Pipelines", price: "+$500" },
  { label: "Multi-Tenant Admin Console", price: "+$1,500" },
  { label: "Scalable Cloud Database Infrastructure", price: "+$1,000" },
  { label: "Cross-Platform Mobile Optimization", price: "+$1,800" }
];
const packagePresets: Record<string, { industry: string; features: string[] }> = {
  hospitality: {
    industry: "Hospitality",
    features: ["Secure Escrow & Payment Gates", "Multi-Tenant Admin Console"]
  },
  "professional-services": {
    industry: "Professional services",
    features: ["Real-Time Dashboard Analytics", "Multi-Tenant Admin Console"]
  },
  operations: {
    industry: "Field service",
    features: ["Automated Notification Pipelines", "Multi-Tenant Admin Console"]
  },
  "b2b-saas": {
    industry: "B2B SaaS",
    features: ["User Profiles & Secure Auth", "Secure Escrow & Payment Gates", "Multi-Tenant Admin Console"]
  }
};
const validTiers = new Set<BuildTierKey>(["bookingCore", "flowAutomation", "enterpriseMatrix", "platformSuite"]);

export default async function ConsultationPage({
  searchParams
}: {
  searchParams: Promise<{ status?: string; checkout?: string; package?: string; tier?: string }>;
}) {
  const { status, checkout, package: packageKey, tier } = await searchParams;
  const preset = packageKey ? packagePresets[packageKey] : undefined;
  const initialTier = validTiers.has(tier as BuildTierKey) ? (tier as BuildTierKey) : "bookingCore";
  const selectedFeatures = new Set(preset?.features ?? []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Build request</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white">Configure a high-tier app specification package.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Submit your system specifications to generate an instant operational estimate. Secure your production window with
          our foundational architecture modules.
        </p>
      </div>

      {status === "success" ? (
        <div className="mt-8 rounded-2xl border border-emerald-200/30 bg-emerald-300/10 px-5 py-4 text-sm text-emerald-100 backdrop-blur-md">
          Your specification was saved. Stratum Studio will review the request and follow up through your business email.
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
          Your 30% initialization deposit was completed successfully.
        </div>
      ) : null}
      {checkout === "cancelled" ? (
        <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-sm text-slate-300 backdrop-blur-md">
          Checkout was canceled. Your specification form is still available below.
        </div>
      ) : null}

      <form
        className="mt-8 grid gap-6 rounded-2xl border border-white/5 bg-[#0b0f17]/80 p-8 backdrop-blur-md lg:grid-cols-2"
        action={submitBuildRequest}
      >
        <label className="space-y-2">
          <span className="text-sm text-slate-300">Name</span>
          <input
            name="name"
            autoComplete="name"
            required
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition-all focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-slate-300">Business email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition-all focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-slate-300">Industry</span>
          <span className="relative block">
            <select
              name="industry"
              defaultValue={preset?.industry ?? industries[0]}
              className="glass-select w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition-all focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            >
              {industries.map((industry) => (
                <option key={industry}>{industry}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-100/70" />
          </span>
        </label>
        <BudgetCheckout initialTier={initialTier} />
        <fieldset className="lg:col-span-2">
          <legend className="text-sm text-slate-300">Desired features</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <label
                key={feature.label}
                className="feature-option flex min-h-24 cursor-pointer items-start gap-3 rounded-xl p-4 text-sm text-white focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400"
              >
                <input
                  type="checkbox"
                  name="features"
                  value={feature.label}
                  defaultChecked={selectedFeatures.has(feature.label)}
                  className="glass-checkbox"
                />
                <span className="flex min-w-0 flex-1 flex-col gap-2">
                  <span className="font-medium leading-5">{feature.label}</span>
                  <span className="font-mono text-xs font-bold text-cyan-300">{feature.price}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <button className="animate-gradient-breath inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#00F2FE,#168BFF,#A800FF)] px-6 py-3 font-bold text-white shadow-[0_0_30px_rgba(22,139,255,0.3)] transition-all hover:brightness-110 hover:shadow-[0_0_42px_rgba(168,0,255,0.42)] lg:col-span-2">
          Submit Specification <SendHorizonal className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
}
