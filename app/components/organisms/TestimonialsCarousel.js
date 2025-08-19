"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const slides = [
    {
      quote:
        "Thanks to the ZenZop platform, we've seen a significant growth in sales, which has allowed us to expand and open new locations.",
      author: "Maarja Kelder",
      role: "owner, ‘Nuudel’.",
      bg: "#F3F2FA",
    },
    {
      quote:
        "Delivery is consistently fast and our customers love the seamless experience.",
      author: "Alex Patel",
      role: "store partner",
      bg: "#FDF2F8",
    },
    {
      quote:
        "The app made it easy to reach new neighborhoods without extra overhead.",
      author: "Priya Sharma",
      role: "franchise manager",
      bg: "#ECF8FF",
    },
    {
      quote: "Great support and tools that help us operate more efficiently.",
      author: "Samir Khan",
      role: "operations lead",
      bg: "#F2FBF4",
    },
  ];

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (i) => emblaApi && emblaApi.scrollTo(i);

  return (
    <div className="relative w-screen max-w-[100vw] -mx-[calc((100vw-100%)/2)]">
      <div className="overflow-hidden" ref={emblaRef}>
        <ul className="flex list-none gap-6 px-[9vw]">
          {slides.map((s, i) => (
            <li
              key={i}
              className={`flex-[0_0_82vw] min-w-0 transition-opacity duration-300 ${
                i === selectedIndex ? "opacity-100" : "opacity-50"
              }`}
            >
              <div
                className="rounded-3xl text-center h-[260px] sm:h-[300px] md:h-[340px] px-6 sm:px-8 md:px-12 flex flex-col items-center justify-center overflow-hidden"
                style={{ backgroundColor: s.bg }}
              >
                <p className="mx-auto max-w-3xl text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-black/80">
                  “{s.quote}”
                </p>
                <div className="mt-6 text-sm sm:text-base text-black/60">
                  {s.author}, {s.role}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={scrollPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white text-black shadow-sm hover:bg-white/90"
      >
        <span className="inline-block w-full text-center">‹</span>
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={scrollNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white text-black shadow-sm hover:bg-white/90"
      >
        <span className="inline-block w-full text-center">›</span>
      </button>
    </div>
  );
}
