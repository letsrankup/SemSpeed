import { supabase } from './supabase';

export function subscribeToLiveTable(table: string, callback: (payload: any) => void) {
  const channel = supabase
    .channel(`public-realtime-${table}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: table }, (payload) => {
      callback(payload);
    })
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}
