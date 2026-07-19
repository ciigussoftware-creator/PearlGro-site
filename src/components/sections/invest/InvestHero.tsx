import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";

export default function InvestHero() {
  return (
    <section className="bg-bg-black">
      <Container className="grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-[72px] lg:py-[120px]">
        <div className="flex flex-col items-start">
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
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-bg-deep">
          <Image
            src="/invest/hero-greenhouse.jpg"
            alt="Rows of tomato plants inside Pearl Gro's Malsiripura greenhouse"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 524px, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
