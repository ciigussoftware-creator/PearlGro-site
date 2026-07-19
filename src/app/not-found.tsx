import Link from "next/link";
import type { Metadata } from "next";
import Button from "@/components/Button";
import ErrorHero from "@/components/ErrorHero";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const wayfindingLinks = [
  { label: "The Investment", href: "/invest" },
  { label: "What We Grow", href: "/products" },
  { label: "Learn", href: "/education" },
];

export default function NotFound() {
  return (
    <ErrorHero
      errorCode="404"
      eyebrow="Error 404 — Page Not Found"
      heading="This field hasn't been planted yet."
      description="The page you're looking for doesn't exist or may have moved. Let's get you back to solid ground."
      iconSrc="/icons/sprout-icon.svg"
      actions={
        <>
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="ghost">
            Contact Us
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
