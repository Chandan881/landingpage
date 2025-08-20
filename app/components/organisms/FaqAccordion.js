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
        <span className="text-[24px] font-[500] leading-[27px] tracking-[-0.05em] font-helvetica-neue text-[#88878E]">
          {q}
        </span>
        <svg
          className={`ml-4 h-6 w-6 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#4B5563"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ height: currentHeight }}
      >
        <div
          ref={contentRef}
          className="pb-4 text-[16px] sm:text-[18px] md:text-[20px] font-helvetica-neue text-black/70 dark:text-white/70"
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
      <h3 className="text-[50px] font-[800] leading-[64px] tracking-[-0.05em] text-center mb-8 font-helvetica-neue text-[#000000]">
        {title}
      </h3>
      <div className="max-w-3xl mx-auto mt-14">
        {items.map((it, i) => (
          <FaqItem key={it.q + i} q={it.q} a={it.a} />
        ))}
      </div>
    </div>
  );
}
