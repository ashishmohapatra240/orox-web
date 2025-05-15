"use client";

import * as React from "react";
import Image from "next/image";

interface ServiceProps {
  tag: string;
  description: string;
}

const Service = ({ tag, description }: ServiceProps) => {
  const handleStoreRedirect = () => {
    if (typeof window !== "undefined") {
      window.open("https://onelink.to/65gpe9", "_blank");
    }
  };
  return (
    <div className="container mx-auto sm:[0px] px-[16px] xl:px-[0px] pt-[44px] md:pt-[88px] overflow-hidden max-w-[1280px]">
      {/*<section className="w-full px-[16px] py-[44px] md:px-[80px] md:py-[88px] overflow-hidden">*/}
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[500px] lg:h-[550px] bg-gradient-to-r from-[#4296E4] to-[#383699] rounded-2xl mb-8 md:mb-12 overflow-visible">
        {/* Mobile Background */}
        <div className="absolute inset-0 h-auto w-full overflow-hidden rounded-2xl sm:hidden">
          <Image
            src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/service/bg-tile-phone.png"
            alt="Background pattern"
            fill
            className="opacity-100 object-cover"
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
        <div className="relative h-full flex flex-col items-center px-[24px] py-[32px] sm:hidden">
          {/* Text Content */}
          <div className="text-white w-full max-w-xs text-left mt-[10px] md:mt:12">
            <span className="text-white text-[14px] md:text-[16px] font-semibold text-transparent mb-[10px] block leading-[18px] md:leading-[24px]">
              {tag}
            </span>
            <h3 className="text-[16px] md:text-[28px] font-regular mb-[32px] leading-[24px] md:leading-[40px]">
              {description}
            </h3>
            <button
              onClick={handleStoreRedirect}
              className="mt-2 bg-white text-[#293483] font-bold px-6 py-3 rounded-full w-full hover:bg-gray-100 transition-all text-[16px] md:text-[20px]"
            >
              Get started with OROX
            </button>
          </div>

          {/* Phone Image - Mobile (Bottom Position) */}
          <div className="mt-[24px] flex justify-center items-center">
            <div className="relative w-[300px] h-[300px]">
              <Image
                src="/images/service/MobileCallToAction.png"
                alt="OROX App Interface"
                fill
                className=" object-contain"
              />
            </div>
          </div>
        </div>

        <div className="relative hidden sm:flex lg:hidden h-full">
          {/* Text Content */}
          <div className="text-white w-1/2 text-left p-8 flex flex-col justify-center">
            <span className="text-white text-[14px] md:text-[16px] font-semibold text-transparent mb-[10px] block leading-[18px] md:leading-[28px]">
              {tag}
            </span>
            <h3 className="text-[20px] md:text-[20px] lg:text-[24px] font-regular mb-6 leading-[1.3]">
              {description}
            </h3>
            <button
              onClick={handleStoreRedirect}
              className="mt-4 bg-white text-[#293483] font-bold px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-gray-100 transition-all text-[16px] md:text-[18px] max-w-[280px]"
            >
              Get started with OROX
            </button>
          </div>

          {/* Phone Image - Tablet/Medium */}
          <div className="absolute right-[-20px] sm:right-[-30px] md:right-[0px] top-[50%] transform translate-y-[-50%]">
            <div className="relative w-[500px] h-[400px] md:w-[400px] md:h-[300px]">
              <Image
                src="/images/service/MobileCallToActionWeb.png"
                alt="OROX App Interface"
                width={800}
                height={618}
                className="drop-shadow-2xl object-contain"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="relative hidden lg:flex flex-row items-center p-6 sm:px-12 sm:py-30">
          {/* Text Content */}
          <div className="text-white max-w-xl text-left mt-[32px] md:[64px]">
            <span className="text-white text-[14px] md:text-[16px] font-semibold text-transparent mb-[10px] block leading-[18px] md:leading-[24px]">
              {tag}
            </span>
            <h3 className="text-[28px] font-regular mb-6 leading-[1.2]">
              {description}
            </h3>
            <button
              onClick={handleStoreRedirect}
              className="mt-8 bg-white text-[#293483] font-bold px-8 py-4 rounded-full inline-flex items-center hover:bg-gray-100 transition-all text-[20px]"
            >
              Get started with OROX
            </button>
          </div>

          {/* Phone Image - Desktop */}
          <div className="absolute right-[-280px] -top-[80px] z-10">
            <div className="relative w-[480px] h-[300px] md:w-[950px] md:h-[700px]">
              <Image
                src="/images/service/MobileCallToActionWeb.png"
                alt="OROX App Interface"
                width={680}
                height={600}
                className="drop-shadow-2xl object-contain hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
