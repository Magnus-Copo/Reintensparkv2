import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/ui/PageHero";
import { NeonButton } from "@/components/ui/NeonButton";
import { courses, getCourseBySlug } from "@/data/courses";

interface CourseDetailProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CourseDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    return {
      title: "Course not found",
    };
  }
  return {
    title: `${course.title} | Reinternspark EdTech`,
    description: course.summary,
  };
}

export default async function CourseDetailPage({ params }: Readonly<CourseDetailProps>) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    notFound();
  }

  const accordionItems = course.modules.map((module) => ({
    title: module.title,
    content: module.topics,
  }));

  return (
    <div className="space-y-16">
      <PageHero
        kicker="Course Overview"
        title={course.title}
        description={course.overview}
        highlight={`${course.duration} · ${course.level}`}
      >
        <div className="flex flex-wrap gap-4">
          <NeonButton href="/contact">Enroll / Contact</NeonButton>
          <NeonButton href="/courses" variant="ghost">
            Back to Courses
          </NeonButton>
        </div>
      </PageHero>

      <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <article className="rounded-[30px] border border-white/10 bg-card/70 p-8 text-white/80">
          <h2 className="text-2xl font-semibold text-white">Description</h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">{course.description}</p>
        </article>
        <aside className="rounded-[30px] border border-white/10 bg-black/60 p-8 text-sm text-white/70">
          <h3 className="text-white">Program Snapshot</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Duration</span>
              <span className="text-primary">{course.duration}</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Level</span>
              <span className="text-primary">{course.level}</span>
            </li>
            <li className="flex justify-between">
              <span>Tracks</span>
              <span className="text-primary">{course.tags.join(" · ")}</span>
            </li>
          </ul>
        </aside>
      </section>

      <section className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="section-heading">Syllabus</h3>
          <Accordion items={accordionItems} />
        </div>
        <div className="space-y-8">
          <div className="rounded-[28px] border border-white/10 bg-card/70 p-6">
            <h3 className="text-lg font-semibold text-white">Tools & Technologies</h3>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/70">
              {course.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 px-4 py-2 uppercase tracking-[0.3em]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-card/70 p-6">
            <h3 className="text-lg font-semibold text-white">Who should enroll</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {course.audience.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-primary">▹</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-primary/30 bg-black/50 p-8">
        <h3 className="text-lg font-semibold text-white">Outcomes</h3>
        <ul className="mt-4 grid gap-4 text-sm text-white/80 sm:grid-cols-2">
          {course.outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-3">
              <span className="text-primary">✔</span>
              <span className="leading-relaxed">{outcome}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <NeonButton href="/contact">Enroll Now</NeonButton>
        </div>
      </section>
    </div>
  );
}
