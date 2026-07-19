import Link from "next/link";
import Container from "@/components/Container";

export default function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-bg-black py-24 lg:py-[144px]">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 h-[413px] w-[578px] -translate-x-[calc(50%+250px)]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,196,107,0.13) 0%, rgba(116,98,54,0.065) 32%, rgba(0,0,0,0) 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-0 left-1/2 h-[413px] w-[495px] translate-x-[calc(-50%+250px)]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,229,140,0.08) 0%, rgba(0,0,0,0) 65%)",
        }}
      />

      <Container className="relative flex flex-col items-center text-center">
        <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
          Phase 1 &middot; Malsiripura
        </p>

        <h2 className="max-w-[720px] pt-6 font-heading text-[clamp(34px,5.4vw,58px)] leading-[1.1] font-bold tracking-[-1.5px] text-text">
          See the Malsiripura
          <br />
          <span className="text-gold">Phase 1 Opportunity</span>
        </h2>

        <p className="max-w-[520px] pt-5 text-[15px] leading-[1.6] text-muted">
          Phase 1 is underway. 10 investor slots available. Allocated on a
          first-come basis.
        </p>

        <Link
          href="/invest"
          className="mt-9 inline-flex h-[55px] items-center justify-center rounded-full bg-gold px-10 text-[15px] font-semibold text-bg-black shadow-[0_0_18px_rgba(232,196,107,0.27)] transition-colors hover:bg-gold/90"
        >
          Explore Phase 1 &rarr;
        </Link>
      </Container>
    </section>
  );
}
