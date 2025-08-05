"use client";
import Image from "next/image";

import { AppStoreButton } from "../ui/AppStoreButton";
import { PlayStoreButton } from "../ui/PlayStoreButton";
import Link from "next/link";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pt-[70px]">
      <div className="absolute w-[180%] h-[180%] top-[11%] right-[-40%] sm:w-[200%] sm:h-[200%] sm:top-[-75%] sm:right-[-40%] md:w-[180%] md:h-[180%]  md:top-[-73%] md:right-[0] md:bottom-[35%] md:left-[12.5%]">
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
                    <span className="absolute left-0 top-[35%] -z-10 h-[60%] w-full bg-[#FFDE82] rounded-[4px]"></span>
                    Build wealth.
                  </span>
                </h1>
                <p className="max-w-[300px] md:max-w-[570px] text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px] mt-[24px]">
                  Forget stock-picking, market timing, and chasing the next bull run. OROX gives you access to algorithm-driven, professional-grade strategies for smarter growth.
                </p>
              </div>

              <div className="lg:block">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 inline-flex text-white font-bold text-[16px] md:text-[20px] transition-colors mb-[64px] md:mb-[50px] mt-[40px]"
                >
                  <Link href="https://orox.app/join-waitlist" target="_blank" rel="noopener noreferrer">Join waitlist</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Hero Image */}
          <div className="relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] mx-auto h-auto flex justify-center items-center cursor-pointer">
            <Image
              src="/images/hero.png"
              alt="OROX Trading Platform Interface"
              width={900}
              height={1350}
              className="w-full object-contain hover:scale-90 transition-transform duration-500 ease-in-out"
              priority
            />
          </div>

          <div
            className="lg:hidden items-center justify-center w-full"
            style={{ zIndex: 10 }}
          >
            <Image
              src="/icons/path.svg"
              alt="OROX Path"
              width={375}
              height={667}
              className="w-[332px] h-full object-contain mb-[32px]"
            />
            <div className="flex flex-wrap items-center gap-[8px] justify-center">
              <PlayStoreButton href="https://play.google.com/store/apps/details?id=com.oroxlabs.app.android&hl=en_AU" />
              <AppStoreButton href="https://apps.apple.com/au/app/orox/id6452677869" />
            </div>
          </div>

          <div className="hidden lg:block" style={{ zIndex: 0 }}>
            <Image
              src="/icons/path.svg"
              alt="OROX Path"
              width={375}
              height={667}
              className="w-[200px] md:w-[332px] h-full object-contain mb-[32px]"
            />
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
