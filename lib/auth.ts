import { supabase } from './supabase';

export async function getUserSession() {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) {
    console.error("Auth session extraction failure:", error.message);
    return null;
  }
  return session;
}

export async function checkRolePermission(userId: string, requiredRole: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single();

  if (error || !data) return false;
  return data.role === requiredRole;
}
