import { supabase } from './supabase';

export async function uploadAsset(bucket: string, path: string, fileObject: File) {
  const { data, error } = await supabase.storage.from(bucket).upload(path, fileObject, {
    cacheControl: '3600',
    upsert: true
  });

  if (error) throw new Error(`Asset pipeline storage upload breakdown: ${error.message}`);
  
  const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(path);
  return publicUrlData.publicUrl;
}
