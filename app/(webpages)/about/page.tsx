import AboutHero from "@/app/components/About/AboutHero";
import { MissionSection } from "@/app/components/About/MissionSection";
import { ProductsSection } from "@/app/components/About/ProductsSection";
import { ValuesSection } from "@/app/components/About/ValuesSection";

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutHero />
      <MissionSection />
      <ProductsSection />
      <ValuesSection />
    </div>
  );
}
