import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const features = [
  { icon: "/home/icons/management.svg", label: "Management Excellence" },
  { icon: "/home/icons/technology.svg", label: "Advanced Technology" },
  { icon: "/home/icons/agronomic.svg", label: "Agronomic Expertise" },
  { icon: "/home/icons/market-access.svg", label: "Market Access" },
  { icon: "/home/icons/sustainable.svg", label: "Sustainable Practices" },
  { icon: "/home/icons/quality.svg", label: "Quality Assurance" },
  { icon: "/home/icons/partner.svg", label: "Partner Focused" },
  { icon: "/home/icons/long-term.svg", label: "Long-Term Value" },
];

export default function WhyDifferent() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 bg-bg-deep py-20 lg:min-h-[703px] lg:gap-12 lg:py-16">
      <Container className="lg:pt-[55px]">
        <div className="grid grid-cols-1 gap-x-[58px] gap-y-12 lg:grid-cols-[440px_1fr]">
          <div className="flex flex-col items-start gap-[30px]">
            <h2 className="font-heading text-[clamp(32px,5vw,50px)] leading-[1.1] font-bold tracking-[-0.81px] text-text">
              Why <span className="text-green-2">Pearl Gro</span> Is
              Different?
            </h2>
            <p className="text-[19px] leading-[1.55] font-semibold text-text">
              We combine world-class management, advanced technology, and
              deep agronomic knowledge to deliver sustainable growth and
              lasting value for our partners and the communities we serve.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-y-8 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-16 sm:gap-y-12">
            {features.map((feature) => (
              <li key={feature.label} className="flex items-center gap-6">
                <Image
                  src={feature.icon}
                  alt=""
                  width={45}
                  height={45}
                  className="shrink-0"
                />
                <span className="text-[20px] leading-[1.5] font-bold tracking-[-0.81px] text-text">
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="pb-6">
        <Link
          href="/why-pearl-gro"
          className="inline-flex items-center gap-2 text-[15px] font-semibold tracking-[0.15px] text-glow transition-opacity hover:opacity-80"
        >
          Learn Why Pearl Gro
          <Image
            src="/home/icons/arrow-right.svg"
            alt=""
            width={16}
            height={16}
          />
        </Link>
      </Container>
    </section>
  );
}
