'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const toggleVisibility = () => {
      const scrolled =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset ||
        0;

      if (scrolled > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    document.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      document.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // Fallback for documentElement
    if (document.documentElement) {
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll to top"
      className={`group fixed bottom-5 right-8 sm:right-10 z-50 w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF5500] via-brand-orange to-[#FF8533] text-white border-2 border-white/50 hover:border-white shadow-lg shadow-brand-orange/35 hover:shadow-2xl hover:shadow-brand-orange/60 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange hover:scale-110 hover:-translate-y-1 active:scale-95 active:translate-y-0 cursor-pointer overflow-hidden ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
    >
      {/* Subtle ambient pulse ring when active */}
      {isVisible && (
        <span
          className="absolute inset-0 rounded-full bg-brand-orange animate-ping opacity-25 pointer-events-none -z-10"
          aria-hidden="true"
        />
      )}

      {/* Dual-arrow lift-off animation */}
      <div className="relative w-5 h-5 overflow-hidden flex flex-col items-center justify-center pointer-events-none">
        <ArrowUp
          size={20}
          strokeWidth={2.75}
          className="w-5 h-5 text-white stroke-[2.75] transition-transform duration-300 ease-out group-hover:-translate-y-7"
        />
        <ArrowUp
          size={20}
          strokeWidth={2.75}
          className="w-5 h-5 text-white stroke-[2.75] absolute transition-transform duration-300 ease-out translate-y-7 group-hover:translate-y-0"
        />
      </div>
    </button>
  );
}
