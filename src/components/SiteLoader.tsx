"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SproutMark from "@/components/SproutMark";

const LOADING_PHRASES = ["PREPARING THE GROUND", "CULTIVATING", "ALMOST READY"];
const PROGRESS_DURATION = 1.8;

export default function SiteLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLParagraphElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!isVisible) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const fill = fillRef.current;
      const percent = percentRef.current;
      const copy = copyRef.current;
      if (!overlay || !fill || !percent || !copy) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setIsVisible(false);
        return;
      }

      const progress = { value: 0 };
      const tl = gsap.timeline({ onComplete: () => setIsVisible(false) });

      tl.to(progress, {
        value: 100,
        duration: PROGRESS_DURATION,
        ease: "power1.inOut",
        onUpdate: () => {
          fill.style.width = `${progress.value}%`;
          percent.textContent = `${Math.round(progress.value)}%`;
        },
      });

      LOADING_PHRASES.forEach((phrase, index) => {
        const time = (index / LOADING_PHRASES.length) * PROGRESS_DURATION;
        tl.call(() => { copy.textContent = phrase; }, undefined, time).fromTo(
          copy,
          { opacity: 0, y: 4 },
          { opacity: 1, y: 0, duration: 0.3 },
          time,
        );
      });

      tl.to(overlay, { opacity: 0, duration: 0.6, ease: "power2.inOut" }, "+=0.3");
    },
    { scope: overlayRef },
  );

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-black"
    >
      <span className="sr-only">Loading Pearl Gro</span>

      <SproutMark size={96} />

      <p className="pt-8 font-heading text-[26px] font-bold tracking-[7.82px] text-text opacity-[0.92]">
        PEARL GRO
      </p>

      <p
        ref={copyRef}
        aria-hidden="true"
        className="pt-3 font-mono text-[10px] tracking-[2px] text-muted/70 uppercase"
      />

      <div className="w-80 pt-10 opacity-[0.82]">
        <div className="h-0.5 w-full rounded-full bg-muted/18">
          <div
            ref={fillRef}
            className="h-full w-0 rounded-full bg-glow shadow-[0_0_10px_rgba(47,229,140,0.75),0_0_24px_rgba(47,229,140,0.3)]"
          />
        </div>
        <p
          ref={percentRef}
          className="pt-2 text-right font-mono text-[11px] tracking-[1.54px] text-glow"
        >
          0%
        </p>
      </div>
    </div>
  );
}
