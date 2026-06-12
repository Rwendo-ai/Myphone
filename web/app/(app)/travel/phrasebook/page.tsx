import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import { getAccessContext } from '@/lib/courses-web';
import {
  contentKeyOf,
  DESTINATIONS_BY_COURSE,
  loadAudioManifest,
  loadPhrasebook,
  resolveDestination,
} from '@/lib/travel-content';
import PhrasebookAccordion from '@/components/travel/PhrasebookAccordion';

export const dynamic = 'force-dynamic';

// Phrasebook — streamed categories with audio. Free preview rules
// mirror mobile: free categories fully open; locked categories show 4
// phrases unless the user owns the destination's course or has a paid
// tier.
export default async function PhrasebookPage({
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
  const key = contentKeyOf(dest);

  const [categories, manifest, access] = await Promise.all([
    loadPhrasebook(key),
    loadAudioManifest(key),
    getAccessContext(supabase, user.id),
  ]);

  // Paid tier unlocks everything; free users unlock the phrasebook of
  // the course they started (destination ↔ course via the registry).
  const destCourseId = Object.entries(DESTINATIONS_BY_COURSE)
    .find(([, v]) => contentKeyOf(v) === key)?.[0] ?? null;
  const owned =
    (access.tier && access.tier !== 'free') ||
    (!!destCourseId && access.starterCourseId === destCourseId);

  const back = d ? `/travel?d=${encodeURIComponent(d)}` : '/travel';

  return (
    <main className="px-4 pt-8 pb-6 max-w-2xl mx-auto">
      <Link href={back} className="text-white/60 hover:text-white text-sm">← Travel</Link>
      <h1 className="text-3xl font-extrabold mt-2 mb-1">Phrasebook</h1>
      <p className="text-white/60 mb-6">{dest.flag} {dest.countryName}</p>

      {!categories || categories.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center text-white/60">
          Phrasebook coming soon for {dest.countryName}.
        </div>
      ) : (
        <PhrasebookAccordion categories={categories} manifest={manifest} owned={!!owned} />
      )}
    </main>
  );
}
