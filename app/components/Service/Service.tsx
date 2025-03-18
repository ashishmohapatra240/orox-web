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
    <div className="container mx-auto px-4 sm:px-8 lg:px-24 py-8 sm:py-16 overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[500px] sm:h-[400px] bg-gradient-to-r from-blue-800 to-purple-800 rounded-2xl mb-8 sm:mb-12 overflow-visible py-60">
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl">
          <Image
            src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/service/bg-tile.png"
            alt="Background pattern"
            layout="fill"
            objectFit="cover"
            className="opacity-100 "
            style={{ transform: "scale(1)" }}
          />
        </div>

        <div className="relative h-full flex flex-col sm:flex-row items-center p-6 sm:px-12 sm:py-30">
          {/* Text Content */}
          <div className="text-white max-w-xl text-center sm:text-left z-10 mb-36">
            <h3 className="text-base sm:text-[28px] font-regular mb-4 sm:mb-6 leading-[1.2]">
              Ready to invest smarter? OROX takes the guesswork out of investing
              with AI-powered quantitative, risk-adjusted strategies designed
              for growth.
            </h3>
            <button
              onClick={handleStoreRedirect}
              className="mt-4 sm:mt-8 bg-white text-[#293483] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full inline-flex items-center hover:bg-gray-100 transition-all text-[20px]"
            >
              Get started with OROX
            </button>
          </div>

          {/* Phone Image */}
          <div className="absolute right-[0%] sm:right-[-60%] lg:right-[10%] top-[80%] sm:top-[40%] lg:top-[-80%] transform -translate-y-1/2">
            <div className="relative w-[400px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/service/phone-tilt.png"
                alt="OROX App Interface"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
