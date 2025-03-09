import Image from "next/image";

const ProductsHero = () => {
  return (
    <section className="relative w-full bg-[#293483] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <span className="text-sm font-medium text-white/80">
            OROX HAS A VARIETY OF FINANCIAL PRODUCTS
          </span>
          <h1 className="text-4xl font-bold text-white md:text-5xl mt-2">
            Our products
          </h1>
        </div>
        
        <div className="text-center mx-auto max-w-3xl mb-12">
          <p className="text-lg text-white/80">
            OROX is a seamless investment app offering over 100 growth and crypto exposure units you can easily buy, hold, and sell. Every product is built from scratch—and you win.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-xl overflow-hidden">
          <Image
            src="/images/products/wave-track.jpg"
            alt="OROX product visualization with curved track and coins"
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
    </section>
  );
};

export default ProductsHero; 