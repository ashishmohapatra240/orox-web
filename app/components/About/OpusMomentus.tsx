import Link from "next/link";

export const OpusMomentus = () => {
  return (
    <section className="w-full bg-[#F1F2F8] px-[16px] py-[48px] md:px-[288px] md:py-[88px]">
      <div>
        <div className="text-center">
          <span className="text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699] text-center">
            OROX IS PART OF SOMETHING BIG
          </span>
          <h2 className="text-[34px] font-bold text-[#19191B] md:text-[56px] leading-[40px] md:leading-[68px] mt-[8px]">
            OROX is powered by
            <br />
            Opus Momentus
          </h2>
          <p className="text-[20px] text-[#19191B] leading-[32px] mt-[24px]">
            <Link
              href={"https://www.opusmomentus.com/"}
              className="text-[#2F5DFD] underline"
            >
              Opus Momentus{" "}
            </Link>
            makes advanced investing accessible with cutting-edge technology and
            market-neutral strategies. Powered by Opus Momentus, OROX offers a
            seamless platform for smarter investing. Together, they’re shaping
            the future of finance.
          </p>
        </div>
      </div>
    </section>
  );
};
