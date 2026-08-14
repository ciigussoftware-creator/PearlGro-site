import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import CropCarousel, {
  type Crop,
} from "@/components/sections/home/CropCarousel";

const crops: Crop[] = [
  { image: "/home/crop-scotch-bonnet.jpg", category: "Spice", name: "Scotch Bonnet" },
  { image: "/home/crop-brinjal.jpg", category: "Vegetable", name: "Brinjal" },
  { image: "/home/crop-tomato.jpg", category: "Vegetable", name: "Tomato" },
  { image: "/home/crop-capsicum.jpg", category: "Vegetable", name: "Capsicum" },
  { image: "/home/crop-salad-cucumber.jpg", category: "Vegetable", name: "Salad Cucumber" },
  { image: "/home/crop-cherry-tomato.jpg", category: "Vegetable", name: "Cherry Tomato" },
  { image: "/home/crop-lettuce.jpg", category: "Vegetable", name: "Lettuce" },
  { image: "/home/crop-green-beans.jpg", category: "Vegetable", name: "Green Beans" },
  { image: "/home/crop-strawberry.jpg", category: "Fruit", name: "Strawberry" },
  { image: "/home/crop-cantaloupe.jpg", category: "Fruit", name: "Cantaloupe" },
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

        <CropCarousel crops={crops} />
      </Container>
    </section>
  );
}