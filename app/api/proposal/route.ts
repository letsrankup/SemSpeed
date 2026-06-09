import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { clientName, projectScope, totalBudget } = await request.json();

    const proposalMeta = {
      proposal_id: `PROP-${Math.floor(1000 + Math.random() * 9000)}`,
      client: clientName,
      scope: projectScope,
      pricing: totalBudget,
      status: 'draft',
      expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };

    return NextResponse.json({ success: true, proposal: proposalMeta }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
