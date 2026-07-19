import Image from "next/image";
import Container from "@/components/Container";

const specs = [
  { label: "Cultivation Basis", value: "Grown to export buyer specification" },
  { label: "Heat Profile", value: "Agreed with buyer pre-planting" },
  { label: "Size Grading", value: "Export-standard grading applied" },
  { label: "Volume", value: "Volume committed before seeding" },
  { label: "Buyer Status", value: "Secured before harvest" },
];

export default function GrownToSpec() {
  return (
    <section className="bg-bg-black py-20 lg:py-[144px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
              Grown to Specification
            </p>
            <h2 className="pt-5 font-heading text-[clamp(30px,3.6vw,42px)] leading-[1.1] font-bold tracking-[-1.05px] text-text">
              Tell Us What You Need. We Grow It.
            </h2>
            <p className="max-w-[500px] pt-6 text-[15px] leading-[1.75] text-muted">
              Pearl Gro cultivates to buyer and export specification rather
              than growing first and searching for buyers afterwards. Crop
              selection, volume, heat profile, size grading — all agreed with
              the export buyer before a single seed is planted. This inverts
              the traditional agricultural risk model entirely.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-glow/50" />
              <span className="font-mono text-[9px] tracking-[1.4px] text-glow/60 uppercase">
                Demand-led cultivation
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-glow/22 bg-[rgba(10,18,13,0.8)]">
            <div className="relative h-[165px] w-full">
              <Image
                src="/why-pearl-gro/scotch-bonnet.jpg"
                alt="Scotch bonnet chili macro close-up"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(10,18,13,0.9) 100%)",
                }}
              />
              <span className="absolute top-3 left-4 rounded-full border border-glow/30 bg-glow/15 px-3 py-1 font-mono text-[8px] tracking-[1.2px] text-glow uppercase">
                Example Order
              </span>
            </div>

            <div className="px-6 pt-6 pb-7">
              <h3 className="font-heading text-[18px] font-bold tracking-[-0.18px] text-text">
                Scotch Bonnet
              </h3>

              <dl className="mt-5">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between border-b border-text/6 py-3 last:border-b-0"
                  >
                    <dt className="font-mono text-[9px] tracking-[1px] text-muted/50 uppercase">
                      {spec.label}
                    </dt>
                    <dd className="text-[12px] text-muted">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
