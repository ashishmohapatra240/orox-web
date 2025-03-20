import Image from "next/image";

const values = [
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/transparency.png",
    title: "Transparency",
    description:
      "No hidden fees, no complicated jargon—just clear, honest investing with visibility.",
  },
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/accountability.png",
    title: "Accountability",
    description:
      "We take responsibility for every decision, ensuring trust and reliability in all we do.",
  },
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/features/challenge.png",
    title: "Challenge the status quo",
    description:
      "Embracing innovation to create smarter, more secure investment solutions.",
  },
];

export const ValuesSection = () => {
  return (
    <section className="w-full bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold text-[#19191B] md:text-5xl z-0">
              The values that drive{" "}
              <span className="relative z-0">
                <span className="absolute left-0 top-[35%] z-0 h-[80%] w-full rounded-lg bg-[#7878FA]/30"></span>
                <span className="relative z-10">OROX</span>
              </span>{" "}
            </h2>
            <p className="text-[20px] text-[#19191B] leading-[32px]">
              Built on trust, driven by responsibility.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto relative h-24 w-24">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="mb-2 text-[20px] md:text-[28px] font-bold text-[#19191B] mt-[24px] leading-[40px]">
                  {value.title}
                </h3>
                <p className="text-[#19191B] text-[16px] md:text-[20px] leading-[32px] mt-[8px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
