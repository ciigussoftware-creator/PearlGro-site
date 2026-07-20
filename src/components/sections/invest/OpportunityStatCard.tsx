import Image from "next/image";
import type { ReactNode } from "react";

interface OpportunityStatCardProps {
  label: string;
  value: string;
  variant?: "default" | "gold" | "muted";
  icon?: string;
  children: ReactNode;
}

const cardVariantClasses: Record<
  NonNullable<OpportunityStatCardProps["variant"]>,
  string
> = {
  default: "border-t-glow/16 border-glow/16 bg-[rgba(12,22,16,0.7)]",
  gold: "border-t-gold/35 border-gold/35 bg-[rgba(16,13,4,0.6)]",
  muted: "border-t-text/7 border-text/7 bg-[rgba(10,18,14,0.4)] opacity-75",
};

const valueVariantClasses: Record<
  NonNullable<OpportunityStatCardProps["variant"]>,
  string
> = {
  default: "text-glow",
  gold: "text-gold",
  muted: "text-muted/50",
};

const labelVariantClasses: Record<
  NonNullable<OpportunityStatCardProps["variant"]>,
  string
> = {
  default: "text-muted",
  gold: "text-muted",
  muted: "text-muted/55",
};

export default function OpportunityStatCard({
  label,
  value,
  variant = "default",
  icon,
  children,
}: OpportunityStatCardProps) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-[18px] border-x border-b border-t-2 px-6 pt-6 pb-[33px] ${cardVariantClasses[variant]}`}
    >
      <div className="flex items-start justify-between gap-2">
        <p
          className={`font-mono text-[10px] tracking-[1.4px] uppercase ${labelVariantClasses[variant]}`}
        >
          {label}
        </p>
        {icon && (
          <Image
            src={icon}
            alt=""
            width={16}
            height={16}
            className="shrink-0 opacity-60"
          />
        )}
      </div>

      <p
        className={`font-mono text-[29px] leading-[1] font-light tracking-[-0.59px] ${valueVariantClasses[variant]}`}
      >
        {value}
      </p>

      {children}
    </div>
  );
}
