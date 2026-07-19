import Container from "@/components/Container";
import Button from "@/components/Button";
import Link from "next/link";

export default function DualCTA() {
  return (
    <section className="bg-bg-black py-20 lg:py-[144px]">
      <Container>
        <h2 className="text-center font-heading text-[clamp(30px,4vw,48px)] font-bold tracking-[-1px] text-text">
          Where This Goes Next
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="flex flex-col items-start rounded-2xl border-x border-b border-t-2 border-glow/14 bg-[rgba(12,22,16,0.75)] px-8 py-9 sm:px-10">
            <span className="rounded-full border border-glow/20 bg-glow/10 px-3 py-1 font-mono text-[9px] tracking-[1.6px] text-muted uppercase">
              Sourcing
            </span>

            <h3 className="pt-5 font-heading text-[24px] font-bold tracking-[-0.4px] text-text">
              Interested in sourcing from Pearl Gro?
            </h3>

            <p className="max-w-[420px] pt-3 text-[14px] leading-[1.7] text-muted">
              Connect with our team to discuss supply agreements, grading
              standards, and availability.
            </p>

            <Button href="/contact" size="md" className="mt-6">
              Contact Us
            </Button>
          </div>

          <div className="relative flex flex-col items-start overflow-hidden rounded-2xl border-x border-b border-t-2 border-gold/16 bg-[rgba(14,12,4,0.85)] px-8 py-9 sm:px-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -left-10 h-[220px] w-[380px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(232,196,107,0.12) 0%, rgba(0,0,0,0) 65%)",
              }}
            />

            <span className="relative rounded-full border border-gold/25 bg-gold/10 px-3 py-1 font-mono text-[9px] tracking-[1.6px] text-gold uppercase">
              Investment
            </span>

            <h3 className="relative pt-5 font-heading text-[24px] font-bold tracking-[-0.4px] text-text">
              See the opportunity behind these crops.
            </h3>

            <p className="relative max-w-[420px] pt-3 text-[14px] leading-[1.7] text-muted">
              Pearl Gro&rsquo;s Phase 1 is open to 10 investors. LKR 60M per
              slot — all crops above, in your stake.
            </p>

            <Link
              href="/invest"
              className="relative mt-6 inline-flex h-[53px] items-center justify-center rounded-full bg-gold px-9 text-[15px] font-semibold text-bg-black shadow-[0_0_14px_rgba(232,196,107,0.27)] transition-opacity hover:opacity-90"
            >
              Explore Phase 1 →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
