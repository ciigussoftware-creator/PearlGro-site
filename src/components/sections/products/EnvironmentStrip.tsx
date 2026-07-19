import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export default function EnvironmentStrip() {
  return (
    <section className="bg-bg-black py-10 lg:py-[66px]">
      <Container>
        <div className="relative isolate min-h-[340px] overflow-hidden rounded-2xl sm:min-h-[280px]">
          <Image
            src="/products/environment-strip.jpg"
            alt="Greenhouse rows of crops under controlled cultivation"
            fill
            className="-z-10 object-cover"
            sizes="(min-width: 1024px) 1120px, 100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(120deg, rgba(7,11,9,0.92) 8%, rgba(7,11,9,0.5) 54%, rgba(7,11,9,0.1) 94%)",
            }}
          />
          <span
            aria-hidden
            className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-glow to-transparent"
          />

          <div className="max-w-[520px] px-9 py-12 sm:px-12 sm:py-14">
            <h3 className="font-heading text-[clamp(24px,2.8vw,34px)] font-bold tracking-[-0.5px] text-text">
              Every crop above is grown in a controlled environment.
            </h3>

            <p className="max-w-[420px] pt-4 text-[14px] leading-[1.7] text-muted">
              Climate, irrigation, and light are managed for consistency —
              independent of the weather outside.
            </p>

            <Link
              href="/why-pearl-gro"
              className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-glow transition-opacity hover:opacity-80"
            >
              Learn how it works
              <Image
                src="/home/icons/arrow-right.svg"
                alt=""
                width={12}
                height={12}
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
