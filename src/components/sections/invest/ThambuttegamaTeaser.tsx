import Image from "next/image";
import Container from "@/components/Container";

export default function ThambuttegamaTeaser() {
  return (
    <section className="bg-bg-black pt-6 pb-16 lg:pt-[50px] lg:pb-[100px]">
      <Container>
        <div className="grid grid-cols-1 overflow-hidden rounded-[18px] border border-text/6 bg-[rgba(10,14,10,0.5)] sm:grid-cols-[280px_1fr]">
          <div className="relative h-[220px] w-full sm:h-full sm:min-h-[262px]">
            <Image
              src="/home/thambuttegama-aerial.jpg"
              alt="Aerial view of Pearl Gro's Thambuttegama site"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 280px, 100vw"
            />
          </div>

          <div className="flex flex-col items-start justify-center px-8 py-9 sm:px-11 sm:py-9">
            <p className="font-mono text-[10px] tracking-[1.3px] text-muted/50 uppercase">
              Secondary Site · Site Assessment Phase
            </p>
            <h3 className="pt-3.5 font-heading text-[28px] font-bold tracking-[-0.28px] text-text/65">
              Thambuttegama
            </h3>
            <p className="max-w-[520px] pt-3.5 text-[15px] leading-[1.72] text-muted/55">
              Pearl Gro&rsquo;s second project site is currently in active
              site assessment and feasibility planning. Thambuttegama
              represents the next chapter of our expanding operations - land
              size and investment details will be announced as Phase 1
              progresses.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
