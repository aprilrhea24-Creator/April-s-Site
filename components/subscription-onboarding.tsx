"use client";

import { Check, Link2, ShieldCheck } from "lucide-react";
import { useState } from "react";

type ServiceWindow = {
  id: "monthly" | "quarterly" | "biannual" | "annual";
  title: string;
  badge?: string;
  text: string;
  price: string;
};

const serviceWindows: ServiceWindow[] = [
  {
    id: "monthly",
    title: "1-Month Rolling Baseline",
    badge: "Most Popular",
    text: "Complete month-to-month flexibility. Includes priority access for ongoing iterative updates, deep manual health diagnostics, and on-demand layout refinements from me whenever your business needs pivot.",
    price: "$199/mo, bills monthly, cancel anytime."
  },
  {
    id: "quarterly",
    title: "3-Month Operational Cycle",
    text: "Extended design and performance coverage. Includes scheduled structural optimization sweeps, deep repository health checks, and continuous front-end alignment to protect your system's scale.",
    price: "$179/mo, billed quarterly."
  },
  {
    id: "biannual",
    title: "6-Month Infrastructure Guard",
    text: "Deep dedicated system surveillance. Continuous system checks, rapid-response error patching, and priority alignment for high-volume frameworks demanding absolute stability.",
    price: "$159/mo, billed bi-annually."
  },
  {
    id: "annual",
    title: "1-Year Comprehensive Alliance",
    text: "The ultimate long-term operational safeguard. Year-round dedicated site maintenance, extensive visual and workflow adjustments, and deep architectural integrity audits to ensure permanent market supremacy.",
    price: "$139/mo, billed annually."
  }
];

export function SubscriptionOnboarding() {
  const [selectedWindow, setSelectedWindow] = useState<ServiceWindow["id"]>(serviceWindows[0].id);
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="mt-12"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <fieldset>
        <legend className="sr-only">Select a dedicated support timeline</legend>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceWindows.map((window) => {
            const selected = selectedWindow === window.id;

            return (
              <label
                key={window.id}
                className={`relative flex cursor-pointer flex-col rounded-2xl border bg-zinc-950/60 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition-all duration-300 ${
                  selected
                    ? "border-cyan-400/35 shadow-[0_0_38px_rgba(34,211,238,0.1)]"
                    : "border-white/[0.07] hover:border-white/15"
                }`}
                style={selected ? { borderColor: "rgba(34,211,238,0.35)" } : undefined}
              >
                <input
                  type="radio"
                  name="supportWindow"
                  value={window.id}
                  checked={selected}
                  onChange={() => {
                    setSelectedWindow(window.id);
                    setSubmitted(false);
                  }}
                  className="sr-only"
                />

                <div className="flex min-h-8 items-start justify-between gap-4">
                  {window.badge ? (
                    <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-200">
                      {window.badge}
                    </span>
                  ) : (
                    <span />
                  )}
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                      selected ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-white/15 text-transparent"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold text-white">{window.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">{window.text}</p>
                <p className="mt-7 border-t border-white/[0.07] pt-5 font-mono text-sm font-semibold text-zinc-200">
                  {window.price}
                </p>
              </label>
            );
          })}
        </div>
      </fieldset>

      <p className="mt-6 max-w-2xl font-sans text-xs leading-relaxed text-zinc-500">
        System Transparency Notification: To ensure completely uninterrupted surveillance and maintenance layout support, all
        terms renew automatically. You will receive a direct, detailed email notification from me exactly 7 days prior to your
        billing cycle closing so you retain complete control over your subscription horizon.
      </p>

      <div className="mt-8 rounded-2xl border border-white/[0.07] bg-black/40 p-6 backdrop-blur-xl sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
            <Link2 className="h-4 w-4 text-cyan-200" />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">Secure linkage tray</p>
            <p className="mt-1 text-sm text-zinc-500">Connect the live production environment placed under direct oversight.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto]">
          <label>
            <span className="sr-only">Live production web URL</span>
            <input
              name="productionUrl"
              type="url"
              required
              placeholder="https://your-live-domain.com"
              className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </label>
          <button
            type="submit"
            className="stratum-action-gradient inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300"
          >
            <ShieldCheck className="h-4 w-4" />
            Secure Dedicated Support
          </button>
        </div>

        {submitted ? (
          <p className="mt-5 text-sm leading-6 text-emerald-200">
            Your dedicated support request is prepared. Service activation and billing confirmation will follow through your
            verified client account.
          </p>
        ) : null}
      </div>
    </form>
  );
}
