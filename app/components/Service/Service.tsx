"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Service = () => {
  const handleStoreRedirect = () => {
    if (typeof window !== "undefined") {
      window.open("https://onelink.to/65gpe9", "_blank");
    }
  };

  return (
    <div className="container mx-auto px-24 py-16 overflow-hidden">
      <h3 className="text-center text-3xl sm:text-4xl font-bold mb-16">
        Our products and services
      </h3>

      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-blue-800 to-purple-800 rounded-2xl mb-12 overflow-visible">
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl">
          <Image
            src="/Images/service/bg-tile.png"
            alt="Background pattern"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            style={{ transform: 'scale(1)' }}
          />
        </div>

        <div className="relative h-full flex items-center p-12">
          {/* Text Content */}
          <div className="text-white max-w-xl">
            <h3 className="text-lg font-regular mb-6">
              Ready to invest smarter? OROX takes the guesswork out of investing with AI-powered quantitative, risk-adjusted strategies designed for growth.
            </h3>
            <button
              onClick={handleStoreRedirect}
              className="mt-8 bg-white text-black px-8 py-4 rounded-full inline-flex items-center hover:bg-gray-100 transition-all"
            >
              Get started with OROX
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>

          {/* Phone Image */}
          <div className="absolute right-[0%] top-[40%] transform -translate-y-1/2">
            <div className="relative w-[800px] h-[500px]">
              <Image
                src="/Images/service/phone-tilt.png"
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
