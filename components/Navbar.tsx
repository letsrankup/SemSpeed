import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="h-16 w-full bg-surface/50 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <span className="text-xs px-2.5 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20 font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          AI Engine Active
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-white">Admin Operator</p>
          <p className="text-xs text-gray-500">Root Infrastructure</p>
        </div>
        <div className="w-9 h-9 bg-primary/20 text-primary border border-primary/30 rounded-full flex items-center justify-center font-bold text-sm">
          A
        </div>
      </div>
    </header>
  );
};
