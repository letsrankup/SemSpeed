import React from 'react';

interface AuditCardProps {
  url: string;
  score: number;
  vitals: { performance: number; accessibility: number; bestPractices: number };
  onReaudit?: () => void;
}

export const AuditCard: React.FC<AuditCardProps> = ({ url, score, vitals, onReaudit }) => {
  const getScoreColor = (s: number) => s >= 90 ? 'text-green-400 border-green-500/20 bg-green-500/5' : s >= 50 ? 'text-yellow-400 border-yellow-500/20 bg-yellow-500/5' : 'text-red-400 border-red-500/20 bg-red-500/5';

  return (
    <div className="bg-surface border border-gray-800 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-5 w-full md:w-auto">
        <div className={`w-16 h-16 rounded-full border flex items-center justify-center font-black text-xl tracking-tight ${getScoreColor(score)}`}>
          {score}
        </div>
        <div>
          <h4 className="text-base font-bold text-white truncate max-w-[240px] md:max-w-xs">{url}</h4>
          <p className="text-xs text-gray-500 mt-0.5">Core Lighthouse Diagnostics Pipeline</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6 w-full md:w-auto text-center border-t border-b md:border-none border-gray-800 py-4 md:py-0">
        <div>
          <p className="text-xs text-gray-500 font-medium">Perf</p>
          <p className="text-sm font-bold text-gray-200 mt-0.5">{vitals.performance}%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">Access</p>
          <p className="text-sm font-bold text-gray-200 mt-0.5">{vitals.accessibility}%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">BestPrac</p>
          <p className="text-sm font-bold text-gray-200 mt-0.5">{vitals.bestPractices}%</p>
        </div>
      </div>

      {onReaudit && (
        <button onClick={onReaudit} className="w-full md:w-auto px-4 py-2 bg-background hover:bg-gray-800 border border-gray-700 text-xs font-semibold rounded-lg text-gray-300 transition-colors">
          Trigger Re-Audit
        </button>
      )}
    </div>
  );
};
            
