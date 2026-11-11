import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Cancellation & Refund Policy | Trip Terms & Settlements',
  description:
    'Review the GO-PARTNER Cancellation and Refund Policy. Understand transparent zero-fee cancellation stages, nominal driver fuel compensation rules, and Razorpay refund timelines.',
  path: '/refund',
  image: '/images/hero-indian-partner.jpg',
  imageAlt: 'GO-PARTNER Cancellation and Refund Policy',
  keywords: [
    'GO-PARTNER refund policy',
    'goods transport cancellation rules',
    'freight booking refund timelines',
    'driver fuel compensation policy',
    'Razorpay logistics refund process',
  ],
});

export default function RefundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
