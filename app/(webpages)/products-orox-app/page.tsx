import { ProductOroxFeatures } from "@/app/components/ProductOrox/ProductOroxFeatures";
import ProductOroxHero from "@/app/components/ProductOrox/ProductOroxHero";
import { ProductOroxKeyFeatures } from "@/app/components/ProductOrox/ProductOroxKeyFeatures";
import { TestimonialSection } from "@/app/components/Testimonials/TestimonialSection";
import Service from "@/app/components/Service/Service";
import { Steps } from "@/app/components/Steps/Steps";

export default function ProductsOroxApp() {
  return (
    <div>
      <ProductOroxHero />
      <ProductOroxFeatures />
      <ProductOroxKeyFeatures />
      <Steps />
      <TestimonialSection />
      <Service />
    </div>
  );
}
