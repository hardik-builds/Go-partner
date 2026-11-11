import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  Truck,
  Clock,
  ArrowRight,
  ClipboardList,
  Users,
  Navigation,
  PackageCheck,
  ThermometerSnowflake,
  Warehouse,
  ChevronRight,
  CheckCircle2,
  Headphones,
  FileCheck,
  Smartphone,
} from 'lucide-react';
import { GOOGLE_PLAY_URL, SITE_URL } from '@/lib/site';
import { constructMetadata, getServicesSchema } from '@/lib/seo';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = constructMetadata({
  title: 'GO-PARTNER | Reliable Goods Transportation & Freight Logistics',
  description:
    'Book reliable goods transportation and freight logistics with GO-PARTNER. Verified commercial carrier network, Full Truckload (FTL), Part Truckload (LTL), reefer cold chain, and warehousing across Mumbai MMR and Maharashtra.',
  path: '/',
  image: '/images/hero-indian-partner.jpg',
  imageAlt: 'GO-PARTNER Commercial Transport Fleet and Driver Partner',
  keywords: [
    'goods transportation services',
    'freight logistics services',
    'commercial cargo transportation',
    'business goods delivery',
    'full truckload transportation',
    'less than truckload services',
    'part truckload PTL',
    'warehousing and logistics',
    'Tata Ace goods transport',
    'Mumbai freight transport',
    'Maharashtra logistics carrier',
    'GO-PARTNER',
  ],
});

