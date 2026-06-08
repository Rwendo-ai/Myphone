import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import {
  getCourseById,
  getModulesForCourse,
  parseLessonModuleIndex,
  getAccessContext,
  canAccessModule,
} from '@/lib/courses-web';
import MarkCompleteButton from '@/components/learn/MarkCompleteButton';

// Lesson viewer v1 — MINIMAL. The web app doesn't render the full
// lesson activity tree yet (phrasebook, flipcards, reinforcement —
// that's deferred to v2). For now it shows:
//   • lesson + module heading
//   • a "Practice with Rwen" deep link into /chat
//   • a mark-complete button that writes lesson_progress + award_xp
// All lesson content rendering remains the mobile app's job.
export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>;
}) {
  const { courseId, lessonId } = await params;
  const course = getCourseById(courseId);
  if (!course) notFound();

  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  const ctx = await getAccessContext(supabase, user.id);
  const moduleIndex = parseLessonModuleIndex(lessonId);

  // Gate by module access. Locked → redirect into the course detail page
  // where the upsell card is rendered.
  if (!canAccessModule(courseId, moduleIndex, ctx)) {
    redirect(`/learn/${courseId}`);
  }

  // Confirm the lesson id actually belongs to a module in this course.
  // Catches stray /learn/foo/m99-l99 attempts without 404'ing on
  // legitimate-but-unknown ids the manifest hasn't been authored for yet.
  const modules = getModulesForCourse(courseId);
  const owningModule = modules.find(m => m.lessonIds.includes(lessonId));

  // Has the user already completed this lesson?
  const { data: existing } = await supabase
    .from('lesson_progress')
    .select('id, completed_at')
    .eq('user_id', user.id)
    .eq('lesson_id', lessonId)
    .maybeSingle();
  const alreadyCompleted = !!existing;

  return (
    <main className="px-4 pt-8 max-w-2xl mx-auto">
      <Link href={`/learn/${courseId}`} className="text-white/60 hover:text-white text-sm inline-block mb-4">
        ← {course.name}
      </Link>

      <header className="mb-6">
        <div className="text-white/50 text-sm uppercase tracking-wider mb-1">
          {course.emoji} {course.name} · {owningModule?.code.toUpperCase() ?? `M${String(moduleIndex).padStart(2,'0')}`}
        </div>
        <h1 className="text-2xl font-bold">Lesson: {lessonId}</h1>
        {owningModule && (
          <p className="text-white/60 text-sm mt-1">
            {owningModule.title} · lesson {owningModule.lessonIds.indexOf(lessonId) + 1} of {owningModule.totalLessons}
          </p>
        )}
      </header>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4">
        <div className="text-sm uppercase tracking-wider text-white/50 mb-2">Practice</div>
        <p className="text-white/80 mb-4">
          The full lesson activity (vocab, flipcards, reinforcement) is in the Rwendo mobile app.
          On web, your fastest path is a conversation with Rwen using this lesson as context.
        </p>
        <Link
          href={`/chat?lessonContext=${encodeURIComponent(lessonId)}&courseId=${encodeURIComponent(courseId)}`}
          className="inline-block bg-secondary text-primary font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition"
        >
          Practice with Rwen →
        </Link>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4">
        <div className="text-sm uppercase tracking-wider text-white/50 mb-3">Progress</div>
        <MarkCompleteButton
          courseId={courseId}
          lessonId={lessonId}
          alreadyCompleted={alreadyCompleted}
        />
        {alreadyCompleted && existing?.completed_at && (
          <p className="text-white/50 text-xs text-center mt-3">
            Completed {new Date(existing.completed_at as string).toLocaleDateString()}
          </p>
        )}
      </div>

      <div className="text-center">
        <Link href={`/learn/${courseId}`} className="text-white/60 hover:text-white text-sm">
          Back to course
        </Link>
      </div>
    </main>
  );
}
