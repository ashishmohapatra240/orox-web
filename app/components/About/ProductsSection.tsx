"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const products = [
  {
    title: "OROX app",
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/products/orox-app.png",
    bgColor: "bg-[#293483]",
    description:
      "OROX is your AI-powered investment platform, offering secure, automated investing. Get steady growth with ODN or crypto exposure with DVOX—all in one place.",
  },
  {
    title: "Opus Diversified Nexus",
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/products/odn-chart.png",
    bgColor: "bg-[#4A90E2]",
    description:
      "ODN offers risk-adjusted, hands-off investing with a 90-day cycle and market-neutral strategies for long-term stability—no wild swings, no constant monitoring.",
  },
  {
    title: "DVOX utility token",
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/products/dvox-token.png",
    bgColor: "bg-[#FFD700]",
    description:
      "DVOX offers high-growth potential with less volatility. It gives you auto-balanced exposure to premium digital assets—no stress, just smarter investing.",
  },
];

export const ProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setIsMobile] = useState(false);

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
      const maxSlides = products.length - 1;
      return prev >= maxSlides ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlides = products.length - 1;
      return prev === 0 ? maxSlides : prev - 1;
    });
  };

  return (
    <section className="w-full px-[16px] md:px-[0] py-[48px] md:py-[88px] overflow-x-hidden">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-[34px] font-bold text-[#19191B] md:text-[56px] leading-[40px] md:leading-[68px] w-[340px] md:w-[800px] mx-auto mb-[40px] md:mb-[48px]">
          Discover OROX and the powerful products driving it
        </h2>

        <div className="hidden md:grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.title}>
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl ${product.bgColor}`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-[30px]">
                <h3 className="text-[28px] font-bold text-[#19191B] leading-[40px]">
                  {product.title}
                </h3>
                <p className="text-[20px] text-[#19191B] leading-[32px] mt-[11px]">
                  {product.description}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center text-[#2F5DFD] font-bold hover:underline mt-[18px]"
                >
                  Learn more
                  <Image
                    className="ml-2 h-4 w-4"
                    src={"/icons/arrow.svg"}
                    alt={"Arrow"}
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.title}
                className="w-full flex-shrink-0 pr-[24px]"
              >
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl ${product.bgColor}`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-[30px]">
                  <h3 className="text-[28px] font-bold text-[#19191B] leading-[40px]">
                    {product.title}
                  </h3>
                  <p className="text-[20px] text-[#19191B] leading-[32px] mt-[11px]">
                    {product.description}
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center text-[#2F5DFD] font-bold hover:underline mt-[18px]"
                  >
                    Learn more
                    <Image
                      className="ml-2 h-4 w-4"
                      src={"/icons/arrow.svg"}
                      alt={"Arrow"}
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="mt-[40px] flex justify-center space-x-4 md:hidden">
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
    </section>
  );
};
