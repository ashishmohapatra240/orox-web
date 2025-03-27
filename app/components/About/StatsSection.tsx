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
    <section className="w-full bg-[#DDF2ED] px-4 md:px-12 lg:px-20 py-12 md:py-16 lg:py-22">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-[48px] md:gap-[30px] lg:gap-[60px] xl:gap-[98px]">
          {/* Title Section */}
          <div className="w-full md:w-[280px] lg:w-[320px] xl:w-[500px] flex items-center">
            <h2 className="text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-bold text-[#19191B] leading-[32px] md:leading-[36px] lg:leading-[38px] xl:leading-[40px] w-[350px] md:w-[280px] lg:w-[320px] xl:w-[500px]">
              Numbers that power OROX. Proven strategies, trusted partners and
              real growth.
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="w-full md:w-[380px] lg:w-[520px] xl:w-[1000px]">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-[24px] gap-y-[24px] md:gap-x-[12px] lg:gap-x-[8px] xl:gap-x-[16px]">
              {stats.map((stat) => (
                <div
                  key={stat.number}
                  className="flex flex-col w-[160px] md:w-[170px] lg:w-[120px] xl:w-[180px]"
                >
                  <div className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-bold text-[#19191B] leading-[40px] md:leading-[44px] lg:leading-[48px] xl:leading-[60px]">
                    {stat.number}
                  </div>
                  <p className="text-[16px] md:text-[14px] lg:text-[13px] xl:text-[14px] text-[#19191B] leading-[24px] md:leading-[20px] lg:leading-[18px] xl:leading-[20px] mt-[8px]">
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
