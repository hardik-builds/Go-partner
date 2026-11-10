'use strict';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' for light backgrounds (dark text), 'dark' for dark backgrounds (white text)
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({
  className = '',
  variant = 'light',
  showTagline = true,
  size = 'md',
}: LogoProps) {
  const isDarkBg = variant === 'dark';

  const badgeSizeClass = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  }[size];

  const titleSizeClass = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }[size];

  const taglineSizeClass = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm',
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group transition-transform duration-200 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded ${className}`}
      aria-label="GO-PARTNER Home"
    >
      {/* Official Blue Brand Icon Badge */}
      <div
        className={`relative ${badgeSizeClass} flex-shrink-0 rounded-lg overflow-hidden shadow-sm bg-[#0B57D0] flex items-center justify-center border border-blue-400/30`}
      >
        <Image
          src="/images/logo-badge.png"
          alt="GO-PARTNER Badge"
          fill
          sizes="60px"
          className="object-cover"
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center tracking-tight font-extrabold">
          <span
            className={`font-heading ${titleSizeClass} font-black ${
              isDarkBg ? 'text-white' : 'text-brand-navy'
            } tracking-wider`}
          >
            GO<span className="text-brand-orange">-</span>PARTNER
          </span>
        </div>
        {showTagline && (
          <span
            className={`${taglineSizeClass} font-medium text-brand-orange mt-0.5 tracking-wide`}
          >
            हर सफ़र का पार्टनर
          </span>
        )}
      </div>
    </Link>
  );
}
