import Image from "next/image";
import Container from "@/components/Container";

interface Node {
  icon: string;
  title: string;
  description: string;
}

const nodes: Node[] = [
  {
    icon: "/why-pearl-gro/icons/infrastructure.svg",
    title: "Infrastructure",
    description: "Greenhouse construction, climate systems, renewable energy",
  },
  {
    icon: "/why-pearl-gro/icons/cultivation.svg",
    title: "Cultivation",
    description: "Expert agronomic management from seeding to harvest",
  },
  {
    icon: "/why-pearl-gro/icons/export-buyer.svg",
    title: "Export Buyer",
    description: "Buyers secured before harvest — demand confirmed first",
  },
];

export default function VerticalIntegration() {
  return (
    <section className="bg-light-bg py-20 lg:py-36">
      <Container>
        <h2 className="font-heading text-[clamp(32px,4.2vw,46.84px)] font-bold tracking-[-1.17px] text-ink">
          We Build It. We Grow It. We Sell It.
        </h2>
        <p className="max-w-140 pt-6 text-[15px] leading-[1.75] text-ink-muted">
          Pearl Gro constructs the infrastructure, cultivates the crops, AND
          secures the export buyer — removing the biggest uncertainty in
          agricultural investment: who will actually buy this? We answer that
          question before the first seed is planted.
        </p>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          <span
            aria-hidden
            className="absolute top-6.5 right-[10%] left-[10%] hidden h-px bg-linear-to-r from-ink-accent/25 via-ink-accent/45 to-ink-accent/25 sm:block"
          />

          {nodes.map((node, i) => {
            const isLast = i === nodes.length - 1;
            return (
              <div key={node.title} className="relative flex flex-col items-start">
                <div className="flex items-center gap-3">
                  <div
                    className={`relative flex size-13.25 shrink-0 items-center justify-center rounded-full ${
                      isLast
                        ? "border border-accent bg-bg-deep shadow-[0_0_18px_rgba(47,229,140,0.33)]"
                        : "border border-ink-accent bg-[#ede9e0]"
                    }`}
                  >
                    <Image src={node.icon} alt="" width={18} height={18} />
                  </div>

                  {isLast && (
                    <span className="rounded-full border border-glow/30 bg-glow/12 px-3 py-1 font-mono text-[9px] tracking-[1.2px] text-glow uppercase">
                      Buyer Secured Before Harvest
                    </span>
                  )}
                </div>

                <h3 className="pt-6 font-heading text-[20px] font-bold tracking-[-0.2px] text-ink">
                  {node.title}
                </h3>
                <p className="pt-2 text-[13px] leading-[1.7] text-ink-muted">
                  {node.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
