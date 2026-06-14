import { SectionTitle } from "@/components/section-title";
import { cateringMenuSections, existingFlowLinks } from "@/lib/chef-thai-content";

export const dynamic = "force-dynamic";

export default function CateringPage() {
  return (
    <div className="bg-[#07080a] text-white">
      <section className="mx-auto max-w-[1560px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionTitle
          eyebrow="Catering"
          title="Cajun, seafood, soul food, and Thai-inspired event menus."
          description="The client site menu is organized here into clean categories so guests can browse without the page feeling crowded. Setup is included for catered events."
          tone="dark"
        />
        <a
          href={existingFlowLinks.bookNow}
          className="mt-8 inline-flex rounded-full bg-[#f00612] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#ff2631]"
        >
          Book Through Chef Thai
        </a>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cateringMenuSections.map((section) => (
            <article key={section.title} className="rounded-[2rem] border border-white/10 bg-black p-6">
              <h2 className="text-2xl font-black uppercase italic text-white">{section.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
