'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseBrowser } from '@/lib/supabase-browser';
import { markLessonComplete } from '@/lib/courses-web';

// Client-side button that writes lesson_progress + calls award_xp.
// Server Components handle the rest of the page; this is the one bit
// that needs a real user interaction.
export default function MarkCompleteButton({
  courseId,
  lessonId,
  alreadyCompleted: initialCompleted,
}: {
  courseId: string;
  lessonId: string;
  alreadyCompleted: boolean;
}) {
  const router = useRouter();
  const [completed, setCompleted] = useState(initialCompleted);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    if (completed || pending) return;
    setError(null);

    startTransition(async () => {
      try {
        const supabase = createSupabaseBrowser();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setError('Not signed in');
          return;
        }
        const result = await markLessonComplete(supabase, user.id, courseId, lessonId);
        if (!result.ok) {
          setError(result.error ?? 'Could not save');
          return;
        }
        setCompleted(true);
        // Refresh the route so the course page reflects new progress
        // next time the user navigates back.
        router.refresh();
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Unknown error');
      }
    });
  };

  if (completed) {
    return (
      <div className="bg-success/10 border border-success/30 rounded-2xl p-4 text-center">
        <div className="text-success font-semibold">Lesson complete</div>
        <div className="text-white/60 text-sm mt-1">+25 XP earned</div>
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={pending}
        className="w-full bg-success text-white font-semibold py-3 rounded-2xl hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? 'Saving…' : 'Mark lesson complete (+25 XP)'}
      </button>
      {error && (
        <div className="text-error text-sm mt-2 text-center">{error}</div>
      )}
    </div>
  );
}
