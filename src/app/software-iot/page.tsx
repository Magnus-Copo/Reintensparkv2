"use client";

import { useState, useMemo, useCallback, memo, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { PageHero } from "@/components/ui/PageHero";
import { NeonButton } from "@/components/ui/NeonButton";
import { ProjectModal, type ProjectDetails } from "@/components/ui/ProjectModal";
import { softwareHighlights, softwareAIAnnotations } from "@/data/practice";
import { projectCategories, type ProjectGalleryImage } from "@/data/projects";

type FilterCategory = "all" | "iot" | "ai-annotation";

interface CategorizedProject extends ProjectGalleryImage {
  category: FilterCategory;
  categoryLabel: string;
}

const ProjectItem = memo(function ProjectItem({
  project,
  onImageClick,
}: {
  project: CategorizedProject;
  onImageClick: (details: ProjectDetails) => void;
}) {
  const handleClick = useCallback(() => {
    if (project.details) {
      onImageClick({
        title: project.label,
        description: project.details.description,
        image: project.src,
        imageAlt: project.alt,
        features: project.details.features,
        specifications: project.details.specifications,
        category: project.category,
      });
    }
  }, [project, onImageClick]);

  return (
    <button
      onClick={handleClick}
      className="group relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-black/40 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] sm:max-w-none disabled:cursor-default disabled:hover:border-white/10 disabled:hover:shadow-none"
      disabled={!project.details}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={project.src}
          alt={project.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain"
          loading="lazy"
          quality={85}
        />
      </div>
      <div className="px-5 pb-4 pt-2">
        <p className="text-center text-sm font-medium text-white">
          {project.label}
        </p>
        <p className="mt-1 text-center text-xs text-primary/70">
          {project.categoryLabel}
        </p>
        {project.details && (
          <p className="mt-1 text-center text-xs text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Explore more →
          </p>
        )}
      </div>
    </button>
  );
});

export default function SoftwareIoTPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const handleImageClick = useCallback((details: ProjectDetails) => {
    setSelectedProject(details);
  }, []);

  const handleFilterChange = useCallback((filter: FilterCategory) => {
    setActiveFilter(filter);
  }, []);
  
  // Get IOT, AI Annotation, and Robotics projects
  const iotCategory = projectCategories.find(cat => cat.id === "iot");
  const aiAnnotationCategory = projectCategories.find(cat => cat.id === "ai-annotations");
  const roboticsCategory = projectCategories.find(cat => cat.id === "robotics");
  
  // Combine all projects with categories - memoized
  const allProjects = useMemo(() => {
    const projects: CategorizedProject[] = [];
    
    // Add IOT projects
    if (iotCategory) {
      iotCategory.gallery.forEach(project => {
        projects.push({
          ...project,
          category: "iot",
          categoryLabel: "IOT"
        });
      });
    }
    
    // Add Robotics projects to IOT category (since robotics is IOT-related)
    if (roboticsCategory) {
      roboticsCategory.gallery.forEach(project => {
        projects.push({
          ...project,
          category: "iot",
          categoryLabel: "Robotics"
        });
      });
    }
    
    // Add AI Annotation projects
    if (aiAnnotationCategory) {
      aiAnnotationCategory.gallery.forEach(project => {
        projects.push({
          ...project,
          category: "ai-annotation",
          categoryLabel: "AI Annotation"
        });
      });
    }
    
    // Add additional AI Annotation projects (only for software/IOT page)
    softwareAIAnnotations.forEach(project => {
      projects.push({
        ...project,
        category: "ai-annotation",
        categoryLabel: "AI Annotation"
      });
    });
    
    return projects;
  }, [iotCategory, aiAnnotationCategory, roboticsCategory]);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return allProjects;
    }
    return allProjects.filter(project => project.category === activeFilter);
  }, [activeFilter, allProjects]);

  // Count projects by category - memoized
  const projectCounts = useMemo(() => ({
    iot: allProjects.filter(p => p.category === "iot").length,
    ai: allProjects.filter(p => p.category === "ai-annotation").length,
    all: allProjects.length
  }), [allProjects]);

  const filterCategories = useMemo(() => [
    { id: "all" as FilterCategory, label: "All", count: projectCounts.all },
    { id: "iot" as FilterCategory, label: "IOT Projects", count: projectCounts.iot },
    { id: "ai-annotation" as FilterCategory, label: "AI Annotation", count: projectCounts.ai }
  ], [projectCounts]);
  return (
    <div className="space-y-16">
      <PageHero
        kicker="Software / IOT"
        title="Where Code Meets Intelligence Innovation Becomes Reality"
        description={softwareHighlights.intro}
        highlight="Edge AI | Cloud Native | Smart Ecosystems"
      >
        <NeonButton href="/projects">Explore the Projects</NeonButton>
      </PageHero>

      <section className="grid gap-8 md:grid-cols-3">
        {softwareHighlights.categories.map((category) => (
          <article
            key={category.title}
            className="rounded-[28px] border border-white/10 bg-card/70 p-6 text-white"
          >
            <h3 className="text-xl font-semibold">{category.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {category.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-primary">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-[32px] border border-primary/30 bg-black/50 p-8">
        <h3 className="mb-6 text-2xl font-semibold text-white">Industry Applications</h3>
        
        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap gap-3">
          {filterCategories.map((category) => (
            <motion.button
              key={category.id}
              type="button"
              onClick={() => handleFilterChange(category.id)}
              className={`relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-primary text-black shadow-[0_0_20px_rgba(57,255,20,0.6)]"
                  : "border border-white/20 text-white/70 hover:border-primary/50 hover:text-white"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {activeFilter === category.id && (
                <motion.div
                  className="absolute inset-0 bg-primary"
                  layoutId="activeFilterSoftware"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {category.label}
                <span className={`rounded-full px-2 py-0.5 text-xs ${
                  activeFilter === category.id
                    ? "bg-black/20"
                    : "bg-white/10"
                }`}>
                  {category.count}
                </span>
              </span>
            </motion.button>
          ))}
        </div>

        {/* Filtered Gallery */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.category}-${project.label}-${index}`}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectItem
                project={project}
                onImageClick={handleImageClick}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
