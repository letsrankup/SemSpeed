'use client';
import React, { useEffect, useState } from 'react';
import { StatsCard } from '@/components/StatsCard';
import { DashboardCard } from '@/components/DashboardCard';
import { RevenueCard } from '@/components/RevenueCard';
import { LeadTable } from '@/components/LeadTable';
import { useApp } from '@/context/AppContext';

export default function MasterDashboardGrid() {
  const { triggerNotification } = useApp();
  const [loading, setLoading] = useState(true);

  // Sample static high precision mock matrix arrays for operational rendering
  const mockLeads = [
    { id: '1', name: 'Zayn Rind', source: 'Pinterest CPA Organic', stage: 'Qualified', value: 4500, date: '2026-06-09' },
    { id: '2', name: 'Apex Media Corp', source: 'SEO Cold Outreach', stage: 'Proposal_Sent', value: 12500, date: '2026-06-08' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      triggerNotification("System metrics engine successfully pipeline connected.");
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Welcome Title Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">System Operations Commander</h1>
          <p className="text-xs text-gray-500 mt-1">Cross-platform integration nodes tracking pipeline operations.</p>
        </div>
        <div className="text-xs font-mono bg-surface border border-gray-800 px-4 py-2 rounded-lg text-gray-400">
          SYSTEM CLOCK: <span className="text-primary font-bold">2026-06-09</span>
        </div>
      </div>

      {/* Grid Allocation Row: Core Stats Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatsCard label="Active Funnels Inbound" value={14} trend="+28%" trendDirection="up" loading={loading} />
        <StatsCard label="Technical SEO Score" value="94 / 100" trend="Stable" trendDirection="neutral" loading={loading} />
        <StatsCard label="GEO Citation Multiplier" value="4.8x" trend="+14%" trendDirection="up" loading={loading} />
        <StatsCard label="Automation Success Ratio" value="99.94%" trend="Optimal" trendDirection="neutral" loading={loading} />
      </div>

      {/* Analytics Visualization Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DashboardCard title="Active Inbound Pipelines Ledger" description="Real-time execution capture across automated lead discovery nodes.">
            <LeadTable data={loading ? [] : mockLeads} />
          </DashboardCard>
        </div>
        
        <div>
          <RevenueCard grossRevenue={84320.00} netProfit={61450.50} recurringRevenue={12400.00} />
        </div>
      </div>
    </div>
  );
      }
        
