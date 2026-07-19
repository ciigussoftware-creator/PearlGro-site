import type { Metadata } from "next";
import GalleryHero from "@/components/sections/gallery/GalleryHero";
import GalleryExperience from "@/components/sections/gallery/GalleryExperience";
import GalleryProgressNote from "@/components/sections/gallery/GalleryProgressNote";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual record of Pearl Gro's greenhouse cultivation project taking shape in Malsiripura, Sri Lanka.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryExperience />
      <GalleryProgressNote />
    </>
  );
}
