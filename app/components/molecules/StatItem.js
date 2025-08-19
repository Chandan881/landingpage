export default function StatItem({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-black/70 dark:text-white/70">{label}</div>
    </div>
  );
}


