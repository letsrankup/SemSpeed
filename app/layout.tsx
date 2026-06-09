import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Business OS | Advanced AI SaaS',
  description: 'Autonomous Business Operating System powered by AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-white">
        {children}
      </body>
    </html>
  );
}

