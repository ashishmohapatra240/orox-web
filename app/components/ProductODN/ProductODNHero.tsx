"use client";
import { useState, useRef } from "react";
import { Button } from "../ui/Button";
import { PausePlayButton } from "../ui/PausePlayButton";
import Link from "next/link";

export const ProductOdnHero = () => {
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
    <section className="relative w-full bg-[#EAF5FF]">
      <div className="h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Content */}
          <div className="py-[48px] px-[16px] md:px-[60px] md:py-[80px] lg:px-[60px] xl:px-[80px] lg:py-[100px] xl:py-[147px] lg:w-1/2">
            <h1 className="text-[#19191B] text-[40px] md:text-[56px] lg:text-[60px] xl:text-[64px] font-bold leading-[48px] md:leading-[64px] lg:leading-[68px]">
              Access to stable, strategy-led performance
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] text-[#19191B] max-w-[600px] leading-[24px] md:leading-[28px] lg:leading-[30px] xl:leading-[32px] mt-[24px] md:mt-[28px] lg:mt-[30px] xl:mt-[32px]">
              <span className="font-bold">Opus Diversified Nexus (ODN)</span>{" "}
              focuses on risk-adjusted, hands-off investing with a 90-day cycle
              and market-neutral strategies designed for long-term stability. No
              wild swings, no constant monitoring—just smart, market-neutral
              strategies designed for optimal stability.
            </p>
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-[32px] md:mt-[36px] lg:mt-[36px] xl:mt-[40px]">
              <Button
                variant="primary"
                className="text-nowrap text-[16px] md:text-[20px] h-[48px] md:h-[56px] lg:h-[64px] px-[32px]"
              >
                <Link href="https://orox.app/register" target="_blank" rel="noopener noreferrer">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:w-1/2 min-h-[400px] md:min-h-[500px] lg:min-h-[550px]">
            <video
              ref={videoRef}
              src="/videos/ODN.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover lg:rounded-l-[32px] rounded-t-[16px] lg:rounded-r-[0px]"
            />
            {/* Pause Button */}
            <PausePlayButton
              isPlaying={isPlaying}
              onToggle={togglePlay}
              className="absolute bottom-[24px] right-[24px] h-9 w-9 md:h-11 md:w-11 lg:h-11 xl:h-12 lg:w-11 xl:w-12 text-[#293483] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOdnHero;
