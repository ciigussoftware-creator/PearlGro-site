"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Container from "@/components/Container";
import SensorDiagram from "@/components/sections/education/SensorDiagram";

interface Stage {
  label: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

const stages: Stage[] = [
  {
    label: "Stage 01",
    title: "Propagation & Seeding",
    description:
      "Germination and root establishment in sterile, climate-perfect nursery conditions - no weather variables, no soil-borne disease risk.",
    image: "/education/stage-propagation.jpg",
    imageAlt: "Plant sprouts in a propagation tray",
  },
  {
    label: "Stage 02",
    title: "Growth Zone Transition",
    description:
      "Seedlings move to primary cultivation bays with nutrient delivery customized to each growth stage - oxygen, mineral balance, and spacing all managed.",
    image: "/education/stage-growth-zone.jpg",
    imageAlt: "Crop rows growing under greenhouse lighting",
  },
  {
    label: "Stage 03",
    title: "Precision Monitoring",
    description:
      "IoT sensors track leaf temperature, EC levels, and root-zone moisture in real time. Biological pest management reduces reliance on synthetic chemicals.",
  },
  {
    label: "Stage 04",
    title: "Harvest & Cold-Chain Logistics",
    description:
      "Crops are harvested at nutritional peak and rapidly refrigerated, preserving freshness across the cold chain from greenhouse to export shelf.",
    image: "/education/stage-harvest.jpg",
    imageAlt: "Export-grade tomatoes harvested",
  },
];

export default function SeedToShelf() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const lineFill = containerRef.current?.querySelector<HTMLDivElement>(
        "[data-timeline-fill]",
      );
      const dots =
        containerRef.current?.querySelectorAll<HTMLDivElement>(
          "[data-timeline-dot]",
        );

      if (reduceMotion) {
        if (lineFill) gsap.set(lineFill, { scaleY: 1 });
        if (dots) gsap.set(dots, { opacity: 1, scale: 1 });
        return;
      }

      if (lineFill) {
        gsap.fromTo(
          lineFill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          },
        );
      }

      dots?.forEach((dot) => {
        gsap.fromTo(
          dot,
          { opacity: 0.3, scale: 0.7 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: dot,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    },
    { scope: containerRef },
  );

  return (
    <section id="seed-to-shelf" className="bg-bg-black pt-10 pb-20 lg:pt-16 lg:pb-[144px]">
      <Container>
        <p className="font-mono text-[9px] tracking-[1.5px] text-muted uppercase">
          05 · The Lifecycle
        </p>
        <h2 className="pt-3 font-heading text-[clamp(36px,5vw,56px)] font-bold tracking-[-1.5px] text-text">
          Seed to Shelf.
        </h2>

        <div ref={containerRef} className="relative pt-16 pl-10 sm:pl-14">
          <div className="absolute top-2 bottom-2 left-3 w-px overflow-hidden rounded-full bg-glow/12 sm:left-4">
            <div
              data-timeline-fill
              className="h-full w-full origin-top bg-gradient-to-b from-glow to-glow/30 shadow-[0_0_8px_rgba(47,229,140,0.3)]"
            />
          </div>

          <div className="flex flex-col gap-16 lg:gap-20">
            {stages.map((stage, index) => {
              const visualFirst = index % 2 === 1;
              return (
                <div key={stage.label} className="relative">
                  <div
                    data-timeline-dot
                    className="absolute top-2 -left-10 flex size-5 items-center justify-center rounded-full border-2 border-glow bg-bg-black shadow-[0_0_13px_rgba(47,229,140,0.4)] sm:-left-14"
                  />

                  <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                      className={
                        visualFirst ? "lg:order-2" : "lg:order-1"
                      }
                    >
                      <p className="font-mono text-[9px] tracking-[1.6px] text-glow uppercase">
                        {stage.label}
                      </p>
                      <h3 className="pt-3 font-heading text-[26px] font-bold tracking-[-0.4px] text-text">
                        {stage.title}
                      </h3>
                      <p className="max-w-[500px] pt-3 text-[14px] leading-[1.75] text-muted">
                        {stage.description}
                      </p>
                    </div>

                    <div
                      className={`aspect-[4/3] overflow-hidden rounded-2xl border border-glow/10 bg-bg-deep ${
                        visualFirst ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {stage.image ? (
                        <Image
                          src={stage.image}
                          alt={stage.imageAlt ?? ""}
                          width={520}
                          height={390}
                          className="size-full object-cover"
                        />
                      ) : (
                        <SensorDiagram />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="relative">
              <div
                data-timeline-dot
                className="absolute top-0 -left-10 size-4 rounded-full bg-glow shadow-[0_0_16px_rgba(47,229,140,0.53)] sm:-left-14"
              />
              <p className="font-mono text-[10px] tracking-[2.2px] text-glow uppercase">
                Shelf
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
