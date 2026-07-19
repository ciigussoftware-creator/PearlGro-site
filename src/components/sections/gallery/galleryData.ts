export type GalleryIconName =
  | "greenhouse"
  | "terrain"
  | "crane"
  | "solar"
  | "people";

export type GalleryTile =
  | { kind: "placeholder" }
  | { kind: "photo"; src: string; alt: string; date: string }
  | { kind: "video"; label: string; date: string };

export interface GalleryCategory {
  slug: string;
  name: string;
  index: string;
  icon: GalleryIconName;
  tiles: GalleryTile[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    slug: "greenhouse-interiors",
    name: "Greenhouse Interiors",
    index: "01",
    icon: "greenhouse",
    tiles: [
      { kind: "placeholder" },
      { kind: "placeholder" },
      { kind: "placeholder" },
    ],
  },
  {
    slug: "land-site-views",
    name: "Land & Site Views",
    index: "02",
    icon: "terrain",
    tiles: [
      {
        kind: "photo",
        src: "/home/malsiripura-aerial.jpg",
        alt: "Aerial view of the Malsiripura project site",
        date: "JUL 2026",
      },
      { kind: "placeholder" },
      { kind: "placeholder" },
    ],
  },
  {
    slug: "construction-progress",
    name: "Construction Progress",
    index: "03",
    icon: "crane",
    tiles: [
      { kind: "video", label: "PROMO FILM · MALSIRIPURA", date: "JUL 2026" },
      { kind: "placeholder" },
      { kind: "placeholder" },
    ],
  },
  {
    slug: "solar-installation",
    name: "Solar Installation",
    index: "04",
    icon: "solar",
    tiles: [
      { kind: "placeholder" },
      { kind: "placeholder" },
      { kind: "placeholder" },
    ],
  },
  {
    slug: "team-operations",
    name: "Team & Operations",
    index: "05",
    icon: "people",
    tiles: [{ kind: "placeholder" }, { kind: "placeholder" }],
  },
];

export function countRealTiles(tiles: GalleryTile[]): number {
  return tiles.filter((tile) => tile.kind !== "placeholder").length;
}

export const totalRealTiles = galleryCategories.reduce(
  (sum, category) => sum + countRealTiles(category.tiles),
  0,
);
