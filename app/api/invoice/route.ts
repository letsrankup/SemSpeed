import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { items, taxRate, currency } = await request.json();
    const subtotal = items.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);
    const total = subtotal + (subtotal * (taxRate / 100));

    return NextResponse.json({
      success: true,
      invoiceSummary: { subtotal, taxApplied: `${taxRate}%`, grandTotal: total, currency: currency || 'USD' }
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
