import type { Metadata } from "next";

import { PageHero } from "@/components/ui/PageHero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects | Reinternspark",
  description:
    "Explore Reinternspark's complete project catalog across drones, IOT, hardware, AI, fabrication, PCB design, robotics and web platforms.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16 lg:space-y-20">
      <PageHero
        kicker="Projects"
        title="Where Ideas Become Working Technology."
        description="Our projects are designed to bridge the gap between theory and real-world application. We offer hands-on experience through carefully structured hardware and IOT projects that reflect real industry use cases and engineering challenges."
        highlight="Hardware • Software • AI"
      >
        <p className="text-sm text-white/70">
          Each engagement ships with documentation, mentorship and deployment-ready assets tailored to your evaluation rubric.
        </p>
      </PageHero>

      <ProjectsSection />
    </div>
  );
}
