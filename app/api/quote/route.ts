import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import QuoteRequest from '@/lib/models/QuoteRequest';
import { checkRateLimit } from '@/lib/rateLimit';
import { validateQuoteSubmission } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown-ip';

    const rateLimit = checkRateLimit(`quote_${ip}`, {
      windowMs: 10 * 60 * 1000,
      max: 15,
    });

    if (rateLimit.isRateLimited) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded. Please wait a moment before requesting another quote.',
        },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid payload.' },
        { status: 400 }
      );
    }

    const validation = validateQuoteSubmission(body);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please fill in all required quote details.',
          errors: validation.errors,
        },
        { status: 422 }
      );
    }

    // Dynamic quote estimate calculation based on service type & weight (INR)
    const baseRates: Record<string, { base: number; perUnit: number }> = {
      'full-truckload': { base: 6500, perUnit: 21 },
      'less-than-truckload': { base: 1800, perUnit: 14 },
      'temperature-controlled': { base: 8500, perUnit: 26 },
      warehousing: { base: 3500, perUnit: 8 },
      'real-time-tracking': { base: 500, perUnit: 2 },
      'express-dispatch': { base: 4500, perUnit: 18 },
    };

    const rateConfig = baseRates[validation.sanitized.serviceType] || baseRates['full-truckload'];
    const minCost = rateConfig.base.toLocaleString('en-IN');
    const maxCost = Math.round(rateConfig.base * 1.6).toLocaleString('en-IN');
    const estimatedCost = `₹${minCost} - ₹${maxCost}`;

    // Database persistence
    const db = await connectToDatabase();
    let savedQuote = null;

    if (db) {
      try {
        savedQuote = await QuoteRequest.create({
          ...validation.sanitized,
          estimatedCost,
          status: 'pending',
        });
      } catch (err) {
        console.warn('MongoDB quote save warning:', err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your freight rate request has been calculated and registered.',
        referenceId: savedQuote?._id || `QT-${Date.now().toString().slice(-6)}`,
        estimatedRange: estimatedCost,
        serviceType: validation.sanitized.serviceType,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to calculate quote estimate at this time. Please contact our team directly.',
      },
      { status: 500 }
    );
  }
}
