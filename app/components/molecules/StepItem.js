export default function StepItem({ index, title, description }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/15 p-6 bg-white/80 dark:bg-black/20">
      <div className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">Step {index}</div>
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-black/70 dark:text-white/70">{description}</p>
    </div>
  );
}


