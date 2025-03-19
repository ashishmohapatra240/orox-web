import Image from "next/image";
import Link from "next/link";

const products = [
  {
    tag: "ODN: SET AND LET GROW",
    title: (
      <>
        <span className="relative inline-block">
          <span className="absolute left-0 top-[35%] -z-10 h-[80%] w-full bg-[#ADE0EE] rounded-[8px]"></span>
          ODN
        </span>{" "}
        is your shortcut to stable investment
      </>
    ),
    description: (
      <>
        Want steady returns without the stress?{" "}
        <span className="font-bold">Opus Diversified Nexus (ODN)</span> focuses
        on risk-adjusted, hands-off investing with a 90-day cycle and
        market-neutral strategies designed for long-term stability. No wild
        swings
        <sup>2</sup>, no constant monitoring—just smart, steady returns while
        you go about your life.
      </>
    ),
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/products/odn-chart.png",
    imageAlt: "ODN Investment Chart",
    bgColor: "bg-[#293483]",
  },
  {
    tag: "DVOX: SUPERCHARGE YOUR INVESTMENT",
    title: (
      <>
        <span className="relative inline-block">
          <span className="absolute left-0 top-[35%] -z-10 h-[80%] w-full bg-[#FFD600] rounded-[8px]"></span>
          DVOX
        </span>{" "}
        lets you HODL with confidence
      </>
    ),
    description:
      "Love crypto but hate the rollercoaster? DVOX gives you high-growth potential without the crazy ups and downs³. Powered by the OROX app and using the DVOX token, it's designed to help you grow your portfolio with more confidence. Forget diamond hands—DVOX offers exposure to a professionally managed, auto-balanced portfolio of high-grade digital assets, designed for high-growth without the hassle.",
    image:
      "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/products/dvox-token.png",
    imageAlt: "DVOX Token Illustration",
    bgColor: "bg-[#FFD700]",
  },
];

export const HomeProducts = () => {
  return (
    <section className="w-full px-[16px] py-[48px] md:px-[80px] md:py-[88px]">
      <div className="mx-auto max-w-7xl space-y-[96px] md:space-y-[176px]">
        {products.map((product, index) => (
          <div
            key={index}
            className="grid items-center gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2"
          >
            <div className="relative aspect-square w-full h-auto md:max-w-[600px] mx-auto order-1 lg:order-none">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div
              className={`space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-none ${
                index % 2 === 0 ? "lg:order-2" : ""
              }`}
            >
              <span className="text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699]">
                {product.tag}
              </span>
              <h2 className="text-2xl sm:text-[56px] font-bold text-[#19191B] leading-[1.2]">
                {product.title}
              </h2>
              <p className="text-base sm:text-[20px] text-[#19191B] leading-[1.6]">
                {product.description}
              </p>
              <div>
                <Link
                  href="#"
                  className="inline-flex h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-[#293483] text-white transition-transform hover:scale-110"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 sm:w-6 sm:h-6"
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
          </div>
        ))}
      </div>
    </section>
  );
};
