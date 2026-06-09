'use client';
import React, { useState } from 'react';
import { DashboardCard } from '@/components/DashboardCard';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';
import { useApp } from '@/context/AppContext';

export default function VoiceAgentConfigurationScreen() {
  const { triggerNotification } = useApp();
  const [leadContext, setLeadContext] = useState('High-Ticket Lead from Pinterest Organic Conversion Layer');
  const [generatedScript, setGeneratedScript] = useState('');
  const [loading, setLoading] = useState(false);

  const processScriptGeneration = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    triggerNotification("Voice Agent drafting spoken scripts structure via neural models...");

    setTimeout(() => {
      setGeneratedScript(`"Hello! I saw you were looking into high-ticket operational systems on our digital matrix recently. I'm calling from Business OS to confirm your baseline target parameters. Do you have two minutes to evaluate your system velocity metrics today?"`);
      setLoading(false);
      triggerNotification("Spoken TTS-Optimized script output complete.");
    }, 1800);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h1 className="text-xl font-black tracking-tight text-white">Neural Voice Call Configuration Center</h1>
        <p className="text-xs text-gray-500 mt-0.5">Map script variations, objections vectors, and TTS latency limits for autonomous outbound telephony dialers.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form onSubmit={processScriptGeneration}>
          <DashboardCard title="Trigger Variable Ingestion" description="Provide base variables for the AI call engine to adjust conversational pacing.">
            <div className="space-y-4">
              <Input label="Lead Dynamic Persona / Custom Metadata" value={leadContext} onChange={(e) => setLeadContext(e.target.value)} required />
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-400">Target Operational Outbound Goal</label>
                <select className="w-full px-4 py-2.5 bg-background border border-gray-800 rounded-lg text-white text-xs outline-none focus:border-primary">
                  <option>B2B Audit Consultation Booking</option>
                  <option>Direct Payment Intent Validation</option>
                  <option>Churn Risk Prevention Analysis</option>
                </select>
              </div>
              <Button type="submit" isLoading={loading} className="w-full">
                Construct Audio-Optimized Dialogue Matrix
              </Button>
            </div>
          </DashboardCard>
        </form>

        <DashboardCard title="Generated Script Output Framework" description="Render layer designed strictly for Low-Latency Text-to-Speech execution blocks.">
          {generatedScript ? (
            <div className="space-y-4">
              <div className="p-4 bg-background border border-purple-900/40 rounded-xl font-mono text-xs text-purple-300 leading-relaxed italic">
                {generatedScript}
              </div>
              <Button onClick={() => triggerNotification("Script configuration dispatched to primary Twilio IVR endpoint.")} variant="secondary" className="w-full text-xs">
                Push Configuration to Active Calling Router
              </Button>
            </div>
          ) : (
            <div className="h-40 border border-dashed border-gray-800 rounded-xl flex items-center justify-center text-xs text-gray-600 font-medium">
              Awaiting contextual token ingestion inputs...
            </div>
          )}
        </DashboardCard>
      </div>
    </div>
  );
}

