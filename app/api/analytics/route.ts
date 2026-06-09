import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    realtimeMetrics: {
      activeUsers: Math.floor(Math.random() * 150) + 20,
      conversionRate: '3.42%',
      averageSessionDuration: '4m 12s',
      bounceRate: '28.4%'
    }
  }, { status: 200 });
}
