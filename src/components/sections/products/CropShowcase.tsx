import Container from "@/components/Container";
import CropGallery from "@/components/sections/products/CropGallery";

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

        <CropGallery />
      </Container>
    </section>
  );
}
