export default function DashboardPage() {
  return (
    <div className="p-8 w-full">
      <h1 className="text-3xl font-bold text-white mb-6">Main Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface p-6 rounded-lg border border-gray-700">
          <h2 className="text-gray-400 text-sm font-semibold">Total Revenue</h2>
          <p className="text-2xl text-white font-bold mt-2">$0.00</p>
        </div>
        <div className="bg-surface p-6 rounded-lg border border-gray-700">
          <h2 className="text-gray-400 text-sm font-semibold">Active Clients</h2>
          <p className="text-2xl text-white font-bold mt-2">0</p>
        </div>
        <div className="bg-surface p-6 rounded-lg border border-gray-700">
          <h2 className="text-gray-400 text-sm font-semibold">Active Automations</h2>
          <p className="text-2xl text-white font-bold mt-2">0</p>
        </div>
      </div>
    </div>
  );
}
