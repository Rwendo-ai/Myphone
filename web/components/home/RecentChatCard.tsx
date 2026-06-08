import Link from 'next/link';
import type { HomeMessage } from '@/lib/home-web';
import { relativeTime } from './relative-time';

function shorten(text: string, max = 140): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + '…';
}

export default function RecentChatCard({ messages }: { messages: HomeMessage[] }) {
  return (
    <section className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold">Recent chat</h2>
        <Link href="/chat" className="text-sm text-secondary hover:underline">
          Resume chat →
        </Link>
      </div>

      {messages.length === 0 ? (
        <p className="text-sm text-white/60">
          You haven&apos;t chatted with Rwen yet. Tap &quot;Resume chat&quot; above to say hello.
        </p>
      ) : (
        <ul className="space-y-2">
          {messages.slice(-3).map((m, i) => (
            <li key={i} className="text-sm">
              <span
                className={`inline-block text-[11px] font-bold uppercase tracking-wider mr-2 ${
                  m.role === 'user' ? 'text-white/50' : 'text-secondary'
                }`}
              >
                {m.role === 'user' ? 'You' : 'Rwen'}
              </span>
              <span className="text-white/85">{shorten(m.content)}</span>
              <span className="text-white/35 ml-1 text-xs">· {relativeTime(m.created_at)}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
