import Image from "next/image";

const values = [
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/values/transparency.svg",
    title: "Transparency",
    description:
      "No hidden fees, no complicated jargon—just clear, honest investing with visibility.",
  },
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/values/accountability.svg",
    title: "Accountability",
    description:
      "We take responsibility for every decision, ensuring trust and reliability in all we do.",
  },
  {
    icon: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/values/challenge.svg",
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
            <h2 className="text-4xl font-bold text-[#19191B] md:text-5xl">
              The values that drive{" "}
              <span className="relative">
                <span className="absolute left-0 top-[35%] -z-10 h-[60%] w-full rounded-lg bg-blue-100"></span>
                OROX
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Built on trust, driven by responsibility.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                  <Image
                    src={value.icon}
                    alt={`${value.title} Icon`}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#19191B]">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 