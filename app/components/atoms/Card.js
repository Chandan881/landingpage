export default function Card({
  children,
  className = "",
  backgroundClassName = "bg-white/80 dark:bg-black/20",
}) {
  return (
    <div
      className={`rounded-[24px] px-6 py-6 sm:py-8 lg:py-10 transition-all duration-300 ease-in-out hover:shadow-lg ${backgroundClassName} ${className}`}
    >
      {children}
    </div>
  );
}
