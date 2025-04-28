"use client";

import { useState, useEffect, useRef } from "react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I love how straightforward everything is. No complicated dashboards, no unrealistic promises—just solid performance and an easy experience. It's great to finally see a financial product that delivers without the usual marketing fluff!",
    author: "Sarah M.",
  },
  {
    id: 2,
    quote:
      "The automated investment strategy has been a game-changer for me. I don't have to worry about timing the market or making emotional decisions. It's all handled professionally.",
    author: "James R.",
  },
  {
    id: 3,
    quote:
      "As someone new to investing, I appreciate how transparent and easy-to-understand their approach is. The results have been consistently impressive.",
    author: "Michael K.",
  },
  {
    id: 4,
    quote:
      "The combination of AI and human oversight gives me confidence that my investments are in good hands. The regular performance updates are clear and informative.",
    author: "Emma P.",
  },
  {
    id: 5,
    quote:
      "I've tried various investment platforms, but OROX stands out for its simplicity and effectiveness. The returns speak for themselves.",
    author: "David L.",
  },
];

export const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);
  const lastUpdateTimeRef = useRef<number | null>(null);

  const SLIDE_DURATION = 7000; // 7 seconds per slide

  useEffect(() => {
    startProgressAnimation();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [currentSlide, isPaused]);

  const startProgressAnimation = () => {
    if (isPaused) return;

    setProgress(0);
    lastUpdateTimeRef.current = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - (lastUpdateTimeRef.current || now);
      lastUpdateTimeRef.current = now;

      setProgress((prev) => {
        const newProgress = prev + (elapsed / SLIDE_DURATION) * 100;

        if (newProgress >= 100) {
          setCurrentSlide((prev) => (prev + 1) % testimonials.length);
          return 0;
        }

        return newProgress;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
    resetAnimation();
  };

  const resetAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setProgress(0);
    startProgressAnimation();
  };

  return (
    <section className="w-full bg-[#EAF5FF] py-[32px] md:py-[48px] lg:py-[88px] h-[600px] md:h-[580px]">
      <div className="mx-auto max-w-7xl flex flex-col gap-[24px] md:gap-[80px] h-full">
        {/* Title */}
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] md:text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#276EDE] to-[#11032F] text-center">
              OROX IS PART OF SOMETHING BIG
            </span>
            <h2 className="text-[28px] md:text-[34px] lg:text-[56px] font-bold text-[#19191B] leading-[34px] md:leading-[40px] lg:leading-[68px] w-full max-w-[320px] md:max-w-[640px] lg:max-w-[1040px] mx-auto text-center">
              What our customers have to say
            </h2>
          </div>
        </div>

        {/* Testimonial Content (quote + navigation centered together) */}
        <div className="flex flex-col items-center justify-center h-full gap-[40px] md:gap-[48px]">
          {/* Testimonial Quote */}
          <div className="w-full transition-all duration-500 ease-in-out px-4 text-center">
            <p className="text-[#1F2461] text-[20px] lg:text-[28px] font-bold leading-[32px] lg:leading-[40px] max-w-[320px] md:max-w-[640px] lg:max-w-[880px] xl:max-w-[1040px] mx-auto">
              &quot;{testimonials[currentSlide].quote}&quot;
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="inline-flex justify-center items-center gap-[16px] md:gap-[24px]">
            {/* Previous Button */}
            <button
              onClick={() => {
                setCurrentSlide(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                );
                resetAnimation();
              }}
              className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white text-[#293483] transition-transform hover:scale-110"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-[24px] h-[24px] rotate-180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Progress Dots */}
            <div className="flex gap-1 md:gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSlideClick(i)}
                  className={`h-[3px] md:h-[4px] rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? "w-[20px] md:w-[24px] bg-[#9499C1] relative overflow-hidden"
                      : "w-[3px] md:w-[4px] bg-[#9499C1]"
                  }`}
                >
                  {i === currentSlide && !isPaused && (
                    <span
                      className="absolute top-0 left-0 h-full bg-[#151946] rounded"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => {
                setCurrentSlide((prev) => (prev + 1) % testimonials.length);
                resetAnimation();
              }}
              className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#293483] text-white transition-transform hover:scale-110"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-[24px] h-[24px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
