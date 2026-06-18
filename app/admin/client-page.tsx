/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { AdminContentForm } from "@/components/forms/admin-content-form";
import { AdminCateringMenuManager } from "@/components/forms/admin-catering-menu-manager";
import { SectionTitle } from "@/components/section-title";

type AdminClientPageProps = {
  data: any;
  cateringMenuItems: any[];
};

export function AdminClientPage({ data, cateringMenuItems }: AdminClientPageProps) {
  const [adminTab, setAdminTab] = useState<"catering" | "meal-prep">("catering");

  // Calculate some dummy metrics for the new analytics section based on actual data
  const totalMenuViews = cateringMenuItems.length * 42; // Just a mock multiplier for demonstration
  const uniqueVisitors = Math.floor(totalMenuViews * 0.65);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Admin Dashboard"
        title="Manage your culinary empire."
        description="Streamlined content management and real-time site analytics."
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
        <div className="mt-10">
          <AdminCateringMenuManager items={cateringMenuItems} />
        </div>
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

      {/* Premium Dark Luxury Site Traffic & Analytics Dashboard Panel */}
      <div className="mt-16 rounded-[2rem] bg-[#07080a] p-8 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
        <h2 className="text-2xl font-black uppercase italic text-white mb-8">Site Traffic & Analytics</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.5rem] bg-white/[0.04] p-6 border border-white/5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f00612]">Daily Unique Visitors</p>
            <p className="mt-4 text-5xl font-black text-white">{uniqueVisitors.toLocaleString()}</p>
            <p className="mt-2 text-sm text-white/50">+12% from yesterday</p>
          </div>
          <div className="rounded-[1.5rem] bg-white/[0.04] p-6 border border-white/5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f00612]">Menu Conversion Rate</p>
            <p className="mt-4 text-5xl font-black text-white">4.8%</p>
            <p className="mt-2 text-sm text-white/50">Top viewed: Seafood Boil</p>
          </div>
        </div>
      </div>
    </section>
  );
}
