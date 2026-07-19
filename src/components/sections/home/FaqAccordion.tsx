"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is Pearl Gro?",
    answer:
      "Pearl Gro is Sri Lanka's most advanced greenhouse cultivation venture, combining controlled-environment farming, renewable energy infrastructure, and expert agricultural management to deliver consistent, export-grade produce. We are currently developing our Phase 1 project in Malsiripura across 10 acres with 5 high-demand crops.",
  },
  {
    question: "How does the investment work?",
    answer:
      "This answer is coming soon. In the meantime, reach out to our team directly with any questions about the investment process.",
  },
  {
    question: "Is there a dashboard or investor login?",
    answer:
      "This answer is coming soon. In the meantime, reach out to our team directly with any questions about investor access.",
  },
  {
    question: "How do I get more information?",
    answer:
      "Reach out through the Contact or Invest pages, and a representative will follow up with more information.",
  },
];

function AccordionPanel({ answer }: { answer: string }) {
  const panelRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const el = panelRef.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      gsap.fromTo(
        el,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      );
    },
    { scope: panelRef },
  );

  return (
    <p
      ref={panelRef}
      className="pb-7 text-[15px] leading-[1.75] text-muted"
    >
      {answer}
    </p>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
  isLast,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div className={isLast ? undefined : "border-b border-text/8"}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span
          className={`font-heading text-[18px] font-medium ${
            isOpen ? "text-text" : "text-muted"
          }`}
        >
          {item.question}
        </span>
        <span
          className={`flex size-8 shrink-0 items-center justify-center rounded-full border ${
            isOpen ? "border-accent" : "border-text/12"
          }`}
        >
          <Image
            src={isOpen ? "/home/icons/faq-minus.svg" : "/home/icons/faq-plus.svg"}
            alt=""
            width={14}
            height={14}
          />
        </span>
      </button>
      {isOpen && <AccordionPanel answer={item.answer} />}
    </div>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col items-start">
      {faqItems.map((item, index) => (
        <AccordionItem
          key={item.question}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          isLast={index === faqItems.length - 1}
        />
      ))}
    </div>
  );
}
