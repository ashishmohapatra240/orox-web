import Image from "next/image";
import Link from "next/link";

const products = [
  {
    tag: "ODN: SET AND LET GROW",
    title: (
      <>
        <span className="relative inline-block">
          <span className="absolute left-0 top-[35%] -z-10 h-[60%] w-full bg-[#ADE0EE] rounded-[8px]"></span>
          ODN
        </span>{" "}
        is your shortcut to stable investment
      </>
    ),
    description: (
      <>
        Want steady returns without the stress?{" "}
        <span className="font-medium">Opus Diversified Nexus (ODN)</span> focuses
        on risk-adjusted, hands-off investing with a 90-day cycle and
        market-neutral strategies designed for long-term stability. No wild swings
        <sup>2</sup>, no constant monitoring—just smart, steady returns while you
        go about your life.
      </>
    ),
    image: "/images/products/odn-chart.png",
    imageAlt: "ODN Investment Chart",
    bgColor: "bg-[#293483]",
  },
  {
    tag: "DVOX: SUPERCHARGE YOUR INVESTMENT",
    title: (
      <>
        <span className="relative inline-block">
          <span className="absolute left-0 top-[35%] -z-10 h-[60%] w-full bg-[#FFD600] rounded-[8px]"></span>
          DVOX
        </span>{" "}
        lets you HODL with confidence
      </>
    ),
    description:
      "Love crypto but hate the rollercoaster? DVOX gives you high-growth potential without the crazy ups and downs³. Powered by the OROX app and using the DVOX token, it's designed to help you grow your portfolio with more confidence. Forget diamond hands—DVOX offers exposure to a professionally managed, auto-balanced portfolio of high-grade digital assets, designed for high-growth without the hassle.",
    image: "/images/products/dvox-token.png",
    imageAlt: "DVOX Token Illustration",
    bgColor: "bg-[#FFD700]",
  },
];

export const Products = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 sm:space-y-16 lg:space-y-24">
        {products.map((product, index) => (
          <div
            key={index}
            className="grid items-center gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2"
          >
            {/* Content */}
            <div className={`space-y-4 sm:space-y-5 lg:space-y-6 ${
              index % 2 === 1 ? "lg:order-2" : ""
            }`}>
              <span className="text-xs sm:text-sm font-medium text-blue-600">
                {product.tag}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#19191B]">
                {product.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                {product.description}
              </p>
              <div>
                <Link
                  href="#"
                  className="inline-flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-[#293483] text-white transition-transform hover:scale-110"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-square w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[600px] mx-auto">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                className="object-contain p-4 sm:p-6 lg:p-12"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 