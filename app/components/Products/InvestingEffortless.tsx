import Image from "next/image";

const features = [
  {
    title: "Easy, smart investing",
    description: "Simple, automated investing that works on every device.",
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/icons/easy-investing.svg",
  },
  {
    title: "Stress-free growth",
    description: "Market-neutral strategies create reliable returns.",
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/icons/stress-free.svg",
  },
  {
    title: "Secure and transparent",
    description: "Know exactly what's happening with your money.",
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/icons/secure.svg",
  },
  {
    title: "Built with trust",
    description: "Institutional-grade security measures available.",
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/icons/trust.svg",
  },
];

export const InvestingEffortless = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-7xl space-y-12">
        <h2 className="text-center text-3xl font-bold text-[#19191B] md:text-4xl">
          Investing with our products is effortless
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Explore a powerful range of products—from steady, low-risk investing with ODN to high-growth crypto exposure with DVOX. No guesswork, no stress—just smart, managed strategies designed for long-term growth.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center space-y-4">
              <div className="relative h-16 w-16 mx-auto">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-[#19191B]">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 