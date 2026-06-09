CREATE TABLE public.clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name TEXT NOT NULL,
    contact_email TEXT UNIQUE NOT NULL,
    phone_number TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'churned', 'onboarding')),
    total_revenue DECIMAL(12,2) DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Only authenticated users can view clients" ON public.clients FOR SELECT USING (auth.role() = 'authenticated');

CREATE TRIGGER update_clients_modtime BEFORE UPDATE ON public.clients FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

