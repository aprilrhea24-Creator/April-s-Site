import { SectionTitle } from "@/components/section-title";
import { CateringMenuTabs } from "@/components/catering-menu-tabs";
import { cateringPhotoHighlights, cateringSetupVideos, existingFlowLinks } from "@/lib/chef-thai-content";
import { getPublicCateringMenuSections } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function CateringPage() {
  const menuSections = await getPublicCateringMenuSections();

  return (
    <div className="bg-[#07080a] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_85%_20%,rgba(240,6,18,0.26),transparent_30%),linear-gradient(135deg,#08090b,#000)]">
        <div className="mx-auto grid max-w-[1560px] items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <SectionTitle
              eyebrow="Catering"
              title="Cajun, seafood, soul food, and Thai-inspired event menus."
              description="Experience the best in Cajun & Thai cuisines with a full dinner menu, chef-led presentation, and event-ready setup for private gatherings, corporate events, and celebrations."
              tone="dark"
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={existingFlowLinks.bookNow}
                className="rounded-full bg-[#f00612] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgba(240,6,18,0.24)] transition hover:bg-[#ff2631]"
              >
                Book Catering
              </a>
              <a
                href={existingFlowLinks.catering}
                className="rounded-full border border-white/15 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-[#f00612] hover:bg-[#f00612]"
              >
                Official Catering Page
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {cateringPhotoHighlights.map((photo, index) => (
              <figure key={photo.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-black">
                <img src={photo.image} alt={photo.title} className="h-64 w-full object-cover sm:h-56 lg:h-72 xl:h-64" />
                {index === 0 ? (
                  <figcaption className="border-t border-white/10 px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white/70">
                    {photo.title}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1560px] px-4 py-20 sm:px-6 lg:px-10">
        <div>
          <SectionTitle
            eyebrow="Dinner Menu"
            title="Full catering menu."
            description="The menu is grouped for easy scanning, with luxury items clearly marked and no repeated sections."
            tone="dark"
          />
        </div>

        <CateringMenuTabs sections={menuSections} />
      </section>

      <section className="border-t border-white/10 bg-black py-20">
        <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-10">
          <SectionTitle
            eyebrow="Chef Thai Catering Setups"
            title="See the presentation before you book."
            description="These setup videos stay inside the app so guests can preview the catering process before moving into booking."
            tone="dark"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {cateringSetupVideos.map((video) => (
              <article key={video.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#08090b]">
                <div className="aspect-video bg-black">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-black uppercase italic">{video.title}</h2>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/60">{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
