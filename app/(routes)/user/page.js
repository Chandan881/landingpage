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

export default function UserLanding() {
  // Debug: Check if images are imported correctly
  console.log("GrocerieImg:", GrocerieImg);
  console.log("SellZenZopImg:", SellZenZopImg);
  console.log("iPhone16:", iPhone16);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#E3E1FF] pt-24 py-20 lg:py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Groceries Delivered
              <br className="hidden sm:block" /> in minutes
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Zenzap is everything you need to get your groceries fast.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#download"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-colors duration-300"
              >
                Download
              </Button>
              <Button
                href="#how"
                variant="secondary"
                className="px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Browse stores
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Edge-to-edge banner image strip */}
      <section aria-hidden className="w-full">
        <div className="relative h-48 sm:h-56 md:h-80 lg:h-[28rem] xl:h-[28rem] bg-gray-200 overflow-hidden">
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

      {/* What is Zenzap */}
      <section>
        <Container className="py-16">
          <SectionTitle
            title="What is ZenZop?"
            subtitle="ZenZop is an online food market, offering a wide selection of products, from fresh produce to pantry staples, household essentials, and more. The best bit? It's fast, convenient and easy. You can have your groceries delivered direct to your door within 10 minutes."
          />
          {/* Mobile: Horizontal scroll, Desktop: Grid */}
          <div className="mt-8 lg:hidden overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory -mx-2 px-2">
            <div className="flex gap-4 min-w-max pr-2">
              {[
                {
                  t: "Support Local Businesses",
                  d: "Your orders directly help neighborhood stores thrive and grow",
                  image: SupportLocalsImg,
                },
                {
                  t: "Lightning-Fast Delivery",
                  d: "Get groceries in 5-10 minutes or less from shops just around the corner",
                  image: fastDeliveryImg,
                },
                {
                  t: "Fresh & Diverse Selection",
                  d: "Access the best products from multiple local stores in one place",
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
          <div className="mt-8 hidden lg:grid grid-cols-3 gap-6">
            {[
              {
                t: "Support Local Businesses",
                d: "Your orders directly help neighborhood stores thrive and grow",
                image: SupportLocalsImg,
              },
              {
                t: "Lightning-Fast Delivery",
                d: "Get groceries in 5-10 minutes or less from shops just around the corner",
                image: fastDeliveryImg,
              },
              {
                t: "Fresh & Diverse Selection",
                d: "Access the best products from multiple local stores in one place",
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

      {/* Bringing Local Stores Closer to You */}
      <LocalStoresSection />

      {/* Local Stores Carousel */}
      <section>
        <Container className="py-16">
          <div className="mb-8 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-semibold">
              How to order groceries with ZenZop
            </h3>
          </div>
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
