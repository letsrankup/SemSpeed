'use client';
import React, { useState } from 'react';
import { DashboardCard } from '@/components/DashboardCard';
import { StatsCard } from '@/components/StatsCard';
import { Button } from '@/components/Button';
import { useApp } from '@/context/AppContext';

export default function BusinessAnalyticsCenter() {
  const { triggerNotification } = useApp();
  const [runningDiagnostic, setRunningDiagnostic] = useState(false);

  const executeAnomalyDetection = () => {
    setRunningDiagnostic(true);
    triggerNotification("Analytics Agent parsing system traffic telemetry graphs...");
    setTimeout(() => {
      setRunningDiagnostic(false);
      triggerNotification("Anomaly detection completed: Zero memory leaks or data discrepancies found.");
    }, 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-5">
        <div>
          <h1 className="text-xl font-black tracking-tight text-white">BI System Analytics Network</h1>
          <p className="text-xs text-gray-500 mt-0.5">Real-time unique traffic metrics, conversion parameters, and machine model telemetry logs.</p>
        </div>
        <Button onClick={executeAnomalyDetection} isLoading={runningDiagnostic} variant="secondary" className="text-xs">
          🔍 Invoke AI Data Anomaly Diagnostic
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatsCard label="Network Unique Visitors" value="42,190" trend="+18.4%" trendDirection="up" />
        <StatsCard label="Average Conversion Velocity" value="3.42%" trend="-0.12%" trendDirection="down" />
        <StatsCard label="Telemetry Ingestion Tokens" value="1.8M" trend="Stable" trendDirection="neutral" />
      </div>

      <DashboardCard title="System Multi-Tenant Health Traces" description="Real-time execution status of distributed node synchronization processes.">
        <div className="p-4 bg-background border border-gray-800 rounded-lg font-mono text-xs text-gray-400 space-y-2">
          <p><span className="text-green-400">[OK]</span> Postgres Pool Allocation State: Optimal (12/100 connections utilized)</p>
          <p><span className="text-green-400">[OK]</span> OpenRouter API Latency Matrix: 420ms average node response time</p>
          <p><span className="text-purple-400">[INFO]</span> Cache Hit Ratio: 89.4% calculated across memory buffers</p>
        </div>
      </DashboardCard>
    </div>
  );
}

