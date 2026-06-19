"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { requireAdmin } from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";

type ClientAlert = {
  email: string;
  projectName: string;
  subject: string;
  message: string;
  projectId: string;
};

async function dispatchClientAlert(alert: ClientAlert) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.info("Client email notification queued", alert);
    return { delivered: false, mode: "stub" as const };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: alert.email,
      subject: alert.subject,
      text: `${alert.message}\n\nOpen your project portal: ${process.env.NEXT_PUBLIC_APP_URL}/portal/${alert.projectId}`
    })
  });

  if (!response.ok) {
    throw new Error("Email notification dispatch failed.");
  }

  return { delivered: true, mode: "resend" as const };
}

const projectUpdateSchema = z.object({
  projectId: z.string().min(1),
  message: z.string().trim().min(2).max(2000),
  status: z.enum(["DISCOVERY", "IN_PROGRESS", "CLIENT_REVIEW", "COMPLETED"]).optional()
});

export async function postProjectUpdate(input: z.input<typeof projectUpdateSchema>) {
  const admin = await requireAdmin();
  const data = projectUpdateSchema.parse(input);
  const prisma = getPrisma();
  const project = await prisma.clientProject.findUnique({
    where: { id: data.projectId },
    include: { client: true }
  });

  if (!project) {
    throw new Error("Project not found.");
  }

  await prisma.$transaction([
    prisma.projectMessage.create({
      data: {
        projectId: project.id,
        userId: admin.userId,
        author: "ADMIN",
        body: data.message
      }
    }),
    ...(data.status
      ? [
          prisma.clientProject.update({
            where: { id: project.id },
            data: { status: data.status }
          })
        ]
      : [])
  ]);

  await dispatchClientAlert({
    email: project.client.email,
    projectName: project.name,
    projectId: project.id,
    subject: `${project.name}: new project update`,
    message: data.message
  });

  revalidatePath(`/portal/${project.id}`);
  return { ok: true };
}
