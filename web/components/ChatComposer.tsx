'use client';

import { useState, useRef, useEffect } from 'react';
import { createSupabaseBrowser } from '@/lib/supabase-browser';

interface Message { id: string; role: 'user' | 'rwen'; text: string; }

export default function ChatComposer({ userId, onBalanceChange }: {
  userId: string;
  onBalanceChange?: (newBalance: number) => void;
}) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', role: 'rwen', text: 'Mhoro! What\'s on your mind?' },
  ]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || sending) return;
    setSending(true);
    setError(null);

    const userMsg: Message = { id: `u-${Date.now()}`, role: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      if (res.status === 402) {
        setMessages((prev) => [
          ...prev,
          { id: `r-${Date.now()}`, role: 'rwen', text: 'You\'ve used today\'s free messages. Top up tokens to keep chatting — tap the token bar above.' },
        ]);
        return;
      }
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error?.message ?? 'Chat failed');
      }
      const { reply, balance } = await res.json();
      setMessages((prev) => [...prev, { id: `r-${Date.now()}`, role: 'rwen', text: reply }]);
      if (typeof balance === 'number') onBalanceChange?.(balance);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong');
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 space-y-3">
        {messages.map((m) => (
          <div key={m.id} className={`max-w-[80%] px-4 py-2 rounded-2xl ${
            m.role === 'user'
              ? 'self-end bg-secondary text-primary ml-auto'
              : 'self-start bg-white/10 text-white'
          }`}>
            {m.text}
          </div>
        ))}
        {sending && <div className="text-white/40 text-sm">Rwen is thinking…</div>}
        {error && <div className="text-error text-sm">{error}</div>}
      </div>
      <div className="border-t border-white/10 p-3 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
          placeholder="Message Rwen…"
          className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 outline-none focus:border-white/30"
          disabled={sending}
        />
        <button
          onClick={send}
          disabled={!input.trim() || sending}
          className="px-5 py-2 bg-secondary text-primary font-semibold rounded-full disabled:opacity-40"
        >
          Send
        </button>
      </div>
    </div>
  );
}
