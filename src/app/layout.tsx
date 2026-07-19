import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteLoader from "@/components/SiteLoader";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pearl Gro — Greenhouse Cultivation in Sri Lanka",
    template: "%s — Pearl Gro",
  },
  description:
    "Redefining the future of agriculture in Sri Lanka with technology, expert knowledge, and management.",
  openGraph: {
    siteName: "Pearl Gro",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <SiteLoader />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
