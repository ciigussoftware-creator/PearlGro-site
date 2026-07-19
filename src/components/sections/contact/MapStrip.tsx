import Image from "next/image";

const ZOOM = 12;
const CENTER_TILE_X = 2962;
const CENTER_TILE_Y = 1956;
const COLS = 7;
const ROWS = 3;

function tileUrl(x: number, y: number) {
  return `https://a.basemaps.cartocdn.com/dark_all/${ZOOM}/${x}/${y}.png`;
}

export default function MapStrip() {
  const colOffset = Math.floor(COLS / 2);
  const rowOffset = Math.floor(ROWS / 2);

  return (
    <section className="relative h-[220px] w-full overflow-hidden border-t border-glow/20 bg-bg-black sm:h-[260px] lg:h-[297px]">
      <div
        className="absolute top-1/2 left-1/2 grid -translate-x-1/2 -translate-y-1/2 grid-cols-7 grid-rows-3"
        style={{ width: COLS * 256, height: ROWS * 256 }}
      >
        {Array.from({ length: ROWS }).map((_, row) =>
          Array.from({ length: COLS }).map((_, col) => (
            <Image
              key={`${row}-${col}`}
              src={tileUrl(
                CENTER_TILE_X - colOffset + col,
                CENTER_TILE_Y - rowOffset + row,
              )}
              alt=""
              width={256}
              height={256}
              unoptimized
            />
          )),
        )}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,20,14,0.35) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 80%, rgba(7,11,9,0.7) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,11,9,0.45) 0%, rgba(0,0,0,0) 12%, rgba(0,0,0,0) 88%, rgba(7,11,9,0.45) 100%)",
        }}
      />

      <div className="absolute top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-glow/30 bg-[rgba(7,11,9,0.75)] px-4 py-2 shadow-[0_0_16px_rgba(47,229,140,0.1)]">
        <span className="size-1.5 rounded-full bg-glow shadow-[0_0_6px_#2fe58c]" />
        <span className="font-mono text-[11px] tracking-[1.98px] text-glow uppercase">
          Malsiripura Project Site
        </span>
      </div>

      <p className="absolute right-3 bottom-1.5 font-mono text-[9px] text-muted/40">
        © CARTO, © OpenStreetMap contributors
      </p>
    </section>
  );
}
