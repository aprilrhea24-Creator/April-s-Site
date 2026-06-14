import { SectionTitle } from "@/components/section-title";
import { existingFlowLinks } from "@/lib/chef-thai-content";
import { getActiveChefServices } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function PersonalChefPage() {
  const services = await getActiveChefServices();

  return (
    <section className="bg-[#07080a] px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1560px]">
        <SectionTitle
          eyebrow="Private Events"
          title="Chef Thai at the center of the room."
          description="Private dinners, intimate events, cooking moments, and custom Cajun Thai cuisines for clients who want the experience tailored."
          tone="dark"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="rounded-[2rem] border border-white/10 bg-black p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff2631]">{service.eventType}</p>
              <h2 className="mt-3 text-2xl font-black uppercase italic text-white">{service.title}</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-white/60">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm font-semibold text-white/70">
                <li>From {formatCurrency(service.basePrice)}</li>
                <li>{service.pricingModel === "hourly" ? `${formatCurrency(service.hourlyRate ?? 0)} hourly add-on` : "Flat-rate pricing"}</li>
                <li>{service.minimumGuests} guest minimum</li>
                <li>{service.durationHours} hour experience</li>
              </ul>
              <a
                href={existingFlowLinks.bookNow}
                className="mt-6 inline-flex rounded-full bg-[#f00612] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#ff2631]"
              >
                Book Through Chef Thai
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
