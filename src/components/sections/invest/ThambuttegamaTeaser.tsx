import Image from "next/image";
import Container from "@/components/Container";

const sites = [
  {
    siteLabel: "Site 1",
    place: "Thambuttegama, Sri Lanka",
    name: "Thambuttegama",
    image: "/home/thambuttegama-aerial.jpg",
    description:
      "Site assessment underway. Details will be announced as the project progresses.",
  },
  {
    siteLabel: "Site 2",
    place: "Thambuttegama, Sri Lanka",
    name: "Thambuttegama",
    image: "/home/thambuttegama-aerial.jpg",
    description:
      "Site assessment underway. Details will be announced as the project progresses.",
  },
];

export default function ThambuttegamaTeaser() {
  return (
    <section className="bg-bg-black py-10 lg:py-12">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {sites.map((site) => (
            <article
              key={site.siteLabel}
              className="overflow-hidden rounded-[18px] border border-text/6 bg-[rgba(10,14,10,0.5)]"
            >
              <div className="relative h-[220px] w-full sm:h-[250px]">
                <Image
                  src={site.image}
                  alt={`Aerial view of Pearl Gro's ${site.name} ${site.siteLabel}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              <div className="px-8 py-7 sm:px-9 sm:py-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/home/icons/location-pin.svg"
                      alt=""
                      width={14}
                      height={14}
                    />

                    <p className="font-mono text-[12px] font-medium tracking-[1.2px] text-text/80 uppercase">
                      {site.place}
                    </p>
                  </div>

                  <span className="shrink-0 font-mono text-[18px] font-medium tracking-[1.2px] text-muted uppercase">
                    {site.siteLabel}
                  </span>
                </div>

                <h3 className="pt-3 font-heading text-[28px] font-bold tracking-[-0.28px] text-text">
                  {site.name}
                </h3>

                <p className="pt-4 text-[15px] leading-[1.72] text-muted">
                  {site.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}