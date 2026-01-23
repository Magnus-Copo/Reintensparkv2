"use client";

import { useState, useEffect, useTransition, memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { PageHero } from "@/components/ui/PageHero";
import { courses, type Course } from "@/data/courses";
import { CourseModal } from "@/components/ui/CourseModal";

const CourseCard = memo(function CourseCard({ 
  course, 
  index, 
  isMounted, 
  onSelect 
}: { 
  course: Course; 
  index: number; 
  isMounted: boolean;
  onSelect: (course: Course) => void;
}) {
  return (
    <motion.div
      key={course.slug}
      initial={isMounted ? { opacity: 0, y: 20 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: isMounted ? index * 0.05 : 0 }}
      className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-card/80 via-card/60 to-black/80 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] max-w-[380px] mx-auto w-full hover:-translate-y-2"
    >
      {/* Course Image */}
      <div className="relative h-44 overflow-hidden bg-black/60 rounded-t-[24px]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.15] will-change-transform"
          quality={75}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ transformOrigin: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Price Badge */}
        <div className="absolute right-3 top-3 rounded-full bg-primary/90 border border-primary px-3 py-1.5 backdrop-blur-sm">
          <div className="text-base font-bold text-black">
            ₹{course.price}
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Course Info */}
        <div className="mb-3">
          <div className="mb-2 flex flex-wrap gap-1.5">
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/70">
              {course.level}
            </span>
            {course.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
            {course.title}
          </h3>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-white/70 line-clamp-2">
          {course.summary}
        </p>

        {/* Course Stats */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-white/10 bg-black/40 p-2 text-center">
            <div className="text-lg font-bold text-white">
              {course.lectures}
            </div>
            <div className="text-xs text-white/60">Lectures</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/40 p-2 text-center">
            <div className="text-lg font-bold text-white">
              {course.weeks}
            </div>
            <div className="text-xs text-white/60">Weeks</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/40 p-2 text-center">
            <div className="text-lg font-bold text-white">
              {course.duration.split(" ")[0]}
            </div>
            <div className="text-xs text-white/60">Duration</div>
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onSelect(course)}
          className="w-full rounded-full border border-primary/30 bg-primary/10 py-2.5 text-base font-semibold text-primary transition-all duration-150 hover:bg-primary hover:text-black focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black mt-auto active:scale-95"
          aria-label={`View details for ${course.title}`}
        >
          View Details
        </button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute -inset-[1px] -z-10 rounded-[24px] bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
    </motion.div>
  );
});

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isPending, startTransition] = useTransition();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCourseSelect = (course: Course) => {
    startTransition(() => {
      setSelectedCourse(course);
    });
  };

  const handleClose = () => {
    startTransition(() => {
      setSelectedCourse(null);
    });
  };

  return (
    <div className="space-y-16">
      <PageHero
        kicker="EdTech"
        title="Future ready courses with lab immersion"
        description="Each cohort mirrors an active Reinterspark lab so learners graduate with evidence-backed experience."
        highlight="Flexible schedules · Hybrid delivery · Mentor support"
      />

      {/* Courses Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course, index) => (
          <CourseCard 
            key={course.slug}
            course={course}
            index={index}
            isMounted={isMounted}
            onSelect={handleCourseSelect}
          />
        ))}
      </div>

      {/* Course Modal */}
      <CourseModal course={selectedCourse} onClose={handleClose} />
    </div>
  );
}
