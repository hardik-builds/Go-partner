/**
 * Google Analytics 4 event tracking utilities for GO-PARTNER
 * Only fires if window.gtag is available and GA Measurement ID is configured.
 */

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export function trackEnquirySubmission(referenceId?: string) {
  trackEvent('generate_lead', {
    event_category: 'engagement',
    event_label: 'Contact Form Submission',
    lead_reference: referenceId || 'N/A',
  });
}

export function trackWhatsAppClick(source: string) {
  trackEvent('contact', {
    event_category: 'outbound',
    event_label: 'WhatsApp Direct Chat',
    channel: 'whatsapp',
    click_source: source,
  });
}

export function trackPhoneCall(source: string) {
  trackEvent('contact', {
    event_category: 'outbound',
    event_label: 'Helpline Call',
    channel: 'phone',
    click_source: source,
  });
}

export function trackAppDownloadClick(location: string) {
  trackEvent('app_download_intent', {
    event_category: 'conversion',
    event_label: 'Google Play Download Click',
    click_location: location,
  });
}
