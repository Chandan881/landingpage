"use client";

import { useRef } from "react";
import Image from "next/image";
import downloadImg from "@/app/assests/mainLanding/downLoadImg.png";
import categoryImg from "@/app/assests/mainLanding/categoriesImg.png";
import paymodeImg from "@/app/assests/mainLanding/payModeImg.png";

export default function LocalStoresCarousel() {
  const scrollRef = useRef(null);

  const scrollByAmount = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = Math.round(container.clientWidth * 0.9) * direction;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  // Screenshot-inspired dummy content (title, subtitle, image, optional CTA)
  const items = [
    {
      title: "Download the app",
      subtitle: "Choose a ZenZop store near you.",
      image: downloadImg,
      cta: "Get the App",
    },
    {
      title: "Order whatever you need",
      subtitle:
        "Bread? Bananas? Shampoo? Simply add whatever groceries you need to your basket.",
      image: categoryImg,
    },
    {
      title: "Confirm and Pay in App",
      subtitle:
        "Once confirmed, our team will carefully sort and pack your items for you.",
      image: paymodeImg,
    },
    {
      title: "Track your order",
      subtitle: "Follow every step of the delivery in real time.",
      image: categoryImg,
    },
    {
      title: "Fast pickup",
      subtitle: "Prefer pickup? We'll have your order ready on time.",
      image: downloadImg,
    },
    {
      title: "Browse categories",
      subtitle: "Fresh produce, dairy, snacks, and more in one place.",
      image: categoryImg,
    },
    {
      title: "Secure payment",
      subtitle: "Multiple payment options with secure checkout.",
      image: paymodeImg,
    },
    {
      title: "Real-time updates",
      subtitle: "Stay informed from order placed to delivered.",
      image: categoryImg,
    },
  ];

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="mt-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory -mx-2 px-2"
      >
        <ul className="flex gap-6 min-w-max pr-2">
          {items.map((card, i) => (
            <li key={`${card.title}-${i}`} className="snap-start">
              <div className="w-[280px] sm:w-[320px] md:w-[410px] rounded-2xl bg-[#F3F2FA] p-6 flex flex-col min-h-[380px] sm:min-h-[400px] md:min-h-[450px]">
                <h4 className="mt-2 text-[16px] sm:text-[18px] md:text-[24px] font-[700] tracking-[-0.05em] text-[#000000] font-helvetica-neue leading-[24px]">
                  {card.title}
                </h4>
                <div className="mt-3 text-[13px] sm:text-[14px] md:text-[16px] font-[500] text-[#858298] font-helvetica-neue leading-[22px] tracking-[-0.03em] h-9 sm:h-10 md:h-11">
                  {card.subtitle}
                </div>
                <div className="mt-2 h-12 flex items-center">
                  {card.cta ? (
                    <button className="relative bottom-[20px] rounded-full bg-[#1E0E62] text-[#FFFFFF] text-[14px] font-[500] font-helvetica-neue leading-[20px] tracking-[-0.16px] text-center px-8 py-2 inline-block">
                      {card.cta}
                    </button>
                  ) : (
                    <div className="h-8"></div>
                  )}
                </div>
                <div className="mt-auto relative w-full h-48 sm:h-52 md:h-[374px] rounded-xl overflow-hidden bg-gradient-to-br from-indigo-100 to-violet-200 dark:from-zinc-800 dark:to-zinc-700">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                    className="object-cover"
                    priority={i < 3}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation buttons - hidden on mobile, visible on md+ screens */}
      <div className="hidden md:flex justify-end items-center mt-6 gap-2">
        <button
          onClick={() => scrollByAmount(-1)}
          className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Scroll left"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => scrollByAmount(1)}
          className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Scroll right"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
