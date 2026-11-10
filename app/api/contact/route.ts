import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import ContactEnquiry from '@/lib/models/ContactEnquiry';
import { checkRateLimit } from '@/lib/rateLimit';
import { validateContactSubmission } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown-ip';

    const rateLimit = checkRateLimit(`contact_${ip}`, {
      windowMs: 10 * 60 * 1000, // 10 minutes
      max: 10, // max 10 requests per 10 minutes
    });

    if (rateLimit.isRateLimited) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a few minutes before submitting again.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': '600',
            'X-RateLimit-Remaining': '0',
          },
        }
      );
    }

    // 2. Parse and Validate Request Body
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid request payload.' },
        { status: 400 }
      );
    }

    const validation = validateContactSubmission(body);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please verify your form inputs.',
          errors: validation.errors,
        },
        { status: 422 }
      );
    }

    // 3. Connect to Database & Persist
    const db = await connectToDatabase();
    let savedRecord = null;

    if (db) {
      try {
        savedRecord = await ContactEnquiry.create({
          ...validation.sanitized,
          ipAddress: ip,
          status: 'new',
        });
      } catch (dbErr) {
        console.warn('MongoDB save warning, proceeding with response:', dbErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
        referenceId: savedRecord?._id || `GP-${Date.now().toString().slice(-6)}`,
      },
      {
        status: 201,
        headers: {
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected server error occurred. Please try again or contact us via email.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'operational',
    service: 'GO-PARTNER Contact API',
    timestamp: new Date().toISOString(),
  });
}
