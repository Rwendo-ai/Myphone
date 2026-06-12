'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createSupabaseBrowser } from '@/lib/supabase-browser';
import type { DialogueLine, LessonData } from '@/lib/lesson-types';
import { completeLessonWeb } from '@/lib/lesson-web';
import MatchPairs from './exercises/MatchPairs';
import FillBlank from './exercises/FillBlank';
import Translate from './exercises/Translate';
import BuildSentence from './exercises/BuildSentence';
import MultipleChoice from './exercises/MultipleChoice';

// 7-phase lesson engine — web port of app/lesson/[id].tsx:
//   hook → chunks → pattern → practice → dialogue → recall → mission
// Scoring matches mobile: practice exercises, dialogue choices, and
// recall prompts each count toward score/totalAnswered; XP on mission
// = round(score/totalAnswered × xpReward).
//
// Web extras: Enter advances info screens, 1-9 answers options (see
// exercises/shared.tsx), and the wide layout gives dialogue and chunk
// cards room the phone never had.

type Phase = 'hook' | 'chunks' | 'pattern' | 'practice' | 'dialogue' | 'recall' | 'mission';
const PHASES: Phase[] = ['hook', 'chunks', 'pattern', 'practice', 'dialogue', 'recall', 'mission'];

const PHASE_LABEL: Record<Phase, string> = {
  hook: 'Hook',
  chunks: 'New words',
  pattern: 'Pattern',
  practice: 'Practice',
  dialogue: 'Dialogue',
  recall: 'Recall',
  mission: 'Mission',
};

