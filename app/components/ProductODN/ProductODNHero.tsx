"use client";
import { useState, useRef } from "react";
import { Button } from "../ui/Button";
import { PausePlayButton } from "../ui/PausePlayButton";

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
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 p-4 sm:p-6 lg:p-12 xl:p-20 lg:w-1/2">
            <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.2]">
              Opus Diversified Nexus (ODN)
            </h1>
            <p className="text-[16px] md:text-[20px] text-[#19191B] max-w-[600px]">
              OROX is revolutionising investing by making risk-adjusted
              strategies accessible to everyone. Whether you&apos;re looking for
              steady, low-risk investing with ODN subscription or high growth
              crypto exposure with the DVOX token, OROX puts your money on
              autopilot—so you can grow without the guesswork.
            </p>
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
              <Button
                variant="primary"
                className="text-nowrap py-4 text-[20px]"
              >
                Get in touch
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:w-1/2 min-h-[400px] md:min-h-[500px] lg:min-h-[550px]">
            <video
              src="/videos/ODN.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover lg:rounded-l-[32px] rounded-t-[16px]"
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
