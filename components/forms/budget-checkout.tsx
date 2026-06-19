"use client";

import { CreditCard } from "lucide-react";
import { useState } from "react";

import { buildTiers, type BuildTierKey } from "@/lib/build-tiers";

export function BudgetCheckout() {
  const [tier, setTier] = useState<BuildTierKey>("foundation");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const selectedTier = buildTiers[tier];

  async function startCheckout() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/payments/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier })
      });
      const result = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !result.url) {
        throw new Error(result.error ?? "Unable to start secure checkout.");
      }

      window.location.assign(result.url);
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "Unable to start secure checkout.");
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <label className="block space-y-2">
        <span className="text-sm text-slate-300">Estimated budget</span>
        <select
          name="budget"
          value={selectedTier.label}
          onChange={(event) => {
            const nextTier = Object.entries(buildTiers).find(([, option]) => option.label === event.target.value)?.[0];
            if (nextTier) {
              setTier(nextTier as BuildTierKey);
              setError(null);
            }
          }}
          className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none focus:border-cyan-200"
        >
          {Object.entries(buildTiers).map(([key, option]) => (
            <option key={key} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <div className="rounded-2xl border border-cyan-200/20 bg-cyan-200/[0.08] p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100">Launch reservation</p>
            <p className="mt-1 text-sm text-slate-300">
              ${(selectedTier.depositCents / 100).toLocaleString()} credited toward the selected build tier.
            </p>
          </div>
          <button
            type="button"
            onClick={startCheckout}
            disabled={loading}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white disabled:cursor-wait disabled:opacity-60"
          >
            <CreditCard className="h-4 w-4" />
            {loading ? "Opening..." : "Reserve"}
          </button>
        </div>
        {error ? <p className="mt-3 text-sm text-rose-200">{error}</p> : null}
      </div>
    </div>
  );
}
