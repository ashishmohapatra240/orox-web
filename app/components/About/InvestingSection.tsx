import Link from "next/link";
import { Button } from "../ui/Button";
import Image from "next/image";

export const InvestingSection = () => {
  return (
    <section className="w-full bg-[#070926] px-4 md:px-20 py-[48px] md:py-[128px]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col xl:flex-row justify-start items-center gap-12 md:gap-20">
          {/* Image Section */}
          <div className="relative w-full xl:w-[648px] h-auto">
            <Image
              src="/images/about/investing.png"
              alt="OROX Investing"
              width={1000}
              height={1000}
              className="object-cover rounded-2xl"
              priority
              quality={100}
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-10 md:gap-12 flex-1">
            <h2 className="text-[34px] md:text-[56px] font-bold text-white leading-[40px] md:leading-[68px]">
              No stock-picking, no market timing—just smarter, stress-free
              investing with OROX.
            </h2>

            <div className="w-full xl:w-auto">
              <Button
                variant="white"
                className="w-full xl:w-auto text-[16px] md:text-[20px] px-4 md:px-8 py-3 md:py-4 border border-[#78CAB9]"
              >
                <Link href="/products-orox-app">Get started with OROX</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
