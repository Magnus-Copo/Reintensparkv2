import Link from "next/link";

import { coursePreview } from "@/data/content";
import { NeonButton } from "@/components/ui/NeonButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CoursesTeaserSection() {
  return (
    <section className="mt-20 rounded-[36px] border border-white/10 bg-slate-950/80 p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <SectionHeading
          kicker="EdTech"
          title="Courses engineered with real labs"
          description="Live project-based cohorts informed by the Reinternspark hardware and AI stacks."
        />
        <NeonButton href="/courses" className="self-center lg:self-start">
          View Courses
        </NeonButton>
      </div>
      <div className="mt-10 grid gap-6 min-[520px]:grid-cols-2 lg:grid-cols-3">
        {coursePreview.map((course) => (
          <article
            key={course.title}
            className="rounded-[28px] border border-white/10 bg-card/60 p-6 text-center lg:text-left"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-primary">
              {course.duration}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              {course.title}
            </h3>
            <p className="mt-3 text-sm text-white/70">{course.focus}</p>
            <Link
              href="/courses"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary mx-auto lg:mx-0"
            >
              View Details →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
