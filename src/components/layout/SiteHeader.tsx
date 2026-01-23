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
    <header className="fixed inset-x-0 top-0 z-[60] transform-gpu">
      <div className={cn(
        "mx-auto transition-[max-width,padding] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] relative z-[60]",
        isScrolled 
          ? "max-w-7xl px-4 sm:px-6 lg:px-8" 
          : "max-w-[100vw] px-0"
      )}>
        <div className={cn(
          "flex w-full flex-col items-center shadow-xl lg:flex-row lg:items-center lg:justify-between transform-gpu relative",
          "transition-[margin,padding,border-radius,gap,background-color,border-color] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          isScrolled 
            ? "mt-3 px-3 py-0.5 rounded-[999px] gap-1 lg:gap-1.5 bg-white/15 backdrop-blur-2xl border-2 border-white/25" 
            : "mt-0 px-3 py-0.5 rounded-none gap-1 lg:gap-1.5 glass-panel backdrop-blur-xl ring-1 ring-white/10"
        )}>
          <Link href="/" className="text-primary flex-shrink-0 z-10 relative">
            <Image
              src="/reinternspark-logo.svg"
              width={isScrolled ? 85 : 140}
              height={isScrolled ? 85 : 140}
              alt="Reinternspark logo"
              priority
              style={{ width: isScrolled ? '85px' : '140px', height: 'auto', objectFit: 'contain' }}
              className={cn(
                "transition-all duration-200 drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]",
                !isScrolled && "scale-110 origin-left"
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

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[45] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        id={MOBILE_MENU_ID}
        className={cn(
          "lg:hidden relative z-50",
          "origin-top overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          isMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className={cn(
          "mx-auto rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-black/80 backdrop-blur-xl p-6 shadow-2xl",
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
                  "rounded-2xl px-4 py-3 text-center transition text-sm uppercase tracking-[0.3em] font-medium",
                  isActive(link.href)
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
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
