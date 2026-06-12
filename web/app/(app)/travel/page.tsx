import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import {
  contentKeyOf,
  flightsUrl,
  hotelsUrl,
  resolveDestination,
} from '@/lib/travel-content';
import DestinationPicker from '@/components/travel/DestinationPicker';

export const dynamic = 'force-dynamic';

// Travel hub — destination header + feature grid, mirroring the mobile
// app/(tabs)/travel.tsx. Destination defaults to the learning language's
// primary country; ?d=<contentKey> overrides. The social feed lives at
// /travel/connections (18+, like mobile).
export default async function TravelPage({
  searchParams,
}: {
  searchParams: Promise<{ d?: string }>;
}) {
  const { d } = await searchParams;
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  const { data: profile } = await supabase
    .from('profiles')
    .select('active_language_pack_id, date_of_birth, is_minor')
    .eq('id', user.id)
    .maybeSingle();

  const dest = resolveDestination(profile?.active_language_pack_id as string | null, d ?? null);
  const key = contentKeyOf(dest);
  const q = d ? `?d=${encodeURIComponent(d)}` : '';

  // 18+ gate for Connections — conservative: unknown DOB counts as minor.
  const dob = profile?.date_of_birth as string | null;
  const age = dob ? Math.floor((Date.now() - new Date(dob).getTime()) / (365.25 * 24 * 3600 * 1000)) : null;
  const showConnections = age !== null && age >= 18 && profile?.is_minor !== true;

  const features: Array<{ emoji: string; title: string; desc: string; href: string; external?: boolean; show: boolean }> = [
    { emoji: '💱', title: 'Money & Market', desc: `Live FX, ${dest.currencySymbol} prices, traveller anchors`, href: `/travel/money${q}`, show: true },
    { emoji: '🗺️', title: 'Phrasebook', desc: 'Travel essentials with audio', href: `/travel/phrasebook${q}`, show: true },
    { emoji: '🏛️', title: 'Cultural Guide', desc: 'Etiquette, customs, what to expect', href: `/travel/culture${q}`, show: dest.hasCulture },
    { emoji: '🦁', title: 'Safari & Parks', desc: 'Top parks and wildlife', href: `/travel/safari${q}`, show: dest.hasSafari },
    { emoji: '🛫', title: 'Flights', desc: `Search flights to ${dest.primaryCity.name}`, href: flightsUrl(dest), external: true, show: true },
    { emoji: '🏨', title: 'Hotels', desc: `Stays in ${dest.countryName.replace(/ \(.+\)$/, '')}`, href: hotelsUrl(dest), external: true, show: true },
  ];

  return (
    <main className="px-4 pt-8 pb-6 max-w-2xl mx-auto space-y-5">
      <header>
        <p className="text-secondary text-xs uppercase tracking-widest font-bold mb-2">Travel mode</p>
        <DestinationPicker active={dest} key={key} />
        <p className="text-white/50 text-xs mt-2">
          ✈️ {dest.primaryCity.name} ({dest.primaryCity.iata}) · {dest.currencySymbol} {dest.currencyCode}
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.filter((f) => f.show).map((f) =>
          f.external ? (
            <a
              key={f.title}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition"
            >
              <div className="text-3xl mb-2">{f.emoji}</div>
              <div className="font-bold">{f.title} <span className="text-white/30 text-xs">↗</span></div>
              <div className="text-white/55 text-xs mt-0.5">{f.desc}</div>
            </a>
          ) : (
            <Link
              key={f.title}
              href={f.href}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition"
            >
              <div className="text-3xl mb-2">{f.emoji}</div>
              <div className="font-bold">{f.title}</div>
              <div className="text-white/55 text-xs mt-0.5">{f.desc}</div>
            </Link>
          ),
        )}
      </section>

      {showConnections && (
        <Link
          href="/travel/connections"
          className="block bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">👥</span>
            <span className="flex-1">
              <span className="font-bold block">Connections</span>
              <span className="text-white/55 text-sm">
                Meet other travellers heading to {dest.countryName.replace(/ \(.+\)$/, '')}. Share a feed, plan together.
              </span>
            </span>
            <span className="text-white/30">→</span>
          </div>
        </Link>
      )}
    </main>
  );
}
