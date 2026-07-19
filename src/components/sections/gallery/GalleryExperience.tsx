"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import {
  PlaceholderTile,
  PhotoTile,
  VideoTile,
  tileAspect,
} from "@/components/sections/gallery/GalleryTiles";
import GalleryLightbox, {
  type LightboxPhoto,
} from "@/components/sections/gallery/GalleryLightbox";
import {
  galleryCategories,
  countRealTiles,
  totalRealTiles,
} from "@/components/sections/gallery/galleryData";

const filters = [
  { slug: "all", name: "All", index: totalRealTiles },
  ...galleryCategories.map((category) => ({
    slug: category.slug,
    name: category.name,
    index: countRealTiles(category.tiles),
  })),
];

export default function GalleryExperience() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allPhotos = useMemo<LightboxPhoto[]>(
    () =>
      galleryCategories.flatMap((category) =>
        category.tiles
          .filter((tile) => tile.kind === "photo")
          .map((tile) => ({
            src: tile.src,
            alt: tile.alt,
            categoryName: category.name,
            date: tile.date,
          })),
      ),
    [],
  );

  const visibleCategories =
    activeFilter === "all"
      ? galleryCategories
      : galleryCategories.filter((category) => category.slug === activeFilter);

  return (
    <>
      <div className="sticky top-18.25 z-40 border-b border-glow/8 bg-bg-black/85 backdrop-blur-xl">
        <Container>
          <div
            className="flex flex-wrap items-center gap-x-8 gap-y-3 overflow-x-auto py-3.5"
            role="tablist"
            aria-label="Filter gallery by category"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.slug;
              return (
                <button
                  key={filter.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.slug)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full font-mono text-[11px] tracking-[1.2px] uppercase transition-colors ${
                    isActive
                      ? "bg-accent px-4 py-2 font-semibold text-accent-ink"
                      : "px-1 py-2 text-muted hover:text-text"
                  }`}
                >
                  {filter.name}
                  <span
                    className={
                      isActive
                        ? "text-accent-ink/70"
                        : filter.index > 0
                          ? "text-glow"
                          : "text-muted/40"
                    }
                  >
                    {String(filter.index).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      <section className="bg-bg-deep py-16 lg:py-20">
        <Container className="flex flex-col gap-16 lg:gap-20">
          {visibleCategories.map((category) => {
            const realCount = countRealTiles(category.tiles);
            return (
              <div key={category.slug}>
                <div className="flex flex-wrap items-center gap-3 pb-6">
                  <h3 className="font-heading text-[26px] font-bold tracking-[-0.5px] text-text sm:text-[28px]">
                    {category.name}
                  </h3>
                  <span
                    className={`font-mono text-[12px] tracking-[1px] ${
                      realCount > 0 ? "text-glow" : "text-muted/40"
                    }`}
                  >
                    {String(realCount).padStart(2, "0")}
                  </span>
                  {realCount === 0 && (
                    <span className="rounded-full border border-muted/25 px-2.5 py-1 font-mono text-[9px] tracking-[1.4px] text-muted uppercase">
                      In Progress
                    </span>
                  )}
                </div>

                <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                  {category.tiles.map((tile, position) => {
                    const aspect = tileAspect(position);
                    const key = `${category.slug}-${position}`;

                    if (tile.kind === "placeholder") {
                      return (
                        <div key={key} className="mb-4 break-inside-avoid">
                          <PlaceholderTile
                            categoryName={category.name}
                            categoryIndex={category.index}
                            icon={category.icon}
                            aspect={aspect}
                          />
                        </div>
                      );
                    }

                    if (tile.kind === "photo") {
                      const photoIndex = allPhotos.findIndex(
                        (photo) => photo.src === tile.src,
                      );
                      return (
                        <div key={key} className="mb-4 break-inside-avoid">
                          <PhotoTile
                            tile={tile}
                            categoryName={category.name}
                            aspect={aspect}
                            onOpen={() => setLightboxIndex(photoIndex)}
                          />
                        </div>
                      );
                    }

                    return (
                      <div key={key} className="mb-4 break-inside-avoid">
                        <VideoTile tile={tile} aspect={aspect} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {lightboxIndex !== null && (
        <GalleryLightbox
          photos={allPhotos}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
