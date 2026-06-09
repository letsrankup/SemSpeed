import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

export const SEOForm: React.FC<{ onCrawl: (url: string) => void; loading?: boolean }> = ({ onCrawl, loading }) => {
  const [targetUrl, setTargetUrl] = useState('');

  const submitCrawl = (e: React.FormEvent) => {
    e.preventDefault();
    if (targetUrl) onCrawl(targetUrl);
  };

  return (
    <form onSubmit={submitCrawl} className="flex gap-3 items-end bg-surface p-5 rounded-xl border border-gray-800 w-full">
      <div className="flex-1">
        <Input label="Target Domain Pipeline / Web Address" value={targetUrl} onChange={(e) => setTargetUrl(e.target.value)} placeholder="https://example.com" type="url" required />
      </div>
      <Button type="submit" isLoading={loading} className="h-[46px] px-6">
        Trigger Live Crawl
      </Button>
    </form>
  );
};

