'use client';

import { useState } from 'react';

// Generic "buy now" button that POSTs to /api/checkout with productId and
// redirects to Stripe Checkout. The label shows the AUD price; pass
// `disabled` (e.g. for already-owned companions) to grey it out.
//
// We DON'T reuse the existing CheckoutButton.tsx because:
//   1. CheckoutButton's contract is `{ packId, priceAud }` — token-pack only.
//   2. We deliberately want the new product surface to use the productId
//      shape (the route accepts both for back-compat, but new callers
//      should use the new shape).
//   3. Visual variants differ — owned/disabled state, label format.

export default function ProductButton({
  productId,
  priceLabel,
  owned = false,
  className = '',
}: {
  productId: string;
  priceLabel: string;
  owned?: boolean;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  async function checkout() {
    if (owned || loading) return;
    setLoading(true);
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    });
    if (!res.ok) {
      setLoading(false);
      alert('Checkout failed — please try again');
      return;
    }
    const { url } = await res.json();
    window.location.href = url;
  }

  if (owned) {
    return (
      <button
        disabled
        className={`px-4 py-2 bg-white/5 text-white/50 text-sm font-semibold rounded-full border border-white/10 cursor-not-allowed ${className}`}
      >
        Owned
      </button>
    );
  }

  return (
    <button
      onClick={checkout}
      disabled={loading}
      className={`px-5 py-2 bg-secondary text-primary font-semibold rounded-full hover:opacity-90 transition disabled:opacity-50 ${className}`}
    >
      {loading ? 'Loading…' : priceLabel}
    </button>
  );
}
