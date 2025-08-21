"use client";

import { useState, useEffect } from "react";
import Container from "@/app/components/atoms/Container";
import Button from "@/app/components/atoms/Button";
import Image from "next/image";
import appleIcon from "@/app/assests/mainLanding/appleIcon.png";
import playStoreIcon from "@/app/assests/mainLanding/playStoreIcon.png";
import FeatureItem from "@/app/components/molecules/FeatureItem";
import SupportLocalsImg from "@/app/assests/mainLanding/dollarImg.png";
import fastDeliveryImg from "@/app/assests/mainLanding/clockImg.png";
import freshDiningImg from "@/app/assests/mainLanding/freeDelImg.png";
import ReusableImageContentSection from "@/app/components/organisms/ReusableImageContentSection";
import mobileImageVw from "@/app/assests/mainLanding/mobileImageVw.png";
import payModeImg from "@/app/assests/mainLanding/payModeImg.png";
import deliveryboy from "@/app/assests/mainLanding/deliveryboy.png";
import deliveryUn from "@/app/assests/mainLanding/deliveryUn.png";
import iPhoneMax from "@/app/assests/mainLanding/iPhoneMax.png";
import FaqAccordion from "@/app/components/organisms/FaqAccordion";
import DownloadAppSection from "@/app/components/organisms/DownloadAppSection";
import mobileImg from "@/app/assests/mainLanding/mobileImg.png";
import groupImg from "@/app/assests/mainLanding/groupImg.png";
import cycleImg from "@/app/assests/mainLanding/cycleImg.png";

