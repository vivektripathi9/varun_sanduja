import { ScreenToCreatorHero } from "@/components/ScreenToCreatorHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ProgramJourneySection } from "@/components/ProgramJourneySection";
import { ProgramPlansSection } from "@/components/ProgramPlansSection";
import { StemKitTrackingSection } from "@/components/StemKitTrackingSection";

export default function ScreenToCreatorPage() {
  return (
    <main>
      <ScreenToCreatorHero />
      <BenefitsSection />
      <ProgramJourneySection />
      <ProgramPlansSection />
      <StemKitTrackingSection />
    </main>
  );
}
