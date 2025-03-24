"use client";
import { useState, useRef, useEffect } from "react";
import { PausePlayButton } from "../ui/PausePlayButton";

export const ProductsHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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

  useEffect(() => {
    if (videoRef.current) {
      setIsPlaying(!videoRef.current.paused);
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full bg-white pb-48 md:pb-64 lg:pb-80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mx-auto max-w-4xl pt-[48px] md:pt-[88px]">
            {/* Tag */}
            <span className="text-[14px] md:text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699]">
              OROX AND A RANGE OF POWERFUL PRODUCTS
            </span>

            <div className="mt-4 md:mt-8 space-y-4 md:space-y-[24px]">
              <h1 className="text-[40px] md:text-[64px] font-bold text-[#19191B] leading-[48px] md:leading-[80px]">
                Our products
              </h1>
              <p className="text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px] mt-[24px]">
                OROX is a seamless investment app offering low-risk growth and
                crypto exposure with reduced volatility. Connect effortlessly to
                ODN and the DVOX token—all in one app.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#070926] h-32 sm:h-[40vh] md:h-[80vh]" />

      <div className="absolute left-1/2 -translate-x-1/2 bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 w-[90%] max-w-[365px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] rounded-[32px]">
        <div className="relative w-full aspect-[1.75/1]">
          <video
            ref={videoRef}
            src="/videos/Products.mp4"
            autoPlay
            muted
            loop
            className="object-cover rounded-[24px] md:rounded-[32px]"
          />

          <PausePlayButton
            isPlaying={isPlaying}
            onToggle={togglePlay}
            className="absolute bottom-[16px] right-[16px] md:bottom-[24px] md:right-[24px] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
          />
        </div>
      </div>
    </section>
  );
};
