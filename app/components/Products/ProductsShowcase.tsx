import { Products } from "./Products";

export const ProductsShowcase = () => {
  return (
    <section className="w-full bg-white px-[16px] py-[44px] md:px-[80px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-[34px] md:text-[56px] font-bold text-[#19191B] leading-[40px] md:leading-[68px] max-w-[320px] md:max-w-[800px] mx-auto mb-[40px] md:mb-[88px]">
            Discover OROX and the powerful products driving it
          </h2>
        </div>
        <Products />
      </div>
    </section>
  );
};
