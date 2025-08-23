"use client";
import { useEffect, useState } from "react";
import Container from "@/app/components/atoms/Container";
import Button from "@/app/components/atoms/Button";
import Image from "next/image";
import appleIcon from "@/app/assests/mainLanding/appleIcon.png";
import playStoreIcon from "@/app/assests/mainLanding/playStoreIcon.png";
import mobileImageVw from "@/app/assests/mainLanding/mobileImageVw.png";
import payModeImg from "@/app/assests/mainLanding/payModeImg.png";
import SupportLocalsImg from "@/app/assests/mainLanding/collectImg.png";
import fastDeliveryImg from "@/app/assests/mainLanding/heartImg.png";
import freshDiningImg from "@/app/assests/mainLanding/scooterImg.png";
import iPhone16 from "@/app/assests/mainLanding/iPhone16.png";
import deliveryUn from "@/app/assests/mainLanding/deliveryUn.png";
import deliveryboy from "@/app/assests/mainLanding/deliveryboy.png";
import vegImg from "@/app/assests/mainLanding/vegImg.png";
import fruitImg from "@/app/assests/mainLanding/fruitImg.png";
import FaqAccordion from "@/app/components/organisms/FaqAccordion";
import DownloadAppSection from "@/app/components/organisms/DownloadAppSection";
import TestimonialsCarousel from "@/app/components/organisms/TestimonialsCarousel";
import PartnershipsCarousel from "@/app/components/organisms/PartnershipsCarousel";
import FeatureItem from "@/app/components/molecules/FeatureItem";

