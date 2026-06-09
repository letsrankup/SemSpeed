'use client';
import { useState } from 'react';

export function useAI() {
  const [processing, setProcessing] = useState(false);

  const executeOpenRouterCall = async (prompt: string, agentRoute: 'seo' | 'geo' | 'content' | 'chat') => {
    setProcessing(true);
    try {
      const response = await fetch(`/api/${agentRoute}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, timestamp: new Date().toISOString() })
      });
      
      const payload = await response.json();
      if (!payload.success) throw new Error(payload.error || 'Pipeline resolution mismatch.');
      return payload.data || payload;
    } catch (err: any) {
      console.error(`AI custom hook network failure inside route [${agentRoute}]:`, err.message);
      return { success: false, error: err.message };
    } finally {
      setProcessing(false);
    }
  };

  return { processing, executeOpenRouterCall };
}

