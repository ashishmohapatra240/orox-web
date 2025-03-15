import Image from "next/image";

export const ProductsHero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* White Background Section */}
      <div className="w-full bg-white pb-48 md:pb-64 lg:pb-80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mx-auto max-w-4xl pt-16 md:pt-20 lg:pt-24">
            {/* Tag */}
            <span className="text-sm md:text-base font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699]">
              OROX AND A RANGE OF POWERFUL PRODUCTS
            </span>

            {/* Title and Description */}
            <div className="mt-4 md:mt-8 space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#19191B]">
                Our products
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-[#19191B] max-w-[1000px] mx-auto">
                OROX is a seamless investment app offering low-risk growth and
                crypto exposure with reduced volatility. Connect effortlessly to
                ODN and the DVOX token—all in one app.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Background */}
      <div className="w-full bg-[#070926] h-32 sm:h-[40vh] md:h-[80vh]" />

      {/* Hero Image Container - Positioned to overlap both sections */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 w-[90%] max-w-[365px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] rounded-[32px]">
        <div className="relative w-full aspect-[1.75/1]">
          <Image
            src="/images/products/hero.png"
            alt="OROX Products"
            fill
            className="object-cover rounded-[24px] md:rounded-[32px]"
            priority
            quality={100}
          />

          {/* Pause Button */}
          <button
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                     bg-white rounded-full flex items-center justify-center shadow-lg 
                     hover:bg-gray-100 transition-colors"
            aria-label="Pause video"
          >
            <div className="flex items-center justify-center">
              <div className="w-1 sm:w-1.5 h-3 sm:h-4 bg-[#19191B] rounded-sm mr-[3px]" />
              <div className="w-1 sm:w-1.5 h-3 sm:h-4 bg-[#19191B] rounded-sm" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
