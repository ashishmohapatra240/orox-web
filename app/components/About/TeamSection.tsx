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
    name: "Andrew Mo",
    role: "Head of Product & Operations",
    image: "/images/team/andrew-mo.png",
  },
  {
    name: "Barabasi Zoltan",
    role: "Lead Engineer",
    image: "/images/team/barabasi-zoltan.png",
  },
  {
    name: "Agam Lamba",
    role: "Head of Digital & CX",
    image: "/images/team/agam-lamba.png",
  },
];

export const TeamSection = () => {
  return (
    <section className="w-full bg-white px-[16px] py-[48px] md:px-[280px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-[34px] font-bold text-[#19191B] md:text-[56px] leading-[40px] md:leading-[68px]">
              Meet the{" "}
              <span className="relative">
                <span className="absolute left-0 top-[35%] -z-1 h-[80%] w-full rounded-lg bg-[#BBE5DC] leading-[40px] md:leading-[68px]"></span>
                <span className="relative z-1">minds</span>
              </span>{" "}
              behind OROX
            </h2>
            <p className="mt-[32px] text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px]">
              OROX is built by a team of finance, AI and blockchain experts who
              believe that smart investing should be effortless. Backed by Opus
              Momentus, our team is focused on building the future of wealth
              management through automation, innovation and security.
            </p>
          </div>

          <div className="grid gap-[48px]">
            {/* Top row - 2 members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] justify-items-center max-w-3xl mx-auto">
              {team.slice(0, 2).map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative h-48 w-48 mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full filter grayscale"
                    />
                  </div>
                  <h3 className="mt-[24px] text-[20px] md:text-[28px] font-bold text-[#19191B] leading-[32px] md:leading-[40px]">
                    {member.name}
                  </h3>
                  <p className="text-[#19191B] text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] mt-[8px]">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {team.slice(2).map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative h-48 w-48 mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full filter grayscale"
                    />
                  </div>
                  <h3 className="mt-[24px] text-[20px] md:text-[28px] font-bold text-[#19191B]">
                    {member.name}
                  </h3>
                  <p className="text-[#19191B] text-[16px] md:text-[20px] leading-[32px] mt-[8px]">
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
