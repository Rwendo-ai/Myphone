'use client';

import { useMemo, useState } from 'react';
import type { BuildSentenceExercise } from '@/lib/lesson-types';
import { FEEDBACK_DELAY_MS, FeedbackCard, Instruction, KeyHint, shuffle, useExerciseKeys } from './shared';

// Word-bank sentence builder. Pool words carry an index so duplicate
// words stay distinct. Keyboard: 1-9 adds the nth remaining pool word,
// Backspace removes the last built word, Enter checks.
export default function BuildSentence({
  exercise,
  onComplete,
}: {
  exercise: BuildSentenceExercise;
  onComplete: (correct: boolean) => void;
}) {
  const pool = useMemo(
    () => shuffle(exercise.words.map((word, i) => ({ word, key: `${word}-${i}` }))),
    [exercise],
  );
  const [built, setBuilt] = useState<typeof pool>([]);
  const [result, setResult] = useState<boolean | null>(null);
  const answered = result !== null;

  const remaining = pool.filter((p) => !built.some((b) => b.key === p.key));

  function add(item: (typeof pool)[number]) {
    if (answered) return;
    setBuilt((b) => [...b, item]);
  }
  function removeLast() {
    if (answered) return;
    setBuilt((b) => b.slice(0, -1));
  }
  function check() {
    if (answered || built.length === 0) return;
    const ok = built.map((b) => b.word).join(' ') === exercise.correct.join(' ');
    setResult(ok);
    setTimeout(() => onComplete(ok), FEEDBACK_DELAY_MS + 200);
  }

  useExerciseKeys({
    active: !answered,
    optionCount: remaining.length,
    onPick: (i) => add(remaining[i]),
    onEnter: check,
  });

  return (
    <div onKeyDown={(e) => { if (e.key === 'Backspace') removeLast(); }}>
      <Instruction text={exercise.instruction} />
      <p className="text-white/60 text-sm mb-4">“{exercise.translation}”</p>

      {/* Built sentence */}
      <div className="min-h-14 flex flex-wrap items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl mb-4">
        {built.length === 0 && <span className="text-white/30 text-sm">Tap words below (or press 1-9)…</span>}
        {built.map((b) => (
          <button
            key={b.key}
            type="button"
            disabled={answered}
            onClick={() => setBuilt((arr) => arr.filter((x) => x.key !== b.key))}
            className="px-3 py-1.5 bg-secondary/20 border border-secondary/50 text-secondary rounded-lg text-sm font-medium hover:bg-secondary/30 transition"
          >
            {b.word}
          </button>
        ))}
      </div>

      {/* Word pool */}
      <div className="flex flex-wrap gap-2 mb-5">
        {remaining.map((p, i) => (
          <button
            key={p.key}
            type="button"
            disabled={answered}
            onClick={() => add(p)}
            className="px-3 py-1.5 bg-white/10 border border-white/15 text-white rounded-lg text-sm font-medium hover:bg-white/15 transition flex items-center gap-1.5"
          >
            {p.word}
            <KeyHint n={i + 1} />
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={check}
        disabled={answered || built.length === 0}
        className="w-full py-3 bg-secondary text-primary font-bold rounded-full hover:opacity-90 transition disabled:opacity-40"
      >
        Check
      </button>
      {answered && (
        <FeedbackCard correct={result!} detail={result ? undefined : `Answer: ${exercise.correct.join(' ')}`} />
      )}
    </div>
  );
}
