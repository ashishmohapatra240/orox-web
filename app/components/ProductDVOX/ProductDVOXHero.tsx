"use client";
import { Button } from "../ui/Button";
import Image from "next/image";
export const ProductDVOXHero = () => {
  return (
    <section className="relative w-full bg-[#000000] text-white">
      <div className="h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Content - Presale Card */}
          <div className="py-[48px] px-[16px] md:px-[32px] md:py-[80px] lg:w-1/2 flex items-center justify-center">
            <div className="max-w-[520px] p-[4px] rounded-[24px] bg-gradient-to-b from-[#F9DF7B] via-[#B57E10] to-[#F9DF7B]">
              <div className="w-full h-full rounded-[20px] bg-black p-8 px-[16px]">
                {/* Logo and Title */}
                <div className="">
                  <Image
                    src="/images/products/Bull.png"
                    alt="DVOX Logo"
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] rounded-full mb-[16px]"
                  />
                  <div className="text-[#B89C49] text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-amber-300  to-yellow-600 ">
                    NEW DIGITAL TOKEN - COMING SOON
                  </div>
                  <h2 className="text-[28px] md:text-[36px] font-bold leading-[32px] md:leading-[48px] mt-[8px]">
                    Don&apos;t miss out on the new DVOX token presale!
                  </h2>
                </div>
                {/* Timer */}
                <div className="my-[16px] px-4 pt-[16px] pb-2 bg-gradient-to-r from-yellow-950 to-stone-900 rounded-2xl flex flex-col justify-center items-center gap-2">
                  <div className="inline-flex justify-start items-center gap-8">
                    {[
                      { label: "DAYS", value: "30" },
                      { label: "HOURS", value: "22" },
                      { label: "MINS", value: "16" },
                      { label: "SECS", value: "59" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="inline-flex flex-col justify-start items-center"
                      >
                        <div className="text-center text-amber-200 text-sm font-bold font-['Inter'] leading-tight">
                          {item.label}
                        </div>
                        <div className="text-center text-amber-200 text-4xl font-bold font-['Inter'] leading-[48px]">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="inline-flex justify-center items-start gap-2">
                    <div className="w-[18px] h-[18px] relative">
                      <Image
                        src="/icons/ic_info_dvox.svg"
                        alt="DVOX"
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className="text-[#E0C49F] text-[12px] font-normal">
                      Until next price increase
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="">
                  <div className="text-[20px] text-center mb-[8px] leading-[32px]">
                    USDT Raised: $17,250,440.43 / $17,594,367
                  </div>
                  <div className="h-[8px] bg-[#ffffff1a] rounded-full mb-[24px]">
                    <div className="h-full w-[45%] rounded-full bg-[#FFD600]"></div>
                  </div>
                </div>

                {/* DVOX Info */}
                <div className="space-y-[8px] mb-[24px] text-center">
                  <div className="flex items-center justify-center">
                    <span className="text-[16px] md:text-[20px] text-[#ffffff] leading-[24px] md:leading-[32px]">
                      Your purchased DVOX =
                    </span>
                    <span className="text-[16px] md:text-[20px] text-[#ffffff] leading-[24px] md:leading-[32px] ml-[8px]">
                      0
                    </span>
                    <Image
                      src="/icons/ic_help_dvox.svg"
                      alt="DVOX"
                      width={24}
                      height={24}
                      className="ml-[16px]"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-[16px] md:text-[20px] text-[#ffffff] leading-[24px] md:leading-[32px]">
                      Your stakeable DVOX =
                    </span>
                    <span className="text-[16px] md:text-[20px] text-[#ffffff] leading-[24px] md:leading-[32px] ml-[8px]">
                      0
                    </span>
                    <Image
                      src="/icons/ic_help_dvox.svg"
                      alt="DVOX"
                      width={24}
                      height={24}
                      className="ml-[16px]"
                    />
                  </div>
                  <div className="flex items-center justify-center pt-[24px]">
                    <hr className="w-1/4 h-tiny bg-[#C9CCE0] mr-[16px]" />
                    <div className="text-[16px] md:text-[12px] text-[#C9CCE0] leading-[24px] md:leading-[16px] font-semibold">
                      1 DVOX = $0.01
                    </div>
                    <hr className="w-1/4 h-tiny bg-[#C9CCE0] ml-[16px]" />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row justify-between gap-[8px] w-full whitespace-nowrap">
                  <Button variant="dvox" className="h-[48px] text-center w-full">
                    <Image
                      src="/icons/ic_credit_card.svg"
                      alt="DVOX"
                      width={24}
                      height={24}
                    />
                    Buy with card
                  </Button>
                  <Button
                    variant="secondary"
                    className="h-[48px] hover:bg-gray-100 text-center w-full"
                  >
                    <Image
                      src="/icons/ic_paid.svg"
                      alt="DVOX"
                      width={24}
                      height={24}
                    />
                    Buy with crypto
                  </Button>
                </div>
                <div className="text-center mt-[24px]">
                  <a
                    href="#"
                    className="text-[12px] text-[#FFDE82] font-semibold flex items-center   justify-center gap-[4px]"
                  >
                    Don&apos;t have a wallet?{" "}
                    <Image
                      src="/icons/ic_chevron_right_dvox.svg"
                      alt="DVOX"
                      width={18}
                      height={18}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 py-[48px] px-[16px] md:px-[32px] md:py-[80px]">
            <h1 className="text-[40px] md:text-[56px] font-bold relative leading-[48px] md:leading-[68px]">
              DVOX unlocks{" "}
              <span className="relative inline-block">
                {/* Yellow background decoration */}
                <span className="absolute left-0 top-[35%] z-[1] h-[80%] w-full bg-[#FFD600]/40 rounded-[8px]"></span>
                <span className="relative z-[2]">high-growth</span>
              </span>{" "}
              potential by capitalising on market volatility
            </h1>
            <p className="text-[16px] md:text-[20px] text-[#ffffff] mt-8 max-w-[600px] leading-[24px] md:leading-[32px]">
              Built for crypto bulls seeking high-growth potential beyond
              traditional buy and hold strategies. Instead of riding market
              swings, DVOX capitalises on volatility with a professionally
              managed, auto-balanced portfolio designed to capture
              &apos;alpha&apos; differently and stay resilient in any market.
            </p>

            {/* Features List */}
            <ul className="mt-8">
              {[
                "AI-powered strategies that are designed for high-growth.",
                "Market-neutral, auto-balanced portfolios to minimise risk.",
                "Blockchain-backed technology ensures safe, efficient investing.",
                "A regulated, secure and accessible investment solution.",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-[16px]">
                  <Image
                    src="/icons/ic_check_dvox.svg"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                  <span className="text-[16px] md:text-[20px] text-[#ffffff] my-[8px]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant="secondary"
              className="mt-8 h-12 px-8 text-black hover:bg-gray-100 whitespace-nowrap w-full md:w-auto"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDVOXHero;
