/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SectionTitle } from "@/components/section-title";

type MealPlan = {
  id: string;
  name: string;
  description: string;
  price: any;
  dietaryTags: string[];
};

export function StoreClientPage({ session, mealPlans, isLoading }: { session: any; mealPlans: MealPlan[]; isLoading: boolean }) {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "MEAL_PREP",
          userId: session.id,
          itemId: selectedPlan,
          startAt: new Date().toISOString(),
          timezone: "America/Los_Angeles",
          specialRequests: specialRequests
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create booking.");
      }

      router.push(`/checkout?bookingId=${data.booking.id}`);
      router.refresh();

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center py-20"><div className="animate-spin h-8 w-8 rounded-full border-4 border-white/20 border-t-[#f00612]"></div></div>;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(240,6,18,0.15),transparent_45%),#08090b] px-6 py-32 text-center shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[#ff2631]">Exclusive Access</p>
        <h2 className="mt-6 max-w-4xl text-4xl font-black uppercase italic leading-tight text-white sm:text-5xl">
          Sign In to Request Meal Prep
        </h2>
        <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/60">
          Meal prep services are available exclusively to registered clients. Sign in or create an account to view current options and submit a request.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/login"
            className="rounded-full bg-[#f00612] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#ff2631]"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-[#f00612] hover:bg-[#f00612]"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle
        eyebrow="Chef Thai Meal Prep"
        title="Request your weekly macro plan."
        description="Select your preferred meal plan below. Use the special instructions field to detail any allergies, macro goals, or ingredient preferences. Chef Tyrell will review and confirm your request."
        tone="dark"
      />

      <form onSubmit={handleSubmit} className="mt-12 max-w-4xl">
        <div className="grid gap-4">
          {mealPlans.map((plan) => (
            <label
              key={plan.id}
              className={`flex cursor-pointer items-start gap-5 rounded-[2rem] border p-6 transition sm:p-8 ${
                selectedPlan === plan.id
                  ? "border-[#f00612]/60 bg-[#f00612]/10"
                  : "border-white/10 bg-black/60 hover:border-white/25"
              }`}
            >
              <div className="flex h-6 items-center">
                <input
                  type="radio"
                  name="itemId"
                  value={plan.id}
                  checked={selectedPlan === plan.id}
                  onChange={() => setSelectedPlan(plan.id)}
                  className="h-5 w-5 accent-[#f00612]"
                  required
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-2xl font-black uppercase italic text-white">{plan.name}</h3>
                  <span className="text-xl font-black text-[#ff2631]">${Number(plan.price).toFixed(2)}</span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/60">{plan.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {plan.dietaryTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-10">
          <label className="block text-sm font-black uppercase tracking-[0.18em] text-white/70">
            Special Instructions, Allergies, or Preferences for Chef Thai
          </label>
          <textarea
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="e.g., High protein, no dairy, low carb..."
            className="mt-4 min-h-[160px] w-full rounded-[2rem] border border-white/10 bg-black/60 p-6 text-white placeholder-white/30 outline-none focus:border-[#f00612]/50"
          />
        </div>

        {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}

        <div className="mt-8">
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-[#f00612] px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_45px_rgba(240,6,18,0.24)] transition hover:bg-[#ff2631] disabled:opacity-50"
          >
            {loading ? "Processing..." : "Submit Meal Prep Request"}
          </button>
        </div>
      </form>
    </div>
  );
}
