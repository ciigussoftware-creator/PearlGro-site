import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PartnerFormFields from "@/components/sections/partners/PartnerFormFields";

export default function PartnerForm() {
  return (
    <section
      id="partner-form"
      className="relative overflow-hidden border-t border-glow/8 bg-bg-deep scroll-mt-20"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -right-16 size-100 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,229,140,0.05) 0%, rgba(0,0,0,0) 65%)",
        }}
      />

      <Container className="relative grid grid-cols-1 gap-14 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <div className="flex flex-col items-start">
          <SectionHeading
            number="03"
            eyebrow="Get In Touch"
            heading="Partner Inquiry"
          />

          <p className="max-w-[440px] pt-6 text-[16px] leading-[1.7] text-muted">
            Ready to explore how your company can work with Pearl Gro? Fill
            out the form and our partnerships team will be in touch to discuss
            the opportunity.
          </p>

          <div className="mt-10 flex flex-col gap-4 border-t border-glow/10 pt-6">
            <div className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-glow/50" />
              <span className="text-[14px] text-muted">
                No upfront commitment required
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-glow/50" />
              <span className="text-[14px] text-muted">
                Response within 3 business days
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-glow/50" />
              <span className="text-[14px] text-muted">
                NDA available upon request
              </span>
            </div>
          </div>
        </div>

        <PartnerFormFields />
      </Container>
    </section>
  );
}
