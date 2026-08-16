import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="size-7">
        <path
          d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4Z"
          stroke="var(--color-glow)"
          strokeWidth="1.5"
        />
        <path
          d="M16 10v6l4 2"
          stroke="var(--color-glow)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Impactful Work",
    description:
      "Every day, your work directly contributes to sustainable food production and uplifting rural communities across Sri Lanka.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="size-7">
        <path
          d="M8 24V14M16 24V8M24 24V18"
          stroke="var(--color-glow)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Growth Opportunities",
    description:
      "We invest in our people with hands-on training, mentorship, and clear pathways for professional advancement.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="size-7">
        <circle cx="11" cy="12" r="3" stroke="var(--color-glow)" strokeWidth="1.5" />
        <circle cx="21" cy="12" r="3" stroke="var(--color-glow)" strokeWidth="1.5" />
        <path
          d="M4 24c0-3.5 3.134-6 7-6 1.434 0 2.756.38 3.867 1M28 24c0-3.5-3.134-6-7-6-1.434 0-2.756.38-3.867 1"
          stroke="var(--color-glow)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Team Culture",
    description:
      "A close-knit, collaborative team that values fresh ideas. We celebrate wins together and support each other through challenges.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="size-7">
        <path
          d="M16 6l2.47 5.01L24 11.9l-4 3.9.94 5.5L16 18.77l-4.94 2.63L12 15.8l-4-3.9 5.53-.89L16 6Z"
          stroke="var(--color-glow)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Innovation-Driven",
    description:
      "Work with cutting-edge greenhouse technology, IoT systems, and data-driven approaches to modern agriculture.",
  },
];

export default function WhyJoinUs() {
  return (
    <section className="border-t border-glow/8 bg-bg-deep">
      <Container className="py-20 lg:py-28">
        <SectionHeading
          number="01"
          eyebrow="Why Join Pearl Gro"
          heading="A Career That Matters"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-glow/10 bg-bg-black/60 p-7 transition-colors hover:border-glow/25"
            >
              <span className="flex size-12 items-center justify-center rounded-xl border border-glow/15 bg-glow/5 transition-colors group-hover:bg-glow/10">
                {b.icon}
              </span>
              <h3 className="pt-5 font-heading text-[18px] font-semibold tracking-[-0.3px] text-text">
                {b.title}
              </h3>
              <p className="pt-2.5 text-[14px] leading-[1.7] text-muted">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
