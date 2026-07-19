import type { Metadata } from "next";
import InvestHero from "@/components/sections/invest/InvestHero";
import OpportunityGrid from "@/components/sections/invest/OpportunityGrid";
import HowItWorks from "@/components/sections/invest/HowItWorks";
import BizPlanBanner from "@/components/sections/invest/BizPlanBanner";
import RoadAhead from "@/components/sections/invest/RoadAhead";
import ThambuttegamaTeaser from "@/components/sections/invest/ThambuttegamaTeaser";
import LeadForm from "@/components/sections/invest/LeadForm";

export const metadata: Metadata = {
  title: "Invest",
  description:
    "Phase 1 has 10 investor slots. Register your interest in Pearl Gro's greenhouse cultivation project.",
};

export default function InvestPage() {
  return (
    <main>
      <InvestHero />
      <OpportunityGrid />
      <HowItWorks />
      <BizPlanBanner />
      <RoadAhead />
      <ThambuttegamaTeaser />
      <LeadForm />
    </main>
  );
}
