"use client";
import Image from "next/image";
import { Button } from "../ui/Button";
import Link from "next/link";

export const ProductDVOXCTA = () => {
  return (
    <div className="container mx-auto sm:[0px] px-[16px] xl:px-[0px] pt-[44px] md:pt-[88px] overflow-hidden max-w-[1280px]">
      <div className="relative h-[600px] md:h-[500px] lg:h-[550px] bg-[#1A1814] rounded-2xl mb-8 md:mb-12 overflow-visible">
        {/* Background Pattern - Mobile */}
        <div className="absolute inset-0 h-auto w-full overflow-hidden rounded-2xl sm:hidden">
          <div className="absolute inset-0 bg-[url('/images/service/dvox/bg-mobile-dvox.png')] bg-cover bg-center" />
        </div>

        {/* Background Pattern - Desktop/Tablet */}
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl hidden sm:block">
          <div className="absolute inset-0 bg-[url('/images/service/dvox/bg-dvox.png')] bg-cover bg-center" />
        </div>

        {/* Mobile Layout */}
        <div className="relative h-full flex flex-col items-center px-[24px] py-[32px] sm:hidden">
          <div className="text-white w-full max-w-xs text-left mt-[10px]">
            <span className="text-[14px] md:text-[16px] font-semibold text-white mb-[16px] block leading-[18px] md:leading-[28px]">
              READY TO INVEST IN CRYPTO WITHOUT VOLATILITY?
            </span>
            <h3 className="text-[16px] md:text-[28px] font-regular mb-[32px] leading-[24px] md:leading-[40px]">
              DVOX gives you high-growth potential with less risk, offering a
              professionally managed, auto-balanced portfolio of digital assets.
            </h3>
            <Button
              variant="secondary"
              className="w-full text-[#293483] hover:bg-gray-100"
            >
              <Link href="http://opusmomentus.com/coming-soon">
                Get started with DVOX
              </Link>
            </Button>
          </div>

          <div className="mt-[32px] flex justify-center items-center">
            <div className="relative w-[100%] h-auto">
              <Image
                src="/images/service/dvox/phone-dvox.png"
                alt="DVOX App Interface"
                height={600}
                width={375}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="relative hidden sm:flex lg:hidden h-full">
          <div className="text-white w-1/2 text-left p-8 flex flex-col justify-center">
            <span className="text-[14px] font-medium text-white/80 mb-[16px] block">
              READY TO INVEST IN CRYPTO WITHOUT VOLATILITY?
            </span>
            <h3 className="text-[16px] md:text-[32px] font-bold mb-[32px] leading-[24px] md:leading-[40px]">
              DVOX gives you high-growth potential with less risk, offering a
              professionally managed, auto-balanced portfolio of digital assets.
            </h3>
            <Button
              variant="secondary"
              className="max-w-[280px] text-[#293483] hover:bg-gray-100"
            >
              <Link href="http://opusmomentus.com/coming-soon">
                Get started with DVOX
              </Link>{" "}
            </Button>
          </div>

          <div className="absolute right-[-30px] top-[50%] transform translate-y-[-50%]">
            <div className="relative w-[600px] h-[500px]">
              <Image
                src="/images/service/dvox/phone-dvox.png"
                alt="DVOX App Interface"
                width={800}
                height={618}
                className="drop-shadow-2xl object-contain"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="relative hidden lg:flex flex-row items-center p-12">
          <div className="text-white max-w-xl text-left">
            <span className="text-[14px] font-semibold text-white mb-[16px] block">
              READY TO INVEST IN CRYPTO WITHOUT VOLATILITY?
            </span>
            <h3 className="text-[28px] mb-[32px] leading-[40px] w-[512px]">
              DVOX gives you high-growth potential with less risk, offering a
              professionally managed, auto-balanced portfolio of digital assets.
            </h3>
            <Button
              variant="secondary"
              className=" text-[#293483] hover:bg-gray-100 px-[32px] py-[16px] text-[20px]"
            >
              <Link href="http://opusmomentus.com/coming-soon">
                Get started with DVOX
              </Link>{" "}
            </Button>
          </div>

          <div className="absolute right-[-240px] top-[70%] transform translate-y-[-50%]">
            <div className="relative w-[900px] h-[700px]">
              <Image
                src="/images/service/dvox/phone-dvox.png"
                alt="DVOX App Interface"
                width={640}
                height={446}
                className="drop-shadow-2xl object-contain hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
