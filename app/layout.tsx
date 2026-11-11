import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import FloatingActionDock from '@/components/FloatingActionDock';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import {
  SITE_NAME,
  SITE_LEGAL_NAME,
  SITE_URL,
  SITE_TAGLINE,
} from '@/lib/site';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/seo';

export const viewport: Viewport = {
  themeColor: '#0E1E38',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Reliable Goods Transportation & Freight Logistics`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'GO-PARTNER delivers reliable goods transportation and modern freight logistics. Full Truckload (FTL), Less-Than-Truckload (LTL), temperature-controlled reefer, and warehousing solutions across Mumbai MMR and Maharashtra.',
  keywords: [
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
    'GO-PARTNER',
  ],
  authors: [{ name: SITE_LEGAL_NAME }],
  creator: SITE_NAME,
  publisher: SITE_LEGAL_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/icon-192.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_LEGAL_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      'Reliable goods transportation, verified carrier partners, full truckload (FTL), part truckload (LTL), and warehousing across Mumbai MMR and key industrial corridors.',
    images: [
      {
        url: `${SITE_URL}/images/hero-indian-partner.jpg`,
        width: 1200,
        height: 630,
        alt: 'GO-PARTNER Indian Commercial Transport Fleet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Reliable Goods Transportation`,
    description:
      'Moving business forward with verified carrier partners, transparent pricing, and real-time visibility.',
    images: [`${SITE_URL}/images/hero-indian-partner.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();
  const siteSchema = getWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-slate-800 bg-brand-warm-white relative">
        <GoogleAnalytics />
        <div id="page-top" className="absolute top-0 left-0 w-px h-px pointer-events-none opacity-0 -z-50" aria-hidden="true" />
        <Navbar />
        <main className="flex-grow flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingActionDock />
      </body>
    </html>
  );
}
