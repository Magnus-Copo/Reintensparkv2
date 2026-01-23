"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";

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
        ticking.current = true;
        requestAnimationFrame(updateScrollState);
      }
    };

    // Set initial state
    updateScrollState();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const isActive = useCallback((href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  }, [pathname]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] transform-gpu will-change-transform">
      <div className={cn(
        "mx-auto transition-[max-width,padding] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] relative z-[60]",
        isScrolled 
          ? "max-w-7xl px-4 sm:px-6 lg:px-8" 
          : "max-w-[100vw] px-0"
      )}>
        <div className={cn(
          "flex w-full items-center shadow-xl transform-gpu relative",
          "transition-[margin,padding,border-radius,gap,background-color,border-color] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          "flex-row justify-between lg:flex-row lg:items-center lg:justify-between",
          isScrolled 
            ? "mt-2 px-2.5 py-1 lg:mt-3 lg:px-3 lg:py-0.5 rounded-[999px] gap-2 lg:gap-1.5 bg-white/15 backdrop-blur-2xl border-2 border-white/25" 
            : "mt-0 px-3 py-1.5 lg:px-3 lg:py-0.5 rounded-none gap-2 lg:gap-1.5 glass-panel backdrop-blur-xl ring-1 ring-white/10"
        )}>
          <Link href="/" className="text-primary flex-shrink-0 z-10 relative">
            <Image
              src="/reinternspark-logo.svg"
              width={isScrolled ? 85 : 140}
              height={isScrolled ? 85 : 140}
              alt="Reinternspark logo"
              priority
              fetchPriority="high"
              style={{ width: isScrolled ? '85px' : '140px', height: 'auto', objectFit: 'contain' }}
              className={cn(
                "transition-all duration-200 drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]",
                "max-w-[85px] sm:max-w-[100px] lg:max-w-none",
                !isScrolled && "lg:scale-110 lg:origin-left"
              )}
            />
          </Link>

          <nav
            className={cn(
              "hidden items-center lg:flex transform-gpu whitespace-nowrap z-10 absolute left-1/2 -translate-x-1/2",
              "transition-[gap] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
              isScrolled ? "gap-2" : "gap-3"
            )}
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={cn(
                  "nav-link transition-[font-size,padding] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform-gpu flex-shrink-0",
                  isActive(link.href) && "nav-link--active",
                  isScrolled ? "text-xs px-2.5 py-1.5" : "text-base px-4 py-2"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden flex-shrink-0 items-center gap-3 lg:flex lg:ml-auto lg:mr-4">
            <NeonButton 
              href="/contact"
              className={cn(
                "transition-[font-size,padding] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform-gpu",
                isScrolled ? "text-xs px-3 py-1.5" : "text-base px-5 py-2"
              )}
            >
              Contact
            </NeonButton>
          </div>

          <button
            type="button"
            className={cn(
              "relative inline-flex flex-col items-center justify-center rounded-xl p-1.5 text-white transition-all duration-150 ease-out will-change-transform",
              "bg-primary/10 backdrop-blur-sm border border-primary/30",
              "hover:bg-primary/20 hover:border-primary/60 active:scale-95",
              "lg:hidden touch-manipulation"
            )}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label="Toggle navigation"
          >
            <span
              className={cn(
                "block h-0.5 rounded-full bg-current transition-all duration-200 ease-out",
                "w-5 lg:w-5",
                isMenuOpen ? "translate-y-[3px] rotate-45" : "-translate-y-1"
              )}
            />
            <span
              className={cn(
                "block h-0.5 rounded-full bg-current transition-all duration-200 ease-out my-0.5",
                "w-5 lg:w-5",
                isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              )}
            />
            <span
              className={cn(
                "block h-0.5 rounded-full bg-current transition-all duration-200 ease-out",
                "w-5 lg:w-5",
                isMenuOpen ? "-translate-y-[3px] -rotate-45" : "translate-y-1"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[45] lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        id={MOBILE_MENU_ID}
        className={cn(
          "lg:hidden relative z-50",
          "origin-top overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className={cn(
          "mx-auto rounded-3xl border-2 border-primary/20 bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-black/95 backdrop-blur-xl p-6 shadow-2xl shadow-primary/10",
          "transition-[margin,width] duration-300 ease-out",
          isScrolled ? "mt-2 w-[92%]" : "mt-3 w-[95%]"
        )}>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={cn(
                  "rounded-2xl px-5 py-3.5 text-center transition-all duration-150 text-sm uppercase tracking-[0.25em] font-medium touch-manipulation",
                  isActive(link.href)
                    ? "bg-primary/20 text-primary border-2 border-primary/40 shadow-md shadow-primary/20"
                    : "text-white/90 hover:bg-white/10 hover:text-white border-2 border-white/5 hover:border-white/20"
                )}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-white/10">
            <NeonButton
              href="/contact"
              className="w-full justify-center py-3.5 text-sm font-semibold"
              onClick={closeMenu}
            >
              Contact Us
            </NeonButton>
          </div>
        </div>
      </div>
    </header>
  );
}
