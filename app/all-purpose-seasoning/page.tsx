import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import { existingFlowLinks, storeProducts } from "@/lib/chef-thai-content";

const seasoning = storeProducts[0];

export default function AllPurposeSeasoningPage() {
  return (
    <section className="bg-[radial-gradient(circle_at_75%_20%,rgba(240,6,18,0.28),transparent_28%),linear-gradient(135deg,#07080a,#000)] px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1560px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionTitle
          eyebrow="All-Purpose Seasoning"
          title="I put dat on errrthang."
          description="Chef Thai's all-purpose seasoning is represented as its own in-app product page so customers can understand the offer without leaving the app."
          tone="dark"
        />
        <article className="rounded-[2.5rem] border border-white/10 bg-black/80 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.45)]">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-[#ff2631]">{seasoning.tagline}</p>
          <h2 className="mt-5 text-5xl font-black uppercase italic leading-tight text-white">{seasoning.title}</h2>
          <p className="mt-5 text-lg font-semibold leading-8 text-white/60">{seasoning.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {seasoning.features.map((feature) => (
              <span key={feature} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/70">
                {feature}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={existingFlowLinks.seasoning} className="rounded-full bg-[#f00612] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#ff2631]">
              Order Seasoning
            </a>
            <Link href="/store" className="rounded-full border border-white/15 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-[#f00612] hover:bg-[#f00612]">
              Back To Store
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
