import { ProductDVOXFeatures } from "@/app/components/ProductDVOX/ProductDVOXFeatures";
import { ProductDVOXHero } from "@/app/components/ProductDVOX/ProductDVOXHero";
import { ProductDVOXTokenomics } from "@/app/components/ProductDVOX/ProductDVOXTokenomics";
import { ProductDVOXProducts } from "@/app/components/ProductDVOX/ProductDVOXProducts";
import { ProductDVOXCTA } from "@/app/components/ProductDVOX/ProductDVOXCTA";

export default function ProductsDVOX() {
  return (
    <div className="bg-black">
      <ProductDVOXHero />
      <ProductDVOXFeatures
        title="DVOX lets you HODL with confidence"
        description="DVOX gives you expertly curated strategies that’s engineered for resilience, built to chase long-term potential, and backed by a professionally managed digital asset portfolio. All powered by one smart utility token."
        cta="Get started with DVOX"
        path="https://orox-plus.web.app/"
      />
      <ProductDVOXTokenomics />
      <ProductDVOXProducts />
      <ProductDVOXCTA />
    </div>
  );
}
