import Link from 'next/link';
import type { CourseSummary, CourseProgress } from '@/lib/courses-web';

// One course tile in the Learn-hub grid. Pure Server Component — receives
// resolved progress + lock state from the parent.
export default function CourseCard({
  course,
  progress,
  locked,
  isStarter,
}: {
  course: CourseSummary;
  progress: CourseProgress;
  locked: boolean;
  isStarter: boolean;
}) {
  const pct = progress.total > 0
    ? Math.min(100, Math.round((progress.completed / progress.total) * 100))
    : 0;

  // Locked cards still link to the detail page — the detail page surfaces
  // the upsell. Mirrors the mobile pattern.
  return (
    <Link
      href={`/learn/${course.id}`}
      className={`block bg-white/5 border border-white/10 rounded-2xl p-4 transition hover:bg-white/10 hover:border-white/20 ${locked ? 'opacity-60' : ''}`}
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl leading-none">{course.emoji}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold truncate">{course.name}</h3>
            {isStarter && (
              <span className="text-[10px] uppercase tracking-wider bg-secondary/20 text-secondary px-1.5 py-0.5 rounded">Starter</span>
            )}
            {locked && (
              <span className="text-[10px] uppercase tracking-wider bg-white/10 text-white/60 px-1.5 py-0.5 rounded">Locked</span>
            )}
          </div>
          <p className="text-xs text-white/50 mt-0.5 line-clamp-2">{course.tagline}</p>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between text-[11px] text-white/50 mb-1">
          <span>{progress.completed} / {progress.total} lessons</span>
          <span>{pct}%</span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-secondary rounded-full transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </Link>
  );
}
