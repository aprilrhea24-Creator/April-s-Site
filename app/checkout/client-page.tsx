/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/lib/utils";

type ClientCheckoutPageProps = {
  bookingId?: string;
  serverTitle: string;
  serverTotalPrice: any;
  serverDepositAmount: any;
  serverStartAt: any;
  serverType: any;
  userId: string;
};

export function ClientCheckoutPage(props: ClientCheckoutPageProps) {
  const router = useRouter();
  const [draft, setDraft] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Rehydrate from sessionStorage if a draft exists
    const raw = sessionStorage.getItem("catering_draft");
    if (raw) {
      try {
        setDraft(JSON.parse(raw));
      } catch (err) {}
    }
  }, []);

  const isServerBooking = !!props.bookingId;

  const handleDraftSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const totalEstimate = draft.basePrice * draft.headcount;

    const formatSelections = () => {
      let output = "";
      for (const [cat, items] of Object.entries(draft.selections as Record<string, string[]>)) {
        if (items && items.length > 0) {
          output += `${cat}: ${items.join(", ")}. `;
        }
      }
      return output;
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "CATERING",
          userId: props.userId,
          itemId: "CATERING_DRAFT", // We will modify backend to handle this custom ID
          guestCount: draft.headcount,
          startAt: new Date().toISOString(),
          timezone: "America/Los_Angeles",
          specialRequests: `${formatSelections()} | Notes: ${draft.customNotes}`,
          basePrice: draft.basePrice // Send to backend to help with custom pricing
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create booking.");
      }

      // Success
      sessionStorage.removeItem("catering_draft");
      router.push(`/checkout?bookingId=${data.booking.id}`);
      router.refresh();

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Use draft if no bookingId is present
  if (!isServerBooking && draft) {
    const totalEstimate = draft.basePrice * draft.headcount;
    // Assuming 50% deposit
    const depositEstimate = totalEstimate / 2;

    return (
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] bg-oat p-6">
          <p className="font-display text-2xl text-ink">{draft.packageType}</p>
          <ul className="mt-4 space-y-2 text-sm text-ink/75">
            <li>Guest count: {draft.headcount}</li>
            <li>Estimated Base Total: {formatCurrency(totalEstimate)}</li>
            <li>Estimated Deposit: {formatCurrency(depositEstimate)}</li>
            {draft.customNotes && <li>Custom Notes: {draft.customNotes}</li>}
          </ul>
        </div>
        <form onSubmit={handleDraftSubmit} className="space-y-4 rounded-[2rem] border border-ink/10 p-6">
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <button
            disabled={loading}
            className="w-full rounded-full bg-[#f00612] px-5 py-3 font-medium text-white transition hover:bg-[#ff2631] disabled:opacity-50"
          >
            {loading ? "Processing..." : "Confirm & Complete Booking Request"}
          </button>
          <p className="text-sm text-ink/70">
            Submit your draft selections to officially request a booking and receive an invoice.
          </p>
        </form>
      </div>
    );
  }

  if (isServerBooking) {
    return (
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] bg-oat p-6">
          <p className="font-display text-2xl text-ink">{props.serverTitle}</p>
          <ul className="mt-4 space-y-2 text-sm text-ink/75">
            <li>Total price: {formatCurrency(props.serverTotalPrice)}</li>
            <li>Deposit due now: {formatCurrency(props.serverDepositAmount)}</li>
            <li>Event date: {new Date(props.serverStartAt).toLocaleString()}</li>
            <li>Booking type: {props.serverType.replace("_", " ")}</li>
          </ul>
        </div>
        <form action="/api/payments/checkout" method="POST" className="space-y-4 rounded-[2rem] border border-ink/10 p-6">
          <input type="hidden" name="bookingId" value={props.bookingId} />
          <button className="w-full rounded-full bg-ink px-5 py-3 font-medium text-cream transition hover:bg-olive">
            Start Stripe Checkout
          </button>
          <p className="text-sm text-ink/70">
            If Stripe keys are missing, the API will fall back to a simulated payment record so the booking flow stays testable.
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-[2rem] bg-oat p-6 text-sm text-ink/75">
      No booking selected. Reserve a service first to continue to checkout.
    </div>
  );
}
