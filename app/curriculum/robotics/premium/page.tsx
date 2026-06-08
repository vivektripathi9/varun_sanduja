import { RoboticsCurriculum } from "@/components/curriculum/RoboticsCurriculum";

export const metadata = {
  title: "STEM Robotics Premium Plan | STEMORBIT",
  description: "A 20-module 1-on-1 mentorship journey transforming screen time into creation time for 8-15 year olds.",
};

export default function PremiumRoboticsCurriculumPage() {
  return <RoboticsCurriculum planType="premium" />;
}
