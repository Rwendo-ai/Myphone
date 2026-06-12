'use client';

import { useEffect } from 'react';

// Shared bits for the five exercise components. Interaction contract
// mirrors the mobile components: the user answers, gets inline
// feedback, and onComplete(correct) fires after a short beat so the
// feedback is actually readable.

export const FEEDBACK_DELAY_MS = 1200;

export function shuffle<T>(arr: readonly T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function Instruction({ text }: { text: string }) {
  return <p className="text-white/60 text-sm mb-4">{text}</p>;
}

export function FeedbackCard({
  correct,
  detail,
}: {
  correct: boolean;
  detail?: string;
}) {
  return (
    <div
      className={`mt-4 rounded-xl border p-4 ${
        correct ? 'bg-success/10 border-success/40' : 'bg-error/10 border-error/40'
      }`}
      role="status"
    >
      <p className={`font-semibold ${correct ? 'text-success' : 'text-error'}`}>
        {correct ? 'Correct! ✓' : 'Not quite'}
      </p>
      {detail && <p className="text-white/70 text-sm mt-1">{detail}</p>}
    </div>
  );
}

/** Keyboard shortcuts: digits 1-9 pick an option, Enter confirms.
 *  Disabled while `active` is false (e.g. after answering). */
export function useExerciseKeys({
  active,
  optionCount,
  onPick,
  onEnter,
}: {
  active: boolean;
  optionCount?: number;
  onPick?: (index: number) => void;
  onEnter?: () => void;
}) {
  useEffect(() => {
    if (!active) return;
    function handler(e: KeyboardEvent) {
      // Don't steal keys from text inputs (Translate manages its own).
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (onPick && optionCount && /^[1-9]$/.test(e.key)) {
        const i = parseInt(e.key, 10) - 1;
        if (i < optionCount) {
          e.preventDefault();
          onPick(i);
        }
      }
      if (onEnter && e.key === 'Enter') {
        e.preventDefault();
        onEnter();
      }
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active, optionCount, onPick, onEnter]);
}

/** Number-key hint chip rendered inside option buttons on desktop. */
export function KeyHint({ n }: { n: number }) {
  return (
    <span className="hidden md:inline-flex w-5 h-5 rounded border border-white/20 text-white/40 text-[10px] items-center justify-center shrink-0">
      {n}
    </span>
  );
}
