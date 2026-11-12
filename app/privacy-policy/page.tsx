'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, HelpCircle, ArrowRight, CheckCircle2, Shield, MapPin, CreditCard, Smartphone, Server, UserCheck, FileText, RefreshCw } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

export default function PrivacyPolicyPage() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ]);

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'GO-PARTNER Privacy Policy',
    url: `${SITE_URL}/privacy-policy`,
    description:
      'GO-PARTNER Privacy Policy and Data Protection standards under the Information Technology Act 2000.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  const handleDownload = () => {
    const content = `GO PARTNER - PRIVACY POLICY
Effective Date: November 2026

Welcome to GO PARTNER ("Platform", "we", "our", or "us"). We operate a digital technology
intermediary platform connecting commercial vehicle owners/drivers with individuals and businesses
requiring freight, goods, and cargo transportation services across Mumbai MMR and Maharashtra.

1. INFORMATION WE COLLECT

A. Personal & Identity Information
- Account Registration: Full name, mobile phone number, email address, and profile photo.
- Driver Verification Documents: Driving Licence (DL), Commercial Vehicle Registration Certificate (RC),
  Commercial Insurance Certificate, Fitness & PUC details, and Aadhaar/identity proof.
- Corporate Billing Data: Company registered name, GSTIN, and registered billing address.

B. Precise Geolocation Data (GPS)
- Foreground & Background Location: Real-time GPS coordinates of drivers and customers.
- For drivers, background location tracking is active during "Online" shifts.
- Mapping Engine: OpenStreetMap for route distances and toll plaza detection.

C. Financial & Transactional Data
- All online payments processed through Razorpay (RBI-authorized payment aggregator).
- We do not collect or store full credit/debit card numbers or CVV codes.
- Driver bank details collected solely for processing trip earning payouts.

D. Device & Technical Telemetry
- Device model, OS version, network state, unique device identifiers, and Firebase FCM tokens.

2. HOW WE USE YOUR INFORMATION
- To match customers with the nearest eligible commercial delivery driver.
- To send transactional SMS and OTPs via MSG91 (DLT header: GOPNTR).
- To calculate accurate route fares, loading/unloading compensation, and highway tolls.
- To verify driver qualifications under Indian transport safety regulations.
- To detect and prevent fraud, multi-accounting, and off-platform trip bypass.

3. DATA SHARING & THIRD-PARTY PROCESSORS
We do not sell, rent, or trade your personal data. We disclose limited data to:
- Telecom Gateways (MSG91 / Jio DLT): For OTPs and trip confirmation SMS.
- Payment Gateway (Razorpay): For secure UPI, card, and net-banking transactions.
- Push Notification Services (Google Firebase): For real-time audible trip alerts.
- Law Enforcement & Regulatory Authorities: Only upon lawful order under Indian law.

4. DATA SECURITY & STORAGE
All data encrypted using TLS 1.3 / SSL. Data stored securely in PostgreSQL 16 and Redis 7
in-memory clusters with strict firewall isolation (UFW) and IP whitelisting.

5. CONTACT INFORMATION & GRIEVANCE OFFICER
In accordance with the Information Technology Act 2000:
Grievance Officer: Compliance & Grievance Desk, GO PARTNER
Email: contact@gopartnerlogistics.in
Helpline: +91 86527 68171
Jurisdiction: Mumbai, Maharashtra, India

Visit https://gopartner.in/privacy-policy for the latest version of this document.`;

    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'GO-PARTNER-Privacy-Policy.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const sections = [
    { id: 'intro',       number: '01', title: 'Introduction' },
    { id: 'collection',  number: '02', title: 'Information We Collect' },
    { id: 'usage',       number: '03', title: 'How We Use Your Information' },
    { id: 'sharing',     number: '04', title: 'Data Sharing & Third-Party Processors' },
    { id: 'security',    number: '05', title: 'Data Security & Storage' },
    { id: 'grievance',   number: '06', title: 'Contact & Grievance Officer' },
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
            <span className="text-slate-800 font-medium">Privacy Policy</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-brand-navy font-heading tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-1">
                Transparency builds stronger partnerships. Data privacy &amp; compliance standards.
              </p>
            </div>

            {/* Legal Tabs */}
            <div className="flex items-center gap-1 border-b border-slate-200 md:border-none pb-2 md:pb-0">
              <Link
                href="/privacy-policy"
                className="px-4 py-2 text-sm font-bold text-brand-orange border-b-2 border-brand-orange -mb-2 md:mb-0"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors"
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
                      className="flex items-center justify-between px-3 py-2 text-xs font-bold rounded-md bg-brand-orange text-white shadow-xs"
                    >
                      <span className="flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5" />
                        <span>Privacy Policy</span>
                      </span>
                      <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">Active</span>
                    </Link>

                    <Link
                      href="/terms-and-conditions"
                      className="flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-md text-slate-700 hover:text-brand-navy hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        <span>Terms &amp; Conditions</span>
                      </span>
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
                        <span>Download Full Policy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-5 p-4 rounded-md bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-xs mb-1">
                    <HelpCircle className="w-4 h-4 text-brand-blue" />
                    <span>Have Questions?</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">
                    Our compliance team is here to assist with any data protection or privacy questions.
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
              <div className="p-4 bg-blue-50 border-l-4 border-brand-blue rounded-r-md text-xs text-blue-900 leading-relaxed">
                <span className="font-bold block mb-1">Effective Date: November 2026</span>
                This Privacy Policy applies to GO PARTNER mobile applications (Customer App &amp; Driver App)
                and website, governing the collection, use, processing, storage, and protection of personal
                and location data in accordance with the Information Technology Act, 2000 and applicable
                Indian data protection regulations.
              </div>

              {/* 01 Introduction */}
              <div id="intro" className="scroll-mt-24 space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">01.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">Introduction</h2>
                </div>
                <p className="text-sm leading-relaxed">
                  Welcome to GO PARTNER ("Platform", "we", "our", or "us"). We operate a digital technology
                  intermediary platform connecting commercial vehicle owners and drivers with individuals and
                  businesses requiring freight, goods, and cargo transportation services across Mumbai MMR and Maharashtra.
                </p>
                <p className="text-sm leading-relaxed">
                  This Privacy Policy explains how we collect, use, process, store, and protect your personal
                  and location data when you use our mobile applications and website. By registering or using
                  the Platform, you agree to the terms of this Privacy Policy.
                </p>
              </div>

              {/* 02 Information We Collect */}
              <div id="collection" className="scroll-mt-24 space-y-5 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">02.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">Information We Collect</h2>
                </div>

                {/* 2A */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-brand-orange shrink-0" />
                    <p className="text-sm font-bold text-slate-800">A. Personal &amp; Identity Information</p>
                  </div>
                  <ul className="list-disc pl-6 space-y-1.5 text-xs text-slate-600 leading-relaxed">
                    <li>
                      <strong>Account Registration:</strong> Full name, mobile phone number, email address, and profile photo.
                    </li>
                    <li>
                      <strong>Driver Verification Documents:</strong> Driving Licence (DL), Commercial Vehicle Registration
                      Certificate (RC), Commercial Insurance Certificate, Fitness &amp; PUC details, and Aadhaar / identity proof.
                    </li>
                    <li>
                      <strong>Corporate Billing Data:</strong> Company registered name, GSTIN (Goods and Services Tax
                      Identification Number), and registered billing address.
                    </li>
                  </ul>
                </div>

                {/* 2B */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                    <p className="text-sm font-bold text-slate-800">B. Precise Geolocation Data (GPS)</p>
                  </div>
                  <ul className="list-disc pl-6 space-y-1.5 text-xs text-slate-600 leading-relaxed">
                    <li>
                      <strong>Foreground &amp; Background Location:</strong> We collect real-time GPS coordinates of drivers
                      and customers. For drivers, background location tracking is active during "Online" shifts to calculate
                      pickup proximity, dispatch nearby orders, calculate route distance, and display live delivery tracking
                      to the customer.
                    </li>
                    <li>
                      <strong>Mapping Engine:</strong> We utilize OpenStreetMap to compute route distances and detect
                      municipal/highway toll plazas.
                    </li>
                  </ul>
                </div>

                {/* 2C */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-brand-orange shrink-0" />
                    <p className="text-sm font-bold text-slate-800">C. Financial &amp; Transactional Data</p>
                  </div>
                  <ul className="list-disc pl-6 space-y-1.5 text-xs text-slate-600 leading-relaxed">
                    <li>
                      All online payments and wallet top-ups are processed through <strong>Razorpay</strong> (RBI-authorized
                      payment aggregator). We do not collect or store full credit/debit card numbers or CVV codes.
                    </li>
                    <li>
                      Driver bank details (Account number, IFSC code, UPI ID) are collected solely for processing trip
                      earning payouts and wallet withdrawals.
                    </li>
                  </ul>
                </div>

                {/* 2D */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-brand-orange shrink-0" />
                    <p className="text-sm font-bold text-slate-800">D. Device &amp; Technical Telemetry</p>
                  </div>
                  <ul className="list-disc pl-6 space-y-1.5 text-xs text-slate-600 leading-relaxed">
                    <li>
                      Device model, operating system version, network state, unique device identifiers, and
                      Firebase Cloud Messaging (FCM) registration tokens used exclusively for sending high-priority
                      trip sirens and dispatch alerts.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 03 How We Use Your Information */}
              <div id="usage" className="scroll-mt-24 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">03.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">How We Use Your Information</h2>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-xs text-slate-600 leading-relaxed">
                  <li>To match customers with the nearest eligible commercial delivery driver.</li>
                  <li>
                    To send transactional SMS and one-time passwords (OTP) via our approved Jio DLT telecom
                    pipeline and MSG91 header <strong>(GOPNTR)</strong>.
                  </li>
                  <li>
                    To calculate accurate route fares, loading/unloading compensation, and automatic highway
                    tolls (e.g. Bandra-Worli Sea Link, Atal Setu, Mumbai-Pune Expressway).
                  </li>
                  <li>
                    To verify driver qualifications and roadworthiness under Indian transport safety regulations.
                  </li>
                  <li>
                    To detect and prevent fraud, multi-accounting, and off-platform trip bypass.
                  </li>
                </ul>
              </div>

              {/* 04 Data Sharing */}
              <div id="sharing" className="scroll-mt-24 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">04.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">Data Sharing &amp; Third-Party Processors</h2>
                </div>
                <p className="text-sm leading-relaxed">
                  We do not sell, rent, or trade your personal data. We disclose limited data strictly
                  necessary for platform operations to the following processors:
                </p>
                <div className="space-y-3">
                  {[
                    {
                      label: 'Telecom Gateways (MSG91 / Jio DLT)',
                      desc: 'For delivery of login OTPs and trip confirmation SMS under approved DLT header GOPNTR.',
                    },
                    {
                      label: 'Payment Gateway (Razorpay)',
                      desc: 'For secure UPI, card, and net-banking transactions. PCI-DSS compliant. No card data stored by us.',
                    },
                    {
                      label: 'Push Notification Services (Google Firebase)',
                      desc: 'For sending real-time audible trip alerts and dispatch notifications to driver and customer apps.',
                    },
                    {
                      label: 'Law Enforcement & Regulatory Authorities',
                      desc: 'Only upon receipt of a lawful order, subpoena, or statutory requirement under Indian law.',
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 p-3 rounded-md bg-slate-50 border border-slate-100">
                      <Shield className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">{item.label}</p>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 05 Data Security */}
              <div id="security" className="scroll-mt-24 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">05.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">Data Security &amp; Storage</h2>
                </div>
                <p className="text-sm leading-relaxed">
                  All data transmitted between mobile devices and our servers is encrypted using{' '}
                  <strong>Transport Layer Security (TLS 1.3 / SSL)</strong>. Data is stored securely in:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { icon: Server, label: 'PostgreSQL 16', desc: 'Primary relational database with encrypted storage' },
                    { icon: Server, label: 'Redis 7 Clusters', desc: 'In-memory session and cache layer' },
                    { icon: Shield, label: 'UFW + IP Whitelisting', desc: 'Strict firewall isolation on all server nodes' },
                  ].map((item) => (
                    <div key={item.label} className="p-3 rounded-md border border-slate-200 bg-white text-center">
                      <item.icon className="w-5 h-5 text-brand-orange mx-auto mb-2" />
                      <p className="text-xs font-bold text-slate-800">{item.label}</p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 06 Grievance Officer */}
              <div id="grievance" className="scroll-mt-24 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">06.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">
                    Contact Information &amp; Grievance Officer
                  </h2>
                </div>
                <p className="text-sm leading-relaxed">
                  In accordance with the <strong>Information Technology Act 2000</strong> and rules made thereunder,
                  we have appointed a Grievance Officer for data protection matters:
                </p>
                <div className="bg-slate-50 p-5 rounded-md border border-slate-200 space-y-2 text-xs">
                  <p className="font-bold text-brand-navy text-sm">Compliance &amp; Grievance Desk</p>
                  <p className="text-slate-700 font-semibold">GO PARTNER</p>
                  <div className="pt-2 space-y-1.5">
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
        </div>
      </section>
    </div>
  );
}
