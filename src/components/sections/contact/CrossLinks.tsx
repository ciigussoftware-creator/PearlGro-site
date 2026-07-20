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
    <section className="border-t border-glow/7 bg-bg-black">
      <Container className="grid grid-cols-1 sm:grid-cols-3">
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={`group flex min-h-[44px] items-center gap-4 py-6 ${
              index > 0 ? "sm:border-l sm:border-glow/8 sm:pl-8" : ""
            }`}
          >
            <span className="w-[90px] shrink-0 font-mono text-[11px] tracking-[1.98px] text-muted/50 uppercase sm:w-auto">
              {link.eyebrow}
            </span>
            <span className="h-3.5 w-px bg-muted/20" />
            <span className="text-[14px] text-muted transition-colors group-hover:text-text">
              {link.label}
            </span>
            <Image
              src="/home/icons/arrow-right.svg"
              alt=""
              width={13}
              height={13}
              className="ml-auto transition-transform group-hover:translate-x-1"
            />
          </Link>
        ))}
      </Container>
    </section>
  );
}
