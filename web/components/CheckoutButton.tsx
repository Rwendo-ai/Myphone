'use client';

import { useState } from 'react';

export default function CheckoutButton({ packId, priceAud }: { packId: string; priceAud: number }) {
  const [loading, setLoading] = useState(false);

  async function checkout() {
    setLoading(true);
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ packId }),
    });
    if (!res.ok) {
      setLoading(false);
      alert('Checkout failed — please try again');
      return;
    }
    const { url } = await res.json();
    window.location.href = url;
  }

  return (
    <button
      onClick={checkout}
      disabled={loading}
      className="px-6 py-2.5 bg-secondary text-primary font-semibold rounded-full hover:opacity-90 transition disabled:opacity-50"
    >
      {loading ? 'Loading…' : `A$${priceAud}`}
    </button>
  );
}
