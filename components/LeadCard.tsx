import React from 'react';

interface LeadCardProps {
  name: string;
  company: string;
  value: number;
  stage: string;
  email: string;
}

export const LeadCard: React.FC<LeadCardProps> = ({ name, company, value, stage, email }) => {
  return (
    <div className="bg-surface/80 border border-gray-800 p-5 rounded-xl shadow-lg hover:border-gray-700 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="text-sm font-bold text-white tracking-wide">{name}</h4>
          <p className="text-xs text-gray-400">{company}</p>
        </div>
        <span className="text-xs px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md font-mono font-bold">
          ${value.toLocaleString()}
        </span>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-gray-800/60 mt-4">
        <p className="text-xs font-medium text-gray-500 truncate max-w-[150px]">{email}</p>
        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-gray-800 text-gray-300 rounded">
          {stage}
        </span>
      </div>
    </div>
  );
};
