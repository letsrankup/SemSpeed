import React, { useState } from 'react';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Button } from './Button';

export const ContentForm: React.FC<{ onSubmit: (data: any) => void; loading?: boolean }> = ({ onSubmit, loading }) => {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState('Professional');

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ topic, keywords: keywords.split(',').map(k => k.trim()), tone });
  };

  return (
    <form onSubmit={handleForm} className="space-y-4 bg-surface p-6 rounded-xl border border-gray-800">
      <Input label="Target Topic / Core Concept" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g., Quantum Computing Software Architectures" required />
      <Textarea label="LSI Keywords (Comma Separated)" value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="e.g., processing layers, superposition scaling, qubit matrix" />
      
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-400">Generation Tone</label>
        <select value={tone} onChange={(e) => setTone(e.target.value)} className="w-full px-4 py-2.5 bg-background border border-gray-800 rounded-lg text-white placeholder-gray-600 outline-none focus:border-primary transition-colors">
          <option value="Professional">Professional / Analytical</option>
          <option value="Casual">Casual / Direct</option>
          <option value="Persuasive">Persuasive / Copywriter</option>
        </select>
      </div>
      
      <Button type="submit" isLoading={loading} className="w-full mt-2">
        Dispatch Content Generation Request
      </Button>
    </form>
  );
};
