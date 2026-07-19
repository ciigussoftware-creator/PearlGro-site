import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import StatCard from "@/components/StatCard";

const stats = [
  { value: 42.5, label: "Malsiripura Project Land", decimals: 1 },
  { value: 2, label: "Project Sites" },
  { value: 10, label: "Phase 1 Investor Slots" },
  { value: 5, label: "Phase 1 Cultivation" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-black">
      <div className="absolute inset-0">
        <Image
          src="/home/hero.png"
          alt="Pearl Gro greenhouse structure"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,11,9,0.4) 0%, rgba(7,11,9,0.15) 40%, rgba(7,11,9,0.88) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -top-24 -left-16 h-105 w-140"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(47,229,140,0.07) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
      </div>

      <Container className="relative flex flex-col items-start pt-24 pb-24 lg:pt-30 lg:pb-40">
        <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
          Sri Lanka · Controlled-Environment Agriculture
        </p>

        <h1 className="max-w-205 pt-7 font-heading text-[clamp(36px,6vw,58.9px)] leading-[1.05] font-bold tracking-[-1.18px] text-text">
          Redefining the{" "}
          <span className="text-green-2">Future of Agriculture</span> in Sri
          Lanka
        </h1>

        <p className="max-w-145 pt-7 text-[18px] leading-[1.7] text-text">
          Pearl Gro is building Sri Lanka&rsquo;s most advanced greenhouse
          cultivation project, combining controlled-environment farming,
          renewable energy, and expert agricultural management.
        </p>

        <Button href="/invest" size="lg" className="mt-12">
          Explore the Investment Opportunities
        </Button>

        <div
          aria-hidden
          className="mt-16 hidden h-12 w-px bg-linear-to-b from-glow to-transparent opacity-50 lg:block"
        />

        <div className="mt-12 w-full max-w-135 rounded-t-[20px] border border-accent bg-[rgba(10,20,16,0.62)] px-6 py-7 sm:px-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mx-auto lg:mt-0 lg:w-[540px]">
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4 sm:gap-x-0">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                decimals={stat.decimals}
                className={
                  index > 0 ? "sm:border-l sm:border-accent px-4" : "px-4"
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
