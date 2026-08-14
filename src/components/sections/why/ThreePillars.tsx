import Image from "next/image";
import Container from "@/components/Container";

interface Pillar {
  index: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const pillars: Pillar[] = [
  {
    index: "01",
    title: "Management",
    description:
      "Pearl Gro manages every stage of the project, from preparing the land and cultivating the crops to packing and export. Close supervision throughout the process helps maintain quality and keep operations running smoothly.",
    image: "/why-pearl-gro/pillar-management v2.png",
    alt: "Aerial view of agricultural land development",
  },
  {
    index: "02",
    title: "Technology",
    description:
      "Greenhouse technology provides stable growing conditions throughout the year. Controlled irrigation, climate management, and renewable energy help protect crops from changing weather and maintain consistent quality.",
    image: "/why-pearl-gro/pillar-technology v2.png",
    alt: "Greenhouse interior with LED grow lighting system",
  },
  {
    index: "03",
    title: "Knowledge",
    description:
      "Practical farming experience and agricultural knowledge guide each decision. This includes selecting suitable crops, preparing the soil, managing irrigation, choosing the right harvest time, and checking produce for export quality.",
    image: "/why-pearl-gro/pillar-knowledge v2.png",
    alt: "Macro close-up of fresh export-grade tomatoes",
  },
];

export default function ThreePillars() {
  return (
    <section className="bg-bg-deep py-16 lg:py-20">
      <Container>
        <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
          The Three Pillars
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span aria-hidden className="h-px w-[36px] bg-glow/45" />
          <span
            aria-hidden
            className="size-2 rounded-full bg-glow shadow-[0_0_10px_#2fe58c]"
          />
          <span
            aria-hidden
            className="h-px flex-1 bg-gradient-to-r from-glow/45 to-transparent"
          />
        </div>

        <div className="mt-12 flex flex-col gap-10 lg:gap-12">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-bg-black lg:w-[88%] ${i % 2 === 1 ? "lg:order-2 lg:ml-auto" : ""
                  }`}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 44vw, 100vw"
                />
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-heading text-[clamp(30px,3.6vw,42px)] font-bold tracking-[-1.05px] text-text">
                  {pillar.title}
                </h2>
                <p className="max-w-[400px] pt-5 text-[15px] leading-[1.75] text-muted">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
