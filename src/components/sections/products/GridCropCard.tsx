import Image from "next/image";

interface GridCropCardProps {
  image: string;
  glow: string;
  category: string;
  name: string;
  description: string;
}

export default function GridCropCard({
  image,
  glow,
  category,
  name,
  description,
}: GridCropCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-glow/10">
      <div className="relative aspect-[16/10] w-full bg-bg-black">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${glow} 0%, rgba(0,0,0,0) 70%)`,
          }}
        />
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover brightness-75"
          sizes="(min-width: 640px) 50vw, 100vw"
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

      <div className="bg-[rgba(10,18,14,0.96)] px-8 pt-7 pb-8">
        <span className="inline-flex items-center rounded-full border border-glow/15 bg-glow/8 px-3 py-1 font-mono text-[9px] tracking-[1.2px] text-muted uppercase">
          {category}
        </span>

        <h3 className="pt-3.5 font-heading text-[26px] font-bold tracking-[-0.4px] text-text">
          {name}
        </h3>

        <p className="pt-2.5 text-[13px] leading-[1.7] text-muted">
          {description}
        </p>
      </div>
    </div>
  );
}
