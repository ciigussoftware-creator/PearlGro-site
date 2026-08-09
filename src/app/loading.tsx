"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";

export default function Loading() {
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const bar = barRef.current;
      if (!bar) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.fromTo(
        bar,
        { xPercent: -100 },
        {
          xPercent: 220,
          duration: 1.1,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        },
      );

      /* Gentle breathing pulse on the logo */
      const logo = logoRef.current;
      if (logo) {
        gsap.to(logo, {
          scale: 1.06,
          filter: "drop-shadow(0 0 22px rgba(47,229,140,0.5))",
          duration: 1.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    },
    { scope: trackRef },
  );

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-bg-deep/95"
    >
      <span className="sr-only">Loading</span>
      <div ref={logoRef} className="drop-shadow-[0_0_14px_rgba(47,229,140,0.3)]">
        <Image
          src="/brand/logo-loader.png"
          alt="Pearl Gro"
          width={48}
          height={62}
          priority
        />
      </div>
      <div ref={trackRef} className="h-0.5 w-24 overflow-hidden rounded-full bg-muted/15">
        <div
          ref={barRef}
          className="h-full w-1/3 rounded-full bg-glow shadow-[0_0_8px_rgba(47,229,140,0.6)]"
        />
      </div>
    </div>
  );
}
