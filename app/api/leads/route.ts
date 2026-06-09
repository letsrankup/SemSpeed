import { NextResponse } from 'next/server';

export async function GET() {
  // Return all leads from storage stream
  return NextResponse.json({ success: true, leads: [] }, { status: 200 });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const leadNode = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      source: data.source || 'Inbound Webform',
      status: 'new',
      created_at: new Date().toISOString()
    };

    return NextResponse.json({ success: true, lead: leadNode }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
