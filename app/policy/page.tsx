import { SectionTitle } from "@/components/section-title";
import { policyPoints } from "@/lib/chef-thai-content";

export default function PolicyPage() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      <section className="mx-auto max-w-[1560px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionTitle
          eyebrow="CHEF THAI CATERING POLICY"
          title="EXPECTATIONS BEFORE YOUR EVENT."
          description="Please review these policies before placing a catering, brunch, private chef, recipe, or event order."
          tone="dark"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policyPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-[#f00612]/45 hover:bg-[#f00612]/10"
            >
              <div className="mb-6 h-1 w-12 rounded-full bg-[#f00612]" />
              <h2 className="mb-4 text-2xl font-black uppercase italic leading-tight text-white">
                {point.title}
              </h2>
              <p className="text-sm font-semibold leading-7 text-white/55">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
