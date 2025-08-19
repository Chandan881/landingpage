export default function Testimonial({ quote, author, role }) {
  return (
    <figure className="rounded-2xl border border-black/10 dark:border-white/15 p-6 bg-white/80 dark:bg-black/20">
      <blockquote className="text-sm sm:text-base leading-relaxed">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm text-black/70 dark:text-white/70">
        <span className="font-medium text-black dark:text-white">{author}</span> — {role}
      </figcaption>
    </figure>
  );
}


