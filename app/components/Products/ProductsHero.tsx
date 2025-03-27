"use client";
import { useState, useRef } from "react";
import { PausePlayButton } from "../ui/PausePlayButton";
import { Button } from "../ui/Button";

export const ProductsHero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative">
      {/* Top white section with text */}
      <section className="bg-white w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mx-auto max-w-4xl mt-[48px] md:mt-[88px]">
            {/* Tag */}
            <span className="text-[14px] md:text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699]">
              OROX AND A RANGE OF POWERFUL PRODUCTS
            </span>

            <div className="space-y-[24px]">
              <h1 className="text-[28px] md:text-[64px] font-bold text-[#19191B] leading-[34px] md:leading-[80px]">
                Our products
              </h1>
              <p className="text-[14px] md:text-[20px] text-[#19191B] leading-[20px] md:leading-[32px] mt-[12px] md:mt-[24px]">
                OROX is a seamless investment app offering low-risk growth and
                crypto exposure with reduced volatility. Connect effortlessly to
                ODN and the DVOX token—all in one app.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="mt-[20px] md:mt-[40px] px-[20px] md:px-[32px] py-[10px] md:py-[16px] text-white font-bold rounded transition-colors duration-300 text-[12px] md:text-[20px]">
              Scroll to learn more
            </Button>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="bg-gradient-to-b">
          <div className="absolute top-0 left-0 w-full h-[45%] bg-white"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#070926]"></div>
          <div className="relative px-[16px] pt-[40px] pb-[44px] md:px-[80px] md:pt-[80px] md:pb-[88px] flex items-center justify-center">
            <div className="z-10">
              <div className="relative w-full aspect-[1.75/1] flex justify-center">
                <video
                  ref={videoRef}
                  src="/videos/Products.mp4"
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="object-cover rounded-[12px] md:rounded-[32px] w-full h-full z-10 max-w-7xl"
                />

                <PausePlayButton
                  isPlaying={isPlaying}
                  onToggle={togglePlay}
                  className="absolute bottom-[8px] right-[8px] md:bottom-[24px] md:right-[24px] w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
