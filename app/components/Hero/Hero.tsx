import Image from "next/image";
import { Button } from "../ui/Button";
import { PlayStoreButton } from "../ui/PlayStoreButton";
import { AppStoreButton } from "../ui/AppStoreButton";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-8 md:py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-48 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="relative text-[2.5rem] font-bold leading-tight text-[#19191B] sm:text-6xl md:text-7xl">
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
                <p className="max-w-xl text-lg text-gray-600">
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
          <div className="relative w-[450px] h-auto flex justify-center items-center">
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
