"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export interface LightboxPhoto {
  src: string;
  alt: string;
  categoryName: string;
  date: string;
}

interface GalleryLightboxProps {
  photos: LightboxPhoto[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  photos,
  activeIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const photo = photos[activeIndex];
  const hasMultiple = photos.length > 1;

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power2.out" },
      );
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, scale: 0.96, y: 12 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "power2.out" },
      );
    },
    { scope: overlayRef, dependencies: [activeIndex] },
  );

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && hasMultiple) {
        onNavigate((activeIndex + 1) % photos.length);
      }
      if (event.key === "ArrowLeft" && hasMultiple) {
        onNavigate((activeIndex - 1 + photos.length) % photos.length);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, hasMultiple, onClose, onNavigate, photos.length]);

  if (!photo) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.alt} — expanded view`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(4,7,5,0.94)] px-4 py-10 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 flex size-11 items-center justify-center rounded-full border border-text/15 text-text transition-colors hover:border-text/40 hover:text-accent"
      >
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
          <path
            d="M5 5l14 14M19 5L5 19"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((activeIndex - 1 + photos.length) % photos.length);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-text/15 text-text transition-colors hover:border-glow/60 hover:text-glow sm:left-6"
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
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((activeIndex + 1) % photos.length);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-text/15 text-text transition-colors hover:border-glow/60 hover:text-glow sm:right-6"
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
        </>
      )}

      <div
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-full max-w-[960px] flex-col items-center gap-5"
      >
        <div className="relative max-h-[72vh] w-full overflow-hidden rounded-2xl border border-glow/12">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={1600}
            height={1200}
            className="max-h-[72vh] w-full object-contain"
            sizes="(min-width: 1024px) 960px, 100vw"
            priority
          />
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="max-w-[560px] text-[14px] leading-[1.6] text-text">
            {photo.alt}
          </p>
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[1.4px] text-muted uppercase">
            <span className="rounded-full border border-glow/20 px-2.5 py-1 text-glow">
              {photo.categoryName}
            </span>
            <span>{photo.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
