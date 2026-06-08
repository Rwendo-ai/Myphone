import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { Markdown } from '@/lib/md';

export const metadata = {
  title: 'Terms of Service — Rwendo',
  description: 'The rules and agreement for using Rwendo.',
};

export default async function TermsPage() {
  const filePath = path.join(process.cwd(), 'content', 'legal', 'terms.md');
  const source = await fs.readFile(filePath, 'utf8');

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-[#0D2140] text-white">
      <header className="px-6 py-5 border-b border-white/10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Image src="/icon.svg" alt="" width={28} height={28} className="rounded-md" />
            <span className="font-bold">Rwendo</span>
          </Link>
          <Link href="/privacy" className="text-white/60 text-sm hover:text-white transition">Privacy Policy →</Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-10 pb-20">
        <Markdown source={source} />
      </article>
    </main>
  );
}
