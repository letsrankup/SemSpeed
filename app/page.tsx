import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold mb-6 text-primary">
          Business OS
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          Your Autonomous, Full-Stack Business Operating System. Manage CRM, SEO, AI Agents, and Analytics all in one place.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/dashboard" className="px-6 py-3 bg-primary hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Go to Dashboard
          </Link>
          <Link href="/settings" className="px-6 py-3 bg-surface hover:bg-gray-700 text-white rounded-lg font-medium transition-colors border border-gray-600">
            System Settings
          </Link>
        </div>
      </div>
    </main>
  );
}

