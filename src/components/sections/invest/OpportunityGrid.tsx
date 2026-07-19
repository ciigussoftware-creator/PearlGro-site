import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import OpportunityStatCard from "@/components/sections/invest/OpportunityStatCard";

const crops = ["Scotch Bonnet", "Brinjal", "Tomato", "Capsicum", "Cucumber"];

export default function OpportunityGrid() {
  return (
    <section className="bg-bg-deep py-20 lg:py-[144px]">
      <Container>
        <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
          The Opportunity
        </p>
        <h2 className="pt-4 font-heading text-[clamp(32px,4.2vw,46.84px)] font-bold tracking-[-1.17px] text-text">
          Malsiripura Project - Phase 1
        </h2>

        <div className="grid grid-cols-1 gap-4 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          <OpportunityStatCard label="Total Project Land" value="42.5 acres">
            <p className="text-[12px] text-muted">
              Malsiripura, North Central Province
            </p>
          </OpportunityStatCard>

          <OpportunityStatCard label="Phase 1 Land" value="10 acres">
            <p className="text-[12px] text-muted">
              Under controlled-environment cultivation
            </p>
          </OpportunityStatCard>

          <OpportunityStatCard label="Investor Slots" value="10">
            <p className="text-[12px] text-muted">
              Phase 1 — first-come allocation
            </p>
          </OpportunityStatCard>

          <OpportunityStatCard
            label="Entry Investment"
            value="LKR 60M"
            variant="gold"
          >
            <p className="text-[12px] text-muted">
              LKR 60,000,000 per investor slot
            </p>
          </OpportunityStatCard>

          <OpportunityStatCard label="Phase 1 Crops" value="5 Crops">
            <ul className="flex flex-wrap gap-1.5">
              {crops.map((crop) => (
                <li
                  key={crop}
                  className="rounded-full border border-glow/20 bg-glow/10 px-[10px] py-1 font-mono text-[9px] tracking-[0.9px] text-glow uppercase"
                >
                  {crop}
                </li>
              ))}
            </ul>
          </OpportunityStatCard>

          <OpportunityStatCard
            label="Renewable Energy"
            value="1 Acre"
            icon="/invest/icons/renewable-energy.svg"
          >
            <p className="text-[12px] text-muted">
              Ground-mounted solar generation on-site
            </p>
          </OpportunityStatCard>

          <OpportunityStatCard
            label="Water Management"
            value="Rainwater Harvesting"
            variant="muted"
            icon="/invest/icons/water-management.svg"
          >
            <p className="w-full rounded-full border border-muted/12 bg-muted/8 px-[11px] py-1 font-mono text-[9px] tracking-[1.08px] text-muted/50 uppercase">
              Details to be added
            </p>
          </OpportunityStatCard>

          <OpportunityStatCard
            label="Projected Income"
            value="On Request"
            variant="muted"
            icon="/invest/icons/projected-income.svg"
          >
            <Link
              href="mailto:invest@pearlgro.lk?subject=Business%20Plan%20Request"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-gold/70 transition-opacity hover:opacity-80"
            >
              Request the Business Plan
              <Image
                src="/invest/icons/arrow-small-gold.svg"
                alt=""
                width={11}
                height={11}
              />
            </Link>
          </OpportunityStatCard>
        </div>

        <div className="mt-[60px] max-w-[720px] rounded-2xl border border-glow/10 bg-[rgba(15,28,20,0.5)] px-8 py-9 sm:px-10">
          <p className="text-[18px] leading-[1.65] text-text">
            Each investor secures a defined plot within the Malsiripura
            project and earns a share of the income generated from what is
            cultivated on it — a direct stake in the land, the harvest, and
            the return. Pearl Gro manages everything from construction to
            export.
          </p>
        </div>
      </Container>
    </section>
  );
}
