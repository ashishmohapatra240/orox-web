"use client";
import Image from "next/image";

import { AppStoreButton } from "../ui/AppStoreButton";
import { PlayStoreButton } from "../ui/PlayStoreButton";

export const Hero = () => {
  return (
    <section className="min-h-screen relative w-full overflow-hidden bg-white px-4">
      <div className="absolute w-[180%] h-[180%] bottom-[0] left-[180px]">
        <Image
          src="/Pattern.png"
          alt="Hero Background"
          width={1620}
          height={1620}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mx-auto max-w-7xl py-8 md:py-12 lg:py-16">
        <div className="grid items-center gap-8 md:gap-12 lg:gap-24 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10 pt-8 md:pt-12 lg:pt-16">
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h1 className="relative text-3xl font-bold leading-tight text-[#19191B] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Invest smarter.
                  <br />
                  Grow faster.
                  <br />
                  <span className="relative">
                    {/* Yellow background decoration */}
                    <span className="absolute left-0 top-[35%] -z-10 h-[60%] w-full bg-[#FFDE82] rounded-[8px]"></span>
                    Build wealth.
                  </span>
                </h1>
                <p className="max-w-[540px] text-sm sm:text-base md:text-lg text-[#19191B]">
                  Forget stock-picking, market timing and waiting for the next
                  bull run—OROX puts your money on autopilot for high-growth
                  returns.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-indigo-900 rounded-[72px] inline-flex justify-center items-center gap-2 text-white font-bold text-sm sm:text-base hover:bg-indigo-800 transition-colors">
                  Join for free
                </button>
                <div className="flex flex-wrap items-center gap-2">
                  <PlayStoreButton href="https://play.google.com/store/apps/details?id=com.oroxlabs.app.android&hl=en_AU" />
                  <AppStoreButton href="https://apps.apple.com/au/app/orox/id6452677869" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Hero Image */}
          <div
            className="relative w-full max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[400px] mx-auto h-auto flex justify-center items-center cursor-pointer"
            onClick={() => console.log("Hero image clicked")}
          >
            <Image
              src="/images/hero.png"
              alt="OROX Trading Platform Interface"
              width={800}
              height={1200}
              className="w-full object-contain hover:scale-90 transition-transform duration-500 ease-in-out"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
