import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SolarDiagram from "@/components/sections/education/SolarDiagram";

const points = [
  "Climate control is energy-intensive - fans, sensors, and lighting run continuously throughout every growing cycle.",
  "On-site solar generation reduces operating costs and the environmental impact of that sustained energy demand.",
  "Ground-mounted and rooftop arrays can coexist with cultivation space rather than competing with it.",
];

export default function SolarSection() {
  return (
    <section id="solar" className="bg-bg-black pt-20 pb-10 lg:pt-[144px] lg:pb-16">
      <Container>
        <SectionHeading
          number="04"
          eyebrow="Energy"
          heading={
            <>
              Why Solar Power Matters
              <br />
              for Greenhouses.
            </>
          }
        />

        <div className="grid grid-cols-1 items-center gap-12 pt-12 lg:grid-cols-2 lg:gap-16">
          <ol className="order-2 flex flex-col lg:order-1">
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

          <div className="order-1 rounded-2xl border border-glow/12 bg-bg-deep/60 p-8 lg:order-2">
            <SolarDiagram />
          </div>
        </div>
      </Container>
    </section>
  );
}
