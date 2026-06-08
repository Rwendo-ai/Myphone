import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import {
  getCourseCatalogue,
  getAllCoursesProgress,
  getAccessContext,
  canAccessCourse,
  getCourseById,
  type CourseCategory,
} from '@/lib/courses-web';
import CourseCard from '@/components/learn/CourseCard';

// Learn-hub Server Component. Mirrors the mobile app's category split
// (Languages + Build Yourself). Data fetched once on the server; client
// interactivity is limited to the per-card Link (CourseCard).
export default async function LearnPage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  const [progressByCourse, ctx] = await Promise.all([
    getAllCoursesProgress(supabase, user.id),
    getAccessContext(supabase, user.id),
  ]);

  const catalogue = getCourseCatalogue();
  const sections: { key: CourseCategory; title: string; emoji: string }[] = [
    { key: 'languages',      title: 'Languages',      emoji: '🌍' },
    { key: 'build-yourself', title: 'Build Yourself', emoji: '🌱' },
  ];

  const starter = ctx.starterCourseId ? getCourseById(ctx.starterCourseId) : null;

  return (
    <main className="px-4 pt-8 max-w-3xl mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Learn</h1>
        <p className="text-white/60 text-sm">
          {starter
            ? <>Currently learning: <span className="text-white">{starter.emoji} {starter.name}</span></>
            : 'Pick a course to start.'}
        </p>
      </header>

      {sections.map(section => {
        const courses = catalogue.filter(c => c.category === section.key);
        return (
          <section key={section.key} className="mb-8">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span>{section.emoji}</span>
              <span>{section.title}</span>
              <span className="text-white/40 text-sm font-normal">· {courses.length}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {courses.map(course => {
                const progress = progressByCourse[course.id] ?? { completed: 0, total: course.totalLessons, completedLessonIds: new Set<string>() };
                const locked = !canAccessCourse(course.id, ctx);
                return (
                  <CourseCard
                    key={course.id}
                    course={course}
                    progress={progress}
                    locked={locked}
                    isStarter={ctx.starterCourseId === course.id}
                  />
                );
              })}
            </div>
          </section>
        );
      })}

      {ctx.tier === 'free' && (
        <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-4 mb-8">
          <div className="font-semibold mb-1">Free tier</div>
          <p className="text-sm text-white/70">
            You get the first 2 modules of your starter course free. Unlock every course and module with any Rwendo Pro plan from A$4/month.
          </p>
        </div>
      )}
    </main>
  );
}
