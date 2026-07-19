import Image from "next/image";
import Container from "@/components/Container";
import ContactFormFields from "@/components/sections/contact/ContactFormFields";

const contactRows = [
  {
    icon: "/icons/phone.svg",
    label: "Phone",
    value: "+94 77 000 0000",
    href: "tel:+94770000000",
  },
  {
    icon: "/icons/email.svg",
    label: "Email",
    value: "hello@pearlgro.lk",
    href: "mailto:hello@pearlgro.lk",
  },
  {
    icon: "/icons/location.svg",
    label: "Address",
    value: "Malsiripura, Kurunegala, Sri Lanka",
  },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -left-16 size-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,229,140,0.07) 0%, rgba(0,0,0,0) 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 size-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,229,140,0.04) 0%, rgba(0,0,0,0) 65%)",
        }}
      />

      <Container className="relative grid grid-cols-1 gap-16 py-20 lg:grid-cols-2 lg:gap-24 lg:py-[144px]">
        <div className="flex flex-col items-start">
          <h1 className="max-w-[480px] font-heading text-[clamp(40px,6.2vw,80px)] leading-[1.02] font-bold tracking-[-2.4px] text-text">
            Get in Touch.
          </h1>

          <p className="max-w-[460px] pt-5 text-[18px] leading-[1.72] text-muted">
            Questions about Pearl Gro, our projects, or how to get involved?
            We&rsquo;d love to hear from you.
          </p>

          <div className="mt-10 flex w-full flex-col border-t border-glow/10">
            {contactRows.map((row) => {
              const content = (
                <>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-glow/20 bg-glow/8">
                    <Image src={row.icon} alt="" width={16} height={16} />
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] tracking-[1.76px] text-muted/50 uppercase">
                      {row.label}
                    </span>
                    <span className="text-[16px] leading-[1.5] text-text">
                      {row.value}
                    </span>
                  </span>
                </>
              );

              return row.href ? (
                <a
                  key={row.label}
                  href={row.href}
                  className="flex items-center gap-5 border-b border-glow/10 py-5"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={row.label}
                  className="flex items-center gap-5 border-b border-glow/10 py-5"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <p className="pt-5 text-[13px] text-muted/40">
            A member of the Pearl Gro team reads every message personally.
          </p>
        </div>

        <ContactFormFields />
      </Container>
    </section>
  );
}
