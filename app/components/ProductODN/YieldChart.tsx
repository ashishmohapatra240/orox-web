"use client";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

interface YieldData {
  startDate: {
    _seconds: number;
    _nanoseconds: number;
  };
  endDate?: {
    _seconds: number;
    _nanoseconds: number;
  };
  yield: number;
}

export const YieldChart = () => {
  const [data, setData] = useState<YieldData[]>([]);
  const [currentYield, setCurrentYield] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://australia-southeast1-orox-plus.cloudfunctions.net/getChartData",
          {
            headers: {
              "x-api-key": "5C2a0vU7dWQxJpEzK",
            },
          }
        );
        const result = await response.json();
        setData(result.data);
        setCurrentYield(result.data[result.data.length - 1]?.yield || null);
      } catch (error) {
        console.error("Error fetching yield data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (seconds: number) => {
    const date = new Date(seconds * 1000);
    return `${date.getDate()} ${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;
  };

  const chartData = data.map((item) => ({
    date: formatDate(item.startDate._seconds),
    yield: item.yield,
  }));

  if (isLoading) {
    return (
      <div
        className="w-full h-auto bg-white p-[16px] md:p-[32px] rounded-[32px] border border-[#E5E5E5] shadow-[0px_2px_8px_0px_#00000026] flex items-center justify-center"
        style={{ minHeight: "360px" }}
      >
        <div className="w-8 h-8 border-4 border-[#78CAB9] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-auto bg-white p-6 rounded-[32px] border border-[#E5E5E5] shadow-[0px_2px_8px_0px_#00000026]">
      <div>
        <h2 className="text-[16px] md:text-[28px] font-bold text-[#19191B] leading-[20px] md:leading-[40px]">
          Current yield: {currentYield?.toFixed(1)}% p.a.
        </h2>
        {data.length > 0 && (
          <div className="text-[12px] md:text-[16px] text-[#19191B] mt-1 leading-[16px] md:leading-[28px]">
            {formatDate(data[0].startDate._seconds)} -{" "}
            {formatDate(data[data.length - 1].startDate._seconds)}
          </div>
        )}
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 2, right: 0, left: 0, bottom: 2 }}
            barGap={0}
          >
            <XAxis
              dataKey="date"
              tick={false}
              axisLine={{ strokeDasharray: "5 5", stroke: "#E5E5E5" }}
              tickLine={false}
            />
            <YAxis
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              axisLine={false}
              tickLine={false}
              orientation="right"
              tick={{
                fill: "#19191B",
                fontSize: window.innerWidth < 768 ? 8 : 12,
                dx: 10,
              }}
              tickFormatter={(value) => `${value}%`}
            />
            <Bar
              dataKey="yield"
              fill="#78CAB9"
              radius={[4, 4, 4, 4]}
              maxBarSize={8}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
