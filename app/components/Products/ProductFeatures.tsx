import { Features } from "../Features/Features";

export const ProductFeatures = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-bold text-[#19191B]">
            Investing with our products is effortless
          </h2>
          <p className="mt-4 text-[16px] md:text-[20px] text-[#19191B]">
            Explore a powerful range of services—from steady low-risk investing
            with ODN to high-growth crypto exposure with DVOX. No guesswork, no
            stress—just smarter strategies designed for long-term success.
          </p>
        </div>
        <Features />
      </div>
    </section>
  );
};
