import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  try {
    const { dealId, targetStage, value } = await request.json();
    
    return NextResponse.json({
      success: true,
      message: `Deal ${dealId} successfully shifted to ${targetStage}`,
      updatedData: { dealId, stage: targetStage, metrics: { adjustedValue: value } }
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

