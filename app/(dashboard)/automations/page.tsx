'use client';
import React, { useState } from 'react';
import { DashboardCard } from '@/components/DashboardCard';
import { AutomationNode } from '@/components/AutomationNode';
import { Button } from '@/components/Button';
import { useApp } from '@/context/AppContext';

export default function AutomationsBuilderDashboard() {
  const { triggerNotification } = useApp();
  const [processing, setProcessing] = useState(false);

  // Structural mapping states emulation
  const [workflows, setWorkflows] = useState([
    { id: 'wf-1', name: 'Pinterest CPA High-Ticket Funnel Router', isActive: true, triggers: 'Webhook: New Offer Conversion Trigger Click' },
    { id: 'wf-2', name: 'SEO Lead Nurture & Database Synchronization Loop', isActive: false, triggers: 'Supabase Event: Row Inserted inside profiles' }
  ]);

  const toggleWorkflowStatus = (id: string) => {
    setWorkflows(workflows.map(wf => wf.id === id ? { ...wf, isActive: !wf.isActive } : wf));
    triggerNotification("System lifecycle parameters state toggled securely.");
  };

  const dispatchTestExecution = () => {
    setProcessing(true);
    triggerNotification("Dispatching simulated payload down custom processing arrays...");

    setTimeout(() => {
      setProcessing(false);
      triggerNotification("All conditional graph logic constraints safely passed operational checks.");
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-5">
        <div>
          <h1 className="text-xl font-black tracking-tight text-white">System Automation Graphs Control</h1>
          <p className="text-xs text-gray-500 mt-0.5">Construct, trace, and audit visual macro sequences execution lifecycles safely.</p>
        </div>
        <Button onClick={dispatchTestExecution} isLoading={processing} variant="secondary" className="text-xs">
          ⚙️ Direct Trigger Pipeline Smoke Test
        </Button>
      </div>

      {/* Visual Execution Graph Container Simulation */}
      <div className="bg-background border border-gray-800 rounded-xl p-6 flex flex-col md:flex-row items-center justify-center gap-6 relative overflow-hidden min-h-[180px]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        
        <AutomationNode title="Inbound Webhook Caught" type="trigger" status="success" configSummary="Endpoint: /api/v1/catch-lead" />
        <div className="text-gray-600 font-bold hidden md:block">➔</div>
        <AutomationNode title="AI Intent Filter Mapping" type="condition" status="success" configSummary="Prompt: Match target context weight" />
        <div className="text-gray-600 font-bold hidden md:block">➔</div>
        <AutomationNode title="Supabase Sync & Outbound Call" type="action" status="idle" configSummary="Table: public.leads" />
      </div>

      {/* Active Workflows Status Grid Ledger */}
      <div className="grid grid-cols-1 gap-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest font-mono">Active Engine Orchestrators</h3>
        
        {workflows.map((wf) => (
          <div key={wf.id} className="bg-surface border border-gray-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gray-700/60 transition-colors">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white tracking-wide">{wf.name}</h4>
              <p className="text-xs text-gray-400 font-mono">{wf.triggers}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded ${
                wf.isActive ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-gray-800 text-gray-500'
              }`}>
                {wf.isActive ? 'active runtime' : 'stalled'}
              </span>
              <Button onClick={() => toggleWorkflowStatus(wf.id)} variant={wf.isActive ? 'ghost' : 'secondary'} className="text-xs py-1.5 px-3">
                {wf.isActive ? 'Halt Automation' : 'Deploy Automation'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
        }
        
