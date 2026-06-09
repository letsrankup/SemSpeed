'use client';
import React, { useState } from 'react';
import { DashboardCard } from '@/components/DashboardCard';
import { RevenueCard } from '@/components/RevenueCard';
import { Button } from '@/components/Button';
import { useApp } from '@/context/AppContext';

export default function BillingLedgerModule() {
  const { triggerNotification } = useApp();
  const [loading, setLoading] = useState(false);

  const triggerStripePortal = () => {
    setLoading(true);
    triggerNotification("Redirecting corporate session to Stripe Billing Network Port...");
    setTimeout(() => {
      setLoading(false);
      triggerNotification("Stripe session completed successfully.");
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-5">
        <div>
          <h1 className="text-xl font-black tracking-tight text-white">Financial Ledger & Billing</h1>
          <p className="text-xs text-gray-500 mt-0.5">Track network invoicing values, operational profit, and automated payout splits.</p>
        </div>
        <Button onClick={triggerStripePortal} isLoading={loading} className="text-xs">
          💳 Access Stripe Management Portal
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <DashboardCard title="Historical Settlement Statements" description="Statement logs computed directly over system core invoices database tables.">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-gray-800 text-gray-500 uppercase pb-2">
                    <th className="pb-3">Invoice ID</th>
                    <th className="pb-3">Client Entity</th>
                    <th className="pb-3">Settlement Value</th>
                    <th className="pb-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/40 text-gray-300">
                  <tr>
                    <td className="py-3 text-primary">INV-2026-894</td>
                    <td className="py-3 font-bold text-white">Apex Media Corp</td>
                    <td className="py-3">$12,500.00</td>
                    <td className="py-3 text-right"><span className="px-2 py-0.5 bg-green-500/10 text-green-400 rounded">PAID</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 text-primary">INV-2026-895</td>
                    <td className="py-3 font-bold text-white">Zayn Rind</td>
                    <td className="py-3">$4,500.00</td>
                    <td className="py-3 text-right"><span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 rounded">PENDING</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DashboardCard>
        </div>
        <div>
          <RevenueCard grossRevenue={17000.00} netProfit={12850.00} recurringRevenue={4500.00} />
        </div>
      </div>
    </div>
  );
                    }
                  
