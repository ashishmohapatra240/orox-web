"use client";
import { PieChart, Pie, Cell } from "recharts";
import { Button } from "../ui/Button";
import React from "react";

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
  
  const useWidth = () => {
    const [width, setWidth] = React.useState(320);

    React.useEffect(() => {
      const handleResize = () => {
        const chartContainer = document.getElementById("pie-chart-container");

        if (chartContainer) {
          const containerWidth = chartContainer.offsetWidth;
          setWidth(Math.min(containerWidth, 400)); // Max width of 400px
        }
      };

      handleResize(); // Initial size
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  };

  const chartWidth = useWidth();

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

          <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-center max-w-[1040px] mb-[48px]">
            {activeTab === "distribution"
              ? "The DVOX token powers a smarter way to invest in crypto, offering high-growth potential with less volatility. Designed for sustainability and long-term value, DVOX operates on a professionally managed, auto-balanced system, ensuring transparency, liquidity and risk-adjusted returns."
              : "From the Community to the Community."}
          </p>

          <div
            className="relative w-full max-w-[400px] aspect-square mb-10 mx-auto"
            id="pie-chart-container"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[14px] text-white/60">
                  {activeTab === "distribution"
                    ? "Maximum supply"
                    : "Token sale funds"}
                </div>
                <div className="text-[40px] font-bold">
                  {activeTab === "distribution" ? "10B" : ""}
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <PieChart width={chartWidth} height={chartWidth}>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={chartWidth * 0.35}
                  outerRadius={chartWidth * 0.4}
                  paddingAngle={2}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <div className="absolute top-1/2 -translate-y-1/2 left-[calc(100%+20px)] hidden lg:flex flex-col gap-[16px]">
                {chartData.map((item, index) => (
                  <div key={index} className="flex items-center gap-[12px]">
                    <div
                      className="w-[8px] h-[8px] rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex flex-col">
                      <span className="font-bold">{item.value}%</span>
                      <span className="text-white/60 text-[12px] w-[176px]">
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
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
            <Button
              variant="secondary"
              className="h-[48px] md:h-[64px] px-[32px] text-[16px] md:text-[20px] w-full md:w-auto"
            >
              Download white paper
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
