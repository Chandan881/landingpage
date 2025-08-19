"use client";

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
}) {
  // Use fallback image if main image is not available
  const displayImage = image || iPhone16Fallback;

  return (
    <section>
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold">{title}</h3>
        <p className="mt-2 text-black/70 dark:text-white/70">{subtitle}</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Button href="#" className="gap-2">
            <span className="relative inline-block h-5 w-5">
              <Image src={AppIcon} alt="App Store" width={20} height={20} />
            </span>
            App Store
          </Button>
          <Button href="#" variant="secondary" className="gap-2">
            <span className="relative inline-block h-5 w-5">
              <Image
                src={PlayStoreIcon}
                alt="Google Play"
                width={20}
                height={20}
              />
            </span>
            Google Play
          </Button>
        </div>
      </div>
      <div className="mt-8 mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px]">
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-xl bg-gray-100">
          <Image
            src={displayImage}
            alt="App preview"
            width={350}
            height={472}
            sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 350px"
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
    </section>
  );
}
