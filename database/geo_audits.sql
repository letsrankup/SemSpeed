CREATE TABLE public.geo_audits (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    brand_entity TEXT NOT NULL,
    visibility_score DECIMAL(5,2),
    ai_mentions_count INTEGER DEFAULT 0,
    metrics_payload JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
