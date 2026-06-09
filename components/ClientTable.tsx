import React from 'react';

interface ClientRow {
  id: string;
  companyName: string;
  email: string;
  mrrValue: number;
  joinedDate: string;
}

export const ClientTable: React.FC<{ data: ClientRow[] }> = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto bg-surface border border-gray-800 rounded-xl">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-800 bg-background/50 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <th className="p-4">Corporate Entity</th>
            <th className="p-4">Primary Destination</th>
            <th className="p-4">System MRR Yield</th>
            <th className="p-4 text-right">Onboarding Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800/50 text-sm text-gray-300">
          {data.length === 0 ? (
            <tr>
              <td colSpan={4} className="p-8 text-center text-xs text-gray-500">Zero database entries found for corporate clients loop.</td>
            </tr>
          ) : (
            data.map((client) => (
              <tr key={client.id} className="hover:bg-background/30 transition-colors">
                <td className="p-4 font-bold text-white">{client.companyName}</td>
                <td className="p-4 text-xs text-gray-400">{client.email}</td>
                <td className="p-4 font-mono font-bold text-green-400">${client.mrrValue.toLocaleString()}</td>
                <td className="p-4 text-right text-xs text-gray-500">{client.joinedDate}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
                  
