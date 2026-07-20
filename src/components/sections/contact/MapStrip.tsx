import Container from "@/components/Container";

const SITE_LAT = 7.724140630654122;
const SITE_LNG = 80.49320171534256;

const MAP_EMBED_SRC = `https://www.google.com/maps?q=${SITE_LAT},${SITE_LNG}&z=15&output=embed`;
const MAP_LINK_HREF = `https://www.google.com/maps?q=${SITE_LAT},${SITE_LNG}`;

export default function MapStrip() {
  return (
    <section className="border-t border-glow/20 bg-bg-black py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl sm:h-[260px] lg:h-[297px]">
          <iframe
            src={MAP_EMBED_SRC}
            title="Map showing the Malsiripura Project Site location"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            href={MAP_LINK_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Malsiripura Project Site location in Google Maps"
            className="absolute top-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-glow/30 bg-[rgba(7,11,9,0.75)] px-4 py-2 shadow-[0_0_16px_rgba(47,229,140,0.1)] transition-colors hover:border-glow/50"
          >
            <span className="size-1.5 rounded-full bg-glow shadow-[0_0_6px_#2fe58c]" />
            <span className="font-mono text-[11px] tracking-[1.98px] text-glow uppercase">
              Malsiripura Project Site
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
