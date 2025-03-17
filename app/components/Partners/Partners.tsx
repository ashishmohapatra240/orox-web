import Image from "next/image";

const stats = [
  {
    value: "$12B+",
    label: "Combined AUM",
  },
  {
    value: "25%+",
    label: "Average annual return*",
  },
  {
    value: "5⭐",
    label: "High-rated app",
  },
  {
    value: "125+",
    label: "Hedge funds, quant devs",
  },
];

const partners = [
  {
    name: "Binance",
    logo: "/images/partners/binance.png",
  },
  {
    name: "Trading Technologies",
    logo: "/images/partners/trading-tech.png",
  },
  {
    name: "Ethereum",
    logo: "/images/partners/eth.png",
  },
];

export const Partners = () => {
  return (
    <section className="w-full bg-[#070926] px-4 py-12 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex flex-col items-center lg:flex-row lg:items-center gap-6">
            <h3 className="text-center text-[14px] text-white max-w-[150px] lg:text-left">
              Global partners working with OROX
            </h3>
            <div className="relative flex items-center justify-center lg:justify-start gap-10 overflow-hidden">
              <div className="flex gap-4">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="relative h-8 w-32 lg:h-[104px] lg:w-[160px]"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain opacity-80 transition-opacity hover:opacity-100"
                    />
                  </div>
                ))}
              </div>

              <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#070926] to-transparent" />
              <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#070926] to-transparent lg:hidden" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <div className="text-3xl font-bold text-white lg:text-[40px] lg:leading-[48px]">
                  {stat.value}
                </div>
                <p className="text-base text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
