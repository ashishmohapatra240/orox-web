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
    logo: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/partners/binance.png",
  },
  {
    name: "Trading Technologies",
    logo: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/partners/trading-tech.png",
  },
  {
    name: "Ethereum",
    logo: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/partners/eth.png",
  },
];

export const Partners = () => {
  return (
    <section className="w-full bg-[#0A0B1E] px-4 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          {/* Partners List */}
          <div className="flex flex-col space-y-6 lg:max-w-[50%]">
            <h3 className="text-sm font-medium text-white/60 lg:min-w-[180px]">
              Global partners working with OROX
            </h3>
            <div className="flex flex-wrap gap-8 lg:gap-12">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 opacity-80 transition-opacity hover:opacity-100"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-8 lg:mt-0 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
