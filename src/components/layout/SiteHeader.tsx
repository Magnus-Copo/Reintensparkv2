"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { NeonButton } from "@/components/ui/NeonButton";

const MOBILE_MENU_ID = "primary-navigation";
const SCROLL_THRESHOLD = 20;

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > SCROLL_THRESHOLD;
      
      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
      
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollState);
        ticking.current = true;
      }
    };

    // Set initial state
    updateScrollState();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 transform-gpu">
      <div className={cn(
        "mx-auto transition-[max-width,padding] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        isScrolled 
          ? "max-w-7xl px-4 sm:px-6 lg:px-8" 
          : "max-w-[100vw] px-0"
      )}>
        <div className={cn(
          "flex w-full flex-col items-center shadow-xl lg:flex-row lg:items-center lg:justify-between transform-gpu",
          "transition-[margin,padding,border-radius,gap,background-color,border-color] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          isScrolled 
            ? "mt-4 px-8 py-4 rounded-[999px] gap-3 lg:gap-4 bg-white/15 backdrop-blur-2xl border-2 border-white/25" 
            : "mt-0 px-8 py-6 rounded-none gap-4 lg:gap-6 glass-panel backdrop-blur-xl ring-1 ring-white/10"
        )}>
          <Link href="/" className="text-primary">
            <div className={cn(
              "relative transition-[width] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform-gpu",
              isScrolled ? "w-[120px] h-[41px]" : "w-[160px] h-[55px]"
            )}>
              <Image
                src="/reintenspark-logo.png"
                fill
                alt="Reinternspark logo"
                priority
                style={{ objectFit: 'contain' }}
                className="transition-opacity duration-200"
              />
            </div>
          </Link>

          <nav
            className={cn(
              "hidden min-w-0 flex-1 flex-wrap items-center justify-center lg:flex transform-gpu",
              "transition-[gap] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
              isScrolled ? "gap-1" : "gap-2"
            )}
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch
                className={cn(
                  "nav-link transition-[font-size,padding] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform-gpu",
                  isActive(link.href) && "nav-link--active",
                  isScrolled ? "text-sm px-3 py-1.5" : "text-base px-4 py-2"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden flex-shrink-0 items-center gap-3 lg:flex">
            <NeonButton 
              href="/contact"
              className={cn(
                "transition-[font-size,padding] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform-gpu",
                isScrolled ? "text-sm px-4 py-1.5" : "text-base px-5 py-2"
              )}
            >
              Contact
            </NeonButton>
          </div>

          <button
            type="button"
            className={cn(
              "relative inline-flex items-center justify-center rounded-full border border-white/20 text-white transition-[width,height] duration-300 ease-out hover:border-primary/60 hover:text-primary lg:hidden",
              isScrolled ? "h-9 w-9" : "h-11 w-11"
            )}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label="Toggle navigation"
          >
            <span
              className={cn(
                "block h-0.5 rounded-full bg-current transition-[width,transform] duration-300 ease-out",
                isScrolled ? "w-5" : "w-6",
                isMenuOpen ? "translate-y-1.5 rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "block h-0.5 rounded-full bg-current transition-[width,opacity] duration-300 ease-out",
                isScrolled ? "w-5" : "w-6",
                isMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "block h-0.5 rounded-full bg-current transition-[width,transform] duration-300 ease-out",
                isScrolled ? "w-5" : "w-6",
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-1.5"
              )}
            />
          </button>
        </div>
      </div>

      <div
        id={MOBILE_MENU_ID}
        className={cn(
          "lg:hidden",
          "origin-top overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          isMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className={cn(
          "mx-auto rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-white/0 p-6 text-sm uppercase tracking-[0.3em] text-white/80",
          "transition-[margin,width] duration-300 ease-out",
          isScrolled ? "mt-2 w-[92%]" : "mt-3 w-[95%]"
        )}>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch
                className={cn(
                  "rounded-2xl px-4 py-3 text-center transition",
                  isActive(link.href)
                    ? "bg-white/10 text-primary"
                    : "hover:bg-white/5"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <NeonButton
              href="/contact"
              className="w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NeonButton>
          </div>
        </div>
      </div>
    </header>
  );
}
