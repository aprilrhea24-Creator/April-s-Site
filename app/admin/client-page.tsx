/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { AdminContentForm } from "@/components/forms/admin-content-form";
import { AdminCateringMenuManager } from "@/components/forms/admin-catering-menu-manager";
import { SectionTitle } from "@/components/section-title";
import { formatCurrency } from "@/lib/utils";

type AdminClientPageProps = {
  data: any;
  cateringMenuItems: any[];
};

export function AdminClientPage({ data, cateringMenuItems }: AdminClientPageProps) {
  const [adminTab, setAdminTab] = useState<"catering" | "meal-prep">("catering");

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Admin Dashboard"
        title="Manage menus, services, bookings, availability, and customer details."
        description="This dashboard is structured to grow with your operations: content management, pricing updates, event logistics, and scheduling all live together."
      />

      <div className="mt-8 flex gap-3 overflow-x-auto pb-3">
        <button
          type="button"
          onClick={() => setAdminTab("catering")}
          className={`min-h-14 shrink-0 rounded-full px-6 text-xs font-black uppercase tracking-[0.18em] sm:px-8 ${
            adminTab === "catering"
              ? "bg-[#1b140f] text-[#fffaf2]"
              : "border border-[#1b140f]/20 text-[#1b140f]/60 hover:border-[#1b140f]/50 hover:text-[#1b140f]"
          }`}
        >
          Manage Catering
        </button>
        <button
          type="button"
          onClick={() => setAdminTab("meal-prep")}
          className={`min-h-14 shrink-0 rounded-full px-6 text-xs font-black uppercase tracking-[0.18em] sm:px-8 ${
            adminTab === "meal-prep"
              ? "bg-[#1b140f] text-[#fffaf2]"
              : "border border-[#1b140f]/20 text-[#1b140f]/60 hover:border-[#1b140f]/50 hover:text-[#1b140f]"
          }`}
        >
          Manage Meal Prep
        </button>
      </div>

      {adminTab === "catering" ? (
        <>
          <div className="mt-10">
            <AdminCateringMenuManager items={cateringMenuItems} />
          </div>
          <div className="mt-10">
            <AdminContentForm
              endpoint="/api/admin/catering-menus"
              title="Add Catering Menu"
              fields={[
                { name: "category", label: "Category: Appetizers, Seafood Boil, Pasta & More, Protein, Sides, or Dessert" },
                { name: "title", label: "Dish or menu title" },
                { name: "description", label: "Ingredients / customer notes", type: "textarea" },
                { name: "pricePerPerson", label: "Price per person", type: "number" },
                { name: "minimumGuestCount", label: "Minimum guest count", type: "number" }
              ]}
            />
          </div>
        </>
      ) : (
        <div className="mt-10 space-y-10">
          <AdminContentForm
            endpoint="/api/admin/meal-plans"
            title="Add New Meal Prep Dish"
            fields={[
              { name: "name", label: "Item name" },
              { name: "description", label: "Description", type: "textarea" },
              { name: "price", label: "Price", type: "number" },
              { name: "dietaryTags", label: "Macro tags (comma-separated, e.g., High Protein)" },
              { name: "mealsPerWeek", label: "Meals per week (internal default)", type: "number" },
              { name: "deliveryDays", label: "Delivery days (comma-separated)" }
            ]}
          />
          <div className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
            <h2 className="font-display text-3xl text-ink">New Meal Prep Requests</h2>
            <div className="mt-6 space-y-4">
              {data.bookings.filter((b: any) => b.type === "MEAL_PREP").length === 0 ? (
                <p className="text-sm text-ink/70">No meal prep requests yet.</p>
              ) : (
                data.bookings
                  .filter((b: any) => b.type === "MEAL_PREP")
                  .map((booking: any) => (
                    <div key={booking.id} className="rounded-[1.5rem] bg-oat p-4">
                      <p className="font-medium text-ink">
                        {booking.user.name} · {booking.mealPlan?.name}
                      </p>
                      <p className="mt-1 text-sm text-ink/70">
                        {new Date(booking.startAt).toLocaleString()} · {booking.status}
                      </p>
                      {booking.specialRequests ? (
                        <div className="mt-3 rounded-xl bg-white p-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-ember">Client Notes</p>
                          <p className="mt-1 text-sm text-ink">{booking.specialRequests}</p>
                        </div>
                      ) : null}
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-[2rem] bg-ink p-6 text-cream shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-gold">Customers</p>
          <p className="mt-4 font-display text-4xl">{data.users.length}</p>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-ember">Bookings</p>
          <p className="mt-4 font-display text-4xl text-ink">{data.bookings.length}</p>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-ember">Revenue Booked</p>
          <p className="mt-4 font-display text-4xl text-ink">
            {formatCurrency(data.bookings.reduce((sum: any, booking: any) => sum + Number(booking.totalPrice), 0))}
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
          <h2 className="font-display text-3xl text-ink">Upcoming Bookings</h2>
          <div className="mt-6 space-y-4">
            {data.bookings.map((booking: any) => (
              <div key={booking.id} className="rounded-[1.5rem] bg-oat p-4">
                <p className="font-medium text-ink">
                  {booking.user.name} · {booking.mealPlan?.name ?? booking.cateringMenu?.title}
                </p>
                <p className="mt-1 text-sm text-ink/70">
                  {new Date(booking.startAt).toLocaleString()} · {booking.status} · {formatCurrency(booking.totalPrice)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
          <h2 className="font-display text-3xl text-ink">Availability</h2>
          <form action="/api/availability" method="POST" className="mt-6 grid gap-4 md:grid-cols-2">
            <input type="datetime-local" name="date" className="rounded-2xl border border-ink/10 px-4 py-3 outline-none" required />
            <input type="number" name="startHour" min="0" max="23" placeholder="Start hour" className="rounded-2xl border border-ink/10 px-4 py-3 outline-none" required />
            <input type="number" name="endHour" min="1" max="24" placeholder="End hour" className="rounded-2xl border border-ink/10 px-4 py-3 outline-none" required />
            <input type="number" name="bufferHours" min="0" max="12" placeholder="Buffer hours" className="rounded-2xl border border-ink/10 px-4 py-3 outline-none" required />
            <input type="text" name="timezone" defaultValue="America/Los_Angeles" className="rounded-2xl border border-ink/10 px-4 py-3 outline-none md:col-span-2" required />
            <button className="rounded-full bg-ink px-5 py-3 font-medium text-cream transition hover:bg-olive md:col-span-2">
              Add Availability Window
            </button>
          </form>
          <div className="mt-6 space-y-4">
            {data.availability.map((slot: any) => (
              <div key={slot.id} className="rounded-[1.5rem] bg-oat p-4">
                <p className="font-medium text-ink">{new Date(slot.date).toLocaleDateString()}</p>
                <p className="mt-1 text-sm text-ink/70">
                  {slot.startHour}:00 - {slot.endHour}:00 · buffer {slot.bufferHours}h · {slot.timezone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
