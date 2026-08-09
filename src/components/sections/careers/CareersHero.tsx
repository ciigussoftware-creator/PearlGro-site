import Container from "@/components/Container";
import Button from "@/components/Button";

export default function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-bg-black">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-20 size-125 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,229,140,0.06) 0%, rgba(0,0,0,0) 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -left-16 size-100 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(186,227,32,0.04) 0%, rgba(0,0,0,0) 65%)",
        }}
      />

      <Container className="relative flex flex-col items-start pt-10 pb-20 lg:pt-16 lg:pb-32">
        <div className="flex items-center gap-[10px]">
          <span className="size-2 rounded-full bg-glow opacity-55 shadow-[0_0_4px_#2fe58c]" />
          <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
            Join Our Team
          </p>
        </div>

        <h1 className="max-w-[640px] pt-7 font-heading text-[clamp(36px,5.5vw,64px)] leading-[1.04] font-bold tracking-[-1.8px] text-text">
          Grow Your Career
          <br />
          <span className="text-accent">With Us.</span>
        </h1>

        <p className="max-w-[520px] pt-6 text-[18px] leading-[1.72] text-muted">
          Be part of a team that&rsquo;s redefining agriculture in Sri Lanka.
          We&rsquo;re looking for passionate people who want to make a real
          impact through technology and sustainable farming.
        </p>

        <Button href="#open-positions" size="lg" className="mt-11">
          View Open Positions
        </Button>
      </Container>
    </section>
  );
}
