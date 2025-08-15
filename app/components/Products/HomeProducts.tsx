"use client";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

// const ODNChart = () => (
//   <div className="relative">
//     <Image
//       src="/images/products/img_odn_graph_banner.png"
//       alt="ODN Investment Chart"
//       width={600}
//       height={400}
//       className="object-contain"
//       priority
//     />
//     <Image
//       src="/images/products/CoinFlip.png"
//       alt="Coin Flip"
//       width={60}
//       height={60}
//       className="absolute top-[35%] right-[7%] w-[10%] h-auto transition-transform duration-900 ease-in-out hover:scale-110 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)_scale(1.1)]"
//       onMouseEnter={(e) => {
//         const img = e.currentTarget as HTMLImageElement;
//         img.style.transform = "rotateY(180deg) scale(1.1)";
//       }}
//       onMouseLeave={(e) => {
//         const img = e.currentTarget as HTMLImageElement;
//         img.style.transform = "rotateY(0deg) scale(1)";
//       }}
//     />
//   </div>
// );

const DVOXChart = () => (
  <div className="relative">
    <Image
      src="/images/products/img_dvox_token_banner.png"
      alt="DVOX Token Banner"
      width={600}
      height={400}
      className="object-contain rounded-[16px] mt-2"
      priority
    />
    <Image
      src="/images/products/3D-Coin.png"
      alt="Bull Icon"
      width={180}
      height={180}
      className="absolute top-1/2 left-1/2 w-[30%] h-auto -translate-x-1/2 -translate-y-1/2 transition-all duration-400 ease-in-out"
      onMouseEnter={(e) => {
        const img = e.currentTarget as HTMLImageElement;
        img.style.filter = "brightness(1.2)";
        img.style.transform = "translate(-50%, -50%) scale(1.1)";
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget as HTMLImageElement;
        img.style.filter = "brightness(1)";
        img.style.transform = "translate(-50%, -50%) scale(1)";
      }}
    />
  </div>
);

const products: {
  tag: string;
  title: JSX.Element;
  description: string | JSX.Element;
  image: string | JSX.Element;
  imageAlt: string;
  bgColor: string;
  path?: string;
}[] = [
  {
    tag: "ODN: SET AND LET GROW",
    title: (
      <>
        <span className="relative inline-block z-10">
          <span className="absolute left-0 top-[35%] -z-10 h-[80%] w-full bg-[#ADE0EE] rounded-[4px]"></span>
          ODN
        </span>{" "}
        is your gateway to more stable investing
      </>
    ),
    description: (
      <>
        Want a hands-off strategy built for long-term consistency?{" "}
        <span className="font-bold">Opus Diversified Nexus (ODN)</span> applies
        market-neutral, 90-day cycles designed to target risk-adjusted returns
        with reduced volatility. No wild swings. No constant monitoring. Just
        disciplined strategies while you go about your life.
      </>
    ),
    image: "/images/products/img_odn_invest_banner.png",
    imageAlt: "ODN Investment Chart",
    bgColor: "bg-[#293483]",
    path: "/products-odn",
  },
  {
    tag: "DVOX: SUPERCHARGE YOUR INVESTMENT",
    title: (
      <>
        <span className="relative inline-block z-10">
          <span className="absolute left-0 top-[35%] -z-10 h-[80%] w-full bg-[#FFD600] rounded-[4px]"></span>
          DVOX
        </span>{" "}
        lets you HODL with confidence
      </>
    ),
    description:
      "Love crypto but hate the chaos? DVOX is your access token to a professionally managed, auto-balanced crypto ecosystem that’s built for long-term confidence, not just short-term hype. Stake DVOX in the OROX app to unlock benefits and gain exposure to a curated portfolio of high-grade digital assets, actively managed by experts. Forget diamond hands—this is strategy over stress.",
    image: <DVOXChart />,
    imageAlt: "DVOX Token Illustration",
    bgColor: "bg-[#FFD700]",
    path: "/products-dvox",
  },
];

export const HomeProducts = () => {
  return (
    <section className="w-full bg-white px-[16px] py-[44px] md:px-[80px] md:py-[88px]">
      <div className="mx-auto max-w-7xl space-y-8 sm:space-y-12 lg:space-y-44">
        {products.map((product, index) => (
          <div
            key={index}
            className="grid items-center gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2"
          >
            {/* Content */}
            <div
              className={`${
                index % 2 === 0 ? "lg:order-2 order-1" : "lg:order-1 order-2"
              }`}
            >
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
                  href={product.path || "#"}
                  className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#293483] hover:bg-[#212A69] text-white transform transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-[24px] h-[24px]"
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
            <div
              className={`relative w-full max-w-[400px] sm:max-w-[400px] lg:max-w-[600px] mx-auto ${
                index % 2 === 0 ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px]">
                {typeof product.image === "string" ? (
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    width={800}
                    height={600}
                    className="object-contain hover:scale-105 transition-all duration-300"
                    priority
                    quality={100}
                  />
                ) : (
                  product.image
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
