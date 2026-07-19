import Link from "next/link";
import Container from "@/components/Container";

export default function GalleryProgressNote() {
  return (
    <section className="border-t border-glow/7 bg-bg-black py-12">
      <Container className="flex flex-col items-center gap-3 text-center">
        <p className="max-w-[640px] text-[15px] leading-[1.7] text-muted">
          Construction and cultivation are underway at Malsiripura — this
          gallery grows with the project.
        </p>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center gap-1.5 text-[14px] font-medium text-accent transition-colors hover:text-accent-hover"
        >
          Follow the project
          <span aria-hidden>→</span>
        </Link>
      </Container>
    </section>
  );
}
