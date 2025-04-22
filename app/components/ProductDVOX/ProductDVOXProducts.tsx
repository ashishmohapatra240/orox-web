"use client";
import { useState, useRef } from "react";
import { PausePlayButton } from "../ui/PausePlayButton";
import { Button } from "../ui/Button";

export const ProductDVOXProducts = () => {
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
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 py-[44px] md:py-[88px]">
        <div className="flex flex-col items-center text-center mx-auto max-w-4xl">
          {/* Tag */}
          <span className="text-[#B89C49] text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-amber-300  to-yellow-600">
            OROX AND A RANGE OF POWERFUL PRODUCTS
          </span>

          <div className="space-y-[24px] mt-[8px]">
            <h2 className="text-[34px] md:text-[56px] font-bold leading-[40px] md:leading-[68px]">
              Our products
            </h2>
            <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-white w-[1040px]">
              OROX is a seamless investment platform aiming to deliver low-risk
              growth and crypto exposure with reduced volatility. Connect
              effortlessly to ODN and the DVOX token—all in one app.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[32px]">
          <Button
            variant="secondary"
            className="h-[48px] md:h-[64px] text-[16px] md:text-[20px] px-[32px] py-[16px]"
          >
            Explore other OROX products
          </Button>
        </div>

        <div className="mt-[48px] md:mt-[80px]">
          <div className="relative w-full aspect-[1.75/1] flex justify-center">
            <video
              ref={videoRef}
              src="/videos/Dvox.mp4"
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
    </section>
  );
};
