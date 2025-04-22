"use client";
import { PieChart, Pie, Cell } from "recharts";
import { Button } from "../ui/Button";

const tokenDistributionData = [
  { name: "Token sale investors", value: 50, color: "#6366F1" },
  { name: "Strategies funding reserve", value: 25, color: "#FFD600" },
  { name: "Founders and team", value: 12.5, color: "#93C5FD" },
  { name: "Community building and airdrop", value: 7.5, color: "#4ADE80" },
  { name: "Advisors, legal and PR", value: 5, color: "#FB923C" },
];

export const ProductDVOXTokenomics = () => {
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
              <button className="px-[24px] py-[16px] rounded-full bg-[#ffffff1a] text-white font-semibold">
                Token distribution
              </button>
              <button className="px-[24px] py-[16px] rounded-full text-white/60 font-semibold">
                Use of proceeds
              </button>
            </div>
          </div>

          <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-center max-w-[1040px] mb-[48px]">
            The DVOX token powers a smarter way to invest in crypto, offering
            high-growth potential with less volatility. Designed for
            sustainability and long-term value, DVOX operates on a
            professionally managed, auto-balanced system, ensuring transparency,
            liquidity and targeting best risk-adjusted returns.
          </p>

          <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square mb-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[14px] text-white/60">Maximum supply</div>
                <div className="text-[40px] font-bold">10B</div>
              </div>
            </div>
            <div className="w-full h-full">
              <PieChart width={320} height={320}>
                <Pie
                  data={tokenDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius="35%"
                  outerRadius="40%"
                  paddingAngle={2}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {tokenDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <div className="absolute top-1/2 -translate-y-1/2 left-[calc(100%+20px)] hidden lg:flex flex-col gap-[16px]">
                {tokenDistributionData.map((item, index) => (
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px] w-full max-w-[800px] mb-[48px] px-4 lg:hidden">
            {tokenDistributionData.map((item, index) => (
              <div key={index} className="flex items-start gap-[8px]">
                <div
                  className="w-[8px] h-[8px] rounded-full mt-[6px]"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex flex-col">
                  <span className="font-bold">{item.value}%</span>
                  <span className="text-white/60 text-sm">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center px-4">
            <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] mb-[40px] max-w-[640px]">
              Want to learn more? Read the DVOX whitepaper for full details on
              tokenomics, strategy and future growth.
            </p>
            <Button
              variant="secondary"
              className="h-[48px] md:h-[64px] px-[32px] text-[16px] md:text-[20px]"
            >
              Download white paper
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
