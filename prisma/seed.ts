import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("Password123!", 10);

  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL ?? "april@example.com" },
    update: {},
    create: {
      name: "April Studio Owner",
      email: process.env.ADMIN_EMAIL ?? "april@example.com",
      passwordHash,
      phone: "(555) 111-2030",
      address: "Aura App Studio private workspace",
      role: "ADMIN"
    }
  });

  await prisma.availability.createMany({
    data: [
      {
        date: new Date("2026-07-01"),
        startHour: 10,
        endHour: 16,
        isAvailable: true,
        bufferHours: 2,
        timezone: "America/Los_Angeles",
        notes: "Private consultation window"
      },
      {
        date: new Date("2026-07-02"),
        startHour: 12,
        endHour: 18,
        isAvailable: true,
        bufferHours: 2,
        timezone: "America/Los_Angeles",
        notes: "Build request discovery block"
      }
    ],
    skipDuplicates: true
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
