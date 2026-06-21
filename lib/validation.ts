import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  phone: z.string().min(7),
  address: z.string().min(8),
  next: z.string().optional()
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  next: z.string().optional()
});

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
