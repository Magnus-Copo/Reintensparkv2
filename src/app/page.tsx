import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { VisionMissionSection } from "@/components/sections/VisionMission";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { MilestonesSection } from "@/components/sections/MilestonesSection";
import { CoursesTeaserSection } from "@/components/sections/CoursesTeaserSection";

export default function Home() {
  return (
    <div className="space-y-12 lg:space-y-16">
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <WhyChooseSection />
      <MilestonesSection />
      <CoursesTeaserSection />
    </div>
  );
}
