import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const technologies = [
  {
    id: "T-01",
    icon: "/education/icons/dome.svg",
    title: "Controlled Environment Agriculture (CEA)",
    description:
      "Cultivation isolated from climate volatility, enabling predictable, year-round yields regardless of the weather outside.",
  },
  {
    id: "T-02",
    icon: "/education/icons/sensor.svg",
    title: "Smart Climate Regulation",
    description:
      "Automated sensors continuously adjust temperature, humidity, CO₂, and ventilation to keep conditions in the ideal range for each crop.",
  },
  {
    id: "T-03",
    icon: "/education/icons/led.svg",
    title: "Precision Lighting Array",
    description:
      "Full-spectrum LED lighting sustains consistent photosynthesis through cloudy seasons and shorter days, independent of sunlight.",
  },
  {
    id: "T-04",
    icon: "/education/icons/solar-roof.svg",
    title: "Integrated Rooftop Agrivoltaics",
    description:
      "Semi-transparent solar arrays generate power while filtering light to levels that keep crops healthy beneath them.",
  },
];

export default function TechCards() {
  return (
    <section id="technologies" className="bg-bg-deep py-20 lg:py-[144px]">
      <Container>
        <SectionHeading number="01" eyebrow="Core Architectural Technologies" />

        <div className="flex flex-col gap-3 pt-14">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="grid grid-cols-1 overflow-hidden rounded-2xl border border-glow/35 bg-[rgba(12,22,16,0.6)] sm:grid-cols-[90px_1fr]"
            >
              <div className="flex flex-col items-center justify-center gap-2 border-b border-glow/8 px-4 py-5 sm:border-r sm:border-b-0">
                <Image src={tech.icon} alt="" width={48} height={42} />
                <p className="font-mono text-[7px] tracking-[1.2px] text-glow/60 uppercase">
                  {tech.id}
                </p>
              </div>
              <div className="flex flex-col justify-center gap-2 px-8 py-6">
                <h3 className="font-heading text-[17px] leading-[1.45] font-semibold tracking-[-0.17px] text-text">
                  {tech.title}
                </h3>
                <p className="max-w-[560px] text-[12px] leading-[1.7] text-muted">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
