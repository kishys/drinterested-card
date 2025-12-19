import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kishan S. | Dr. Interested',
  description: 'Sleek interactive business card for Kishan S.',
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
        {children}
      </body>
    </html>
  );
}
