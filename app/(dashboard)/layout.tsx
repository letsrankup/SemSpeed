import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { AppProvider } from '@/context/AppContext';

export const metadata = {
  title: 'Business OS - Command Center',
  description: 'Enterprise Autonomous Orchestration Node Strategy Grid',
};

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <AppLayout>{children}</AppLayout>
    </AppProvider>
  );
}