export default function HomePage() {
  const servicesJsonLd = getServicesSchema();

  return (
    <div className="w-full flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white pt-8 pb-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (lg: 7 cols) */}
            <ScrollReveal direction="up" delay={0.04} distance={14} className="lg:col-span-6 xl:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-[11px] font-bold uppercase tracking-widest text-slate-700">
                <span>People. Vehicles. Possibilities.</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy font-heading tracking-tight leading-[1.15]">
                Reliable Goods Transportation, <br className="hidden sm:inline" />
                <span className="text-brand-orange">From Pickup to Delivery</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                At GO-PARTNER, we connect businesses with trusted transport partners to move goods
                safely, efficiently, and on schedule across industrial corridors and city routes.
              </p>

              {/* Dual Action CTAs (Strictly clean rounded-md buttons, no pill shapes) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold uppercase tracking-wider rounded-md shadow-xs transition-all hover:shadow-md btn-interactive"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-brand-navy border border-slate-300 text-sm font-bold uppercase tracking-wider rounded-md shadow-xs transition-colors btn-interactive"
                >
                  <span>Book in the App</span>
                </a>
              </div>

              {/* Value Propositions / Trust Indicators (No fake counters or numbers) */}
              <div className="pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Trusted Network
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">Verified carrier fleet</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-orange-50 text-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Nationwide Reach
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">Key industrial lanes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      On-Time Delivery
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">Reliable dispatch protocols</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Hero Image Card (lg: 6 cols) */}
            <ScrollReveal direction="up" delay={0.14} distance={14} className="lg:col-span-6 xl:col-span-6 relative">
              <div className="relative rounded-lg overflow-hidden border border-slate-200/80 shadow-card bg-slate-900 group">
                {/* Authentic Indian Commercial Driver & Fleet Image */}
                <div className="relative w-full h-[360px] sm:h-[440px]">
                  <Image
                    src="/images/hero-indian-partner.jpg"
                    alt="Proud Indian Commercial Driver with Tata Ace Chhota Hathi - GO-PARTNER Fleet"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Slogan Pill Badge Overlay */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-md px-3.5 py-1.5 shadow-sm text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">
                    हर सफ़र का पार्टनर
                  </span>
                  <span className="text-xs font-extrabold text-brand-orange tracking-wide">
                    Trusted Fleet
                  </span>
                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-md p-3 border border-white/40 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-brand-navy">
                      Verified Fleet Active • 0% Commission Direct
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-brand-blue hover:text-brand-orange transition-colors inline-flex items-center gap-1"
                  >
                    <span>Contact Us</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS SECTION (Matching Reference) */}
      <section className="py-16 lg:py-20 bg-brand-light-bg/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-1">
                How It Works
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                A Simpler Way to Move Your Goods
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              From initial booking to secure delivery, we make logistics straightforward with a
              structured process and dedicated operational support.
            </p>
          </div>

          {/* 4 Process Cards with Connector Arrows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="relative bg-white rounded-lg p-6 border border-slate-200 shadow-subtle flex flex-col justify-between card-hover-effect">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-400 font-mono">01</span>
                  <div className="w-10 h-10 rounded-md bg-blue-50 text-brand-blue flex items-center justify-center">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2">
                  Tell Us Your Requirement
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Share your pickup point, delivery destination, shipment schedule, and cargo specifications.
                </p>
              </div>
              <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 shadow-xs">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-lg p-6 border border-slate-200 shadow-subtle flex flex-col justify-between card-hover-effect">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-400 font-mono">02</span>
                  <div className="w-10 h-10 rounded-md bg-orange-50 text-brand-orange flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2">
                  Get Matched
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We assign the ideal transport partner and verified vehicle tailored to your load requirements.
                </p>
              </div>
              <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 shadow-xs">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white rounded-lg p-6 border border-slate-200 shadow-subtle flex flex-col justify-between card-hover-effect">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-400 font-mono">03</span>
                  <div className="w-10 h-10 rounded-md bg-blue-50 text-brand-blue flex items-center justify-center">
                    <Navigation className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2">
                  Track in Real Time
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Receive proactive status updates and route milestones as your consignment travels to its destination.
                </p>
              </div>
              <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 shadow-xs">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative bg-white rounded-lg p-6 border border-slate-200 shadow-subtle flex flex-col justify-between card-hover-effect">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-400 font-mono">04</span>
                  <div className="w-10 h-10 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <PackageCheck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2">
                  Goods Delivered
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your shipment reaches its final destination safely, on schedule, with digital proof of delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW (Matching Reference Cards) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block mb-1">
                  Our Services
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                  Freight Solutions for Every Need
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-orange uppercase tracking-wider transition-colors"
              >
                <span>View All Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Service Cards Grid */}
          <ScrollReveal direction="up" delay={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: FTL */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-subtle flex flex-col card-hover-effect">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/images/indian-tata-truck-ftl.jpg"
                  alt="Full Truckload (FTL) Multi-Axle Freight Truck - GO-PARTNER"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
                    Maximum Capacity. Greater Efficiency.
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">
                    Full Truckload (FTL)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Dedicated commercial trucks for high-volume, time-sensitive shipments. Direct routes across
                    Maharashtra and regional freight corridors.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    <span className="font-semibold block text-slate-700">Routes:</span> 50 - 1,500 km
                  </div>
                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:text-brand-orange-hover"
                  >
                    <span>Book in App</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: LTL / Tata Ace & Tempos */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-subtle flex flex-col card-hover-effect">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/images/indian-tata-ace-tempo.jpg"
                  alt="Part Truckload (PTL) Tata Ace Chhota Hathi & Pickup Tempos - GO-PARTNER"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
                    Flexible Shipping. Cost Efficiency.
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">
                    Part Truckload (LTL)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Economical solutions for partial cargo and palletized freight. Pay only for the
                    trailer space you need.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    <span className="font-semibold block text-slate-700">Weights:</span> 500 kg - 15 tonnes
                  </div>
                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:text-brand-orange-hover"
                  >
                    <span>Book in App</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Warehousing */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-subtle flex flex-col card-hover-effect">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/images/service-warehousing.jpg"
                  alt="Dedicated Logistics Warehousing and Inventory Staging Hub - GO-PARTNER"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
                    Space Today. Scalable Tomorrow.
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">
                    Dedicated Warehousing
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Secure, scalable storage facilities to support cross-docking, consolidation, and
                    inventory staging.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    <span className="font-semibold block text-slate-700">Locations:</span> Strategic Hubs
                  </div>
                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:text-brand-orange-hover"
                  >
                    <span>Book in App</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. WHY CHOOSE GO-PARTNER SECTION */}
      <section className="py-16 lg:py-20 bg-brand-light-bg/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                Why Choose GO-PARTNER
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                Operational Excellence at Every Turn
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Logistics requires precision, accountability, and dependable equipment. We bridge
                shippers and commercial vehicle operators with verified standards that keep supply chains predictable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-white p-4 rounded-md border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Vetted Carrier Fleet</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Every carrier partner undergoes document verification and fleet roadworthiness checks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-md border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Direct Pricing Clarity</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Clear rate estimates without hidden fuel surcharges or unexpected accessorial costs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-md border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Dedicated 24/7 Dispatch</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Proactive dispatch team monitoring transit checkpoints and cargo security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-md border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Multi-Modal Versatility</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      From dry vans and flatbeds to refrigerated reefers and regional distribution vans.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Driver Partner Spotlight Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-slate-300 shadow-card bg-brand-navy text-white">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/indian-driver-hero.jpg"
                    alt="Smiling Indian Commercial Driver Partner - GO-PARTNER Fleet Network"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
                </div>
                <div className="p-6 relative -mt-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block mb-1">
                    Fleet & Driver Network
                  </span>
                  <h3 className="text-xl font-bold font-heading mb-2">
                    Drive with GO-PARTNER, Grow Your Transport Business
                  </h3>
                  <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                    Access consistent commercial loads, dependable payment cycles, and a platform that respects your time on the road.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-xs"
                  >
                    <span>Join Partner Network</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 MOBILE APP SHOWCASE (Real GO-PARTNER App Experience) */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block mb-2">
                Next-Generation Technology
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy font-heading tracking-tight">
                Inside the GO-PARTNER Mobile Platform
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Designed from the ground up for Mumbai MMR and Maharashtra logistics. Transparent pricing,
                zero commission deductions, instant radar dispatch, and strict cargo safety compliance.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 App Feature Columns */}
          <ScrollReveal direction="up" delay={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Feature 1: 0% Commission Direct Trips */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between shadow-subtle hover:border-slate-300 transition-colors h-full">
              <div className="p-5 flex flex-col flex-grow">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 inline-block mb-3 self-start">
                  0% Commission
                </span>
                <h3 className="h-6 flex items-center text-base font-bold text-brand-navy mb-1.5">
                  Direct Trip Earnings
                </h3>
                <p className="h-[54px] text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  100% of the trip fare and bridge tolls go directly to the driver partner. Zero platform fee, zero hidden deductions.
                </p>
              </div>
              <div className="relative h-64 w-full bg-slate-900 border-t border-slate-200 overflow-hidden mt-auto">
                <Image
                  src="/images/app-checkout-fare-v2.jpg"
                  alt="GO-PARTNER Transparent Fare and 0% Commission Breakdown"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Feature 2: 0-6 km Radar Dispatch */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between shadow-subtle hover:border-slate-300 transition-colors h-full">
              <div className="p-5 flex flex-col flex-grow">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 inline-block mb-3 self-start">
                  Live Dispatch Radar
                </span>
                <h3 className="h-6 flex items-center text-base font-bold text-brand-navy mb-1.5">
                  0-6 km Proximity Radar
                </h3>
                <p className="h-[54px] text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  Intelligent radar constantly monitors verified vehicles nearby. Loud audible trip siren alerts drivers instantly upon booking.
                </p>
              </div>
              <div className="relative h-64 w-full bg-slate-900 border-t border-slate-200 overflow-hidden mt-auto">
                <Image
                  src="/images/app-radar-view-v2.jpg"
                  alt="GO-PARTNER Active Radar Screen for Driver Dispatch"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Feature 3: Verified Fleet Selection */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between shadow-subtle hover:border-slate-300 transition-colors h-full">
              <div className="p-5 flex flex-col flex-grow">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 inline-block mb-3 self-start">
                  Diverse Fleet
                </span>
                <h3 className="h-6 flex items-center text-base font-bold text-brand-navy mb-1.5">
                  Commercial Vehicles
                </h3>
                <p className="h-[54px] text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  Choose from 3-Wheeler Cargo EVs, 3-Wheeler Cargo, Mini Trucks, and 2-Wheelers tailored to cargo dimensions and payload weight.
                </p>
              </div>
              <div className="relative h-64 w-full bg-slate-900 border-t border-slate-200 overflow-hidden mt-auto">
                <Image
                  src="/images/app-vehicles-list-v2.jpg"
                  alt="GO-PARTNER Commercial Vehicle Selection Grid"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Feature 4: Strict Prohibited Goods Safety */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between shadow-subtle hover:border-slate-300 transition-colors h-full">
              <div className="p-5 flex flex-col flex-grow">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-800 inline-block mb-3 self-start">
                  Safety First
                </span>
                <h3 className="h-6 flex items-center text-base font-bold text-brand-navy mb-1.5">
                  Zero-Tolerance Cargo Policy
                </h3>
                <p className="h-[54px] text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  Strict legal declarations protecting both shipper and carrier. No narcotics, firearms, or contraband permitted on any trip.
                </p>
              </div>
              <div className="relative h-64 w-full bg-slate-900 border-t border-slate-200 overflow-hidden mt-auto">
                <Image
                  src="/images/app-prohibited-items-v2.jpg"
                  alt="GO-PARTNER Illegal and Prohibited Items Safety Terms"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Bottom App Banner Bar */}
          <div className="mt-12 p-6 rounded-lg bg-brand-navy text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Experience Fast Booking on Your Phone</h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Download the GO-PARTNER app to calculate route fares, track drivers live, and manage trip invoices.
                </p>
              </div>
            </div>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all whitespace-nowrap shadow-xs"
            >
              <span>Download Android App</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER (Matching Reference) */}
      <section className="py-14 bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-1">
                Let&apos;s Move Forward Together
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Ready to move your freight?
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                Quotes and bookings are handled in the GO-PARTNER app. This site explains the services and how to get started.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm transition-all"
              >
                <span>Book in the App</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
