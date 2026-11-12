'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, HelpCircle, ArrowRight, CheckCircle2, AlertTriangle, Truck, Ban, IndianRupee, Scale, Shield, FileText, RefreshCw } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

export default function TermsAndConditionsPage() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  ]);

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'GO-PARTNER Terms and Conditions',
    url: `${SITE_URL}/terms-and-conditions`,
    description:
      'GO-PARTNER Terms and Conditions, Commercial Transportation Agreement, and Intermediary Guidelines under the Information Technology Act 2000.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  const handleDownload = () => {
    const content = `GO PARTNER - TERMS OF SERVICE (TERMS & CONDITIONS)
Effective Date: November 2026

1. TECHNOLOGY PLATFORM NATURE
GO PARTNER is a digital technology platform acting as an intermediary as defined under Section 2(1)(w)
and Section 79 of the Information Technology Act, 2000. GO PARTNER does not provide transportation services
directly, does not function as a common carrier, and does not own commercial transport vehicles. All
transportation services are rendered by independent commercial driver-partners.

2. DRIVER PARTNER OBLIGATIONS
- Drivers must hold an active commercial driving licence (Transport / LMV-TR / HMV), yellow-plate
  commercial registration certificate (RC), valid commercial insurance, and state goods carriage permit.
- Drivers agree to operate under the 0% commission direct trip model.
- Drivers must adhere to safety rules, speed limits, and no-entry guidelines across Mumbai MMR.
- Drivers warrant that they have no criminal convictions and hold valid vehicle fitness certificates.

3. PROHIBITED GOODS POLICY
Customers strictly warrant that cargo does NOT contain: narcotics, unlicensed firearms, stolen property,
radioactive waste, corrosive acids, or any articles prohibited under Indian law.
Drivers retain the absolute right to inspect outer packaging and refuse suspicious cargo.

4. FARES, TOLLS & PAYMENTS
- Fares calculated dynamically based on vehicle category, travel distance, loading/unloading, and tolls.
- All highway/expressway tolls added 100% to the driver's payout without deduction.
- Customers may pay via Razorpay UPI/Online Gateway or Cash to driver upon unloading.

5. LIMITATION OF LIABILITY
GO PARTNER's maximum aggregate liability shall be limited to the booking fee collected for the trip.

6. GOVERNING LAW & DISPUTE RESOLUTION
Governed by the laws of India. Exclusive jurisdiction: competent courts in Mumbai, Maharashtra.

Visit https://gopartner.in/terms for the latest version of this document.`;

    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'GO-PARTNER-Terms-and-Conditions.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const sections = [
    { id: 'platform',    number: '01', title: 'Technology Platform Nature' },
    { id: 'driver',      number: '02', title: 'Driver Partner Obligations' },
    { id: 'prohibited',  number: '03', title: 'Prohibited Goods Policy' },
    { id: 'fares',       number: '04', title: 'Fares, Tolls & Payments' },
    { id: 'liability',   number: '05', title: 'Limitation of Liability' },
    { id: 'governing',   number: '06', title: 'Governing Law & Disputes' },
  ];

  return (
    <div className="w-full flex flex-col bg-brand-light-bg/40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* HERO HEADER */}
      <section className="bg-white border-b border-slate-200 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-navy">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Terms &amp; Conditions</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-brand-navy font-heading tracking-tight">
                Terms &amp; Conditions
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-1">
                Transparency builds stronger partnerships. Commercial transportation agreement.
              </p>
            </div>

            {/* Legal Tabs */}
            <div className="flex items-center gap-1 border-b border-slate-200 md:border-none pb-2 md:pb-0">
              <Link
                href="/privacy-policy"
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="px-4 py-2 text-sm font-bold text-brand-orange border-b-2 border-brand-orange -mb-2 md:mb-0"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/refund"
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors"
              >
                Cancellation &amp; Refunds
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-subtle sticky top-24">
                {/* 3 Legal Documents Switcher */}
                <div className="mb-6 pb-5 border-b border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2.5">
                    Legal &amp; Compliance Pages
                  </span>
                  <div className="space-y-1.5">
                    <Link
                      href="/privacy-policy"
                      className="flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-md text-slate-700 hover:text-brand-navy hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-slate-400" />
                        <span>Privacy Policy</span>
                      </span>
                    </Link>

                    <Link
                      href="/terms-and-conditions"
                      className="flex items-center justify-between px-3 py-2 text-xs font-bold rounded-md bg-brand-orange text-white shadow-xs"
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Terms &amp; Conditions</span>
                      </span>
                      <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">Active</span>
                    </Link>

                    <Link
                      href="/refund"
                      className="flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-md text-slate-700 hover:text-brand-navy hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                        <span>Cancellation &amp; Refund</span>
                      </span>
                    </Link>
                  </div>
                </div>

                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-3">
                  Document Sections
                </span>
                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-brand-orange hover:bg-slate-50 rounded-md transition-colors"
                    >
                      <span className="font-mono text-slate-400 text-[11px]">{sec.number}</span>
                      <span>{sec.title}</span>
                    </a>
                  ))}
                </nav>

                <div className="pt-5 mt-5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
                  >
                    {downloadSuccess ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Downloaded</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Terms (TXT)</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-5 p-4 rounded-md bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-xs mb-1">
                    <HelpCircle className="w-4 h-4 text-brand-blue" />
                    <span>Questions about Terms?</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">
                    Our team can assist with onboarding queries, driver partner agreements, and customer bookings.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-orange transition-colors"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8 bg-white rounded-lg p-8 sm:p-12 border border-slate-200 shadow-card space-y-10 text-slate-700">

              {/* Notice */}
              <div className="p-4 bg-orange-50/80 border-l-4 border-brand-orange rounded-r-md text-xs text-orange-950 leading-relaxed">
                <span className="font-bold block mb-1">Agreement Notice: Effective November 2026</span>
                By accessing the GO PARTNER platform or using our logistics services, you acknowledge and
                agree to these Terms of Service. These terms are governed by the laws of India and subject
                to the exclusive jurisdiction of courts in Mumbai, Maharashtra.
              </div>

              {/* 01 Platform Nature */}
              <div id="platform" className="scroll-mt-24 space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">01.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">Technology Platform Nature</h2>
                </div>
                <p className="text-sm leading-relaxed">
                  GO PARTNER is a digital technology platform acting as an intermediary as defined under{' '}
                  <strong>Section 2(1)(w) and Section 79 of the Information Technology Act, 2000</strong>.
                  GO PARTNER does not provide transportation services directly, does not function as a common
                  carrier, and does not own commercial transport vehicles.
                </p>
                <p className="text-sm leading-relaxed">
                  All transportation services are rendered by independent commercial driver-partners who have
                  agreed to our Driver Partner Code of Conduct and registered their vehicles and credentials
                  on the platform.
                </p>
              </div>

              {/* 02 Driver Obligations */}
              <div id="driver" className="scroll-mt-24 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">02.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">Driver Partner Obligations</h2>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Truck className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>All registered driver-partners must comply with the following requirements:</span>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-xs text-slate-600 leading-relaxed">
                  <li>
                    Hold an active <strong>commercial driving licence</strong> (Transport / LMV-TR / HMV category),
                    yellow-plate commercial registration certificate (RC), valid commercial insurance, and a valid
                    state goods carriage permit.
                  </li>
                  <li>
                    Agree to operate under the <strong>0% commission direct trip model</strong>. All fares collected
                    belong to the driver. GO PARTNER earns revenue via subscription and platform access fees only.
                  </li>
                  <li>
                    Adhere to all applicable safety rules, posted speed limits, and no-entry zone guidelines
                    across Mumbai MMR and Maharashtra roads.
                  </li>
                  <li>
                    Warrant truthfully that they have no criminal convictions and hold valid vehicle fitness
                    certificates and Pollution Under Control (PUC) certificates.
                  </li>
                </ul>
              </div>

              {/* 03 Prohibited Goods */}
              <div id="prohibited" className="scroll-mt-24 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">03.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">Prohibited Goods Policy (Customer Declaration)</h2>
                </div>
                <p className="text-sm leading-relaxed">
                  Customers strictly warrant that cargo handed over for transport does <strong>NOT</strong> contain
                  any illegal, restricted, or hazardous items, including but not limited to:
                </p>
                <div className="p-4 rounded-md bg-red-50 border border-red-100 space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Ban className="w-4 h-4 text-red-600 shrink-0" />
                    <p className="text-xs font-bold text-red-700 uppercase tracking-wide">Strictly Prohibited Cargo</p>
                  </div>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-red-800 leading-relaxed">
                    <li>Narcotics, psychotropic drugs, or banned chemical substances.</li>
                    <li>Unlicensed firearms, ammunition, military gear, or explosive pyrotechnics.</li>
                    <li>Stolen property, looted merchandise, or smuggled contraband.</li>
                    <li>Radioactive waste, corrosive acids, or hazardous chemicals prohibited for road transit.</li>
                    <li>Any articles prohibited under Indian Central or Maharashtra State laws.</li>
                  </ul>
                </div>
                <div className="p-3 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <strong>Right of Inspection:</strong> Drivers retain the absolute right to inspect outer packaging
                  and refuse any suspicious or undeclared cargo without penalty.
                </div>
              </div>

              {/* 04 Fares */}
              <div id="fares" className="scroll-mt-24 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">04.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">Fares, Tolls &amp; Payments</h2>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <IndianRupee className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Fare structure and payment terms:</span>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-xs text-slate-600 leading-relaxed">
                  <li>
                    Fares are calculated <strong>dynamically</strong> based on vehicle category, travel distance,
                    loading/unloading labour selection, and applicable bridge/expressway tolls.
                  </li>
                  <li>
                    All highway/expressway tolls (e.g. <strong>Bandra-Worli Sea Link, Atal Setu / MTHL,
                    Mumbai-Pune Expressway</strong>) are added 100% to the driver's payout without any
                    deduction by GO PARTNER.
                  </li>
                  <li>
                    Customers may pay via <strong>Razorpay UPI / Online Gateway</strong> or directly in
                    <strong> Cash to the driver</strong> upon unloading and cargo handover.
                  </li>
                </ul>
              </div>

              {/* 05 Liability */}
              <div id="liability" className="scroll-mt-24 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">05.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">Limitation of Liability</h2>
                </div>
                <div className="p-4 rounded-md bg-amber-50 border border-amber-100 flex gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-amber-900 leading-relaxed">
                    GO PARTNER shall not be liable for indirect, incidental, punitive, or consequential
                    damages resulting from: goods damage due to improper customer packaging; force majeure
                    events (floods, strikes, road closures); or driver transit delays. In all circumstances,
                    <strong> GO PARTNER's maximum aggregate liability shall be limited to the booking fee
                    collected for the specific trip</strong>.
                  </p>
                </div>
              </div>

              {/* 06 Governing Law */}
              <div id="governing" className="scroll-mt-24 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">06.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">Governing Law &amp; Dispute Resolution</h2>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Scale className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Indian law applies to all matters.</span>
                </div>
                <p className="text-sm leading-relaxed">
                  These Terms are governed by and construed in accordance with the <strong>laws of India</strong>.
                  All disputes, claims, or controversies arising out of or relating to these Terms or use of
                  the Platform shall be subject to the exclusive jurisdiction of the competent courts in
                  <strong> Mumbai, Maharashtra</strong>.
                </p>
                <div className="bg-slate-50 p-4 rounded-md border border-slate-200 text-xs space-y-1.5">
                  <p className="font-bold text-brand-navy">GO PARTNER Legal &amp; Operations</p>
                  <p>
                    <span className="text-slate-500 font-medium">Email: </span>
                    <a href="mailto:contact@gopartnerlogistics.in" className="text-brand-orange underline underline-offset-2">
                      contact@gopartnerlogistics.in
                    </a>
                  </p>
                  <p>
                    <span className="text-slate-500 font-medium">Helpline: </span>
                    <a href="tel:+918652768171" className="text-brand-navy font-semibold">
                      +91 86527 68171
                    </a>
                  </p>
                  <p>
                    <span className="text-slate-500 font-medium">Jurisdiction: </span>
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
