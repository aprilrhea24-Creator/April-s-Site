import { SectionTitle } from "@/components/section-title";
import { policyPoints } from "@/lib/chef-thai-content";

export default function PolicyPage() {
  return (
    <section className="bg-[#07080a] px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1560px]">
        <SectionTitle
          eyebrow="Policy"
          title="Clear expectations before the event."
          description="The client policy has been condensed into booking-friendly sections so customers understand timing, deposits, guest counts, allergies, and service rules before they reserve."
          tone="dark"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {policyPoints.map((point) => (
            <article key={point.title} className="rounded-[2rem] border border-white/10 bg-black p-6">
              <h2 className="text-xl font-black uppercase italic text-white">{point.title}</h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-white/60">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
