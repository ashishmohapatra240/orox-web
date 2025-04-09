import { InvestingSection } from "@/app/components/About/InvestingSection";
import { ProductODNCalculator } from "@/app/components/ProductODN/ProductODNCalculator";
import { ProductODNFeatures } from "@/app/components/ProductODN/ProductODNFeatures";
import ProductOdnHero from "@/app/components/ProductODN/ProductODNHero";

export default function ProductsOdn() {
  return (
    <div>
      <ProductOdnHero />
      <ProductODNFeatures />
      <ProductODNCalculator />
      <InvestingSection />
    </div>
  );
}
