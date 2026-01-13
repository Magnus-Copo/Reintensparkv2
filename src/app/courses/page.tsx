"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { PageHero } from "@/components/ui/PageHero";
import { courses, type Course } from "@/data/courses";
import { CourseModal } from "@/components/ui/CourseModal";

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="space-y-16">
      <PageHero
        kicker="EdTech"
        title="Future ready courses with lab immersion"
        description="Each cohort mirrors an active Reinterspark lab so learners graduate with evidence-backed experience."
        highlight="Flexible schedules · Hybrid delivery · Mentor support"
      />

      {/* Courses Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <motion.div
            key={course.slug}
            initial={isMounted ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: isMounted ? index * 0.05 : 0 }}
            whileHover={{ y: -8 }}
            className="group relative flex min-h-[600px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-card/80 via-card/60 to-black/80 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(57,255,20,0.2)]"
          >
            {/* Course Image */}
            <div className="relative h-48 overflow-hidden bg-black/60">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                quality={75}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Price Badge */}
              <div className="absolute right-4 top-4 rounded-full bg-primary/90 border border-primary px-4 py-2 backdrop-blur-sm">
                <div className="text-lg font-bold text-black">
                  ₹{course.price}
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Course Info */}
              <div className="mb-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {course.level}
                  </span>
                  {course.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-white/70 line-clamp-3">
                {course.summary}
              </p>

              {/* Course Stats */}
              <div className="mb-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                  <div className="text-lg font-bold text-white">
                    {course.lectures}
                  </div>
                  <div className="text-xs text-white/60">Lectures</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                  <div className="text-lg font-bold text-white">
                    {course.weeks}
                  </div>
                  <div className="text-xs text-white/60">Weeks</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                  <div className="text-lg font-bold text-white">
                    {course.duration.split(" ")[0]}
                  </div>
                  <div className="text-xs text-white/60">Duration</div>
                </div>
              </div>

              {/* View Details Button */}
              <motion.button
                onClick={() => setSelectedCourse(course)}
                className="w-full rounded-full border border-primary/30 bg-primary/10 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-black"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Details
              </motion.button>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -inset-[1px] -z-10 rounded-[28px] bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
          </motion.div>
        ))}
      </div>

      {/* Course Modal */}
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </div>
  );
}
