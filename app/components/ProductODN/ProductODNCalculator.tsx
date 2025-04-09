"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";

export const ProductODNCalculator = () => {
  const [investment, setInvestment] = useState("0.00");
  const [timeframe, setTimeframe] = useState(0);

  return (
    <section className="w-full px-[16px] md:px-[24px] lg:px-[32px] py-[48px] md:py-[88px] overflow-x-hidden bg-[#F1F2F8]">
      <div>
        <div className="mb-[32px] md:mb-[40px] flex flex-col items-center text-center">
          <p className="mb-2 block text-[14px] font-semibold text-transparent bg-clip-text md:text-[16px] bg-gradient-to-b from-[#4296E4] to-[#383699]">
            ESTIMATE YOUR POTENTIAL RETURNS
          </p>
          <h2 className="mb-6 text-[34px] md:text-[48px] lg:text-[56px] font-bold leading-[40px] md:leading-[56px] lg:leading-[68px] max-w-[880px]">
            ODN investment return calculator
          </h2>
          <p className="max-w-[880px] text-[16px] md:text-[20px] text-black/80">
            Curious about your potential returns? Use our investment calculator
            to see how ODN can grow your portfolio over time. Simply enter your
            investment amount and let&apos;s do the math!
          </p>
        </div>

        {/* Calculator */}
        <div className="mx-auto max-w-[1024px]">
          {/* Input */}
          <div className="mb-[24px] md:mb-[48px]">
            <hr className="w-full h-[1px] bg-[#E5E5E5] mb-[24px] md:mb-[48px]" />
            <div className="relative mx-auto max-w-[384px]">
              <input
                type="text"
                value={`$${investment}`}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9.]/g, "");
                  if (value === "" || /^\d*\.?\d*$/.test(value)) {
                    setInvestment(value);
                  }
                }}
                className="h-[56px] w-full rounded-xl border border-zinc-900 bg-[#F1F2F8] px-4 py-1 text-[16px] md:text-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute -top-3 left-4 bg-[#F1F2F8] px-1 text-xs">
                Estimated investment amount
                <span className="text-red-600">*</span>
              </span>
            </div>
          </div>

          {/* Results */}
          <div
            className="w-full mb-[24px] md:mb-[48px] flex items-center justify-between"
          >
            <div className="text-center flex-1">
              <p className="text-[56px] font-bold leading-[72px] text-indigo-950 md:text-[176px] md:leading-[176px] mb-[4px] md:mb-[16px]">
                $375k
              </p>
              <p className="text-[14px] font-bold leading-[20px] md:text-[20px] md:leading-[32px]">
                Invested returns (USD)
              </p>
            </div>

            {/* Divider */}
            <div className="w-[2px] bg-[#E5E5E5] mx-4" />

            <div className="text-center flex-1">
              <p className="text-[56px] font-bold leading-[72px] text-indigo-950 md:text-[176px] md:leading-[176px] mb-[4px] md:mb-[16px]">
                2.5%
              </p>
              <p className="text-[14px] font-bold leading-[20px] md:text-[20px] md:leading-[32px]">
                Average returns
              </p>
            </div>
          </div>

          {/* Slider */}
          <div className="mx-auto mb-[24px] md:mb-[48px] max-w-[720px]">
            <div className="relative h-11">
              {/* Background track */}
              <div className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 rounded-lg bg-slate-300" />

              {/* Gradient track */}
              <div
                className="absolute left-0 top-1/2 h-2 -translate-y-1/2 rounded-lg bg-gradient-to-r from-indigo-900 via-slate-600 to-emerald-300"
                style={{ width: `${timeframe}%` }}
              />

              {/* Slider input */}
              <input
                type="range"
                min="0"
                max="100"
                value={timeframe}
                onChange={(e) => setTimeframe(parseInt(e.target.value))}
                className="relative z-10 h-11 w-full cursor-pointer appearance-none bg-transparent
                  [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:h-12 [&::-webkit-slider-thumb]:w-12 
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full 
                  [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 
                  [&::-webkit-slider-thumb]:border-slate-300 [&::-webkit-slider-thumb]:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.10),0px_0.5px_4px_0px_rgba(0,0,0,0.10)]
                  [&::-moz-range-thumb]:h-12 [&::-moz-range-thumb]:w-12 
                  [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 
                  [&::-moz-range-thumb]:border-slate-300 [&::-moz-range-thumb]:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.10),0px_0.5px_4px_0px_rgba(0,0,0,0.10)]"
              />
            </div>
            <div className="mt-2 flex justify-between text-sm text-zinc-900">
              <span>3 months</span>
              <span>10 years</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-[24px] md:mb-[48px] rounded border-l-4 border-[#93D9FF] bg-[#93D9FF]/20 p-[24px]">
            <div className="flex flex-row items-start">
              <Image
                src="/icons/ic_info.svg"
                alt="Lock"
                width={18}
                height={18}
                className="mr-[8px] pt-1"
              />
              <p className="text-[14px] md:text-[16px] text-[#21275B]">
                <span className="font-bold">Disclaimer:</span> OROX has put
                together this calculator to give you some examples of different
                financial scenarios, based on stated assumptions and the figures
                you input. The calculations are intended as estimates only; and
                they&apos;re not meant to be a substitute for professional
                financial advice.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-[8px] sm:flex-row">
            <Button
              variant="primary"
              className="w-full px-6 py-3 text-[16px] leading-6 md:w-auto md:px-7 md:py-[15px] md:text-[18px] md:leading-7 lg:px-8 lg:py-4 lg:text-[20px] lg:leading-8"
            >
              Get started with ODN
            </Button>
            <Button
              variant="link"
              className="w-full px-6 py-3 text-[16px] leading-6 md:w-auto md:px-7 md:py-[15px] md:text-[18px] md:leading-7 lg:px-8 lg:py-4 lg:text-[20px] lg:leading-8 bg-transparent"
            >
              Get the app
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
