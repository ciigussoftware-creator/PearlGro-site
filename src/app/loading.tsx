"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SproutMark from "@/components/SproutMark";

export default function Loading() {
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

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
      <SproutMark size={48} />
      <div ref={trackRef} className="h-0.5 w-24 overflow-hidden rounded-full bg-muted/15">
        <div
          ref={barRef}
          className="h-full w-1/3 rounded-full bg-glow shadow-[0_0_8px_rgba(47,229,140,0.6)]"
        />
      </div>
    </div>
  );
}
