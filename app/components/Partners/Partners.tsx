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
    <section className="w-full bg-[#0A0B1E] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Partners List */}
          <div className="flex items-center gap-8 md:gap-8">
            <h3 className="text-sm font-medium text-white/60 w-[100px]">
              Global partners working with OROX
            </h3>
            <div className="flex items-center gap-8 md:gap-12">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="relative h-36 w-36 opacity-80 transition-opacity hover:opacity-100"
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
          <div className="flex items-center gap-8 md:gap-12 mt-8 md:mt-0">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white md:text-3xl whitespace-nowrap">
                  {stat.value}
                </div>
                <p className="text-sm text-white/60 whitespace-nowrap mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
