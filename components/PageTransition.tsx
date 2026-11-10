'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="w-full flex-grow flex flex-col transition-opacity duration-300 ease-out opacity-100">
      {children}
    </div>
  );
}
