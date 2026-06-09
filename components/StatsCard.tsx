import React from 'react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  label: string;
  value: string | number;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
  loading?: boolean;
}

export const StatsCard: React.FC<StatsCardProps> = ({ label, value, trend, trendDirection = 'neutral', loading }) => {
  return (
    <div className="bg-surface border border-gray-800 rounded-xl p-6 shadow-md transition-transform duration-200 hover:-translate-y-0.5">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</p>
      {loading ? (
        <div className="h-8 w-24 bg-gray-800 animate-pulse rounded mt-2" />
      ) : (
        <div className="flex items-baseline gap-3 mt-1.5">
          <span className="text-3xl font-black tracking-tight text-white">{value}</span>
          {trend && (
            <span className={cn(
              "text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1",
              trendDirection === 'up' && "bg-green-500/10 text-green-400",
              trendDirection === 'down' && "bg-red-500/10 text-red-400",
              trendDirection === 'neutral' && "bg-gray-800 text-gray-400"
            )}>
              {trendDirection === 'up' && '▲'}
              {trendDirection === 'down' && '▼'}
              {trend}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
