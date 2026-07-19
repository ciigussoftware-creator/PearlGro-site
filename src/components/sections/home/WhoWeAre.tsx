import Image from "next/image";
import Container from "@/components/Container";

const pillars = ["Management", "Technology", "Knowledge"];

export default function WhoWeAre() {
  return (
    <section className="bg-light-bg py-16 lg:py-[82px]">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="flex flex-col items-start lg:self-center">
            <h2 className="font-heading text-[clamp(32px,5vw,50px)] font-bold tracking-[1.98px] text-label uppercase">
              Who We Are
            </h2>

            <p className="pt-10 text-[21.42px] leading-[1.55] text-ink">
              Pearl Gro is a greenhouse cultivation venture built on three
              uncompromising pillars:{" "}
              <span className="font-semibold text-ink-accent">
                Management, Technology, and Knowledge.
              </span>{" "}
              We develop end-to-end agricultural infrastructure - from land
              preparation and greenhouse construction to cultivation
              management and export market access - in Sri Lanka&rsquo;s
              most productive agricultural regions.
            </p>

            <p className="max-w-[520px] pt-6 text-[17px] leading-[1.75] text-ink-muted">
              Our Malsiripura project represents the first phase of a
              long-term vision: a network of controlled-environment farms
              producing consistent, export-grade produce year-round, backed
              by renewable energy and precision agronomy.
            </p>

            <ul className="flex flex-wrap gap-x-10 gap-y-4 pt-12">
              {pillars.map((pillar) => (
                <li key={pillar} className="flex flex-col items-start gap-1.5">
                  <span className="h-0.5 w-8 rounded-full bg-ink-accent" />
                  <span className="font-mono text-[16px] tracking-[1.32px] text-ink-muted uppercase">
                    {pillar}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:self-center">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-bg-deep">
              <Image
                src="/home/who-we-are.jpg"
                alt="Rows of crops growing under greenhouse lights"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
            </div>

            <div className="absolute bottom-8 left-4 w-[220px] rounded-2xl border border-accent bg-bg-deep px-7 py-5 sm:left-[-40px]">
              <p className="font-mono text-[32px] leading-[32px] font-light text-green-off">
                100%
              </p>
              <p className="pt-1.5 text-[10px] tracking-[1.4px] text-muted uppercase">
                Controlled Environment
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
