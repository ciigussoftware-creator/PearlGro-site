"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface StatCardProps {
  value: number;
  label: string;
  decimals?: number;
  className?: string;
}

export default function StatCard({
  value,
  label,
  decimals = 0,
  className,
}: StatCardProps) {
  const numberRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const el = numberRef.current;
      if (!el) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = value.toFixed(decimals);
        return;
      }

      const counter = { current: 0 };
      gsap.to(counter, {
        current: value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = counter.current.toFixed(decimals);
        },
      });
    },
    { scope: numberRef, dependencies: [value, decimals] },
  );

  return (
    <div className={className}>
      <p
        ref={numberRef}
        className="font-mono text-center text-[44px] leading-11 font-light tracking-[-0.88px] text-accent"
      >
        0
      </p>
      <p className="w-full pt-1 text-center text-[10px] leading-3.75 tracking-[1.4px] text-muted uppercase">
        {label}
      </p>
    </div>
  );
}
