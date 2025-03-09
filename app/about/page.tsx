import { OpusMomentus } from "../components/About/OpusMomentus";
import { ProductsSection } from "../components/About/ProductsSection";
import { ValuesSection } from "../components/About/ValuesSection";
import { MissionSection } from "../components/About/MissionSection";
import AboutHero from "../components/About/AboutHero";

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
