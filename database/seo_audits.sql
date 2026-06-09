CREATE TABLE public.seo_audits (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    target_url TEXT NOT NULL,
    overall_score INTEGER NOT NULL,
    audit_payload JSONB NOT NULL, -- Stores dynamic issues and arrays
    performed_by UUID REFERENCES public.profiles(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_seo_target_url ON public.seo_audits(target_url);

