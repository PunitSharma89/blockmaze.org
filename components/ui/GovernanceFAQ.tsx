"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function GovernanceFAQ({ items }: { items: FaqItem[] }) {
  return (
    <div className="max-w-[720px] mx-auto">
      {items.map((f, i) => (
        <FaqItem key={i} q={f.question} a={f.answer} />
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e7eb]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-6 group"
      >
        <span className="font-semibold text-[#1a1a1a] text-[15px] group-hover:text-primary transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-lg font-light transition-all duration-200 ${
            open ? "border-primary text-primary bg-blue-50" : "border-[#ccc] text-[#888]"
          }`}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && <p className="text-[#666] text-sm leading-relaxed pb-5 pr-12">{a}</p>}
    </div>
  );
}
