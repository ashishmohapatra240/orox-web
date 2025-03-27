import Image from "next/image";

const team = [
  {
    name: "Daniel Mo",
    role: "Chief Executive Officer & Founder",
    image: "/images/team/daniel-mo.png",
  },
  {
    name: "Daniel Ord",
    role: "Co-founder",
    image: "/images/team/daniel-ord.png",
  },
  {
    name: "Kim Dao",
    role: "Partner",
    image: "/images/team/kim-dao.png",
  },
  {
    name: "Barabasi Zoltan",
    role: "Lead Engineer",
    image: "/images/team/barabasi-zoltan.png",
  },
  // {
  //   name: "Agam Lamba",
  //   role: "Head of Digital & CX",
  //   image: "/images/team/agam-lamba.png",
  // },
];

export const TeamSection = () => {
  return (
    <section className="w-full bg-white px-[16px] py-[48px] md:px-[120px] lg:px-[280px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-[34px] font-bold text-[#19191B] md:text-[48px] lg:text-[56px] leading-[40px] md:leading-[56px] lg:leading-[68px]">
              Meet the{" "}
              <span className="relative">
                <span className="absolute left-0 top-[35%] -z-1 h-[80%] w-full rounded-lg bg-[#BBE5DC] leading-[40px] md:leading-[56px] lg:leading-[68px]"></span>
                <span className="relative z-1">minds</span>
              </span>{" "}
              behind OROX
            </h2>
            <p className="mt-[32px] text-[16px] md:text-[18px] lg:text-[20px] text-[#19191B] leading-[24px] md:leading-[28px] lg:leading-[32px]">
              OROX is built by a team of finance, AI and blockchain experts who
              believe that smart investing should be effortless. Backed by Opus
              Momentus, our team is focused on building the future of wealth
              management through automation, innovation and security.
            </p>
          </div>

          <div className="grid gap-[48px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[32px] lg:gap-[48px] justify-items-center max-w-4xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative h-40 w-40 md:h-44 md:w-44 lg:h-48 lg:w-48 mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full filter grayscale hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <h3 className="mt-[24px] text-[20px] md:text-[24px] lg:text-[28px] font-bold text-[#19191B] leading-[32px] md:leading-[36px] lg:leading-[40px]">
                    {member.name}
                  </h3>
                  <p className="text-[#19191B] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[28px] lg:leading-[32px] mt-[8px]">
                    {member.role}
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
