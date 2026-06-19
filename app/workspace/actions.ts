"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";

export async function approveBooking(formData: FormData) {
  await requireAdmin();

  const bookingId = String(formData.get("bookingId") ?? "");
  if (!bookingId) {
    throw new Error("A booking ID is required.");
  }

  const prisma = getPrisma();
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    select: {
      id: true,
      status: true,
      startAt: true,
      user: {
        select: {
          email: true,
          name: true
        }
      }
    }
  });

  if (!booking) {
    throw new Error("Booking not found.");
  }

  const update = await prisma.booking.updateMany({
    where: {
      id: booking.id,
      status: "PENDING"
    },
    data: {
      status: "CONFIRMED"
    }
  });

  if (update.count !== 1) {
    throw new Error("This booking has already been processed.");
  }

  console.info(
    "Automated client notification dispatched",
    JSON.stringify({
      event: "booking.approved",
      channel: "email",
      deliveryMode: "mock",
      brand: "Stratum Studio",
      recipient: {
        email: booking.user.email,
        name: booking.user.name
      },
      booking: {
        id: booking.id,
        startAt: booking.startAt.toISOString(),
        previousStatus: booking.status,
        status: "CONFIRMED"
      },
      template: "booking-confirmation",
      dispatchedAt: new Date().toISOString()
    })
  );

  revalidatePath("/workspace");
}
