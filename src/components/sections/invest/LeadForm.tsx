import Image from "next/image";
import Container from "@/components/Container";
import LeadFormFields from "@/components/sections/invest/LeadFormFields";

const benefits = [
  {
    icon: "/invest/icons/person.svg",
    label: "Personal follow-up from our team",
  },
  {
    icon: "/invest/icons/shield.svg",
    label: "No login or account required",
  },
  {
    icon: "/invest/icons/check-shield.svg",
    label: "Your information is never shared",
  },
];

export default function LeadForm() {
  return (
    <section
      id="lead-form"
      className="relative overflow-hidden bg-bg-black py-12 lg:py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -left-16 size-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,196,107,0.1) 0%, rgba(0,0,0,0) 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 size-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,229,140,0.07) 0%, rgba(0,0,0,0) 65%)",
        }}
      />

      <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start">
          <p className="font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
            Phase 1 · 10 Slots Remaining
          </p>

          <h2 className="max-w-[512px] pt-4 font-heading text-[clamp(32px,4vw,44.5px)] font-bold tracking-[-1.11px] text-text">
            Interested in Phase 1? <span className="text-gold">Get in Touch.</span>
          </h2>

          <p className="max-w-[512px] pt-4 text-[17px] leading-[1.72] text-muted">
            Leave your details and a Pearl Gro representative will contact
            you personally - no account, no commitment.
          </p>

          <ul className="flex flex-col gap-4 pt-9">
            {benefits.map((benefit) => (
              <li key={benefit.label} className="flex items-center gap-3.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-glow/20 bg-glow/8">
                  <Image src={benefit.icon} alt="" width={16} height={16} />
                </span>
                <span className="text-[15px] text-muted">{benefit.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 w-full rounded-2xl border border-glow/12 bg-[rgba(15,28,20,0.5)] px-[29px] py-5">
            <p className="font-mono text-[36px] leading-none font-light text-glow">
              10
            </p>
            <p className="pt-1.5 font-mono text-[10px] tracking-[1.4px] text-muted uppercase">
              Phase 1 investor slots · LKR 60M per slot
            </p>
          </div>
        </div>

        <LeadFormFields />
      </Container>
    </section>
  );
}
