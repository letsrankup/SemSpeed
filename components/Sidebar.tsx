import React from 'react';
import Link from 'next/link';

export const Sidebar: React.FC = () => {
  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'CRM Hub', path: '/crm' },
    { name: 'SEO Core', path: '/seo' },
    { name: 'GEO Matrix', path: '/geo' },
    { name: 'Automations', path: '/automations' },
    { name: 'AI Chat Space', path: '/ai-chat' },
    { name: 'Voice Agents', path: '/voice-agent' },
    { name: 'BI Analytics', path: '/analytics' },
    { name: 'Financials', path: '/billing' },
    { name: 'Settings Hub', path: '/settings' },
  ];

  return (
    <aside className="w-64 h-screen bg-surface border-r border-gray-800 flex flex-col fixed left-0 top-0 z-50">
      <div className="h-16 flex items-center px-6 border-b border-gray-800">
        <span className="text-xl font-bold tracking-wider text-white flex items-center gap-2">
          BUSINESS<span className="text-primary font-black text-sm px-1.5 py-0.5 bg-primary/10 rounded border border-primary/20">OS</span>
        </span>
      </div>
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-400 rounded-lg hover:bg-background hover:text-white transition-all duration-150 group"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-800 bg-background/50 text-center">
        <p className="text-xs text-gray-600 font-mono">v1.0.0-production</p>
      </div>
    </aside>
  );
};

