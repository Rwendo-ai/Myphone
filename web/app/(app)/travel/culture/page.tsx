import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import { contentKeyOf, loadCulturalGuide, resolveDestination } from '@/lib/travel-content';

export const dynamic = 'force-dynamic';

// Cultural guide — intro + native <details> accordions (zero client JS).
export default async function CulturePage({
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
  const guide = await loadCulturalGuide(contentKeyOf(dest));
  const back = d ? `/travel?d=${encodeURIComponent(d)}` : '/travel';

  return (
    <main className="px-4 pt-8 pb-6 max-w-2xl mx-auto">
      <Link href={back} className="text-white/60 hover:text-white text-sm">← Travel</Link>
      <h1 className="text-3xl font-extrabold mt-2 mb-1">Cultural Guide</h1>
      <p className="text-white/60 mb-6">{dest.flag} {dest.countryName}</p>

      {!guide ? (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center text-white/60">
          Cultural guide coming soon for {dest.countryName}.
        </div>
      ) : (
        <>
          <p className="text-white/80 leading-relaxed mb-6">{guide.intro}</p>
          <div className="space-y-2">
            {guide.sections.map((s, i) => (
              <details
                key={s.id}
                open={i === 0}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer select-none hover:bg-white/5 transition list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-xl">{s.emoji}</span>
                  <span className="font-semibold flex-1">{s.title}</span>
                  <span className="text-white/40 group-open:rotate-90 transition-transform">▸</span>
                </summary>
                <p className="px-5 pb-5 text-white/75 text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
              </details>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
