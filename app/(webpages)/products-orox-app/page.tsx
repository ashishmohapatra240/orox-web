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
      <Service
        tag="READY TO INVEST SMARTER?"
        description="Join OROX and access AI-powered, risk-aware strategies—built to cut through the noise and focus on long-term performance."
      />
    </div>
  );
}
