"use server";

import { headers } from "next/headers";

export interface LeadFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

export const initialLeadFormState: LeadFormState = { status: "idle" };

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    submissionsByIp.set(ip, recent);
    return true;
  }

  recent.push(now);
  submissionsByIp.set(ip, recent);
  return false;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

export async function submitLeadForm(
  _prevState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many submissions. Please try again in a minute.",
    };
  }

  const fullName = formData.get("fullName")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const interest = formData.get("interest")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!fullName || fullName.length > 120) {
    return { status: "error", message: "Please enter your full name." };
  }

  if (!phone || phone.length > 30) {
    return {
      status: "error",
      message: "Please enter a valid phone number.",
    };
  }

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  if (!interest) {
    return {
      status: "error",
      message: "Please select what you're interested in.",
    };
  }

  if (message.length > 2000) {
    return { status: "error", message: "Message is too long." };
  }

  return {
    status: "success",
    message:
      "Thank you. A Pearl Gro representative will be in touch within 2 business days.",
  };
}
