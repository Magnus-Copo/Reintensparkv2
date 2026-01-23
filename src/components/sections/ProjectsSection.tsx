"use client";

import { useState, useCallback, memo } from "react";
import Image from "next/image";

import { ProjectModal, type ProjectDetails } from "@/components/ui/ProjectModal";
import { projectCategories, type ProjectGalleryImage } from "@/data/projects";

function OfferingsList({
  offerings,
}: Readonly<{
  offerings: { title: string; bullets: string[] }[];
}>) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {offerings.map((offering) => (
        <div
          key={offering.title}
          className="flex h-full flex-col rounded-2xl sm:rounded-3xl border border-white/10 bg-black/40 p-4 sm:p-5 text-left"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
            {offering.title}
          </p>
          <ul className="mt-3 flex-1 space-y-2 text-sm text-white/75">
            {offering.bullets.map((bullet) => (
              <li key={bullet} className="leading-[1.6] text-left">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const ProjectGalleryItem = memo(function ProjectGalleryItem({
  image,
  categoryId,
  onImageClick,
}: {
  image: ProjectGalleryImage;
  categoryId: string;
  onImageClick: (project: ProjectDetails) => void;
}) {
  const handleClick = useCallback(() => {
    if (image.details) {
      onImageClick({
        title: image.label,
        description: image.details.description,
        image: image.src,
        imageAlt: image.alt,
        features: image.details.features,
        specifications: image.details.specifications,
        category: categoryId,
      });
    }
  }, [image, categoryId, onImageClick]);

  return (
    <button
      onClick={handleClick}
      className="group relative w-full max-w-md overflow-hidden rounded-2xl sm:rounded-[32px] border border-white/10 bg-black/40 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] sm:max-w-none disabled:cursor-default disabled:hover:border-white/10 disabled:hover:shadow-none"
      disabled={!image.details}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 480px, (min-width: 640px) 45vw, 90vw"
          className="object-contain p-2 sm:p-0"
          loading="lazy"
          quality={75}
        />
      </div>
      <div className="px-4 sm:px-5 pb-3 sm:pb-4 pt-2">
        <p className="text-center text-xs sm:text-sm font-medium text-white leading-tight">
          {image.label}
        </p>
        {image.details && (
          <p className="mt-1 text-center text-xs text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Explore more →
          </p>
        )}
      </div>
    </button>
  );
});

function ProjectGallery({
  gallery,
  categoryId,
  onImageClick,
}: Readonly<{
  gallery: ProjectGalleryImage[];
  categoryId: string;
  onImageClick: (project: ProjectDetails) => void;
}>) {
  return (
    <div className={`grid gap-6 justify-items-center ${gallery.length === 3 ? 'sm:grid-cols-2 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:sm:w-1/2 [&>*:last-child]:sm:mx-auto' : 'sm:grid-cols-2'} sm:justify-items-stretch`}>
      {gallery.map((image) => (
        <ProjectGalleryItem
          key={image.label}
          image={image}
          categoryId={categoryId}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  const handleImageClick = useCallback((project: ProjectDetails) => {
    setSelectedProject(project);
  }, []);

  return (
    <>
      <section className="space-y-12" id="projects">
        {projectCategories.map((category) => (
          <article
            key={category.id}
            className="flex flex-col gap-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-black/70 p-6 text-center shadow-[0_25px_120px_rgba(0,0,0,0.35)] lg:flex-row lg:justify-between lg:gap-24 lg:p-16 lg:text-left"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <p className="pill bg-white/5 text-primary">{category.id.toUpperCase()}</p>
                  <h3 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                  {category.focus && (
                    <div className="flex flex-wrap gap-2">
                      {category.focus.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <p className="mt-4 text-base text-white/75 lg:text-lg mx-auto lg:mx-0">
                  {category.description}
                </p>

                <OfferingsList offerings={category.offerings} />
              </div>

              <div className="flex-1">
                <ProjectGallery 
                  gallery={category.gallery} 
                  categoryId={category.id}
                  onImageClick={handleImageClick}
                />
              </div>
            </article>
          ))}
      </section>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}
