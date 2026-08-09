import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Express Interest",
    description:
      "Fill out the partnership inquiry form below with your company details and area of interest. Our team reviews every submission personally.",
  },
  {
    step: "02",
    title: "Evaluation & Meeting",
    description:
      "We'll assess the fit and arrange a meeting — virtual or at our Malsiripura site — to discuss scope, expectations, and mutual goals.",
  },
  {
    step: "03",
    title: "Onboarding & Collaboration",
    description:
      "Once aligned, we formalise the partnership and begin integration. You'll have a dedicated Pearl Gro contact for ongoing coordination.",
  },
];

export default function PartnerProcess() {
  return (
    <section className="border-t border-glow/8 bg-bg-black">
      <Container className="py-20 lg:py-28">
        <SectionHeading
          number="02"
          eyebrow="How It Works"
          heading="Three Steps to Partnership"
        />

        <div className="relative mt-14 flex flex-col gap-0">
          {/* Vertical timeline line */}
          <div
            aria-hidden
            className="absolute left-[23px] top-3 bottom-3 w-px bg-glow/15 lg:left-[23px]"
          />

          {steps.map((s, i) => (
            <div key={s.step} className="relative flex gap-7 py-8 first:pt-0 last:pb-0">
              {/* Timeline node */}
              <div className="relative z-10 flex size-[47px] shrink-0 items-center justify-center rounded-full border border-glow/20 bg-bg-deep">
                <span className="font-mono text-[12px] font-semibold tracking-[1px] text-glow">
                  {s.step}
                </span>
              </div>

              <div className="flex-1 pt-1">
                <h3 className="font-heading text-[20px] font-semibold tracking-[-0.4px] text-text">
                  {s.title}
                </h3>
                <p className="max-w-[480px] pt-2.5 text-[15px] leading-[1.7] text-muted">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
