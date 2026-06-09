'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export function useSupabase() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const queryTableData = async (table: string, columns = '*') => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: dbErr } = await supabase.from(table).select(columns);
      if (dbErr) throw dbErr;
      return data;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const insertTableRecord = async (table: string, payload: object) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: dbErr } = await supabase.from(table).insert([payload]).select();
      if (dbErr) throw dbErr;
      return data;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, queryTableData, insertTableRecord };
  }
    
