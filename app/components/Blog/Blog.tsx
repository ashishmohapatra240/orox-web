"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const articles = [
  {
    image: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/blog/time-horizon.jpg",
    title: "The Relationship Between Time Horizon and Investing Risk",
    description:
      "Risk is a fact of investing. Your willingness to take risk as an investor is a big part of why you...",
    link: "#",
  },
  {
    image: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/blog/government-bonds.jpg",
    title: "An introduction to the appeal of Australian Government Bonds",
    description:
      "Australian Government Bonds (AGBs), or Australian treasuries, are debt securities issued...",
    link: "#",
  },
  {
    image: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/blog/aussie-websites.png",
    title: "Aussie websites to help you make (or save) money",
    description:
      "We've done the research for you and found some awesome websites that might help you...",
    link: "#",
  },
  {
    image: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/blog/robo-advisor.jpg",
    title: "Difference between stand-alone adviser and robo",
    description:
      "All independent advisers are standalone, but not all robo advisors are...",
    link: "#",
  },
];

export const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial value
    setIsMobile(window.innerWidth < 768);

    // Add resize listener
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlides = articles.length - 1;
      return prev >= maxSlides ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlides = articles.length - 1;
      return prev === 0 ? maxSlides : prev - 1;
    });
  };

  return (
    <section className="w-full px-4 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-16">
          {/* Header */}
          <h2 className="text-[34px] md:text-[56px] font-bold text-[#19191B] text-center">
            Insights, trends and smart investing
          </h2>

          {/* Articles Slider */}
          <div className="relative">
            <div
              className="flex gap-6 md:gap-8"
              style={{
                transform: `translateX(-${
                  currentSlide * (isMobile ? 315 : 392)
                }px)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {articles.map((article, index) => (
                <Link
                  key={index}
                  href={article.link}
                  className="group space-y-4 w-[295px] md:w-[356px] flex-shrink-0"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-3xl w-[295px] h-[372px] md:w-[356px] md:h-[448px]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-[28px] font-bold text-[#19191B] group-hover:text-blue-600 leading-[1.2]">
                      {article.title}
                    </h3>
                    <p className="text-[20px] text-[#19191B]">
                      {article.description}
                    </p>
                    <div className="flex items-center space-x-2 text-[#2F5DFD]">
                      <span className="text-[14px] font-bold">Read more</span>
                      <Image
                        src="/icons/arrow.svg"
                        alt="Read more"
                        width={14}
                        height={14}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#19191B] transition-colors hover:bg-gray-200"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
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
              <button
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#293483] text-white transition-colors hover:bg-[#293483]/90"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
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
      </div>
    </section>
  );
};
