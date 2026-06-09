import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const rawPayload = await request.text();
    const headersList = request.headers;
    const signature = headersList.get('x-businessos-signature');

    // Secure parameter handling simulation
    if (!signature) {
      return NextResponse.json({ error: 'Unauthenticated signature block ignored.' }, { status: 401 });
    }

    return NextResponse.json({ received: true, processedAt: new Date().toISOString() }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

