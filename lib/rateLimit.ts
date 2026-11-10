/**
 * Lightweight, in-memory sliding window rate limiter for Next.js API routes.
 * Protects against spam, automated bots, and abusive request spikes.
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const memoryStore = new Map<string, RateLimitRecord>();

// Periodic cleanup every 5 minutes to prevent memory leaks
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    memoryStore.forEach((value, key) => {
      if (now > value.resetTime) {
        memoryStore.delete(key);
      }
    });
  }, 5 * 60 * 1000);
}

export interface RateLimitOptions {
  windowMs?: number; // Time window in milliseconds (default: 15 minutes)
  max?: number; // Max requests allowed per window (default: 20)
}

export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = {}
): { isRateLimited: boolean; remaining: number; resetTime: number } {
  const windowMs = options.windowMs || 15 * 60 * 1000;
  const max = options.max || 20;
  const now = Date.now();

  const record = memoryStore.get(identifier);

  if (!record || now > record.resetTime) {
    // New window
    const newRecord: RateLimitRecord = {
      count: 1,
      resetTime: now + windowMs,
    };
    memoryStore.set(identifier, newRecord);
    return {
      isRateLimited: false,
      remaining: max - 1,
      resetTime: newRecord.resetTime,
    };
  }

  // Existing window
  if (record.count >= max) {
    return {
      isRateLimited: true,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  record.count += 1;
  return {
    isRateLimited: false,
    remaining: max - record.count,
    resetTime: record.resetTime,
  };
}
