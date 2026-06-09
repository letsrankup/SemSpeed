'use client';
import React, { useState } from 'react';
import { SEOForm } from '@/components/SEOForm';
import { AuditCard } from '@/components/AuditCard';
import { DashboardCard } from '@/components/DashboardCard';
import { useApp } from '@/context/AppContext';

interface AuditReport { id: string; url: string; score: number; performance: number; accessibility: number; bestPractices: number; }

export default function TechnicalSeoCoreDashboard() {
  const { triggerNotification } = useApp();
  const [loading, setLoading] = useState(false);
  const [audits, setAudits] = useState<AuditReport[]>([
    { id: '1', url: 'https://business-os-platform.netlify.app', score: 96, performance: 94, accessibility: 98, bestPractices: 95 }
  ]);

  const handleCrawlExecution = (url: string) => {
    setLoading(true);
    triggerNotification(`Active network sockets allocated. Initiating deep crawler on destination endpoint.`);

    setTimeout(() => {
      // Simulate programmatic calculation matrix output allocation
      const simulatedScore = Math.floor(Math.random() * 15) + 82;
      const newAudit: AuditReport = {
        id: (audits.length + 1).toString(),
        url: url.startsWith('http') ? url : `https://${url}`,
        score: simulatedScore,
        performance: Math.floor(simulatedScore * 0.96),
        accessibility: Math.min(simulatedScore + 4, 100),
        bestPractices: Math.floor(simulatedScore * 0.98)
      };

      setAudits([newAudit, ...audits]);
      setLoading(false);
      triggerNotification("Lighthouse DOM diagnostic trace sequences written to standard log array.");
    }, 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h1 className="text-xl font-black tracking-tight text-white">SEO Realtime Diagnostic Center</h1>
        <p className="text-xs text-gray-500 mt-0.5">Run automatic audits, parse meta structures, and map web parameters dynamically.</p>
      </div>

      <div className="w-full">
        <SEOForm onCrawl={handleCrawlExecution} loading={loading} />
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest font-mono">Historical Trace Reports</h3>
        {audits.map((report) => (
          <AuditCard 
            key={report.id}
            url={report.url}
            score={report.score}
            vitals={{
              performance: report.performance,
              accessibility: report.accessibility,
              bestPractices: report.bestPractices
            }}
            onReaudit={() => handleCrawlExecution(report.url)}
          />
        ))}
      </div>
    </div>
  );
}

