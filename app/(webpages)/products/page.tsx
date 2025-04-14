import { ProductsHero } from "@/app/components/Products/ProductsHero";
import { ProductsShowcase } from "@/app/components/Products/ProductsShowcase";
import { UpcomingProducts } from "@/app/components/Products/UpcomingProducts";
import { ProductFeatures } from "@/app/components/Products/ProductFeatures";
import Service from "@/app/components/Service/Service";

export default function ProductsPage() {
  return (
    <div className="w-full">
      <ProductsHero />
      <ProductsShowcase />
      <UpcomingProducts />
      <ProductFeatures />
      <Service
        tag="READY TO INVEST SMARTER?"
        description="Join OROX and access AI-powered, risk-aware strategies—built to cut through the noise and focus on long-term performance."
      />
    </div>
  );
}
