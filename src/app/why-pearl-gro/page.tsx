import type { Metadata } from "next";
import WhyHero from "@/components/sections/why/WhyHero";
import ThreePillars from "@/components/sections/why/ThreePillars";
import VerticalIntegration from "@/components/sections/why/VerticalIntegration";
import ComparisonTable from "@/components/sections/why/ComparisonTable";
import GrownToSpec from "@/components/sections/why/GrownToSpec";
import ClosingCta from "@/components/sections/why/ClosingCta";

export const metadata: Metadata = {
  title: "Why Pearl Gro",
  description:
    "Why invest with Pearl Gro — technology, expert knowledge, and management behind Sri Lankan greenhouse cultivation.",
};

export default function WhyPearlGroPage() {
  return (
    <main>
      <WhyHero />
      <ThreePillars />
      <VerticalIntegration />
      <ComparisonTable />
      <GrownToSpec />
      <ClosingCta />
    </main>
  );
}
