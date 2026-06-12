'use client';

import { useMemo, useState } from 'react';
import type { MatchPairsExercise } from '@/lib/lesson-types';
import { Instruction, shuffle } from './shared';

// Two-column tap-to-match. Pick a left word, pick a right word; correct
// pairs lock in, wrong picks flash and reset. Completes when every pair
// is matched (onComplete(true) — mistakes don't fail the exercise,
// matching mobile behaviour).
export default function MatchPairs({
  exercise,
  onComplete,
}: {
  exercise: MatchPairsExercise;
  onComplete: (correct: boolean) => void;
}) {
  const rights = useMemo(() => shuffle(exercise.pairs.map((p) => p.right)), [exercise]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [flash, setFlash] = useState<string | null>(null); // right value flashing red

  function pickLeft(left: string) {
    if (matched.has(left)) return;
    setSelectedLeft(left === selectedLeft ? null : left);
  }

  function pickRight(right: string) {
    if (!selectedLeft) return;
    const pair = exercise.pairs.find((p) => p.left === selectedLeft);
    if (matched.size >= exercise.pairs.length) return;
    if (pair?.right === right) {
      const next = new Set(matched);
      next.add(selectedLeft);
      setMatched(next);
      setSelectedLeft(null);
      if (next.size === exercise.pairs.length) {
        setTimeout(() => onComplete(true), 600);
      }
    } else {
      setFlash(right);
      setTimeout(() => setFlash(null), 600);
      setSelectedLeft(null);
    }
  }

  const matchedRights = new Set(
    exercise.pairs.filter((p) => matched.has(p.left)).map((p) => p.right),
  );

  const cellBase =
    'w-full px-3 py-3 rounded-xl border text-sm font-medium transition text-left';

  return (
    <div>
      <Instruction text={exercise.instruction} />
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {exercise.pairs.map((p) => (
            <button
              key={p.left}
              type="button"
              onClick={() => pickLeft(p.left)}
              disabled={matched.has(p.left)}
              className={`${cellBase} ${
                matched.has(p.left)
                  ? 'bg-success/10 border-success/30 text-white/40'
                  : selectedLeft === p.left
                    ? 'bg-secondary/20 border-secondary text-secondary'
                    : 'bg-white/5 border-white/15 text-white hover:bg-white/10'
              }`}
            >
              {p.left}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {rights.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => pickRight(r)}
              disabled={matchedRights.has(r)}
              className={`${cellBase} ${
                matchedRights.has(r)
                  ? 'bg-success/10 border-success/30 text-white/40'
                  : flash === r
                    ? 'bg-error/20 border-error text-error'
                    : 'bg-white/5 border-white/15 text-white hover:bg-white/10'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
