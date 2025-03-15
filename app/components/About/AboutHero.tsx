import Image from "next/image";
import { Button } from "../ui/Button";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[100dvh] bg-[linear-gradient(168deg,#276EDE_0%,#11032F_100%)]">
      <div className="h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-white p-4 sm:p-6 lg:p-12 xl:p-20 lg:w-1/2">
            <h1 className="text-[40px] md:text-[64px] font-bold">About OROX</h1>
            <p className="text-[16px] md:text-[20px] text-white/80 max-w-[600px]">
              OROX is revolutionising investing by making risk-adjusted
              strategies accessible to everyone. Whether you&apos;re looking for
              steady, low-risk investing with ODN subscription or high growth
              crypto exposure with the DVOX token, OROX puts your money on
              autopilot—so you can grow without the guesswork.
            </p>
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
              <Button variant="white" className="w-full xs:w-auto">
                Join for free
              </Button>
              <Button variant="outline" className="w-full xs:w-auto">
                Get in touch with us
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:w-1/2 h-[280px] xs:h-[320px] sm:h-[400px] lg:h-[100dvh]">
            <Image
              src="/images/about/about-hero.png"
              alt="Gold coins on a curved surface"
              fill
              className="object-cover lg:rounded-l-[32px]"
              priority
              quality={100}
            />
            {/* Pause Button */}
            <button className="absolute bottom-4 right-4 flex h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-white text-[#293483] shadow-lg">
              <div className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="2"
                    width="4"
                    height="12"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="9"
                    y="2"
                    width="4"
                    height="12"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
