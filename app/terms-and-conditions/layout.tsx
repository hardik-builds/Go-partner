import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service & Conditions',
  description:
    'Review the GO PARTNER Terms of Service. Understand our digital intermediary role under the IT Act 2000, 0% driver commission model, prohibited goods policy, and toll regulations.',
  openGraph: {
    title: 'Terms & Conditions | GO PARTNER',
    description:
      'Clear, transparent terms governing customers and commercial driver-partners across Mumbai MMR and Maharashtra. Governed by the laws of India.',
    images: [{ url: '/images/indian-fleet-hero.jpg', width: 1200, height: 630, alt: 'GO PARTNER Terms of Service' }],
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
