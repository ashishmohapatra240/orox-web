import Image from "next/image";

const upcomingProducts = [
  {
    title: "Fast, secure and frictionless asset swap",
    description:
      "Easily swap between assets within the OROX app. No extra steps, no hidden fees—just effortless conversions at your fingertips.",
    image: "/images/products/asset-swap.png",
  },
  {
    title: "Spend your gains with the OROX card",
    description:
      "Use your investments in the real world with an OROX debit card. Make purchases or withdraw cash—all while keeping your portfolio growing.",
    image: "/images/products/orox-card.png",
  },
];

export const UpcomingProducts = () => {
  return (
    <section className="w-full bg-[#070926] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-bold text-white">
            New products coming soon to OROX
          </h2>
          <p className="mt-4 text-[16px] md:text-[20px] text-white">
            We&apos;re making investing even simpler with new features and
            products designed for flexibility, security and ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingProducts.map((product, index) => (
            <div
              key={index}
              className="bg-[#19191B]/10 rounded-2xl p-6 space-y-4"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#FFD700] rounded-full">
                  <span className="text-sm font-medium">Coming soon</span>
                </div>
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-white">
                {product.title}
              </h3>
              <p className="text-[16px] text-white/80">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
