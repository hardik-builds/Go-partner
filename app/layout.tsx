import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import FloatingActionDock from '@/components/FloatingActionDock';

export const viewport: Viewport = {
  themeColor: '#0E1E38',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'GO-PARTNER | Reliable Goods Transportation & Modern Freight Logistics',
    template: '%s | GO-PARTNER Logistics',
  },
  description:
    'GO-PARTNER connects shippers with trusted transport partners. Seamless Full Truckload (FTL), Less-Than-Truckload (LTL), temperature-controlled reefer, and warehousing solutions.',
  keywords: [
    'logistics services',
    'goods transportation',
    'full truckload FTL',
    'less than truckload LTL',
    'freight shipping',
    'temperature controlled reefer',
    'dedicated warehousing',
    'real time freight tracking',
    'GO-PARTNER',
  ],
  authors: [{ name: 'GO-PARTNER Logistics' }],
  creator: 'GO-PARTNER',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/icon-192.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.go-partner.com',
    siteName: 'GO-PARTNER Logistics',
    title: 'GO-PARTNER | Reliable Goods Transportation, From Pickup to Delivery',
    description:
      'End-to-end freight transportation, dedicated capacity, warehousing, and real-time tracking across major freight corridors.',
    images: [
      {
        url: '/images/hero-indian-partner.jpg',
        width: 1200,
        height: 630,
        alt: 'GO-PARTNER Indian Commercial Transport Fleet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GO-PARTNER | Reliable Goods Transportation',
    description: 'Moving business forward with verified carrier partners and real-time visibility.',
    images: ['/images/hero-indian-partner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LogisticsService',
    name: 'GO-PARTNER',
    url: 'https://www.go-partner.com',
    logo: 'https://www.go-partner.com/images/logo-badge.png',
    description:
      'Reliable goods transportation, full truckload (FTL), part truckload (LTL), temperature-controlled reefer, and warehousing.',
    telephone: '+91-98200-11223',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mumbai MMR Logistics & Transport Hub',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400001',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  };

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-slate-800 bg-brand-warm-white relative">
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
