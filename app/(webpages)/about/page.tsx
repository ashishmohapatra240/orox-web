import AboutHero from "@/app/components/About/AboutHero";
import { MissionSection } from "@/app/components/About/MissionSection";
import { OpusMomentus } from "@/app/components/About/OpusMomentus";
import { ProductsSection } from "@/app/components/About/ProductsSection";
import { StatsSection } from "@/app/components/About/StatsSection";
import { TeamSection } from "@/app/components/About/TeamSection";
import { ValuesSection } from "@/app/components/About/ValuesSection";
import { InvestingSection } from "@/app/components/About/InvestingSection";

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutHero />
      <OpusMomentus />
      <ProductsSection />
      <ValuesSection />
      <MissionSection />
      <TeamSection />
      <StatsSection />
      <InvestingSection />
    </div>
  );
}
