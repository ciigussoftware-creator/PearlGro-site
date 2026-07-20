"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-text/6 bg-bg-black/80 backdrop-blur-xl">
        <Container>
          <nav aria-label="Main navigation" className="flex items-center justify-between gap-x-10 py-4">
            
            {/* Logo */}
            <Link href="/" aria-label="Pearl Gro home" className="flex shrink-0 items-center">
              <Image
                src="/brand/logo-nav.png"
                alt="Pearl Gro"
                width={91}
                height={44}
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative inline-flex items-center py-1 text-[13px] font-medium tracking-[0.26px] transition-colors hover:text-accent
                        ${isActive ? "text-accent" : "text-text"}
                      `}
                    >
                      {link.label}
                      {/* Active underline */}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-accent" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Burger button — mobile only */}
            <button
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-md text-text hover:text-accent transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="3" x2="19" y2="19" />
                  <line x1="19" y1="3" x2="3" y2="19" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="19" y2="6" />
                  <line x1="3" y1="11" x2="19" y2="11" />
                  <line x1="3" y1="16" x2="19" y2="16" />
                </svg>
              )}
            </button>

          </nav>
        </Container>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-bg-black flex flex-col pt-8 pb-10 px-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          className="self-end flex items-center justify-center w-11 h-11 text-text hover:text-accent transition-colors mb-6"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="3" x2="19" y2="19" />
            <line x1="19" y1="3" x2="3" y2="19" />
          </svg>
        </button>

        <ul className="flex flex-col gap-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center py-3 text-[15px] font-medium tracking-[0.26px] border-b border-text/10 transition-colors
                    ${isActive ? "text-accent" : "text-text hover:text-accent"}
                  `}
                >
                  {link.label}
                  {/* Active dot indicator for mobile */}
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}