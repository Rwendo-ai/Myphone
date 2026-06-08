import Link from 'next/link';
import { getCompanionUnlocksWeb } from '@/lib/products-web';

// Grid of all preset companions, marking which the user owns. Rwen is
// always owned (free for all). Other presets are owned if there's a row
// in user_companion_customizations (paid OR free first-claim). Locked
// companions get a "Unlock $4.99" link to /cart.

interface OwnedRow {
  preset_id: string;
  is_paid: boolean | null;
}

const RWEN = { presetId: 'rwen', name: 'Rwen', emoji: '🦎', tagline: 'A chameleon with a Shona soul' };

export default function OwnedCompanionsGrid({ owned }: { owned: OwnedRow[] }) {
  const unlocks = getCompanionUnlocksWeb();
  const ownedIds = new Set(owned.map((o) => o.preset_id));

  // Rwen + all 7 unlock presets in display order.
  const cards = [
    { presetId: 'rwen', name: 'Rwen', emoji: '🦎', tagline: RWEN.tagline, free: true },
    ...unlocks.map((u) => ({
      presetId: u.presetId!,
      name:     u.name.split(' ').slice(1).join(' '),
      emoji:    u.name.split(' ')[0],
      tagline:  u.description,
      free:     false,
    })),
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {cards.map((c) => {
        const isOwned = c.free || ownedIds.has(c.presetId);
        return (
          <div
            key={c.presetId}
            className={`p-4 rounded-xl border ${
              isOwned
                ? 'bg-white/5 border-success/30'
                : 'bg-white/5 border-white/10 opacity-70'
            }`}
          >
            <div className="text-3xl">{c.emoji}</div>
            <div className="font-semibold mt-2">{c.name}</div>
            <div className="text-white/50 text-xs leading-snug mt-1 line-clamp-2">{c.tagline}</div>
            {isOwned ? (
              <div className="text-success text-xs mt-2">{c.free ? 'Free' : 'Owned'} ✓</div>
            ) : (
              <Link href="/cart" className="text-secondary text-xs mt-2 inline-block hover:underline">
                Unlock A$4.99 →
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
