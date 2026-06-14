import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import { recipeProducts } from "@/lib/chef-thai-content";

export default function RecipesPage() {
  return (
    <section className="bg-[#07080a] px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1560px] gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionTitle
            eyebrow="Recipes"
            title="Top notch recipes from the Chef Thai kitchen."
            description="Exclusive Chef Thai recipes and kitchen favorites for clients who want the flavor beyond the event."
            tone="dark"
          />
          <div className="mt-10 grid gap-5">
            {recipeProducts.map((product) => (
              <article key={product.title} className="rounded-[2rem] border border-white/10 bg-black p-6">
                <h2 className="text-2xl font-black uppercase italic text-white">{product.title}</h2>
                <p className="mt-4 text-sm font-semibold leading-7 text-white/60">{product.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.details.map((detail) => (
                    <span key={detail} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/70">
                      {detail}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-white/10 bg-black p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#ff2631]">Connected Offer</p>
          <h2 className="mt-5 text-4xl font-black uppercase italic leading-tight text-white">Recipes belong in the store flow.</h2>
          <p className="mt-5 text-lg font-semibold leading-8 text-white/60">
            This page gives the recipes their own in-app home while still connecting customers to the Chef Thai store and seasoning offer.
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
