import { createClient } from '@supabase/supabase-js';

export class DBConnectionPoolOrchestrator {
  private static masterInstance: any = null;

  public static acquireClientInstance() {
    if (!this.masterInstance) {
      const dbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const dbKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

      if (!dbUrl || !dbKey) {
        throw new Error("Missing environment connection tokens for master instance allocation.");
      }
      this.masterInstance = createClient(dbUrl, dbKey, {
        auth: { persistSession: false }
      });
    }
    return this.masterInstance;
  }
}

