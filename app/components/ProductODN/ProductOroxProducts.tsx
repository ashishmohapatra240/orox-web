"use client";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { YieldChart } from "./YieldChart";

const products: {
  tag: string;
  title: JSX.Element;
  description: string | JSX.Element;
  image: string | JSX.Element;
  imageAlt: string;
  link: string;
}[] = [
  {
    tag: "OUR PRODUCTS",
    title: (
      <>
        <span className="relative inline-block z-10">
          <span className="absolute left-0 top-[35%] -z-10 h-[80%] w-full bg-[#BBE5DC] rounded-[4px]"></span>
          OROX
        </span>{" "}
        and a range of powerful products
      </>
    ),
    description: (
      <>
        OROX is a seamless investment product offering low-risk growth and
        crypto exposure with reduced volatility. Connect effortlessly to ODN and
        the DVOX token—all in one app.
      </>
    ),
    image: <YieldChart />,
    imageAlt: "ODN Investment Chart",
    link: "/products-odn",
  },
];

export const ProductOroxProducts = () => {
  return (
    <section className="w-full bg-white px-[16px] py-[44px] md:px-[80px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        {/* Products */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-44">
          {products.map((product, index) => (
            <div
              key={index}
              className="grid items-center gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2"
            >
              {/* Content section */}
              <div
                className={`flex flex-col justify-center ${
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
                    href={product.link}
                    className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#293483] text-white transition-transform hover:scale-110"
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

              {/* Chart section */}
              <div
                className={`flex items-center justify-center w-full max-w-[400px] sm:max-w-[400px] lg:max-w-[600px] ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                } lg:mx-auto`}
              >
                <div className="relative aspect-[4/3] w-full flex items-center justify-center overflow-hidden rounded-[32px]">
                  {typeof product.image === "string" ? (
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      width={800}
                      height={600}
                      className="object-contain w-full h-full"
                      priority
                    />
                  ) : (
                    product.image
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
