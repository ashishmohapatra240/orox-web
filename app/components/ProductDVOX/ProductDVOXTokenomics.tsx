"use client";
// import { PieChart, Pie, Cell } from "recharts";
import { Button } from "../ui/Button";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const tokenDistributionData = [
  { name: "Strategies funding reserve", value: 25, color: "#6366F1" },
  { name: "Founders and team", value: 12.5, color: "#FFD600" },
  { name: "Community building and airdrop", value: 7.5, color: "#93C5FD" },
  { name: "Advisors, legal and PR", value: 5, color: "#4ADE80" },
  { name: "Token sale investors", value: 50, color: "#7878FA" },
];

const useOfProceedsData = [
  { name: "I.T., Research & Development", value: 8, color: "#ADE0EE" },
  { name: "Operational Expense", value: 7, color: "#FC7E24" },
  { name: "Marketing & Growth", value: 5, color: "#80DC50" },
  { name: "Strategies Funding Reserve", value: 80, color: "#FFD600" },
];

export const ProductDVOXTokenomics = () => {
  const [activeTab, setActiveTab] = React.useState<"distribution" | "proceeds">(
    "distribution"
  );

  // const useWidth = () => {
  //   const [width, setWidth] = React.useState(320);

  //   React.useEffect(() => {
  //     const handleResize = () => {
  //       const chartContainer = document.getElementById("pie-chart-container");

  //       if (chartContainer) {
  //         const containerWidth = chartContainer.offsetWidth;
  //         setWidth(Math.min(containerWidth, 400)); // Max width of 400px
  //       }
  //     };

  //     handleResize(); // Initial size
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  //   return width;
  // };

  // const chartWidth = useWidth();

  const chartData =
    activeTab === "distribution" ? tokenDistributionData : useOfProceedsData;

  return (
    <section className="w-full bg-black text-white px-4 py-11 md:px-[80px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-[48px]">
          <div className="text-[#B89C49] text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-amber-300  to-yellow-600">
            BUILT FOR GROWTH & STABILITY
          </div>
          <h2 className="text-[34px] font-bold md:text-[64px] leading-[40px] md:leading-[80px]">
            DVOX tokenomics
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex p-[1px] rounded-full bg-gradient-to-b from-[#F9DF7B] via-[#B57E10] to-[#F9DF7B] mb-[32px]">
            <div className="flex bg-black rounded-full">
              <button
                onClick={() => setActiveTab("distribution")}
                className={`text-[14px] md:text-[16px] px-[24px] py-[16px] rounded-full ${
                  activeTab === "distribution"
                    ? "bg-[#ffffff1a] text-white"
                    : "text-white/60"
                } font-semibold whitespace-nowrap leading-[20px] md:leading-[28px]`}
              >
                Token distribution
              </button>
              <button
                onClick={() => setActiveTab("proceeds")}
                className={`text-[14px] md:text-[16px] px-[24px] py-[16px] rounded-full ${
                  activeTab === "proceeds"
                    ? "bg-[#ffffff1a] text-white"
                    : "text-white/60"
                } font-semibold whitespace-nowrap leading-[20px] md:leading-[28px]`}
              >
                Use of proceeds
              </button>
            </div>
          </div>

          <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-center max-w-[1040px] mb-[40px]">
            {activeTab === "distribution"
              ? "The DVOX token puts you in control of crypto without the chaos. Engineered for long-term potential and built to ride smarter, not wilder, DVOX gives you access to a professionally managed, auto-balanced ecosystem that thrives on volatility—not fear. It's designed for sustainability, backed by blockchain and focused on delivering powerful outcomes with real transparency and liquidity."
              : "From the Community to the Community."}
          </p>

          <div
            className="relative w-full max-w-[800px] mb-10 mx-auto"
            id="pie-chart-container"
          >
            <div className="w-full flex items-center justify-center">
              <Image
                src={
                  activeTab === "distribution"
                    ? "/images/dvox/token-distribution.png"
                    : "/images/dvox/use-of-proceeds.png"
                }
                alt={
                  activeTab === "distribution"
                    ? "Token Distribution"
                    : "Use of Proceeds"
                }
                className="hidden md:block w-full object-contain"
                width={1000}
                height={1000}
              />
              <Image
                src={
                  activeTab === "distribution"
                    ? "/images/dvox/token-distribution-mobile.png"
                    : "/images/dvox/use-of-proceeds-mobile.png"
                }
                alt={
                  activeTab === "distribution"
                    ? "Token Distribution"
                    : "Use of Proceeds"
                }
                className="block md:hidden w-[288px] object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] w-full max-w-[800px] mb-[32px] px-4 lg:hidden">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-start gap-[8px]">
                <div
                  className="w-[16px] h-[8px] rounded-[2px] mt-[6px]"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex flex-col">
                  <span className="font-bold text-[16px] leading-[28px]">
                    {item.value}%
                  </span>
                  <span className="text-white/60 text-[12px] leading-[16px]">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center px-4">
            <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] mb-[40px] w-[320px] md:w-[640px]">
              Want to learn more? Read the DVOX whitepaper for full details on
              tokenomics, strategy and future growth.
            </p>
            <Link href="https://dvox.gitbook.io/dvox" target="_blank" rel="noopener noreferrer">
            <Button
              variant="secondary"
              className="h-[48px] md:h-[64px] px-[32px] text-[16px] md:text-[20px] w-full md:w-auto"
            >
                Download white paper
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
