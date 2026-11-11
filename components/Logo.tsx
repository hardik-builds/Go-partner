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

  const badgePixels = {
    sm: 36,
    md: 44,
    lg: 56,
  }[size];

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

  // Stylistic gradient border matching brand orange & logistics blue
  const borderGradientClass = isDarkBg
    ? 'p-[2px] rounded-xl bg-gradient-to-tr from-brand-orange via-amber-400 to-sky-400 shadow-sm shadow-brand-orange/30 group-hover:shadow-md group-hover:shadow-brand-orange/50 group-hover:from-brand-orange group-hover:via-orange-300 group-hover:to-cyan-400'
    : 'p-[2px] rounded-xl bg-gradient-to-br from-brand-orange via-amber-500 to-brand-blue shadow-sm group-hover:shadow-md group-hover:shadow-brand-orange/25 group-hover:from-brand-orange group-hover:to-blue-600';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group transition-transform duration-200 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded ${className}`}
      aria-label="GO-PARTNER Home"
    >
      {/* Official Blue Brand Icon Badge with Stylistic Gradient Border */}
      <div
        className={`relative ${badgeSizeClass} flex-shrink-0 ${borderGradientClass} transition-all duration-300 group-hover:scale-105`}
        style={{
          width: `${badgePixels}px`,
          height: `${badgePixels}px`,
          minWidth: `${badgePixels}px`,
          minHeight: `${badgePixels}px`,
        }}
      >
        <div
          className="relative w-full h-full rounded-[10px] overflow-hidden bg-[#0B57D0] flex items-center justify-center shadow-inner"
          style={{ width: '100%', height: '100%' }}
        >
          <Image
            src="/images/logo-badge.png"
            alt="GO-PARTNER Logistics Official Logo"
            width={badgePixels}
            height={badgePixels}
            className="w-full h-full object-cover"
            priority
          />
        </div>
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
