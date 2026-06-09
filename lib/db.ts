import { supabase } from './supabase';

export const db = {
  async fetchAll(table: string, queryModifiers = '*') {
    const { data, error } = await supabase.from(table).select(queryModifiers);
    if (error) throw new Error(`Database select failure on table ${table}: ${error.message}`);
    return data;
  },

  async insertRecord(table: string, payload: object) {
    const { data, error } = await supabase.from(table).insert([payload]).select();
    if (error) throw new Error(`Database insert matrix error on ${table}: ${error.message}`);
    return data;
  },

  async updateRecord(table: string, id: string | number, payload: object) {
    const { data, error } = await supabase.from(table).update(payload).eq('id', id).select();
    if (error) throw new Error(`Database transaction mutation failure on ${table}: ${error.message}`);
    return data;
  }
};

