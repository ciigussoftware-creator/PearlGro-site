import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export default function SoftClosing() {
  return (
    <section className="bg-bg-deep py-20 lg:py-[100px]">
      <Container className="flex flex-col items-center gap-3 text-center">
        <p className="max-w-[400px] font-heading text-[23px] leading-[1.55] text-muted">
          Curious about Pearl Gro&rsquo;s own approach?
        </p>
        <Link
          href="/why-pearl-gro"
          className="inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-semibold text-glow transition-opacity hover:opacity-80"
        >
          See Why Pearl Gro
          <Image
            src="/home/icons/arrow-right.svg"
            alt=""
            width={13}
            height={13}
          />
        </Link>
      </Container>
    </section>
  );
}
