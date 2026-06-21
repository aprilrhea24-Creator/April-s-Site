import { NextResponse } from "next/server";
import { z } from "zod";

import { requireUser } from "@/lib/auth";
import { buildTiers } from "@/lib/build-tiers";
import { getPrisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

const checkoutSchema = z.object({
  tier: z.enum(["bookingCore", "flowAutomation", "enterpriseMatrix", "platformSuite"])
});

export async function POST(request: Request) {
  if (!stripe) {
    return NextResponse.json({ error: "Secure checkout is not configured yet." }, { status: 503 });
  }

  let sessionUser;

  try {
    sessionUser = await requireUser();
  } catch {
    return NextResponse.json({ error: "Authentication is required." }, { status: 401 });
  }

  try {
    const { tier } = checkoutSchema.parse(await request.json());
    const selectedTier = buildTiers[tier];
    const origin = new URL(request.url).origin;
    const user = await getPrisma().user.findUnique({
      where: { id: sessionUser.userId },
      select: { id: true, email: true }
    });

    if (!user) {
      return NextResponse.json({ error: "Client profile was not found." }, { status: 404 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${origin}/consultation?checkout=success`,
      cancel_url: `${origin}/consultation?checkout=cancelled`,
      customer_creation: "always",
      customer_email: user.email,
      billing_address_collection: "auto",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: selectedTier.depositCents,
            product_data: {
              name: selectedTier.checkoutName,
              description: `30% initialization deposit for the ${selectedTier.label} tier.`
            }
          }
        }
      ],
      metadata: {
        userId: user.id,
        buildTier: tier,
        budgetLabel: selectedTier.label
      }
    });

    if (!session.url) {
      return NextResponse.json({ error: "The secure checkout service did not return a destination URL." }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to start secure checkout." },
      { status: 400 }
    );
  }
}
