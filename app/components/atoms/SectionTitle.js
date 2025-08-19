export default function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-black/70 dark:text-white/70">{subtitle}</p>
      ) : null}
    </div>
  );
}


