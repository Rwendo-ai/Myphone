import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { Markdown } from '@/lib/md';

export const metadata = {
  title: 'Privacy Policy — Rwendo',
  description: 'How Rwendo collects, uses, and protects your information.',
};

// Server Component — reads the canonical markdown source at build time.
// File lives at web/content/legal/privacy.md (mirror of the company-wide
// docs/legal/privacy-policy.md; copied so the web bundle is self-contained
// and doesn't reach outside the web/ working dir).
export default async function PrivacyPage() {
  const filePath = path.join(process.cwd(), 'content', 'legal', 'privacy.md');
  const source = await fs.readFile(filePath, 'utf8');

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-[#0D2140] text-white">
      <header className="px-6 py-5 border-b border-white/10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Image src="/icon.svg" alt="" width={28} height={28} className="rounded-md" />
            <span className="font-bold">Rwendo</span>
          </Link>
          <Link href="/terms" className="text-white/60 text-sm hover:text-white transition">Terms of Service →</Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-10 pb-20">
        <Markdown source={source} />
      </article>
    </main>
  );
}
