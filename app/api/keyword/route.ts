import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { query, geoTarget } = await request.json();
    
    return NextResponse.json({
      success: true,
      keyword: query,
      searchVolume: 14800,
      keywordDifficulty: 42,
      cpc: "$2.45",
      intent: "commercial"
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

