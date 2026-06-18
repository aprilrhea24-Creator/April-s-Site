import Link from "next/link";

import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ClientCheckoutPage } from "./client-page";

export const dynamic = "force-dynamic";

export default async function CheckoutPage({
  searchParams
}: {
  searchParams: Promise<{ bookingId?: string }>;
}) {
  const session = await requireUser();
  const { bookingId } = await searchParams;

  const booking = bookingId
    ? await prisma.booking.findUnique({
        where: { id: bookingId },
        include: {
          mealPlan: true,
          cateringMenu: true,
          payments: true
        }
      })
    : null;

  const title =
    booking?.mealPlan?.name ?? booking?.cateringMenu?.title ?? "Booking";

  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] border border-ink/10 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.25em] text-ember">Checkout</p>
        <h1 className="mt-4 font-display text-5xl text-ink">Review your order and collect payment securely.</h1>
        <ClientCheckoutPage
          bookingId={booking?.id}
          serverTitle={title}
          serverTotalPrice={booking?.totalPrice}
          serverDepositAmount={booking?.depositAmount}
          serverStartAt={booking?.startAt}
          serverType={booking?.type}
          userId={session.userId}
        />
        <Link href="/dashboard" className="mt-6 inline-flex text-sm text-ember">
          Back to dashboard
        </Link>
      </div>
    </section>
  );
}
