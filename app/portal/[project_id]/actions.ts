"use server";

import { createHash } from "node:crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { requireUser } from "@/lib/auth";
import { ownershipReleaseClause } from "@/lib/contracts";
import { getPrisma } from "@/lib/prisma";

const signOffSchema = z.object({
  projectId: z.string().min(1),
  testingConfirmed: z.literal("on"),
  legalName: z.string().trim().min(2).max(120)
});

const clientMessageSchema = z.object({
  projectId: z.string().min(1),
  message: z.string().trim().min(2).max(2000)
});

export async function postClientMessage(formData: FormData) {
  const session = await requireUser();
  const data = clientMessageSchema.parse({
    projectId: formData.get("projectId"),
    message: formData.get("message")
  });
  const prisma = getPrisma();
  const project = await prisma.clientProject.findFirst({
    where: {
      id: data.projectId,
      clientId: session.userId
    },
    select: { id: true }
  });

  if (!project) {
    throw new Error("Project access denied.");
  }

  await prisma.projectMessage.create({
    data: {
      projectId: project.id,
      userId: session.userId,
      author: "CLIENT",
      body: data.message
    }
  });

  revalidatePath(`/portal/${project.id}`);
}

export async function signOffProject(formData: FormData) {
  const session = await requireUser();
  const result = signOffSchema.safeParse({
    projectId: formData.get("projectId"),
    testingConfirmed: formData.get("testingConfirmed"),
    legalName: formData.get("legalName")
  });

  if (!result.success) {
    redirect(`/portal/${String(formData.get("projectId") ?? "")}?signoff=invalid`);
  }

  const prisma = getPrisma();
  const project = await prisma.clientProject.findFirst({
    where: {
      id: result.data.projectId,
      clientId: session.userId
    },
    include: { signOff: true }
  });

  if (!project) {
    throw new Error("Project access denied.");
  }

  if (project.signOff) {
    redirect(`/portal/${project.id}?signoff=complete`);
  }

  if (!["CLIENT_REVIEW", "SIGNED_OFF", "COMPLETED"].includes(project.status)) {
    redirect(`/portal/${project.id}?signoff=locked`);
  }

  const signedAt = new Date();
  const signatureReceipt = createHash("sha256")
    .update([project.id, session.userId, result.data.legalName, signedAt.toISOString(), ownershipReleaseClause].join("|"))
    .digest("hex");

  await prisma.$transaction([
    prisma.projectSignOff.create({
      data: {
        projectId: project.id,
        clientId: session.userId,
        legalName: result.data.legalName,
        signatureReceipt,
        testingConfirmed: true,
        ownershipClause: ownershipReleaseClause,
        signedAt
      }
    }),
    prisma.clientProject.update({
      where: { id: project.id },
      data: {
        status: "SIGNED_OFF",
        progress: 100
      }
    }),
    prisma.projectMessage.create({
      data: {
        projectId: project.id,
        userId: session.userId,
        author: "SYSTEM",
        body: `Project sign-off completed by ${result.data.legalName}. Receipt ${signatureReceipt.slice(0, 12).toUpperCase()}.`
      }
    })
  ]);

  revalidatePath(`/portal/${project.id}`);
  redirect(`/portal/${project.id}?signoff=complete`);
}
