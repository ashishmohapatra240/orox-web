import Image from "next/image";
import { Button } from "../ui/Button";

const features = [
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/smart-investing.png",
    title: "Easy, smart investing",
    description: "Smarter investing made easy with AI and our sleek OROX app.",
  },
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/growth.png",
    title: "Stress-free growth",
    description: "Stress-free gains with our proven market-neutral strategies.",
  },
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/secure.png",
    title: "Secure and transparent",
    description: "Secure and transparent with blockchain-backed tech.",
  },
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/trust.png",
    title: "Built with trust",
    description: "Aussie-built, trusted and accessible to investors worldwide.",
  },
];

export const Features = ({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta?: string;
}) => {
  return (
    <section className="w-full bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-20">
          {/* Header */}
          <div className="mx-auto space-y-8 text-center">
            <h2 className="text-4xl font-bold text-[#19191B] md:text-[56px]">
              {title}
            </h2>
            <p className="text-lg text-gray-600 text-[20px]">{description}</p>
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

          {/* CTA Button */}
          {cta && (
            <div className="text-center">
              <Button className="py-4 text-[20px] font-bold">{cta}</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
