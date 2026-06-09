import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const clientData = await request.json();
    return NextResponse.json({
      success: true,
      clientId: `CLI-${crypto.randomUUID().substring(0, 8).toUpperCase()}`,
      status: 'active',
      timestamp: new Date().toISOString()
    }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
