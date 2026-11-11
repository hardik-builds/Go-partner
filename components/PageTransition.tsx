'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Scroll window smoothly to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Smooth top progress indicator sequence
    setProgress(35);
    const t1 = setTimeout(() => setProgress(75), 120);
    const t2 = setTimeout(() => setProgress(100), 280);
    const t3 = setTimeout(() => setProgress(0), 550);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Sleek top brand progress indicator bar */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none transition-all duration-300 ease-out origin-left bg-gradient-to-r from-brand-orange via-orange-400 to-brand-navy shadow-sm"
        style={{
          transform: `scaleX(${progress / 100})`,
          opacity: progress > 0 ? 1 : 0,
        }}
      />

      {/* Main page entrance motion container: animates on initial load, refresh, and route change */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.38,
          ease: [0.16, 1, 0.3, 1], // Smooth Apple-style deceleration curve
        }}
        className="w-full flex-grow flex flex-col will-change-[opacity,transform]"
      >
        {children}
      </motion.div>
    </>
  );
}
