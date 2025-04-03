"use client";
import { BlogCard } from "./BlogCard";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const articles = [
  {
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/blog/time-horizon.jpg",
    title: "The Relationship Between Time Horizon and Investing Risk",
    description:
      "Risk is a fact of investing. Your willingness to take risk as an investor is a big part of why you...",
    link: "#",
  },
  {
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/blog/government-bonds.jpg",
    title: "An introduction to the appeal of Australian Government Bonds",
    description:
      "Australian Government Bonds (AGBs), or Australian treasuries, are debt securities issued...",
    link: "#",
  },
  {
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/blog/aussie-websites.png",
    title: "Aussie websites to help you make (or save) money",
    description:
      "We've done the research for you and found some awesome websites that might help you...",
    link: "#",
  },
  {
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/blog/robo-advisor.jpg",
    title: "Difference between stand-alone adviser and robo",
    description:
      "All independent advisers are standalone, but not all robo advisors are...",
    link: "#",
  },
];

export const HomeBlog = () => {
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

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    swipeDuration: 250,
    preventScrollOnSwipe: true,
    trackMouse: true,
    trackTouch: true,
    delta: 10,
    rotationAngle: 0,
  });

  return (
    <section className="w-full px-[16px] py-[44px] md:px-[80px] md:py-[88px] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-16">
          {/* Header */}
          <h2 className="text-[34px] md:text-[56px] font-bold text-[#19191B] text-center leading-[40px] md:leading-[68px]">
            Insights, trends and smart investing
          </h2>

          {/* Articles Slider */}
          <div className="relative touch-pan-y" {...handlers}>
            <div
              className="flex gap-6 md:gap-8 will-change-transform"
              style={{
                transform: `translate3d(-${
                  currentSlide * (isMobile ? 315 : 392)
                }px, 0, 0)`,
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden"
              }}
            >
              {" "}
              <div className="flex flex-row gap-[24px] md:gap-[48px]">
                <BlogCard
                  image={articles[0].image}
                  title={articles[0].title}
                  description={articles[0].description}
                  link={articles[0].link}
                />
                <BlogCard
                  image={articles[1].image}
                  title={articles[1].title}
                  description={articles[1].description}
                  link={articles[1].link}
                />
                <BlogCard
                  image={articles[2].image}
                  title={articles[2].title}
                  description={articles[2].description}
                  link={articles[2].link}
                />
                <BlogCard
                  image={articles[3].image}
                  title={articles[3].title}
                  description={articles[3].description}
                  link={articles[3].link}
                />
              </div>
            </div>
            {/* Navigation Buttons */}
            <div className="mt-[40px] md:mt-[80px] flex justify-center space-x-4">
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
