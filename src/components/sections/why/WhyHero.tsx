import Image from "next/image";
import Container from "@/components/Container";

export default function WhyHero() {
  return (
    <section className="relative overflow-hidden bg-bg-black">
      <div className="absolute inset-0">
        <Image
          src="/why-pearl-gro/hero.jpg"
          alt="Pearl Gro greenhouse structure at golden hour"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,11,9,0.55) 0%, rgba(7,11,9,0.3) 40%, rgba(7,11,9,0.92) 100%)",
          }}
        />
      </div>

      <Container className="relative flex min-h-screen flex-col items-start justify-end pt-24 pb-24 lg:pt-30 lg:pb-32">
        <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
          Our Model
        </p>

        <h1 className="max-w-150 pt-7 font-heading text-[clamp(40px,6vw,72px)] leading-[1.05] font-bold tracking-[-1.5px] text-text">
          Why Pearl Gro
        </h1>

        <p className="max-w-135 pt-7 text-[17px] leading-[1.7] text-muted">
          A new model for agricultural investment in Sri Lanka built on real
          infrastructure, expert management, and long-term thinking.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <span
            aria-hidden
            className="h-px w-24.75 bg-linear-to-r from-glow to-glow/20"
          />
          <span className="font-mono text-[10px] tracking-[1.5px] text-glow/50 uppercase">
            Management &middot; Technology &middot; Knowledge
          </span>
        </div>
      </Container>
    </section>
  );
}
