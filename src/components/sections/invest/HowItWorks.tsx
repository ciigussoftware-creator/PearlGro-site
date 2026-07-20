import Image from "next/image";
import Container from "@/components/Container";

const steps = [
  {
    step: "Step 01",
    icon: "/invest/icons/step-build.svg",
    title: "We Build",
    description:
      "Pearl Gro constructs the complete controlled-environment greenhouse infrastructure - structures, climate systems, and renewable energy.",
  },
  {
    step: "Step 02",
    icon: "/invest/icons/step-cultivate.svg",
    title: "We Cultivate",
    description:
      "Expert agronomic management runs every stage of cultivation, from seeding and irrigation to harvest and quality control.",
  },
  {
    step: "Step 03",
    icon: "/invest/icons/step-sell.svg",
    title: "We Sell",
    description:
      "Export buyers are secured by Pearl Gro before harvest. Your produce reaches international markets at export-grade quality.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-light-bg py-16 lg:py-16">
      <Container>
        <p className="font-mono text-[50px] tracking-[1.98px] text-label uppercase font-semibold">
          How It Works
        </p>
        <h2 className="pt-4 font-heading text-[clamp(20px,2vw,24px)] font-bold tracking-[-0.98px] text-ink">
          You Invest. We Build, Grow, and Sell.
        </h2>

        <div className="grid grid-cols-1 gap-12 pt-12 sm:grid-cols-3 sm:gap-6">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-start">
              <div className="flex items-center gap-4">
                <div className="relative flex size-16 items-center justify-center rounded-full border-2 border-glow bg-bg-deep shadow-[0_0_12px_rgba(47,229,140,0.27)]">
                  <Image src={step.icon} alt="" width={22} height={22} />
                </div>
                <p className="font-mono text-[11px] tracking-[2.2px] text-label uppercase">
                  {step.step}
                </p>
              </div>

              <h3 className="pt-7 font-heading text-[26px] font-bold tracking-[-0.26px] text-ink">
                {step.title}
              </h3>

              <p className="pt-3.5 text-[15px] leading-[1.75] text-ink-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-ink/10 pt-8">
          <p className="text-[23px] leading-[1.5] font-semibold tracking-[-0.23px] text-ink">
            You own the stake.{" "}
            <span className="text-ink-accent">
              We manage everything else.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}
