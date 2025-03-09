import ProductsHero from "../components/Products/ProductsHero";
import { ProductsShowcase } from "../components/Products/ProductsShowcase";
import { UpcomingProducts } from "../components/Products/UpcomingProducts";
import { InvestingEffortless } from "../components/Products/InvestingEffortless";
import { ReadyToInvest } from "../components/Products/ReadyToInvest";

export default function ProductsPage() {
  return (
    <div className="w-full">
      <ProductsHero />
      <ProductsShowcase />
      <UpcomingProducts />
      <InvestingEffortless />
      <ReadyToInvest />
    </div>
  );
} 