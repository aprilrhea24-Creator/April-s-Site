import Link from "next/link";

import { SectionTitle } from "@/components/section-title";

const recipeFeatures = [
  "Exclusive recipes",
  "Cajun technique",
  "Soul food favorites",
  "Kitchen-ready flavor"
];

export default function RecipesPage() {
  return (
    <section className="bg-[#07080a] px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1560px] gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionTitle
            eyebrow="Recipes"
            title="Top notch recipes from the Chef Thai kitchen."
            description="The client site positions recipes as exclusive, purchase-ready flavor that cannot be found everywhere else. This page gives that offer a clean home inside the app."
            tone="dark"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {recipeFeatures.map((feature) => (
              <span key={feature} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white/75">
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-white/10 bg-black p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#ff2631]">Coming Into The App</p>
          <h2 className="mt-5 text-4xl font-black uppercase italic leading-tight text-white">Recipe ordering can live here.</h2>
          <p className="mt-5 text-lg font-semibold leading-8 text-white/60">
            When the client is ready, this page can connect recipe products to checkout. For now it keeps the existing brand offer visible and organized.
          </p>
          <Link
            href="/store"
            className="mt-8 inline-flex rounded-full bg-[#f00612] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#ff2631]"
          >
            View Store
          </Link>
        </div>
      </div>
    </section>
  );
}
