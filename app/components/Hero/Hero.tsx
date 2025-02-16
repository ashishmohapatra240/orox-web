import Image from "next/image";
import { Button } from "../ui/Button";
import { PlayStoreButton } from "../ui/PlayStoreButton";
import { AppStoreButton } from "../ui/AppStoreButton";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-8 md:py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 md:gap-16 lg:gap-48 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h1 className="relative text-4xl font-bold leading-tight text-[#19191B] sm:text-5xl md:text-6xl lg:text-7xl">
                  Invest smarter.
                  <br />
                  Grow faster.
                  <br />
                  <span className="relative">
                    {/* Yellow background decoration */}
                    <span className="absolute left-0 top-[35%] -z-10 h-[60%] w-full bg-[#FFD700]/40 rounded-[8px]"></span>
                    Build wealth.
                  </span>
                </h1>
                <p className="max-w-xl text-base md:text-lg text-gray-600">
                  Forget stock-picking, market timing and waiting for the next
                  bull run—OROX puts your money on autopilot for high-growth
                  returns.
                </p>
              </div>

              <div className="space-y-6">
                <Button>Join for free</Button>
                <div className="flex flex-wrap items-center gap-2">
                  <PlayStoreButton />
                  <AppStoreButton />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative w-full max-w-[450px] mx-auto h-auto flex justify-center items-center">
            <Image
              src="/images/hero.png"
              alt="OROX Trading Platform Interface"
              width={800}
              height={1200}
              className="w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