export default function RiderLanding() {
  // Debug: Check if images are imported correctly
  console.log("SupportLocalsImg:", SupportLocalsImg);
  console.log("fastDeliveryImg:", fastDeliveryImg);
  console.log("freshDiningImg:", freshDiningImg);
  console.log("deliveryboy:", deliveryboy);
  console.log("deliveryUn:", deliveryUn);
  console.log("iPhoneMax:", iPhoneMax);

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
    <main className="min-h-screen" data-page="rider">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#E3E1FF] pt-12 py-16 sm:pt-34 sm:py-28 lg:py-46 transition-all duration-300">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Headline */}
            <h1 className="text-[36px] sm:text-[74px] font-[800] text-[#333333] mb-6 leading-[40px] sm:leading-[80px] tracking-[-0.05em] text-center font-helvetica-neue animate-fade-in-up">
              Make money
              <br className="hidden sm:block" /> delivering orders
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
                    width={22}
                    height={22}
                    className="w-5 h-5 sm:w-6 sm:h-6 mb-1"
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

      {/* ZenZop Benefits Section */}
      <section id="zenzop-benefits" data-animate>
        <Container className="py-10 sm:py-20 xl:py-40">
          <div
            className={`text-center xl:mb-12 transition-all duration-1000 ease-out transform ${
              visibleSections.has("zenzop-benefits")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <h2 className="text-[30px] lg:text-[50px] font-[800] leading-[88px] tracking-[-0.05em] text-center font-helvetica-neue text-[#000000]">
              ZenZop Benefits
            </h2>
          </div>

          {/* Mobile: Horizontal scroll, Desktop: Grid */}
          <div
            className={` sm:mt-8 xl:mt-8 lg:hidden overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory -mx-2 px-2 py-6 transition-all duration-1000 ease-out transform delay-300 ${
              visibleSections.has("zenzop-benefits")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="flex gap-6 min-w-max pr-2">
              {[
                {
                  t: "Weekly payouts",
                  d: "Receive your earnings at the end of each week, with no monthly fees.",
                  image: SupportLocalsImg,
                },
                {
                  t: "Flexible schedule",
                  d: "Choose when and how often to earn money delivering orders.",
                  image: fastDeliveryImg,
                },
                {
                  t: "Deliver food your way",
                  d: "Want to make money as a delivery? You decide.",
                  image: freshDiningImg,
                },
              ].map((f) => (
                <div
                  key={f.t}
                  className="snap-start w-[280px] flex-shrink-0 first:ml-4 last:mr-4"
                >
                  <FeatureItem title={f.t} description={f.d} image={f.image} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div
            className={`mt-8 hidden lg:grid grid-cols-3 gap-8 py-10 transition-all duration-1000 ease-out transform delay-400 ${
              visibleSections.has("zenzop-benefits")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            {[
              {
                t: "Weekly payouts",
                d: "Receive your earnings at the end of each week, with no monthly fees.",
                image: SupportLocalsImg,
              },
              {
                t: "Flexible schedule",
                d: "Choose when and how often to earn money delivering orders.",
                image: fastDeliveryImg,
              },
              {
                t: "Deliver food your way",
                d: "Want to make money as a delivery,exercise on your bike? You decide.",
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
        </Container>
      </section>

      {/* ZenZop Rider Requirements Section */}
      <section id="rider-requirements" data-animate className="mt-6 xl:mt-16">
        <Container className=" sm:py-6 xl:py-16">
          <div
            className={`text-center mb-12 transition-all duration-1000 ease-out transform ${
              visibleSections.has("rider-requirements")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <h2 className="text-[30px] lg:text-[50px] font-[800] leading-[44px] md:leading-[88px] tracking-[-0.05em] text-center font-helvetica-neue text-[#000000]">
              Zenzop Rider requirements
            </h2>
          </div>

          {/* Mobile: Vertical Stack, Desktop: Grid */}
          <div
            className={`mt-8 lg:hidden transition-all duration-1000 ease-out transform delay-300 ${
              visibleSections.has("rider-requirements")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="space-y-6 px-4">
              {[
                {
                  image: groupImg,
                  title: "Valid Photo ID",
                  description:
                    "Proving that you meet the minimum age requirement.",
                },
                {
                  image: mobileImg,
                  title: "Smartphone",
                  description: "Android 9.0+ or iOS 12+, with a local number.",
                },
                {
                  image: cycleImg,
                  title: "Scooter, Bike or Car",
                  description:
                    "With a valid licence and insurance registered in your name.",
                },
              ].map((item, index) => (
                <div key={index} className="w-full">
                  <div className="mt-12">
                    <div className="mb-2 xl:mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-left font-helvetica-neue text-[#000000] font-[500] text-[18px] sm:text-[24px] md:text-[28px] leading-[40px] sm:leading-[52px] md:leading-[64px] tracking-[-0.05em] mb-3">
                      {item.title}
                    </h3>
                    <p className="font-helvetica-neue font-[500] text-[14px] md:text-[16px] xl:text-[16px] leading-[27px] tracking-[-0.03em] text-left text-[#858298] line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div
            className={`mt-0 xl:mt-30 ml-20 hidden lg:grid grid-cols-3 gap-20 mx-auto justify-between transition-all duration-1000 ease-out transform delay-400 ${
              visibleSections.has("rider-requirements")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            {[
              {
                image: groupImg,
                title: "Valid Photo ID",
                description:
                  "Proving that you meet the minimum age requirement.",
              },
              {
                image: mobileImg,
                title: "Smartphone",
                description: "Android 9.0+ or iOS 12+, with a local number.",
              },
              {
                image: cycleImg,
                title: "Scooter, Bike or Car",
                description:
                  "With a valid licence and insurance registered in your name.",
              },
            ].map((item, index) => (
              <div key={index} className="p-0 h-full">
                <div className="mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-left font-helvetica-neue text-[#000000] font-[500] text-[22px] sm:text-[24px] md:text-[28px] leading-[40px] sm:leading-[52px] md:leading-[64px] tracking-[-0.05em] mb-3 whitespace-nowrap">
                  {item.title}
                </h3>
                <p className="font-helvetica-neue font-[500] text-[20px] leading-[27px] tracking-[-0.03em] text-left text-[#858298] line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Boost Your Earnings Section - Custom Implementation */}
      <section id="boost-earnings" data-animate className="py-16">
        <Container className="max-w-none lg:mx-0 px-0">
          {/* First Section - Delivery Boy */}
          <div
            className={`py-16 transition-all duration-1000 ease-out transform ${
              visibleSections.has("boost-earnings")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full mx-0">
              {/* Image Section */}
              <div className="order-1">
                <div className="relative w-full h-[346px] sm:h-[454px] md:h-[562px] lg:h-[631px] rounded-2xl overflow-hidden">
                  <Image
                    src={deliveryboy}
                    alt="Delivery Boy"
                    width={659}
                    height={631}
                    className="w-full h-full object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="order-2">
                <div className="w-full">
                  <h2 className="text-[30px] lg:text-[42px] font-[800] leading-[48px] tracking-[-0.05em]  font-helvetica-neue text-[#000000] mb-10">
                    Boost your earnings
                  </h2>

                  <ul className="space-y-8">
                    <li className="flex items-start gap-4 relative">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-lg flex-shrink-0">
                        <span className="text-sm sm:text-lg lg:text-xl font-bold text-white">
                          1
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-[24px] font-helvetica-neue font-[700] leading-[32px] sm:leading-[36px] lg:leading-[48px] tracking-[-0.03em] text-[#000000] mb-2">
                          Earn more when it&apos;s busy
                        </h4>
                        <p className="text-[17px] lg:text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.03em] text-[#858298]">
                          Maximise your earnings with our dynamic pricing model,
                          so you get paid more during busy times.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 relative">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-lg flex-shrink-0">
                        <span className="text-sm sm:text-lg lg:text-xl font-bold text-white">
                          2
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-[24px] font-helvetica-neue font-[700] leading-[32px] sm:leading-[36px] lg:leading-[48px] tracking-[-0.03em] text-[#000000] mb-2">
                          Earn more tips
                        </h4>
                        <p className="text-[17px] lg:text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.03em] text-[#858298]">
                          Customers who value your service can now tip you
                          directly through the app!
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 relative">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-lg flex-shrink-0">
                        <span className="text-sm sm:text-lg lg:text-xl font-bold text-white">
                          3
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-[24px] font-helvetica-neue font-[700] leading-[32px] sm:leading-[36px] lg:leading-[48px] tracking-[-0.03em] text-[#000000] mb-2">
                          Get paid more with bonuses
                        </h4>
                        <p className="text-[17px] lg:text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.03em] text-[#858298]">
                          Earn more money for completing deliveries on weekends,
                          during late hours or on bad weather days.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section - Delivery Union */}
          <div className="py-0 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full mx-0">
              {/* Content Section */}
              <div className="order-1">
                <div className="w-full">
                  <h2 className="text-[30px] lg:text-[42px] font-[800] leading-[48px] tracking-[-0.05em]  font-helvetica-neue text-[#000000] mb-10">
                    Boost your earnings
                  </h2>

                  <ul className="space-y-8">
                    <li className="flex items-start gap-4 relative">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-lg flex-shrink-0">
                        <span className="text-sm sm:text-lg lg:text-xl font-bold text-white">
                          1
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-[24px] font-helvetica-neue font-[700] leading-[32px] sm:leading-[36px] lg:leading-[48px] tracking-[-0.03em] text-[#000000] mb-2">
                          Earn more when it&apos;s busy
                        </h4>
                        <p className="text-[17px] lg:text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.03em] text-[#858298]">
                          Maximise your earnings with our dynamic pricing model,
                          so you get paid more during busy times.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 relative">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-lg flex-shrink-0">
                        <span className="text-sm sm:text-lg lg:text-xl font-bold text-white">
                          2
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-[24px] font-helvetica-neue font-[700] leading-[32px] sm:leading-[36px] lg:leading-[48px] tracking-[-0.03em] text-[#000000] mb-2">
                          Earn more tips
                        </h4>
                        <p className="text-[17px] lg:text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.03em] text-[#858298]">
                          Customers who value your service can now tip you
                          directly through the app!
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 relative">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-lg flex-shrink-0">
                        <span className="text-sm sm:text-lg lg:text-xl font-bold text-white">
                          3
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-[24px] font-helvetica-neue font-[700] leading-[32px] sm:leading-[36px] lg:leading-[48px] tracking-[-0.03em] text-[#000000] mb-2">
                          Get paid more with bonuses
                        </h4>
                        <p className="text-[17px] lg:text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.03em] text-[#858298]">
                          Earn more money for completing deliveries on weekends,
                          during late hours or on bad weather days.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image Section */}
              <div className="order-2">
                <div className="relative w-full h-[346px] sm:h-[454px] md:h-[562px] lg:h-[631px] rounded-2xl overflow-hidden">
                  <Image
                    src={deliveryUn}
                    alt="Delivery Union"
                    width={659}
                    height={631}
                    className="w-full h-full object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How the Rider app works Section */}
      <section id="how-app-works" data-animate className="py-0 lg:py-16">
        <Container>
          <div
            className={`text-center mb-12 transition-all duration-1000 ease-out transform ${
              visibleSections.has("how-app-works")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <h2 className="text-[30px] lg:text-[50px] font-helvetica-neue font-[800] leading-[88px] tracking-[-0.05em] text-center text-[#000000]">
              How the Rider app works
            </h2>
            <p className="mt-4 text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.05em] text-center text-[#88878E] max-w-3xl mx-auto">
              Our app is designed to help couriers receive, deliver and manage
              <br className="hidden lg:block" />
              orders easily and effectively.
            </p>
          </div>

          <div className="w-full max-w-7xl mx-auto">
            {/* Layout: Phone in center, cards positioned around it */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Left Column - 2 cards stacked */}
              <div className="space-y-4 order-1 lg:order-1 h-[614px] flex flex-col justify-center">
                {/* Step 1 */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 text-center lg:text-left h-[296px] flex flex-col justify-center w-full lg:w-[414px] max-w-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4">
                    <span className="text-[12px] font-helvetica-neue font-[500] leading-[27px] tracking-[0.05em] text-[#858298]">
                      STEP 1
                    </span>
                  </div>
                  <h3 className="text-[28px] font-helvetica-neue font-[500] leading-[64px] tracking-[-0.05em] text-[#342CA1] mb-3">
                    Receive orders
                  </h3>
                  <p className="text-[17px] lg:text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.03em] text-[#858298] line-clamp-2">
                    View incoming orders, check their details, and get going.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 text-center lg:text-left h-[296px] flex flex-col justify-center w-full lg:w-[414px] max-w-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4">
                    <span className="text-[12px] font-helvetica-neue font-[500] leading-[27px] tracking-[0.05em] text-[#858298]">
                      STEP 2
                    </span>
                  </div>
                  <h3 className="text-[28px] font-helvetica-neue font-[500] leading-[64px] tracking-[-0.05em] text-[#342CA1] mb-3">
                    Pick up the order
                  </h3>
                  <p className="text-[17px] lg:text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.03em] text-[#858298] line-clamp-2">
                    Collect the order from the restaurant or store.
                  </p>
                </div>
              </div>

              {/* Center Column - Phone Image */}
              <div className="flex justify-center order-2 lg:order-2 h-[614px] flex items-center">
                <div className="relative bg-purple-50 dark:bg-purple-900/20 rounded-2xl px-[100px] py-8 h-[614px] flex items-center justify-center w-full lg:w-[500px] max-w-full">
                  <Image
                    src={iPhoneMax}
                    alt="Rider App Interface"
                    width={289}
                    height={606}
                    className="w-[280px] sm:w-[320px] h-auto max-h-[560px] object-contain absolute bottom-4"
                    unoptimized
                    priority
                  />
                </div>
              </div>

              {/* Right Column - 2 cards stacked */}
              <div className="space-y-4 order-3 lg:order-3 h-[614px] flex flex-col justify-center">
                {/* Step 3 */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 text-center lg:text-left h-[296px] flex flex-col justify-center w-full lg:w-[414px] max-w-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4">
                    <span className="text-[12px] font-helvetica-neue font-[500] leading-[27px] tracking-[0.05em] text-[#858298]">
                      STEP 3
                    </span>
                  </div>
                  <h3 className="text-[28px] font-helvetica-neue font-[500] leading-[64px] tracking-[-0.05em] text-[#342CA1] mb-3">
                    Deliver
                  </h3>
                  <p className="text-[17px] lg:text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.03em] text-[#858298] line-clamp-2">
                    Head to the delivery address as quickly and safely as
                    possible.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 text-center lg:text-left h-[296px] flex flex-col justify-center w-full lg:w-[414px] max-w-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4">
                    <span className="text-[12px] font-helvetica-neue font-[500] leading-[27px] tracking-[0.05em] text-[#858298]">
                      STEP 4
                    </span>
                  </div>
                  <h3 className="text-[28px] font-helvetica-neue font-[500] leading-[64px] tracking-[-0.05em] text-[#342CA1] mb-3">
                    Track your earnings
                  </h3>
                  <p className="text-[17px] lg:text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.03em] text-[#858298] line-clamp-2">
                    Track your progress in real-time and view your earnings
                    easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" data-animate className="py-16">
        <Container>
          <div
            className={`transition-all duration-1000 ease-out transform ${
              visibleSections.has("faq")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <FaqAccordion
              title="Frequently Asked Questions"
              items={[
                {
                  q: "What are the basic requirements to become a rider?",
                  a: "You need to be 18+ years old, have a valid ID proof, own a smartphone, and have a two-wheeler or bicycle. We also require background verification for safety.",
                },
                {
                  q: "What type of vehicle do I need?",
                  a: "We accept motorcycles, scooters, and bicycles. Your vehicle should be in good condition and meet local safety standards. Electric vehicles are also welcome!",
                },
                {
                  q: "How much can I earn as a rider?",
                  a: "Earnings vary based on the number of deliveries, distance covered, and time spent. On average, riders earn ₹300-800 per day, with potential for more during peak hours.",
                },
                {
                  q: "How do I get paid?",
                  a: "We offer weekly payouts directly to your bank account. You can track your earnings in real-time through the rider app, and payments are processed every Monday.",
                },
                {
                  q: "What support do you provide to riders?",
                  a: "We offer 24/7 customer support, in-app navigation, insurance coverage, and regular training sessions. Our team is always available to help you succeed.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Download App Section - matched structure to shop */}
      <section>
        <Container className="py-0 lg:py-16">
          <DownloadAppSection
            title="Download the user app now!"
            subtitle={
              <>
                Start earning with ZenZop <br /> Download the app and begin your
                journey
              </>
            }
            image={iPhoneMax}
            imageFit="contain"
          />
        </Container>
      </section>
    </main>
  );
}
