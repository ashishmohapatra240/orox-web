import Image from "next/image";

const upcomingProducts = [
  {
    title: "Get great value with quick conversion through our swap function",
    description:
      "Easily swap between assets within the OROX app. No extra steps, no hidden fees—just effortless conversions at your fingertips.",
    image: "/images/products/asset-swap.png",
  },
  {
    title:
      "Cards for every type of credit builder and investor in your digital wallet",
    description:
      "Use your investments in the real world with an OROX debit card. Make purchases or withdraw cash—all while keeping your portfolio growing.",
    image: "/images/products/spend-gains.png",
  },
];

export const UpcomingProducts = () => {
  return (
    <section className="w-full bg-[#070926] px-[16px] py-[44px] md:px-[60px] md:py-[64px] lg:px-[80px] lg:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-[40px] md:mb-[60px] lg:mb-[80px]">
          <h2 className="text-[34px] md:text-[56px] font-bold text-white leading-[48px] md:leading-[68px]">
            New products coming soon to OROX
          </h2>
          <p className="mt-4 text-[16px] md:text-[20px] text-white leading-[24px] md:leading-[32px]">
            We’re making investing even smarter with new features and products
            designed for flexibility, security and ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8">
          {upcomingProducts.map((product, index) => (
            <div key={index} className="bg-[#ffffff] rounded-[24px]">
              <div className="relative aspect-[1] md:aspect-[3/2] lg:aspect-[2/1] w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-t-[24px]"
                  quality={100}
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#FFDE82] rounded-[4px]">
                  <span className="text-[12px] font-semibold text-[#1F2461]">
                    COMING SOON
                  </span>
                </div>
              </div>
              <h3 className="text-[20px] md:text-[28px] font-bold text-[#293483] px-6 md:px-4 lg:px-6 leading-[32px] md:leading-[40px] mt-[24px]">
                {product.title}
              </h3>
              <p className="text-[16px] md:text-[20px] text-[#19191B] px-6 md:px-4 lg:px-6 pb-6 leading-[24px] md:leading-[32px] mt-[8px]">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
