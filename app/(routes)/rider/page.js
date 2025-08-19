export const metadata = { title: "Rider | Landing" };

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

export default function RiderLanding() {
  // Debug: Check if images are imported correctly
  console.log("SupportLocalsImg:", SupportLocalsImg);
  console.log("fastDeliveryImg:", fastDeliveryImg);
  console.log("freshDiningImg:", freshDiningImg);
  console.log("deliveryboy:", deliveryboy);
  console.log("deliveryUn:", deliveryUn);
  console.log("iPhoneMax:", iPhoneMax);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#E3E1FF] py-20 lg:py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Deliver with ZenZop and
              <br className="hidden sm:block" /> earn on your schedule
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              ZenZop is everything you need to start earning as a delivery
              partner.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#download"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-colors duration-300 flex items-center gap-2"
              >
                <Image src={appleIcon} alt="App Store" width={20} height={20} />
                Download
              </Button>
              <Button
                href="#how"
                variant="secondary"
                className="px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Browse opportunities
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
              ZenZop Benefits
            </h2>
          </div>

          {/* Mobile: Horizontal scroll, Desktop: Grid */}
          <div className="mt-8 lg:hidden overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory -mx-2 px-2">
            <div className="flex gap-4 min-w-max pr-2 mx-auto justify-center">
              {[
                {
                  t: "Flexible Work Schedule",
                  d: "Work whenever you want - mornings, evenings, or weekends. You control your own hours",
                  image: SupportLocalsImg,
                },
                {
                  t: "Competitive Earnings",
                  d: "Earn ₹300-800+ per day with transparent pricing and weekly payouts",
                  image: fastDeliveryImg,
                },
                {
                  t: "24/7 Support System",
                  d: "Round-the-clock assistance and dedicated rider support team",
                  image: freshDiningImg,
                },
              ].map((f) => (
                <div key={f.t} className="snap-start w-[280px] flex-shrink-0">
                  <div className="bg-[#F3F2FA] rounded-2xl p-6 h-full">
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
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="mt-8 hidden lg:grid grid-cols-3 gap-6">
            {[
              {
                t: "Flexible Work Schedule",
                d: "Work whenever you want - mornings, evenings, or weekends. You control your own hours",
                image: SupportLocalsImg,
              },
              {
                t: "Competitive Earnings",
                d: "Earn ₹300-800+ per day with transparent pricing and weekly payouts",
                image: fastDeliveryImg,
              },
              {
                t: "24/7 Support System",
                d: "Round-the-clock assistance and dedicated rider support team",
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

      {/* ZenZop Rider Requirements Section */}
      <section className="mt-16">
        <Container className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              ZenZee Rider requirements
            </h2>
          </div>

          {/* Mobile: Vertical Stack, Desktop: Grid */}
          <div className="mt-8 lg:hidden">
            <div className="space-y-6 px-4">
              {[
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-purple-600 dark:text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      />
                    </svg>
                  ),
                  title: "Valid Photo ID",
                  description:
                    "Proving that you meet the minimum age requirement.",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-purple-600 dark:text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  title: "Smartphone",
                  description: "Android 9.0+ or iOS 12+, with a local number.",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-purple-600 dark:text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                  title: "Scooter, Bike or Car",
                  description:
                    "With a valid licence and insurance registered in your name.",
                },
              ].map((item, index) => (
                <div key={index} className="w-full">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-left leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-left leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="mt-8 hidden lg:grid grid-cols-3 gap-20 max-w-4xl mx-auto justify-between">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                ),
                title: "Valid Photo ID",
                description:
                  "Proving that you meet the minimum age requirement.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Smartphone",
                description: "Android 9.0+ or iOS 12+, with a local number.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Scooter, Bike or Car",
                description:
                  "With a valid licence and insurance registered in your name.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 h-full"
              >
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-left leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-left leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Boost Your Earnings Section - Custom Implementation */}
      <section className="py-16">
        <Container>
          {/* First Section - Delivery Boy */}
          <div className="py-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Image Section */}
              <div className="order-1">
                <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={deliveryboy}
                    alt="Delivery Boy"
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

          {/* Second Section - Delivery Union */}
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
                    src={deliveryUn}
                    alt="Delivery Union"
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

      {/* How the Rider app works Section */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              How the Rider app works
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our app is designed to help couriers receive, deliver and manage
              orders easily and effectively.
            </p>
          </div>

          <div className="w-full max-w-7xl mx-auto">
            {/* Layout: Phone in center, cards positioned around it */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Left Column - 2 cards stacked */}
              <div className="space-y-8 order-1 lg:order-1 h-[614px] flex flex-col justify-center">
                {/* Step 1 */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 text-center lg:text-left h-[296px] flex flex-col justify-center w-full lg:w-[414px] max-w-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4">
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      STEP 1
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                    Receive orders
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    View incoming orders, check their details, and get going.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 text-center lg:text-left h-[296px] flex flex-col justify-center w-full lg:w-[414px] max-w-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4">
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      STEP 2
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                    Pick up the order
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
              <div className="space-y-8 order-3 lg:order-3 h-[614px] flex flex-col justify-center">
                {/* Step 3 */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 text-center lg:text-left h-[296px] flex flex-col justify-center w-full lg:w-[414px] max-w-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4">
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      STEP 3
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                    Deliver
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Head to the delivery address as quickly and safely as
                    possible.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 text-center lg:text-left h-[296px] flex flex-col justify-center w-full lg:w-[414px] max-w-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4">
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      STEP 4
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                    Track your earnings
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
      <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
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
        </Container>
      </section>

      {/* Download App Section */}
      <section id="download" className="py-16">
        <Container>
          <DownloadAppSection
            title="Download the Rider app now!"
            subtitle={
              <>
                Start earning with ZenZop <br /> Download the app and begin your
                journey
              </>
            }
            image={iPhoneMax}
          />
        </Container>
      </section>
    </main>
  );
}
