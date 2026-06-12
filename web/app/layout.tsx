import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://rwendo.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Rwendo — AI companion + language learning',
    template: '%s · Rwendo',
  },
  description:
    'Chat with caring AI companions by voice or text. Learn Shona, Ndebele, and 9 more languages with Rwen the chameleon — free to start, on any device.',
  openGraph: {
    type: 'website',
    siteName: 'Rwendo',
    title: 'Rwendo — AI companion + language learning',
    description:
      'Talk with Rwen, a warm AI friend. Learn Shona, Ndebele, and 9 more languages — free to start.',
    url: SITE_URL,
    images: [{ url: '/rwen/waving.webp', width: 512, height: 512, alt: 'Rwen the chameleon waving' }],
  },
  twitter: {
    card: 'summary',
    title: 'Rwendo — AI companion + language learning',
    description: 'Talk with Rwen, a warm AI friend. Learn Shona and 10 more languages — free to start.',
    images: ['/rwen/waving.webp'],
  },
  // Favicon comes from the convention-based app/icon.svg automatically.
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
