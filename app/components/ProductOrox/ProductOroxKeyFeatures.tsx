"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";

type FeatureTab = {
  id: string;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  bulletPoints: string[];
  image: string;
  icon: string;
  iconFilled: string;
};

const features: FeatureTab[] = [
  {
    id: "accounts",
    title: "TRACK YOUR INVESTMENT FEED",
    subtitle: "Secure and seamless",
    heading: "Secure and seamless",
    description:
      "Easily create and manage your OROX account with built-in security and compliance. Get started in minutes and track your investments in real time.",
    bulletPoints: [
      "Create your account and verify instantly.",
      "Advanced encryption keeps your data safe.",
      "Manage crypto and fiat seamlessly.",
    ],
    image: "/images/products/orox/accounts.png",
    icon: "/icons/key-features/Home.svg",
    iconFilled: "/icons/key-features/HomeFilled.svg",
  },
  {
    id: "portfolio",
    title: "ACCESS GROWTH THROUGH GOALS",
    subtitle: "Full control with real insights",
    heading: "Full control with real insights",
    description:
      "Stay on top of your investments with a clear, real-time view of your OROX portfolio.",
    bulletPoints: [
      "View your holdings, returns and trends.",
      "AI-powered for smarter, informed decisions.",
      "Adjust allocations for optimal growth.",
    ],
    image: "/images/products/orox/portfolio.png",
    icon: "/icons/key-features/Chart.svg",
    iconFilled: "/icons/key-features/ChartFilled.svg",
  },
  {
    id: "invest",
    title: "MARKET-NEUTRAL APPROACH",
    subtitle: "Choose your investment strategy",
    heading: "Choose your investment strategy",
    description:
      "Invest in ODN for steady growth or DVOX for high-growth crypto exposure—all in just a few taps.",
    bulletPoints: [
      "Market-neutral investing with ODN and DVOX.",
      "Tap into ODN for consistent, stable yields.",
      "Buy DVOX tokens for high-growth potential.",
    ],
    image: "/images/products/orox/invest.png",
    icon: "/icons/key-features/DollarSquare.svg",
    iconFilled: "/icons/key-features/DollarSquareFilled.svg",
  },
  {
    id: "swap",
    title: "INTEGRATED AND SEAMLESS",
    subtitle: "Exchange between currencies and tokens",
    heading: "Exchange between currencies and tokens",
    description:
      "Soon you will be able to swap between assets effortlessly, all within the OROX app.",
    bulletPoints: [
      "Move between crypto and fiat seamlessly.",
      "Enjoy fast swaps with transparent pricing.",
      "No extra steps, just simple swaps.",
    ],
    image: "/images/products/orox/swap.png",
    icon: "/icons/key-features/Swap.svg",
    iconFilled: "/icons/key-features/SwapFilled.svg",
  },
  {
    id: "more",
    title: "DISCOVER MORE",
    subtitle: "Stay ahead of the curve with OROX",
    heading: "Stay ahead of the curve with OROX",
    description:
      "The OROX app keeps evolving with new features and improvements.",
    bulletPoints: [
      "The OROX debit card will be available soon.",
      "OROX+ members unlock perks and premium services.",
      "Get support; our team is always here to help.",
    ],
    image: "/images/products/orox/more.png",
    icon: "/icons/key-features/Category.svg",
    iconFilled: "/icons/key-features/CategoryFilled.svg",
  },
];

