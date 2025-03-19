"use client";

import * as React from "react";
import Image from "next/image";

const Service = () => {
  const handleStoreRedirect = () => {
    if (typeof window !== "undefined") {
      window.open("https://onelink.to/65gpe9", "_blank");
    }
  };
  return (
    <div className="container mx-auto px-4 py-16 overflow-hidden max-w-[1280px]">
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[500px] bg-gradient-to-r from-blue-800 to-purple-800 rounded-2xl mb-8 md:mb-12 overflow-visible">
        {/* Mobile Background */}
        <div className="absolute inset-0 h-auto w-full overflow-hidden rounded-2xl sm:hidden">
          <Image
            src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/service/bg-tile-phone.png"
            alt="Background pattern"
            fill
            className="opacity-100 object-fit"
          />
        </div>

        {/* Desktop/Tablet Background */}
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl hidden sm:block">
          <Image
            src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/service/bg-tile.png"
            alt="Background pattern"
            fill
            className="opacity-100 object-cover"
          />
        </div>

        {/* Mobile Layout - Vertical Stacking */}
        <div className="relative h-full flex flex-col items-center p-[24px] sm:hidden">
          {/* Text Content */}
          <div className="text-white w-full max-w-xs text-left mt-12">
            <h3 className="text-[16px] md:text-[28px] font-regular mb-[32px] leading-[24px] md:leading-[40px]">
              Ready to invest smarter? OROX takes the guesswork out of investing
              with AI-powered quantitative, risk-adjusted strategies designed
              for growth.
            </h3>
            <button
              onClick={handleStoreRedirect}
              className="mt-2 bg-white text-[#293483] font-bold px-6 py-3 rounded-full w-full hover:bg-gray-100 transition-all text-[16px] md:text-[20px]"
            >
              Get started with OROX
            </button>
          </div>

          {/* Phone Image - Mobile (Bottom Position) */}
          <div className="mt-[32px] flex justify-center items-center">
            <div className="relative w-[400px] h-[320px] right-12">
              <Image
                src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/service/phone-tilt.png"
                alt="OROX App Interface"
                fill
                className="drop-shadow-2xl object-contain"
              />
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Layout - Side by Side */}
        <div className="relative hidden sm:flex flex-row items-center p-6 sm:px-12 sm:py-30">
          {/* Text Content */}
          <div className="text-white max-w-xl text-left mt-[32px] md:[64px]">
            <h3 className="text-[28px] font-regular mb-6 leading-[1.2]">
              Ready to invest smarter? OROX takes the guesswork out of investing
              with AI-powered quantitative, risk-adjusted strategies designed
              for growth.
            </h3>
            <button
              onClick={handleStoreRedirect}
              className="mt-8 bg-white text-[#293483] font-bold px-8 py-4 rounded-full inline-flex items-center hover:bg-gray-100 transition-all text-[20px]"
            >
              Get started with OROX
            </button>
          </div>

          {/* Phone Image - Desktop */}
          <div className="absolute right-10 -top-20 z-10">
            <div className="relative w-[800px] h-[600px]">
              <Image
                src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/service/phone-tilt.png"
                alt="OROX App Interface"
                fill
                className="drop-shadow-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
