import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const defaultFeatures: Feature[] = [
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/smart-investing.svg",
    title: "Easy, smart investing",
    description: "Smarter investing made easy with AI and our sleek OROX app.",
  },
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/growth.svg",
    title: "Stress-free growth",
    description: "Stress-free gains with our proven market-neutral strategies.",
  },
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/secure.svg",
    title: "Secure and transparent",
    description: "Secure and transparent with blockchain-backed tech.",
  },
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/trust.svg",
    title: "Built with trust",
    description: "Aussie-built, trusted and accessible to investors worldwide.",
  },
];

export const Features = ({
  title,
  description,
  cta,
  path,
  features = defaultFeatures,
}: {
  title: string | React.ReactNode;
  description: string;
  cta?: string;
  path?: string;
  features?: Feature[];
}) => {
  return (
    <section className="w-full bg-white px-[16px] py-[44px] md:px-[80px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div>
          {/* Header */}
          <div className="mx-auto space-y-8 text-center">
            <h2 className="mx-auto text-[34px] font-bold text-[#19191B] md:text-[56px] leading-[40px] md:leading-[68px]">
              {title}
            </h2>
            <p className="text-[16px] text-[#19191B] md:text-[20px] leading-[24px] md:leading-[32px]">
              {description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-[40px] md:mt-[48px]">
            {features.map((feature) => (
              <div key={feature.title} className="group space-y-6 text-center">
                <div className="mx-auto relative h-24 w-24">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain transition-transform duration-300"
                    quality={100}
                  />
                </div>
                <div className="space-y-[8px]">
                  <h3 className="text-[20px] font-bold text-[#19191B] leading-[24px] md:leading-[32px]">
                    {feature.title}
                  </h3>
                  <p className="text-[#19191B] text-[16px] leading-[24px] md:leading-[32px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          {cta && path && (
            <div className="text-center mt-[40px]">
              <Link href={path}>
                <Button className="text-[16px] md:text-[20px] font-bold w-full md:w-auto h-[48px] md:h-[64px] px-[32px]">
                  {cta}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
