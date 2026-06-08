import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rwendo — AI companion + language learning',
  description: 'Chat with caring AI companions by voice or text. Learn languages, grow yourself, on your own pace.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
