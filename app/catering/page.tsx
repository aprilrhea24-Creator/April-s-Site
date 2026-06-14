import { BookingForm } from "@/components/forms/booking-form";
import { SectionTitle } from "@/components/section-title";
import { getCurrentUser } from "@/lib/auth";
import { cateringMenuSections } from "@/lib/chef-thai-content";
import { getActiveCateringMenus } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function CateringPage() {
  const [menus, user] = await Promise.all([
    getActiveCateringMenus(),
    getCurrentUser()
  ]);

  return (
    <div className="bg-[#07080a] text-white">
      <section className="mx-auto max-w-[1560px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionTitle
          eyebrow="Catering"
          title="Cajun, seafood, soul food, and Thai-inspired event menus."
          description="The client site menu is organized here into clean categories so guests can browse without the page feeling crowded. Setup is included for catered events."
          tone="dark"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cateringMenuSections.map((section) => (
            <article key={section.title} className="rounded-[2rem] border border-white/10 bg-black p-6">
              <h2 className="text-2xl font-black uppercase italic text-white">{section.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-white/10 bg-black py-20">
        <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-10">
          <SectionTitle
            eyebrow="Book Catering"
            title="Choose a package and send the event details."
            description="Use the booking cards for guest count, event date, address, and custom menu notes."
            tone="dark"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {menus.map((menu) => (
              <div key={menu.id} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff2631]">{menu.category}</p>
                <h2 className="mt-3 text-2xl font-black uppercase italic text-white">{menu.title}</h2>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/60">{menu.description}</p>
                <ul className="mt-4 space-y-2 text-sm font-semibold text-white/70">
                  <li>{formatCurrency(menu.pricePerPerson)} per guest</li>
                  <li>{menu.minimumGuestCount} guest minimum</li>
                  <li>{menu.serviceHours} service hours included</li>
                </ul>
                <div className="mt-6 rounded-[1.5rem] bg-white p-4 text-ink">
                  <BookingForm
                    type="CATERING"
                    itemId={menu.id}
                    userId={user?.id}
                    minimumGuests={menu.minimumGuestCount}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
