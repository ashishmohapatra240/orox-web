import AboutHero from "@/app/components/About/AboutHero";
import { MissionSection } from "@/app/components/About/MissionSection";
import { OpusMomentus } from "@/app/components/About/OpusMomentus";
import { ProductsSection } from "@/app/components/About/ProductsSection";
import { ValuesSection } from "@/app/components/About/ValuesSection";

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutHero />
      <MissionSection />
      <OpusMomentus />
      <ProductsSection />
      <ValuesSection />
    </div>
  );
}
