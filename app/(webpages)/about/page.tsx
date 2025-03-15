import AboutHero from "@/app/components/About/AboutHero";
import { OpusMomentus } from "@/app/components/About/OpusMomentus";
import { ProductsSection } from "@/app/components/About/ProductsSection";
import { ValuesSection } from "@/app/components/About/ValuesSection";

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutHero />
      <OpusMomentus />
      <ProductsSection />
      <ValuesSection />
    </div>
  );
}
