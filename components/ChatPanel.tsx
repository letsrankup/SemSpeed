import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

interface Message { id: string; role: 'user' | 'assistant'; content: string; }

export const ChatPanel: React.FC<{ agentName: string; messages: Message[]; onSendMessage: (txt: string) => void; loading?: boolean }> = ({ agentName, messages, onSendMessage, loading }) => {
  const [input, setInput] = useState('');

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSendMessage(input.trim());
    setInput('');
  };

  return (
    <div className="w-full h-[550px] bg-surface border border-gray-800 rounded-xl flex flex-col overflow-hidden">
      <div className="p-4 bg-background/40 border-b border-gray-800 flex items-center justify-between">
        <span className="text-sm font-bold text-white tracking-wide">Context Stream: <span className="text-primary font-mono">{agentName}</span></span>
        <span className="text-xs text-gray-500 font-mono">OpenRouter Native API Layer</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col max-w-[80%] ${msg.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'}`}>
            <span className="text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-semibold">{msg.role}</span>
            <div className={`p-3 rounded-xl text-sm leading-relaxed ${
              msg.role === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-background border border-gray-800 text-gray-200 rounded-bl-none'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="mr-auto text-xs text-gray-500 font-medium animate-pulse flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-ping" /> AI Processing Context Layer...
          </div>
        )}
      </div>

      <form onSubmit={send} className="p-3 bg-background/30 border-t border-gray-800 flex gap-2">
        <div className="flex-1">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message ${agentName}...`} disabled={loading} />
        </div>
        <Button type="submit" disabled={loading} className="px-5">Send</Button>
      </form>
    </div>
  );
};
