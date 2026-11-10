'use client';

import Link from 'next/link';
import { Truck, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Truck size={56} className="text-brand-orange" />
            </div>
            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
              <span className="text-white font-black text-sm">!</span>
            </div>
          </div>
        </div>

        {/* 404 */}
        <div className="mb-4">
          <span className="text-8xl sm:text-9xl font-black text-white/10 select-none leading-none">
            404
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-heading -mt-4">
          This Route Does Not Exist
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-md mx-auto">
          Looks like this shipment got lost in transit. The page you are looking for
          could not be found. Let us get you back on the right road.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-md border border-white/20 hover:bg-white/20 transition-colors duration-200"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-slate-500 text-sm mb-4">Or explore these pages:</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-brand-orange text-sm transition-colors duration-200 underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
