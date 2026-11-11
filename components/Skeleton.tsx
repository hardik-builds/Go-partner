import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
}

export function Skeleton({ className = '', variant = 'rectangular' }: SkeletonProps) {
  const baseClasses = 'animate-shimmer bg-slate-200/80';
  const variantClasses = {
    rectangular: 'rounded-md',
    circular: 'rounded-full',
    text: 'rounded h-4 w-full',
  }[variant];

  return <div className={`${baseClasses} ${variantClasses} ${className}`} aria-hidden="true" />;
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-subtle flex flex-col">
      {/* Image Area Skeleton */}
      <Skeleton className="h-48 w-full rounded-none bg-slate-200" />
      {/* Body Content */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-4">
        <div className="space-y-2.5">
          <Skeleton variant="text" className="w-1/3 h-3 bg-slate-200" />
          <Skeleton variant="text" className="w-3/4 h-6 bg-slate-300/80" />
          <div className="space-y-1.5 pt-1">
            <Skeleton variant="text" className="w-full h-3.5 bg-slate-200/70" />
            <Skeleton variant="text" className="w-4/5 h-3.5 bg-slate-200/70" />
          </div>
        </div>
        <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
          <Skeleton variant="text" className="w-24 h-4 bg-slate-200" />
          <Skeleton className="w-28 h-8 rounded-md bg-brand-orange/20" />
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-card bg-slate-900 w-full h-[360px] sm:h-[440px]">
      <Skeleton className="w-full h-full rounded-none bg-slate-800" />
      <div className="absolute top-4 right-4">
        <Skeleton className="w-28 h-8 rounded-md bg-slate-700/60" />
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <Skeleton className="w-full h-12 rounded-md bg-slate-700/70" />
      </div>
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-card flex flex-col gap-5">
      <Skeleton variant="text" className="w-1/2 h-7 mb-2 bg-slate-300" />
      <div className="space-y-2">
        <Skeleton variant="text" className="w-24 h-4 bg-slate-200" />
        <Skeleton className="w-full h-11 rounded-md bg-slate-100 border border-slate-200" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton variant="text" className="w-28 h-4 bg-slate-200" />
          <Skeleton className="w-full h-11 rounded-md bg-slate-100 border border-slate-200" />
        </div>
        <div className="space-y-2">
          <Skeleton variant="text" className="w-28 h-4 bg-slate-200" />
          <Skeleton className="w-full h-11 rounded-md bg-slate-100 border border-slate-200" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" className="w-20 h-4 bg-slate-200" />
        <Skeleton className="w-full h-28 rounded-md bg-slate-100 border border-slate-200" />
      </div>
      <Skeleton className="w-full h-12 rounded-md mt-2 bg-brand-orange/30" />
    </div>
  );
}
