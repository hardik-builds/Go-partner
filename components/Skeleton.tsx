import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
}

export function Skeleton({ className = '', variant = 'rectangular' }: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-slate-200/80';
  const variantClasses = {
    rectangular: 'rounded-md',
    circular: 'rounded-full',
    text: 'rounded h-4 w-full',
  }[variant];

  return <div className={`${baseClasses} ${variantClasses} ${className}`} aria-hidden="true" />;
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-brand-border p-6 shadow-subtle flex flex-col gap-4">
      <Skeleton className="h-44 w-full rounded-md" />
      <Skeleton variant="text" className="w-1/3 h-5" />
      <Skeleton variant="text" className="w-3/4 h-6" />
      <Skeleton variant="text" className="w-full h-4" />
      <Skeleton variant="text" className="w-5/6 h-4" />
      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
        <Skeleton variant="text" className="w-24 h-4" />
        <Skeleton className="w-28 h-9 rounded-md" />
      </div>
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-brand-border p-8 shadow-card flex flex-col gap-5">
      <Skeleton variant="text" className="w-1/2 h-7 mb-2" />
      <div className="space-y-2">
        <Skeleton variant="text" className="w-24 h-4" />
        <Skeleton className="w-full h-11 rounded-md" />
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" className="w-28 h-4" />
        <Skeleton className="w-full h-11 rounded-md" />
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" className="w-20 h-4" />
        <Skeleton className="w-full h-28 rounded-md" />
      </div>
      <Skeleton className="w-full h-12 rounded-md mt-2" />
    </div>
  );
}
