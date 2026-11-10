'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  X,
  Shield,
  FileText,
  RefreshCw,
  Download,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

interface LegalSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LegalSidebar({ isOpen, onClose }: LegalSidebarProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  const legalPages = [
    {
      title: 'Privacy Policy',
      href: '/privacy-policy',
      icon: Shield,
      tag: 'Effective Nov 2026',
      description:
        'Information collection, OpenStreetMap GPS telemetry, Razorpay security, and Jio DLT communication.',
      downloadName: 'GO-PARTNER-Privacy-Policy.txt',
      content: `GO PARTNER - PRIVACY POLICY
Effective Date: November 2026

Welcome to GO PARTNER ("Platform", "we", "our", or "us"). We operate a digital technology intermediary platform connecting commercial vehicle owners/drivers with individuals and businesses requiring freight, goods, and cargo transportation services across Mumbai MMR and Maharashtra.

1. INFORMATION WE COLLECT
- Personal & Identity Information: DL, RC, insurance, PUC, GSTIN.
- Precise GPS Geolocation: Real-time driver/customer locations via OpenStreetMap.
- Financial & Transactional: Processed securely via Razorpay; driver bank details for payouts.
- Device Telemetry: OS version, FCM push siren tokens.

2. HOW WE USE INFORMATION
Matching nearest vehicles, fare and toll computation, Jio DLT SMS (GOPNTR).

3. GRIEVANCE OFFICER
Email: support@gopartner.in / grievance@gopartner.in | Helpline: +91 98200 11223
Jurisdiction: Mumbai, Maharashtra, India`,
    },
    {
      title: 'Terms of Service',
      href: '/terms-and-conditions',
      icon: FileText,
      tag: 'IT Act Sec 79 Intermediary',
      description:
        'Intermediary nature, driver partner obligations, 0% commission direct model, and prohibited goods policy.',
      downloadName: 'GO-PARTNER-Terms-and-Conditions.txt',
      content: `GO PARTNER - TERMS OF SERVICE (TERMS & CONDITIONS)
Effective Date: November 2026

1. TECHNOLOGY PLATFORM NATURE: Intermediary under Section 2(1)(w) and Section 79 of IT Act 2000.
2. DRIVER PARTNER OBLIGATIONS: Commercial DL, yellow-plate RC, 0% commission direct trip model.
3. PROHIBITED GOODS POLICY: Strict zero-tolerance against narcotics, weapons, stolen merchandise, hazardous cargo.
4. FARES & TOLLS: 100% of highway tolls (Atal Setu, Bandra-Worli Sea Link) pass directly to drivers.
5. JURISDICTION: Exclusive jurisdiction of competent courts in Mumbai, Maharashtra.`,
    },
    {
      title: 'Cancellation & Refund',
      href: '/refund',
      icon: RefreshCw,
      tag: 'Customer & Driver Rules',
      description:
        '₹0 cancellation fee stages, nominal ₹50 driver fuel compensation, and instant GO Wallet refund timelines.',
      downloadName: 'GO-PARTNER-Cancellation-and-Refund-Policy.txt',
      content: `GO PARTNER - CANCELLATION & REFUND POLICY
Effective Date: November 2026

1. CANCELLATION BY CUSTOMER:
- Before Driver Acceptance: ₹0 Fee (100% free while searching).
- Within 5 Minutes of Acceptance: Free cancellation grace period.
- After Driver Dispatched / Arrived at Pickup: Nominal ₹50 fuel compensation fee credited directly to driver.

2. CANCELLATION BY DRIVER:
- Unjustified cancellations cause automated account strikes and suspension review.
- Customer order is instantly re-routed to next nearest available vehicle.

3. REFUND TIMELINES:
- GO Wallet Deductions: Instant refund (0-60 seconds).
- Online UPI / Debit / NetBanking: 2 to 4 business days via Razorpay to source bank account.`,
    },
  ];

  const handleDownload = (filename: string, content: string) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Header */}
          <div className="p-6 bg-brand-navy text-white flex items-center justify-between border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-orange" />
                <h2 className="text-base font-bold font-heading">Legal &amp; Policy Sidebar</h2>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Transparency &amp; Regulatory Compliance Desk
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close legal sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Document List */}
          <div className="p-6 space-y-5 flex-grow">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
              3 Primary Legal Documents
            </span>

            <div className="space-y-4">
              {legalPages.map((page) => {
                const Icon = page.icon;
                const isActive = pathname === page.href;

                return (
                  <div
                    key={page.href}
                    className={`rounded-lg border p-4 transition-all ${
                      isActive
                        ? 'border-brand-orange bg-orange-50/40 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-md flex items-center justify-center ${
                            isActive
                              ? 'bg-brand-orange text-white'
                              : 'bg-slate-100 text-brand-navy'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm font-bold text-brand-navy">{page.title}</h3>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {page.tag}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {page.description}
                    </p>

                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                      <Link
                        href={page.href}
                        onClick={onClose}
                        className="flex-grow inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-brand-navy hover:bg-brand-orange text-white text-xs font-semibold rounded-md transition-colors"
                      >
                        <span>View Document</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleDownload(page.downloadName, page.content)}
                        className="inline-flex items-center justify-center gap-1 px-3 py-1.5 border border-slate-200 hover:border-slate-300 bg-white text-slate-700 text-xs font-semibold rounded-md transition-colors"
                        title="Download Text File"
                      >
                        <Download className="w-3.5 h-3.5 text-slate-500" />
                        <span>TXT</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Compliance Info Box */}
            <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-brand-navy block">
                Compliance &amp; Grievance Office
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Appointed pursuant to Section 5(1) of the Information Technology (Intermediary Guidelines) Rules:
              </p>
              <div className="pt-1 text-xs space-y-1 text-slate-700">
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-orange" />
                  <a href="mailto:grievance@gopartner.in" className="hover:underline font-semibold">
                    grievance@gopartner.in
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <a href="tel:+919820011223" className="hover:underline font-semibold">
                    +91 98200 11223
                  </a>
                </p>
                <p className="text-[11px] text-slate-500 pt-1">
                  Jurisdiction: Mumbai, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="p-4 bg-slate-100 border-t border-slate-200 text-center text-[11px] text-slate-500">
            GO-PARTNER Digital Logistics &copy; 2026. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
