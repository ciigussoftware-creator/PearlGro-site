"use client";

import { useActionState } from "react";
import {
  submitPartnerForm,
  initialPartnerFormState,
} from "@/app/partners/actions";

const labelClasses =
  "block pb-1.5 font-mono text-[10px] tracking-[1.4px] text-muted uppercase";

const fieldClasses =
  "w-full rounded-t-[6px] border-b-[1.5px] border-text/15 bg-white/4 px-4 py-3.5 text-[15px] text-text placeholder:text-muted/40 outline-none transition-colors focus:border-glow";

const categoryOptions = [
  { value: "", label: "Select a category" },
  { value: "transportation", label: "Transportation & Logistics" },
  { value: "cold-chain", label: "Cold-Chain & Storage" },
  { value: "packaging", label: "Packaging & Processing" },
  { value: "distribution", label: "Distribution & Retail" },
  { value: "technology", label: "Technology & IoT" },
  { value: "agricultural-supplies", label: "Agricultural Supplies" },
  { value: "other", label: "Other" },
];

export default function PartnerFormFields() {
  const [state, formAction, isPending] = useActionState(
    submitPartnerForm,
    initialPartnerFormState,
  );

  return (
    <div className="rounded-3xl border border-glow/18 bg-[rgba(14,26,19,0.7)] p-8 sm:p-10">
      <form action={formAction} className="flex flex-col gap-7">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          <div>
            <label htmlFor="partner-name" className={labelClasses}>
              Your Name
            </label>
            <input
              id="partner-name"
              name="name"
              type="text"
              required
              maxLength={120}
              placeholder="Full name"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="partner-company" className={labelClasses}>
              Company Name
            </label>
            <input
              id="partner-company"
              name="company"
              type="text"
              required
              maxLength={200}
              placeholder="Your company"
              className={fieldClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          <div>
            <label htmlFor="partner-email" className={labelClasses}>
              Email
            </label>
            <input
              id="partner-email"
              name="email"
              type="email"
              required
              maxLength={254}
              placeholder="you@company.com"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="partner-category" className={labelClasses}>
              Partnership Area
            </label>
            <select
              id="partner-category"
              name="category"
              required
              className={`${fieldClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%238fa69a%22%20d%3D%22M3%204.5L6%207.5L9%204.5%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
            >
              {categoryOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-bg-deep text-text">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="partner-message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="partner-message"
            name="message"
            required
            rows={4}
            maxLength={2000}
            placeholder="Tell us about your company and how you'd like to collaborate..."
            className={`${fieldClasses} resize-none`}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isPending}
            className="flex h-13 w-full items-center justify-center rounded-full bg-accent text-[15px] font-semibold text-accent-ink shadow-[0_0_16px_rgba(186,227,32,0.25)] transition-colors hover:bg-accent-hover disabled:opacity-60"
          >
            {isPending ? "Submitting…" : "Submit Inquiry"}
          </button>
          <p className="pt-3.5 text-center font-mono text-[10px] tracking-[1px] text-muted/45">
            We&rsquo;ll review your inquiry and respond within 3 business days.
          </p>
        </div>

        {state.status !== "idle" && (
          <p
            role="status"
            className={`text-[13px] ${
              state.status === "success" ? "text-glow" : "text-red-400"
            }`}
          >
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
