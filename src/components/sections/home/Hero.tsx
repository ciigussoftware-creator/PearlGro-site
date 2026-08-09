import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import StatCard from "@/components/StatCard";

const stats = [
  { value: 42.5, label: "Malsiripura Project Land", decimals: 1 },
  { value: 3, label: "Project Sites" },
  { value: 40, label: "All Slots on the Project" },
  { value: 5, label: "Phase 1 Cultivation" },
];

const COMMITTED_SLOTS = 6;
const AVAILABLE_SLOTS = 4;

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

      <Container className="relative flex flex-col items-start pt-24 lg:flex-row lg:items-center lg:justify-between lg:gap-x-10 lg:pt-12 lg:pb-40">
        <div className="w-full lg:min-w-0 lg:flex-1">
          <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
            Sri Lanka · Controlled-Environment Agriculture
          </p>

          <h1 className="max-w-205 pt-7 font-heading text-[clamp(36px,6vw,58.9px)] leading-[1.05] font-bold tracking-[-1.18px] text-text">
            Redefining the{" "}
            <span className="text-green-2">Future of Agriculture</span> in
            Sri Lanka
          </h1>

          <p className="max-w-145 pt-7 text-[18px] leading-[1.7] text-text">
            Pearl Gro is building Sri Lanka&rsquo;s most advanced greenhouse
            cultivation project, combining controlled-environment farming,
            renewable energy, and expert agricultural management.
          </p>

          <Button href="/invest" size="lg" className="mt-12 md:mb-10">
            Explore the Investment Opportunities
          </Button>
        </div>

        <div className="mx-auto mt-10 w-full max-w-xs shrink-0 rounded-2xl border border-accent bg-[rgba(10,20,16,0.8)] p-6 text-center lg:mx-0 lg:mt-0 lg:w-72 lg:text-left">
          <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
            Phase 1 Investment
          </p>
          <p className="mt-3 text-[14px] leading-[1.6] text-text">
            <span className="font-semibold text-green-2">6 investors</span>{" "}
            have already committed.{" "}
            <span className="font-semibold text-accent">
              4 slots remaining.
            </span>
          </p>

          <div className="mt-6 flex items-start justify-center gap-4 lg:justify-between">
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-wrap justify-center gap-1.5">
                {Array.from({ length: COMMITTED_SLOTS }).map((_, index) => (
                  <div
                    key={`committed-${index}`}
                    aria-hidden
                    className="h-4 w-4 rounded-full border border-muted bg-muted/40"
                  />
                ))}
              </div>
              <span className="font-mono text-[10px] tracking-[1.5px] text-muted uppercase">
                Committed
              </span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-wrap justify-center gap-1.5">
                {Array.from({ length: AVAILABLE_SLOTS }).map((_, index) => (
                  <div
                    key={`available-${index}`}
                    aria-hidden
                    className="h-4 w-4 animate-pulse rounded-full bg-green-2 shadow-[0_0_8px_rgba(47,229,140,0.6)]"
                  />
                ))}
              </div>
              <span className="font-mono text-[10px] tracking-[1.5px] text-muted uppercase">
                Available
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-28 w-full max-w-135 rounded-t-[20px] border border-accent bg-[rgba(10,20,16,0.62)] px-6 py-7 sm:px-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:w-135">
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
