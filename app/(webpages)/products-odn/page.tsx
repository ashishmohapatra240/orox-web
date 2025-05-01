// import { ProductODNCalculator } from "@/app/components/ProductODN/ProductODNCalculator";
import { ProductODNFeatures } from "@/app/components/ProductODN/ProductODNFeatures";
import ProductOdnHero from "@/app/components/ProductODN/ProductODNHero";
import { ProductOroxProducts } from "@/app/components/ProductODN/ProductOroxProducts";
import { ProductODNVideo } from "@/app/components/ProductODN/ProductsODNVideo";
import Service from "@/app/components/Service/Service";
export default function ProductsOdn() {
  return (
    <div>
      <ProductOdnHero />
      <ProductODNFeatures />
      {/* <ProductODNCalculator /> */}
      <ProductODNVideo />
      <ProductOroxProducts />
      <Service
        tag={"LOOKING FOR RELIABLE, RISK-ADJUSTED RETURNS?"}
        description={
          "ODN’s market-neutral strategy helps you grow with confidence. No wild swings, no stress."
        }
      />
    </div>
  );
}
