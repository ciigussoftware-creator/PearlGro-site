import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import MapStrip from "@/components/sections/contact/MapStrip";
import CrossLinks from "@/components/sections/contact/CrossLinks";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pearl Gro — Malsiripura, Kurunegala, Sri Lanka.",
  openGraph: {
    title: "Contact — Pearl Gro",
    description:
      "Get in touch with Pearl Gro — Malsiripura, Kurunegala, Sri Lanka.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <MapStrip />
      <CrossLinks />
    </main>
  );
}
