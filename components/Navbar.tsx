'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  PhoneCall,
  Smartphone,
  Shield,
  FileText,
  RefreshCw,
} from 'lucide-react';
import Logo from './Logo';
import { GOOGLE_PLAY_URL } from '@/lib/site';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isLegalActive =
    pathname.startsWith('/privacy') ||
    pathname.startsWith('/terms') ||
    pathname.startsWith('/refund') ||
    pathname.startsWith('/cancellation');

  return (
    <header
      id="site-top"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" variant="light" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors duration-150 rounded-md whitespace-nowrap ${
                    active
                      ? 'text-brand-navy font-semibold'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                  }`}
                >
                  <span>{item.name}</span>
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-orange rounded-full transition-all" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5">
            {/* Direct Link to Legal Policies (Single Click Navigation, No Hover Effect) */}
            <Link
              href="/privacy-policy"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-md border transition-all whitespace-nowrap cursor-pointer ${
                isLegalActive
                  ? 'bg-brand-navy text-white border-brand-navy shadow-xs'
                  : 'text-slate-700 hover:text-brand-navy hover:bg-slate-100 border-slate-200'
              }`}
              title="View Legal Policies (Privacy, Terms, Refunds)"
            >
              <Shield className="w-3.5 h-3.5 text-brand-orange" />
              <span>Legal Policies</span>
            </Link>

            <a
              href="tel:+919820011223"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-brand-navy px-2 py-1.5 rounded-md hover:bg-slate-100 transition-colors whitespace-nowrap"
              title="Call 24/7 Logistics Dispatch"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-orange" />
              <span>+91 98200 11223</span>
            </a>

            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-xs transition-all hover:shadow-sm whitespace-nowrap"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Get the App</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 bg-brand-orange text-white text-xs font-bold rounded-md"
            >
              App
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-navy hover:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    active
                      ? 'bg-brand-orange/10 text-brand-orange font-semibold border-l-4 border-brand-orange pl-2.5'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Legal Policies Group */}
            <div className="pt-3 border-t border-slate-100 space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 block">
                Legal Policies
              </span>
              <Link
                href="/privacy-policy"
                className={`flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-md ${
                  pathname.startsWith('/privacy')
                    ? 'text-brand-orange font-bold bg-orange-50'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-brand-orange" />
                <span>Privacy Policy</span>
              </Link>
              <Link
                href="/terms-and-conditions"
                className={`flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-md ${
                  pathname.startsWith('/terms')
                    ? 'text-brand-orange font-bold bg-orange-50'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-brand-blue" />
                <span>Terms &amp; Conditions</span>
              </Link>
              <Link
                href="/refund"
                className={`flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-md ${
                  pathname.startsWith('/refund') || pathname.startsWith('/cancellation')
                    ? 'text-brand-orange font-bold bg-orange-50'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
                <span>Cancellation &amp; Refund</span>
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:+919820011223"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:text-brand-navy"
              >
                <PhoneCall className="w-4 h-4 text-brand-orange" />
                <span>24/7 Support: +91 98200 11223</span>
              </a>

              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold uppercase tracking-wider rounded-md transition-all shadow-xs"
              >
                <Smartphone className="w-4 h-4" />
                <span>Get the App</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
