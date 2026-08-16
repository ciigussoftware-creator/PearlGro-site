"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Container from "@/components/Container";
import OpportunityStatCard from "@/components/sections/invest/OpportunityStatCard";

const investorSlots = Array.from({ length: 10 }, (_, index) =>
  index < 6 ? "filled" : "available",
);

const crops = [
  "Scotch Bonnet",
  "Brinjal",
  "Tomato",
  "Capsicum",
  "Salad Cucumber",
  "Cherry Tomato",
  "Lettuce",
  "Green Beans",
  "Strawberry",
  "Cantaloupe",
];

export default function OpportunityGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 88%",
          },
        },
      );

      const cards = gsap.utils.toArray<HTMLElement>(gridRef.current?.children ?? []);
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      const slotCircles = gsap.utils.toArray<HTMLElement>(
        sectionRef.current?.querySelectorAll(".slot-circle") ?? [],
      );
      const availableSlotCircles = gsap.utils.toArray<HTMLElement>(
        sectionRef.current?.querySelectorAll(
          '.slot-circle[data-slot="available"]',
        ) ?? [],
      );
      gsap.fromTo(
        slotCircles,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.35,
          stagger: 0.06,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            gsap.to(availableSlotCircles, {
              boxShadow: "0 0 10px rgba(47,229,140,0.7)",
              repeat: -1,
              yoyo: true,
              duration: 1.2,
              ease: "sine.inOut",
            });
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="Opportunity"
      className="bg-bg-deep py-4 lg:py-6"
    >
      <Container>
        <div ref={headingRef}>
          <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
            The Opportunity
          </p>
          <h2 className="pt-1 font-heading text-[clamp(26px,3vw,34px)] font-bold tracking-[-1.17px] text-text">
            Malsiripura Project - Phase 1
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 gap-1.5 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          <OpportunityStatCard label="Total Project Land" value="42.5 Acres">
            <p className="text-[12px] text-muted">
              Malsiripura, North Central Province
            </p>
          </OpportunityStatCard>

          <OpportunityStatCard label="Phase 1 Land" value="10 Acres">
            <p className="text-[12px] text-muted">
              Under controlled-environment cultivation
            </p>
          </OpportunityStatCard>

          <OpportunityStatCard label="Investor Slots" value="10">
            <div className="flex flex-nowrap gap-1">
              {investorSlots.map((status, index) => (
                <div
                  key={index}
                  data-slot={status}
                  className={`slot-circle h-4 w-4 rounded-full border ${
                    status === "filled"
                      ? "border-muted/20 bg-muted/30"
                      : "border-glow/50 bg-glow/20 shadow-[0_0_6px_rgba(47,229,140,0.4)]"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] tracking-[0.9px] text-muted uppercase">
                6 Filled
              </p>
              <p className="font-mono text-[10px] tracking-[0.9px] text-glow uppercase">
                4 Available
              </p>
            </div>
          </OpportunityStatCard>

          <OpportunityStatCard
            label="Entry Investment"
            value="LKR 60M"
            variant="gold"
          >
            <p className="text-[12px] text-muted">
              LKR 60,000,000 per investor slot
            </p>
          </OpportunityStatCard>

          <OpportunityStatCard
            label="Phase 1 Crops"
            value="5 Crops"
            valueHidden
            className="lg:col-span-2"
          >
            <p className="text-[12px] text-muted">
              We cultivate a diverse range of fresh vegetables and fruits.
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {crops.map((crop) => (
                <li
                  key={crop}
                  className="rounded-full border border-glow/20 bg-glow/10 px-[10px] py-1 font-mono text-[9px] tracking-[0.9px] text-glow uppercase"
                >
                  {crop}
                </li>
              ))}
            </ul>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-glow/70 transition-opacity hover:opacity-80"
            >
              See more details →
            </Link>
          </OpportunityStatCard>

          <OpportunityStatCard
            label="Renewable Energy"
            value="1 Acre"
            icon="/invest/icons/renewable-energy.svg"
          >
            <p className="text-[12px] text-muted">
              Ground-mounted solar generation on-site
            </p>
          </OpportunityStatCard>

          <OpportunityStatCard
            label="Water Management"
            value="Rainwater Harvesting"
            icon="/invest/icons/water-management.svg"
          >
            <p className="text-[12px] text-muted">
              Closed-loop rainwater collection with drip irrigation
              minimises water waste across all cultivation zones.
            </p>
          </OpportunityStatCard>
        </div>

        <div className="mt-8 max-w-[720px] rounded-2xl border border-glow/10 bg-[rgba(15,28,20,0.5)] px-7 py-6 sm:px-8">
          <p className="text-[16px] leading-[1.6] text-text">
            Each investor secures a defined plot within the Malsiripura
            project and earns a share of the income generated from what is
            cultivated on it a direct stake in the land, the harvest, and
            the return. Pearl Gro manages everything from construction to
            export.
          </p>
        </div>
      </Container>
    </section>
  );
}
