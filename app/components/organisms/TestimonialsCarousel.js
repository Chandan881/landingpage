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
        "Thanks to ZenZop, we've seen significant growth in sales and expanded to new locations. The platform has revolutionized our business operations completely and transformed our customer experience dramatically.",
      author: "Maarja Kelder",
      role: "owner, ‘Nuudel’.",
      bg: "rgba(220, 220, 240, 0.8)",
    },
    {
      quote:
        "Delivery is consistently fast and our customers love the seamless experience. The reliability has exceeded all our expectations and our business has grown significantly.",
      author: "Alex Patel",
      role: "store partner",
      bg: "rgba(240, 220, 235, 0.8)",
    },
    {
      quote:
        "The app made it easy to reach new neighborhoods without extra overhead. We've expanded our customer base significantly and increased our daily revenue substantially.",
      author: "Priya Sharma",
      role: "franchise manager",
      bg: "rgba(210, 230, 245, 0.8)",
    },
    {
      quote:
        "Great support and tools help us operate more efficiently. The team is always responsive to our needs and provides excellent guidance for business growth.",
      author: "Samir Khan",
      role: "operations lead",
      bg: "rgba(220, 240, 220, 0.8)",
    },
    {
      quote:
        "ZenZop has transformed our business operations. The platform is intuitive and customers love the convenience. Our efficiency has improved dramatically and we've seen remarkable results.",
      author: "Sarah Johnson",
      role: "business owner",
      bg: "rgba(245, 235, 215, 0.8)",
    },
    {
      quote:
        "We've increased daily orders by 40% since partnering with ZenZop. The delivery network is incredibly reliable. Customer satisfaction has never been higher and our business growth continues to accelerate every month.",
      author: "Michael Chen",
      role: "restaurant manager",
      bg: "rgba(200, 230, 245, 0.8)",
    },
    {
      quote:
        "The customer service team at ZenZop is exceptional. They help us resolve issues quickly and efficiently. Their support is truly outstanding and they always go above and beyond our expectations.",
      author: "Emma Rodriguez",
      role: "store operator",
      bg: "rgba(240, 220, 245, 0.8)",
    },
    {
      quote:
        "Our customers appreciate the real-time tracking feature. It has significantly improved their satisfaction. The transparency builds trust.",
      author: "David Thompson",
      role: "delivery coordinator",
      bg: "rgba(210, 240, 210, 0.8)",
    },
    {
      quote:
        "ZenZop's analytics dashboard gives us valuable insights into business performance and customer preferences. Data-driven decisions are now easier than ever.",
      author: "Lisa Wang",
      role: "marketing director",
      bg: "rgba(245, 240, 210, 0.8)",
    },
    {
      quote:
        "The platform's ease of use has made onboarding new staff members much simpler. Everyone loves working with it. Training time has been reduced significantly.",
      author: "James Wilson",
      role: "operations manager",
      bg: "rgba(245, 220, 220, 0.8)",
    },
  ];

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (i) => emblaApi && emblaApi.scrollTo(i);

  return (
    <div className="sm:mt-10 xl:mt-24 relative w-screen max-w-[100vw] -mx-[calc((100vw-100%)/2)]">
      <div className="overflow-hidden mt-10" ref={emblaRef}>
        <ul className="flex list-none gap-6 px-[9vw]">
          {slides.map((s, i) => (
            <li
              key={i}
              className={`group flex-[0_0_80vw] sm:flex-[0_0_60vw] min-w-0 transition-opacity duration-300 ${
                i === selectedIndex ? "opacity-100" : "opacity-50"
              }`}
            >
              <div
                className="rounded-3xl text-center h-[360px] sm:h-[420px] md:h-[480px] 
                       px-6 sm:px-8 md:px-12 flex flex-col items-center justify-center 
                       transition-all duration-300 mb-4 
                       sm:group-hover:shadow-2xl sm:group-hover:scale-[1.02]"
                style={{ backgroundColor: s.bg }}
              >
                <p className="mx-auto max-w-3xl text-[14px] sm:text-[18px] md:text-[24px] font-[500] text-[#333333] font-helvetica-neue leading-[32px] tracking-[-0.03em] text-center">
                  “{s.quote}”
                </p>
                <div className="mt-6 text-[12px] sm:text-[12px] md:text-[18px] font-[500] text-[#333333] font-helvetica-neue leading-[32px] tracking-[-0.03em] text-center">
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
        className="hidden sm:block absolute left-[calc(50%-30vw+20px)] sm:left-[calc(50%-30vw+20px)] md:left-[calc(50%-30vw+20px)] top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white text-black shadow-sm hover:bg-white/90 z-10"
      >
        <span className="inline-block w-full text-center text-2xl font-bold">
          ‹
        </span>
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={scrollNext}
        className="hidden sm:block absolute right-[calc(50%-30vw+20px)] sm:right-[calc(50%-30vw+20px)] md:right-[calc(50%-30vw+20px)] top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white text-black shadow-sm hover:bg-white/90 z-10"
      >
        <span className="inline-block w-full text-center text-2xl font-bold">
          ›
        </span>
      </button>
    </div>
  );
}
