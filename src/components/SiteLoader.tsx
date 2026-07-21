"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import SproutMark from "@/components/SproutMark";

const LOADING_PHRASES = ["PREPARING THE GROUND", "CULTIVATING", "ALMOST READY"];

function getPhrase(progress: number): string {
  if (progress < 40) return LOADING_PHRASES[0];
  if (progress < 75) return LOADING_PHRASES[1];
  return LOADING_PHRASES[2];
}

/** Max time (ms) before force-completing the loader. */
const SAFETY_TIMEOUT = 10_000;

export default function SiteLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLParagraphElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const currentProgress = useRef(0);
  const activeTween = useRef<gsap.core.Tween | null>(null);
  const hasCompleted = useRef(false);

  /* Lock scroll while visible */
  useEffect(() => {
    if (!isVisible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isVisible]);

  /** Smoothly animate progress bar to `target` (0–100). Never goes backwards. */
  const animateTo = useCallback((target: number) => {
    const fill = fillRef.current;
    const percent = percentRef.current;
    const copy = copyRef.current;
    if (!fill || !percent || !copy) return;
    if (target <= currentProgress.current) return;

    activeTween.current?.kill();

    const obj = { v: currentProgress.current };
    activeTween.current = gsap.to(obj, {
      v: target,
      duration: Math.max(0.3, (target - currentProgress.current) / 120),
      ease: "power2.out",
      onUpdate: () => {
        currentProgress.current = obj.v;
        fill.style.width = `${obj.v}%`;
        percent.textContent = `${Math.round(obj.v)}%`;
        copy.textContent = getPhrase(obj.v);
      },
    });
  }, []);

  /** Finish the loader: animate to 100 %, pause briefly, then fade out. */
  const complete = useCallback(() => {
    if (hasCompleted.current) return;
    hasCompleted.current = true;
    const overlay = overlayRef.current;

    animateTo(100);

    /* Small delay so the user sees "100 %" before the fade */
    setTimeout(() => {
      if (!overlay) {
        setIsVisible(false);
        return;
      }
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => setIsVisible(false),
      });
    }, 500);
  }, [animateTo]);

  useEffect(() => {
    if (!isVisible) return;

    /* Skip for reduced-motion users */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(false);
      return;
    }

    /* If page already fully loaded (e.g. HMR refresh), complete immediately */
    if (document.readyState === "complete") {
      complete();
      return;
    }

    /* ---------- Phase 1: initial bump ---------- */
    animateTo(10);

    /* ---------- Phase 2: readyState milestones ---------- */
    const onReadyStateChange = () => {
      if (document.readyState === "interactive") animateTo(35);
      if (document.readyState === "complete") animateTo(80);
    };
    document.addEventListener("readystatechange", onReadyStateChange);

    /* ---------- Phase 3: track image loading ---------- */
    let imageInterval: ReturnType<typeof setInterval> | null = null;

    const trackImages = () => {
      const images = Array.from(document.images);
      if (images.length === 0) return;

      const loaded = images.filter((img) => img.complete).length;
      /* Map image completion into the 35 – 85 % range */
      const imagePct = 35 + (loaded / images.length) * 50;
      animateTo(Math.min(imagePct, 85));
    };

    imageInterval = setInterval(trackImages, 150);

    /* ---------- Phase 4: window load = everything done ---------- */
    const onLoad = () => complete();
    window.addEventListener("load", onLoad);

    /* ---------- Safety: force-complete after timeout ---------- */
    const safety = setTimeout(complete, SAFETY_TIMEOUT);

    return () => {
      document.removeEventListener("readystatechange", onReadyStateChange);
      window.removeEventListener("load", onLoad);
      if (imageInterval) clearInterval(imageInterval);
      clearTimeout(safety);
    };
  }, [isVisible, animateTo, complete]);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-bg-black"
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
