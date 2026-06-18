/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";

import { SectionTitle } from "@/components/section-title";
import { existingFlowLinks, seasoningGallery, storeCatalogProducts } from "@/lib/chef-thai-content";
import { StoreClientPage } from "./client-page";

type MealPlan = {
  id: string;
  name: string;
  description: string;
  price: any;
  dietaryTags: string[];
};

export default function StorePage() {
  const [storeTab, setStoreTab] = useState<"seasonings" | "meal-prep">("seasonings");
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
    <div className="bg-[#07080a] text-white">
      <section className="mx-auto max-w-[1560px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionTitle
          eyebrow="Chef Thai Store"
          title="Bring the flavor home."
          description="Shop exclusive seasonings, apparel, or request your weekly meal prep macro plans."
          tone="dark"
        />

        <div className="mt-12 flex gap-3 overflow-x-auto pb-3">
          <button
            type="button"
            onClick={() => setStoreTab("seasonings")}
            className={`min-h-14 shrink-0 rounded-full px-6 text-xs font-black uppercase tracking-[0.18em] sm:px-8 ${
              storeTab === "seasonings"
                ? "bg-[#f00612] text-white shadow-[0_18px_45px_rgba(240,6,18,0.22)]"
                : "border border-white/10 bg-white/[0.05] text-white/55 hover:border-[#f00612]/50 hover:text-white"
            }`}
          >
            Seasonings & Products
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
      </section>

      {storeTab === "seasonings" ? (
        <>
          <section className="relative border-b border-white/10 px-4 py-20 sm:px-6 lg:px-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596683788737-1422cb479428?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-[0.15]" />
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
            <StoreClientPage session={session} mealPlans={mealPlans} isLoading={isLoading} />
          </div>
        </section>
      )}
    </div>
  );
}
