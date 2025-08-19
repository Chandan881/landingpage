"use client";

import { useRef } from "react";
import Image from "next/image";
import carouselImg1 from "@/app/assests/mainLanding/carouselImg1.png";
import carouselImg2 from "@/app/assests/mainLanding/carouselImg2.png";
import carouselImg3 from "@/app/assests/mainLanding/carouselImg3.png";

export default function PartnershipsCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 900; // Scroll 3 cards (300 * 3)
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 900; // Scroll 3 cards (300 * 3)
    }
  };

  const partnerships = [
    {
      title: "Florists",
      description:
        "We'll ensure your beautiful bouquets, plants, and gifts arrive on time.",
      image: carouselImg1,
    },
    {
      title: "Grocery Stores",
      description:
        "Provide same-day delivery of fresh groceries to nearby customers.",
      image: carouselImg2,
    },
    {
      title: "Pharmacy",
      description:
        "Provide same-day delivery of medicines so that you stay healthy.",
      image: carouselImg3,
    },
    {
      title: "Restaurants",
      description:
        "Deliver delicious meals to customers in your area quickly and efficiently.",
      image: carouselImg1,
    },
    {
      title: "Bakeries",
      description:
        "Fresh baked goods delivered fresh to your customers' doorsteps.",
      image: carouselImg2,
    },
    {
      title: "Pet Stores",
      description:
        "Pet food and supplies delivered when your customers need them most.",
      image: carouselImg3,
    },
    {
      title: "Electronics",
      description:
        "Fast delivery of gadgets and tech accessories to tech-savvy customers.",
      image: carouselImg1,
    },
    {
      title: "Fashion Retail",
      description:
        "Trendy clothing and accessories delivered with style and speed.",
      image: carouselImg2,
    },
    {
      title: "Home & Garden",
      description:
        "Garden supplies and home essentials delivered to DIY enthusiasts.",
      image: carouselImg3,
    },
    {
      title: "Sports Equipment",
      description: "Athletic gear and sports accessories for active customers.",
      image: carouselImg1,
    },
    {
      title: "Bookstores",
      description:
        "Literature and educational materials delivered to book lovers.",
      image: carouselImg2,
    },
    {
      title: "Art Supplies",
      description: "Creative materials and art tools for artistic customers.",
      image: carouselImg3,
    },
  ];

  return (
    <div className="relative">
      {/* Navigation Arrows - Hidden on mobile */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-200 hover:scale-110 hidden lg:block"
        onClick={scrollLeft}
      >
        <svg
          className="w-6 h-6"
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
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-200 hover:scale-110 hidden lg:block"
        onClick={scrollRight}
      >
        <svg
          className="w-6 h-6"
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

      {/* Carousel Items */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 py-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {partnerships.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-[300px]">
            <div className="bg-[#F3F2FA] rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={192}
                  className="w-full h-full object-cover rounded-lg"
                  unoptimized
                  priority
                />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
