CREATE TABLE public.content_hub (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    body_content TEXT NOT NULL,
    meta_tags JSONB DEFAULT '[]'::jsonb,
    word_count INTEGER NOT NULL,
    seo_score INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER update_content_hub_modtime BEFORE UPDATE ON public.content_hub FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
