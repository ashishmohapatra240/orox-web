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
    <section className="w-full bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-[#19191B] md:text-[56px]">
              Meet the{" "}
              <span className="relative z-0">
                <span className="absolute left-0 top-[35%] z-0 h-[80%] w-full rounded-lg bg-[#BBE5DC]"></span>
                <span className="relative z-10">minds</span>
              </span>{" "}
              behind OROX
            </h2>
            <p className="mt-4 text-[16px] md:text-[20px] text-[#19191B]">
              OROX is built by a team of finance, AI and blockchain experts who
              believe that smart investing should be effortless. Backed by Opus
              Momentus, our team is focused on building the future of wealth
              management through automation, innovation and security.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Top row - 2 members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-3xl mx-auto">
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
                  <h3 className="mt-4 text-2xl font-bold text-[#19191B]">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
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
                  <h3 className="mt-4 text-[20px] md:text-[28px] font-bold text-[#19191B]">
                    {member.name}
                  </h3>
                  <p className="text-[#19191B] text-[16px] md:text-[20px]">
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
