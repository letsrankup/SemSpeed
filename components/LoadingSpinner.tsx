import React from 'react';

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  return (
    <div className="flex items-center justify-center py-4 w-full">
      <div className={`border-2 border-primary/20 border-t-primary rounded-full animate-spin ${
        size === 'sm' ? 'w-5 h-5' : size === 'md' ? 'w-8 h-8' : 'w-12 h-12'
      }`} />
    </div>
  );
};
