import Image from "next/image";
import Container from "@/components/Container";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-bg-black">
      <div className="absolute inset-0">
        <Image
          src="/products/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(7,11,9,0.92) 8%, rgba(7,11,9,0.6) 46%, rgba(7,11,9,0.25) 92%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,11,9,0) 50%, rgba(7,11,9,0.9) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -top-16 -left-10 h-[360px] w-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(47,229,140,0.07) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
      </div>

      <Container className="relative flex min-h-screen flex-col items-start justify-end py-24 lg:py-[130px]">
        <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
          Phase 1 Cultivation · Controlled Environment
        </p>

        <h1 className="max-w-[600px] pt-5 font-heading text-[clamp(40px,6vw,80px)] leading-[1.02] font-bold tracking-tight text-text">
          What We Grow
        </h1>

        <p className="max-w-[540px] pt-6 text-[17px] leading-[1.7] text-muted">
          Pearl Gro cultivates high-demand crops for export, grown in
          controlled-environment greenhouses to consistent quality standards.
        </p>
      </Container>
    </section>
  );
}
