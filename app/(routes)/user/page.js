"use client";

import { useState, useEffect } from "react";
import Container from "@/app/components/atoms/Container";
import SectionTitle from "@/app/components/atoms/SectionTitle";
import Button from "@/app/components/atoms/Button";
import FeatureItem from "@/app/components/molecules/FeatureItem";
import StepItem from "@/app/components/molecules/StepItem";
import Testimonial from "@/app/components/molecules/Testimonial";
import Image from "next/image";
import GrocerieImg from "@/app/assests/mainLanding/grocerieImg.png";
import SupportLocalsImg from "@/app/assests/mainLanding/supportLocals.png";
import fastDeliveryImg from "@/app/assests/mainLanding/fastDelivery.png";
import freshDiningImg from "@/app/assests/mainLanding/freshDining.png";
import mobileImageVw from "@/app/assests/mainLanding/mobileImageVw.png";
import LocalStoresCarousel from "@/app/components/organisms/LocalStoresCarousel";
import LocalStoresSection from "@/app/components/organisms/LocalStoresSection";
import TestimonialsCarousel from "@/app/components/organisms/TestimonialsCarousel";
import SellZenZopImg from "@/app/assests/mainLanding/sellZenzop.png";
import FaqAccordion from "@/app/components/organisms/FaqAccordion";
import DownloadAppSection from "@/app/components/organisms/DownloadAppSection";
import iPhone16 from "@/app/assests/mainLanding/iPhone16.png";
import iPhone17 from "@/app/assests/mainLanding/iPhone17.png";
import appleIcon from "@/app/assests/mainLanding/appleIcon.png";
import playStoreIcon from "@/app/assests/mainLanding/playStoreIcon.png";

