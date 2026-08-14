import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import type { NavLink } from "@/types";

const footerNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Invest", href: "/invest" },
  { label: "Why Pearl Gro", href: "/why-pearl-gro" },
  { label: "Products", href: "/products" },
  { label: "Education", href: "/education" },
  { label: "Gallery", href: "/gallery" },
];

const socialLinks = [
  { label: "Twitter", icon: "/icons/twitter.svg" },
  { label: "Instagram", icon: "/icons/instagram.svg" },
  { label: "LinkedIn", icon: "/icons/linkedin.svg" },
];

const legalLinks = ["Privacy Policy", "Terms of Use", "Investment Disclaimer"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-glow/10 bg-bg-black">
      <p
        aria-hidden
        className="pointer-events-none absolute bottom-[-0.35em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-heading text-[clamp(64px,10vw,128px)] font-bold tracking-[-0.03em] text-text/4"
      >
        PEARL GRO
      </p>
      <Container className="relative pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/logo-footer.png"
              alt="Pearl Gro"
              width={149}
              height={65}
            />
            <p className="max-w-65 pt-4 text-[14px] leading-[1.7] text-muted">
              Redefining the future of agriculture in Sri Lanka with technology,
              expert knowledge, and management.
            </p>
            <ul className="flex gap-3 pt-7">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href="#"
                    aria-label={social.label}
                    className="flex size-11 items-center justify-center rounded-lg border border-text/10 transition-colors hover:border-accent/40"
                  >
                    <Image
                      src={social.icon}
                      alt=""
                      width={14}
                      height={14}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted">
              Navigation
            </h2>
            <ul className="flex flex-col gap-3 pt-5">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] leading-5.25 text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted">
              Contact
            </h2>
            <ul className="flex flex-col gap-4 pt-5">
              <li className="flex items-start gap-2.5">
                <Image
                  src="/icons/phone.svg"
                  alt=""
                  width={13}
                  height={13}
                  className="mt-0.5"
                />
                <span className="text-[14px] leading-5.25 text-muted">
                  +164 720 35541
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Image
                  src="/icons/email.svg"
                  alt=""
                  width={13}
                  height={13}
                  className="mt-0.5"
                />
                <a
                  href="mailto:invest@pearlgro.lk"
                  className="text-[14px] leading-5.25 text-muted transition-colors hover:text-text"
                >
                  info@pearlgro@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Image
                  src="/icons/location.svg"
                  alt=""
                  width={13}
                  height={13}
                  className="mt-0.5"
                />
                <span className="text-[14px] leading-[1.6] text-muted">
                  Malsiripura · Thambuttegama
                  <br />
                  Sri Lanka
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted">
              Invest
            </h2>
            <p className="py-5 text-[14px] leading-[1.7] text-muted">
              Phase 1 has 10 investor slots. Register your interest and a
              representative will be in touch.
            </p>
            <Button href="/invest">Register Interest</Button>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-text/6 py-8 sm:flex-row">
          <p className="font-mono text-[11px] leading-[16.5px] text-muted/50">
            © 2025 Pearl Gro. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="font-mono text-[11px] leading-[16.5px] text-muted/50 transition-colors hover:text-muted"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
