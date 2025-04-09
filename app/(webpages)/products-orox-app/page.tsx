import { ProductOroxFeatures } from "@/app/components/ProductOrox/ProductOroxFeatures";
import ProductOroxHero from "@/app/components/ProductOrox/ProductOroxHero";
import { ProductOroxKeyFeatures } from "@/app/components/ProductOrox/ProductOroxKeyFeatures";
import Service from "@/app/components/Service/Service";
import { Steps } from "@/app/components/Steps/Steps";

export default function ProductsOroxApp() {
  return (
    <div>
      <ProductOroxHero />
      <ProductOroxFeatures />
      <ProductOroxKeyFeatures />
      <Steps />
      <Service />
    </div>
  );
}
