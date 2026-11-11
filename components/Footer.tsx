'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { GOOGLE_PLAY_URL, ASH_SOLUTION_URL } from '@/lib/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-0 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1: Company Information & Logo (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="lg" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm pt-2">
              GO-PARTNER delivers flexible, reliable freight and transport solutions. We connect
              shippers with verified carriers to move freight safely across key commercial and industrial routes.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
                Regional Headquarters
              </p>
              <p>Mumbai MMR & Maharashtra Logistics Hub</p>
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>

          {/* Col 2: Quick Links (lg: 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-orange hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-orange hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-orange hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-orange hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-brand-orange hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-brand-orange hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="hover:text-brand-orange hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1"
                >
                  Cancellation & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Contact & Support
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Dispatch & Helpline</span>
                  <a
                    href="tel:+919820011223"
                    className="hover:text-brand-orange font-medium text-white transition-colors"
                  >
                    +91 98200 11223
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Business & Support</span>
                  <a
                    href="mailto:support@gopartner.in"
                    className="hover:text-brand-orange transition-colors"
                  >
                    support@gopartner.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">WhatsApp Direct Chat</span>
                  <a
                    href="https://wa.me/919820011223?text=Hello%20GO%20PARTNER%20Support%20Team"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-300 inline-flex items-center gap-1 font-medium transition-colors text-emerald-400"
                  >
                    <span>Connect on WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Operating Region</span>
                  <span>Mumbai MMR & Maharashtra State</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Download Our App & Social Media (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Download Our App
            </h3>
            <p className="text-xs text-slate-300 leading-normal">
              This website is a guide. Booking, quotes, and trip tracking all happen in the GO-PARTNER Android app.
            </p>

            <div className="flex flex-col gap-2.5 pt-1">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3.5 py-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md w-full group"
                aria-label="Get it on Google Play"
              >
                <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3.6 1.8L13.8 12L3.6 22.2C3.3 22 3 21.6 3 21V3C3 2.4 3.3 2 3.6 1.8Z"
                    fill="#00E676"
                  />
                  <path
                    d="M17.2 8.6L13.8 12L17.2 15.4L21.3 13.1C22.2 12.6 22.2 11.4 21.3 10.9L17.2 8.6Z"
                    fill="#FFD600"
                  />
                  <path
                    d="M3.6 1.8L13.8 12L17.2 8.6L5.3 1.9C4.7 1.6 4.1 1.6 3.6 1.8Z"
                    fill="#00B0FF"
                  />
                  <path
                    d="M3.6 22.2L13.8 12L17.2 15.4L5.3 22.1C4.7 22.4 4.1 22.4 3.6 22.2Z"
                    fill="#FF3D00"
                  />
                </svg>
                <div className="text-left leading-none">
                  <span className="text-[10px] uppercase text-slate-400 block tracking-wider">
                    GET IT ON
                  </span>
                  <span className="text-xs font-semibold text-white tracking-wide group-hover:text-brand-orange transition-colors">
                    Google Play
                  </span>
                </div>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-2 font-medium">Follow GO-PARTNER</span>
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-slate-800 hover:bg-brand-orange flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-slate-800 hover:bg-brand-orange flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919820011223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.972.531 1.764.819 2.796.82h.005c3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.807-5.773-5.807zm3.382 8.214c-.144.405-.837.774-1.17.824-.312.045-.694.073-1.127-.067-.272-.088-.621-.219-1.077-.417-1.928-.838-3.184-2.792-3.28-2.92-.096-.128-.778-1.036-.778-1.975 0-.94.492-1.403.668-1.595.176-.192.384-.24.512-.24.128 0 .256.002.368.007.12.006.279-.045.437.335.16.384.544 1.327.592 1.423.048.096.08.208.016.336-.064.128-.096.208-.192.32-.096.112-.202.249-.288.335-.096.096-.196.2-.084.392.112.192.499.824 1.07 1.334.736.656 1.357.859 1.549.955.192.096.304.08.416-.048.112-.128.48-.56.608-.752.128-.192.256-.16.432-.096.176.064 1.12.528 1.312.624.192.096.32.144.368.224.048.08.048.464-.096.869z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} GO-PARTNER. All rights reserved. Moving Business Forward.
          </p>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-slate-700">|</span>
            <Link
              href="/refund"
              className="hover:text-white transition-colors"
            >
              Cancellation & Refunds
            </Link>
          </div>
        </div>
      </div>

      {/* Dedicated Developer Banner: Powered by ASH Solutions */}
      <div className="relative w-full bg-gradient-to-r from-[#070F1E] via-[#0D1E3A] to-[#070F1E] border-t border-slate-800/80 py-6 sm:py-7 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle decorative ambient lights & top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent pointer-events-none" />
        <div className="absolute -top-12 left-1/4 w-72 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 right-1/4 w-72 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-orange mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>Website Design &amp; Development</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight flex items-center justify-center md:justify-start gap-1.5 flex-wrap">
              <span className="text-slate-200">Powered by</span>
              <span className="text-white hover:text-brand-orange transition-colors">ASH Solutions</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-300 mt-1 max-w-xl leading-relaxed">
              Engineered with modern web performance, bespoke design, and seamless logistics technology.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center md:justify-end flex-shrink-0">
            <a
              href={ASH_SOLUTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#FF5500] via-brand-orange to-[#FF7A1A] hover:from-[#E64D00] hover:to-brand-orange text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md shadow-brand-orange/25 hover:shadow-lg hover:shadow-brand-orange/40 border border-white/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
              title="Visit Official ASH Solutions Website"
            >
              <span>Visit ASH Solutions</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
