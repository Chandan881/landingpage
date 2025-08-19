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

export default function ShopLanding() {
  // Debug: Check if images are imported correctly
  console.log("SupportLocalsImg:", SupportLocalsImg);
  console.log("fastDeliveryImg:", fastDeliveryImg);
  console.log("freshDiningImg:", freshDiningImg);
  console.log("mobileImageVw:", mobileImageVw);
  console.log("payModeImg:", payModeImg);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#E3E1FF] pt-24 py-20 lg:py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Headline */}
            <h1 className="text-[36px] sm:text-[74px] font-[800] text-[#333333] mb-6 leading-[40px] sm:leading-[80px] tracking-[-0.05em] text-center font-helvetica-neue">
              Become a ZenZee merchant and grow your revenue
            </h1>

            {/* Subheading */}
            <p className="text-[16px] sm:text-[22px] font-helvetica-neue font-[500] text-[#686868] mb-12 leading-[30px] tracking-[-0.05em] text-center max-w-3xl mx-auto">
              <span className="block sm:block">
                ZenZee merchants enjoy more orders, increased sales, and
                unmatched visibility — sign up today and reap the benefits!
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

      {/* ZenZop Benefits Section */}
      <section>
        <Container className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Achieve more with Zenzee
            </h2>
          </div>

          {/* Mobile: Horizontal scroll, Desktop: Grid */}
          <div className="mt-8 lg:hidden overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory -mx-2 px-2">
            <div className="flex gap-4 min-w-max pr-2 mx-auto justify-center">
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
                <div key={f.t} className="snap-start w-[280px] flex-shrink-0">
                  <div className="bg-[#F3F2FA] rounded-2xl p-6 h-full shadow-lg border border-gray-100">
                    <div className="relative w-[65%] mx-auto rounded-lg overflow-hidden mb-4">
                      <Image
                        src={f.image}
                        alt={f.t}
                        width={200}
                        height={270}
                        className="w-full h-auto object-cover rounded-lg"
                        unoptimized
                        priority
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {f.t}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {f.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="mt-8 hidden lg:grid grid-cols-3 gap-6">
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
              <div key={f.t} className="bg-[#F3F2FA] rounded-2xl p-6 h-full">
                <div className="relative w-[65%] mx-auto rounded-lg overflow-hidden mb-4">
                  <Image
                    src={f.image}
                    alt={f.t}
                    width={200}
                    height={270}
                    className="w-full h-auto object-cover rounded-lg"
                    unoptimized
                    priority
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {f.t}
                </h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  {f.d}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Merchants Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from our successful merchants about their experience with
              ZenZee
            </p>
          </div>
          <TestimonialsCarousel />
        </Container>
      </section>

      {/* Smart Insights Section */}
      <section className="py-16 bg-[#F3F2FA] rounded-[28px] mx-8 lg:mx-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
            {/* Left Section - iPhone Image */}
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-4 sm:p-6 max-w-[320px] sm:max-w-[380px] lg:max-w-none">
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
            <div className="w-full lg:w-1/2 space-y-6 order-1 lg:order-2">
              {/* Section Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
                Smart insights for smart businesses
              </h2>

              {/* Point 1 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-lg sm:text-xl font-bold text-white">
                    1
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Unique users
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    The number of users who made their first order from your
                    restaurant during the week.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-lg sm:text-xl font-bold text-white">
                    2
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Revenue
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    Total order value before discounts, including VAT and
                    excluding delivery fees.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-lg sm:text-xl font-bold text-white">
                    3
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Average order value
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    Better understand your customers' average pre-discount
                    spend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Carousel Section */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our partnerships expand beyond restaurants
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We partner with businesses of all types
            </p>
          </div>
          <PartnershipsCarousel />
        </Container>
      </section>

      {/* First Section - Delivery Boy */}
      <section className="py-16">
        <Container>
          <div className="py-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Image Section */}
              <div className="order-1">
                <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={vegImg}
                    alt="Fresh Vegetables"
                    width={600}
                    height={500}
                    className="w-full h-full object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="order-2">
                <div className="max-w-lg mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Boost your earnings
                  </h2>

                  <ul className="space-y-6 mb-6">
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xl font-bold text-white">1</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Earn more when it's busy
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          Maximise your earnings with our dynamic pricing model,
                          so you get paid more during busy times.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xl font-bold text-white">2</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Earn more tips
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          Customers who value your service can now tip you
                          directly through the app!
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xl font-bold text-white">3</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Get paid more with bonuses
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
      <section className="py-16">
        <Container>
          <div className="py-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Content Section */}
              <div className="order-1">
                <div className="max-w-lg mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Boost your earnings
                  </h2>

                  <ul className="space-y-6 mb-6">
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xl font-bold text-white">1</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Earn more when it's busy
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          Maximise your earnings with our dynamic pricing model,
                          so you get paid more during busy times.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xl font-bold text-white">2</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Earn more tips
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          Customers who value your service can now tip you
                          directly through the app!
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xl font-bold text-white">3</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Get paid more with bonuses
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
                <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={fruitImg}
                    alt="Fresh Fruits"
                    width={600}
                    height={500}
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
      <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <FaqAccordion
            title="Frequently Asked Questions"
            items={[
              {
                q: "How do I get started selling on ZenZee?",
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

      <section>
        <Container className="py-16">
          <DownloadAppSection image={iPhone16} />
        </Container>
      </section>

      {/* Download App Section */}
    </main>
  );
}
