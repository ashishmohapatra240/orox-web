"use client";
import { Button } from "../ui/Button";
import Image from "next/image";
import { useState } from "react";
import { ComingSoonModal } from "../ui/ComingSoonModal";
import Link from "next/link";

// const calculateTimeLeft = () => {
//   const targetDate = new Date("2025-08-15T00:00:00");
//   const now = new Date();
//   const difference = targetDate.getTime() - now.getTime();

//   if (difference <= 0) {
//     return { days: "00", hours: "00", minutes: "00", seconds: "00" };
//   }

//   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//   return {
//     days: days.toString().padStart(2, "0"),
//     hours: hours.toString().padStart(2, "0"),
//     minutes: minutes.toString().padStart(2, "0"),
//     seconds: seconds.toString().padStart(2, "0"),
//   };
// };

export const ProductDVOXHero = () => {
  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  // const handleActionClick = () => {
  //   setIsModalOpen(true);
  // };

  return (
    <>
      <section className="relative w-full bg-[#000000] text-white">
        <div className="h-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row h-full ">
            {/* Left Content - Presale Card */}
            <div className="px-[16px] lg:w-[540px] flex items-start justify-start py-[48px] md:py-[80px]">
              <div className="max-w-[520px] w-full p-[4px] rounded-[24px] bg-gradient-to-b from-[#F9DF7B] via-[#B57E10] to-[#F9DF7B]">
                <div className="w-full h-full rounded-[20px] bg-black pt-8 pl-8 pr-8 px-[16px] flex flex-col">
                  {/* Logo and Title */}
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/products/DVOX Coin.png"
                      alt="DVOX Logo"
                      width={80}
                      height={80}
                      className="w-[80px] h-[80px] rounded-full mb-[16px]"
                    />
                    <div className="text-[#B89C49] text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-amber-300  to-yellow-600 ">
                      NEW DIGITAL TOKEN: PRIVATE PRE-SALE
                    </div>
                    <h2 className="text-[28px] md:text-[36px] font-bold leading-[32px] md:leading-[48px] mt-[8px] mb-[16px]">
                      Don&apos;t miss out on the new DVOX token private sale!
                    </h2>
                  </div>
                  <Link href={"/contact"}>
                    <Button variant="dvox" className="whitespace-nowrap w-full">
                      <Image
                        src="/icons/ic_email.svg"
                        alt="Contact"
                        width={20}
                        height={20}
                      />
                      <p className="py-[4px]">Contact us for more details</p>

                    </Button>
                  </Link>
                  {/* Timer */}
                  {/* <div className=" px-4 pt-[16px] pb-2 bg-gradient-to-r from-yellow-950 to-stone-900 rounded-2xl flex flex-col justify-center items-center gap-2 flex-shrink-0">
                    <div className="inline-flex justify-start items-center gap-2 md:gap-8">
                      {[
                        { label: "DAYS", value: timeLeft.days },
                        { label: "HOURS", value: timeLeft.hours },
                        { label: "MINS", value: timeLeft.minutes },
                        { label: "SECS", value: timeLeft.seconds },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="inline-flex flex-col justify-start items-center w-[60px]"
                        >
                          <div className="text-center text-[#FFDE82] text-[14px] font-bold  leading-[20px]">
                            {item.label}
                          </div>
                          <div className="text-center text-[#FFDE82] text-[36px] font-bold leading-[48px] tabular-nums w-[60px] h-[48px]">
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
                        Until presale begins
                      </div>
                    </div>
                  </div> */}

                  {/* Progress Bar */}
                  {/* <div className="flex-shrink-0">
                    <div className="text-[20px] text-center mb-[8px] leading-[32px]">
                      USDT Raised: $17,250,440.43 / $17,594,367
                    </div>
                    <div className="h-[8px] bg-[#ffffff1a] rounded-full mb-[24px]">
                      <div className="h-full w-[45%] rounded-full bg-[#FFD600]"></div>
                    </div>
                  </div> */}

                  {/* DVOX Info */}
                  <div className="space-y-[8px] mb-[24px] text-center flex-grow flex flex-col justify-center">
                    {/* <div className="flex items-center justify-center">
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
                    </div> */}
                    {/* <div className="flex items-center justify-center">
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
                    </div> */}
                    {/* <div className="flex items-center justify-center pt-[24px]">
                      <hr className="w-1/4 h-tiny bg-[#C9CCE0] mr-[16px]" />
                      <div className="text-[16px] md:text-[12px] text-[#C9CCE0] leading-[24px] md:leading-[16px] font-semibold">
                        1 DVOX = $0.01
                      </div>
                      <hr className="w-1/4 h-tiny bg-[#C9CCE0] ml-[16px]" />
                    </div> */}
                    {/* 
                    <div className="flex items-center justify-center pt-[16px]">
                      <hr className="w-1/4 h-tiny bg-[#C9CCE0] mr-[16px]" />
                      <div className="text-[16px] md:text-[12px] text-[#C9CCE0] leading-[24px] md:leading-[16px] font-semibold">
                        1 DVOX = $0.01
                      </div>
                      <hr className="w-1/4 h-tiny bg-[#C9CCE0] ml-[16px]" />
                    </div> */}
                  </div>

                  {/* Buttons */}
                  {/* <div className="flex-shrink-0">
                    <div className="flex flex-col md:flex-row justify-between gap-[8px] w-full whitespace-nowrap">
                      <Button
                        variant="dvox"
                        className="h-[48px] text-center w-full"
                        onClick={handleActionClick}
                      >
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
                        onClick={handleActionClick}
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
                  </div> */}
                  {/* <div className="text-center mt-[24px] flex-shrink-0">
                    <a
                      href="#"
                      className="text-[12px] text-[#FFDE82] font-semibold flex items-center justify-center gap-[4px]"
                      onClick={(e) => {
                        e.preventDefault();
                        handleActionClick();
                      }}
                    >
                      Don&apos;t have a wallet?{" "}
                      <Image
                        src="/icons/ic_chevron_right_dvox.svg"
                        alt="DVOX"
                        width={18}
                        height={18}
                      />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-[740px] py-[48px] px-[16px] md:px-[32px] md:py-[80px]">
              <h1 className="text-[40px] md:text-[56px] font-bold relative leading-[48px] md:leading-[68px]">
                DVOX turns{" "}
                <span className="relative inline-block">
                  {/* Yellow background decoration */}
                  <span className="absolute left-0 top-[35%] z-[1] h-[80%] w-full bg-[#FFD600]/40 rounded-[4px]"></span>
                  <span className="relative z-[2]">volatility</span>
                </span>{" "}
                into opportunity.
              </h1>
              <p className="text-[16px] md:text-[20px] text-[#ffffff] mt-8 max-w-[740px] leading-[24px] md:leading-[32px]">
                Built for crypto bulls seeking more than just buy-and-hold, DVOX
                provides access to professionally managed, auto-balanced
                strategies built to capture opportunity in market volatility
                without getting wrecked by the swings.
                <br />
                <br />
                Stake your DVOX and plug into a data-driven, AI-powered approach
                to performance—structured, adaptive and always on.
              </p>

              {/* Features List */}
              <ul className="mt-8">
                {[
                  "AI-powered strategies designed to pursue growth beyond market direction",
                  "Market-neutral, auto-balanced, designed to reduce exposure to extreme volatility",
                  "Blockchain-backed infrastructure for secure, transparent access",
                  "Utility token model within a regulated framework for broader accessibility",
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
                className="mt-8 h-12 px-8 whitespace-nowrap w-full md:w-auto"
              >
                <Link
                  href="https://orox.app/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ComingSoonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductDVOXHero;
