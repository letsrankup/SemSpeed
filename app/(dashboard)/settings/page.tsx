'use client';
import React, { useState } from 'react';
import { DashboardCard } from '@/components/DashboardCard';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { useApp } from '@/context/AppContext';

export default function GlobalSettingsDashboard() {
  const { triggerNotification } = useApp();
  const [workspace, setWorkspace] = useState('Root Master Network');
  const [saving, setSaving] = useState(false);

  const saveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      triggerNotification("Distributed matrix configurations written to global metadata cache.");
    }, 1000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h1 className="text-xl font-black tracking-tight text-white">System Environment Controls</h1>
        <p className="text-xs text-gray-500 mt-0.5">Toggle live pipeline nodes, rotate encryption flags, and configure operational variables paths.</p>
      </div>

      <form onSubmit={saveSettings} className="max-w-2xl">
        <DashboardCard title="Core Metadata Configuration Blocks" description="Primary operational parameters mapping definitions.">
          <div className="space-y-4">
            <Input label="Workspace Operational Handle Identity" value={workspace} onChange={(e) => setWorkspace(e.target.value)} required />
            <Input label="Default OpenRouter Model Sequence Target" value="meta-llama/llama-3.3-70b-instruct" disabled />
            <div className="p-3 bg-purple-500/5 border border-purple-500/10 rounded-lg text-xs text-purple-400 font-mono">
              ⚠️ Security Warning: Rotating cryptographic operational codes clears active browser-persisted user verification strings.
            </div>
            <Button type="submit" isLoading={saving}>Commit Global Matrix Modification</Button>
          </div>
        </DashboardCard>
      </form>
    </div>
  );
              }
            
