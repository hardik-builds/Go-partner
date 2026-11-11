import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Freight & Goods Transportation Services | FTL, LTL & Reefer Logistics',
  description:
    'Explore GO-PARTNER goods transportation and freight logistics services: Full Truckload (FTL), Part Truckload (LTL), temperature-controlled reefer, warehousing, and real-time GPS tracking across Mumbai MMR and Maharashtra.',
  path: '/services',
  image: '/images/services-indian-dispatch.jpg',
  imageAlt: 'GO-PARTNER Commercial Fleet Dispatch and Freight Services',
  keywords: [
    'goods transportation services',
    'freight logistics services',
    'full truckload transportation',
    'less than truckload services',
    'part truckload PTL',
    'commercial cargo transportation',
    'temperature controlled reefer logistics',
    'dedicated warehousing and logistics',
    'express hot shot dispatch',
    'real time GPS freight tracking',
    'Tata Ace tempo booking',
    'Mumbai freight transport',
  ],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
