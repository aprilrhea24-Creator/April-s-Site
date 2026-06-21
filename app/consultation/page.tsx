import { ChevronDown, SendHorizonal, ShieldCheck, UserRound } from "lucide-react";
import { redirect } from "next/navigation";

import { submitBuildRequest } from "@/app/consultation/actions";
import { BudgetCheckout } from "@/components/forms/budget-checkout";
import { getSession } from "@/lib/auth";
import type { BuildTierKey } from "@/lib/build-tiers";
import { getPrisma } from "@/lib/prisma";

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
  const session = await getSession();
  const returnParams = new URLSearchParams();

  if (packageKey) {
    returnParams.set("package", packageKey);
  }
  if (tier) {
    returnParams.set("tier", tier);
  }

  const consultationPath = `/consultation${returnParams.size ? `?${returnParams.toString()}` : ""}`;

  if (!session) {
    redirect(`/register?next=${encodeURIComponent(consultationPath)}`);
  }

  const client = await getPrisma().user.findUnique({
    where: { id: session.userId },
    select: { name: true, email: true, phone: true, address: true }
  });

  if (!client) {
    redirect(`/register?next=${encodeURIComponent(consultationPath)}`);
  }

  const preset = packageKey ? packagePresets[packageKey] : undefined;
  const initialTier = validTiers.has(tier as BuildTierKey) ? (tier as BuildTierKey) : "bookingCore";
  const selectedFeatures = new Set(preset?.features ?? []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Build request</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white">Configure a high-tier app specification package.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Your verified client profile is already connected. Configure the system below and submit one complete specification
          directly into your private Stratum workspace.
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

      <div className="consultation-shell relative mt-8 rounded-2xl">
        <div className="consultation-glow" aria-hidden="true" />
        <form
          className="relative z-10 grid gap-6 rounded-2xl border border-zinc-700/70 bg-[#0b0f17]/95 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.72)] backdrop-blur-2xl sm:p-8 lg:grid-cols-2"
          action={submitBuildRequest}
        >
          <div className="command-surface rounded-xl p-5 lg:col-span-2">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10">
                  <UserRound className="h-5 w-5 text-cyan-200" />
                </span>
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">
                    Verified client profile
                  </p>
                  <p className="mt-2 text-lg font-bold text-white">{client.name}</p>
                  <p className="mt-1 text-sm text-zinc-300">{client.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-200">
                <ShieldCheck className="h-4 w-4" />
                Request ownership secured
              </div>
            </div>
            <div className="mt-4 grid gap-3 border-t border-zinc-800/80 pt-4 text-sm text-zinc-400 sm:grid-cols-2">
              <p>{client.phone ?? "Phone not provided"}</p>
              <p className="sm:text-right">{client.address ?? "Company context not provided"}</p>
            </div>
          </div>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-zinc-200">Industry</span>
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
            <legend className="text-sm font-semibold text-zinc-200">Desired features</legend>
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
          <label className="space-y-2 lg:col-span-2">
            <span className="text-sm font-semibold text-zinc-200">Operational notes</span>
            <textarea
              name="notes"
              rows={5}
              placeholder="Share workflow constraints, launch timing, integrations, or anything the studio should account for."
              className="w-full rounded-xl border border-zinc-700/70 bg-black/80 px-4 py-3 text-white outline-none transition-all placeholder:text-zinc-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </label>
          <div className="command-surface flex flex-col gap-4 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between lg:col-span-2">
            <div>
              <p className="font-bold text-white">Ready for studio review?</p>
              <p className="mt-1 text-sm text-zinc-400">
                Your profile, selected tier, features, and notes will be saved together.
              </p>
            </div>
            <button
              type="submit"
              className="stratum-action-gradient inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 font-bold transition-all hover:brightness-110"
            >
              Submit Specification <SendHorizonal className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
