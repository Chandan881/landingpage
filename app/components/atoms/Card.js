export default function Card({
  children,
  className = "",
  backgroundClassName = "bg-white/80 dark:bg-black/20",
}) {
  return (
    <div
      className={`rounded-2xl border border-black/10 dark:border-white/15 p-6 ${backgroundClassName} ${className}`}
    >
      {children}
    </div>
  );
}
