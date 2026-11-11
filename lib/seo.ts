import type { Metadata } from 'next';
import {
  SITE_NAME,
  SITE_LEGAL_NAME,
  SITE_TAGLINE,
  SITE_URL,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  BUSINESS_ADDRESS,
  GOOGLE_PLAY_URL,
} from './site';

interface ConstructMetadataParams {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  noIndex?: boolean;
}

const DEFAULT_KEYWORDS = [
  'goods transportation services',
  'freight logistics services',
  'commercial cargo transportation',
  'full truckload transportation',
  'less than truckload services',
  'part truckload PTL',
  'dedicated warehousing solutions',
  'temperature controlled reefer logistics',
  'GPS freight tracking',
  'Mumbai logistics company',
  'Maharashtra goods transport',
  'GO-PARTNER logistics',
];

export function constructMetadata({
  title,
  description,
  path = '',
  image = '/images/hero-indian-partner.jpg',
  imageAlt = 'GO-PARTNER Commercial Fleet & Logistics Services',
  keywords = DEFAULT_KEYWORDS,
  noIndex = false,
}: ConstructMetadataParams): Metadata {
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  const canonicalUrl = `${SITE_URL}${cleanPath}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: canonicalUrl,
      title: `${title} | ${SITE_NAME}`,
      description,
      siteName: SITE_LEGAL_NAME,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [fullImageUrl],
    },
  };
}

/**
 * Root Organization Schema Markup
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LogisticsService',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo-badge.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/images/hero-indian-partner.jpg`,
    description:
      'Reliable goods transportation, full truckload (FTL), part truckload (LTL), temperature-controlled reefer, and warehousing services across Mumbai MMR and Maharashtra.',
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Maharashtra',
      },
      {
        '@type': 'City',
        name: 'Mumbai',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_ADDRESS.streetAddress,
      addressLocality: BUSINESS_ADDRESS.addressLocality,
      addressRegion: BUSINESS_ADDRESS.addressRegion,
      postalCode: BUSINESS_ADDRESS.postalCode,
      addressCountry: BUSINESS_ADDRESS.addressCountry,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      GOOGLE_PLAY_URL,
      'https://instagram.com',
      'https://facebook.com',
    ],
  };
}

/**
 * WebSite Schema with Potential Search Action
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    headline: SITE_TAGLINE,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-IN',
  };
}

/**
 * BreadcrumbList Schema generator
 */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * Service Catalog Schema Markup
 */
export function getServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'GO-PARTNER Freight & Logistics Services',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Full Truckload (FTL) Transportation',
        description:
          'Dedicated commercial multi-axle freight trucks for high-volume, point-to-point shipments across industrial corridors.',
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
        serviceType: 'Full Truckload Freight',
        areaServed: 'Maharashtra and Regional Corridors',
      },
      {
        '@type': 'Service',
        name: 'Less-Than-Truckload (LTL / PTL)',
        description:
          'Economical partial-load freight transportation with Tata Ace, pickup tempos, and shared trailer capacity for palletized cargo.',
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
        serviceType: 'Part Truckload Freight',
      },
      {
        '@type': 'Service',
        name: 'Temperature-Controlled Reefer Transport',
        description:
          'Cold chain refrigerated transportation maintaining steady -20°C to +15°C temperatures for perishable food, dairy, and pharmaceuticals.',
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
        serviceType: 'Refrigerated Logistics',
      },
      {
        '@type': 'Service',
        name: 'Dedicated Warehousing & Distribution',
        description:
          'Secure storage hubs, inventory staging, and cross-docking facilities strategically located near major transport arterials.',
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
        serviceType: 'Commercial Warehousing',
      },
      {
        '@type': 'Service',
        name: 'Real-Time Telematics & GPS Fleet Tracking',
        description:
          'Complete visibility over commercial consignments with active GPS tracking and route milestone alerts.',
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
        serviceType: 'Freight Telematics',
      },
      {
        '@type': 'Service',
        name: 'Express & Hot-Shot Commercial Dispatch',
        description:
          'Urgent, time-critical point-to-point cargo dispatch with immediate driver partner assignment.',
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
        serviceType: 'Express Freight Dispatch',
      },
    ],
  };
}
