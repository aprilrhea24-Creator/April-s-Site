import Link from "next/link";

import { SectionTitle } from "@/components/section-title";

export default function StorePage() {
  return (
    <section className="bg-[radial-gradient(circle_at_75%_20%,rgba(240,6,18,0.28),transparent_28%),linear-gradient(135deg,#07080a,#000)] px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1560px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle
          eyebrow="Store"
          title="All-purpose seasoning with Chef Thai attitude."
          description="The client site features the seasoning line as a bold brand moment. This page keeps it focused and ready for future product checkout."
          tone="dark"
        />
        <article className="rounded-[2.5rem] border border-white/10 bg-black/75 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.45)]">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-[#ff2631]">I put dat on errrthang</p>
          <h2 className="mt-5 text-5xl font-black uppercase italic leading-tight text-white">All-Purpose Seasoning</h2>
          <p className="mt-5 text-lg font-semibold leading-8 text-white/60">
            A simple, high-contrast store landing area for seasoning, apparel, or recipe products once final product details are ready.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/register"
              className="rounded-full bg-[#f00612] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#ff2631]"
            >
              Create Account
            </Link>
            <Link
              href="/recipes"
              className="rounded-full border border-white/15 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-[#f00612] hover:bg-[#f00612]"
            >
              View Recipes
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
