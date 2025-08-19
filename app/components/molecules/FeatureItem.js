import Card from "@/app/components/atoms/Card";
import Image from "next/image";

export default function FeatureItem({ title, description, image }) {
  return (
    <Card backgroundClassName="bg-[#F3F2FA]">
      <h3 className="mt-4 font-semibold">{title}</h3>
      {image ? (
        <div className="relative w-[65%] mx-auto rounded-lg overflow-hidden aspect-[307/416]">
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

      <p className="mt-1 text-sm text-black/70 dark:text-white/70">
        {description}
      </p>
    </Card>
  );
}
