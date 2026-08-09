import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const categories = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="size-7">
        <rect x="4" y="18" width="10" height="8" rx="1.5" stroke="var(--color-glow)" strokeWidth="1.5" />
        <path d="M14 20h6.5a2.5 2.5 0 012.5 2.5V26H14" stroke="var(--color-glow)" strokeWidth="1.5" />
        <circle cx="9" cy="27" r="2" stroke="var(--color-glow)" strokeWidth="1.5" />
        <circle cx="21" cy="27" r="2" stroke="var(--color-glow)" strokeWidth="1.5" />
        <path d="M23 22h3l2 4" stroke="var(--color-glow)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Transportation & Logistics",
    description:
      "Fleet management, produce delivery, and farm-to-market transport services for fresh agricultural products.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="size-7">
        <rect x="6" y="8" width="20" height="18" rx="2" stroke="var(--color-glow)" strokeWidth="1.5" />
        <path d="M6 14h20M13 8v6M19 8v6" stroke="var(--color-glow)" strokeWidth="1.5" />
        <path d="M16 20v4M13 22h6" stroke="var(--color-glow)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Cold-Chain & Storage",
    description:
      "Temperature-controlled storage and cold-chain solutions to maintain product freshness from harvest to delivery.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="size-7">
        <rect x="7" y="6" width="18" height="22" rx="2" stroke="var(--color-glow)" strokeWidth="1.5" />
        <path d="M12 12h8M12 16h5" stroke="var(--color-glow)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 22h18" stroke="var(--color-glow)" strokeWidth="1.5" />
      </svg>
    ),
    title: "Packaging & Processing",
    description:
      "Eco-friendly packaging, grading, and value-added processing services for greenhouse produce.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="size-7">
        <circle cx="16" cy="16" r="10" stroke="var(--color-glow)" strokeWidth="1.5" />
        <path d="M16 6v20M6 16h20" stroke="var(--color-glow)" strokeWidth="1.5" />
        <path d="M9 9c3 2 5 4 7 7M23 9c-3 2-5 4-7 7" stroke="var(--color-glow)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Distribution & Retail",
    description:
      "Supermarket chains, export agents, hotel suppliers, and online retail platforms for premium produce.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="size-7">
        <rect x="8" y="4" width="16" height="24" rx="2" stroke="var(--color-glow)" strokeWidth="1.5" />
        <circle cx="16" cy="22" r="1.5" fill="var(--color-glow)" />
        <path d="M12 8h8" stroke="var(--color-glow)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Technology & IoT",
    description:
      "Sensor manufacturers, monitoring platforms, and software providers for precision agriculture systems.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="size-7">
        <path d="M16 28c0-8-6-10-6-16a6 6 0 1112 0c0 6-6 8-6 16Z" stroke="var(--color-glow)" strokeWidth="1.5" />
        <path d="M13 14c1.5 1 3.5 1 5 0" stroke="var(--color-glow)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Agricultural Supplies",
    description:
      "Seeds, substrates, fertilisers, bio-pesticides, and growing media suppliers for greenhouse operations.",
  },
];

export default function PartnerCategories() {
  return (
    <section className="border-t border-glow/8 bg-bg-deep">
      <Container className="py-20 lg:py-28">
        <SectionHeading
          number="01"
          eyebrow="Partnership Areas"
          heading="Where You Fit In"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group rounded-2xl border border-glow/10 bg-bg-black/60 p-7 transition-colors hover:border-glow/25"
            >
              <span className="flex size-12 items-center justify-center rounded-xl border border-glow/15 bg-glow/5 transition-colors group-hover:bg-glow/10">
                {cat.icon}
              </span>
              <h3 className="pt-5 font-heading text-[18px] font-semibold tracking-[-0.3px] text-text">
                {cat.title}
              </h3>
              <p className="pt-2.5 text-[14px] leading-[1.7] text-muted">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
