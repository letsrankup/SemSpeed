import React from 'react';

interface AutomationNodeProps {
  title: string;
  type: 'trigger' | 'action' | 'condition';
  status: 'idle' | 'running' | 'success' | 'failed';
  configSummary: string;
}

export const AutomationNode: React.FC<AutomationNodeProps> = ({ title, type, status, configSummary }) => {
  return (
    <div className="w-full max-w-xs bg-surface border border-gray-800 rounded-xl p-4 relative shadow-lg group hover:border-primary/40 transition-colors">
      <div className={`absolute top-0 bottom-0 left-0 w-1.5 rounded-l-xl ${
        type === 'trigger' ? 'bg-purple-500' : type === 'condition' ? 'bg-yellow-500' : 'bg-blue-500'
      }`} />
      
      <div className="pl-3 flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-gray-500">{type}</span>
          <span className={`w-2 h-2 rounded-full ${
            status === 'success' ? 'bg-green-400 animate-pulse' : status === 'failed' ? 'bg-red-400' : 'bg-gray-600'
          }`} />
        </div>
        <h4 className="text-sm font-bold text-white tracking-wide mt-1">{title}</h4>
        <p className="text-xs text-gray-400 truncate mt-0.5">{configSummary}</p>
      </div>
    </div>
  );
};
