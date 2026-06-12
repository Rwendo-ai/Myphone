'use client';

import { useState } from 'react';
import type { FillBlankExercise } from '@/lib/lesson-types';
import { FEEDBACK_DELAY_MS, FeedbackCard, Instruction, KeyHint, useExerciseKeys } from './shared';

// Sentence with a blank; tap (or press 1-9) to fill it.
export default function FillBlank({
  exercise,
  onComplete,
}: {
  exercise: FillBlankExercise;
  onComplete: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const answered = selected !== null;
  const correct = selected === exercise.correct;

  function pick(option: string) {
    if (answered) return;
    setSelected(option);
    setTimeout(() => onComplete(option === exercise.correct), FEEDBACK_DELAY_MS);
  }

  useExerciseKeys({
    active: !answered,
    optionCount: exercise.options.length,
    onPick: (i) => pick(exercise.options[i]),
  });

  const [before, after] = exercise.sentence.split('_____');

  return (
    <div>
      <Instruction text={exercise.instruction} />
      {exercise.context && <p className="text-white/50 text-sm italic mb-3">{exercise.context}</p>}
      <p className="text-xl text-white mb-6 leading-relaxed">
        {before}
        <span
          className={`inline-block min-w-20 px-2 mx-1 border-b-2 text-center font-bold ${
            answered ? (correct ? 'border-success text-success' : 'border-error text-error') : 'border-secondary text-secondary'
          }`}
        >
          {selected ?? ' '}
        </span>
        {after}
      </p>
      <div className="grid grid-cols-2 gap-2">
        {exercise.options.map((o, i) => (
          <button
            key={o}
            type="button"
            onClick={() => pick(o)}
            disabled={answered}
            className={`px-4 py-3 rounded-xl border font-medium transition flex items-center justify-between gap-2 ${
              answered && o === exercise.correct
                ? 'bg-success/15 border-success text-success'
                : answered && o === selected
                  ? 'bg-error/15 border-error text-error'
                  : 'bg-white/5 border-white/15 text-white hover:bg-white/10 disabled:opacity-50'
            }`}
          >
            <span>{o}</span>
            <KeyHint n={i + 1} />
          </button>
        ))}
      </div>
      {answered && <FeedbackCard correct={correct} detail={correct ? undefined : `Answer: ${exercise.correct}`} />}
    </div>
  );
}
