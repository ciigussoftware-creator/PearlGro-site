"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

export interface Crop {
  image: string;
  category: string;
  name: string;
}

interface CropCarouselProps {
  crops: Crop[];
}

const AUTO_SCROLL_INTERVAL_MS = 6500;

export default function CropCarousel({ crops }: CropCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  const scrollByPage = useCallback((direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const atEnd = el.scrollLeft >= maxScroll - 2;
    const atStart = el.scrollLeft <= 2;
    // Looping past either end keeps the auto-scroll (and the arrow buttons)
    // feeling continuous instead of getting stuck at the last card.
    const target =
      direction === 1 && atEnd
        ? 0
        : direction === -1 && atStart
          ? maxScroll
          : Math.min(
              Math.max(el.scrollLeft + direction * el.clientWidth * 0.85, 0),
              maxScroll,
            );
    // Native `behavior: "smooth"` scrolling conflicts with `scroll-snap-type:
    // mandatory` in Chromium and barely moves the container, so the
    // button-triggered scroll is tweened with GSAP instead. Native touch/
    // trackpad/wheel scrolling on the row itself is unaffected.
    gsap.to(el, {
      scrollLeft: target,
      duration: prefersReducedMotion ? 0 : 1,
      ease: "power2.inOut",
    });
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      if (!isPausedRef.current) scrollByPage(1);
    }, AUTO_SCROLL_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [scrollByPage]);

  const pauseAutoScroll = () => {
    isPausedRef.current = true;
  };
  const resumeAutoScroll = () => {
    isPausedRef.current = false;
  };

  return (
    <div
      className="mt-14"
      onMouseEnter={pauseAutoScroll}
      onMouseLeave={resumeAutoScroll}
      onFocus={pauseAutoScroll}
      onBlur={resumeAutoScroll}
      onTouchStart={pauseAutoScroll}
    >
      <div
        ref={scrollRef}
        role="region"
        aria-label="Crop gallery — scroll or use the arrows to see more crops"
        tabIndex={0}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto"
      >
        {crops.map((crop) => (
          <div
            key={crop.name}
            className="w-[168px] shrink-0 snap-start overflow-hidden rounded-2xl bg-card-light sm:w-[200px] lg:w-[211px]"
          >
            <div className="relative aspect-square w-full bg-image-bg-light">
              <Image
                src={crop.image}
                alt={crop.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 211px, (min-width: 640px) 200px, 168px"
              />
            </div>
            <div className="px-[18px] pt-4 pb-[18px]">
              <p className="font-mono text-[9px] tracking-[1.35px] text-label uppercase">
                {crop.category}
              </p>
              <p className="pt-1.5 font-heading text-[15px] font-semibold text-ink">
                {crop.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          aria-label="Scroll to previous crops"
          className="flex size-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-glow/60 hover:text-glow"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M15 5l-7 7 7 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          aria-label="Scroll to next crops"
          className="flex size-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-glow/60 hover:text-glow"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M9 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
