import Card from "@/app/components/atoms/Card";
import Image from "next/image";

export default function FeatureItem({ title, description, image }) {
  return (
    <Card backgroundClassName="bg-[#F3F2FA]" className="group">
      <h3 className="mt-4 text-[20px] sm:text-[28px] font-[700] text-[#000000] leading-[32px] sm:leading-[64px] tracking-[-0.05em] text-center font-helvetica-neue">
        {title}
      </h3>
      <p className="mt-1 text-[14px] sm:text-[20px] font-helvetica-neue font-[500] text-[#858298] leading-[20px] sm:leading-[27px] tracking-[-0.03em] text-center">
        {description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < description.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>
      {image ? (
        <div className="relative w-[71.5%] mx-auto rounded-lg overflow-hidden aspect-[307/416] transition-all duration-300 ease-in-out group-hover:scale-130">
          <Image
            src={image}
            alt={title || "Feature"}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="h-10 w-10 rounded-lg bg-black text-white dark:bg-white dark:text-black grid place-items-center font-semibold">
          {title?.[0]}
        </div>
      )}
    </Card>
  );
}
