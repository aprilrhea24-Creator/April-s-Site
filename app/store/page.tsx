"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { existingFlowLinks, seasoningGallery, storeCatalogProducts } from "@/lib/chef-thai-content";

type MealPlan = {
  id: string;
  name: string;
  description: string;
  price: any;
  dietaryTags: string[];
};

export default function StorePage() {
  const [storeTab, setStoreTab] = useState<"seasonings" | "meal-prep">("seasonings");
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [session, setSession] = useState<any | null>(null);
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [sessionRes, plansRes] = await Promise.all([
          fetch('/api/auth/session'),
          fetch('/api/store/meal-plans')
        ]);

        if (sessionRes.ok) {
          const { session: sessData } = await sessionRes.json();
          setSession(sessData);
        }

        if (plansRes.ok) {
          const plans = await plansRes.json();
          setMealPlans(plans);
        }
      } catch (err) {
        console.error("Failed to load store data", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <div className="bg-[#07080a] text-white min-h-screen">
      <div className="mx-auto max-w-[1560px] px-4 pt-12 sm:px-6 lg:px-10">
        <div className="flex gap-3 overflow-x-auto pb-3">
          <button
            type="button"
            onClick={() => setStoreTab("seasonings")}
            className={`min-h-14 shrink-0 rounded-full px-6 text-xs font-black uppercase tracking-[0.18em] sm:px-8 ${
              storeTab === "seasonings"
                ? "bg-[#f00612] text-white shadow-[0_18px_45px_rgba(240,6,18,0.22)]"
                : "border border-white/10 bg-white/[0.05] text-white/55 hover:border-[#f00612]/50 hover:text-white"
            }`}
          >
            Seasonings & Recipes
          </button>
          <button
            type="button"
            onClick={() => setStoreTab("meal-prep")}
            className={`min-h-14 shrink-0 rounded-full px-6 text-xs font-black uppercase tracking-[0.18em] sm:px-8 ${
              storeTab === "meal-prep"
                ? "bg-[#f00612] text-white shadow-[0_18px_45px_rgba(240,6,18,0.22)]"
                : "border border-white/10 bg-white/[0.05] text-white/55 hover:border-[#f00612]/50 hover:text-white"
            }`}
          >
            Weekly Meal Prep
          </button>
        </div>
      </div>

      {storeTab === "seasonings" ? (
        <>
          <section className="relative overflow-hidden border-y border-white/10 bg-[linear-gradient(135deg,#0b0505,#000)] px-4 py-20 sm:px-6 lg:px-10 mt-8">
            <img src={storeCatalogProducts[0].image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#08090b]" />
            <div className="relative z-10 mx-auto max-w-[1560px] text-center">
              <div className="inline-flex rounded-full border border-[#f00612]/35 bg-[#f00612]/10 px-6 py-3 text-xs font-black uppercase tracking-[0.28em] text-[#ff343d]">
                Back in stock
              </div>
              <p className="mt-14 text-4xl font-black uppercase italic leading-none text-[#f00612] sm:text-6xl">
                &quot;I put dat on errrthang&quot;
              </p>
              <h1 className="mx-auto mt-8 max-w-6xl text-6xl font-black uppercase leading-[0.9] tracking-normal text-white sm:text-7xl lg:text-8xl">
                All-purpose seasoning
              </h1>
              <p className="mx-auto mt-10 max-w-5xl text-xl font-semibold leading-9 text-white/62">
                The secret ingredient that transforms every dish into a signature masterpiece. From the grill to the kitchen, it is the only seasoning you will need.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href={existingFlowLinks.store}
                  className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#f00612] hover:text-white"
                >
                  Order Yours Now
                </a>
              </div>
              <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-3">
                {seasoningGallery.map((photo) => (
                  <img key={photo.title} src={photo.image} alt={photo.title} className="h-52 w-full rounded-[1.75rem] border border-white/10 object-cover shadow-[0_25px_80px_rgba(0,0,0,0.35)]" />
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-[1560px]">
              <SectionTitle
                eyebrow="Products"
                title="Store items and recipe access."
                description="Prices are displayed in the app for quick browsing. Checkout stays on Chef Thai's official store so inventory, digital delivery, and payment tracking remain intact."
                tone="dark"
              />
              <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {storeCatalogProducts.map((product) => (
                  <article key={product.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
                    <img src={product.image} alt={product.title} className="h-56 w-full object-cover" />
                    <div className="p-6">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff2631]">{product.price}</p>
                      <h2 className="mt-3 text-2xl font-black uppercase italic leading-tight text-white">{product.title}</h2>
                      <p className="mt-4 text-sm font-semibold leading-6 text-white/60">{product.description}</p>
                    </div>
                  </article>
                ))}
              </div>
              <a
                href={existingFlowLinks.store}
                className="mt-10 inline-flex rounded-full bg-[#f00612] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#ff2631]"
              >
                Continue To Official Store
              </a>
            </div>
          </section>
        </>
      ) : (
        <section className="px-4 py-20 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[1560px]">
            {isLoading ? (
              <div className="flex justify-center py-20"><div className="animate-spin h-8 w-8 rounded-full border-4 border-white/20 border-t-[#f00612]"></div></div>
            ) : !session ? (
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
            ) : (
              <div>
                <SectionTitle
                  eyebrow="Chef Thai Meal Prep"
                  title="Request your weekly macro plan."
                  description="Select your preferred meal plan below. Use the special instructions field to detail any allergies, macro goals, or ingredient preferences. Chef Tyrell will review and confirm your request."
                  tone="dark"
                />

                <form action="/api/bookings" method="POST" className="mt-12 max-w-4xl">
                  <input type="hidden" name="type" value="MEAL_PREP" />
                  <input type="hidden" name="userId" value={session.id} />

                  {/* Default required fields for a valid booking - hidden for the simplified UI */}
                  <input type="hidden" name="startAt" value={new Date().toISOString()} />
                  <input type="hidden" name="timezone" value="America/Los_Angeles" />

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
                      name="specialRequests"
                      placeholder="e.g., High protein, no dairy, low carb..."
                      className="mt-4 min-h-[160px] w-full rounded-[2rem] border border-white/10 bg-black/60 p-6 text-white placeholder-white/30 outline-none focus:border-[#f00612]/50"
                    />
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      className="rounded-full bg-[#f00612] px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_45px_rgba(240,6,18,0.24)] transition hover:bg-[#ff2631]"
                    >
                      Submit Meal Prep Request
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
