import type { Metadata } from "next";
import EducationHero from "@/components/sections/education/EducationHero";
import TechCards from "@/components/sections/education/TechCards";
import SustainabilityGrid from "@/components/sections/education/SustainabilityGrid";
import RainwaterSection from "@/components/sections/education/RainwaterSection";
import SolarSection from "@/components/sections/education/SolarSection";
import SeedToShelf from "@/components/sections/education/SeedToShelf";
import SoftClosing from "@/components/sections/education/SoftClosing";

export const metadata: Metadata = {
  title: "Education",
  description:
    "An inside look at the technology and thinking behind Pearl Gro's cultivation model - for students, researchers, and the curious.",
};

export default function EducationPage() {
  return (
    <main>
      <EducationHero />
      <TechCards />
      <SustainabilityGrid />
      <RainwaterSection />
      <SolarSection />
      <SeedToShelf />
      <SoftClosing />
    </main>
  );
}

// Test comment