import type { MetadataRoute } from 'next';

// Index the public marketing surface; keep the signed-in app, auth
// flow, and API out of crawlers.
export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? 'https://rwendo.app';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/home', '/learn', '/chat', '/travel', '/profile', '/cart', '/dictionary', '/onboarding', '/verify', '/auth/', '/api/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
