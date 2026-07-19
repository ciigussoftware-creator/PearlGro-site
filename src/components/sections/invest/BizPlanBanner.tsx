import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export default function BizPlanBanner() {
  return (
    <section className="bg-bg-black py-10 lg:py-0">
      <Container>
        <div className="flex flex-col items-start gap-8 rounded-[20px] border border-gold/18 bg-[rgba(10,13,9,0.95)] px-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-[53px] sm:py-[41px]">
          <div className="flex items-center gap-6">
            <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] border border-gold/30 bg-gold/6">
              <Image
                src="/invest/icons/document.svg"
                alt=""
                width={22}
                height={22}
              />
            </div>
            <div>
              <h3 className="font-heading text-[22px] font-bold tracking-[-0.22px] text-text">
                Full Business Plan Available
              </h3>
              <p className="pt-1.5 max-w-[560px] text-[15px] leading-[1.6] text-muted">
                For complete financial projections, timelines, and site
                details, request access to our full business plan.
              </p>
            </div>
          </div>

          <Link
            href="mailto:invest@pearlgro.lk?subject=Business%20Plan%20Request"
            className="inline-flex h-[53px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-gold px-10 text-[15px] font-semibold text-gold transition-colors hover:bg-gold/10"
          >
            Request the Business Plan
          </Link>
        </div>
      </Container>
    </section>
  );
}
