import { Products } from "./Products";

export const ProductsShowcase = () => {
  return (
    <section className="w-full bg-white pt-20 pb-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-[34px] md:text-[56px] font-bold text-[#19191B] leading-[40px] md:leading-[68px]">
            Discover OROX and the
            <br />
            powerful products driving it
          </h2>
        </div>
        <Products />
      </div>
    </section>
  );
};
