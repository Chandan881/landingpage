"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/app/components/atoms/Button";
import AppIcon from "@/app/assests/mainLanding/appleIcon.png";
import PlayStoreIcon from "@/app/assests/mainLanding/playStoreIcon.png";
import iPhone16Fallback from "@/app/assests/mainLanding/iPhone16.png";

export default function DownloadAppSection({
  title = "Download the app now!",
  subtitle = (
    <>
      Get everything you need, delivered fast <br /> only on the ZenZop App
    </>
  ),
  image,
  imageFit = "cover",
}) {
  // Use fallback image if main image is not available
  const displayImage = image || iPhone16Fallback;

  // Animation state
  const [imageVisible, setImageVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const imageRef = useRef(null);

  // Intersection Observer effect
  useEffect(() => {
    if (hasAnimated) return; // Only animate once

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setImageVisible(true);
            setHasAnimated(true);
            observer.disconnect(); // Stop observing after animation
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section>
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-[26px] lg:text-[50px] font-[800] leading-[88px] tracking-[-0.05em] text-center font-helvetica-neue text-[#000000]">
          {title}
        </h3>
        <p className="mt-0 md:mt-4 lg:mt-4 text-[16px] lg:text-[22px] font-[500] leading-[32px] tracking-[-0.05em] text-center font-helvetica-neue text-[#88878E]">
          {subtitle}
        </p>
        {/* <div className="mt-8 flex items-center justify-center gap-3">
          <Button
            href="#"
            className="gap-2 bg-[#171717] text-white font-helvetica-neue font-semibold flex items-center justify-center"
          >
            <span className="relative inline-block h-5 w-5 flex items-center justify-center">
              <Image src={AppIcon} alt="App Store" width={20} height={20} />
            </span>
            Download now
          </Button>
          <Button
            href="#"
            className="gap-2 bg-[#171717] text-white font-helvetica-neue font-semibold flex items-center justify-center"
          >
            <span className="relative inline-block h-5 w-5 flex items-center justify-center">
              <Image
                src={PlayStoreIcon}
                alt="Google Play"
                width={20}
                height={20}
              />
            </span>
            Download now
          </Button>
        </div> */}
        <div className="flex mt-8 flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-400">
          <div className=" flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-400">
            <div
              href="#download"
              className="bg-[#171717] text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[180px] mx-auto"
            >
              <Image
                src={AppIcon}
                alt="App Store Icon"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
                unoptimized
              />
              <span className="font-helvetica-neue font-[400] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25.6px] tracking-[-0.16px] text-center">
                Download now
              </span>
            </div>
            <div
              href="#download"
              className="bg-[#171717] text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[180px] mx-auto"
            >
              <Image
                src={PlayStoreIcon}
                alt="Play Store Icon"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
                unoptimized
              />
              <span className="font-helvetica-neue font-[400] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25.6px] tracking-[-0.16px] text-center">
                Download now
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-18 mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px]">
        <div
          ref={imageRef}
          className={`relative w-full h-[300px] sm:h-[350px] md:h-[472px] overflow-hidden transition-all duration-1000 ease-out transform hover:scale-[1.18] hover:z-10 ${
            imageVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <Image
            src={displayImage}
            alt="App preview"
            width={350}
            height={472}
            sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 350px"
            className={`object-${imageFit} w-full h-full`}
            priority
            style={{
              objectFit: imageFit,
              objectPosition: "center",
            }}
            unoptimized
          />
          {/* Bottom opacity fade overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
