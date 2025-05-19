import Image from "next/image";
import { Button } from "../ui/Button";
import Link from "next/link";

export const ReadyToInvest = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#293483] to-[#5B42F3] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to invest smarter? OROX uses AI-powered quantitative,
              risk-adjusted strategies designed for growth.
            </h2>
            <Button className="bg-white text-[#293483] hover:bg-white/90">
              <Link href="https://orox-plus.web.app/" target="_blank" rel="noopener noreferrer"> Get started with OROX</Link>
            </Button>
          </div>

          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/images/products/orox-app-screens.png"
              alt="OROX app screens showing investment dashboard"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
