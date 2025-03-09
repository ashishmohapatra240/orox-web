import Image from "next/image";
import { Button } from "../ui/Button";

const AboutHero = () => {
  return (
    <section className="relative w-full bg-[#293483] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Content */}
      <div className="space-y-6 text-white">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          About OROX
        </h1>
        <p className="text-lg text-white/80 max-w-xl">
          OROX is revolutionising investing by making risk-adjusted strategies
          accessible to everyone. Whether you&apos;re looking for steady,
          low-risk investing with ODN subscription or high growth crypto
          exposure with the DVOX token, OROX puts your money on autopilot—so you
          can grow without the guesswork.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-white text-[#293483] hover:bg-white/90">
            Get in touch
          </Button>
          <Button className="border border-white/20 bg-transparent hover:bg-white/10">
            Get in touch with us
          </Button>
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="relative aspect-square w-full max-w-[600px] mx-auto">
        <Image
          src="/images/about/coins.png"
          alt="Gold coins on a curved surface"
          fill
          className="object-cover"
          priority
        />
        {/* Pause Button */}
        <button className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#293483] shadow-lg">
          <div className="h-4 w-4">
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
