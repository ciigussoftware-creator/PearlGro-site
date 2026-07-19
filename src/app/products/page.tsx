import type { Metadata } from "next";
import ProductsHero from "@/components/sections/products/ProductsHero";
import CropShowcase from "@/components/sections/products/CropShowcase";
import GrownToOrder from "@/components/sections/products/GrownToOrder";
import EnvironmentStrip from "@/components/sections/products/EnvironmentStrip";
import DualCTA from "@/components/sections/products/DualCTA";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Crops grown in Pearl Gro's controlled-environment greenhouses — Scotch Bonnet, Brinjal, Tomato, Capsicum, and Salad Cucumber.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <CropShowcase />
      <GrownToOrder />
      <EnvironmentStrip />
      <DualCTA />
    </>
  );
}
