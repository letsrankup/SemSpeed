import React from 'react';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function DashboardLoadingState() {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-center gap-4">
      <LoadingSpinner size="lg" />
      <p className="text-xs font-mono text-gray-500 tracking-widest uppercase animate-pulse">
        Synchronizing Distributed System Matrices...
      </p>
    </div>
  );
}

