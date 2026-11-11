import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy | Data Protection & Geolocation Transparency',
  description:
    'Read the GO-PARTNER Privacy Policy. Learn how we collect, store, and safeguard customer and driver-partner data in accordance with the Information Technology Act 2000.',
  path: '/privacy-policy',
  image: '/images/hero-indian-partner.jpg',
  imageAlt: 'GO-PARTNER Data Protection and Privacy Standards',
  keywords: [
    'GO-PARTNER privacy policy',
    'logistics data protection',
    'GPS telemetry privacy',
    'driver KYC policy',
    'IT Act 2000 compliance',
    'goods transport privacy policy India',
  ],
});

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
