export const metadata = { title: "User | Landing" };

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
import appleIcon from "@/app/assests/mainLanding/appleIcon.png";
import playStoreIcon from "@/app/assests/mainLanding/playStoreIcon.png";

export default function UserLanding() {
  // Debug: Check if images are imported correctly
  console.log("GrocerieImg:", GrocerieImg);
  console.log("SellZenZopImg:", SellZenZopImg);
  console.log("iPhone16:", iPhone16);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#E3E1FF] pt-34 py-28 lg:py-46">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Headline */}
            <h1 className="text-[36px] sm:text-[74px] font-[800] text-[#333333] mb-6 leading-[40px] sm:leading-[80px] tracking-[-0.05em] text-center font-helvetica-neue">
              Groceries Delivered
              <br className="hidden sm:block" /> in minutes
            </h1>

            {/* Subheading */}
            <p className="text-[16px] sm:text-[22px] font-helvetica-neue font-[500] text-[#686868] mb-12 leading-[30px] tracking-[-0.05em] text-center max-w-3xl mx-auto">
              <span className="block sm:block">
                Zenzop is a supermarket in your pocket
              </span>
              <span className="block sm:block">
                - try it now in your favourite device
              </span>
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#download"
                className="bg-[#171717] hover:bg-[#2a2a2a] text-white px-8 py-4 text-lg font-semibold rounded-xl transition-colors duration-300 flex items-center gap-3"
              >
                <Image
                  src={appleIcon}
                  alt="App Store Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  unoptimized
                />
                <span className="font-helvetica-neue font-[400] text-[16px] leading-[25.6px] tracking-[-0.16px] text-center">
                  Download now
                </span>
              </Button>
              <Button
                href="#download"
                className="bg-[#171717] hover:bg-[#2a2a2a] text-white px-8 py-4 text-lg font-semibold rounded-xl transition-colors duration-300 flex items-center gap-3"
              >
                <Image
                  src={playStoreIcon}
                  alt="Play Store Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  unoptimized
                />
                <span className="font-helvetica-neue font-[400] text-[16px] leading-[25.6px] tracking-[-0.16px] text-center">
                  Download now
                </span>
              </Button>
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
            sizes="100vw"
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
      <section>
        <Container className="pt-32 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[32px] sm:text-[50px] font-[800] text-[#000000] mb-6 leading-[40px] sm:leading-[88px] tracking-[-0.05em] text-center font-helvetica-neue">
              What is ZenZop?
            </h2>
            <p className="text-[16px] sm:text-[20px] font-helvetica-neue font-[500] text-[#88878E] leading-[22px] sm:leading-[27px] tracking-[-0.05em] text-center max-w-3xl mx-auto">
              ZenZop is an online food market, offering a wide selection of
              products, from fresh produce to pantry staples, household
              essentials, and more. The best bit? It&apos;s fast, convenient and
              easy. You can have your groceries delivered direct to your door
              within 10 minutes.
            </p>
          </div>
        </Container>

        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <div className="mt-12 lg:hidden overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory -mx-2 px-2">
          <div className="flex gap-4 min-w-max pr-2">
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
              <div key={f.t} className="snap-start w-[280px] flex-shrink-0">
                <FeatureItem title={f.t} description={f.d} image={f.image} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="mt-12 hidden lg:grid grid-cols-3 gap-6 max-w-6xl lg:max-w-none mx-auto lg:mx-[160px] px-6 sm:px-10 md:px-16 lg:px-0">
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
      <LocalStoresSection />

      {/* How to order groceries with Zenzop */}
      <section>
        <Container className="py-16 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[32px] sm:text-[50px] font-[800] text-[#000000] mb-6 leading-[40px] sm:leading-[88px] tracking-[-0.05em] text-center font-helvetica-neue">
              How to order groceries
              <br />
              with Zenzop
            </h2>
          </div>
        </Container>
      </section>

      {/* Local Stores Carousel */}
      <section>
        <Container className="py-16">
          <LocalStoresCarousel />
        </Container>
      </section>

      {/* What our users has to say */}

      {/* Testimonials (Carousel) */}
      <section>
        <Container className="py-16 px-0 sm:px-0 md:px-0 mx-0 lg:mx-0">
          <h3 className="text-2xl font-semibold text-center mb-8">
            What our users has to say
          </h3>
          <TestimonialsCarousel />
        </Container>
      </section>

      {/* CTA to sell */}
      <section className="bg-[#0E0B3D] text-white">
        <Container className="py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-6xl font-bold leading-tight">
              Want to sell your products
              <br /> with ZenZop?
            </h2>
            <p className="mt-3 text-white/80">
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
          <div className="mt-10 rounded-2xl overflow-hidden bg-white/10 border border-white/20">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gray-300 overflow-hidden">
              <Image
                src={SellZenZopImg}
                alt="Sell on ZenZop"
                width={1200}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
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
      <section>
        <Container className="py-16">
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
        </Container>
      </section>

      {/* Download App - reusable */}
      <section>
        <Container className="py-16">
          <DownloadAppSection image={iPhone16} />
        </Container>
      </section>
    </main>
  );
}
