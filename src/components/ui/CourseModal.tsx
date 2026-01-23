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
    if (!header) return;
    
    if (course) {
      header.style.opacity = "0";
      header.style.pointerEvents = "none";
      header.style.transition = "opacity 0.3s ease";
      document.body.style.overflow = 'hidden';
    } else {
      header.style.opacity = "1";
      header.style.pointerEvents = "auto";
      document.body.style.overflow = '';
    }
    
    return () => {
      header.style.opacity = "1";
      header.style.pointerEvents = "auto";
      document.body.style.overflow = '';
    };
  }, [course]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && course) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [course, onClose]);

  if (!course) return null;

  const tabs = [
    { id: "overview" as TabType, label: "Overview" },
    { id: "topics" as TabType, label: "Topics" },
    { id: "outcomes" as TabType, label: "Outcomes" },
    { id: "audience" as TabType, label: "Who Should Enroll" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          key="modal-content"
          className="relative w-full max-w-7xl max-h-[90vh] bg-gradient-to-br from-slate-950 via-slate-900 to-black rounded-[32px] border-2 border-primary/50 shadow-[0_0_80px_rgba(57,255,20,0.6)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Sticky Position */}
          <div className="sticky top-0 z-50 flex justify-end p-4">
            <button
              onClick={onClose}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/70 bg-black/70 text-white hover:bg-primary hover:text-black hover:rotate-90 transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(57,255,20,0.4)]"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="max-h-[calc(90vh-80px)] overflow-y-auto px-6 pb-6 sm:px-8 sm:pb-8 lg:px-12 lg:pb-12">
            {/* Content */}
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-primary/50 bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-[0_0_10px_rgba(57,255,20,0.3)]">
                    {course.level}
                  </span>
                  {course.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 id="course-modal-title" className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]">
                  {course.title}
                </h2>
                <p className="text-base text-white/90 leading-relaxed">{course.summary}</p>

                {/* Course Info Grid */}
                <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                  <div className="rounded-2xl border border-primary/30 bg-black/50 p-4 hover:border-primary/50 transition-all">
                    <div className="text-2xl font-bold text-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">₹{course.price}</div>
                    <div className="text-sm text-white/70">Course Fee</div>
                  </div>
                  <div className="rounded-2xl border border-primary/30 bg-black/50 p-4 hover:border-primary/50 transition-all">
                    <div className="text-2xl font-bold text-white">{course.lectures}</div>
                    <div className="text-sm text-white/70">Lectures</div>
                  </div>
                  <div className="rounded-2xl border border-primary/30 bg-black/50 p-4 hover:border-primary/50 transition-all">
                    <div className="text-2xl font-bold text-white">{course.weeks}</div>
                    <div className="text-sm text-white/70">Weeks</div>
                  </div>
                  <div className="rounded-2xl border border-primary/30 bg-black/50 p-4 hover:border-primary/50 transition-all">
                    <div className="text-2xl font-bold text-white">{course.duration}</div>
                    <div className="text-sm text-white/70">Duration</div>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="mb-8 border-b border-primary/30">
                <div className="flex flex-wrap gap-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-6 py-3 text-sm font-medium transition-all ${
                        activeTab === tab.id ? "text-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.4)]" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary shadow-[0_0_8px_rgba(57,255,20,0.6)]" />
                      )}
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="min-h-[200px]">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-2xl font-semibold text-white drop-shadow-[0_0_5px_rgba(57,255,20,0.2)]">Course Overview</h3>
                    <p className="leading-relaxed text-base text-white/85">{course.overview}</p>
                    <p className="mt-4 leading-relaxed text-base text-white/85">{course.description}</p>
                  </div>

                  <div>
                    <h3 className="mb-4 text-2xl font-semibold text-white drop-shadow-[0_0_5px_rgba(57,255,20,0.2)]">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {course.tools.map((tool) => (
                        <span key={tool} className="rounded-full border border-primary/40 bg-black/50 px-4 py-2 text-sm text-white hover:border-primary/60 hover:bg-primary/10 transition-all">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "topics" && (
                <div>
                  <h3 className="mb-6 text-2xl font-semibold text-white drop-shadow-[0_0_5px_rgba(57,255,20,0.2)]">Course Curriculum</h3>
                  <div className="space-y-4">
                    {course.modules.map((module, index) => (
                      <div key={module.title} className="rounded-2xl border border-primary/30 bg-black/40 hover:border-primary/50 transition-all">
                        <div className="border-b border-primary/30 bg-primary/5 px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/30 text-sm font-bold text-primary shadow-[0_0_8px_rgba(57,255,20,0.4)]">
                              {index + 1}
                            </div>
                            <h4 className="text-xl font-semibold text-white">{module.title}</h4>
                          </div>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            {module.topics.map((topic) => (
                              <li key={topic} className="flex items-start gap-3 text-white/80 hover:text-white/95 transition-colors group">
                                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 group-hover:bg-primary/30 group-hover:shadow-[0_0_8px_rgba(57,255,20,0.5)] transition-all">
                                  <svg className="h-3 w-3 text-primary drop-shadow-[0_0_3px_rgba(57,255,20,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="flex-1 group-hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.3)]">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "outcomes" && (
                <div>
                  <h3 className="mb-6 text-2xl font-semibold text-white drop-shadow-[0_0_5px_rgba(57,255,20,0.2)]">What You'll Achieve</h3>
                  <div className="grid gap-4 lg:grid-cols-2">
                    {course.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-4 rounded-xl border border-primary/30 bg-black/40 p-6 hover:border-primary/50 hover:bg-primary/5 transition-all">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/30 shadow-[0_0_8px_rgba(57,255,20,0.3)]">
                          <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-base text-white/85">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "audience" && (
                <div>
                  <h3 className="mb-6 text-2xl font-semibold text-white drop-shadow-[0_0_5px_rgba(57,255,20,0.2)]">Perfect For</h3>
                  <div className="grid gap-4 lg:grid-cols-2">
                    {course.audience.map((item) => (
                      <div key={item} className="flex items-start gap-4 rounded-xl border border-primary/30 bg-black/40 p-6 hover:border-primary/50 hover:bg-primary/5 transition-all">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/30 shadow-[0_0_8px_rgba(57,255,20,0.3)]">
                          <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-base text-white/85">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-black shadow-[0_0_20px_rgba(57,255,20,0.5)] hover:shadow-[0_0_40px_rgba(57,255,20,0.8)] hover:scale-105 transition-all"
              >
                <span>Enroll Now</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
