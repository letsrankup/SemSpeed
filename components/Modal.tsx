import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop mask filter overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Core structural card block content */}
      <div className="bg-surface border border-gray-800 w-full max-w-xl rounded-xl shadow-2xl relative z-10 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between bg-background/30">
          <h3 className="text-base font-bold text-white tracking-wide">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors text-sm font-bold p-1">
            ✕
          </button>
        </div>
        <div className="p-6 text-sm text-gray-300 max-h-[75vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

