"use client";
import Image from "next/image";

import { AppStoreButton } from "../ui/AppStoreButton";
import { PlayStoreButton } from "../ui/PlayStoreButton";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pt-[70px]">
      <div className="absolute w-[180%] h-[180%] top-[11%] right-[-40%] md:top-[-50%] md:right-[0]  md:bottom-[35%] md:left-[20%]">
        <Image
          src="/Pattern.png"
          alt="Hero Background"
          width={1620}
          height={1620}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mx-auto max-w-7xl py-8 md:py-12 lg:py-16">
        <div className="grid items-center gap-8 lg:gap-0 md:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10 pt-8 md:pt-12 lg:pt-16">
            <div className="">
              <div className="space-y-2 md:space-y-4">
                <h1 className="relative text-[40px] font-bold leading-[48px] md:leading-[80px] text-[#19191B] md:text-[76px]">
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
                <p className="max-w-[300px] md:max-w-[570px] text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px] mt-[24px]">
                  Forget stock-picking, market timing and waiting for the next
                  bull run—OROX puts your money on autopilot for high-growth
                  returns.
                </p>
              </div>

              <div className="lg:block">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#293483] rounded-[72px] inline-flex justify-center items-center gap-2 text-white font-bold text-[16px] md:text-[20px] hover:bg-indigo-800 transition-colors mb-[64px] md:mb-[20px] mt-[40px]">
                  Join for free
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Hero Image */}
          <div className="relative w-full max-w-[240px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[400px] mx-auto h-auto flex justify-center items-center cursor-pointer">
            <Image
              src="https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/hero.png"
              alt="OROX Trading Platform Interface"
              width={800}
              height={1200}
              className="w-full object-contain hover:scale-90 transition-transform duration-500 ease-in-out"
              priority
            />
          </div>

          <div className="lg:hidden items-center justify-center w-full">
            <hr className="w-full bg-gradient-to-r from-white via-[#C9CCE0] to-white h-0.5 mb-[32px]" />
            <div className="flex flex-wrap items-center gap-[8px] justify-center">
              <PlayStoreButton href="https://play.google.com/store/apps/details?id=com.oroxlabs.app.android&hl=en_AU" />
              <AppStoreButton href="https://apps.apple.com/au/app/orox/id6452677869" />
            </div>
          </div>

          <div className="hidden lg:block">
            <hr className="w-[50%] bg-gradient-to-r from-white via-[#C9CCE0] to-white h-0.5 my-8" />
            <div className="flex flex-wrap items-center gap-2">
              <PlayStoreButton href="https://play.google.com/store/apps/details?id=com.oroxlabs.app.android&hl=en_AU" />
              <AppStoreButton href="https://apps.apple.com/au/app/orox/id6452677869" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
