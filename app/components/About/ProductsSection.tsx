"use client";
import Image from "next/image";
import Link from "next/link";

const DVOXChart = () => (
  <div className="relative">
    <Image
      src="/images/products/img_dvox_token_banner.png"
      alt="DVOX Token Banner"
      width={600}
      height={400}
      className="object-cover rounded-[32px] w-full h-full"
      priority
    />
    <Image
      src="/images/products/Bull.png"
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

const products = [
  {
    title: "OROX app",
    image: "/images/products/orox-app.png",
    bgColor: "bg-[#293483]",
    description:
      "OROX is your AI-powered investment platform, offering secure, automated investing. Get steady growth with ODN or crypto exposure with DVOX—all in one place.",
    path: "/products-orox-app",
  },
  {
    title: "Opus Diversified Nexus",
    image: "/images/products/img_odn_invest_banner.png",
    bgColor: "bg-[#4A90E2]",
    description:
      "ODN offers risk-adjusted, hands-off investing with a 90-day cycle and market-neutral strategies for long-term stability—no wild swings, no constant monitoring.",
    path: "products-odn",
  },
  {
    title: "DVOX utility token",
    image: <DVOXChart />,
    bgColor: "bg-[#FFD700]",
    description:
      "DVOX offers high-growth potential with less volatility. It gives you auto-balanced exposure to premium digital assets—no stress, just smarter investing.",
    path: "products-dvox",
  },
];

export const ProductsSection = () => {
  return (
    <section className="w-full px-[16px] md:px-[24px] lg:px-[32px] py-[48px] md:py-[88px] overflow-x-hidden">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-[34px] font-bold text-[#19191B] md:text-[48px] lg:text-[56px] leading-[40px] md:leading-[56px] lg:leading-[68px] w-[340px] md:w-[600px] lg:w-[800px] mx-auto mb-[40px] md:mb-[48px]">
          Discover OROX and the powerful products driving it
        </h2>

        {/* Desktop and Tablet Grid */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.title}>
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-[32px] ${product.bgColor}`}
              >
                {typeof product.image === "string" ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover hover:scale-105 transition-all duration-300"
                  />
                ) : (
                  product.image
                )}
              </div>
              <div className="mt-[30px]">
                <h3 className="text-[28px] font-bold text-[#19191B] leading-[40px]">
                  {product.title}
                </h3>
                <p className="text-[20px] text-[#19191B] leading-[32px] mt-[11px]">
                  {product.description}
                </p>

                <Link
                  href={product.path}
                  className="inline-flex items-center text-[#2F5DFD] font-bold hover:underline mt-[18px]"
                >
                  Learn more
                  <Image
                    className="ml-2 h-4 w-4"
                    src={"/icons/arrow.svg"}
                    alt={"Arrow"}
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout - Updated to show cards in a column */}
        <div className="md:hidden flex flex-col space-y-8">
          {products.map((product) => (
            <div key={product.title} className="w-full">
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-[32px] ${product.bgColor}`}
              >
                {typeof product.image === "string" ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover hover:scale-105 transition-all duration-300"
                  />
                ) : (
                  product.image
                )}
              </div>
              <div className="mt-[30px]">
                <h3 className="text-[28px] font-bold text-[#19191B] leading-[40px]">
                  {product.title}
                </h3>
                <p className="text-[20px] text-[#19191B] leading-[32px] mt-[11px]">
                  {product.description}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center text-[#2F5DFD] font-bold hover:underline mt-[18px]"
                >
                  Learn more
                  <Image
                    className="ml-2 h-4 w-4"
                    src={"/icons/arrow.svg"}
                    alt={"Arrow"}
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
