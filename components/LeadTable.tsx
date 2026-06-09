import React from 'react';

interface LeadRow {
  id: string;
  name: string;
  source: string;
  stage: string;
  value: number;
  date: string;
}

export const LeadTable: React.FC<{ data: LeadRow[] }> = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto bg-surface border border-gray-800 rounded-xl">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-800 bg-background/50 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <th className="p-4">Lead Name</th>
            <th className="p-4">Acquisition Channel</th>
            <th className="p-4">Funnel State</th>
            <th className="p-4">Contract Potential</th>
            <th className="p-4 text-right">Captured</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800/50 text-sm text-gray-300">
          {data.length === 0 ? (
            <tr>
              <td colSpan={5} className="p-8 text-center text-xs text-gray-500 font-medium">
                No active inbound lead streams configured.
              </td>
            </tr>
          ) : (
            data.map((lead) => (
              <tr key={lead.id} className="hover:bg-background/30 transition-colors">
                <td className="p-4 font-semibold text-white">{lead.name}</td>
                <td className="p-4 text-xs text-gray-400">{lead.source}</td>
                <td className="p-4">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium uppercase tracking-wide">
                    {lead.stage}
                  </span>
                </td>
                <td className="p-4 font-mono font-bold text-gray-200">${lead.value.toLocaleString()}</td>
                <td className="p-4 text-right text-xs text-gray-500">{lead.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
                
