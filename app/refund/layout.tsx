import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy',
  description:
    'Review GO PARTNER Cancellation and Refund Policy. Understand cancellation windows, driver fuel compensation fees, and Razorpay / GO Wallet refund timelines.',
  openGraph: {
    title: 'Cancellation & Refund Policy | GO PARTNER',
    description:
      'Clear, transparent cancellation guidelines for customers and driver-partners across Mumbai MMR. Learn about refund processing timelines via Razorpay.',
    images: [{ url: '/images/indian-fleet-hero.jpg', width: 1200, height: 630, alt: 'GO PARTNER Logistics' }],
  },
};

export default function RefundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
