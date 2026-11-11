import React from 'react';
import { CardSkeleton, Skeleton } from '@/components/Skeleton';

export default function Loading() {
  return (
    <div
      className="w-full flex-grow flex flex-col animate-fade-in"
      aria-label="Loading page content"
      aria-busy="true"
    >
      {/* Subtle Hero Skeleton Banner */}
      <section className="bg-brand-navy text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-4">
              <Skeleton className="w-36 h-4 bg-slate-700/60" />
              <Skeleton className="w-3/4 h-10 sm:h-12 bg-slate-700/80" />
              <div className="space-y-2 pt-2 max-w-xl">
                <Skeleton className="w-full h-4 bg-slate-700/50" />
                <Skeleton className="w-5/6 h-4 bg-slate-700/50" />
              </div>
              <div className="flex gap-3 pt-4">
                <Skeleton className="w-36 h-10 rounded-md bg-brand-orange/40" />
                <Skeleton className="w-32 h-10 rounded-md bg-slate-700/60" />
              </div>
            </div>

            {/* Right Hero Image Card Skeleton */}
            <div className="lg:col-span-5">
              <Skeleton className="w-full h-64 sm:h-72 rounded-lg bg-slate-800/80 border border-slate-700/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area Skeletons (3 Card Grid) */}
      <section className="py-14 lg:py-20 bg-brand-light-bg/40 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-2">
            <Skeleton className="w-28 h-3.5" />
            <Skeleton className="w-64 h-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </section>
    </div>
  );
}
