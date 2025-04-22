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
        description="DVOX delivers expertly curated strategies, built for resilience and growth, through a strategically managed portfolio of premium digital assets, all in one token."
      />
      <ProductDVOXTokenomics />
      <ProductDVOXProducts />
      <ProductDVOXCTA />
    </div>
  );
}
