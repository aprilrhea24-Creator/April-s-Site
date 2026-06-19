"use client";

import { Check, ChevronDown, CreditCard } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { buildTiers, type BuildTierKey } from "@/lib/build-tiers";

export function BudgetCheckout({ initialTier = "foundation" }: { initialTier?: BuildTierKey }) {
  const [tier, setTier] = useState<BuildTierKey>(initialTier);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const labelId = useId();
  const listboxId = useId();
  const selectedTier = buildTiers[tier];

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function selectTier(nextTier: BuildTierKey) {
    setTier(nextTier);
    setError(null);
    setOpen(false);
  }

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
      <div className="space-y-2">
        <span id={labelId} className="block text-sm text-slate-300">
          Estimated budget
        </span>
        <input type="hidden" name="budget" value={selectedTier.label} />
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            aria-labelledby={labelId}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls={listboxId}
            onClick={() => setOpen((current) => !current)}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setOpen(true);
              }
            }}
            className="glass-field flex items-center justify-between gap-4 text-left"
          >
            <span>{selectedTier.label}</span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-cyan-100/70 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open ? (
            <div
              id={listboxId}
              role="listbox"
              aria-label="Estimated budget"
              className="budget-popover absolute z-20 mt-2 w-full overflow-hidden rounded-2xl p-1.5"
            >
              {Object.entries(buildTiers).map(([key, option]) => {
                const optionKey = key as BuildTierKey;
                const selected = optionKey === tier;

                return (
                  <button
                    key={key}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => selectTier(optionKey)}
                    className={`budget-option flex w-full items-center justify-between gap-4 rounded-xl px-3.5 py-3 text-left text-sm ${
                      selected ? "budget-option-selected" : ""
                    }`}
                  >
                    <span>{option.label}</span>
                    {selected ? <Check className="h-4 w-4 shrink-0 text-violet-200" /> : null}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

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
