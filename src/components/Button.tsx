import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  size?: "md" | "lg";
  variant?: "solid" | "ghost";
  className?: string;
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "h-[45px] px-6 text-[14px]",
  lg: "px-10 py-4 text-[17px]",
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  solid:
    "bg-accent font-semibold text-accent-ink shadow-[0_0_8px_rgba(47,229,140,0.2)] hover:bg-accent-hover",
  ghost:
    "border-[1.5px] border-text/32 font-medium text-text hover:border-text/50",
};

export default function Button({
  href,
  children,
  size = "md",
  variant = "solid",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full text-center transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
