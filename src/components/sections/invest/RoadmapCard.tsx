import Button from "@/components/Button";
import Image from "next/image";

interface RoadmapCardProps {
  phaseNumber: string;
  phaseName: string;
  status: "open" | "soon";
  amount: string;
  description: string;
  ctaHref?: string;
}

export default function RoadmapCard({
  phaseNumber,
  phaseName,
  status,
  amount,
  description,
  ctaHref,
}: RoadmapCardProps) {
  const isOpen = status === "open";

  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex size-18 items-center justify-center rounded-full ${
          isOpen
            ? "border-2 border-glow bg-bg-deep shadow-[0_0_16px_rgba(47,229,140,0.27)]"
            : "border border-muted/15 bg-[rgba(8,12,9,0.8)] opacity-45"
        }`}
      >
        {isOpen ? (
          <span className="font-mono text-[20px] text-glow">
            {phaseNumber}
          </span>
        ) : (
          <Image
            src="/invest/icons/lock.svg"
            alt=""
            width={18}
            height={18}
          />
        )}
      </div>

      <div
        className={`mt-7 flex w-full flex-col items-start rounded-[18px] border-x border-b border-t-2 px-6 pt-[30px] pb-[29px] transition-transform ${
          isOpen
            ? "border-glow/28 bg-[rgba(12,22,16,0.8)] hover:-translate-y-2 hover:shadow-[0_0_24px_rgba(47,229,140,0.16)]"
            : "border-muted/8 bg-[rgba(8,12,9,0.45)] opacity-40"
        }`}
      >
        <span
          className={`flex items-center gap-1.5 rounded-full border px-[13px] py-[5px] font-mono text-[9px] tracking-[1.26px] uppercase ${
            isOpen
              ? "border-glow/30 bg-glow/15 text-glow"
              : "border-muted/10 bg-muted/8 text-muted/40"
          }`}
        >
          {isOpen && (
            <span className="size-1.5 rounded-full bg-glow opacity-55 shadow-[0_0_4px_#2fe58c]" />
          )}
          {isOpen ? "Now Open" : "Coming Soon"}
        </span>

        <h3
          className={`pt-4 font-heading text-[20px] font-bold ${
            isOpen ? "text-text" : "text-muted/35"
          }`}
        >
          {phaseName}
        </h3>

        <p
          className={`pt-1.5 font-mono text-[22px] font-light ${
            isOpen ? "text-glow" : "text-muted/25"
          }`}
        >
          {amount}
        </p>

        <p
          className={`pt-3 text-[13px] leading-[1.65] ${
            isOpen ? "text-muted" : "text-muted/30"
          }`}
        >
          {description}
        </p>

        {isOpen && ctaHref && (
          <Button href={ctaHref} size="md" className="mt-5">
            Register Interest
          </Button>
        )}
      </div>
    </div>
  );
}
