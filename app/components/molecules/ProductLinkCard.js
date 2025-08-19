import Link from "next/link";

export default function ProductLinkCard({ href, title, description, badge }) {
  return (
    <Link href={href} className="block rounded-2xl border border-black/10 dark:border-white/15 p-6 bg-white/80 dark:bg-black/20 hover:shadow-lg transition-shadow">
      <div className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">{badge}</div>
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-black/70 dark:text-white/70">{description}</p>
      <span className="mt-3 inline-block text-sm font-medium text-blue-600">Learn more →</span>
    </Link>
  );
}


