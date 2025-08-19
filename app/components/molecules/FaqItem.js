export default function FaqItem({ question, answer }) {
  return (
    <details className="rounded-2xl border border-black/10 dark:border-white/15 p-6 bg-white/80 dark:bg-black/20">
      <summary className="font-medium cursor-pointer select-none">{question}</summary>
      <p className="mt-2 text-sm text-black/70 dark:text-white/70">{answer}</p>
    </details>
  );
}


