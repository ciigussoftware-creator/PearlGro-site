import Image from "next/image";
import type { Crop } from "@/types";

interface GridCropCardProps {
  crop: Crop;
  active: boolean;
  onSelect: () => void;
}

export default function GridCropCard({
  crop,
  active,
  onSelect,
}: GridCropCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`group cursor-default overflow-hidden rounded-2xl border text-left transition-all duration-200 md:cursor-pointer md:hover:-translate-y-1.5 md:hover:shadow-[0_0_20px_rgba(47,229,140,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep ${
        active
          ? "border-glow/50 shadow-[0_0_16px_rgba(47,229,140,0.2)]"
          : "border-glow/10"
      }`}
    >
      <div className="relative aspect-4/3 w-full bg-bg-black">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${crop.glow} 0%, rgba(0,0,0,0) 70%)`,
          }}
        />
        <Image
          src={crop.image}
          alt={crop.name}
          fill
          className="object-cover brightness-75 transition-transform duration-300 md:group-hover:scale-105"
          sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,11,9,0) 45%, rgba(7,11,9,0.88) 100%)",
          }}
        />
      </div>

      <div className="bg-[rgba(10,18,14,0.96)] px-4 pt-4 pb-5">
        <span className="inline-flex items-center gap-1 rounded-full border border-glow/15 bg-glow/8 px-2.5 py-0.75 font-mono text-[8px] tracking-[1px] text-muted uppercase">
          {crop.category === "Spice" && (
            <Image src="/products/icons/flame.svg" alt="" width={8} height={8} />
          )}
          {crop.category}
        </span>

        <h3 className="pt-2.5 font-heading text-[16px] font-bold tracking-[-0.2px] text-text">
          {crop.name}
        </h3>

        <p className="pt-1.5 text-[11.5px] leading-[1.55] text-muted">
          {crop.description}
        </p>
      </div>
    </button>
  );
}
