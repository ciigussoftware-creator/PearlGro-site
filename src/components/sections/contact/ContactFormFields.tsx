"use client";

import { useActionState } from "react";
import { submitContactForm, initialContactFormState } from "@/app/contact/actions";

const labelClasses =
  "block pb-1.5 font-mono text-[10px] tracking-[1.4px] text-muted uppercase";

const fieldClasses =
  "w-full rounded-t-[6px] border-b-[1.5px] border-text/15 bg-white/4 px-4 py-3.5 text-[15px] text-text placeholder:text-muted/40 outline-none transition-colors focus:border-glow";

export default function ContactFormFields() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );

  return (
    <div className="rounded-3xl border border-glow/18 bg-[rgba(14,26,19,0.7)] p-8 sm:p-10">
      <form action={formAction} className="flex flex-col gap-7">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={120}
            placeholder="Your full name"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
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
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="normal-case text-muted/45">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={30}
            placeholder="+94 XX XXX XXXX"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            maxLength={2000}
            placeholder="How can we help?"
            className={`${fieldClasses} resize-none`}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isPending}
            className="flex h-13 w-full items-center justify-center rounded-full bg-accent text-[15px] font-semibold text-accent-ink shadow-[0_0_16px_rgba(186,227,32,0.25)] transition-colors hover:bg-accent-hover disabled:opacity-60"
          >
            {isPending ? "Sending…" : "Send Message"}
          </button>
          <p className="pt-3.5 text-center font-mono text-[10px] tracking-[1px] text-muted/45">
            We&rsquo;ll never share your information.
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
