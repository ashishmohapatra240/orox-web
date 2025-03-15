import Image from "next/image";
export const ProductFeatures = () => {
  const features = [
    {
      icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/smart-investing.png",
      title: "Easy, smart investing",
      description:
        "Smarter investing made easy with AI and our sleek OROX app.",
    },
    {
      icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/growth.png",
      title: "Stress-free growth",
      description:
        "Stress-free gains with our proven market-neutral strategies.",
    },
    {
      icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/secure.png",
      title: "Secure and transparent",
      description: "Secure and transparent with blockchain-backed tech.",
    },
    {
      icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/trust.png",
      title: "Built with trust",
      description:
        "Aussie-built, trusted and accessible to investors worldwide.",
    },
  ];
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-bold text-[#19191B]">
            Investing with our products is effortless
          </h2>
          <p className="mt-4 text-[16px] md:text-[20px] text-[#19191B]">
            Explore a powerful range of services—from steady low-risk investing
            with ODN to high-growth crypto exposure with DVOX. No guesswork, no
            stress—just smarter strategies designed for long-term success.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="group space-y-4 text-center">
              <div className="mx-auto relative h-24 w-24">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-[20px] font-bold text-[#19191B]">
                  {feature.title}
                </h3>
                <p className="text-[#19191B] text-[16px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
