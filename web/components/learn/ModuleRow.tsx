import Link from 'next/link';
import type { ModuleSummary } from '@/lib/courses-web';

// One row in the units (modules) list on the course-detail page.
// Locked rows render as a non-link with an upsell hint.
export default function ModuleRow({
  module,
  courseId,
  completed,
  locked,
  nextLessonId,
}: {
  module: ModuleSummary;
  courseId: string;
  completed: number;
  locked: boolean;
  nextLessonId: string;
}) {
  const pct = module.totalLessons > 0
    ? Math.min(100, Math.round((completed / module.totalLessons) * 100))
    : 0;

  const body = (
    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 transition hover:bg-white/10 hover:border-white/20">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl shrink-0">
        {locked ? '🔒' : module.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{module.title}</h3>
          <span className="text-[11px] text-white/40">{module.code.toUpperCase()}</span>
        </div>
        <div className="text-xs text-white/50 mt-0.5">
          {module.totalLessons} lessons · {completed} done
        </div>
        {!locked && (
          <div className="h-1 bg-white/5 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-secondary rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        )}
        {locked && (
          <div className="text-[11px] text-secondary mt-1">Unlock with Pro</div>
        )}
      </div>
      <div className="text-white/40 text-xl shrink-0">{locked ? '·' : '›'}</div>
    </div>
  );

  if (locked) {
    return (
      <Link href="/cart" className="block opacity-70">
        {body}
      </Link>
    );
  }
  return (
    <Link href={`/learn/${courseId}/${nextLessonId}`} className="block">
      {body}
    </Link>
  );
}
