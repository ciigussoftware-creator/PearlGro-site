import Image from "next/image";
import Container from "@/components/Container";
import GridCropCard from "@/components/sections/products/GridCropCard";

const gridCrops = [
  {
    image: "/products/brinjal.jpg",
    glow: "rgba(140,70,170,0.14)",
    category: "Vegetable",
    name: "Brinjal",
    description:
      "A staple export vegetable, cultivated for consistent size and skin quality.",
  },
  {
    image: "/products/tomato.jpg",
    glow: "rgba(200,70,50,0.12)",
    category: "Vegetable",
    name: "Tomato",
    description:
      "Grown for uniform grading and shelf life demanded by export buyers.",
  },
  {
    image: "/products/capsicum.jpg",
    glow: "rgba(60,170,80,0.12)",
    category: "Vegetable",
    name: "Capsicum",
    description:
      "Cultivated for color consistency and thickness across export grades.",
  },
  {
    image: "/products/salad-cucumber.jpg",
    glow: "rgba(60,150,90,0.1)",
    category: "Vegetable",
    name: "Salad Cucumber",
    description:
      "Greenhouse-grown for straightness, crunch, and cosmetic-grade finish.",
  },
];

export default function CropShowcase() {
  return (
    <section className="bg-bg-deep py-20 lg:py-[144px]">
      <Container>
        <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
          The Phase 1 Lineup
        </p>
        <h2 className="pt-4 font-heading text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-0.9px] text-text">
          Five crops. One controlled environment.
        </h2>

        <div className="mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border border-glow/16 lg:grid-cols-2">
          <div className="relative order-1 min-h-[320px] w-full bg-[#0a0502] lg:order-2">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 55% 40%, rgba(200,60,30,0.16) 0%, rgba(0,0,0,0) 70%)",
              }}
            />
            <Image
              src="/products/scotch-bonnet.jpg"
              alt="Scotch Bonnet peppers — Pearl Gro Phase 1 flagship crop"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0) 60%, rgba(7,11,9,0.55) 100%)",
              }}
            />
          </div>

          <div className="order-2 flex flex-col justify-between bg-[rgba(10,20,16,0.95)] px-8 py-9 sm:px-10 sm:py-10 lg:order-1">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-glow/28 bg-glow/10 px-3 py-1 font-mono text-[10px] tracking-[1.6px] text-glow uppercase">
                <Image
                  src="/products/icons/flame.svg"
                  alt=""
                  width={10}
                  height={10}
                />
                Spice
              </span>

              <h3 className="pt-4 font-heading text-[clamp(30px,3.6vw,44px)] font-bold tracking-[-1px] text-text">
                Scotch Bonnet
              </h3>

              <p className="max-w-[380px] pt-4 text-[15px] leading-[1.7] text-muted">
                Grown for the export spice and hot sauce market — prized for
                its distinctive heat, fruity aroma, and consistent capsaicin
                content.
              </p>

              <div className="flex items-center gap-2.5 pt-8">
                <div className="flex items-center gap-1">
                  <Image src="/products/icons/flame.svg" alt="" width={12} height={12} />
                  <Image src="/products/icons/flame.svg" alt="" width={12} height={12} />
                  <Image src="/products/icons/flame.svg" alt="" width={12} height={12} />
                </div>
                <span className="font-mono text-[9px] tracking-[1.4px] text-glow/60 uppercase">
                  High heat variety
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-glow/12 pt-6">
              <span className="font-mono text-[9px] tracking-[1.6px] text-muted uppercase">
                Export Market
              </span>
              <span className="h-3.5 w-px bg-glow/20" />
              <span className="font-mono text-[9px] tracking-[1.6px] text-muted uppercase">
                Hot Sauce &amp; Spice
              </span>
              <span className="h-3.5 w-px bg-glow/20" />
              <span className="font-mono text-[9px] tracking-[1.6px] text-muted uppercase">
                Phase 1
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {gridCrops.map((crop) => (
            <GridCropCard key={crop.name} {...crop} />
          ))}
        </div>
      </Container>
    </section>
  );
}
