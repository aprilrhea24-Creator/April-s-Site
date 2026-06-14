import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import { existingFlowLinks, storeProducts } from "@/lib/chef-thai-content";

export default function StorePage() {
  return (
    <section className="bg-[radial-gradient(circle_at_75%_20%,rgba(240,6,18,0.28),transparent_28%),linear-gradient(135deg,#07080a,#000)] px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1560px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle
          eyebrow="Store"
          title="Chef Thai store."
          description="The store content is now represented directly in the app: all-purpose seasoning, recipes, and Chef Thai branded flavor offers."
          tone="dark"
        />
        <article className="rounded-[2.5rem] border border-white/10 bg-black/75 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.45)]">
          <div className="grid gap-5">
            {storeProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#f00612]/45 hover:bg-[#f00612]/10"
              >
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#ff2631]">{product.tagline}</p>
                <h2 className="mt-4 text-3xl font-black uppercase italic leading-tight text-white">{product.title}</h2>
                <p className="mt-4 text-sm font-semibold leading-7 text-white/60">{product.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span key={feature} className="rounded-full border border-white/10 bg-black px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/70">
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <a
            href={existingFlowLinks.store}
            className="mt-8 inline-flex rounded-full bg-[#f00612] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#ff2631]"
          >
            Order Through Chef Thai Store
          </a>
        </article>
      </div>
    </section>
  );
}
