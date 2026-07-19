import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Invest", href: "/invest" },
  { label: "Why Pearl Gro", href: "/why-pearl-gro" },
  { label: "Products", href: "/products" },
  { label: "Education", href: "/education" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <header className="w-full pt-6 pb-1">
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center justify-center gap-x-[38px] gap-y-2"
        >
          <Link href="/" aria-label="Pearl Gro home" className="flex items-center">
            <Image
              src="/brand/logo-nav.png"
              alt="Pearl Gro"
              width={91}
              height={44}
              priority
            />
          </Link>
          <ul className="flex flex-wrap items-center justify-center gap-x-[36px] gap-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center text-[13px] font-medium tracking-[0.26px] text-text transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
