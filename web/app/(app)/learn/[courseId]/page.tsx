import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import {
  getCourseById,
  getModulesForCourse,
  getCourseProgress,
  getAccessContext,
  canAccessModule,
  canAccessCourse,
} from '@/lib/courses-web';
import ModuleRow from '@/components/learn/ModuleRow';

// Course-detail Server Component. Shows the modules list with progress
// + lock state. Click an unlocked module → first incomplete lesson in
// that module (falls back to lesson 1).
export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = getCourseById(courseId);
  if (!course) notFound();

  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  const [progress, ctx] = await Promise.all([
    getCourseProgress(supabase, user.id, courseId),
    getAccessContext(supabase, user.id),
  ]);

  const modules = getModulesForCourse(courseId);
  const courseLocked = !canAccessCourse(courseId, ctx);
  const overallPct = progress.total > 0
    ? Math.min(100, Math.round((progress.completed / progress.total) * 100))
    : 0;

  return (
    <main className="px-4 pt-8 max-w-2xl mx-auto">
      <Link href="/learn" className="text-white/60 hover:text-white text-sm inline-block mb-4">
        ← All courses
      </Link>

      <header className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-4xl">{course.emoji}</div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold">{course.name}</h1>
            <p className="text-white/60 text-sm">{course.tagline}</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-white/50 mb-1">
          <span>{progress.completed} / {progress.total} lessons · {course.totalModules} modules</span>
          <span>{overallPct}%</span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-secondary rounded-full transition-all" style={{ width: `${overallPct}%` }} />
        </div>
      </header>

      {courseLocked && (
        <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-4 mb-6">
          <div className="font-semibold mb-1">This course is locked</div>
          <p className="text-sm text-white/70 mb-3">
            Pick this as your starter for the first 2 modules free, or unlock everything with Rwendo Pro from A$4/month.
          </p>
          <Link
            href="/cart"
            className="inline-block bg-secondary text-primary font-semibold px-4 py-2 rounded-xl text-sm hover:opacity-90 transition"
          >
            See Pro plans
          </Link>
        </div>
      )}

      <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-3">Modules</h2>
      <div className="space-y-2">
        {modules.map(mod => {
          const completedInModule = mod.lessonIds.filter(id => progress.completedLessonIds.has(id)).length;
          const locked = !canAccessModule(courseId, mod.index, ctx);
          // First incomplete lesson in the module, else the first lesson.
          const nextLessonId = mod.lessonIds.find(id => !progress.completedLessonIds.has(id)) ?? mod.lessonIds[0];
          return (
            <ModuleRow
              key={mod.code}
              module={mod}
              courseId={courseId}
              completed={completedInModule}
              locked={locked}
              nextLessonId={nextLessonId}
            />
          );
        })}
      </div>
    </main>
  );
}
