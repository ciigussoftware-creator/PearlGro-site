import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const links = [
  {
    eyebrow: "Investor?",
    label: "See the Phase 1 opportunity",
    href: "/invest",
  },
  {
    eyebrow: "Buyer?",
    label: "See what we grow",
    href: "/products",
  },
  {
    eyebrow: "Curious?",
    label: "Learn how it works",
    href: "/why-pearl-gro",
  },
];

export default function CrossLinks() {
  return (
    <section className="border-t border-glow/7 bg-bg-black py-10">
      <Container className="flex flex-col gap-4 sm:flex-row">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex min-h-[52px] flex-1 flex-col gap-1.5 rounded-2xl border border-glow/35 bg-glow/[0.06] px-6 py-3.5 transition-colors hover:border-glow/70 hover:bg-glow/10 sm:flex-row sm:items-center sm:gap-4 sm:rounded-full sm:py-3"
          >
            <span className="shrink-0 font-mono text-[11px] tracking-[1.98px] text-muted/60 uppercase">
              {link.eyebrow}
            </span>
            <span className="hidden h-3.5 w-px shrink-0 bg-muted/20 sm:block" />
            <span className="flex items-center gap-3">
              <span className="text-[14px] whitespace-nowrap text-muted transition-colors group-hover:text-text">
                {link.label}
              </span>
              <Image
                src="/home/icons/arrow-right.svg"
                alt=""
                width={13}
                height={13}
                className="ml-auto shrink-0 transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        ))}
      </Container>
    </section>
  );
}
