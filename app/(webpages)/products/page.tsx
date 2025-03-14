import ProductsHero from "../../components/Products/ProductsHero";
import { ProductsShowcase } from "../../components/Products/ProductsShowcase";
import { UpcomingProducts } from "../../components/Products/UpcomingProducts";

export default function ProductsPage() {
  return (
    <div className="w-full">
      <ProductsHero />
      <ProductsShowcase />
      <UpcomingProducts />
    </div>
  );
}
