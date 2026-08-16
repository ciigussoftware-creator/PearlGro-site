import Link from "next/link";
import type { Metadata } from "next";
import Button from "@/components/Button";
import ErrorHero from "@/components/ErrorHero";

export const metadata: Metadata = {
  title: "In Development",
  description:
    "This page is currently under development. Check back soon for updates from Pearl Gro.",
};

const wayfindingLinks = [
  { label: "Home", href: "/" },
  { label: "The Investment", href: "/invest" },
  { label: "What We Grow", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export default function InDevelopmentPage() {
  return (
    <ErrorHero
      errorCode="🌱"
      eyebrow="Coming Soon — Under Development"
      heading="We're still planting the seeds."
      description="This page is currently being built. We're working hard to bring you something great — check back soon or explore what's already live."
      iconSrc="/icons/sprout-icon.svg"
      actions={
        <>
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="ghost">
            Get Notified
          </Button>
        </>
      }
      wayfinding={
        <nav
          aria-label="Suggested pages"
          className="flex flex-wrap items-center justify-center gap-5"
        >
          {wayfindingLinks.map((link, index) => (
            <span key={link.href} className="flex items-center gap-5">
              {index > 0 && (
                <span aria-hidden className="h-3.5 w-px bg-muted/20" />
              )}
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[1.8px] text-muted/50 uppercase transition-colors hover:text-muted"
              >
                {link.label}
                <span aria-hidden>→</span>
              </Link>
            </span>
          ))}
        </nav>
      }
    />
  );
}
