import { BookingForm } from "@/components/forms/booking-form";
import { SectionTitle } from "@/components/section-title";
import { getCurrentUser } from "@/lib/auth";
import { getActiveMealPlans } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function MealPrepPage() {
  const [plans, user] = await Promise.all([
    getActiveMealPlans(),
    getCurrentUser()
  ]);

  return (
    <section className="bg-[#07080a] px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1560px]">
        <SectionTitle
          eyebrow="Meal Prep Plans"
          title="Chef Thai flavor for the week."
          description="Weekly and one-time prep options keep the app useful for recurring clients while the brand leans into Cajun, soul food, and Thai-inspired flavor."
          tone="dark"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.id} className="rounded-[2rem] border border-white/10 bg-black p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black uppercase italic text-white">{plan.name}</h2>
                  <p className="mt-2 text-sm font-semibold leading-7 text-white/60">{plan.description}</p>
                </div>
                <p className="shrink-0 text-sm font-black text-[#ff2631]">{formatCurrency(plan.price)}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {plan.dietaryTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-sm font-semibold text-white/70">
                <li>{plan.mealsPerWeek} meals per week</li>
                <li>{plan.calories ? `${plan.calories} calories target` : "Calories customized on request"}</li>
                <li>{plan.isSubscription ? "Subscription available" : "One-time order"}</li>
                <li>Delivery days: {plan.deliveryDays.join(", ")}</li>
              </ul>
              <div className="mt-6 rounded-[1.5rem] bg-white p-4 text-ink">
                <BookingForm type="MEAL_PREP" itemId={plan.id} userId={user?.id} allowRecurring />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
