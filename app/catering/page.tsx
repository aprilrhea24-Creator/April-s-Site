import { SectionTitle } from "@/components/section-title";
import { cateringMenuSections, cateringPhotoHighlights, cateringSetupVideos, existingFlowLinks } from "@/lib/chef-thai-content";

export const dynamic = "force-dynamic";

export default function CateringPage() {
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
            {cateringPhotoHighlights.map((photo) => (
              <figure key={photo.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-black">
                <img src={photo.image} alt={photo.title} className="h-64 w-full object-cover sm:h-56 lg:h-72 xl:h-64" />
                <figcaption className="border-t border-white/10 px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white/70">
                  {photo.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1560px] px-4 py-20 sm:px-6 lg:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-black p-6">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#ff2631]">Starting Point</p>
            <p className="mt-4 text-3xl font-black uppercase italic">$80 per person</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black p-6">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#ff2631]">Minimum</p>
            <p className="mt-4 text-3xl font-black uppercase italic">10 people</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black p-6">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#ff2631]">Service Style</p>
            <p className="mt-4 text-3xl font-black uppercase italic">Setup ready</p>
          </div>
        </div>

        <div className="mt-14">
          <SectionTitle
            eyebrow="Dinner Menu"
            title="Full catering menu."
            description="The menu is grouped for easy scanning, with luxury items clearly marked and no repeated sections."
            tone="dark"
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cateringMenuSections.map((section) => (
            <article key={section.title} className="rounded-[2rem] border border-white/10 bg-black p-6 shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="text-3xl font-black uppercase italic leading-none text-white">{section.title}</h2>
                {"note" in section ? (
                  <span className="rounded-full border border-[#f00612]/35 bg-[#f00612]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/75">
                    {section.note}
                  </span>
                ) : null}
              </div>
              <ul className="mt-6 grid gap-3">
                {section.items.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold leading-6 text-white/72">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
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
