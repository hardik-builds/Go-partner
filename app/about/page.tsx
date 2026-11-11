import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Target,
  Eye,
  Shield,
  HeartHandshake,
  TrendingUp,
  Cpu,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { constructMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = constructMetadata({
  title: 'About Us | Goods Transportation & Freight Logistics Platform',
  description:
    'Learn about GO-PARTNER, our mission to create a smarter freight ecosystem, verified commercial carrier network, and 0% commission direct trip model across Mumbai MMR and Maharashtra.',
  path: '/about',
  image: '/images/about-indian-team.jpg',
  imageAlt: 'GO-PARTNER Team of Fleet Drivers and Logistics Partners',
  keywords: [
    'about GO-PARTNER',
    'goods transportation company',
    'commercial freight partner',
    'logistics network Mumbai',
    'Maharashtra freight transport',
    'verified transport carriers',
    'logistics platform India',
    'Waris founder GO-PARTNER',
  ],
});

export default function AboutPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ]);

  const aboutPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About GO-PARTNER Logistics',
    url: `${SITE_URL}/about`,
    description:
      'Learn about GO-PARTNER, our leadership, core values, and dedicated commercial carrier network connecting commerce across Mumbai MMR and Maharashtra.',
    mainEntity: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  return (
    <div className="w-full flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      {/* 1. HERO SECTION (Matching go_partner_about_us_redesign.jpg) */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-white py-12 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content (lg: 6 cols) */}
            <ScrollReveal direction="up" delay={0.04} distance={14} className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                Our Story
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy font-heading tracking-tight leading-[1.15]">
                Building the Backbone of Modern Freight
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                GO-PARTNER was founded on a simple belief: that a stronger, more connected logistics
                ecosystem creates opportunity for everyone. We are here to modernize freight by
                bringing together technology, people, and partnerships that move the world forward.
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  People Connect Possibilities
                </span>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-xs btn-interactive"
                >
                  <span>Our Logistics Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-brand-navy border border-slate-300 text-xs font-bold uppercase tracking-wider rounded-md transition-colors btn-interactive"
                >
                  <span>Connect With Us</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Hero Image Card (lg: 6 cols) */}
            <ScrollReveal direction="up" delay={0.14} distance={14} className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-card bg-slate-900 group">
                <div className="relative w-full h-[320px] sm:h-[400px]">
                  <Image
                    src="/images/about-indian-team.jpg"
                    alt="GO-PARTNER Team of Indian Fleet Drivers and Logistics Partners"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-md px-3.5 py-1.5 shadow-sm text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    A Stronger Tomorrow
                  </span>
                  <span className="text-xs font-extrabold text-brand-orange">
                    Moves Together
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION SECTION (Dual Cards matching reference) */}
      <section className="py-16 bg-brand-light-bg/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <ScrollReveal delay={0.05} className="h-full">
              <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-subtle flex flex-col justify-between card-hover-effect h-full">
                <div>
                  <div className="w-12 h-12 rounded-md bg-orange-50 text-brand-orange flex items-center justify-center mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    Our Mission
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading mb-3">
                    Create a Smarter, Stronger Freight Ecosystem
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    To empower shippers, carriers, and partners with innovative technology, trusted
                    relationships, and operational excellence that make logistics simpler, faster, and more reliable.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Vision Card */}
            <ScrollReveal delay={0.15} className="h-full">
              <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-subtle flex flex-col justify-between card-hover-effect h-full">
                <div>
                  <div className="w-12 h-12 rounded-md bg-blue-50 text-brand-blue flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    Our Vision
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading mb-3">
                    A More Connected World in Motion
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    To be the most trusted and innovative logistics partner, creating a more connected,
                    efficient, and sustainable supply chain for generations to come.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2.5 MEET THE FOUNDER: WARIS */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Founder Photo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-card">
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-100">
                  <Image
                    src="/images/founder-waris.jpg"
                    alt="Waris, Founder of GO-PARTNER Logistics"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-[center_20%]"
                    loading="lazy"
                  />
                </div>
                <div className="pt-4 pb-1 text-center">
                  <h3 className="text-lg font-bold text-brand-navy">Waris</h3>
                  <p className="text-xs font-semibold text-brand-orange uppercase tracking-wider mt-0.5">
                    Founder, GO-PARTNER
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Founder Story & Vision */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-md text-[11px] font-bold uppercase tracking-widest text-brand-orange">
                <span>Leadership &amp; Vision</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy font-heading tracking-tight">
                  Empowering Transport Partners, Simplifying Freight
                </h2>
                <p className="text-sm font-semibold text-slate-500 mt-1">
                  Waris | Founder, GO-PARTNER
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Waris founded GO-PARTNER with a dedicated mission: to remove friction from commercial road
                transport across Mumbai MMR and Maharashtra. Seeing how traditional brokerage models eroded driver
                earnings while creating unpredictability for shippers, he designed GO-PARTNER around transparency,
                direct accountability, and verified equipment.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At the heart of GO-PARTNER is the 0% commission direct trip model. Driver-partners retain their full
                earnings and highway tolls, while businesses receive on-demand access to verified commercial
                vehicles, accurate GPS dispatch, and clear pricing from pickup to delivery.
              </p>

              {/* Three Founder Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-brand-navy block mb-1">Direct Trip Model</span>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      0% platform commission on trips so driver-partners retain 100% of their earnings and tolls.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-brand-navy block mb-1">Verified Commercial Fleet</span>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Commercial yellow-plate vehicles, driver KYC, RC, insurance, and roadworthiness checks.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-brand-navy block mb-1">Operational Focus</span>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Reliable intra-city and regional connectivity across Mumbai MMR, Thane, and Maharashtra corridors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH SECTION (3 Pillars matching reference) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block mb-1">
                Our Approach
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                A Smarter Way Forward
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              We bring together technology, people, and industry expertise to solve real-world
              logistics challenges, driving better outcomes for every partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 01 Connect */}
            <div className="bg-brand-light-bg/40 rounded-lg p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-orange font-mono mb-4 block">01</span>
                <h3 className="text-lg font-bold text-brand-navy mb-2">Connect</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We bring shippers, carriers, and partners together through a seamless, digital-first
                  platform designed for direct communication and clear dispatching.
                </p>
              </div>
            </div>

            {/* 02 Optimize */}
            <div className="bg-brand-light-bg/40 rounded-lg p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-orange font-mono mb-4 block">02</span>
                <h3 className="text-lg font-bold text-brand-navy mb-2">Optimize</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We leverage data and real-time insights to improve route efficiency, reduce deadhead
                  miles, lower operational overhead, and eliminate friction.
                </p>
              </div>
            </div>

            {/* 03 Move Forward */}
            <div className="bg-brand-light-bg/40 rounded-lg p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-orange font-mono mb-4 block">03</span>
                <h3 className="text-lg font-bold text-brand-navy mb-2">Move Forward</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We build lasting partnerships that create opportunity, sustain driver prosperity,
                  and keep national and regional commerce moving reliably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="py-16 bg-brand-light-bg/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-1">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
              Our Core Values
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every decision we make is guided by commitments to integrity, carrier well-being, and freight reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-subtle">
              <div className="w-10 h-10 rounded-md bg-blue-50 text-brand-blue flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-brand-navy mb-2">Integrity in Action</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Honest communication, transparent freight billing, and zero hidden fees on every haul.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-subtle">
              <div className="w-10 h-10 rounded-md bg-orange-50 text-brand-orange flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-brand-navy mb-2">Partner Respect</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Recognizing drivers and fleet owners as the vital heartbeat of global commerce.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-subtle">
              <div className="w-10 h-10 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-brand-navy mb-2">Reliable Performance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Uncompromising focus on punctuality, cargo protection, and proactive transit tracking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-subtle">
              <div className="w-10 h-10 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-brand-navy mb-2">Modern Technology</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Harnessing purpose-built digital tools to simplify load booking and milestone updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
            Partner With Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-4">
            Experience the GO-PARTNER Standard
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-8">
            Whether you are a manufacturer shipping full loads across country or a fleet owner looking
            for reliable freight, GO-PARTNER provides the infrastructure to keep you moving forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
