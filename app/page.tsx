import Link from "next/link";

import { Hero } from "@/components/hero";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { Testimonials } from "@/components/testimonials";
import { brandHighlights, homepageServices } from "@/lib/chef-thai-content";
import { getLandingData } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { mealPlans, cateringMenus, chefServices, availability } = await getLandingData();

  return (
    <>
      <Hero />
      <section className="border-y border-white/10 bg-black py-6 text-white">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-center justify-center gap-3 px-4 sm:px-6 lg:px-10">
          {brandHighlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-[#f00612]/30 bg-[#f00612]/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/80"
            >
              {highlight}
            </span>
          ))}
        </div>
      </section>
      <section className="bg-[#08090b] py-24 text-white">
        <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-10">
          <SectionTitle
            eyebrow="Our Services"
            title="Built around the flavor."
            description="The client site centers Chef Thai around recipes, catering, private events, and all-purpose seasoning. The app keeps that same story organized around booking and ordering."
            tone="dark"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {homepageServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#f00612]/45 hover:bg-[#f00612]/10"
              >
                <h3 className="text-2xl font-black uppercase italic leading-tight text-white">{service.title}</h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-white/55">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <ServiceCard
              title="Meal Prep Plans"
              subtitle="Recurring or one-time"
              price={`From ${formatCurrency(mealPlans[0]?.price ?? 0)}`}
              href="/meal-prep"
              imageUrl="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
            >
              <p>Weekly and monthly chef-designed plans with dietary filters, delivery scheduling, and subscription-ready checkout.</p>
            </ServiceCard>
            <ServiceCard
              title="Catering Services"
              subtitle="Corporate to weddings"
              price={`${formatCurrency(cateringMenus[0]?.pricePerPerson ?? 0)} / guest`}
              href="/catering"
              imageUrl="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80"
            >
              <p>Per-person pricing, minimum guest counts, event notes, scheduling, and custom event address capture.</p>
            </ServiceCard>
            <ServiceCard
              title="Personal Chef Events"
              subtitle="Private luxury dining"
              price={`From ${formatCurrency(chefServices[0]?.basePrice ?? 0)}`}
              href="/personal-chef"
              imageUrl="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80"
            >
              <p>Private chef dinner parties, cooking classes, and special occasions with agreement acknowledgement and availability checks.</p>
            </ServiceCard>
          </div>
        </div>
      </section>
      <section className="bg-black py-24 text-white">
        <div className="mx-auto grid max-w-[1560px] gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10">
          <div>
            <SectionTitle
              eyebrow="Next Availability"
              title="Reserve the next open date."
              description="Availability windows keep events realistic and easy to manage. Sign in to lock in your preferred chef service."
              tone="dark"
            />
          </div>
          <div className="grid gap-4">
            {availability.map((slot) => (
              <div key={slot.id} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="font-black uppercase tracking-[0.12em] text-white">
                  {new Date(slot.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                  })}
                </p>
                <p className="mt-2 text-sm font-semibold text-white/55">
                  {slot.startHour}:00 - {slot.endHour}:00 ({slot.timezone})
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <section className="bg-[radial-gradient(circle_at_center,rgba(240,6,18,0.32),transparent_34%),linear-gradient(180deg,#050505,#000)] py-24 text-white">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/10 bg-black/70 px-6 py-12 text-center shadow-[0_30px_120px_rgba(0,0,0,0.42)] sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Ready to Order"
            title="Bring Chef Thai to your next meal, meeting, or celebration."
            description="Create an account to book services, manage orders, and move seamlessly into secure checkout."
            align="center"
            tone="dark"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/register" className="rounded-full bg-[#f00612] px-8 py-4 font-black uppercase tracking-[0.14em] text-white shadow-[0_18px_50px_rgba(240,6,18,0.32)] transition hover:bg-[#ff2631]">
              Create Account
            </Link>
            <Link href="/login" className="rounded-full border border-white/15 px-8 py-4 font-black uppercase tracking-[0.14em] text-white transition hover:border-[#f00612] hover:bg-[#f00612]">
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
