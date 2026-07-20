import Image from "next/image";
import { Fragment } from "react";
import type { Crop } from "@/types";

interface FeaturedCropCardProps {
  crop: Crop;
  onClose: () => void;
}

export default function FeaturedCropCard({
  crop,
  onClose,
}: FeaturedCropCardProps) {
  return (
    <div className="mb-4 grid grid-cols-1 overflow-hidden rounded-2xl border border-glow/16 lg:grid-cols-2">
      <div className="relative order-1 min-h-[260px] w-full bg-[#0a0502] sm:min-h-[340px] lg:order-2 lg:min-h-[400px]">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 55% 40%, ${crop.glow} 0%, rgba(0,0,0,0) 70%)`,
          }}
        />
        <Image
          src={crop.image}
          alt={crop.name}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0) 60%, rgba(7,11,9,0.55) 100%)",
          }}
        />
      </div>

      <div className="order-2 flex flex-col justify-between bg-[rgba(10,20,16,0.95)] px-6 py-8 sm:px-10 sm:py-10 lg:order-1">
        <div>
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-glow/28 bg-glow/10 px-3 py-1 font-mono text-[10px] tracking-[1.6px] text-glow uppercase">
              {crop.category === "Spice" && (
                <Image
                  src="/products/icons/flame.svg"
                  alt=""
                  width={10}
                  height={10}
                />
              )}
              {crop.category}
            </span>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-[30px] shrink-0 items-center rounded-full border border-muted/20 px-3.5 font-mono text-[10px] tracking-[1.2px] text-muted uppercase transition-colors hover:border-glow/30 hover:text-text"
            >
              Close
            </button>
          </div>

          <h3 className="pt-4 font-heading text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-1px] text-text">
            {crop.name}
          </h3>

          <p className="max-w-[380px] pt-4 text-[15px] leading-[1.7] text-muted">
            {crop.description}
          </p>

          <div className="flex items-center gap-2.5 pt-8">
            <div className="flex items-center gap-1">
              {[0, 1, 2].map((dot) => (
                <Image
                  key={dot}
                  src={crop.indicatorIcon}
                  alt=""
                  width={12}
                  height={12}
                />
              ))}
            </div>
            <span className="font-mono text-[9px] tracking-[1.4px] text-glow/60 uppercase">
              {crop.indicatorLabel}
            </span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-glow/12 pt-6">
          {crop.metadata.map((item, index) => (
            <Fragment key={item}>
              {index > 0 && <span className="h-3.5 w-px bg-glow/20" />}
              <span className="font-mono text-[9px] tracking-[1.6px] text-muted uppercase">
                {item}
              </span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
