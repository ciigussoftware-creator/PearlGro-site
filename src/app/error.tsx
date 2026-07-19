"use client";

import { useEffect } from "react";
import Button from "@/components/Button";
import ErrorHero from "@/components/ErrorHero";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorHero
      errorCode="500"
      eyebrow="Error 500 — Something Went Wrong"
      heading="Something needs tending on our side."
      description="A temporary issue interrupted your request. Try again, or reach out if the trouble continues."
      iconSrc="/icons/wilted-leaf-icon.svg"
      actions={
        <>
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-11.25 cursor-pointer items-center justify-center rounded-full bg-accent px-6 text-[14px] font-semibold text-accent-ink shadow-[0_0_8px_rgba(47,229,140,0.2)] transition-colors hover:bg-accent-hover"
          >
            Try Again
          </button>
          <Button href="/contact" variant="ghost">
            Contact Us
          </Button>
        </>
      }
    />
  );
}
