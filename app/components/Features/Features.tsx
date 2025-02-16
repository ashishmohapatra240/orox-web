import Image from "next/image";
import { Button } from "../ui/Button";

const features = [
  {
    icon: "/images/features/smart-investing.png",
    title: "Easy, smart investing",
    description: "Smarter investing made easy with AI and our sleek OROX app.",
  },
  {
    icon: "/images/features/growth.png",
    title: "Stress-free growth",
    description: "Stress-free gains with our proven market-neutral strategies.",
  },
  {
    icon: "/images/features/secure.png",
    title: "Secure and transparent",
    description: "Secure and transparent with blockchain-backed tech.",
  },
  {
      icon: "/images/features/trust.png",
    title: "Built with trust",
    description: "Aussie-built, trusted and accessible to investors worldwide.",
  },
];

export const Features = () => {
  return (
    <section className="w-full bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-16">
          {/* Header */}
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-4xl font-bold text-[#19191B] md:text-5xl">
              With OROX there&apos;s no guesswork, just gains
            </h2>
            <p className="text-lg text-gray-600">
              Skip the FOMO and stress—AI-powered quantitative investing with
              expert strategies from top minds in the industry.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="group space-y-4 text-center">
                <div className="mx-auto relative h-16 w-16">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#19191B]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button>Create an account</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
