CREATE TABLE public.affiliate_ledger (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    affiliate_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    referred_client_id UUID REFERENCES public.clients(id) ON DELETE SET NULL,
    commission_earned DECIMAL(10,2) NOT NULL,
    payout_status TEXT DEFAULT 'pending' CHECK (payout_status IN ('pending', 'approved', 'paid')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
