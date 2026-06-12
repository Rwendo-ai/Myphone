import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import {
  getCourseById,
  parseLessonModuleIndex,
  getAccessContext,
  canAccessModule,
} from '@/lib/courses-web';
import { loadLesson } from '@/lib/lesson-web';
import LessonPlayer from '@/components/lesson/LessonPlayer';
import MarkCompleteButton from '@/components/learn/MarkCompleteButton';

// Lesson page — full 7-phase engine. The lesson body streams from the
// same Supabase Storage files the mobile app uses
// (course-content / lessons/<courseId>/<speakerId>/<lessonId>.json),
// loaded server-side so the player renders with content on first paint.
// If the body isn't in Storage (unauthored course), we fall back to the
// old practice-with-Rwen card so the route never dead-ends.
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

  // Stream the lesson body. Returns null when the course hasn't been
  // authored into Storage yet — fall back to the chat-practice card.
  const loaded = await loadLesson(supabase, courseId, lessonId);

  if (!loaded) {
    const { data: existing } = await supabase
      .from('lesson_progress')
      .select('id, completed_at')
      .eq('user_id', user.id)
      .eq('lesson_id', lessonId)
      .maybeSingle();

    return (
      <main className="px-4 pt-8 max-w-2xl mx-auto">
        <Link href={`/learn/${courseId}`} className="text-white/60 hover:text-white text-sm inline-block mb-4">
          ← {course.name}
        </Link>
        <header className="mb-6">
          <div className="text-white/50 text-sm uppercase tracking-wider mb-1">
            {course.emoji} {course.name} · M{String(moduleIndex).padStart(2, '0')}
          </div>
          <h1 className="text-2xl font-bold">Lesson: {lessonId}</h1>
        </header>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4">
          <div className="text-sm uppercase tracking-wider text-white/50 mb-2">Practice</div>
          <p className="text-white/80 mb-4">
            This lesson's content is still being authored. Your fastest path is a conversation
            with Rwen using this lesson as context.
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
          <MarkCompleteButton courseId={courseId} lessonId={lessonId} alreadyCompleted={!!existing} />
        </div>
      </main>
    );
  }

  // Completed check against the canonical id stored in the JSON (long
  // form) — that's what the player writes to lesson_progress.
  const { data: existing } = await supabase
    .from('lesson_progress')
    .select('id')
    .eq('user_id', user.id)
    .eq('lesson_id', loaded.lesson.id)
    .maybeSingle();

  return (
    <LessonPlayer
      lesson={loaded.lesson}
      courseId={courseId}
      alreadyCompleted={!!existing}
    />
  );
}
