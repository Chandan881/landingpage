"use client";

import { useRef, useState } from "react";

function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  const currentHeight =
    open && contentRef.current ? contentRef.current.scrollHeight : 0;

  return (
    <div className="border-b border-black/10 dark:border-white/15">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg font-medium">{q}</span>
        <span
          className={`ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/20 dark:border-white/20 text-sm transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden
        >
          ˅
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ height: currentHeight }}
      >
        <div
          ref={contentRef}
          className="pb-4 text-sm text-black/70 dark:text-white/70"
        >
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({
  title = "Frequently asked questions",
  items = [],
}) {
  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
        {title}
      </h3>
      <div className="max-w-3xl mx-auto">
        {items.map((it, i) => (
          <FaqItem key={it.q + i} q={it.q} a={it.a} />
        ))}
      </div>
    </div>
  );
}
