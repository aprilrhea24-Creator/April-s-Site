import { SectionTitle } from "@/components/section-title";
import { policyPoints } from "@/lib/chef-thai-content";

export default function PolicyPage() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      <section className="mx-auto max-w-[1560px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionTitle
          eyebrow="Policy"
          title="EXPECTATIONS BEFORE YOUR EVENT."
          description="The client policy has been condensed into booking-friendly sections so customers understand timing, deposits, guest counts, allergies, and service rules before they reserve."
          tone="dark"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policyPoints.map((point) => (
            <div
              key={point.title}
              className="relative p-8 rounded-[2rem] bg-[#121212] border border-zinc-800/80 transition-all duration-300 hover:border-red-600 hover:-translate-y-1 shadow-[0_24px_80px_rgba(0,0,0,0.2)]"
            >
              <h2 className="text-xl font-black tracking-wider uppercase border-l-4 border-red-600 pl-4 text-white mb-4">
                {point.title}
              </h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
