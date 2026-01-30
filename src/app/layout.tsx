import '../styles/globals.css';
import type { Metadata } from 'next';
import '../styles/globals.css';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: 'Kishan S. | Dr. Interested',
  description: 'Deputy Executive Director | Vice President at Dr. Interested',
  icons: {
    icon: '/DrInt-Logo.png',
    shortcut: '/DrInt-Logo.png',
    apple: '/DrInt-Logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-brand-beige">
          <Analytics />
        {children}
      </body>
    </html>
  );
}
