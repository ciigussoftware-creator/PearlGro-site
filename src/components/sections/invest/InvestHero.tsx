import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";

const heroImage = {
  image: "/invest/invest_page_malsiripura_greenhouse_image.jpg",
  alt: "Pearl Gro's greenhouse investment project in Malsiripura, Sri Lanka",
};

export default function InvestHero() {
  return (
    <section className="relative overflow-hidden bg-bg-black">
      <div className="absolute inset-0">
        <Image
          src={heroImage.image}
          alt={heroImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(7,11,9,0.95) 35%, rgba(7,11,9,0.7) 60%, rgba(7,11,9,0.35) 100%)",
          }}
        />
      </div>

      <Container className="relative flex min-h-[90vh] flex-col items-start justify-center pt-16 pb-16 lg:min-h-[110vh] lg:justify-center lg:pt-20 lg:pb-64">
        <div className="flex items-center gap-[10px]">
          <span className="size-2 rounded-full bg-glow opacity-55 shadow-[0_0_4px_#2fe58c]" />
          <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
            Malsiripura · Phase 1 · Now Open
          </p>
        </div>

        <h1 className="max-w-[560px] pt-7 font-heading text-[clamp(36px,5.5vw,56px)] leading-[1.06] font-bold tracking-[-1.4px] text-text">
          Invest in Sri Lanka&rsquo;s Next Generation of Agriculture
        </h1>

        <p className="max-w-[540px] pt-6 text-[18px] leading-[1.72] text-muted">
          Own a secured stake in Pearl Gro&rsquo;s flagship Malsiripura
          greenhouse project - Phase 1 is now open to 10 investors.
        </p>

        <Button href="#lead-form" size="lg" className="mt-11">
          Register Your Interest
        </Button>
      </Container>
    </section>
  );
}