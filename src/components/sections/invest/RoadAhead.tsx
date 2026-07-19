import Container from "@/components/Container";
import RoadmapCard from "@/components/sections/invest/RoadmapCard";

const phases = [
  {
    phaseNumber: "01",
    phaseName: "Phase 1",
    status: "open" as const,
    amount: "LKR 60M",
    description: "10 acres · 5 Crops · 10 Investors",
    ctaHref: "#lead-form",
  },
  {
    phaseNumber: "02",
    phaseName: "Phase 2",
    status: "soon" as const,
    amount: "LKR 80M",
    description: "Expanded acreage · New crop varieties",
  },
  {
    phaseNumber: "03",
    phaseName: "Phase 3",
    status: "soon" as const,
    amount: "LKR 100M",
    description: "Phase 3 scale-up · To be announced",
  },
  {
    phaseNumber: "04",
    phaseName: "Phase 4",
    status: "soon" as const,
    amount: "LKR 120M",
    description: "Full Malsiripura build-out",
  },
];

export default function RoadAhead() {
  return (
    <section className="bg-bg-deep py-20 lg:py-[144px]">
      <Container>
        <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
          The Road Ahead
        </p>
        <h2 className="pt-4 font-heading text-[clamp(32px,4vw,44.5px)] font-bold tracking-[-1.11px] text-text">
          Beyond Phase 1
        </h2>
        <p className="max-w-[560px] pt-3 text-[17px] leading-[1.7] text-muted">
          Phase 1 is the first of four planned phases at Malsiripura. Future
          phases will open as Phase 1 reaches capacity and delivers returns.
        </p>

        <div className="grid grid-cols-1 gap-x-4 gap-y-16 pt-18 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <RoadmapCard key={phase.phaseNumber} {...phase} />
          ))}
        </div>
      </Container>
    </section>
  );
}
