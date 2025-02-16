"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How do I start investing?",
    answer: "Download the OROX app, sign up and fund your account or buy DVOX tokens—you’re in!",
  },
  {
    question: "How much does OROX charge me?",
    answer: "The OROX app and platform are completely free to use. Please see specific performance fees on individual products if applicable.",
  },
  {
    question: "Difference between ODN and DVOX?",
    answer: "ODN offers steady, low-risk investing, while DVOX provides high-growth potential with crypto exposure. Choose what fits your goal.",
  },
  {
    question: "What is a market-neutral strategy?",
    answer: "It’s a strategy that balances risk by hedging across different assets, so you get steady gains without wild swings.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="text-sm font-medium text-blue-600">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-4 text-4xl font-bold text-[#19191B] md:text-5xl">
              Still have questions?
            </h2>
          </div>

          {/* Right Content - FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 last:border-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="text-lg font-medium text-[#293483]">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transform transition-transform duration-200 ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                    >
                      <path
                        d="M12 4V20M4 12H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 