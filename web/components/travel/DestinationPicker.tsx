'use client';

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { contentKeyOf, listAllDestinations, type TravelDestination } from '@/lib/travel-content';

// Destination switcher. The choice rides in the ?d=<contentKey> query
// param so every travel page stays server-rendered and URLs stay
// shareable ("look at the Japan phrasebook" is a link, not app state).
export default function DestinationPicker({ active }: { active: TravelDestination }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasOverride = !!searchParams.get('d');

  function choose(key: string | null) {
    setOpen(false);
    const params = new URLSearchParams(searchParams.toString());
    if (key) params.set('d', key);
    else params.delete('d');
    router.push(`${pathname}${params.size ? `?${params}` : ''}`);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-3 text-left hover:bg-white/5 rounded-xl px-2 py-1 -mx-2 transition"
        aria-label="Change destination"
      >
        <span className="text-4xl">{active.flag}</span>
        <span>
          <span className="text-2xl font-extrabold block leading-tight">
            {active.countryName} <span className="text-white/40 text-base font-normal">▾</span>
          </span>
          <span className="text-white/60 text-sm italic">{active.tagline}</span>
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} aria-hidden />
          <div className="relative w-full md:max-w-md max-h-[80vh] overflow-y-auto bg-primary border border-white/15 rounded-t-2xl md:rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-lg">Pick a destination</h2>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-white/50 hover:text-white text-xl">×</button>
            </div>
            {hasOverride && (
              <button
                onClick={() => choose(null)}
                className="w-full text-left px-3 py-2.5 mb-2 rounded-xl border border-secondary/40 bg-secondary/10 text-secondary text-sm font-semibold hover:bg-secondary/20 transition"
              >
                ↺ Reset to my course destination
              </button>
            )}
            <div className="space-y-1">
              {listAllDestinations().map((d) => {
                const key = contentKeyOf(d);
                const isActive = key === contentKeyOf(active);
                return (
                  <button
                    key={key}
                    onClick={() => choose(key)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-3 transition ${
                      isActive ? 'bg-white/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <span className="text-2xl">{d.flag}</span>
                    <span className="flex-1 min-w-0">
                      <span className="font-semibold block">{d.countryName}</span>
                      <span className="text-white/50 text-xs">
                        {d.primaryCity.name} · {d.currencySymbol} {d.currencyCode}
                      </span>
                    </span>
                    {isActive && <span className="text-secondary font-bold">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
