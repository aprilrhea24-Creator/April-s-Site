import { SectionTitle } from "@/components/section-title";
import { policyPoints } from "@/lib/chef-thai-content";

export default function PolicyPage() {
  return (
    <section className="bg-[radial-gradient(circle_at_80%_10%,rgba(240,6,18,0.2),transparent_28%),#07080a] px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1560px]">
        <SectionTitle
          eyebrow="Chef Thai Catering Policy"
          title="EXPECTATIONS BEFORE YOUR EVENT"
          description="Please review these policies before placing a catering, brunch, private chef, recipe, or event order."
          tone="dark"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {policyPoints.map((point) => (
            <article key={point.title} className="rounded-[2rem] border border-white/10 bg-black/85 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.24)]">
              <div className="h-1 w-12 rounded-full bg-[#f00612]" />
              <h2 className="mt-6 text-2xl font-black uppercase italic text-white">{point.title}</h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-white/62">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
