import Image from "next/image";
import Link from "next/link";

const products = [
  {
    tag: "OROX: THE APP TO DO IT ALL",
    title: (
      <>
        <span className="relative inline-block z-0">
          <span className="absolute left-0 top-[35%] -z-10 h-[80%] w-full bg-[#7878FA]/40 rounded-[8px]"></span>
          OROX app
        </span>{" "}
        invest on autopilot
      </>
    ),
    description:
      "OROX is your all-in-one investment app and platform, blending AI-powered quantitative strategies, blockchain security and seamless automation. Whether you’re after steady, low-risk growth or crypto exposure with less volatility, OROX makes investing effortless. Easily connect with ODN, and the new OROX token—all in one place.",
    image: "/images/products/orox-app.png",
    imageAlt: "ODN",
    bgColor: "#ADE0EE",
  },
  {
    tag: "ODN: SET AND LET GROW",
    title: (
      <>
        <span className="relative inline-block z-0">
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
        <span className="relative inline-block z-0">
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

export const Products = () => {
  return (
    <section className="w-full py-[44px] md:py-[88px]">
      <div className="mx-auto max-w-7xl space-y-[40px] md:space-y-[88px]">
        {products.map((product, index) => (
          <div
            key={index}
            className="grid items-center gap-[40px] lg:grid-cols-2"
          >
            {/* Content */}
            <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <span className="text-[14px] md:text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699]">
                {product.tag}
              </span>
              <h2 className="text-[34px] md:text-[56px] font-bold text-[#19191B] leading-[48px] md:leading-[68px] mt-[8px]">
                {product.title}
              </h2>
              <p className="text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px] mt-[24px] mb-[40px]">
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

            {/* Image */}
            <div className="relative aspect-square w-full max-w-[320px] md:max-w-[400px] lg:max-w-[600px]">
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={800}
                height={600}
                className="object-contain"
                priority
                quality={100}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
