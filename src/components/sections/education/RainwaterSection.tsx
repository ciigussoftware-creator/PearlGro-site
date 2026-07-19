import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import RainwaterDiagram from "@/components/sections/education/RainwaterDiagram";

const points = [
  "Greenhouses depend on consistent irrigation - supply gaps directly interrupt cultivation cycles.",
  "Harvested rainwater reduces dependence on groundwater and municipal supply, and buffers against dry-season shortages.",
  "Reusing rainfall lowers an operation's environmental footprint at its most fundamental input: water.",
];

export default function RainwaterSection() {
  return (
    <section id="rainwater" className="bg-bg-deep py-20 lg:py-[144px]">
      <Container>
        <SectionHeading
          number="03"
          eyebrow="Water"
          heading={
            <>
              Why Rainwater Harvesting
              <br />
              Matters for Greenhouses.
            </>
          }
        />

        <div className="grid grid-cols-1 items-center gap-12 pt-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-2xl border border-glow/12 bg-bg-black/60 p-8">
            <RainwaterDiagram />
          </div>

          <ol className="flex flex-col">
            {points.map((point, index) => (
              <li
                key={point}
                className={`flex gap-4 py-6 ${
                  index < points.length - 1 ? "border-b border-glow/8" : ""
                }`}
              >
                <span className="font-mono text-[10px] text-glow">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[14px] leading-[1.75] text-muted">
                  {point}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
