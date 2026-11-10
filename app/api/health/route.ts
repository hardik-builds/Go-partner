import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectToDatabase } from '@/lib/db';

export async function GET() {
  await connectToDatabase();

  const states: Record<number, string> = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  const dbState = states[mongoose.connection.readyState] || 'unknown';

  return NextResponse.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    database: {
      status: dbState,
      name: mongoose.connection.name || 'go_partner',
    },
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  });
}
