CREATE TABLE public.automations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workflow_name TEXT NOT NULL,
    is_active BOOLEAN DEFAULT false,
    trigger_node JSONB NOT NULL,
    action_nodes JSONB NOT NULL,
    execution_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER update_automations_modtime BEFORE UPDATE ON public.automations FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
