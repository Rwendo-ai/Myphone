import type { MetadataRoute } from 'next';

// Public, indexable pages only — the signed-in app stays out of the
// index (see robots.ts). Course/SEO landing pages join this list when
// they ship (WEB-MARKETING-PLAN.md §4).
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? 'https://rwendo.app';
  return [
    { url: base, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/sign-up`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/sign-in`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/terms`, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