export default function ShopLanding() {
  // Debug: Check if images are imported correctly
  console.log("SupportLocalsImg:", SupportLocalsImg);
  console.log("fastDeliveryImg:", fastDeliveryImg);
  console.log("freshDiningImg:", freshDiningImg);
  console.log("mobileImageVw:", mobileImageVw);
  console.log("payModeImg:", payModeImg);

  const [visibleSections, setVisibleSections] = useState(new Set());

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

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen" data-page="shop">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#E3E1FF] pt-12 py-16 sm:pt-34 sm:py-28 lg:py-36 transition-all duration-300">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Headline */}
            <h1 className="text-[36px] sm:text-[74px] font-[800] text-[#333333] mb-6 leading-[40px] sm:leading-[80px] tracking-[-0.05em] text-center font-helvetica-neue animate-fade-in-up">
              Become a merchant
              <br className="hidden sm:block" />
              and grow
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
      <section id="shop-benefits" data-animate>
        <Container className="py-0 lg:py-16 mt-8 lg:mt-30">
          <div
            className={`text-center mb-0 lg:mb-12 transition-all duration-1000 ease-out transform ${
              visibleSections.has("shop-benefits")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <h2 className="font-helvetica-neue font-[800] text-[28px] lg:text-[50px] leading-[88px] tracking-[-0.05em] text-center text-[#000000]">
              Achieve more with Zenzop
            </h2>
          </div>

          {/* Mobile: Horizontal scroll using FeatureItem structure */}
          <div
            className={`mt-0 lg:mt-8 lg:hidden overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-4 py-0 lg:py-6 transition-all duration-1000 ease-out transform delay-300 ${
              visibleSections.has("shop-benefits")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="flex gap-6 min-w-max pr-4">
              {[
                {
                  t: "Increase Your Sales",
                  d: "Reach more customers and boost your revenue with our growing user base and marketing support",
                  image: SupportLocalsImg,
                },
                {
                  t: "Easy Order Management",
                  d: "Streamline your operations with our intuitive dashboard and automated order processing",
                  image: fastDeliveryImg,
                },
                {
                  t: "24/7 Customer Support",
                  d: "Get help whenever you need it with our dedicated business support team automated order processing",
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

          {/* Desktop: Grid layout using FeatureItem */}
          <div
            className={` mt-8 hidden lg:grid grid-cols-3 gap-8 py-10 transition-all duration-1000 ease-out transform delay-400 ${
              visibleSections.has("shop-benefits")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            {[
              {
                t: "Increase Your Sales",
                d: "Reach more customers and boost your revenue with our growing user base and marketing support",
                image: SupportLocalsImg,
              },
              {
                t: "Easy Order Management",
                d: "Streamline your operations with our intuitive dashboard and automated order processing",
                image: fastDeliveryImg,
              },
              {
                t: "24/7 Customer Support",
                d: "Get help whenever you need it with our dedicated business support team",
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

      {/* Testimonials Section */}
      <section className="py-8 lg:py-26">
        <Container>
          {/* <div className="text-center mb-12">
            <h2 className="font-helvetica-neue font-[800] text-[50px] leading-[88px] tracking-[-0.05em] text-center text-[#000000] mb-4">
              What Our Merchants Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from our successful merchants about their experience with
              ZenZee
            </p>
          </div> */}
          <TestimonialsCarousel />
        </Container>
      </section>

      {/* Smart Insights Section */}
      <section id="smart-insights" data-animate className="py-10 lg:py-16">
        <Container>
          <div
            className={`bg-[#F3F2FA] rounded-[28px] px-6 sm:px-10 md:px-16 lg:px-0 py-12 group shadow-lg transition-all duration-1000 ease-out transform ${
              visibleSections.has("smart-insights")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
              {/* Left Section - iPhone Image */}
              <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                <div className="bg-white rounded-2xl p-4 sm:p-6 max-w-[320px] sm:max-w-[380px] lg:max-w-none transform transition-transform duration-300 ease-out group-hover:scale-110">
                  <Image
                    src={iPhone16}
                    alt="Smart Insights App"
                    width={380}
                    height={720}
                    className="w-[250px] sm:w-[300px] lg:w-[380px] h-auto object-contain"
                    unoptimized
                    priority
                  />
                </div>
              </div>

              {/* Right Section - Title and Numbered Points */}
              <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2 max-w-[640px] mx-auto lg:mx-0">
                {/* Section Title */}
                <h2 className="mb-10  font-helvetica-neue font-[800]  text-[28px] lg:text-[50px] leading-[32px] sm:leading-[50px] lg:leading-[88px] tracking-[-0.05em]  text-[#000000] mb-6">
                  <span className="whitespace-nowrap">
                    Smart insights for smart
                  </span>
                  <br />
                  <span>businesses</span>
                </h2>

                {/* Point 1 */}
                <div className="flex items-start gap-4 relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-lg flex-shrink-0">
                    <span className="text-sm sm:text-lg lg:text-xl font-bold text-white">
                      1
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-[24px] font-helvetica-neue font-[700] leading-[32px] sm:leading-[36px] lg:leading-[48px] tracking-[-0.03em] text-[#000000] mb-2">
                      Unique users
                    </h4>
                    <p className="text-[17px] lg:text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.03em] text-[#858298]">
                      The number of users who made their first order from your
                      restaurant during the week.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex items-start gap-4 relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-lg flex-shrink-0">
                    <span className="text-sm sm:text-lg lg:text-xl font-bold text-white">
                      2
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-[24px] font-helvetica-neue font-[700] leading-[32px] sm:leading-[36px] lg:leading-[48px] tracking-[-0.03em] text-[#000000] mb-2">
                      Revenue
                    </h4>
                    <p className="text-[17px] lg:text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.03em] text-[#858298]">
                      Total order value before discounts, including VAT and
                      excluding delivery fees.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex items-start gap-4 relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-lg flex-shrink-0">
                    <span className="text-sm sm:text-lg lg:text-xl font-bold text-white">
                      3
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-[24px] font-helvetica-neue font-[700] leading-[32px] sm:leading-[36px] lg:leading-[48px] tracking-[-0.03em] text-[#000000] mb-2">
                      Average order value
                    </h4>
                    <p className="text-[17px] lg:text-[20px] font-helvetica-neue font-[500] leading-[27px] tracking-[-0.03em] text-[#858298]">
                      Better understand your customers&apos; average
                      pre-discount spend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Partnerships Carousel Section */}
      <section id="partnerships" data-animate className="py-16">
        <Container>
          <div
            className={`text-center mb-12 transition-all duration-1000 ease-out transform ${
              visibleSections.has("partnerships")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <h2 className="font-helvetica-neue font-[800] text-[28px] lg:text-[50px] leading-[40px] sm:leading-[50px] lg:leading-[88px] tracking-[-0.05em] text-center text-[#000000]">
              Our partnerships expand beyond restaurants
            </h2>
            <p className="mt-4 font-helvetica-neue font-[500]  text-[17px] lg:text-[20px] leading-[27px] tracking-[-0.05em] text-center text-[#88878E] max-w-3xl mx-auto">
              We partner with businesses of all types
            </p>
          </div>
          <PartnershipsCarousel />
        </Container>
      </section>

      {/* First Section - Delivery Boy */}
      <section id="shop-first" data-animate className="py-0 lg:py-16">
        <Container>
          <div
            className={`py-16 transition-all duration-1000 ease-out transform ${
              visibleSections.has("shop-first")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full mx-0">
              {/* Image Section */}
              <div className="order-1">
                <div className="relative w-full h-[346px] sm:h-[454px] md:h-[562px] lg:h-[631px] rounded-2xl overflow-hidden">
                  <Image
                    src={vegImg}
                    alt="Fresh Vegetables"
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
                    <li className="flex gap-3 relative">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border border-white shadow mt-1">
                        <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-white">
                          1
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-[20px] sm:text-[22px] lg:text-[24px] font-helvetica-neue font-[700] leading-[28px] sm:leading-[32px] lg:leading-[36px] tracking-[-0.03em] text-[#000000] mt-1">
                          Earn more when it&apos;s busy
                        </h4>
                        <p className="mt-4 text-[15px] sm:text-[16px] lg:text-[20px] font-helvetica-neue font-[500] leading-[24px] sm:leading-[26px] lg:leading-[27px] tracking-[-0.03em] text-[#858298]">
                          Maximise your earnings with our dynamic pricing model,
                          so you get paid more during busy times.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-3 relative">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border border-white shadow mt-1">
                        <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-white">
                          2
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-[20px] sm:text-[22px] lg:text-[24px] font-helvetica-neue font-[700] leading-[28px] sm:leading-[32px] lg:leading-[36px] tracking-[-0.03em] text-[#000000] mt-1">
                          Earn more tips
                        </h4>
                        <p className="mt-4 text-[15px] sm:text-[16px] lg:text-[20px] font-helvetica-neue font-[500] leading-[24px] sm:leading-[26px] lg:leading-[27px] tracking-[-0.03em] text-[#858298]">
                          Customers who value your service can now tip you
                          directly through the app!
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-3 relative">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border border-white shadow mt-1">
                        <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-white">
                          3
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-[20px] sm:text-[22px] lg:text-[24px] font-helvetica-neue font-[700] leading-[28px] sm:leading-[32px] lg:leading-[36px] tracking-[-0.03em] text-[#000000] mt-1">
                          Get paid more with bonuses
                        </h4>
                        <p className="mt-4 text-[15px] sm:text-[16px] lg:text-[20px] font-helvetica-neue font-[500] leading-[24px] sm:leading-[26px] lg:leading-[27px] tracking-[-0.03em] text-[#858298]">
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
        </Container>
      </section>

      {/* Second Section - Delivery Union */}
      <section id="shop-second" data-animate className="py-0 lg:py-16">
        <Container>
          <div
            className={`py-16 transition-all duration-1000 ease-out transform ${
              visibleSections.has("shop-second")
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full mx-0">
              {/* Content Section */}
              <div className="order-1">
                <div className="w-full">
                  <h2 className="text-[30px] lg:text-[42px] font-[800] leading-[48px] tracking-[-0.05em]  font-helvetica-neue text-[#000000] mb-10">
                    Join for earnings
                  </h2>

                  <ul className="space-y-8">
                    <li className="flex gap-3 relative">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border border-white shadow mt-1">
                        <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-white">
                          1
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-[20px] sm:text-[22px] lg:text-[24px] font-helvetica-neue font-[700] leading-[28px] sm:leading-[32px] lg:leading-[36px] tracking-[-0.03em] text-[#000000] mt-1">
                          Earn more when it&apos;s busy
                        </h4>
                        <p className="mt-4 text-[15px] sm:text-[16px] lg:text-[20px] font-helvetica-neue font-[500] leading-[24px] sm:leading-[26px] lg:leading-[27px] tracking-[-0.03em] text-[#858298]">
                          Maximise your earnings with our dynamic pricing model,
                          so you get paid more during busy times.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-3 relative">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border border-white shadow mt-1">
                        <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-white">
                          2
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-[20px] sm:text-[22px] lg:text-[24px] font-helvetica-neue font-[700] leading-[28px] sm:leading-[32px] lg:leading-[36px] tracking-[-0.03em] text-[#000000] mt-1">
                          Earn more tips
                        </h4>
                        <p className="mt-4 text-[15px] sm:text-[16px] lg:text-[20px] font-helvetica-neue font-[500] leading-[24px] sm:leading-[26px] lg:leading-[27px] tracking-[-0.03em] text-[#858298]">
                          Customers who value your service can now tip you
                          directly through the app!
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-3 relative">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#342CA1] rounded-full flex items-center justify-center flex-shrink-0 border border-white shadow mt-1">
                        <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-white">
                          3
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-[20px] sm:text-[22px] lg:text-[24px] font-helvetica-neue font-[700] leading-[28px] sm:leading-[32px] lg:leading-[36px] tracking-[-0.03em] text-[#000000] mt-1">
                          Get paid more with bonuses
                        </h4>
                        <p className="mt-4 text-[15px] sm:text-[16px] lg:text-[20px] font-helvetica-neue font-[500] leading-[24px] sm:leading-[26px] lg:leading-[27px] tracking-[-0.03em] text-[#858298]">
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
                    src={fruitImg}
                    alt="Fresh Fruits"
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

      {/* FAQ Section */}
      <section id="faq" className="py-6 lg:py-16">
        <Container>
          <FaqAccordion
            title="Frequently Asked Questions"
            items={[
              {
                q: "How do I get started selling on Zenzop?",
                a: "Getting started is easy! Simply download our business app, create your shop profile, upload your products, and start receiving orders. Our team will guide you through the entire process.",
              },
              {
                q: "What are the commission rates?",
                a: "We offer competitive commission rates starting from just 5%. The exact rate depends on your business category and sales volume. Contact our business team for detailed pricing.",
              },
              {
                q: "How do I manage my inventory?",
                a: "Our dashboard provides real-time inventory management. You can easily update stock levels, add new products, and manage your catalog from anywhere using our mobile app.",
              },
              {
                q: "What support do you provide for businesses?",
                a: "We provide 24/7 business support, marketing assistance, promotional campaigns, and dedicated account managers to help you grow your business on our platform.",
              },
              {
                q: "How quickly do I get paid?",
                a: "We process payments weekly, so you'll receive your earnings every week. For high-volume sellers, we also offer daily payout options.",
              },
            ]}
          />
        </Container>
      </section>

      {/* Download App Section - matched structure to rider */}
      <section>
        <Container className="py-16">
          <DownloadAppSection
            title="Download the Shop app now!"
            subtitle={
              <>
                Start selling with ZenZop <br /> Download the app and begin your
                journey
              </>
            }
            image={iPhone16}
            imageFit="contain"
          />
        </Container>
      </section>
    </main>
  );
}
