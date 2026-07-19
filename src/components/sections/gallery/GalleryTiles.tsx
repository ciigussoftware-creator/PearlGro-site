import type { ReactNode } from "react";
import Image from "next/image";
import GalleryCategoryIcon from "@/components/sections/gallery/GalleryCategoryIcons";
import type {
  GalleryIconName,
  GalleryTile as GalleryTileData,
} from "@/components/sections/gallery/galleryData";

const aspectByPosition = ["aspect-[4/3]", "aspect-[3/4]", "aspect-[5/4]"];

export function tileAspect(position: number): string {
  return aspectByPosition[position % aspectByPosition.length];
}

interface TileShellProps {
  aspect: string;
  children: ReactNode;
  className?: string;
}

function TileShell({ aspect, children, className }: TileShellProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-glow/10 ${aspect} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function PlaceholderTile({
  categoryName,
  categoryIndex,
  icon,
  aspect,
}: {
  categoryName: string;
  categoryIndex: string;
  icon: GalleryIconName;
  aspect: string;
}) {
  return (
    <TileShell aspect={aspect} className="bg-[rgba(10,20,14,0.95)]">
      <div
        aria-hidden
        className="absolute top-0 right-0 h-2/3 w-2/3"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(47,229,140,0.07) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(47,229,140,0.05) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
      <p
        aria-hidden
        className="absolute -right-1 -bottom-3 select-none font-heading text-[96px] leading-none font-bold tracking-tight text-glow/5"
      >
        {categoryIndex}
      </p>

      <div className="relative flex h-full flex-col items-center justify-center gap-4 px-8 text-center">
        <GalleryCategoryIcon icon={icon} className="h-13 w-15" />
        <p className="font-mono text-[10px] leading-[1.7] tracking-[1.2px] text-muted uppercase">
          {categoryName}
          <br />
          Photography Coming Soon
        </p>
      </div>
    </TileShell>
  );
}

export function PhotoTile({
  tile,
  categoryName,
  aspect,
  onOpen,
}: {
  tile: Extract<GalleryTileData, { kind: "photo" }>;
  categoryName: string;
  aspect: string;
  onOpen?: () => void;
}) {
  return (
    <TileShell aspect={aspect} className="bg-bg-black">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${tile.alt}`}
        className="group absolute inset-0 h-full w-full cursor-zoom-in"
      >
        <Image
          src={tile.src}
          alt={tile.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,11,9,0) 60%, rgba(7,11,9,0.75) 100%)",
          }}
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-glow/20 bg-bg-black/70 px-3 py-1.5 font-mono text-[9px] tracking-[1.2px] text-text uppercase backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-glow" aria-hidden />
          {categoryName}
        </span>
        <span className="absolute right-3 bottom-3 font-mono text-[10px] tracking-[1px] text-text/70">
          {tile.date}
        </span>
      </button>
    </TileShell>
  );
}

export function VideoTile({
  tile,
  aspect,
}: {
  tile: Extract<GalleryTileData, { kind: "video" }>;
  aspect: string;
}) {
  return (
    <TileShell aspect={aspect} className="bg-bg-black">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(47,229,140,0.1) 0%, rgba(0,0,0,0) 65%)",
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center gap-5">
        <span
          className="flex size-16 items-center justify-center rounded-full border border-glow/60 bg-glow/8 shadow-[0_0_24px_rgba(47,229,140,0.35)] backdrop-blur-sm"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="var(--color-glow)">
            <path d="M7 4.5v15l13-7.5z" />
          </svg>
        </span>
        <div className="text-center">
          <p className="font-mono text-[10px] tracking-[1.4px] text-glow uppercase">
            {tile.label}
          </p>
          <p className="pt-1.5 font-mono text-[9px] tracking-[1px] text-muted uppercase">
            {tile.date}
          </p>
        </div>
      </div>
    </TileShell>
  );
}
