import Image from "next/image";
import { Button } from "../ui/Button";
import Link from "next/link";

const features = [
  {
    icon: "/icons/dvox-features/diverse-distribution.svg",
    title: "Diverse distribution",
    description:
      "Optimised to capture 'alpha' via multi-strategies across digital markets.",
  },
  {
    icon: "/icons/dvox-features/auto-balanced.svg",
    title: "Auto-balanced",
    description:
      "Designed to support portfolio consistency by aiming to reduce volatility.",
  },
  {
    icon: "/icons/dvox-features/staking-rewards.svg",
    title: "Staking rewards",
    description: "Hold DVOX to earn and unlock exclusive benefits.",
  },
  {
    icon: "/icons/dvox-features/blockchain.svg",
    title: "Blockchain transparency",
    description: "Secure transactions with full on-chain transparency.",
  },
  {
    icon: "/icons/dvox-features/activity-history.svg",
    title: "Performance potential",
    description:
      "Designed to capitalise on volatility and maximise growth over time.",
  },
];

export const ProductDVOXFeatures = ({
  title,
  description,
  cta,
  path,
}: {
  title: string;
  description: string;
  cta?: string;
  path?: string;
}) => {
  return (
    <section className="w-full bg-black text-white px-[16px] py-[44px] md:px-[80px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div>
          {/* Header */}
          <div className="mx-auto space-y-8 text-center">
            <h2 className="text-[34px] font-bold md:text-[56px] leading-[40px] md:leading-[68px]">
              {title}
            </h2>
            <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-white/80">
              {description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-[48px] mt-[40px] md:mt-[48px]">
            <div className="grid gap-[24px] grid-cols-1 sm:grid-cols-3">
              {features.slice(0, 3).map((feature) => (
                <div
                  key={feature.title}
                  className="group text-center rounded-2xl"
                >
                  <div className="mx-auto relative h-[104px] w-[104px]">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain transition-transform duration-300"
                      quality={100}
                    />
                  </div>
                  <div className="mt-[24px]">
                    <h3 className="text-[26px] font-bold leading-[32px] md:leading-[40px] text-white">
                      {feature.title}
                    </h3>
                    <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-white mt-[8px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-[24px] grid-cols-1 sm:grid-cols-2 max-w-[800px] mx-auto">
              {features.slice(3).map((feature) => (
                <div
                  key={feature.title}
                  className="group text-center rounded-2xl"
                >
                  <div className="mx-auto relative h-[104px] w-[104px]">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain transition-transform duration-300"
                      quality={100}
                    />
                  </div>
                  <div className="mt-[24px]">
                    <h3 className="text-[26px] font-bold leading-[32px] md:leading-[40px] text-white">
                      {feature.title}
                    </h3>
                    <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-white mt-[8px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          {cta && path && (
            <div className="text-center mt-[40px]">
              <Link href={path} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  className="text-[16px] md:text-[20px] font-bold w-full md:w-auto h-[48px] md:h-[64px] px-[32px]"
                >
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
