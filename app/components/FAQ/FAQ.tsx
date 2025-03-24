"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "How do I start investing?",
    answer:
      "Download the OROX app, sign up and fund your account or buy DVOX tokens—you're in!",
    action: "Get the app",
  },
  {
    question: "How much does OROX charge me?",
    answer:
      "The OROX app and platform are completely free to use. Please see specific performance fees on individual products if applicable.",
  },
  {
    question: "Difference between ODN and DVOX?",
    answer:
      "ODN offers steady, low-risk investing, while DVOX provides high-growth potential with crypto exposure. Choose what fits your goal.",
    action: "Learn more",
  },
  {
    question: "What is a market-neutral strategy?",
    answer:
      "It's a strategy that balances risk by hedging across different assets, so you get steady gains without wild swings.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [key, setKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>(null);

  const startTimer = useCallback(() => {
    // Clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Start new timer
    timerRef.current = setTimeout(() => {
      setOpenIndex((prevIndex) => {
        if (prevIndex === null || prevIndex >= faqs.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
      setKey(prev => prev + 1);
      startTimer(); // Restart timer for next question
    }, 10000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [startTimer]);

  const handleQuestionClick = (index: number) => {
    setOpenIndex(index);
    setKey(prev => prev + 1);
    startTimer(); // Restart timer when manually selecting a question
  };

  return (
    <section className="w-full px-[16px] py-[44px] md:px-[80px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-4 text-[34px] font-bold text-[#19191B] md:text-5xl leading-[40px] md:leading-[68px] max-w-[400px]">
              Still have questions?
            </h2>
          </div>

          {/* Right Content - FAQ List */}
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#999999] relative">
                <button
                  onClick={() => handleQuestionClick(index)}
                  className="flex w-full items-center justify-between py-[24px] text-left"
                >
                  <span className="text-[20px] font-bold text-[#293483] leading-[24px] md:leading-[32px]">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transform transition-all duration-300 ease-in-out`}
                    >
                      <path
                        d="M12 4V20M4 12H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transform origin-center transition-all duration-300 ease-in-out ${
                          openIndex === index ? "scale-y-0" : ""
                        }`}
                      />
                      <path
                        d="M4 12H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`absolute bottom-0 left-0 w-full h-[4px] bg-[#293483] transform origin-left rounded-r-[4px]`}
                  style={{
                    animation: openIndex === index ? `progress-${key} 10s linear forwards` : 'none',
                    transform: openIndex === index ? 'none' : 'scaleX(0)',
                  }}
                />
                <style jsx>{`
                  @keyframes progress-${key} {
                    0% {
                      transform: scaleX(0);
                    }
                    100% {
                      transform: scaleX(1);
                    }
                  }
                `}</style>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-4 text-[20px] leading-[32px]">
                      {faq.answer}
                    </div>
                    {faq.action && (
                      <a
                        href="#"
                        className="text-[#2F5DFD] hover:text-blue-700 text-[14px] font-bold flex items-center space-x-2 mb-[20px]"
                      >
                        <span>{faq.action}</span>
                        <Image
                          src="/icons/arrow.svg"
                          alt="Read more"
                          width={14}
                          height={14}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
