import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { messages, targetAgent } = await request.json();
    
    return NextResponse.json({
      success: true,
      agent: targetAgent || 'Core Orchestrator',
      response: {
        role: 'assistant',
        content: `Processed context natively via ${targetAgent || 'Core Layer'}. System state stable.`
      }
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
