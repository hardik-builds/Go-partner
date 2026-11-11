import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us | Logistics Enquiries & Freight Support',
  description:
    'Contact the GO-PARTNER logistics team for commercial goods transportation, freight bookings, driver-partner enquiries, and customer support. Call +91 98200 11223 or connect via WhatsApp.',
  path: '/contact',
  image: '/images/indian-tata-ace-tempo.jpg',
  imageAlt: 'Contact GO-PARTNER Commercial Logistics Operations',
  keywords: [
    'contact GO-PARTNER',
    'goods transportation contact',
    'freight logistics enquiry',
    'commercial truck booking phone',
    'Mumbai logistics helpline',
    'transport partner support',
    'WhatsApp goods delivery booking',
    'commercial freight quote request',
  ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
