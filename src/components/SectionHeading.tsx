import type { ReactNode } from "react";

interface SectionHeadingProps {
  number: string;
  eyebrow: string;
  heading?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  number,
  eyebrow,
  heading,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="flex items-end gap-4">
        <p
          aria-hidden
          className="select-none font-heading text-[64px] leading-[0.85] font-bold tracking-[-2.4px] text-glow/5 sm:text-[80px] lg:text-[96px]"
        >
          {number}
        </p>
        <p className="pb-2 font-mono text-[8px] tracking-[1.5px] text-muted uppercase">
          {eyebrow}
        </p>
      </div>
      {heading && (
        <h2 className="pt-2 font-heading text-[clamp(28px,3.6vw,36px)] leading-[1.15] font-bold tracking-[-0.8px] text-text">
          {heading}
        </h2>
      )}
    </div>
  );
}
