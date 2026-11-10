import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the GO PARTNER Privacy Policy. Learn how we collect, store, and safeguard your personal and geolocation data in accordance with the Information Technology Act 2000.',
  openGraph: {
    title: 'Privacy Policy | GO PARTNER',
    description:
      'Transparency builds stronger partnerships. Learn about our data protection standards, GPS tracking policies, Razorpay payment processing, and Grievance Officer details.',
    images: [{ url: '/images/indian-fleet-hero.jpg', width: 1200, height: 630, alt: 'GO PARTNER Privacy Policy' }],
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
