import { SectionTitle } from "@/components/section-title";
import { aboutStory, missionCopy, visionCopy } from "@/lib/chef-thai-content";

export default function AboutPage() {
  return (
    <div className="bg-[#07080a] text-white">
      <section className="mx-auto grid max-w-[1560px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <SectionTitle
          eyebrow="About Chef Thai"
          title="Food, purpose, and community in every plate."
          description="Chef Thai is the public brand. The story gives clients a clear sense of the chef behind the food without overcrowding the booking experience."
          tone="dark"
        />
        <div className="space-y-5 text-lg font-semibold leading-9 text-white/60">
          {aboutStory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="border-t border-white/10 bg-black py-20">
        <div className="mx-auto grid max-w-[1560px] gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#ff2631]">Mission</p>
            <p className="mt-5 text-xl font-semibold leading-9 text-white/70">{missionCopy}</p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#ff2631]">Vision</p>
            <p className="mt-5 text-xl font-semibold leading-9 text-white/70">{visionCopy}</p>
          </article>
        </div>
      </section>
    </div>
  );
}
