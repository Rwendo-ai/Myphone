import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import {
  COST_BY_COUNTRY,
  CURRENCY_BY_JURISDICTION,
  fetchFxRate,
  resolveDestination,
} from '@/lib/travel-content';
import CurrencyConverter from '@/components/travel/CurrencyConverter';

export const dynamic = 'force-dynamic';

// Money & Market — live FX (server-fetched, 6h cache) + traveller price
// anchors. Home currency comes from the user's jurisdiction.
export default async function MoneyPage({
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
    .select('active_language_pack_id, jurisdiction_id')
    .eq('id', user.id)
    .maybeSingle();

  const dest = resolveDestination(profile?.active_language_pack_id as string | null, d ?? null);
  const homeCurrency = CURRENCY_BY_JURISDICTION[(profile?.jurisdiction_id as string) ?? ''] ?? 'USD';
  const fx = await fetchFxRate(homeCurrency, dest.currencyCode);
  const costRows = COST_BY_COUNTRY[dest.countryCode] ?? [];
  const back = d ? `/travel?d=${encodeURIComponent(d)}` : '/travel';

  return (
    <main className="px-4 pt-8 pb-6 max-w-2xl mx-auto space-y-5">
      <div>
        <Link href={back} className="text-white/60 hover:text-white text-sm">← Travel</Link>
        <h1 className="text-3xl font-extrabold mt-2 mb-1">Money &amp; Market</h1>
        <p className="text-white/60">{dest.flag} {dest.countryName}</p>
      </div>

      {fx ? (
        <CurrencyConverter
          homeCurrency={homeCurrency}
          destCurrency={dest.currencyCode}
          destSymbol={dest.currencySymbol}
          rate={fx.rate}
          asOf={fx.date}
        />
      ) : (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white/60 text-sm">
          Live rates are unavailable right now — try again shortly.
        </div>
      )}

      {costRows.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-3">What things cost</h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {costRows.map((r) => (
              <div key={r.label} className="px-5 py-3 border-b border-white/5 last:border-b-0">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-white/80 text-sm">{r.label}</span>
                  <span className="text-secondary font-semibold text-sm whitespace-nowrap">{r.price}</span>
                </div>
                {r.note && <p className="text-white/40 text-xs mt-0.5">{r.note}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <p className="text-white/40 text-xs leading-relaxed">
        FX rates are mid-market reference rates. Banks and card networks add a margin (typically
        2-4%). Prices are typical traveller anchors and vary by season, neighbourhood, and venue.
      </p>
    </main>
  );
}
