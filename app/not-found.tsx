"use client";

import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

export default function Error() {
  return (
    <div>
      <div className="mb-[48px] md:mb-[88px]">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center px-[16px] md:px-0 py-[48px] md:py-[88px]">
        <video
          src="/videos/Error.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-[150px] h-auto"
        />
        <div className=" inline-flex flex-col gap-8">
          <div className=" flex flex-col justify-center items-center gap-6">
            <div className=" text-center justify-start text-zinc-900 text-[40px] md:text-[64px] font-bold leading-[48px] md:leading-[80px]">
              We couldn’t find the page.
            </div>
            <div className=" text-center justify-center text-zinc-900 text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[32px]">
              But don’t worry, we’re on it! Please come back a bit later.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
