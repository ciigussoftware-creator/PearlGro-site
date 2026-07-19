import type { ReactElement } from "react";
import type { GalleryIconName } from "@/components/sections/gallery/galleryData";

interface IconProps {
  className?: string;
}

const STROKE = "var(--color-glow)";

function GreenhouseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 60 53"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M30 2 L58 51 H2 Z"
        stroke={STROKE}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M30 2 V51" stroke={STROKE} strokeWidth="1" strokeOpacity="0.6" />
      <path
        d="M16 51 L30 26 L44 51"
        stroke={STROKE}
        strokeWidth="1"
        strokeOpacity="0.6"
      />
    </svg>
  );
}

function TerrainIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 60 53"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="30" cy="34" r="2.6" fill={STROKE} />
      <path
        d="M20 34a10 10 0 0 1 20 0"
        stroke={STROKE}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M13 34a17 17 0 0 1 34 0"
        stroke={STROKE}
        strokeWidth="1.3"
        strokeOpacity="0.65"
        strokeLinecap="round"
      />
      <path
        d="M6 34a24 24 0 0 1 48 0"
        stroke={STROKE}
        strokeWidth="1.3"
        strokeOpacity="0.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CraneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 60 53"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path d="M15 6 V47" stroke={STROKE} strokeWidth="1.4" />
      <path d="M15 47 H35" stroke={STROKE} strokeWidth="1.4" strokeOpacity="0.6" />
      <path d="M6 12 H50" stroke={STROKE} strokeWidth="1.4" />
      <path d="M15 12 L6 12" stroke={STROKE} strokeWidth="1.4" />
      <path
        d="M42 12 V22"
        stroke={STROKE}
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      <rect
        x="37"
        y="22"
        width="10"
        height="9"
        stroke={STROKE}
        strokeWidth="1.2"
      />
    </svg>
  );
}

function SolarIcon({ className }: IconProps) {
  const cells = Array.from({ length: 4 }, (_, row) =>
    Array.from({ length: 4 }, (_, col) => ({ row, col })),
  ).flat();

  return (
    <svg
      viewBox="0 0 60 53"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {cells.map(({ row, col }) => (
        <rect
          key={`${row}-${col}`}
          x={14 + col * 8}
          y={8 + row * 8}
          width="6.5"
          height="6.5"
          stroke={STROKE}
          strokeWidth="1"
          strokeOpacity={row === 0 || col === 0 ? 1 : 0.6}
        />
      ))}
      <path d="M18 40 V47 M42 40 V47" stroke={STROKE} strokeWidth="1.2" />
    </svg>
  );
}

function PeopleIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 60 53"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="30" cy="14" r="6" stroke={STROKE} strokeWidth="1.3" />
      <circle cx="14" cy="18" r="4.5" stroke={STROKE} strokeWidth="1.1" strokeOpacity="0.7" />
      <circle cx="46" cy="18" r="4.5" stroke={STROKE} strokeWidth="1.1" strokeOpacity="0.7" />
      <path
        d="M18 47c0-8 5.4-14 12-14s12 6 12 14"
        stroke={STROKE}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M4 47c0-6.5 4.2-11 9-11"
        stroke={STROKE}
        strokeWidth="1.1"
        strokeOpacity="0.7"
        strokeLinecap="round"
      />
      <path
        d="M56 47c0-6.5-4.2-11-9-11"
        stroke={STROKE}
        strokeWidth="1.1"
        strokeOpacity="0.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

const iconMap: Record<GalleryIconName, (props: IconProps) => ReactElement> = {
  greenhouse: GreenhouseIcon,
  terrain: TerrainIcon,
  crane: CraneIcon,
  solar: SolarIcon,
  people: PeopleIcon,
};

export default function GalleryCategoryIcon({
  icon,
  className,
}: {
  icon: GalleryIconName;
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} />;
}
