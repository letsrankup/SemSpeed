'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  activeWorkspaceId: string;
  setActiveWorkspaceId: (id: string) => void;
  systemNotification: string | null;
  triggerNotification: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeWorkspaceId, setActiveWorkspaceId] = useState('root-default-space');
  const [systemNotification, setSystemNotification] = useState<string | null>(null);

  const triggerNotification = (msg: string) => {
    setSystemNotification(msg);
    setTimeout(() => setSystemNotification(null), 4000);
  };

  return (
    <AppContext.Provider value={{ activeWorkspaceId, setActiveWorkspaceId, systemNotification, triggerNotification }}>
      {children}
      {systemNotification && (
        <div className="fixed bottom-5 right-5 z-50 bg-surface border border-gray-700 px-4 py-3 rounded-xl shadow-2xl text-xs font-bold text-white tracking-wide animate-in slide-in-from-bottom-5">
          🔔 {systemNotification}
        </div>
      )}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp runtime exception: Component must be wrapped inside AppProvider framework.');
  return context;
};
