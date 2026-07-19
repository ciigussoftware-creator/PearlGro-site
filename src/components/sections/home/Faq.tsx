import Container from "@/components/Container";
import FaqAccordion from "@/components/sections/home/FaqAccordion";

export default function Faq() {
  return (
    <section className="bg-bg-deep pt-11 pb-14 lg:pt-[44px] lg:pb-[59px]">
      <Container>
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 lg:grid-cols-[400fr_640fr]">
          <h2 className="font-heading text-[clamp(28px,4vw,37.5px)] leading-[1.1] font-bold tracking-[-0.75px] text-text">
            Everything you need to know
          </h2>
          <FaqAccordion />
        </div>
      </Container>
    </section>
  );
}
