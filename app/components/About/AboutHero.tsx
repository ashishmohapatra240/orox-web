import Image from "next/image";
import { Button } from "../ui/Button";

const AboutHero = () => {
  return (
    <section className="relative w-full bg-[linear-gradient(168deg,#276EDE_0%,#11032F_100%)]">
      <div className="">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="text-white py-[48px] px-[16px] md:px-[80px] md:py-[147px] lg:w-1/2">
            <h1 className="text-[40px] md:text-[64px] font-bold leading-[68px]">
              About OROX
            </h1>
            <p className="text-[16px] md:text-[20px] text-white max-w-[600px] leading-[24px] md:leading-[32px] mt-[24px] md:mt-[32px]">
              OROX is revolutionising investing by making risk-adjusted
              strategies accessible to everyone. Whether you&apos;re looking for
              steady, low-risk investing with ODN subscription or high growth
              crypto exposure with the DVOX token, OROX puts your money on
              autopilot—so you can grow without the guesswork.
            </p>
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-[40px]">
              <Button variant="white" className="whitespace-nowrap">
                Join for free
              </Button>
              <Button variant="outline" className="whitespace-nowrap">
                Get in touch with us
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:w-1/2 h-[280px] md:h-[700px]">
            <Image
              src="/images/about/about-hero.png"
              alt="Gold coins on a curved surface"
              fill
              className="object-cover lg:rounded-l-[32px] rounded-t-[16px]"
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
