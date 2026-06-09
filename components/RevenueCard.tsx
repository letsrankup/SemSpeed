import React from 'react';

interface RevenueCardProps {
  grossRevenue: number;
  netProfit: number;
  recurringRevenue: number;
  currency?: string;
}

export const RevenueCard: React.FC<RevenueCardProps> = ({ grossRevenue, netProfit, recurringRevenue, currency = '$' }) => {
  const format = (num: number) => new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(num);

  return (
    <div className="bg-gradient-to-br from-surface to-surface/40 border border-gray-800 rounded-xl p-6 shadow-xl">
      <div className="border-b border-gray-800 pb-4 mb-4">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider">Gross Network Value</p>
        <p className="text-4xl font-extrabold text-white mt-1">{currency}{format(grossRevenue)}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-500 font-medium">Net Operational Profit</p>
          <p className="text-lg font-bold text-green-400 mt-0.5">{currency}{format(netProfit)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">Monthly MRR Layer</p>
          <p className="text-lg font-bold text-blue-400 mt-0.5">{currency}{format(recurringRevenue)}</p>
        </div>
      </div>
    </div>
  );
};

