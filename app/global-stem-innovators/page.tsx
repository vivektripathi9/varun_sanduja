import { GlobalStemHero } from "@/components/GlobalStemHero";
import { NriParentsConcerns } from "@/components/NriParentsConcerns";
import { ProgramJourneySection } from "@/components/ProgramJourneySection";
import { CurriculumOverview } from "@/components/CurriculumOverview";

export const metadata = {
  title: "Global STEM Innovators Program | STEMORBIT",
  description: "Join the elite Global STEM Innovators Program. Master AI, IoT, and global problem-solving.",
};

export default function GlobalStemInnovatorsPage({
  searchParams,
}: {
  searchParams?: { plan?: string };
}) {
  const planType = searchParams?.plan === "premium" ? "premium" : "standard";

  return (
    <main>
      <GlobalStemHero />
      <NriParentsConcerns />
      <ProgramJourneySection />
      
      <CurriculumOverview />
    </main>
  );
}
