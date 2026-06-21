import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  password: z.string().min(8, "Password must contain at least 8 characters."),
  phone: z.string().trim().min(7, "Enter a valid phone number."),
  address: z.string().trim().min(2, "Tell us briefly about your company or project."),
  next: z.string().optional()
});

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  password: z.string().min(8, "Password must contain at least 8 characters."),
  next: z.string().optional()
});

export function getValidationMessage(error: z.ZodError) {
  return error.issues[0]?.message ?? "Please check the highlighted information and try again.";
}

export const buildRequestSchema = z.object({
  industry: z.string().min(2),
  budget: z.string().min(2),
  features: z.array(z.string()).default([]),
  notes: z.string().optional()
});

export const availabilitySchema = z.object({
  date: z.string().min(1),
  startHour: z.coerce.number().int().min(0).max(23),
  endHour: z.coerce.number().int().min(1).max(24),
  isAvailable: z.coerce.boolean().default(true),
  timezone: z.string().default("America/Los_Angeles"),
  bufferHours: z.coerce.number().int().min(0).max(12).default(2),
  notes: z.string().optional()
});
