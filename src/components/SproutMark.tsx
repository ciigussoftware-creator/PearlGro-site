"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface SproutMarkProps {
  size?: number;
  className?: string;
}

const VIEW_BOX = "40 41 77 100";
const VIEW_BOX_ASPECT = 100 / 77;

export default function SproutMark({ size = 96, className }: SproutMarkProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const baselineRef = useRef<SVGPathElement>(null);
  const stemRef = useRef<SVGPathElement>(null);
  const leafLeftRef = useRef<SVGPathElement>(null);
  const leafRightRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const baseline = baselineRef.current;
      const stem = stemRef.current;
      const leafLeft = leafLeftRef.current;
      const leafRight = leafRightRef.current;
      if (!baseline || !stem || !leafLeft || !leafRight) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      [baseline, stem, leafLeft, leafRight].forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: reduceMotion ? 0 : length,
        });
      });

      if (reduceMotion) {
        gsap.set([leafLeft, leafRight], { fillOpacity: 0.1, opacity: 1, scale: 1 });
        return;
      }

      gsap.set([leafLeft, leafRight], { fillOpacity: 0, opacity: 0, scale: 0.85 });

      gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        defaults: { ease: "sine.inOut" },
      })
        .to(baseline, { strokeDashoffset: 0, duration: 0.4 })
        .to(stem, { strokeDashoffset: 0, duration: 0.5 }, "-=0.15")
        .to(
          leafLeft,
          {
            strokeDashoffset: 0,
            fillOpacity: 0.1,
            opacity: 1,
            scale: 1,
            duration: 0.45,
            svgOrigin: "78.18 104.62",
          },
          "-=0.2",
        )
        .to(
          leafRight,
          {
            strokeDashoffset: 0,
            fillOpacity: 0.1,
            opacity: 1,
            scale: 1,
            duration: 0.45,
            svgOrigin: "78.18 93.82",
          },
          "-=0.3",
        );
    },
    { scope: svgRef },
  );

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size * VIEW_BOX_ASPECT}
      viewBox={VIEW_BOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        ref={baselineRef}
        d="M46.9805 134.621H109.377"
        stroke="var(--color-glow)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        ref={stemRef}
        d="M78.1787 134.621V65.0251"
        stroke="var(--color-glow)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        ref={leafLeftRef}
        d="M78.1787 104.623C62.5796 93.8237 45.7806 75.8247 54.1801 59.0256C66.1794 63.8254 78.1787 86.6241 78.1787 104.623Z"
        fill="var(--color-glow)"
        fillOpacity="0.1"
        stroke="var(--color-glow)"
        strokeWidth="1.44"
      />
      <path
        ref={leafRightRef}
        d="M78.1787 93.8235C93.7778 81.8241 110.577 63.8252 104.577 47.0261C92.5779 51.8259 80.5786 74.6246 78.1787 93.8235Z"
        fill="var(--color-glow)"
        fillOpacity="0.1"
        stroke="var(--color-glow)"
        strokeWidth="1.44"
      />
    </svg>
  );
}
