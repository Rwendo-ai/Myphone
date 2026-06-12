import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import { loadSafariParks, resolveDestination } from '@/lib/travel-content';

export const dynamic = 'force-dynamic';

// Safari & parks — destination-local parks when authored, otherwise the
// region's top-10 (mirrors mobile behaviour).
export default async function SafariPage({
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
    .select('active_language_pack_id')
    .eq('id', user.id)
    .maybeSingle();

  const dest = resolveDestination(profile?.active_language_pack_id as string | null, d ?? null);
  const allParks = (await loadSafariParks(dest.countryCode)) ?? [];
  const localParks = allParks.filter((p) => p.countryCode === dest.countryCode);
  const showingLocal = localParks.length > 0;
  const parks = showingLocal ? localParks : allParks;
  const back = d ? `/travel?d=${encodeURIComponent(d)}` : '/travel';

  return (
    <main className="px-4 pt-8 pb-6 max-w-2xl mx-auto">
      <Link href={back} className="text-white/60 hover:text-white text-sm">← Travel</Link>
      <h1 className="text-3xl font-extrabold mt-2 mb-1">Safari &amp; Parks</h1>
      <p className="text-white/60 mb-6">
        {showingLocal ? `${dest.flag} ${dest.countryName}` : '🌍 Top parks in the region'}
      </p>

      {parks.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center text-white/60">
          Safari guide coming soon.
        </div>
      ) : (
        <div className="space-y-2">
          {parks.map((p, i) => (
            <details
              key={p.id}
              open={i === 0}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <summary className="px-5 py-4 cursor-pointer select-none hover:bg-white/5 transition list-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-3">
                  <span className="font-semibold flex-1">{p.name}</span>
                  <span className="text-white/40 group-open:rotate-90 transition-transform">▸</span>
                </div>
                <div className="text-white/50 text-xs mt-0.5">
                  {p.countryName} · {p.sizeKm2.toLocaleString()} km²
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {p.signatureAnimals.slice(0, 3).map((a) => (
                    <span key={a} className="text-[10px] uppercase tracking-wider bg-white/10 text-white/70 px-2 py-0.5 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
              </summary>
              <div className="px-5 pb-5 text-sm space-y-3">
                <p className="text-secondary text-xs uppercase tracking-wider font-semibold">
                  Best: {p.bestMonths.join(' · ')}
                </p>
                <p className="text-white/75 leading-relaxed">{p.description}</p>
                <p className="text-white/50 text-xs">
                  <span className="uppercase tracking-wider">Nearest airport:</span>{' '}
                  {p.nearestCity.name} ({p.nearestCity.iata})
                </p>
                <p className="text-white/50 text-xs">
                  <span className="uppercase tracking-wider">Access:</span> {p.accessNotes}
                </p>
              </div>
            </details>
          ))}
        </div>
      )}
    </main>
  );
}
