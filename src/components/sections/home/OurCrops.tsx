import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

interface Crop {
  image: string;
  category: string;
  name: string;
}

const crops: Crop[] = [
  { image: "/home/crop-scotch-bonnet.jpg", category: "Spice", name: "Scotch Bonnet" },
  { image: "/home/crop-brinjal.jpg", category: "Vegetable", name: "Brinjal" },
  { image: "/home/crop-tomato.jpg", category: "Vegetable", name: "Tomato" },
  { image: "/home/crop-capsicum.jpg", category: "Vegetable", name: "Capsicum" },
  { image: "/home/crop-salad-cucumber.jpg", category: "Vegetable", name: "Salad Cucumber" },
];

export default function OurCrops() {
  return (
    <section className="bg-light-bg pt-12 pb-10 lg:pt-[54px] lg:pb-[46px]">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="max-w-[560px] font-heading text-[clamp(26px,4vw,34.27px)] leading-[1.1] font-bold tracking-[-0.69px] text-ink">
              Pearl Gro cultivates high-demand export crops
            </h2>
            <p className="pt-3 text-[16px] leading-[1.5] text-ink-muted">
              And can grow to your specification.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex shrink-0 items-center gap-2 text-[14px] font-semibold text-ink-accent transition-opacity hover:opacity-80"
          >
            View All Crops
            <Image
              src="/home/icons/arrow-right-dark.svg"
              alt=""
              width={15}
              height={15}
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-14 sm:grid-cols-3 lg:grid-cols-5">
          {crops.map((crop) => (
            <div
              key={crop.name}
              className="overflow-hidden rounded-2xl bg-card-light"
            >
              <div className="relative aspect-square w-full bg-image-bg-light">
                <Image
                  src={crop.image}
                  alt={crop.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 211px, (min-width: 640px) 33vw, 50vw"
                />
              </div>
              <div className="px-[18px] pt-4 pb-[18px]">
                <p className="font-mono text-[9px] tracking-[1.35px] text-label uppercase">
                  {crop.category}
                </p>
                <p className="pt-1.5 font-heading text-[15px] font-semibold text-ink">
                  {crop.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
