"use server";

import { headers } from "next/headers";

export interface PartnerFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

export const initialPartnerFormState: PartnerFormState = { status: "idle" };

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

const VALID_CATEGORIES = [
  "transportation",
  "cold-chain",
  "packaging",
  "distribution",
  "technology",
  "agricultural-supplies",
  "other",
];

export async function submitPartnerForm(
  _prevState: PartnerFormState,
  formData: FormData,
): Promise<PartnerFormState> {
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

  const name = formData.get("name")?.toString().trim() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const category = formData.get("category")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || name.length > 120) {
    return { status: "error", message: "Please enter your name." };
  }

  if (!company || company.length > 200) {
    return { status: "error", message: "Please enter your company name." };
  }

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  if (!category || !VALID_CATEGORIES.includes(category)) {
    return {
      status: "error",
      message: "Please select a partnership category.",
    };
  }

  if (!message || message.length > 2000) {
    return {
      status: "error",
      message: "Please enter a message (2000 characters max).",
    };
  }

  return {
    status: "success",
    message:
      "Thank you for your interest. A Pearl Gro representative will be in touch soon.",
  };
}
