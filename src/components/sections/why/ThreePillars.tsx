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
      "Experienced oversight of every phase of the project, from land development through cultivation to export. Nothing is left to chance or outsourced accountability — Pearl Gro leads every stage directly.",
    image: "/why-pearl-gro/pillar-management.jpg",
    alt: "Aerial view of agricultural land development",
  },
  {
    index: "02",
    title: "Technology",
    description:
      "Controlled-environment greenhouse cultivation with renewable energy integration, isolating crops from climate volatility and delivering consistent quality regardless of external conditions.",
    image: "/why-pearl-gro/pillar-technology.jpg",
    alt: "Greenhouse interior with LED grow lighting system",
  },
  {
    index: "03",
    title: "Knowledge",
    description:
      "Agronomic expertise drives crop selection, cultivation methods, and every operational decision on the ground — from soil preparation and irrigation scheduling to harvest timing and export-grade quality control.",
    image: "/why-pearl-gro/pillar-knowledge.jpg",
    alt: "Macro close-up of fresh export-grade tomatoes",
  },
];

export default function ThreePillars() {
  return (
    <section className="bg-bg-deep py-20 lg:py-[144px]">
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

        <div className="mt-20 flex flex-col gap-24 lg:gap-32">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-bg-black ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="font-mono text-[11px] tracking-[2.2px] text-glow/60">
                  {pillar.index}
                </p>
                <h2 className="pt-4 font-heading text-[clamp(30px,3.6vw,42px)] font-bold tracking-[-1.05px] text-text">
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
