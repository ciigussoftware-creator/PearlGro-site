import Container from "@/components/Container";
import Button from "@/components/Button";

export default function PartnersHero() {
  return (
    <section className="relative overflow-hidden bg-bg-black">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -left-20 size-125 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,229,140,0.06) 0%, rgba(0,0,0,0) 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 size-100 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,196,107,0.04) 0%, rgba(0,0,0,0) 65%)",
        }}
      />

      <Container className="relative flex flex-col items-start pt-10 pb-20 lg:pt-16 lg:pb-32">
        <div className="flex items-center gap-[10px]">
          <span className="size-2 rounded-full bg-glow opacity-55 shadow-[0_0_4px_#2fe58c]" />
          <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
            Business Opportunities
          </p>
        </div>

        <h1 className="max-w-[640px] pt-7 font-heading text-[clamp(36px,5.5vw,64px)] leading-[1.04] font-bold tracking-[-1.8px] text-text">
          Partner With
          <br />
          <span className="text-accent">Pearl Gro.</span>
        </h1>

        <p className="max-w-[540px] pt-6 text-[18px] leading-[1.72] text-muted">
          We&rsquo;re building a complete agricultural ecosystem. If your
          company operates in transportation, logistics, packaging, or
          distribution — there&rsquo;s a place for you in our supply chain.
        </p>

        <Button href="#partner-form" size="lg" className="mt-11">
          Express Interest
        </Button>
      </Container>
    </section>
  );
}
