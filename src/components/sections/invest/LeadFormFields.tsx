"use client";

import { useActionState } from "react";
import { submitLeadForm, initialLeadFormState } from "@/app/invest/actions";

const interestOptions = [
  "Phase 1 Investment",
  "Business Plan Request",
  "General Inquiry",
];

const labelClasses =
  "block pb-1.5 font-mono text-[10px] tracking-[1.4px] text-muted uppercase";

const fieldClasses =
  "w-full rounded-t-[6px] border-b-[1.5px] border-text/15 bg-white/4 px-4 py-3.5 text-[15px] text-text placeholder:text-muted/40 outline-none transition-colors focus:border-glow";

export default function LeadFormFields() {
  const [state, formAction, isPending] = useActionState(
    submitLeadForm,
    initialLeadFormState,
  );

  return (
    <div className="rounded-3xl border border-glow/22 bg-[rgba(12,22,16,0.75)] p-8 sm:p-[49px]">
      <form action={formAction} className="flex flex-col gap-7">
        <div>
          <label htmlFor="fullName" className={labelClasses}>
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            maxLength={120}
            placeholder="Your full name"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            maxLength={30}
            placeholder="+94 XX XXX XXXX"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            placeholder="your@email.com"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="interest" className={labelClasses}>
            Are you interested in:
          </label>
          <select
            id="interest"
            name="interest"
            required
            defaultValue=""
            className={`${fieldClasses} appearance-none`}
          >
            <option value="" disabled>
              Select an option
            </option>
            {interestOptions.map((option) => (
              <option key={option} value={option} className="bg-bg-deep">
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Message <span className="normal-case text-muted/45">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={2000}
            placeholder="Any questions or context you'd like to share…"
            className={`${fieldClasses} resize-none`}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isPending}
            className="flex h-[66px] w-full items-center justify-center rounded-full bg-gold text-[17px] font-semibold text-bg-black shadow-[0_0_16px_rgba(232,196,107,0.27)] transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {isPending ? "Sending…" : "Talk to Our Team"}
          </button>
          <p className="pt-3.5 text-center font-mono text-[10px] tracking-[1px] text-muted/45">
            We&rsquo;ll never share your information. A Pearl Gro
            representative typically responds within 2 business days.
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
