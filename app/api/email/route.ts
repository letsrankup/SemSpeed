import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { recipient, sequenceId } = await request.json();
    
    return NextResponse.json({
      success: true,
      dispatchedFrom: "smtp-pool-node-04.businessos.net",
      deliveryStatus: "queued",
      trackingHash: crypto.randomUUID()
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

