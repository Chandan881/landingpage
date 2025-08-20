import Image from "next/image";
import appleIcon from "@/app/assests/mainLanding/appleIcon.png";
import playStoreIcon from "@/app/assests/mainLanding/playStoreIcon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] text-white">
      {/* Desktop Footer - Large screens */}
      <div className="hidden xl:block">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16">
          <div className="grid grid-cols-5 gap-12">
            {/* For Restaurants */}
            <div>
              <h3 className="font-helvetica-neue font-[500] text-[20px] leading-[20px] tracking-[-0.03em] mb-6 text-white">
                For Restaurants
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="font-helvetica-neue font-[400] text-[18px] leading-[20px] tracking-[-0.03em] text-[#706F78] hover:text-white transition-colors duration-200"
                  >
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-helvetica-neue font-[400] text-[18px] leading-[20px] tracking-[-0.03em] text-[#706F78] hover:text-white transition-colors duration-200"
                  >
                    Apps for you
                  </a>
                </li>
              </ul>
            </div>

            {/* Learn More */}
            <div>
              <h3 className="font-helvetica-neue font-[500] text-[20px] leading-[20px] tracking-[-0.03em] mb-6 text-white">
                Learn More
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="font-helvetica-neue font-[400] text-[18px] leading-[20px] tracking-[-0.03em] text-[#706F78] hover:text-white transition-colors duration-200"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-helvetica-neue font-[400] text-[18px] leading-[20px] tracking-[-0.03em] text-[#706F78] hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-helvetica-neue font-[400] text-[18px] leading-[20px] tracking-[-0.03em] text-[#706F78] hover:text-white transition-colors duration-200"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-helvetica-neue font-[400] text-[18px] leading-[20px] tracking-[-0.03em] text-[#706F78] hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-helvetica-neue font-[400] text-[18px] leading-[20px] tracking-[-0.03em] text-[#706F78] hover:text-white transition-colors duration-200"
                  >
                    Help & support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-helvetica-neue font-[400] text-[18px] leading-[20px] tracking-[-0.03em] text-[#706F78] hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* For Delivery Partners */}
            <div>
              <h3 className="font-helvetica-neue font-[500] text-[20px] leading-[20px] tracking-[-0.03em] mb-6 text-white">
                For Delivery Partners
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="font-helvetica-neue font-[400] text-[18px] leading-[20px] tracking-[-0.03em] text-[#706F78] hover:text-white transition-colors duration-200"
                  >
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-helvetica-neue font-[400] text-[18px] leading-[20px] tracking-[-0.03em] text-[#706F78] hover:text-white transition-colors duration-200"
                  >
                    Apps for you
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-helvetica-neue font-[500] text-[20px] leading-[20px] tracking-[-0.03em] mb-6 text-white">
                Social Links
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="font-helvetica-neue font-[400] text-[18px] leading-[20px] tracking-[-0.03em] text-[#706F78] hover:text-white transition-colors duration-200"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-helvetica-neue font-[400] text-[18px] leading-[20px] tracking-[-0.03em] text-[#706F78] hover:text-white transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-helvetica-neue font-[400] text-[18px] leading-[20px] tracking-[-0.03em] text-[#706F78] hover:text-white transition-colors duration-200"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            {/* App Download Buttons */}
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Image src={appleIcon} alt="App Store" width={24} height={24} />
                <span className="font-medium text-sm whitespace-nowrap">
                  Download now
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Image
                  src={playStoreIcon}
                  alt="Google Play"
                  width={24}
                  height={24}
                />
                <span className="font-medium text-sm whitespace-nowrap">
                  Download now
                </span>
              </a>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400 leading-relaxed">
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners 2008-{currentYear} ©
              ZenZop™ Ltd. All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* Tablet Footer - Medium screens */}
      <div className="hidden lg:block xl:hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 py-12">
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* For Restaurants */}
              <div>
                <h3 className="font-helvetica-neue font-[500] text-[20px] leading-[20px] tracking-[-0.03em] mb-4 text-white">
                  For Restaurants
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Partner With Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Apps for you
                    </a>
                  </li>
                </ul>
              </div>

              {/* Learn More */}
              <div>
                <h3 className="font-helvetica-neue font-[500] text-[20px] leading-[20px] tracking-[-0.03em] mb-4 text-white">
                  Learn More
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Security
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Help & support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* For Delivery Partners */}
              <div>
                <h3 className="font-helvetica-neue font-[500] text-[20px] leading-[20px] tracking-[-0.03em] mb-4 text-white">
                  For Delivery Partners
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Partner With Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Apps for you
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-helvetica-neue font-[500] text-[20px] leading-[20px] tracking-[-0.03em] mb-4 text-white">
                  Social Links
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>

              {/* App Download Buttons */}
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Image
                    src={appleIcon}
                    alt="App Store"
                    width={28}
                    height={28}
                  />
                  <span className="font-semibold">Download now</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Image
                    src={playStoreIcon}
                    alt="Google Play"
                    width={28}
                    height={28}
                  />
                  <span className="font-semibold">Download now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400 leading-relaxed">
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners 2008-{currentYear} ©
              ZenZop™ Ltd. All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Footer - Small screens */}
      <div className="lg:hidden">
        <div className="px-6 sm:px-8 py-10">
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* For Restaurants */}
              <div>
                <h3 className="font-helvetica-neue font-[500] text-[20px] leading-[20px] tracking-[-0.03em] mb-4 text-white">
                  For Restaurants
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Partner With Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Apps for you
                    </a>
                  </li>
                </ul>
              </div>

              {/* For Delivery Partners */}
              <div>
                <h3 className="font-helvetica-neue font-[500] text-[20px] leading-[20px] tracking-[-0.03em] mb-4 text-white">
                  For Delivery Partners
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Partner With Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Apps for you
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-helvetica-neue font-[500] text-[20px] leading-[20px] tracking-[-0.03em] mb-4 text-white">
                  Social Links
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Learn More */}
              <div>
                <h3 className="font-bold text-xl mb-4 text-white">
                  Learn More
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Security
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Help & support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-base"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* App Download Buttons */}
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Image
                    src={appleIcon}
                    alt="App Store"
                    width={24}
                    height={24}
                  />
                  <span className="font-medium text-sm whitespace-nowrap">
                    Download now
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Image
                    src={playStoreIcon}
                    alt="Google Play"
                    width={24}
                    height={24}
                  />
                  <span className="font-medium text-sm whitespace-nowrap">
                    Download now
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400 leading-relaxed">
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners 2008-{currentYear} ©
              ZenZop™ Ltd. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
