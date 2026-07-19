import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  size?: "md" | "lg";
  className?: string;
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "h-[45px] px-6 text-[14px]",
  lg: "px-10 py-4 text-[17px]",
};

export default function Button({
  href,
  children,
  size = "md",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-accent text-center font-semibold text-accent-ink shadow-[0_0_8px_rgba(47,229,140,0.2)] transition-colors hover:bg-accent-hover ${sizeClasses[size]} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
