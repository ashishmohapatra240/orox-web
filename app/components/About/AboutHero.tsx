"use client";
import { Button } from "../ui/Button";
import { useState, useRef } from "react";
import { PausePlayButton } from "../ui/PausePlayButton";

const AboutHero = () => {
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
    <section className="relative w-full bg-[linear-gradient(168deg,#276EDE_0%,#11032F_100%)]">
      <div className="h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Content */}
          <div className="text-white py-[48px] px-[16px] md:px-[80px] md:py-[147px] lg:w-1/2">
            <h1 className="text-[40px] md:text-[64px] font-bold leading-[68px]">
              About OROX
            </h1>
            <p className="text-[16px] md:text-[20px] text-white max-w-[600px] leading-[24px] md:leading-[32px] mt-[24px] md:mt-[32px]">
              OROX is revolutionising investing by making risk-adjusted
              strategies accessible to everyone. Whether you&apos;re looking for
              steady, low-risk investing with ODN subscription or high growth
              crypto exposure with the DVOX token, OROX puts your money on
              autopilot—so you can grow without the guesswork.
            </p>
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-[40px]">
              <Button variant="white" className="whitespace-nowrap">
                Join for free
              </Button>
              <Button variant="outline" className="whitespace-nowrap">
                Get in touch with us
              </Button>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative lg:w-1/2 min-h-[400px]">
            <video
              ref={videoRef}
              src="/videos/About.mp4"
              autoPlay
              muted
              loop
              controls={false}
              className="absolute inset-0 h-full w-full object-cover lg:rounded-l-[32px] rounded-t-[16px]"
            />
            <PausePlayButton
              isPlaying={isPlaying}
              onToggle={togglePlay}
              className="absolute bottom-[24px] right-[24px] h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#293483] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
