"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import appIcon from "@/app/assests/mainLanding/appIcon.png";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic background based on scroll state
  const getHeaderBackground = () => {
    if (isScrolled) {
      return "bg-white/90 backdrop-blur-sm";
    }
    return "bg-white";
  };

  return (
    <header
      className={`sticky top-0 z-30 ${getHeaderBackground()} transition-all duration-300`}
    >
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-32 xl:px-40 h-18 lg:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={appIcon}
            alt="App Icon"
            width={48}
            height={48}
            className="w-8 h-8 lg:w-12 lg:h-12"
            unoptimized
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 text-sm lg:text-base lg:gap-6">
          <Link
            className="hover:underline font-medium lg:font-semibold text-blue-900 hover:text-blue-700"
            href="/user"
          >
            User
          </Link>
          <Link
            className="hover:underline font-medium lg:font-semibold text-blue-900 hover:text-blue-700"
            href="/rider"
          >
            Rider
          </Link>
          <Link
            className="hover:underline font-medium lg:font-semibold text-blue-900 hover:text-blue-700"
            href="/shop"
          >
            Shop
          </Link>
          <Link
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium lg:font-semibold transition-colors duration-300"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Navigation Text */}
        <nav className="lg:hidden flex items-center gap-4">
          <Link
            href="/user"
            className={`text-sm font-medium transition-colors duration-200 ${
              pathname === "/user"
                ? "text-blue-600 dark:text-blue-400"
                : "text-blue-900 dark:text-blue-300"
            }`}
            aria-label="User"
          >
            User
          </Link>

          <Link
            href="/rider"
            className={`text-sm font-medium transition-colors duration-200 ${
              pathname === "/rider"
                ? "text-blue-600 dark:text-blue-400"
                : "text-blue-900 dark:text-blue-300"
            }`}
            aria-label="Rider"
          >
            Rider
          </Link>

          <Link
            href="/shop"
            className={`text-sm font-medium transition-colors duration-200 ${
              pathname === "/shop"
                ? "text-blue-600 dark:text-blue-400"
                : "text-blue-900 dark:text-blue-300"
            }`}
            aria-label="Shop"
          >
            Shop
          </Link>
        </nav>
      </div>
    </header>
  );
}
