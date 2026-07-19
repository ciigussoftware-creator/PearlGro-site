import Image from "next/image";
import Container from "@/components/Container";

const principles = [
  {
    icon: "/education/icons/water-management.svg",
    title: "Resource-Efficient Water Management",
    description:
      "Hydroponic and precision drip-irrigation systems recycle water instead of losing it to the soil - drastically reducing the volume required per harvest cycle.",
  },
  {
    icon: "/education/icons/spatial-productivity.svg",
    title: "Optimized Spatial Productivity",
    description:
      "Vertical growing multiplies output per square foot compared with open-field cultivation, making more productive use of developed land.",
  },
  {
    icon: "/education/icons/closed-loop.svg",
    title: "Closed-Loop Environmental Protection",
    description:
      "Sealed systems prevent nutrients from leaching into surrounding ecosystems and groundwater, protecting the land around the project site.",
  },
  {
    icon: "/education/icons/decarbonized.svg",
    title: "Decarbonized Infrastructure Strategy",
    description:
      "On-site renewable power offsets the energy demand of climate control, reducing the operational carbon footprint of every harvest.",
  },
];

export default function SustainabilityGrid() {
  return (
    <section id="sustainability" className="bg-light-bg py-20 lg:py-[144px]">
      <Container>
        <h2 className="max-w-[700px] font-heading text-[clamp(28px,3.8vw,39px)] font-bold tracking-[-0.85px] text-ink">
          Designed to Take Less and Waste Less.
        </h2>

        <div className="grid grid-cols-1 gap-4 pt-14 sm:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl border border-ink-accent/[0.14] bg-[rgba(246,245,240,0.9)] px-8 py-8 shadow-[0_3px_20px_0_rgba(13,33,24,0.05)]"
            >
              <div className="flex size-9 items-center justify-center rounded-[10px] border border-glow/20 bg-glow/8">
                <Image src={principle.icon} alt="" width={17} height={17} />
              </div>
              <h3 className="pt-5 font-heading text-[16px] font-semibold tracking-[-0.16px] text-ink">
                {principle.title}
              </h3>
              <p className="max-w-[498px] pt-2.5 text-[12px] leading-[1.8] text-ink-muted">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
