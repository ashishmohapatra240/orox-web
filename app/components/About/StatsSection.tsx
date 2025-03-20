const stats = [
  {
    number: "159+",
    description:
      "Curated quantitative strategies working together for smarter investing.",
  },
  {
    number: "125+",
    description:
      "Top hedge funds, quant developers and traders in our global and local consortium.",
  },
  {
    number: "$12B+",
    description:
      "Combined AUM of our operational partners across diverse asset classes.",
  },
  {
    number: "25%+",
    description:
      "Average annual return with OROX's advanced market-neutral strategies designed to grow*",
  },
];

export const StatsSection = () => {
  return (
    <section className="w-full bg-[#DDF2ED] px-4 md:px-20 py-12 md:py-22">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-[48px] md:gap-[98px]">
          {/* Title Section */}
          <div className="w-full md:w-[500px]">
            <h2 className="text-[20px] md:text-[28px] font-bold text-[#19191B] leading-[32px] md:leading-[40px] w-[380px] md:w-[500px]">
              Numbers that power OROX. Proven strategies, trusted partners and
              real growth.
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="w-full md:w-[1000px] ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {stats.map((stat) => (
                <div key={stat.number} className="flex flex-col w-[160px] md:w-[200px]">
                  <div className="text-[32px] md:text-[48px] font-bold text-[#19191B] leading-[40px] md:leading-[60px]">
                    {stat.number}
                  </div>
                  <p className="text-[16px] md:text-[14px] text-[#19191B] leading-[24px] md:leading-[20px] mt-[8px]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
