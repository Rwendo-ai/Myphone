import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import DictionaryTable from '@/components/dictionary/DictionaryTable';

// /dictionary — every word the user has met, auto-collected by the
// lesson engine (web + mobile both write user_dictionary). This is a
// surface where web beats the phone: a searchable, filterable table.
export default async function DictionaryPage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  const { data } = await supabase
    .from('user_dictionary')
    .select('id, course_id, target_word, native_word, literal, source_lesson_id, created_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  const entries = (data ?? []).map((r) => ({
    id: r.id as string,
    courseId: (r.course_id as string) ?? '',
    target: r.target_word as string,
    native: r.native_word as string,
    literal: (r.literal as string | null) ?? null,
    lessonId: (r.source_lesson_id as string | null) ?? null,
    addedAt: r.created_at as string,
  }));

  return (
    <main className="px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-1">My dictionary</h1>
      <p className="text-white/60 mb-6">
        Every word you've met in lessons, collected automatically. {entries.length > 0 && `${entries.length} so far.`}
      </p>
      <DictionaryTable entries={entries} />
    </main>
  );
}
