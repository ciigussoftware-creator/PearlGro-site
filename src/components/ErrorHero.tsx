import Image from "next/image";
import type { ReactNode } from "react";
import Container from "@/components/Container";

interface ErrorHeroProps {
  errorCode: string;
  eyebrow: string;
  heading: string;
  description: string;
  iconSrc: string;
  actions: ReactNode;
  wayfinding?: ReactNode;
}

export default function ErrorHero({
  errorCode,
  eyebrow,
  heading,
  description,
  iconSrc,
  actions,
  wayfinding,
}: ErrorHeroProps) {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-bg-deep px-6 py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,229,140,0.07) 0%, rgba(0,0,0,0) 60%)",
        }}
      />
      <Container className="relative flex flex-col items-center text-center">
        <div className="relative flex items-center justify-center">
          <p
            aria-hidden
            className="font-mono text-[clamp(96px,18vw,220px)] leading-none font-bold tracking-[-0.04em] text-transparent select-none"
            style={{
              WebkitTextStroke: "1.5px #2FE58C",
              filter:
                "drop-shadow(0 0 40px rgba(47,229,140,0.22)) drop-shadow(0 0 80px rgba(47,229,140,0.1))",
            }}
          >
            {errorCode}
          </p>
          <div className="absolute top-1/2 left-1/2 h-20 w-16 -translate-x-1/2 -translate-y-1/2 sm:h-24 sm:w-20 lg:h-28 lg:w-24">
            <Image
              src={iconSrc}
              alt=""
              fill
              className="object-contain"
              sizes="96px"
            />
          </div>
        </div>

        <p className="pt-6 font-mono text-[9px] tracking-[2.16px] text-muted/60 uppercase">
          {eyebrow}
        </p>

        <h1 className="max-w-3xl pt-4 font-heading text-[clamp(32px,5vw,43px)] font-bold tracking-tight text-text">
          {heading}
        </h1>

        <p className="max-w-130 pt-6 text-[18px] leading-[1.7] text-muted">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
          {actions}
        </div>

        {wayfinding ? <div className="mt-9">{wayfinding}</div> : null}
      </Container>
    </section>
  );
}
