/**
 * GO-PARTNER Official Site Configuration
 * Verified business information, contact details, and canonical URL settings.
 */

export const SITE_NAME = 'GO-PARTNER';
export const SITE_LEGAL_NAME = 'GO-PARTNER Logistics';
export const SITE_TAGLINE = 'Reliable Goods Transportation, From Pickup to Delivery';
export const SITE_MOTTO_HINDI = 'हर सफ़र का पार्टनर';

/**
 * Production Canonical Site URL.
 * Defaults to the verified production domain https://gopartner.in.
 * Localhost is strictly avoided for production canonical resolution.
 */
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL && !process.env.NEXT_PUBLIC_SITE_URL.includes('localhost'))
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://gopartner.in';

export const CONTACT_PHONE = '+91 98200 11223';
export const CONTACT_PHONE_RAW = '+919820011223';
export const CONTACT_EMAIL = 'support@gopartner.in';
export const GRIEVANCE_EMAIL = 'grievance@gopartner.in';

export const WHATSAPP_URL =
  'https://wa.me/919820011223?text=Hello%20GO%20PARTNER%20Logistics%20Team';

export const GOOGLE_PLAY_URL =
  'https://play.google.com/store/search?q=GO-PARTNER&c=apps';

export const BUSINESS_ADDRESS = {
  streetAddress: 'Mumbai MMR Logistics & Transport Hub',
  addressLocality: 'Mumbai',
  addressRegion: 'Maharashtra',
  postalCode: '400001',
  addressCountry: 'IN',
};

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  whatsapp: WHATSAPP_URL,
};

/**
 * Developer & Design Agency Credit
 * Official Website: https://www.ashsolutions.site/
 */
export const ASH_SOLUTION_URL =
  process.env.NEXT_PUBLIC_ASH_SOLUTION_URL || 'https://www.ashsolutions.site/';

