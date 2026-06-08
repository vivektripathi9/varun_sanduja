import { RoboticsCurriculum } from "@/components/curriculum/RoboticsCurriculum";

export const metadata = {
  title: "STEM Robotics Standard Plan | STEMORBIT",
  description: "A 20-module journey transforming screen time into creation time for 8-15 year olds.",
};

export default function StandardRoboticsCurriculumPage() {
  return <RoboticsCurriculum planType="standard" />;
}
