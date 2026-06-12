'use client';

import { useState } from 'react';
import type { MultipleChoiceExercise } from '@/lib/lesson-types';
import { FEEDBACK_DELAY_MS, FeedbackCard, Instruction, KeyHint, useExerciseKeys } from './shared';

export default function MultipleChoice({
  exercise,
  onComplete,
}: {
  exercise: MultipleChoiceExercise;
  onComplete: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const correct = answered ? exercise.options[selected].correct : false;

  function pick(i: number) {
    if (answered) return;
    setSelected(i);
    setTimeout(() => onComplete(exercise.options[i].correct), FEEDBACK_DELAY_MS + 200);
  }

  useExerciseKeys({ active: !answered, optionCount: exercise.options.length, onPick: pick });

  return (
    <div>
      <Instruction text={exercise.instruction} />
      <p className="text-xl text-white font-semibold mb-5">{exercise.question}</p>
      <div className="space-y-2">
        {exercise.options.map((o, i) => (
          <button
            key={i}
            type="button"
            onClick={() => pick(i)}
            disabled={answered}
            className={`w-full text-left px-4 py-3 rounded-xl border font-medium transition flex items-center justify-between gap-2 ${
              answered && o.correct
                ? 'bg-success/15 border-success text-success'
                : answered && i === selected
                  ? 'bg-error/15 border-error text-error'
                  : 'bg-white/5 border-white/15 text-white hover:bg-white/10 disabled:opacity-50'
            }`}
          >
            <span>{o.text}</span>
            <KeyHint n={i + 1} />
          </button>
        ))}
      </div>
      {answered && <FeedbackCard correct={correct} detail={exercise.explanation} />}
    </div>
  );
}
