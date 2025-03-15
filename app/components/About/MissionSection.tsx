import Link from "next/link";

export const MissionSection = () => {
  return (
    <section className="w-full bg-[#F1F2F8] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <span className="text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699] text-center mb-4">
            OROX IS PART OF SOMETHING BIG
          </span>
          <h2 className="text-[40px] font-bold text-[#19191B] md:text-5xl md::text-[56px]">
            OROX is powered by
            <br />
            Opus Momentus
          </h2>
          <div className="space-y-4">
            <p className="text-[20px] text-[#19191B] leading-relaxed">
              <Link
                href={"https://www.opusmomentus.com/"}
                className="text-[#2F5DFD] underline"
              >
                Opus Momentus{" "}
              </Link>
              makes advanced investing accessible with cutting-edge technology
              and market-neutral strategies. Powered by Opus Momentus, OROX
              offers a seamless platform for smarter investing. Together,
              they’re shaping the future of finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