export const ProductOroxKeyFeatures = () => {
  const [activeTab, setActiveTab] = useState("accounts");
  const [isPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);
  const lastUpdateTimeRef = useRef<number | null>(null);

  const STEP_DURATION = 7000; // 7 seconds per step

  const activeFeature = features.find((feature) => feature.id === activeTab);

  useEffect(() => {
    startProgressAnimation();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [activeTab, isPaused]);

  const startProgressAnimation = () => {
    if (isPaused) return;

    setProgress(0);
    lastUpdateTimeRef.current = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - (lastUpdateTimeRef.current || now);
      lastUpdateTimeRef.current = now;

      setProgress((prev) => {
        const newProgress = prev + (elapsed / STEP_DURATION) * 100;

        if (newProgress >= 100) {
          goToNextStep();
          return 0;
        }

        return newProgress;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const goToNextStep = () => {
    const currentIndex = features.findIndex((f) => f.id === activeTab);
    const nextIndex = (currentIndex + 1) % features.length;
    setActiveTab(features[nextIndex].id);
  };

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    resetAnimation();
  };

  const resetAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setProgress(0);
    startProgressAnimation();
  };

  const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="w-full px-[16px] md:px-[24px] lg:px-[32px] py-[48px] md:pt-[88px] md:pb-[176px] overflow-x-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[34px] md:text-[48px] lg:text-[56px] font-bold mb-6 leading-[40px] md:leading-[56px] lg:leading-[68px]">
            Key features of the OROX app
          </h2>
          <p className="text-[16px] md:text-[20px] text-[#19191B] max-w-[1040px] mx-auto leading-[28px] md:leading-[32px]">
            Whether you&apos;re looking for steady, low-risk returns with ODN or
            crypto exposure with DVOX, the OROX app makes investing
            effortless—all in one sleek, easy-to-use platform. Explore some of
            the key features of the app below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-[88px]">
          <div className="w-full lg:w-[200px] mb-8 lg:mb-0">
            <div
              className="flex gap-4 lg:gap-6 justify-start overflow-x-auto lg:overflow-visible -mx-4 px-4"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>{" "}
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => handleTabClick(feature.id)}
                  className={`md:flex-1 lg:w-full px-[8px] py-[12px] lg:py-[16px] flex items-center gap-3 transition-all relative
                    ${
                      activeTab === feature.id
                        ? "text-[#293483]"
                        : "text-[#19191B]/50"
                    }`}
                >
                  <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6">
                    <Image
                      src={
                        activeTab === feature.id
                          ? feature.iconFilled
                          : feature.icon
                      }
                      alt={feature.id}
                      width={20}
                      height={20}
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </div>
                  <span className="text-[14px] md:text-[16px] lg:text-[20px] leading-[20px] lg:leading-[32px] font-bold">
                    {feature.id.charAt(0).toUpperCase() + feature.id.slice(1)}
                  </span>
                  {activeTab === feature.id && !isPaused && (
                    <span
                      className="absolute bottom-0 left-0 h-[2px] bg-emerald-300"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Updated content layout for tablet */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-[88px]">
            <AnimatePresence mode="wait">
              {activeFeature && (
                <motion.div
                  key={`image-${activeFeature.id}`}
                  {...fadeAnimation}
                  className="relative w-full md:w-[280px] lg:w-[393px] h-[600px] md:h-[700px] lg:h-[802px] mx-auto"
                >
                  <Image
                    src={activeFeature.image}
                    alt={activeFeature.heading}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {activeFeature && (
                <motion.div
                  key={`content-${activeFeature.id}`}
                  {...fadeAnimation}
                  className="flex-1 py-[40px] md:py-[60px] lg:py-[88px]"
                >
                  <div className="mb-6 md:mb-8 lg:mb-10">
                    <span className="text-[14px] md:text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699] mb-[8px] block">
                      {activeFeature.title}
                    </span>
                    <h3 className="text-[28px] md:text-[34px] lg:text-[48px] font-bold mb-4 md:mb-6 leading-[34px] md:leading-[60px]">
                      {activeFeature.heading}
                    </h3>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#19191B] leading-[24px] md:leading-[28px] lg:leading-[32px]">
                      {activeFeature.description}
                    </p>
                  </div>

                  <div className="space-y-[12px] md:space-y-[14px] lg:space-y-[16px] mb-[32px] md:mb-[36px] lg:mb-[40px]">
                    {activeFeature.bulletPoints.map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-[12px] md:gap-[14px] lg:gap-[16px]"
                      >
                        <div className="w-5 h-5 md:w-6 md:h-6">
                          <Image
                            src="/icons/check.svg"
                            alt="check"
                            width={24}
                            height={24}
                          />
                        </div>
                        <span className="text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[28px] lg:leading-[32px]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="primary"
                    className="w-full md:w-auto px-[24px] md:px-[28px] lg:px-[32px] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[28px] lg:leading-[32px] h-[48px] md:h-[56px] lg:h-[64px]"
                  >
                    Download the app
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
