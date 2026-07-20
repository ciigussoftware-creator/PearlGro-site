"use client";

import { useEffect, useState } from "react";
import GridCropCard from "@/components/sections/products/GridCropCard";
import FeaturedCropCard from "@/components/sections/products/FeaturedCropCard";
import type { Crop } from "@/types";

const MOBILE_QUERY = "(max-width: 767px)";

const crops: Crop[] = [
  {
    id: "scotch-bonnet",
    image: "/products/scotch-bonnet.jpg",
    glow: "rgba(200,60,30,0.16)",
    category: "Spice",
    name: "Scotch Bonnet",
    description:
      "Grown for the export spice and hot sauce market — prized for its distinctive heat, fruity aroma, and consistent capsaicin content.",
    indicatorLabel: "High heat variety",
    indicatorIcon: "/products/icons/flame.svg",
    metadata: ["Export Market", "Hot Sauce & Spice", "Phase 1"],
  },
  {
    id: "brinjal",
    image: "/products/brinjal.jpg",
    glow: "rgba(140,70,170,0.14)",
    category: "Vegetable",
    name: "Brinjal",
    description:
      "A staple export vegetable, cultivated for consistent size and skin quality.",
    indicatorLabel: "Export grade quality",
    indicatorIcon: "/products/icons/check.svg",
    metadata: ["Export Market", "Fresh & Culinary", "Phase 1"],
  },
  {
    id: "tomato",
    image: "/products/tomato.jpg",
    glow: "rgba(200,70,50,0.12)",
    category: "Vegetable",
    name: "Tomato",
    description:
      "Grown for uniform grading and shelf life demanded by export buyers.",
    indicatorLabel: "Export grade quality",
    indicatorIcon: "/products/icons/check.svg",
    metadata: ["Export Market", "Fresh & Processing", "Phase 1"],
  },
  {
    id: "capsicum",
    image: "/products/capsicum.jpg",
    glow: "rgba(60,170,80,0.12)",
    category: "Vegetable",
    name: "Capsicum",
    description:
      "Cultivated for color consistency and thickness across export grades.",
    indicatorLabel: "Export grade quality",
    indicatorIcon: "/products/icons/check.svg",
    metadata: ["Export Market", "Fresh & Culinary", "Phase 1"],
  },
  {
    id: "salad-cucumber",
    image: "/products/salad-cucumber.jpg",
    glow: "rgba(60,150,90,0.1)",
    category: "Vegetable",
    name: "Salad Cucumber",
    description:
      "Greenhouse-grown for straightness, crunch, and cosmetic-grade finish.",
    indicatorLabel: "Export grade quality",
    indicatorIcon: "/products/icons/check.svg",
    metadata: ["Export Market", "Fresh & Salad", "Phase 1"],
  },
];

export default function CropGallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedCrop = crops.find((crop) => crop.id === selectedId) ?? null;

  // Below the tablet breakpoint the expand interaction is fully disabled —
  // if the viewport crosses into mobile (resize, rotation) while a card is
  // expanded, collapse it so the featured view can never appear there.
  useEffect(() => {
    const mobileQuery = window.matchMedia(MOBILE_QUERY);

    if (mobileQuery.matches) {
      setSelectedId(null);
    }

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setSelectedId(null);
      }
    };

    mobileQuery.addEventListener("change", handleChange);
    return () => mobileQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="mt-14">
      {selectedCrop && (
        <FeaturedCropCard
          crop={selectedCrop}
          onClose={() => setSelectedId(null)}
        />
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {crops.map((crop) => (
          <GridCropCard
            key={crop.id}
            crop={crop}
            active={crop.id === selectedId}
            onSelect={() => {
              // No-op below the tablet breakpoint — tapping a card on
              // mobile must do nothing at all.
              if (window.matchMedia(MOBILE_QUERY).matches) return;
              setSelectedId((current) =>
                current === crop.id ? null : crop.id,
              );
            }}
          />
        ))}
      </div>
    </div>
  );
}
