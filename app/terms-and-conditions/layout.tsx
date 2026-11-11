import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Terms & Conditions | Commercial Logistics & Transport Agreement',
  description:
    'Review the GO-PARTNER Terms of Service and Conditions. Understand our digital intermediary role under the IT Act 2000, 0% driver commission model, cargo safety, and toll pass-through policies.',
  path: '/terms-and-conditions',
  image: '/images/hero-indian-partner.jpg',
  imageAlt: 'GO-PARTNER Terms and Conditions and Commercial Agreement',
  keywords: [
    'GO-PARTNER terms and conditions',
    'goods transportation terms of service',
    'commercial freight contract',
    'carrier partner agreement',
    'IT Act 2000 intermediary policy',
    'prohibited cargo terms',
    'toll pass-through policy',
  ],
});

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
