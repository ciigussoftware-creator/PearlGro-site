import Container from "@/components/Container";

type CellValue =
  | { type: "check"; label: string }
  | { type: "cross"; label: string }
  | { type: "dash"; label: string };

interface Row {
  label: string;
  stocks: CellValue;
  land: CellValue;
  pearlGro: CellValue;
}

const rows: Row[] = [
  {
    label: "Physical asset ownership",
    stocks: { type: "cross", label: "No" },
    land: { type: "check", label: "Yes" },
    pearlGro: { type: "check", label: "Yes" },
  },
  {
    label: "Managed & cultivated for you",
    stocks: { type: "cross", label: "No" },
    land: { type: "cross", label: "No" },
    pearlGro: { type: "check", label: "Yes" },
  },
  {
    label: "Export market secured",
    stocks: { type: "cross", label: "No" },
    land: { type: "cross", label: "No" },
    pearlGro: { type: "check", label: "Yes" },
  },
  {
    label: "Income potential",
    stocks: { type: "dash", label: "Market-dependent" },
    land: { type: "dash", label: "None (idle land)" },
    pearlGro: {
      type: "check",
      label:
        "Yes — from crop sales, solar energy generation, and other complementary activities",
    },
  },
];

function CellIcon({ type }: { type: CellValue["type"] }) {
  if (type === "check") {
    return (
      <svg
        width="13"
        height="13"
        viewBox="0 0 16 16"
        fill="none"
        className="shrink-0 text-glow"
        aria-hidden
      >
        <path
          d="M2 8.5L6 12.5L14 3.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "cross") {
    return (
      <svg
        width="13"
        height="13"
        viewBox="0 0 16 16"
        fill="none"
        className="shrink-0 text-muted/55"
        aria-hidden
      >
        <path
          d="M3 3L13 13M13 3L3 13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 text-muted/55"
      aria-hidden
    >
      <path d="M3 8H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function Cell({ value, emphasized }: { value: CellValue; emphasized?: boolean }) {
  return (
    <div className="flex items-center gap-2 px-5 py-4">
      <CellIcon type={value.type} />
      <span
        className={
          emphasized
            ? "text-[12px] leading-[1.4] font-semibold text-text/90"
            : "text-[12px] leading-[1.4] text-muted/70"
        }
      >
        {value.label}
      </span>
    </div>
  );
}

export default function ComparisonTable() {
  return (
    <section className="bg-bg-deep py-20 lg:py-[144px]">
      <Container>
        <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
          The Comparison
        </p>
        <h2 className="pt-4 font-heading text-[clamp(32px,4.5vw,50px)] font-bold tracking-[-1.24px] text-text">
          Ownership You Can See
        </h2>

        <div className="mt-14 overflow-hidden rounded-2xl border border-text/6">
          <div className="grid grid-cols-[1.3fr_1fr_1fr_1.15fr]">
            <div className="border-b border-text/7 bg-[rgba(10,18,13,0.8)]" />
            <div className="border-b border-text/7 bg-[rgba(10,18,13,0.8)] px-5 py-6">
              <p className="font-mono text-[9px] tracking-[1.1px] text-muted/55 uppercase">
                Stocks / Mutual Funds
              </p>
            </div>
            <div className="border-b border-text/7 bg-[rgba(10,18,13,0.8)] px-5 py-6">
              <p className="font-mono text-[9px] tracking-[1.1px] text-muted/55 uppercase">
                Buying Land Alone
              </p>
            </div>
            <div className="relative border-x border-b border-glow/25 bg-[rgba(12,30,18,0.9)] px-5 py-6 shadow-[inset_0_0_33px_rgba(47,229,140,0.04)]">
              <span className="inline-flex rounded-full border border-glow/30 bg-glow/12 px-3 py-1 font-mono text-[8px] tracking-[1.2px] text-glow uppercase">
                Pearl Gro
              </span>
              <p className="pt-2 font-mono text-[10px] tracking-[1.2px] text-glow uppercase">
                Pearl Gro
              </p>
            </div>

            {rows.map((row) => (
              <RowCells key={row.label} row={row} />
            ))}

            <div />
            <div />
            <div />
            <div className="h-[3px] rounded-b-[3px] border-x border-b border-glow/25 bg-gradient-to-r from-glow/40 to-glow/15" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function RowCells({ row }: { row: Row }) {
  return (
    <>
      <div className="flex items-center border-b border-text/5 px-6 py-5">
        <span className="text-[13px] font-medium text-muted">{row.label}</span>
      </div>
      <div className="border-b border-text/5">
        <Cell value={row.stocks} />
      </div>
      <div className="border-b border-text/5">
        <Cell value={row.land} />
      </div>
      <div className="relative border-x border-b border-glow/25 bg-[rgba(12,30,18,0.9)] shadow-[inset_0_0_33px_rgba(47,229,140,0.04)]">
        <Cell value={row.pearlGro} emphasized />
      </div>
    </>
  );
}
