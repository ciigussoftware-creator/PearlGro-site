import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const specRows = [
  { label: "Crop", value: "Your specification" },
  { label: "Volume", value: "Agreed before planting" },
  { label: "Grading", value: "To buyer standard" },
  { label: "Timeline", value: "Scheduled to demand" },
];

export default function GrownToOrder() {
  return (
    <section className="bg-light-bg py-20 lg:py-[144px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col items-start">
            <h2 className="font-heading text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-0.9px] text-ink">
              Grown to Your Requirement.
            </h2>

            <p className="max-w-[420px] pt-5 text-[15px] leading-[1.75] text-ink-muted">
              Beyond our current cultivation, Pearl Gro can grow specific
              crops to meet buyer or investor demand. Have a requirement in
              mind? Let&rsquo;s talk.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex h-[44px] items-center gap-2 rounded-full border-[1.5px] border-ink-accent px-6 text-[13px] font-semibold text-ink-accent transition-colors hover:bg-ink-accent/8"
            >
              Start a Conversation
              <Image
                src="/home/icons/arrow-right-dark.svg"
                alt=""
                width={12}
                height={12}
              />
            </Link>
          </div>

          <div className="rounded-2xl border border-ink-accent/15 bg-[rgba(246,245,240,0.95)] px-8 py-8 shadow-[0_8px_40px_rgba(13,33,24,0.08)] sm:px-9">
            <div className="flex items-center justify-between border-b border-ink-accent/10 pb-5">
              <div>
                <p className="font-mono text-[9px] tracking-[1.6px] text-label uppercase">
                  Custom Order Specification
                </p>
                <p className="pt-1.5 font-heading text-[18px] font-bold text-ink">
                  Pearl Gro Grown-to-Order
                </p>
              </div>
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-glow/25 bg-glow/10">
                <Image
                  src="/invest/icons/document.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
            </div>

            <ul className="pt-2">
              {specRows.map((row, index) => (
                <li
                  key={row.label}
                  className={`flex items-center gap-3.5 py-4 ${
                    index < specRows.length - 1
                      ? "border-b border-ink/7"
                      : ""
                  }`}
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-glow/30 bg-glow/12">
                    <Image
                      src="/products/icons/check.svg"
                      alt=""
                      width={12}
                      height={12}
                    />
                  </span>
                  <span className="font-mono text-[10px] tracking-[1.6px] text-label uppercase">
                    {row.label}
                  </span>
                  <span className="text-[10px] text-ink/40">—</span>
                  <span className="text-[14px] font-medium text-ink-accent">
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>

            <p className="border-t border-ink/7 pt-4 font-mono text-[9px] leading-[1.6] tracking-[1px] text-label/70 uppercase">
              All specifications agreed before planting begins · Pearl Gro
              management handles execution
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
