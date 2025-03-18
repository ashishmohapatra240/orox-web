import Image from "next/image";
import Marquee from "react-fast-marquee";

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
    value: "5⭐ App",
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
    <section className="w-full bg-[#070926] px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-20">
          <div className="flex flex-col items-center lg:flex-row lg:items-center">
            <h3 className="text-center text-[16px] md:text-[14px] text-white md:max-w-[200px] md:text-left">
              Global partners working with OROX
            </h3>
            <div className="relative w-full lg:w-[300px]">
              <Marquee
                gradient
                gradientColor={"#070926"}
                gradientWidth={48}
                speed={40}
              >
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="relative h-[104px] w-[160px] lg:h-[104px] lg:w-[160px]"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain opacity-80 transition-opacity hover:opacity-100"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <div className="text-[28px] font-bold text-white">
                  {stat.value}
                </div>
                <p className="text-[16px] text-white/70 max-w-[140px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
