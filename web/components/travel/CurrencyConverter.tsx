'use client';

import { useState } from 'react';

// Live converter widget — rate fetched server-side and passed in, so
// this is just arithmetic on keystrokes.
export default function CurrencyConverter({
  homeCurrency,
  destCurrency,
  destSymbol,
  rate,
  asOf,
}: {
  homeCurrency: string;
  destCurrency: string;
  destSymbol: string;
  rate: number;
  asOf: string;
}) {
  const [amount, setAmount] = useState('100');
  const numeric = Number(amount) || 0;
  const converted = numeric * rate;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-white/50 text-xs uppercase tracking-wider mb-3">
        {homeCurrency} → {destCurrency}
      </p>
      <div className="flex items-center gap-3">
        <label className="flex-1 flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-3 py-2.5 focus-within:border-secondary">
          <span className="text-white/50 text-sm font-semibold">{homeCurrency}</span>
          <input
            type="text"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
            className="w-full bg-transparent text-white font-bold text-lg focus:outline-none"
            aria-label={`Amount in ${homeCurrency}`}
          />
        </label>
        <span className="text-white/40">=</span>
        <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5">
          <span className="text-secondary font-bold text-lg">
            {destSymbol} {converted.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>
      <p className="text-white/40 text-xs mt-3">
        1 {homeCurrency} = {rate.toLocaleString(undefined, { maximumFractionDigits: 4 })} {destCurrency} · as of {asOf}
      </p>
    </div>
  );
}
