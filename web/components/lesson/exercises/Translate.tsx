'use client';

import { useState } from 'react';
import { FEEDBACK_DELAY_MS, FeedbackCard, Instruction } from './shared';

// Typed translation. Normalisation matches mobile: trim, lowercase,
// strip ONE trailing punctuation mark, then compare against any entry
// in correct[]. Also used by the recall phase (activeRecall prompts
// share the same shape).
export default function Translate({
  instruction,
  prompt,
  correct,
  onComplete,
}: {
  instruction: string;
  prompt: string;
  correct: string[];
  onComplete: (correct: boolean) => void;
}) {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<boolean | null>(null);
  const answered = result !== null;

  function normalise(s: string) {
    return s.trim().toLowerCase().replace(/[?!.,]$/, '');
  }

  function check() {
    if (answered || !value.trim()) return;
    const ok = correct.some((c) => normalise(c) === normalise(value));
    setResult(ok);
    setTimeout(() => onComplete(ok), FEEDBACK_DELAY_MS);
  }

  return (
    <div>
      <Instruction text={instruction} />
      <p className="text-xl text-white font-semibold mb-4">{prompt}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          check();
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={answered}
          placeholder="Type your answer…"
          autoFocus
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className="flex-1 px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-secondary disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={answered || !value.trim()}
          className="px-5 py-3 bg-secondary text-primary font-bold rounded-xl hover:opacity-90 transition disabled:opacity-40"
        >
          Check
        </button>
      </form>
      {answered && (
        <FeedbackCard correct={result!} detail={result ? undefined : `Answer: ${correct[0]}`} />
      )}
    </div>
  );
}
