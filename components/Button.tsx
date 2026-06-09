import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  isLoading, 
  ...props 
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]",
        variant === 'primary' && "bg-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20",
        variant === 'secondary' && "bg-surface hover:bg-gray-700 text-gray-200 border border-gray-700",
        variant === 'danger' && "bg-red-600 hover:bg-red-700 text-white",
        variant === 'ghost' && "bg-transparent hover:bg-surface text-gray-400 hover:text-white",
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : children}
    </button>
  );
};
        
