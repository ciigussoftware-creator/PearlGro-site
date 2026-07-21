import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const contentsLinks = [
  { label: "Technologies", href: "#technologies" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Rainwater", href: "#rainwater" },
  { label: "Solar", href: "#solar" },
  { label: "Seed to Shelf", href: "#seed-to-shelf" },
];

export default function EducationHero() {
  return (
    <section className="relative overflow-hidden bg-bg-black">
      <div className="absolute inset-0">
        <Image
          src="/education/hero-greenhouse.jpg"
          alt="Rows of crops inside a Pearl Gro controlled-environment greenhouse"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(114deg, rgba(7,11,9,0.92) 6%, rgba(7,11,9,0.55) 50%, rgba(7,11,9,0.15) 94%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(7,11,9,0.95) 100%)",
          }}
        />
      </div>

      <Container className="relative flex flex-col items-start py-20 lg:py-[130px]">
        <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
          Learn · Greenhouse Agriculture
        </p>
        <h1 className="max-w-[820px] pt-6 font-heading text-[clamp(36px,6vw,60px)] leading-[1.05] font-bold tracking-[-1.6px] text-text">
          Understanding Modern Greenhouse Agriculture
        </h1>
        <p className="max-w-[600px] pt-6 text-[16px] leading-[1.7] text-muted">
          An inside look at the technology and thinking behind Pearl
          Gro&rsquo;s cultivation model - for students, researchers, and the
          curious.
        </p>

        <nav
          aria-label="Education page sections"
          className="mt-11 inline-flex max-w-full flex-wrap items-center gap-x-1 gap-y-2 rounded-2xl border border-glow/15 bg-bg-black/50 px-5 py-2 lg:rounded-full"
        >
          {contentsLinks.map((link, index) => (
            <span key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className="inline-flex min-h-[44px] items-center font-mono text-[10px] tracking-[1.3px] text-muted uppercase transition-colors hover:text-glow"
              >
                {link.label}
              </Link>
              {index < contentsLinks.length - 1 && (
                <span
                  aria-hidden
                  className="mx-4 h-[10px] w-px bg-glow/20"
                />
              )}
            </span>
          ))}
        </nav>
      </Container>
    </section>
  );
}
