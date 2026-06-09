CREATE TABLE public.proposals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content_html TEXT NOT NULL,
    value DECIMAL(12,2) NOT NULL,
    status TEXT DEFAULT 'sent' CHECK (status IN ('draft', 'sent', 'accepted', 'declined')),
    token TEXT UNIQUE DEFAULT encode(gen_random_bytes(32), 'hex'), -- Secure link for client viewing
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER update_proposals_modtime BEFORE UPDATE ON public.proposals FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

