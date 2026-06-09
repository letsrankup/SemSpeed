'use client';
import React, { useState } from 'react';
import { ChatPanel } from '@/components/ChatPanel';
import { useApp } from '@/context/AppContext';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function MultiAgentChatSpace() {
  const { triggerNotification } = useApp();
  const [activeAgent, setActiveAgent] = useState<'SEO Optimizer' | 'GEO Strategic Engine' | 'Sales Executive'>('SEO Optimizer');
  const [loading, setLoading] = useState(false);

  // Maintain isolated thread tracking matrices across separate core agent systems
  const [conversations, setConversations] = useState<Record<string, Message[]>>({
    'SEO Optimizer': [
      { id: '1', role: 'assistant', content: 'Lead Tech SEO Engine active. Dispatch a domain layout or target query schema vector for immediate semantic evaluation.' }
    ],
    'GEO Strategic Engine': [
      { id: '1', role: 'assistant', content: 'Generative visibility vectors pipeline online. Provide legal brand configurations to trace cross-LLM citation probability mappings.' }
    ],
    'Sales Executive': [
      { id: '1', role: 'assistant', content: 'Enterprise Sales closer node online. Provide raw conversion logs or inbound client constraints to dynamically format winning B2B contract proposals.' }
    ]
  });

  const handleMessageDispatch = (text: string) => {
    // 1. Instantly capture and commit localized user content payload
    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: text };
    const currentHistory = conversations[activeAgent];
    
    const updatedHistory = [...currentHistory, userMessage];
    setConversations({ ...conversations, [activeAgent]: updatedHistory });
    setLoading(true);

    // 2. Mock dynamic context pipeline reflection mechanism
    setTimeout(() => {
      let responsePayload = "Context execution parameter parsed successfully.";
      if (activeAgent === 'SEO Optimizer') {
        responsePayload = `Analyzed prompt parameters for keyword semantic clusters. Recommended action: inject LSI entity arrays in proximity to Header 2 nodes.`;
      } else if (activeAgent === 'GEO Strategic Engine') {
        responsePayload = `RAG context optimization framework updated. Simulated perplexity index citation weight increased to +12.4% over basic entity clusters.`;
      } else if (activeAgent === 'Sales Executive') {
        responsePayload = `B2B dynamic outline formulated. Calculated conversion vector matching tier-A high ticket proposal structural values.`;
      }

      const assistantMessage: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: responsePayload };
      setConversations({
        ...conversations,
        [activeAgent]: [...updatedHistory, assistantMessage]
      });
      setLoading(false);
      triggerNotification(`Response stream resolved via OpenRouter context arrays for [${activeAgent}].`);
    }, 1800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 animate-in fade-in duration-200">
      {/* Left Columns - Multi-Agent System Core Switches Selector */}
      <div className="lg:col-span-1 space-y-3">
        <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold px-2 mb-4">
          Available Context Nodes
        </h3>
        
        {(['SEO Optimizer', 'GEO Strategic Engine', 'Sales Executive'] as const).map((agent) => (
          <button
            key={agent}
            onClick={() => {
              setActiveAgent(agent);
              triggerNotification(`Routing conversational pipeline context to: ${agent}`);
            }}
            className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all flex flex-col gap-1 ${
              activeAgent === agent
                ? 'bg-primary/10 border-primary text-white shadow-lg shadow-primary/5'
                : 'bg-surface border-gray-800 text-gray-400 hover:text-gray-200 hover:border-gray-700/60'
            }`}
          >
            <span>{agent}</span>
            <span className="text-[10px] font-mono text-gray-500 font-normal">
              {agent === 'SEO Optimizer' && 'Lighthouse NLP Focus'}
              {agent === 'GEO Strategic Engine' && 'RAG Ingestion Strategy'}
              {agent === 'Sales Executive' && 'B2B High Ticket Closer'}
            </span>
          </button>
        ))}
      </div>

      {/* Right Column - Dedicated Live Conversational Routing Screen */}
      <div className="lg:col-span-3">
        <ChatPanel
          agentName={activeAgent}
          messages={conversations[activeAgent]}
          onSendMessage={handleMessageDispatch}
          loading={loading}
        />
      </div>
    </div>
  );
    }
    
