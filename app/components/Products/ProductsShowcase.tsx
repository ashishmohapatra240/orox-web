import { Products } from "./Products";

export const ProductsShowcase = () => {
  return (
    <section className="w-full bg-white pt-20 pb-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-bold text-[#19191B] leading-[1.2]">
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
