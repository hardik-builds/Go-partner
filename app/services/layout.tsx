import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freight & Logistics Services',
  description:
    'Explore GO-PARTNER\'s full range of freight and logistics services: Full Truckload (FTL), Less-Than-Truckload (LTL), temperature-controlled reefer transportation, dedicated warehousing, and real-time shipment tracking.',
  openGraph: {
    title: 'Freight & Logistics Services | GO-PARTNER',
    description:
      'From full truckload capacity to temperature-sensitive reefer loads, GO-PARTNER delivers freight reliably across major corridors.',
    images: [{ url: '/images/indian-fleet-hero.jpg', width: 1200, height: 630, alt: 'GO-PARTNER Services' }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
