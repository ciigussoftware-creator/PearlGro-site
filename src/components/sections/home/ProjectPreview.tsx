"use client";

import Container from "@/components/Container";
import { useEffect, useRef, useState } from "react";

export default function ProjectPreview() {
  const YOUTUBE_VIDEO_ID = "A5XGrgI-tnw";

  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-bg-black py-12 lg:py-20" ref={sectionRef}>
      <Container>
        {/* Label */}
        <p
          className={`mb-6 text-center font-mono text-[11px] tracking-[1.98px] text-muted uppercase transition-all duration-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          See Pearl Gro&rsquo;s Malsiripura project take shape.
        </p>

        {/* Video — smaller max width + fade-up animation */}
        <div
          className={`mx-auto max-w-3xl transition-all duration-700 delay-150
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-bg-deep shadow-[0_0_60px_rgba(47,229,140,0.08)]">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
              title="Pearl Gro Malsiripura project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}