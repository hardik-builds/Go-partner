import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the GO-PARTNER logistics team. Reach us by phone, email, or WhatsApp for freight enquiries, shipping quotes, and business partnerships.',
  openGraph: {
    title: 'Contact GO-PARTNER Logistics',
    description:
      'Reach out to GO-PARTNER for freight quotes, service enquiries, and partnerships. Our team is available Mon-Sat during business hours.',
    images: [{ url: '/images/indian-tata-ace-tempo.jpg', width: 1200, height: 630, alt: 'Contact GO-PARTNER' }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
