'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends ImageProps {
  wrapperClassName?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Underlying Shimmer Skeleton until decoded */}
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-slate-200/80 animate-shimmer"
        />
      )}

      <Image
        src={src}
        alt={alt}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
}
