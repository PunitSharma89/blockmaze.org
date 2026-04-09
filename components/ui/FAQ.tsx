"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="faq-item">
          <button
            className="faq-question w-full text-left"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            aria-expanded={openIndex === index}
          >
            <span className="pr-4">{item.question}</span>
            <svg
              className={`w-5 h-5 flex-shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
