import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { baseOfferUrl, subId } = await request.json();
    const cloakedUrl = `https://os.letsrankup.com/lnk?id=${subId || 'gen'}&hash=${Math.random().toString(36).substring(5)}`;
    
    return NextResponse.json({
      success: true,
      originalOffer: baseOfferUrl,
      generatedTrackingUrl: cloakedUrl
    }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
                              }
