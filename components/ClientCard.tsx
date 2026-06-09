import React from 'react';

interface ClientCardProps {
  companyName: string;
  contractStatus: 'active' | 'paused' | 'terminated';
  accountManager: string;
  billingCycle: string;
}

export const ClientCard: React.FC<ClientCardProps> = ({ companyName, contractStatus, accountManager, billingCycle }) => {
  return (
    <div className="bg-surface border border-gray-800 p-5 rounded-xl flex items-center justify-between shadow-md">
      <div className="space-y-1">
        <h4 className="text-base font-bold text-white">{companyName}</h4>
        <p className="text-xs text-gray-500">Owner ID: <span className="text-gray-400 font-medium">{accountManager}</span></p>
      </div>
      <div className="text-right space-y-2">
        <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
          contractStatus === 'active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
        }`}>
          {contractStatus}
        </span>
        <p className="text-xs text-gray-500 tracking-tight font-mono">{billingCycle}</p>
      </div>
    </div>
  );
};

