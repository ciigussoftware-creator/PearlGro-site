"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

interface Position {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  description: string;
  responsibilities: string[];
}

const positions: Position[] = [
  {
    id: "greenhouse-tech",
    title: "Greenhouse Technician",
    department: "Operations",
    location: "Malsiripura, Kurunegala",
    type: "Full-time",
    description:
      "Monitor and maintain greenhouse climate systems, irrigation, and crop health on a daily basis.",
    responsibilities: [
      "Operate and monitor climate control systems (temperature, humidity, ventilation)",
      "Manage fertigation schedules and nutrient delivery",
      "Scout crops for pests and diseases, reporting issues promptly",
      "Maintain equipment and assist with harvest operations",
    ],
  },
  {
    id: "agronomist",
    title: "Agronomist",
    department: "Research & Development",
    location: "Malsiripura, Kurunegala",
    type: "Full-time",
    description:
      "Lead crop planning, trial programs, and research to maximise yield and quality across all greenhouse varieties.",
    responsibilities: [
      "Design and implement crop trial programs for new varieties",
      "Analyse yield data and soil/nutrient reports to optimise production",
      "Develop integrated pest management (IPM) protocols",
      "Collaborate with operations to refine standard growing procedures",
    ],
  },
  {
    id: "ops-manager",
    title: "Operations Manager",
    department: "Management",
    location: "Malsiripura, Kurunegala",
    type: "Full-time",
    description:
      "Oversee daily site operations, coordinate staff, and drive continuous improvement across all greenhouse activities.",
    responsibilities: [
      "Plan and manage daily greenhouse workflow and staffing",
      "Coordinate logistics for harvest, packing, and dispatch",
      "Implement quality assurance and food safety standards",
      "Report on KPIs and contribute to strategic planning",
    ],
  },
  {
    id: "marketing-exec",
    title: "Marketing & Sales Executive",
    department: "Sales",
    location: "Colombo / Remote",
    type: "Full-time",
    description:
      "Drive brand awareness and manage buyer relationships for Pearl Gro's premium produce.",
    responsibilities: [
      "Develop and execute digital marketing campaigns",
      "Build relationships with supermarkets, hotels, and export buyers",
      "Manage social media content and brand communications",
      "Conduct market research and competitor analysis",
    ],
  },
];

export default function OpenPositions() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="open-positions" className="border-t border-glow/8 bg-bg-black scroll-mt-20">
      <Container className="py-20 lg:py-28">
        <SectionHeading
          number="02"
          eyebrow="Open Positions"
          heading="Current Opportunities"
        />

        <div className="mt-14 flex flex-col gap-4">
          {positions.map((pos) => {
            const isOpen = expandedId === pos.id;
            return (
              <div
                key={pos.id}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-glow/25 bg-glow/[0.03]"
                    : "border-text/8 bg-bg-deep/50 hover:border-text/16"
                }`}
              >
                {/* Header — always visible */}
                <button
                  type="button"
                  id={`position-header-${pos.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`position-body-${pos.id}`}
                  onClick={() => setExpandedId(isOpen ? null : pos.id)}
                  className="flex w-full items-center gap-4 p-6 text-left sm:gap-6 sm:p-7"
                >
                  <div className="flex-1">
                    <h3 className="font-heading text-[18px] font-semibold tracking-[-0.3px] text-text sm:text-[20px]">
                      {pos.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-2">
                      <span className="rounded-full border border-accent/25 bg-accent/8 px-3 py-0.5 font-mono text-[10px] tracking-[1.2px] text-accent uppercase">
                        {pos.department}
                      </span>
                      <span className="text-[13px] text-muted">
                        {pos.location}
                      </span>
                      <span className="text-[13px] text-muted/60">
                        {pos.type}
                      </span>
                    </div>
                  </div>

                  {/* Expand/collapse chevron */}
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`size-5 shrink-0 text-muted/50 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Expandable body */}
                <div
                  id={`position-body-${pos.id}`}
                  role="region"
                  aria-labelledby={`position-header-${pos.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-glow/10 px-6 pt-5 pb-7 sm:px-7">
                    <p className="text-[15px] leading-[1.7] text-muted">
                      {pos.description}
                    </p>

                    <h4 className="pt-5 font-mono text-[10px] tracking-[1.4px] text-muted/60 uppercase">
                      Key Responsibilities
                    </h4>
                    <ul className="mt-3 flex flex-col gap-2">
                      {pos.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-3 text-[14px] leading-[1.6] text-muted"
                        >
                          <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-glow/50" />
                          {r}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="mailto:careers@pearlgro.lk"
                      className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-accent px-7 text-[14px] font-semibold text-accent-ink shadow-[0_0_12px_rgba(186,227,32,0.2)] transition-colors hover:bg-accent-hover"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="pt-8 text-center text-[14px] text-muted/50">
          Don&rsquo;t see a role that fits?{" "}
          <a
            href="mailto:careers@pearlgro.lk"
            className="text-accent transition-colors hover:text-accent-hover"
          >
            Send us your CV
          </a>{" "}
          and we&rsquo;ll keep it on file.
        </p>
      </Container>
    </section>
  );
}