export default function UserLanding() {
  // Debug: Check if images are imported correctly
  console.log("GrocerieImg:", GrocerieImg);
  console.log("SellZenZopImg:", SellZenZopImg);
  console.log("iPhone16:", iPhone16);

  // Scroll animation state
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    // Observe all sections
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen" data-page="user">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#E3E1FF] pt-12 py-16 sm:pt-34 sm:py-28 lg:py-46 transition-all duration-300">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Headline */}
            <h1 className="text-[36px] sm:text-[74px] font-[800] text-[#333333] mb-6 leading-[40px] sm:leading-[80px] tracking-[-0.05em] text-center font-helvetica-neue animate-fade-in-up">
              Groceries Delivered
              <br className="hidden sm:block" /> in minutes
            </h1>

            {/* Subheading */}
            <p className="text-[16px] sm:text-[22px] font-helvetica-neue font-[500] text-[#686868] mb-12 leading-[30px] tracking-[-0.05em] text-center max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              <span className="block sm:block text-#3333">
                Zenzop is a supermarket in your pocket
              </span>
              <span className="block sm:block text-#3333">
                - try it now in your favourite device
              </span>
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-400">
              <div className=" flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-400">
                <div
                  href="#download"
                  className="bg-[#171717] text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[180px] mx-auto"
                >
                  <Image
                    src={appleIcon}
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
                    src={playStoreIcon}
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
        </Container>
      </section>

      {/* Edge-to-edge banner image strip */}
      <section aria-hidden className="w-full">
        <div className="relative h-48 sm:h-56 md:h-80 lg:h-[38.64rem] xl:h-[38.64rem] bg-gray-200 overflow-hidden">
          <Image
            src={GrocerieImg}
            alt="Groceries"
            width={1920}
            height={1080}
            priority
            sizes="(min-width: 1024px) 100vw, (min-width: 640px) 80vw, 60vw"
            className="object-cover w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            unoptimized
          />
        </div>
      </section>

      {/* What is ZenZop */}
      <section id="what-is-zenzop" data-animate>
        <Container className="pt-16 sm:pt-32 sm:pb-4 xl:pb-12">
          <div
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ease-out transform ${
              visibleSections.has("what-is-zenzop")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <h2 className="text-[32px] sm:text-[50px] font-[800] text-[#000000] mb-6 leading-[40px] sm:leading-[88px] tracking-[-0.05em] text-center font-helvetica-neue">
              What is ZenZop?
            </h2>
            <p
              className={`text-[16px] sm:text-[20px] font-helvetica-neue font-[500] text-[#88878E] leading-[22px] sm:leading-[27px] tracking-[-0.05em] text-center max-w-3xl mx-auto transition-all duration-1000 ease-out transform delay-200 ${
                visibleSections.has("what-is-zenzop")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
            >
              ZenZop is an online food market, offering a wide selection of
              products, from fresh produce to pantry staples, household
              essentials, and more. The best bit? It&apos;s fast, convenient and
              easy. You can have your groceries delivered direct to your door
              within 10 minutes.
            </p>
          </div>
        </Container>

        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <div
          className={`mt-6  sm:mt-8 lg:hidden overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-4 py-6 transition-all duration-1000 ease-out transform delay-300 ${
            visibleSections.has("what-is-zenzop")
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <div className="flex gap-6 min-w-max pl-4 pr-4 ">
            {[
              {
                t: "Support Local Businesses",
                d: "Your orders directly help\nneighborhood stores thrive and grow",
                image: SupportLocalsImg,
              },
              {
                t: "Lightning-Fast Delivery",
                d: "Get groceries in 5-10 minutes or less\nfrom shops just around the corner",
                image: fastDeliveryImg,
              },
              {
                t: "Fresh & Diverse Selection",
                d: "Access the best products from\nmultiple local stores in one place",
                image: freshDiningImg,
              },
            ].map((f) => (
              <div
                key={f.t}
                className="snap-start w-[280px] flex-shrink-0 first:ml-4 last:mr-4 "
              >
                <FeatureItem title={f.t} description={f.d} image={f.image} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div
          className={`mt-12 hidden lg:grid grid-cols-3 gap-8 max-w-6xl lg:max-w-none mx-auto lg:mx-[160px] px-6 sm:px-10 md:px-16 lg:px-0 py-10 transition-all duration-1000 ease-out transform delay-400 ${
            visibleSections.has("what-is-zenzop")
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          {[
            {
              t: "Support Local Businesses",
              d: "Your orders directly help\nneighborhood stores thrive and grow",
              image: SupportLocalsImg,
            },
            {
              t: "Lightning-Fast Delivery",
              d: "Get groceries in 5-10 minutes or less\nfrom shops just around the corner",
              image: fastDeliveryImg,
            },
            {
              t: "Fresh & Diverse Selection",
              d: "Access the best products from\nmultiple local stores in one place",
              image: freshDiningImg,
            },
          ].map((f) => (
            <FeatureItem
              key={f.t}
              title={f.t}
              description={f.d}
              image={f.image}
            />
          ))}
        </div>
      </section>

      {/* Bringing Local Stores Closer to You */}
      <section id="local-stores" data-animate>
        <div
          className={`transition-all duration-1000 ease-out transform ${
            visibleSections.has("local-stores")
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <LocalStoresSection />
        </div>
      </section>

      {/* How to order groceries with Zenzop */}
      <section>
        <Container className="sm:pt-4 xl:pt-16 pb-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[32px] sm:text-[50px] font-[800] text-[#000000]  leading-[40px] sm:leading-[88px] tracking-[-0.05em] text-center font-helvetica-neue">
              How to order groceries
              <br />
              with Zenzop
            </h2>
          </div>
        </Container>
      </section>

      {/* Local Stores Carousel */}
      <section>
        <Container className="sm:py-8 xl:py-16">
          <LocalStoresCarousel />
        </Container>
      </section>

      {/* What our users has to say */}

      {/* Testimonials (Carousel) */}
      <section id="testimonials" data-animate>
        <Container className="sm:pt-15 xl:pt-16 px-0 sm:px-0 md:px-0 mx-0 lg:mx-0">
          <div
            className={`transition-all duration-1000 ease-out transform ${
              visibleSections.has("testimonials")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <h3 className="text-[32px] sm:text-[50px] font-[800] text-[#000000] mb-8 mt-10 leading-[40px] sm:leading-[64px] tracking-[-0.05em] text-center font-helvetica-neue">
              What our users has to say
            </h3>
            <TestimonialsCarousel />
          </div>
        </Container>
      </section>

      {/* CTA to sell */}
      <section
        id="cta-sell"
        data-animate
        className="bg-[#110C58] text-white mt-10 md:mt-10 lg:mt-30"
      >
        <Container className="py-16 md:mt-20 lg:py-40">
          <div
            className={`text-center transition-all duration-1000 ease-out transform ${
              visibleSections.has("cta-sell")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <h2 className="text-[54px] md:text-[74px] font-[800] leading-[88px] tracking-[-0.05em] text-center font-helvetica-neue text-[#EFEEFD]">
              Want to sell your products
              <br /> with ZenZop?
            </h2>
            <p className="mt-10 text-[18px] md:text-[26px] font-[500] leading-[24px] tracking-[-0.05em] text-center font-helvetica-neue text-[#D0CCFF]">
              Apply to become a ZenZop partner!
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full px-5 py-2 bg-white text-black font-medium"
              >
                Sign me up
              </a>
            </div>
          </div>
          <div className="mt-30 rounded-2xl overflow-hidden bg-white/10 border border-white/20">
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[462px] bg-gray-300 overflow-hidden">
              <Image
                src={SellZenZopImg}
                alt="Sell on ZenZop"
                width={1192}
                height={462}
                sizes="(min-width: 1024px) 100vw, (min-width: 640px) 80vw, 60vw"
                className="object-cover w-full h-full"
                priority
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                unoptimized
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" data-animate>
        <Container className="py-16 md:py-30 lg:py-50">
          <div
            className={`transition-all duration-1000 ease-out transform ${
              visibleSections.has("faq")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <FaqAccordion
              items={[
                {
                  q: "What is ZenZop?",
                  a: "ZenZop is an online food market connecting you with local stores for fast delivery.",
                },
                {
                  q: "Is ZenZop available in my area?",
                  a: "We’re rapidly expanding. Open the app and enter your address to check availability.",
                },
                {
                  q: "How can I track my delivery?",
                  a: "You can track your order in real-time within the app from checkout to delivery.",
                },
                {
                  q: "How long does it take to deliver?",
                  a: "Most orders arrive within minutes depending on distance and store preparation time.",
                },
                {
                  q: "What can I expect from the app?",
                  a: "A smooth browsing and checkout experience with secure payments and live updates.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Download App Section - matched structure to rider */}
      <section>
        <Container className="py-8 md:py-10 lg:py-10">
          <DownloadAppSection
            title="Download the User app now!"
            subtitle={
              <>
                Start shopping with ZenZop <br /> Download the app and begin
                your journey
              </>
            }
            image={iPhone17}
            imageFit="contain"
          />
        </Container>
      </section>
    </main>
  );
}
