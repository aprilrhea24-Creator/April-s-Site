import Link from "next/link";

import { Hero } from "@/components/hero";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { Testimonials } from "@/components/testimonials";
import { brandHighlights } from "@/lib/chef-thai-content";
import { getLandingData } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { availability } = await getLandingData();

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
            title="Chef Thai services."
            description="Experience the best in Cajun & Thai cuisines through recipes, event catering, and private chef experiences tailored around the occasion."
            tone="dark"
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <ServiceCard
              title="Top Notch Recipes"
              subtitle="Exclusive flavor"
              price="Recipe Access"
              href="/recipes"
              imageUrl="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=900&q=80"
            >
              <p>Exclusive Chef Thai recipes and kitchen favorites built for clients who want the flavor beyond the event.</p>
            </ServiceCard>
            <ServiceCard
              title="Event Catering"
              subtitle="Intimate to large gatherings"
              price="Catering Menus"
              href="/catering"
              imageUrl="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80"
            >
              <p>Private catering for intimate dinners, meetings, celebrations, and larger gatherings with setup-focused service.</p>
            </ServiceCard>
            <ServiceCard
              title="Private Events"
              subtitle="Custom chef experience"
              price="Private Dining"
              href="/personal-chef"
              imageUrl="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80"
            >
              <p>Custom Cajun, soul food, and Thai-inspired chef experiences tailored around the occasion and guest list.</p>
            </ServiceCard>
          </div>
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/60 p-6 text-center">
            <p className="text-sm font-semibold leading-7 text-white/60">
              Looking for the Chef Thai all-purpose seasoning? Visit the store for the brand&apos;s bold seasoning line.
            </p>
            <Link
              href="/store"
              className="mt-4 inline-flex rounded-full border border-white/15 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:border-[#f00612] hover:bg-[#f00612]"
            >
              Visit Store
            </Link>
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
            {availability.length > 0 ? (
              availability.map((slot) => (
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
              ))
            ) : (
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 text-center">
                <p className="text-lg font-black uppercase italic text-white sm:text-xl">
                  New availability dates are still being added.
                </p>
                <p className="mt-3 text-sm font-semibold text-white/60">
                  Please check back soon to lock in your preferred chef service.
                </p>
              </div>
            )}
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
            <Link href="/catering" className="rounded-full bg-[#f00612] px-8 py-4 font-black uppercase tracking-[0.14em] text-white shadow-[0_18px_50px_rgba(240,6,18,0.32)] transition hover:bg-[#ff2631]">
              Book Now
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
