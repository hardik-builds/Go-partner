/**
 * Server-side input validation and sanitization utilities.
 */

export function sanitizeString(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '') // Strip basic HTML tags
    .trim();
}

export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  // RFC 5322 standard regex subset
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  // Allow international formatting with +, spaces, hyphens, and brackets: minimum 7 digits
  const cleaned = phone.replace(/[^0-9]/g, '');
  return cleaned.length >= 7 && cleaned.length <= 15;
}

export interface ContactValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitized: {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    subject: string;
    message: string;
  };
}

export function validateContactSubmission(data: Record<string, unknown>): ContactValidationResult {
  const errors: Record<string, string> = {};

  const fullName = sanitizeString(data.fullName);
  const phoneNumber = sanitizeString(data.phoneNumber);
  const emailAddress = sanitizeString(data.emailAddress);
  const subject = sanitizeString(data.subject);
  const message = sanitizeString(data.message);

  if (!fullName || fullName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  } else if (fullName.length > 100) {
    errors.fullName = 'Full name cannot exceed 100 characters.';
  }

  if (!phoneNumber) {
    errors.phoneNumber = 'Phone number is required.';
  } else if (!isValidPhone(phoneNumber)) {
    errors.phoneNumber = 'Please provide a valid contact phone number.';
  }

  if (!emailAddress) {
    errors.emailAddress = 'Email address is required.';
  } else if (!isValidEmail(emailAddress)) {
    errors.emailAddress = 'Please provide a valid email address.';
  }

  if (!subject) {
    errors.subject = 'Please select or provide a subject.';
  } else if (subject.length > 150) {
    errors.subject = 'Subject cannot exceed 150 characters.';
  }

  if (!message || message.length < 5) {
    errors.message = 'Message must be at least 5 characters long.';
  } else if (message.length > 1000) {
    errors.message = 'Message cannot exceed 1000 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      fullName,
      phoneNumber,
      emailAddress,
      subject,
      message,
    },
  };
}

export interface QuoteValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitized: {
    fullName: string;
    companyName: string;
    phoneNumber: string;
    emailAddress: string;
    pickupLocation: string;
    deliveryLocation: string;
    serviceType: string;
    cargoWeight: string;
    cargoType: string;
    notes: string;
  };
}

export function validateQuoteSubmission(data: Record<string, unknown>): QuoteValidationResult {
  const errors: Record<string, string> = {};

  const fullName = sanitizeString(data.fullName);
  const companyName = sanitizeString(data.companyName);
  const phoneNumber = sanitizeString(data.phoneNumber);
  const emailAddress = sanitizeString(data.emailAddress);
  const pickupLocation = sanitizeString(data.pickupLocation);
  const deliveryLocation = sanitizeString(data.deliveryLocation);
  const serviceType = sanitizeString(data.serviceType);
  const cargoWeight = sanitizeString(data.cargoWeight);
  const cargoType = sanitizeString(data.cargoType);
  const notes = sanitizeString(data.notes);

  if (!fullName || fullName.length < 2) {
    errors.fullName = 'Full name is required.';
  }

  if (!phoneNumber || !isValidPhone(phoneNumber)) {
    errors.phoneNumber = 'Valid phone number is required.';
  }

  if (!emailAddress || !isValidEmail(emailAddress)) {
    errors.emailAddress = 'Valid email address is required.';
  }

  if (!pickupLocation) {
    errors.pickupLocation = 'Pickup location is required.';
  }

  if (!deliveryLocation) {
    errors.deliveryLocation = 'Delivery destination is required.';
  }

  if (!serviceType) {
    errors.serviceType = 'Please select a freight service.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      fullName,
      companyName,
      phoneNumber,
      emailAddress,
      pickupLocation,
      deliveryLocation,
      serviceType,
      cargoWeight,
      cargoType,
      notes,
    },
  };
}