export default function LessonPlayer({
  lesson,
  courseId,
  alreadyCompleted,
}: {
  lesson: LessonData;
  courseId: string;
  alreadyCompleted: boolean;
}) {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>('hook');
  const [chunkIndex, setChunkIndex] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [dialogueChoice, setDialogueChoice] = useState<number | null>(null);
  const [recallIndex, setRecallIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [xpEarned, setXpEarned] = useState(0);
  const savedRef = useRef(false);

  const phaseIdx = PHASES.indexOf(phase);

  const advancePhase = useCallback(() => {
    setPhase((p) => PHASES[Math.min(PHASES.indexOf(p) + 1, PHASES.length - 1)]);
  }, []);

  // ── Phase transitions ────────────────────────────────────────────

  function nextChunk() {
    if (chunkIndex < lesson.chunks.length - 1) setChunkIndex((i) => i + 1);
    else advancePhase();
  }

  const onExerciseComplete = useCallback(
    (correct: boolean) => {
      setScore((s) => s + (correct ? 1 : 0));
      setTotalAnswered((t) => t + 1);
      if (exerciseIndex < lesson.exercises.length - 1) setExerciseIndex((i) => i + 1);
      else advancePhase();
    },
    [exerciseIndex, lesson.exercises.length, advancePhase],
  );

  function nextDialogueLine() {
    setDialogueChoice(null);
    if (dialogueIndex < lesson.rwenDialogue.lines.length - 1) setDialogueIndex((i) => i + 1);
    else advancePhase();
  }

  function pickDialogueChoice(line: DialogueLine, i: number) {
    if (dialogueChoice !== null || !line.userChoices) return;
    setDialogueChoice(i);
    setScore((s) => s + (line.userChoices![i].correct ? 1 : 0));
    setTotalAnswered((t) => t + 1);
  }

  const onRecallComplete = useCallback(
    (correct: boolean) => {
      setScore((s) => s + (correct ? 1 : 0));
      setTotalAnswered((t) => t + 1);
      if (recallIndex < lesson.activeRecall.prompts.length - 1) setRecallIndex((i) => i + 1);
      else advancePhase();
    },
    [recallIndex, lesson.activeRecall.prompts.length, advancePhase],
  );

  // ── Mission: persist once ────────────────────────────────────────

  useEffect(() => {
    if (phase !== 'mission' || savedRef.current) return;
    savedRef.current = true;
    const projected = totalAnswered > 0
      ? Math.round((score / totalAnswered) * (lesson.xpReward || 25))
      : (lesson.xpReward || 25);
    setXpEarned(projected);
    if (alreadyCompleted) {
      setSaveState('saved');
      return;
    }
    setSaveState('saving');
    (async () => {
      const supabase = createSupabaseBrowser();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setSaveState('error');
        return;
      }
      const result = await completeLessonWeb(supabase, user.id, courseId, lesson, score, totalAnswered);
      setSaveState(result.ok ? 'saved' : 'error');
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // ── Keyboard: Enter advances info screens ────────────────────────

  const currentLine = lesson.rwenDialogue.lines[dialogueIndex];
  const awaitingChoice = phase === 'dialogue' && !!currentLine?.userChoices && dialogueChoice === null;

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key !== 'Enter') return;
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (phase === 'hook' || phase === 'pattern') {
        e.preventDefault();
        advancePhase();
      } else if (phase === 'chunks') {
        e.preventDefault();
        nextChunk();
      } else if (phase === 'dialogue' && !awaitingChoice) {
        e.preventDefault();
        nextDialogueLine();
      }
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, chunkIndex, dialogueIndex, awaitingChoice]);

  function quit() {
    if (phase === 'hook' || phase === 'mission') {
      router.push(`/learn/${courseId}`);
      return;
    }
    if (window.confirm('Quit this lesson? Your progress in it will be lost.')) {
      router.push(`/learn/${courseId}`);
    }
  }

  const chunk = lesson.chunks[chunkIndex];
  const exercise = lesson.exercises[exerciseIndex];

  return (
    <main className="px-4 py-6 max-w-2xl mx-auto">
      {/* Header: quit + phase progress */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={quit} aria-label="Quit lesson" className="text-white/50 hover:text-white text-xl leading-none transition">
          ×
        </button>
        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-2 bg-secondary rounded-full transition-all"
            style={{ width: `${((phaseIdx + 1) / PHASES.length) * 100}%` }}
          />
        </div>
        <span className="text-white/40 text-xs uppercase tracking-wider w-20 text-right">{PHASE_LABEL[phase]}</span>
      </div>

      {/* ── HOOK ── */}
      {phase === 'hook' && (
        <div className="text-center">
          <Image src="/rwen/waving.webp" alt="Rwen" width={140} height={140} className="mx-auto mb-4" unoptimized />
          <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left mb-4">
            <p className="text-white/90 leading-relaxed">{lesson.hook.rwenLine}</p>
          </div>
          <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-5 text-left mb-8">
            <p className="text-secondary text-xs uppercase tracking-wider font-semibold mb-1">Cultural note</p>
            <p className="text-white/80 text-sm leading-relaxed">{lesson.hook.culturalNote}</p>
          </div>
          <ContinueButton onClick={advancePhase} label="Let's go" />
        </div>
      )}

      {/* ── CHUNKS ── */}
      {phase === 'chunks' && chunk && (
        <div className="text-center">
          <p className="text-white/40 text-sm mb-4">
            Word {chunkIndex + 1} of {lesson.chunks.length}
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
            <div className="text-5xl mb-4">{chunk.emoji}</div>
            <div className="text-3xl font-extrabold text-secondary mb-2">{chunk.target}</div>
            <div className="text-white/50 text-sm mb-4">/{chunk.phonetic}/</div>
            <div className="text-xl text-white">{chunk.native}</div>
            {chunk.literal && (
              <div className="text-white/50 text-sm mt-2 italic">lit. “{chunk.literal}”</div>
            )}
          </div>
          <div className="flex gap-2 justify-center">
            {chunkIndex > 0 && (
              <button
                onClick={() => setChunkIndex((i) => i - 1)}
                className="px-6 py-3 border border-white/15 text-white/70 rounded-full hover:bg-white/5 transition"
              >
                Back
              </button>
            )}
            <ContinueButton onClick={nextChunk} label={chunkIndex < lesson.chunks.length - 1 ? 'Next word' : 'Got them'} />
          </div>
        </div>
      )}

      {/* ── PATTERN ── */}
      {phase === 'pattern' && (
        <div>
          <h2 className="text-xl font-bold mb-2">{lesson.pattern.name}</h2>
          <p className="text-white/70 leading-relaxed mb-6">{lesson.pattern.explanation}</p>
          <div className="space-y-2 mb-8">
            {lesson.pattern.examples.map((ex, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-baseline justify-between gap-4">
                <span className="text-secondary font-semibold">{ex.target}</span>
                <span className="text-white/60 text-sm text-right">{ex.native}</span>
              </div>
            ))}
          </div>
          <ContinueButton onClick={advancePhase} label="Practice it" />
        </div>
      )}

      {/* ── PRACTICE ── */}
      {phase === 'practice' && exercise && (
        <div>
          <p className="text-white/40 text-sm mb-4">
            Exercise {exerciseIndex + 1} of {lesson.exercises.length}
          </p>
          {/* key= resets exercise-internal state between questions */}
          {exercise.type === 'match_pairs' && (
            <MatchPairs key={exerciseIndex} exercise={exercise} onComplete={onExerciseComplete} />
          )}
          {exercise.type === 'fill_blank' && (
            <FillBlank key={exerciseIndex} exercise={exercise} onComplete={onExerciseComplete} />
          )}
          {exercise.type === 'translate' && (
            <Translate
              key={exerciseIndex}
              instruction={exercise.instruction}
              prompt={exercise.prompt}
              correct={exercise.correct}
              onComplete={onExerciseComplete}
            />
          )}
          {exercise.type === 'build_sentence' && (
            <BuildSentence key={exerciseIndex} exercise={exercise} onComplete={onExerciseComplete} />
          )}
          {exercise.type === 'multiple_choice' && (
            <MultipleChoice key={exerciseIndex} exercise={exercise} onComplete={onExerciseComplete} />
          )}
        </div>
      )}

      {/* ── DIALOGUE ── */}
      {phase === 'dialogue' && (
        <div>
          <p className="text-white/60 text-sm italic mb-5">{lesson.rwenDialogue.intro}</p>
          <div className="space-y-3 mb-6">
            {lesson.rwenDialogue.lines.slice(0, dialogueIndex + 1).map((line, li) => (
              <DialogueBubble
                key={li}
                line={line}
                isCurrent={li === dialogueIndex}
                chosen={li === dialogueIndex ? dialogueChoice : null}
                onChoose={(ci) => pickDialogueChoice(line, ci)}
              />
            ))}
          </div>
          {!awaitingChoice && (
            <ContinueButton
              onClick={nextDialogueLine}
              label={dialogueIndex < lesson.rwenDialogue.lines.length - 1 ? 'Continue' : 'Wrap up'}
            />
          )}
        </div>
      )}

      {/* ── RECALL ── */}
      {phase === 'recall' && lesson.activeRecall.prompts[recallIndex] && (
        <div>
          <p className="text-white/40 text-sm mb-4">
            Recall {recallIndex + 1} of {lesson.activeRecall.prompts.length}
          </p>
          <Translate
            key={recallIndex}
            instruction={lesson.activeRecall.instruction}
            prompt={lesson.activeRecall.prompts[recallIndex].prompt}
            correct={lesson.activeRecall.prompts[recallIndex].correct}
            onComplete={onRecallComplete}
          />
        </div>
      )}

      {/* ── MISSION ── */}
      {phase === 'mission' && (
        <div className="text-center">
          <Image src="/rwen/victory.webp" alt="Rwen celebrating" width={140} height={140} className="mx-auto mb-4" unoptimized />
          <h2 className="text-2xl font-extrabold mb-2">Lesson complete!</h2>
          <p className="text-white/60 mb-6">
            {totalAnswered > 0 ? `${score} / ${totalAnswered} correct` : 'Nicely done'}
          </p>
          <div className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/40 rounded-full px-5 py-2 mb-8">
            <span className="text-secondary font-extrabold text-lg">+{xpEarned} XP</span>
            {saveState === 'saving' && <span className="text-white/40 text-xs">saving…</span>}
            {saveState === 'saved' && alreadyCompleted && (
              <span className="text-white/40 text-xs">already completed — no repeat XP</span>
            )}
            {saveState === 'error' && <span className="text-error text-xs">couldn't save — will retry from course page</span>}
          </div>

          {lesson.crisisHandoff && (
            <div className="bg-white/5 border border-white/15 rounded-2xl p-5 text-left mb-4">
              <p className="text-white/90 font-semibold mb-1">If this lesson touched something raw</p>
              <p className="text-white/70 text-sm leading-relaxed">
                You don't have to carry it alone. If you're in crisis, contact your local emergency
                services or a crisis line in your country — and consider talking to someone you trust today.
              </p>
            </div>
          )}

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left mb-6">
            <p className="text-secondary text-xs uppercase tracking-wider font-semibold mb-1">
              Your mission: {lesson.mission.title}
            </p>
            <p className="text-white/85 leading-relaxed mb-3">{lesson.mission.task}</p>
            <p className="text-white/50 text-sm italic">{lesson.mission.rwenSignoff}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link
              href={`/chat?lessonContext=${encodeURIComponent(lesson.id)}&courseId=${encodeURIComponent(courseId)}`}
              className="px-6 py-3 bg-secondary text-primary font-bold rounded-full hover:opacity-90 transition"
            >
              Ask Rwen about this lesson
            </Link>
            <Link
              href={`/learn/${courseId}`}
              className="px-6 py-3 border border-white/15 text-white/80 rounded-full hover:bg-white/5 transition"
            >
              Back to course
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

// ── Subcomponents ────────────────────────────────────────────────────

function ContinueButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 bg-secondary text-primary font-bold rounded-full hover:opacity-90 transition"
    >
      {label}
      <span className="hidden md:inline text-primary/50 text-xs ml-2">⏎</span>
    </button>
  );
}

function DialogueBubble({
  line,
  isCurrent,
  chosen,
  onChoose,
}: {
  line: DialogueLine;
  isCurrent: boolean;
  chosen: number | null;
  onChoose: (i: number) => void;
}) {
  if (line.speaker === 'user' && line.userChoices) {
    // Unanswered current line → choice buttons; answered → chosen bubble.
    if (isCurrent && chosen === null) {
      return (
        <div className="space-y-2 pl-10">
          <p className="text-white/50 text-xs uppercase tracking-wider">Your reply</p>
          {line.userChoices.map((c, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onChoose(i)}
              className="w-full text-left px-4 py-3 bg-white/5 border border-white/15 rounded-xl hover:bg-white/10 transition"
            >
              <span className="text-white font-medium">{c.target}</span>
              <span className="text-white/50 text-sm block">{c.native}</span>
            </button>
          ))}
        </div>
      );
    }
    const pick = chosen !== null ? line.userChoices[chosen] : null;
    if (!pick) return null;
    return (
      <div className="pl-10">
        <div
          className={`rounded-2xl rounded-br-sm px-4 py-3 ml-auto max-w-[85%] w-fit border ${
            pick.correct ? 'bg-secondary/20 border-secondary/40' : 'bg-error/15 border-error/40'
          }`}
        >
          <p className="text-white font-medium">{pick.target}</p>
          <p className="text-white/50 text-sm">{pick.native}</p>
        </div>
        <p className={`text-sm mt-1 text-right ${pick.correct ? 'text-success' : 'text-error'}`}>{pick.feedback}</p>
      </div>
    );
  }

  const isRwen = line.speaker === 'rwen';
  const text = line.rwenLine ?? line.target ?? '';
  return (
    <div className="flex items-start gap-2 max-w-[85%]">
      <span className="text-2xl shrink-0">{isRwen ? '🦎' : '👴'}</span>
      <div className="bg-white/10 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
        {text && <p className="text-white">{text}</p>}
        {line.native && line.target && <p className="text-white/50 text-sm mt-0.5">{line.native}</p>}
      </div>
    </div>
  );
}
