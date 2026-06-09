'use client';
import React, { useState } from 'react';
import { DashboardCard } from '@/components/DashboardCard';
import { LeadTable } from '@/components/LeadTable';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import { useApp } from '@/context/AppContext';

export default function CrmHubModule() {
  const { triggerNotification } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Local state tracking database updates emulation
  const [leads, setLeads] = useState([
    { id: '1', name: 'Zayn Rind', source: 'Pinterest CPA Organic', stage: 'Qualified', value: 4500, date: '2026-06-09' },
    { id: '2', name: 'Apex Media Corp', source: 'SEO Cold Outreach', stage: 'Proposal_Sent', value: 12500, date: '2026-06-08' },
    { id: '3', name: 'Balochistan Tech Initiative', source: 'Direct Inbound LinkedIn', stage: 'New', value: 8000, date: '2026-06-09' }
  ]);

  const [formData, setFormData] = useState({ name: '', source: '', value: '' });

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const newLead = {
        id: (leads.length + 1).toString(),
        name: formData.name,
        source: formData.source || 'Manual Injection Network',
        stage: 'New',
        value: parseFloat(formData.value) || 0,
        date: new Date().toISOString().split('T')[0]
      };

      setLeads([newLead, ...leads]);
      setLoading(false);
      setIsModalOpen(false);
      setFormData({ name: '', source: '', value: '' });
      triggerNotification("New commercial client matrix successfully mapped into database stream.");
    }, 1000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-5">
        <div>
          <h1 className="text-xl font-black tracking-tight text-white">CRM Enterprise Lead Ledger</h1>
          <p className="text-xs text-gray-500 mt-0.5">Manage conversions pipelines, client velocity rates, and outbound accounts metrics.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="text-xs px-4 py-2">
          ➕ Inject Custom Corporate Lead
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <DashboardCard title="Funnels Execution Overview Matrix" description="All currently registered incoming contract streams running over autonomous web nodes.">
          <LeadTable data={leads} />
        </DashboardCard>
      </div>

      {/* Corporate Inbound Data Entry Modal Framework */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Inject Corporate Funnel Parameter">
        <form onSubmit={handleCreateLead} className="space-y-4">
          <Input label="Lead / Client Representative Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g., Kevin Sykes" required />
          <Input label="Acquisition Acquisition Channel Source" value={formData.source} onChange={(e) => setFormData({ ...formData, source: e.target.value })} placeholder="e.g., Upwork Premium Campaign" />
          <Input label="Estimated Target Valuation Contract (USD)" value={formData.value} onChange={(e) => setFormData({ ...formData, value: e.target.value })} type="number" placeholder="e.g., 15000" required />
          
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
            <Button variant="ghost" type="button" onClick={() => setIsModalOpen(false)}>Cancel Action</Button>
            <Button type="submit" isLoading={loading}>Commit Target Payload</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
               }
          
