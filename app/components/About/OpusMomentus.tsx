import Link from "next/link";

export const OpusMomentus = () => {
  return (
    <section className="w-full bg-gray-50 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <span className="text-sm font-medium text-blue-600">
            OROX IS PART OF SOMETHING BIG
          </span>
          <h2 className="text-4xl font-bold text-[#19191B] md:text-5xl lg:text-6xl">
            OROX is powered by
            <br />
            Opus Momentus
          </h2>
          <p className="text-lg text-gray-600">
            <Link href="#" className="text-blue-600 hover:underline">
              Opus Momentus
            </Link>{" "}
            makes advanced investing accessible with cutting-edge technology and
            market-neutral strategies. Powered by Opus Momentus, OROX offers a
            seamless platform for smarter investing. Together, they&apos;re
            shaping the future of finance.
          </p>
        </div>
      </div>
    </section>
  );
}; 