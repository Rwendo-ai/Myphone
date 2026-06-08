'use client';

import Link from 'next/link';

// Token-balance pill — mirrors the mobile TokenBar visually. Tap to /cart.
export default function TokenBar({ balance }: { balance: number }) {
  const colour =
    balance < 30   ? 'bg-error'   :
    balance < 100  ? 'bg-warning' :
                     'bg-success';
  const fillPct = Math.max(0, Math.min(100, (balance / Math.max(balance, 1000)) * 100));

  return (
    <Link
      href="/cart"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/35 border border-white/10 hover:bg-black/50 transition"
    >
      <span>🪙</span>
      <div className="w-16 h-1.5 rounded-full bg-white/15 overflow-hidden">
        <div className={`h-full ${colour} transition-all duration-300`} style={{ width: `${fillPct}%` }} />
      </div>
      <span className="text-sm font-semibold min-w-[2.5rem] text-right">{balance.toLocaleString()}</span>
      <span className="text-white/70 font-bold">+</span>
    </Link>
  );
}
