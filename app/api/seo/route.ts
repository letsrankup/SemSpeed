import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { action, domain } = await request.json();

    return NextResponse.json({ 
      success: true, 
      action,
      domain,
      metrics: { domain_authority: 45, total_backlinks: 1240, organic_keywords: 310 }
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

