import Link from "next/link";

export const OpusMomentus = () => {
  return (
    <section className="w-full bg-[#F1F2F8] px-[16px] py-[48px] md:px-[64px] lg:px-[120px] md:py-[72px] lg:py-[88px]">
      <div>
        <div className="text-center">
          <span className="text-[14px] md:text-[16px]  font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699] text-center">
            OROX IS PART OF SOMETHING BIG
          </span>
          <h2 className="text-[34px] font-bold text-[#19191B] md:text-[48px] lg:text-[56px] leading-[40px] md:leading-[56px] lg:leading-[68px] mt-[8px]">
            OROX is powered by
            <br />
            Opus Momentus
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#19191B] leading-[24px] md:leading-[28px] lg:leading-[32px] mt-[24px]">
            <Link
              href={"https://www.opusmomentus.com/"}
              className="text-[#2F5DFD] underline"
            >
              Opus Momentus
            </Link>
            {" "}makes advanced investing accessible through cutting-edge quant
            technology and market-neutral strategies. Built on this foundation,
            OROX delivers a seamless platform for smarter, automated investing.
            Together, they’re shaping the future of accessible, data-driven
            finance.
          </p>
        </div>
      </div>
    </section>
  );
};
