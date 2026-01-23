"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const slides = [
  {
    title: "Hardware Acceleration Lab",
    tag: "R&D",
    description:
      "PCB, mechatronics and compliance sprint teams push prototypes to flight-ready hardware.",
    lottieUrl:
      "https://lottie.host/embed/31631f82-43d5-4658-ba44-9bfff8f13763/F9n6hfp8lX.lottie",
  },
  {
    title: "Software + IOT Command Center",
    tag: "IOT",
    description:
      "Digital twins, telemetry APIs and edge orchestration keep every device observable.",
    lottieUrl:
      "https://lottie.host/embed/e76f4ae4-027a-4bc9-a7a4-c701f26b8957/kIA1TflD7D.lottie",
  },
  {
    title: "EdTech Learning Grid",
    tag: "EdTech",
    description:
      "Industry mentors, capstone reviews and labs craft portfolios that impress investors.",
    lottieUrl:
      "https://lottie.host/embed/68c6da0e-82a9-4ecc-958b-1aa5d149b082/RB3o21cndX.lottie",
  },
];

export function HeroShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const active = slides[index];

  return (
    <div className="relative flex w-full max-w-3xl flex-col gap-4 sm:gap-6 overflow-hidden rounded-2xl sm:rounded-[32px] border border-white/10 bg-white/5 p-4 sm:p-8 text-white/80 fade-up fade-delay-2 mx-auto lg:mx-0">
      <div className="absolute inset-0 -z-10 rounded-2xl sm:rounded-[32px] bg-gradient-to-b from-transparent via-primary/5 to-transparent blur-2xl" />
      <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
        {slides.map((slide, slideIndex) => (
          <iframe
            key={slide.lottieUrl}
            src={slide.lottieUrl}
            title={`${slide.title} animation`}
            loading={slideIndex === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 h-full w-full rounded-2xl sm:rounded-3xl transition-opacity duration-700",
              slideIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            allowFullScreen
          />
        ))}
      </div>

      <div key={active.title} className="space-y-2 sm:space-y-3">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.5em] text-white/60">
          {active.tag}
        </p>
        <h3 className="display-font text-lg sm:text-2xl font-semibold text-white">
          {active.title}
        </h3>
        <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{active.description}</p>
      </div>

      <div className="flex items-center gap-2">
        {slides.map((slide, slideIndex) => (
          <span
            key={slide.title}
            className="h-1 sm:h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"
          >
            <span
              className={`block h-full origin-left rounded-full transition-all duration-500 ${
                slideIndex === index
                  ? "bg-primary scale-x-100"
                  : "bg-white/20 scale-x-0"
              }`}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
