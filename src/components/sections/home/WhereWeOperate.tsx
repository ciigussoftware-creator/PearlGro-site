import Image from "next/image";
import Container from "@/components/Container";

interface Location {
  image: string;
  badge: string;
  featured: boolean;
  place: string;
  name: string;
  stat: string;
  statLabel?: string;
  description: string;
}

const locations: Location[] = [
  {
    image: "/home/malsiripura-aerial.jpg",
    badge: "Phase 1 in Development",
    featured: true,
    place: "Malsiripura, Sri Lanka",
    name: "Malsiripura",
    stat: "42.5",
    statLabel: "Acres",
    description:
      "10 acres under Phase 1 cultivation · 5 export crops · Full greenhouse infrastructure and renewable energy systems in development.",
  },
  {
    image: "/home/thambuttegama-aerial.jpg",
    badge: "Site Assessment",
    featured: false,
    place: "Thambuttegama, Sri Lanka",
    name: "Thambuttegama",
    stat: "TBA",
    description:
      "Site assessment underway. Details to be announced as the project progresses.",
  },
];

export default function WhereWeOperate() {
  return (
    <section className="bg-bg-deep py-16 lg:py-16">
      <Container>
        <h2 className="font-heading text-[clamp(28px,4vw,37.5px)] font-bold tracking-[-0.75px] text-text">
          Where We Operate
        </h2>

        <div className="grid grid-cols-1 gap-6 pt-14 lg:grid-cols-[639fr_457fr]">
          {locations.map((location) => (
            <div
              key={location.name}
              className={`overflow-hidden rounded-[20px] border bg-[rgba(15,28,22,0.6)] ${
                location.featured
                  ? "border-glow/28"
                  : "border-text/[0.06]"
              }`}
            >
              <div className="relative h-[240px] w-full bg-bg-deep">
                <Image
                  src={location.image}
                  alt={`${location.name} project site aerial view`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 640px, 100vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(10,20,16,0.8) 100%)",
                  }}
                />
                <div
                  className={`absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border px-4 py-[7px] ${
                    location.featured
                      ? "border-glow/40 bg-glow/20"
                      : "border-text/15 bg-text/12"
                  }`}
                >
                  {location.featured && (
                    <span className="size-1.5 rounded-sm bg-glow opacity-54 shadow-[0_0_6px_#2fe58c]" />
                  )}
                  <span
                    className={`font-mono text-[10px] tracking-[1.4px] uppercase ${
                      location.featured ? "text-glow" : "text-muted"
                    }`}
                  >
                    {location.badge}
                  </span>
                </div>
              </div>

              <div className="px-6 py-7 sm:px-9 sm:py-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/home/icons/location-pin.svg"
                        alt=""
                        width={14}
                        height={14}
                      />
                      <span className="font-mono text-[11px] tracking-[1.1px] text-muted uppercase">
                        {location.place}
                      </span>
                    </div>
                    <p className="pt-1.5 font-heading text-[28px] leading-[1.5] font-bold tracking-[-0.28px] text-text">
                      {location.name}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end">
                    <p
                      className={`font-mono text-[42px] leading-[1] font-light tracking-[-0.84px] ${
                        location.featured ? "text-green-2" : "text-muted"
                      }`}
                    >
                      {location.stat}
                    </p>
                    {location.statLabel && (
                      <p className="pt-1 font-mono text-[10px] tracking-[1.2px] text-muted uppercase">
                        {location.statLabel}
                      </p>
                    )}
                  </div>
                </div>
                <p className="max-w-[566px] pt-4 text-[14px] leading-[1.7] text-muted">
                  {location.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
