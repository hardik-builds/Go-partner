import Image from 'next/image';
import Link from 'next/link';
import {
  Truck,
  Package,
  ThermometerSnowflake,
  Warehouse,
  Navigation,
  Zap,
  ArrowRight,
  ShieldCheck,
  Check,
  Route,
  Weight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { GOOGLE_PLAY_URL } from '@/lib/site';
import { getBreadcrumbSchema, getServicesSchema } from '@/lib/seo';
import ScrollReveal from '@/components/ScrollReveal';

export default function ServicesPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ]);
  const servicesJsonLd = getServicesSchema();

  const services = [
    {
      id: 'full-truckload',
      title: 'Full Truckload (FTL)',
      tagline: 'Maximum Capacity. Greater Efficiency.',
      description:
        'Dedicated trucks for time-sensitive, high-volume cargo. Point-to-point transit without intermediate handling, cross-dock delays, or unnecessary transfers.',
      image: '/images/indian-tata-truck-ftl.jpg',
      specs: [
        { label: 'Typical Routes', value: '50 - 1,500 km', icon: Route },
        { label: 'Max Capacity', value: 'Up to 25 Tonnes (Multi-Axle)', icon: Weight },
        { label: 'Transit Schedule', value: 'Direct, Scheduled', icon: Clock },
      ],
      features: [
        'Exclusively dedicated dry van trailers',
        'Direct door-to-door transit routes',
        '24/7 route tracking and driver communication',
        'Standard and high-cube 53-foot trailers',
      ],
    },
    {
      id: 'less-than-truckload',
      title: 'Less-Than-Truckload (LTL)',
      tagline: 'Flexible Shipping. Real Efficiency.',
      description:
        'Cost-effective solutions for smaller commercial shipments and palletized freight. Pay only for the trailer space you use while maintaining delivery predictability.',
      image: '/images/indian-tata-ace-tempo.jpg',
      specs: [
        { label: 'Typical Routes', value: '10 - 500 km', icon: Route },
        { label: 'Typical Weight', value: '500 kg - 5,000 kg (Tata Ace / Pickup)', icon: Weight },
        { label: 'Load Type', value: 'Palletized, Cartons, Crated', icon: Package },
      ],
      features: [
        'Consolidated regional line-haul routes',
        'Competitive pallet-based rate structures',
        'Liftgate pickup and delivery capability',
        'Consignment tracking at every transfer hub',
      ],
    },
    {
      id: 'temperature-controlled',
      title: 'Temperature-Controlled Reefer',
      tagline: 'Climate Integrity. Freshness Assured.',
      description:
        'Maintain strict product integrity for perishable foodstuffs, pharmaceuticals, and sensitive chemicals with multi-temperature refrigerated trailers and telemetry.',
      image: '/images/service-reefer-v2.jpg',
      specs: [
        { label: 'Temp Range', value: '-18°C to +15°C', icon: ThermometerSnowflake },
        { label: 'Monitoring', value: 'Continuous Digital Telemetry', icon: ShieldCheck },
        { label: 'Compliance', value: 'FSSAI & Pharma Certified', icon: Check },
      ],
      features: [
        'Modern Thermo King & Carrier cooling units',
        'Live temperature logging with deviation alerts',
        'Sanitized, food-grade trailer interiors',
        'Experienced cold-chain driver protocols',
      ],
    },
    {
      id: 'warehousing',
      title: 'Dedicated Warehousing',
      tagline: 'Space Today. Opportunity Tomorrow.',
      description:
        'Secure, scalable warehouse storage to support your distribution, inventory staging, and consolidation requirements. Strategically located near key trade lanes.',
      image: '/images/service-warehousing-v2.jpg',
      specs: [
        { label: 'Storage Options', value: 'Short & Long-Term', icon: Warehouse },
        { label: 'Locations', value: 'Major Industrial Hubs', icon: Route },
        { label: 'Security', value: '24/7 Monitored Facilities', icon: ShieldCheck },
      ],
      features: [
        'Cross-docking and freight consolidation',
        'Pallet storage and bulk staging spaces',
        'Barcode inventory management system',
        'Forklift and heavy-cargo handling gear',
      ],
    },
    {
      id: 'real-time-tracking',
      title: 'Real-Time Tracking & Telematics',
      tagline: 'Total Visibility. No Guesswork.',
      description:
        'Comprehensive shipment visibility powered by GPS telemetry. Stay informed with automated transit milestones, geofence triggers, and electronic proof of delivery.',
      image: '/images/service-tracking-v2.jpg',
      specs: [
        { label: 'Update Interval', value: 'Real-Time GPS Ping', icon: Navigation },
        { label: 'Delivery Proof', value: 'Digital ePOD with Signature', icon: Check },
        { label: 'Alerts', value: 'SMS, Email, Web Dashboard', icon: Clock },
      ],
      features: [
        'Live interactive consignment status dashboard',
        'Automated departure and arrival notifications',
        'Driver contact bridge for dispatch support',
        'Complete digital documentation archive',
      ],
    },
    {
      id: 'express-dispatch',
      title: 'Express & Hot Shot Dispatch',
      tagline: 'Priority Dispatch. Rapid Response.',
      description:
        'When production halts or emergency freight cannot wait for standard schedules, our hot-shot dispatch team deploys dedicated rapid transport immediately.',
      image: '/images/service-express-indian.jpg',
      specs: [
        { label: 'Dispatch Window', value: 'Under 30 Minutes', icon: Zap },
        { label: 'Equipment', value: '2-Wheeler Express, 3W Cargo, Tata Ace', icon: Truck },
        { label: 'Availability', value: '24/7/365 On-Call', icon: Clock },
      ],
      features: [
        'Emergency response team standing by 24/7',
        'Direct non-stop transit to delivery site',
        'Ideal for industrial machinery and factory parts',
        'Dedicated point-of-contact dispatcher',
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {/* 1. HERO SECTION (Matching go_partner_elevated_services.jpg & v4 refined) */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-white py-12 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content (lg: 6 cols) */}
            <ScrollReveal direction="up" delay={0.04} distance={14} className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                Our Services
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy font-heading tracking-tight leading-[1.15]">
                Tailored Freight and Transportation Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Flexible. Reliable. Built around your business. GO-PARTNER delivers end-to-end
                logistics solutions that keep your supply chain moving across national and regional lanes.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-xs btn-interactive"
                >
                  <span>Book in the App</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-brand-navy border border-slate-300 text-xs font-bold uppercase tracking-wider rounded-md transition-colors btn-interactive"
                >
                  <span>Speak with Dispatch</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Hero Image Card (lg: 6 cols) */}
            <ScrollReveal direction="up" delay={0.14} distance={14} className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-card bg-slate-900 group">
                <div className="relative w-full h-[320px] sm:h-[380px]">
                  <Image
                    src="/images/services-indian-dispatch.jpg"
                    alt="Indian Logistics Operations - Tata Ace Dispatch and Warehouse Team"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-md px-3.5 py-1.5 shadow-sm text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Further Together
                  </span>
                  <span className="text-xs font-extrabold text-brand-navy">
                    Freight Solutions
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. COMPREHENSIVE SERVICE SECTIONS */}
      <section className="py-16 lg:py-20 bg-brand-light-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-1">
              End-to-End Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
              Freight Solutions for Every Need
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From heavy equipment to temperature-sensitive cargo, explore our verified logistics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, idx) => (
              <ScrollReveal key={service.id} delay={idx * 0.08} className="h-full">
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-subtle flex flex-col justify-between card-hover-effect h-full">
                  <div className="flex flex-col flex-grow">
                    {/* Consistent Service Image Frame: 16/9 aspect ratio */}
                    <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} - GO-PARTNER Freight Logistics Services`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center"
                        loading="lazy"
                      />
                    </div>

                    {/* Card Content with consistent alignment */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="h-5 flex items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
                        {service.tagline}
                      </span>
                      <h3 className="h-7 flex items-center text-lg font-bold text-brand-navy mb-2 line-clamp-1">
                        {service.title}
                      </h3>
                      <p className="h-[60px] text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Specifications Box */}
                      <div className="bg-slate-50 rounded-md p-3 border border-slate-100 space-y-2 mb-4">
                        {service.specs.map((spec, specIdx) => {
                          const Icon = spec.icon;
                          return (
                            <div key={specIdx} className="flex items-center justify-between text-[11px] h-5">
                              <span className="text-slate-500 flex items-center gap-1.5">
                                <Icon className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                                {spec.label}:
                              </span>
                              <span className="font-semibold text-brand-navy">{spec.value}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Features list */}
                      <ul className="space-y-1.5 text-xs text-slate-600 mb-6 flex-grow min-h-[96px]">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Action pinned to bottom */}
                  <div className="px-6 pb-6 pt-0 mt-auto">
                    <a
                      href={GOOGLE_PLAY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-xs transition-colors btn-interactive"
                    >
                      <span>Book in the App</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 ON-DEMAND COMMERCIAL FLEET CATEGORIES (From App) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block mb-1">
              On-Demand Intra-City Fleet
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
              Commercial Vehicles Available on the Platform
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Book the right vehicle class directly from the GO-PARTNER app for swift pickup across Mumbai MMR.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Vehicle 1 */}
            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3 h-6">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                    Eco Electric
                  </span>
                  <span className="text-xs font-bold text-slate-500">Max: 450 kg</span>
                </div>
                <h3 className="h-6 flex items-center text-base font-bold text-brand-navy mb-1">3-Wheeler Cargo EV</h3>
                <p className="h-[54px] text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  100% Eco-green electric delivery tailored for market cartons, textiles, and FMCG wholesale distributions.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-semibold text-brand-orange flex items-center justify-between mt-auto">
                <span>Free 45 Mins Loading</span>
                <span>Active in App</span>
              </div>
            </div>

            {/* Vehicle 2 */}
            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3 h-6">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800">
                    Popular Cargo
                  </span>
                  <span className="text-xs font-bold text-slate-500">Max: 500 kg</span>
                </div>
                <h3 className="h-6 flex items-center text-base font-bold text-brand-navy mb-1">3-Wheeler Cargo</h3>
                <p className="h-[54px] text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  Reliable commercial three-wheeler transport designed for industrial parts, retail parcels, and general freight.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-semibold text-brand-orange flex items-center justify-between mt-auto">
                <span>Free 45 Mins Loading</span>
                <span>Active in App</span>
              </div>
            </div>

            {/* Vehicle 3 */}
            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3 h-6">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800">
                    Heavy Duty
                  </span>
                  <span className="text-xs font-bold text-slate-500">Max: 750-1000 kg</span>
                </div>
                <h3 className="h-6 flex items-center text-base font-bold text-brand-navy mb-1">Mini Truck (Chota Hathi)</h3>
                <p className="h-[54px] text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  Spacious open-bed and closed container mini trucks suited for machinery, bulk pallets, and warehouse transfers.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-semibold text-brand-orange flex items-center justify-between mt-auto">
                <span>Free 60 Mins Loading</span>
                <span>Active in App</span>
              </div>
            </div>

            {/* Vehicle 4 */}
            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3 h-6">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900">
                    Rapid Express
                  </span>
                  <span className="text-xs font-bold text-slate-500">Max: 20 kg</span>
                </div>
                <h3 className="h-6 flex items-center text-base font-bold text-brand-navy mb-1">Bike &amp; Scooter Courier</h3>
                <p className="h-[54px] text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  Rapid point-to-point courier for urgent documents, medical supplies, compact parcels, and sample packages.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-semibold text-brand-orange flex items-center justify-between mt-auto">
                <span>Instant 3-5 Min Pickup</span>
                <span>Active in App</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA BANNER (Matching Reference) */}
      <section className="py-16 bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy-light text-white">
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
                Booking and live quotes stay in the GO-PARTNER app. Use this page to compare services, then continue there.
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
