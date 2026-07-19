import Image from "next/image";
import Container from "@/components/Container";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-bg-black">
      <div className="absolute inset-0">
        <Image
          src="/home/thambuttegama-aerial.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(7,11,9,0.95) 8%, rgba(7,11,9,0.65) 46%, rgba(7,11,9,0.3) 92%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,11,9,0) 50%, rgba(7,11,9,0.9) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -top-16 -left-10 h-[360px] w-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(47,229,140,0.07) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
      </div>

      <Container className="relative flex flex-col items-start py-24 lg:py-[130px]">
        <p className="flex items-center gap-2.5 font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
          <span className="size-1.5 rounded-full bg-glow" aria-hidden />
          Documenting · Malsiripura
        </p>

        <h1 className="max-w-[620px] pt-5 font-heading text-[clamp(40px,6vw,80px)] leading-[1.02] font-bold tracking-tight text-text">
          See Pearl Gro Take Shape.
        </h1>

        <p className="max-w-[500px] pt-6 text-[17px] leading-[1.7] text-muted">
          A visual record of the project as it grows — new photography and
          footage are added as construction and cultivation progress.
        </p>
      </Container>
    </section>
  );
}
