import { BookingForm } from "@/components/forms/booking-form";
import { SectionTitle } from "@/components/section-title";
import { getCurrentUser } from "@/lib/auth";
import { cateringMenuSectionsRich } from "@/lib/catering-menu-content";
import { getActiveCateringMenus } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function CateringPage() {
  const [menus, user] = await Promise.all([
    getActiveCateringMenus(),
    getCurrentUser()
  ]);

  return (
    <div className="bg-[#0a0a0a] text-white font-sans">
      <section className="mx-auto max-w-[1560px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionTitle
          eyebrow="Catering"
          title="Cajun, seafood, soul food, and Thai-inspired event menus."
          description="The client site menu is organized here into clean categories so guests can browse without the page feeling crowded. Setup is included for catered events."
          tone="dark"
        />

        <div className="mt-16 flex flex-col space-y-16">
          {cateringMenuSectionsRich.map((section) => (
            <div key={section.title} className="w-full">
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-black tracking-wider uppercase border-l-4 border-red-600 pl-4 text-white">
                  {section.title}
                </h2>
                {section.pricingNote && (
                  <p className="mt-2 text-sm font-semibold text-zinc-400 pl-5">
                    {section.pricingNote}
                  </p>
                )}
              </div>

              {/* Menu Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className={`relative p-6 rounded-xl bg-[#121212] border transition-all duration-300 hover:border-red-600 group ${
                      item.luxury
                        ? 'border-red-950/40 bg-gradient-to-br from-[#121212] to-[#1a0d0d]'
                        : 'border-zinc-800/80'
                    }`}
                  >
                    {/* Top Right Label / Number */}
                    {item.luxury ? (
                      <span className="absolute top-4 right-4 bg-red-600/10 text-red-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border border-red-500/20">
                        Luxury
                      </span>
                    ) : (
                      <span className="absolute top-4 right-4 text-xs font-mono text-zinc-600 group-hover:text-red-500">
                        {item.id}
                      </span>
                    )}

                    {/* Dish Title */}
                    <h3 className="text-lg font-extrabold uppercase tracking-wide text-zinc-100 pr-16 mb-2">
                      {item.title}
                    </h3>

                    {/* Text Description */}
                    <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0a0a0a] py-20">
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
