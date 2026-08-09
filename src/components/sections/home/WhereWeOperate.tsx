import Image from "next/image";
import Container from "@/components/Container";

interface Location {
  image: string;
  place: string;
  name: string;
  siteLabel?: string;
  description: string;
}

const locations: Location[] = [
  {
    image: "/home/malsiripura-aerial.jpg",
    place: "Malsiripura, Sri Lanka",
    name: "Malsiripura",
    description:
      "10 acres under Phase 1 cultivation · 5 export crops · Full greenhouse infrastructure and renewable energy systems in development.",
  },
  {
    image: "/home/thambuttegama-aerial.jpg",
    place: "Thambuttegama, Sri Lanka",
    name: "Thambuttegama",
    siteLabel: "Site 1",
    description:
      "Site assessment underway. Details to be announced as the project progresses.",
  },
  {
    image: "/home/thambuttegama-aerial.jpg",
    place: "Thambuttegama, Sri Lanka",
    name: "Thambuttegama",
    siteLabel: "Site 2",
    description:
      "Site assessment underway. Details to be announced as the project progresses.",
  },
];

export default function WhereWeOperate() {
  return (
    <section className="bg-bg-deep py-10 lg:py-12">
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <Container>
        <h2 className="font-heading text-[clamp(28px,4vw,37.5px)] font-bold tracking-[-0.75px] text-text">
          Where We Operate
        </h2>

        <div className="grid grid-cols-1 gap-6 pt-8 lg:grid-cols-[1.4fr_1fr_1fr]">
          {locations.map((location, index) => (
            <div
              key={`${location.name}-${location.siteLabel}`}
              className="flex flex-col"
            >
              <div
                className={`flex h-full flex-col overflow-hidden rounded-[20px] border bg-[rgba(15,28,22,0.6)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(47,229,140,0.08)] ${
                  location.name === "Malsiripura"
                    ? "border-glow/50 shadow-[0_0_24px_rgba(47,229,140,0.12)]"
                    : "border-text/[0.06]"
                }`}
                style={{
                  animationName: "fadeUp",
                  animationDuration: "0.7s",
                  animationTimingFunction: "ease-out",
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="relative h-[200px] w-full bg-bg-deep">
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
                </div>

                <div className="flex-1 px-6 py-7 sm:px-9 sm:py-8">
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
                    {location.siteLabel && (
                      <span className="shrink-0 font-mono text-[11px] tracking-[1.4px] text-muted uppercase">
                        {location.siteLabel}
                      </span>
                    )}
                  </div>
                  <p className="max-w-[566px] pt-4 text-[14px] leading-[1.7] text-muted">
                    {location.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
