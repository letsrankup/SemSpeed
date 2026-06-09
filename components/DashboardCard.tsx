import React from 'react';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, children, className, action }) => {
  return (
    <div className={cn("bg-surface/60 backdrop-blur-md border border-gray-800 rounded-xl p-6 shadow-xl relative overflow-hidden transition-all duration-300 hover:border-gray-700/80 group", className)}>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-center justify-between mb-4 gap-4">
        <div>
          <h3 className="text-base font-bold text-gray-100 tracking-wide">{title}</h3>
          {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </div>
      <div className="w-full text-gray-300">{children}</div>
    </div>
  );
};

