"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Course } from "@/data/courses";

interface CourseModalProps {
  readonly course: Course | null;
  readonly onClose: () => void;
}

type TabType = "overview" | "topics" | "outcomes" | "audience";

export function CourseModal({ course, onClose }: CourseModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  useEffect(() => {
    const header = document.querySelector('header');
    if (course) {
      if (header) {
        header.style.opacity = "0";
        header.style.pointerEvents = "none";
        header.style.transition = "opacity 0.3s ease";
      }
    } else {
      if (header) {
        header.style.opacity = "1";
        header.style.pointerEvents = "auto";
      }
    }
    return () => {
      if (header) {
        header.style.opacity = "1";
        header.style.pointerEvents = "auto";
      }
    };
  }, [course]);

  if (!course) return null;

  const tabs = [
    { id: "overview" as TabType, label: "Overview" },
    { id: "topics" as TabType, label: "Topics" },
    { id: "outcomes" as TabType, label: "Outcomes" },
    { id: "audience" as TabType, label: "Who Should Enroll" },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Container */}
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            className="relative w-full max-w-6xl"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Modal Content */}
            <div className="relative overflow-hidden rounded-[32px] border border-primary/30 bg-gradient-to-br from-slate-950 via-slate-900 to-black shadow-[0_0_60px_rgba(57,255,20,0.3)]">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              <div className="max-h-[90vh] overflow-y-auto p-8 lg:p-12">
                {/* Header */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                      {course.level}
                    </span>
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {course.title}
                  </h2>
                  <p className="mt-4 text-base text-white/70 text-justify">{course.summary}</p>

                  {/* Course Info Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <motion.div
                      className="rounded-2xl border border-white/10 bg-black/40 p-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-primary">
                        ₹{course.price}
                      </div>
                      <div className="text-base text-white/60">Course Fee</div>
                    </motion.div>
                    <motion.div
                      className="rounded-2xl border border-white/10 bg-black/40 p-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-white">
                        {course.lectures}
                      </div>
                      <div className="text-base text-white/60">Lectures</div>
                    </motion.div>
                    <motion.div
                      className="rounded-2xl border border-white/10 bg-black/40 p-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-white">
                        {course.weeks}
                      </div>
                      <div className="text-base text-white/60">Weeks</div>
                    </motion.div>
                    <motion.div
                      className="rounded-2xl border border-white/10 bg-black/40 p-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-white">
                        {course.duration}
                      </div>
                      <div className="text-base text-white/60">Duration</div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Navigation Tabs */}
                <motion.div
                  className="mb-8 border-b border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex flex-wrap gap-2">
                    {tabs.map((tab) => (
                      <motion.button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative px-6 py-3 text-sm font-medium transition-colors ${
                          activeTab === tab.id
                            ? "text-primary"
                            : "text-white/60 hover:text-white"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {activeTab === tab.id && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                            layoutId="activeTab"
                            transition={{ type: "spring", stiffness: 400, damping: 35 }}
                          />
                        )}
                        {tab.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      {/* Overview */}
                      <div>
                        <h3 className="mb-4 text-2xl font-semibold text-white">
                          Course Overview
                        </h3>
                        <p className="leading-relaxed text-base text-white/70 text-justify">
                          {course.overview}
                        </p>
                        <p className="mt-4 leading-relaxed text-base text-white/70 text-justify">
                          {course.description}
                        </p>
                      </div>

                      {/* Tools & Technologies */}
                      <div>
                        <h3 className="mb-4 text-2xl font-semibold text-white">
                          Tools & Technologies
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {course.tools.map((tool, index) => (
                            <motion.span
                              key={tool}
                              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.1, borderColor: "rgba(57,255,20,0.5)" }}
                            >
                              {tool}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "topics" && (
                    <motion.div
                      key="topics"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="mb-6 text-2xl font-semibold text-white">
                        Course Curriculum
                      </h3>
                      <div className="space-y-4">
                        {course.modules.map((module, index) => (
                          <motion.div
                            key={module.title}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-black/40"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ borderColor: "rgba(57,255,20,0.3)" }}
                          >
                            <div className="border-b border-white/10 bg-primary/5 px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                                  {index + 1}
                                </div>
                                <h4 className="text-2xl font-semibold text-white">
                                  {module.title}
                                </h4>
                              </div>
                            </div>
                            <div className="p-6">
                              <ul className="space-y-3">
                                {module.topics.map((topic, topicIndex) => (
                                  <motion.li
                                    key={topic}
                                    className="flex items-start gap-3 text-white/70"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + topicIndex * 0.05 }}
                                  >
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                      <svg
                                        className="h-3 w-3 text-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={3}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                    </div>
                                    <span className="flex-1">{topic}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "outcomes" && (
                    <motion.div
                      key="outcomes"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="mb-6 text-xl font-semibold text-white">
                        What You'll Achieve
                      </h3>
                      <div className="grid gap-4 lg:grid-cols-2">
                        {course.outcomes.map((outcome, index) => (
                          <motion.div
                            key={outcome}
                            className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/40 p-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: "rgba(57,255,20,0.3)" }}
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                              <svg
                                className="h-5 w-5 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <span className="text-white/70">{outcome}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "audience" && (
                    <motion.div
                      key="audience"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="mb-6 text-xl font-semibold text-white">
                        Perfect For
                      </h3>
                      <div className="grid gap-4 lg:grid-cols-2">
                        {course.audience.map((item, index) => (
                          <motion.div
                            key={item}
                            className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/40 p-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: "rgba(57,255,20,0.3)" }}
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                              <svg
                                className="h-5 w-5 text-primary"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-white/70">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CTA Button */}
                <motion.div
                  className="mt-8 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-black shadow-[0_0_20px_rgba(57,255,20,0.5)] transition-all hover:shadow-[0_0_30px_rgba(57,255,20,0.7)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Enroll Now</span>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
