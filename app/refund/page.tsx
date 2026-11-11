'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Download,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  IndianRupee,
  ShieldAlert,
  RefreshCw,
  Truck,
  Wallet,
  AlertCircle,
  CreditCard,
  Ban,
  UserCheck,
  Shield,
  FileText,
} from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

export default function RefundPage() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Cancellation & Refunds', path: '/refund' },
  ]);

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'GO-PARTNER Cancellation and Refund Policy',
    url: `${SITE_URL}/refund`,
    description:
      'GO-PARTNER Cancellation and Refund Policy, driver fuel compensation rules, and Razorpay settlement timelines.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  const handleDownload = () => {
    const content = `GO PARTNER - CANCELLATION & REFUND POLICY
Effective Date: November 2026
URL: https://gopartner.in/refund

1. CANCELLATION BY CUSTOMER
- Before Driver Acceptance: ₹0 Cancellation Fee. Customers may cancel freely at any time while the app status indicates "Searching for Driver".
- After Driver Acceptance (Within 5 Minutes): Free cancellation. No fee is levied if canceled within 5 minutes of driver assignment.
- After Driver Dispatched (> 5 Minutes / Driver Arrived at Pickup): A nominal fuel compensation fee of ₹50 is levied to compensate the driver for fuel consumed and travel time incurred.

2. CANCELLATION BY DRIVER
- Drivers who accept a trip request are expected to fulfill the service.
- Unjustified cancellations cause automated account strikes in the dispatch system.
- Multiple strikes result in temporary dispatch suspension or review under the Driver Partner Agreement.
- Instant Auto-Reassignment: If a driver cancels, the customer's request is instantly re-routed to the next nearest available vehicle without any penalty or added fee to the customer.

3. REFUND TIMELINES & METHODS
- GO Wallet Deductions: Refunded instantly to the customer's GO Wallet balance.
- Online UPI / Debit Cards / NetBanking: Processed securely via Razorpay directly back to the original source bank account within 2 to 4 business days.
- Cash on Delivery (COD) Trips: Because payment is settled in cash only upon cargo unloading, no monetary refund is necessary.

4. GRIEVANCE & SUPPORT CONTACT
Compliance & Grievance Desk, GO PARTNER
Email: support@gopartner.in / grievance@gopartner.in
Helpline: +91 98200 11223
Jurisdiction: Mumbai, Maharashtra, India`;

    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'GO-PARTNER-Cancellation-and-Refund-Policy.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const sections = [
    { id: 'customer-cancel', number: '01', title: 'Cancellation by Customer' },
    { id: 'driver-cancel',   number: '02', title: 'Cancellation by Driver' },
    { id: 'refund-timeline', number: '03', title: 'Refund Methods & Timelines' },
    { id: 'disputes',        number: '04', title: 'Fare Disputes & Adjustments' },
    { id: 'support',         number: '05', title: 'Support & Grievance Desk' },
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

      {/* 1. HERO HEADER */}
      <section className="bg-white border-b border-slate-200 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-navy">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Cancellation &amp; Refunds</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-brand-navy font-heading tracking-tight">
                Cancellation &amp; Refund Policy
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-1">
                Transparency builds stronger partnerships. Clear trip cancellation guidelines &amp; refund timelines.
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
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/refund"
                className="px-4 py-2 text-sm font-bold text-brand-orange border-b-2 border-brand-orange -mb-2 md:mb-0"
              >
                Cancellation &amp; Refunds
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT BODY */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Sidebar Table of Contents (lg: 4 cols) */}
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
                      className="flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-md text-slate-700 hover:text-brand-navy hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        <span>Terms &amp; Conditions</span>
                      </span>
                    </Link>

                    <Link
                      href="/refund"
                      className="flex items-center justify-between px-3 py-2 text-xs font-bold rounded-md bg-brand-orange text-white shadow-xs"
                    >
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Cancellation &amp; Refund</span>
                      </span>
                      <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">Active</span>
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

                {/* Download Text Button */}
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
                        <span>Download Policy (TXT)</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Need Clarification Card */}
                <div className="mt-5 p-4 rounded-md bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-xs mb-1">
                    <HelpCircle className="w-4 h-4 text-brand-blue" />
                    <span>Cancellation Inquiries</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">
                    Have questions about an applied cancellation fee or trip refund? Our 24/7 support desk is ready to help.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-orange transition-colors"
                  >
                    <span>Contact Support</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Policy Details (lg: 8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-lg p-8 sm:p-12 border border-slate-200 shadow-card space-y-10 text-slate-700">
              {/* Notice Box */}
              <div className="p-4 bg-orange-50/80 border-l-4 border-brand-orange rounded-r-md text-xs text-orange-950 leading-relaxed">
                <span className="font-bold block mb-1">Policy Scope &amp; Purpose: Effective November 2026</span>
                This Cancellation and Refund Policy applies to all on-demand and scheduled commercial goods transportation
                bookings placed through the GO PARTNER customer mobile applications and web platform across Mumbai MMR and
                Maharashtra. It balances fairness to shippers with fair compensation for independent commercial driver-partners.
              </div>

              {/* 01 Cancellation by Customer */}
              <div id="customer-cancel" className="scroll-mt-24 space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">01.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">
                    Cancellation by Customer
                  </h2>
                </div>
                <p className="text-sm leading-relaxed">
                  We understand that logistics schedules and cargo dispatch timings can change unpredictably.
                  Our cancellation policy is structured into three transparent time-based tiers:
                </p>

                {/* 3 Tier Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {/* Tier 1 */}
                  <div className="p-4 rounded-md border border-emerald-200 bg-emerald-50/50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                          Stage 1
                        </span>
                        <span className="text-base font-black text-emerald-700">₹0 Fee</span>
                      </div>
                      <h3 className="text-xs font-bold text-slate-800 mb-1">Before Driver Acceptance</h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Customers may cancel freely at any time while the application is in the <strong>&quot;Searching for Driver&quot;</strong> status.
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-emerald-200/60 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>100% Free Cancellation</span>
                    </div>
                  </div>

                  {/* Tier 2 */}
                  <div className="p-4 rounded-md border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800">
                          Stage 2
                        </span>
                        <span className="text-base font-black text-blue-700">₹0 Fee</span>
                      </div>
                      <h3 className="text-xs font-bold text-slate-800 mb-1">Within 5 Minutes of Acceptance</h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Free cancellation grace period applies within <strong>5 minutes</strong> of a commercial driver accepting your trip.
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-blue-200/60 flex items-center gap-1.5 text-[11px] text-blue-700 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>5-Minute Grace Window</span>
                    </div>
                  </div>

                  {/* Tier 3 */}
                  <div className="p-4 rounded-md border border-amber-200 bg-amber-50/50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900">
                          Stage 3
                        </span>
                        <span className="text-base font-black text-amber-800">₹50 Fee</span>
                      </div>
                      <h3 className="text-xs font-bold text-slate-800 mb-1">Driver Dispatched / Arrived</h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        If canceled <strong>after 5 minutes</strong> or after the driver has reached the designated pickup dock.
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-amber-200/60 flex items-center gap-1.5 text-[11px] text-amber-800 font-medium">
                      <Truck className="w-3.5 h-3.5" />
                      <span>Direct Fuel Compensation</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-600 leading-relaxed mt-2">
                  <strong>Why is a ₹50 fee applied?</strong> Under GO PARTNER&apos;s 0% commission direct driver model,
                  the ₹50 fee is credited entirely to the assigned driver partner to cover fuel expended and travel time
                  invested heading towards your location.
                </div>
              </div>

              {/* 02 Cancellation by Driver */}
              <div id="driver-cancel" className="scroll-mt-24 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">02.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">
                    Cancellation by Driver
                  </h2>
                </div>
                <p className="text-sm leading-relaxed">
                  Reliability is the foundation of the GO PARTNER logistics network. When a driver accepts a freight booking,
                  they are expected to complete the assignment in full adherence to our service level agreement:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-md bg-slate-50 border border-slate-200">
                    <ShieldAlert className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-800">Automated Strike Mechanism</p>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Unjustified driver cancellations trigger automated system strikes on the driver&apos;s account.
                        Drivers accumulating repeated strikes within a rolling 7-day period face temporary dispatch suspension
                        and mandatory fleet compliance review.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-md bg-slate-50 border border-slate-200">
                    <RefreshCw className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-800">Zero-Impact Customer Re-Routing</p>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        If an assigned driver cancels due to an unforeseen breakdown or emergency, the customer order is
                        <strong> instantly re-routed</strong> to the next nearest eligible commercial vehicle without any fee,
                        price fluctuation, or manual action needed by the shipper.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 03 Refund Timelines */}
              <div id="refund-timeline" className="scroll-mt-24 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">03.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">
                    Refund Methods &amp; Processing Timelines
                  </h2>
                </div>
                <p className="text-sm leading-relaxed">
                  Whenever an order qualifies for a full or partial refund (for instance, following a pre-paid cancellation
                  prior to dispatch or a fare adjustment), funds are returned based on the original payment method:
                </p>

                {/* Refund Table */}
                <div className="border border-slate-200 rounded-md overflow-hidden">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <th className="py-2.5 px-4">Payment Method</th>
                        <th className="py-2.5 px-4">Refund Destination</th>
                        <th className="py-2.5 px-4">Settlement Window</th>
                        <th className="py-2.5 px-4">Processing Partner</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-800 flex items-center gap-2">
                          <Wallet className="w-4 h-4 text-brand-orange" />
                          <span>GO Wallet Balance</span>
                        </td>
                        <td className="py-3 px-4">Customer In-App Wallet</td>
                        <td className="py-3 px-4 text-emerald-700 font-bold">Instant (0-60 Seconds)</td>
                        <td className="py-3 px-4">GO PARTNER Core Engine</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-800 flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-brand-blue" />
                          <span>UPI / Debit Cards / NetBanking</span>
                        </td>
                        <td className="py-3 px-4">Original Source Bank Account</td>
                        <td className="py-3 px-4 text-slate-800 font-bold">2 to 4 Business Days</td>
                        <td className="py-3 px-4">Razorpay (RBI-Authorized)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-800 flex items-center gap-2">
                          <IndianRupee className="w-4 h-4 text-slate-500" />
                          <span>Cash on Delivery (COD)</span>
                        </td>
                        <td className="py-3 px-4">N/A (Paid only upon delivery)</td>
                        <td className="py-3 px-4">Immediate</td>
                        <td className="py-3 px-4">Driver Partner Direct</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-100 rounded-md text-xs text-blue-900 leading-relaxed">
                  <strong>Razorpay Gateway Processing:</strong> Bank processing times can vary depending on clearing house
                  schedules (NEFT/IMPS) and banking holidays. If a refund is not reflected after 4 working days, our support
                  desk can issue the formal Razorpay RRN / UTR reference number for easy bank tracing.
                </div>
              </div>

              {/* 04 Fare Disputes */}
              <div id="disputes" className="scroll-mt-24 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">04.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">
                    Fare Disputes &amp; Adjustments
                  </h2>
                </div>
                <p className="text-sm leading-relaxed">
                  If you believe a cancellation fee was levied erroneously (such as if a driver marked &quot;Arrived&quot;
                  while significantly away from the GPS pickup point, or if significant driver delay prompted the cancellation),
                  you may raise a dispute within <strong>48 hours</strong> of the trip timestamp.
                </p>
                <div className="bg-slate-50 p-4 rounded-md border border-slate-200 text-xs space-y-2 text-slate-600">
                  <p className="font-semibold text-slate-800">Our Dispute Review Protocol:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Our team reviews the vehicle GPS telemetry logs and timestamp records.</li>
                    <li>If driver delay exceeding 15 minutes past ETA is verified, any fee levied is reversed immediately.</li>
                    <li>Reversed amounts are credited directly to your GO Wallet with notification via SMS.</li>
                  </ul>
                </div>
              </div>

              {/* 05 Support & Grievance Desk */}
              <div id="support" className="scroll-mt-24 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-orange">05.</span>
                  <h2 className="text-xl font-bold text-brand-navy font-heading">
                    Support &amp; Grievance Desk
                  </h2>
                </div>
                <p className="text-sm leading-relaxed">
                  For trip cancellations, refund status queries, or escalation requests, reach our dedicated compliance desk:
                </p>
                <div className="bg-slate-50 p-5 rounded-md border border-slate-200 space-y-2 text-xs">
                  <p className="font-bold text-brand-navy text-sm">Customer Support &amp; Grievance Office</p>
                  <p className="text-slate-700 font-semibold">GO PARTNER Logistics Network</p>
                  <div className="pt-2 space-y-1.5">
                    <p>
                      <span className="text-slate-500 font-medium">Customer Support: </span>
                      <a href="mailto:support@gopartner.in" className="text-brand-orange underline underline-offset-2">
                        support@gopartner.in
                      </a>
                    </p>
                    <p>
                      <span className="text-slate-500 font-medium">Grievance Officer: </span>
                      <a href="mailto:grievance@gopartner.in" className="text-brand-orange underline underline-offset-2">
                        grievance@gopartner.in
                      </a>
                    </p>
                    <p>
                      <span className="text-slate-500 font-medium">Helpline: </span>
                      <a href="tel:+919820011223" className="text-brand-navy font-semibold">
                        +91 98200 11223
                      </a>
                    </p>
                    <p>
                      <span className="text-slate-500 font-medium">Operating Hours: </span>
                      24 Hours / 7 Days Active Dispatch &amp; Support
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
