import { View, Text, StyleSheet, Pressable, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../lib/AuthContext';
import RwenImage from '../../components/rwen/RwenImage';
import { saveLessonProgress } from '../../lib/progress';
import { awardXp } from '../../lib/xp-events';
import { useIntroBubble } from '../../lib/intro-bubbles';
import IntroBubble from '../../components/IntroBubble';
import { autoAddLessonChunks } from '../../lib/dictionary';
import LessonToolsSheet from '../../components/lesson/LessonToolsSheet';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';
import MatchPairs from '../../components/exercises/MatchPairs';
import FillBlank from '../../components/exercises/FillBlank';
import Translate from '../../components/exercises/Translate';
import BuildSentence from '../../components/exercises/BuildSentence';
import MultipleChoice from '../../components/exercises/MultipleChoice';

import { DialogueLine, LessonData } from '../../types/lesson';
import { useSettings } from '../../lib/SettingsContext';
import { loadLessonAsync } from '../../lib/lesson-loader';
import { getLessonManifest } from '../../lib/manifests';
import { canAccessLesson, canUseAiFeature } from '../../lib/entitlements';

type Phase = 'hook' | 'chunks' | 'pattern' | 'practice' | 'dialogue' | 'recall' | 'mission';

const PHASES: Phase[] = ['hook', 'chunks', 'pattern', 'practice', 'dialogue', 'recall', 'mission'];

export default function LessonScreen() {
  const { t } = useTranslation('learn');
  const { id, courseId: routeCourseId } = useLocalSearchParams<{ id: string; courseId?: string }>();
  const { speaker, activeCourseId, entitlementContext, jurisdiction } = useSettings();
  // Prefer the courseId passed from the unit screen — activeCourseId may be
  // stale if the user is browsing a different category than the one their
  // active pick lives in. Fall back to activeCourseId for direct deep-links.
  const lessonCourseId = routeCourseId ?? activeCourseId;
  const { user } = useAuth();

  // Streaming lesson loader — cache-first, falls back to Storage on miss,
  // then to the english variant if user's speaker variant doesn't exist
  // (most courses ship english-only at v1; per-speaker variants are Phase K).
  // Lessons are not bundled in the binary anymore — pure download-on-pick.
  const [lesson, setLesson] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoadError('Missing lesson id in route.');
      setLoading(false);
      return;
    }
    if (!lessonCourseId) {
      setLoadError('No course is active. Pick a course on the Learn tab first.');
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setLoadError(null);
    const manifest = getLessonManifest(lessonCourseId);
    const expectedVersion = manifest?.find((m) => m.id === id)?.version;
    loadLessonAsync(lessonCourseId, speaker.id, id, expectedVersion)
      .then((data) => {
        if (!cancelled) { setLesson(data); setLoading(false); }
      })
      .catch((e) => {
        if (cancelled) return;
        setLoadError(e instanceof Error ? e.message : 'Lesson not available offline.');
        setLoading(false);
      });
    return () => { cancelled = true; };
  }, [lessonCourseId, speaker.id, id]);

  // Phase E gating — runs before any lesson UI renders. DEV_UNLOCK_ALL
  // short-circuits to allowed.
  const entitlement = lessonCourseId
    ? canAccessLesson(lessonCourseId, id, entitlementContext)
    : { allowed: false as const, reason: 'tier_required' as const };

  const [phase, setPhase] = useState<Phase>('hook');
  const [chunkIndex, setChunkIndex] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [recallIndex, setRecallIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [dialogueChoice, setDialogueChoice] = useState<{ correct: boolean; feedback: string } | null>(null);
  const [saved, setSaved] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  // First-run bubble — explains the 7-phase lesson structure.
  const phaseIntro = useIntroBubble('lesson.first_phase');

  if (loading) {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center' }]}>
        <ActivityIndicator color={Colors.white} size="large" />
        <Text style={{ marginTop: Spacing.md, color: 'rgba(255,255,255,0.7)' }}>
          {t('lesson.loading', { defaultValue: 'Loading lesson…' })}
        </Text>
      </SafeAreaView>
    );
  }

  if (loadError || !lesson) {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center', padding: Spacing.lg }]}>
        <Text style={{ color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold, textAlign: 'center' }}>
          {t('lesson.load_error_title', { defaultValue: "Couldn't load this lesson" })}
        </Text>
        <Text style={{ color: 'rgba(255,255,255,0.7)', marginTop: Spacing.sm, textAlign: 'center' }}>
          {loadError ?? t('lesson.not_found', { id })}
        </Text>
        <Pressable style={[styles.lockedCta, { marginTop: Spacing.lg }]} onPress={() => router.back()}>
          <Text style={styles.lockedCtaText}>{t('lesson.back', { defaultValue: 'Back' })}</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  if (!entitlement.allowed) {
    // Two reasons in the new model: pro_required (this lesson is in a paid
    // module / non-starter course) or starter_locked (free user trying a
    // course that isn't their starter).
    const isStarterLocked = entitlement.reason === 'starter_locked';
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: Colors.primary }]} edges={['top']}>
        <View style={styles.lockedContainer}>
          <Text style={styles.lockedEmoji}>🔒</Text>
          <Text style={styles.lockedTitle}>
            {isStarterLocked
              ? t('lesson.locked.course_title')
              : t('lesson.locked.subscription_title')}
          </Text>
          <Text style={styles.lockedBody}>
            {isStarterLocked
              ? t('lesson.locked.course_body')
              : t('lesson.locked.subscription_body')}
          </Text>
          <Pressable style={styles.lockedCta} onPress={() => router.replace('/profile/plans')}>
            <Text style={styles.lockedCtaText}>
              {isStarterLocked
                ? t('lesson.locked.course_cta')
                : t('lesson.locked.subscription_cta')}
            </Text>
          </Pressable>
          <Pressable style={styles.lockedBack} onPress={() => router.back()}>
            <Text style={styles.lockedBackText}>{t('screen_header.back')}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const phaseIndex = PHASES.indexOf(phase);
  const progress = phaseIndex / (PHASES.length - 1);

  const xpEarned = totalAnswered > 0
    ? Math.round((score / totalAnswered) * lesson.xpReward)
    : lesson.xpReward;

  const nextPhase = () => {
    const next = PHASES[phaseIndex + 1];
    setPhase(next);
    // Save progress when reaching the mission (final) phase
    if (next === 'mission' && user && !saved) {
      setSaved(true);
      saveLessonProgress(user.id, {
        lessonId: lesson.id,
        score,
        totalQuestions: totalAnswered,
        xpEarned: xpEarned,
      }).catch((e) => console.error('saveLessonProgress failed:', e));
      // Award lesson_complete XP — server dedups on lesson_id so this is
      // safe even if the user replays the lesson. The actual XP amount
      // matches what saveLessonProgress recorded.
      awardXp('lesson_complete', xpEarned || 25, { lesson_id: lesson.id }).catch(() => {});
      if (lessonCourseId) {
        autoAddLessonChunks(user.id, lessonCourseId, lesson).catch((e) =>
          console.error('autoAddLessonChunks failed:', e),
        );
      }
    }
  };

  const confirmQuit = () => {
    if (phase === 'hook' || phase === 'mission') {
      router.back();
      return;
    }
    Alert.alert(
      t('lesson.quit.title'),
      t('lesson.quit.body'),
      [
        { text: t('lesson.quit.keep_going'), style: 'cancel' },
        { text: t('lesson.quit.quit'),       style: 'destructive', onPress: () => router.back() },
      ]
    );
  };

  const goBack = () => {
    switch (phase) {
      case 'hook':
        router.back();
        break;
      case 'chunks':
        if (chunkIndex > 0) setChunkIndex((i) => i - 1);
        else setPhase('hook');
        break;
      case 'pattern':
        setChunkIndex(lesson.chunks.length - 1);
        setPhase('chunks');
        break;
      case 'practice':
        if (exerciseIndex > 0) setExerciseIndex((i) => i - 1);
        else setPhase('pattern');
        break;
      case 'dialogue':
        if (dialogueIndex > 0) { setDialogueChoice(null); setDialogueIndex((i) => i - 1); }
        else setPhase('practice');
        break;
      case 'recall':
        if (recallIndex > 0) setRecallIndex((i) => i - 1);
        else setPhase('dialogue');
        break;
      case 'mission':
        setPhase('recall');
        break;
    }
  };

  const handleExerciseComplete = (correct: boolean) => {
    setScore((s) => s + (correct ? 1 : 0));
    setTotalAnswered((t) => t + 1);
    setTimeout(() => {
      if (exerciseIndex + 1 >= lesson.exercises.length) {
        nextPhase();
      } else {
        setExerciseIndex((i) => i + 1);
      }
    }, 300);
  };

  const handleRecallComplete = (correct: boolean) => {
    setScore((s) => s + (correct ? 1 : 0));
    setTotalAnswered((t) => t + 1);
    setTimeout(() => {
      if (recallIndex + 1 >= lesson.activeRecall.prompts.length) {
        nextPhase();
      } else {
        setRecallIndex((i) => i + 1);
      }
    }, 300);
  };

  // ── TOP BAR ──
  const TopBar = ({ light = false }: { light?: boolean }) => (
    <>
      <View style={styles.topBar}>
        <Pressable onPress={confirmQuit} style={styles.closeBtn}>
          <Text style={[styles.closeText, light && { color: 'rgba(255,255,255,0.7)' }]}>←</Text>
        </Pressable>
        <View style={[styles.progressBg, light && { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` }, light && { backgroundColor: Colors.xp }]} />
        </View>
        <Text style={[styles.phaseLabel, light && { color: 'rgba(255,255,255,0.7)' }]}>
          {t(`lesson.phases.${phase}`)}
        </Text>
        <Pressable
          onPress={() => setToolsOpen(true)}
          style={styles.toolsBtn}
          accessibilityLabel="Open lesson tools"
          hitSlop={8}
        >
          <Text style={[styles.toolsBtnText, light && { color: Colors.white }]}>🧰</Text>
        </Pressable>
      </View>
      {user && lessonCourseId && (
        <LessonToolsSheet
          visible={toolsOpen}
          onClose={() => setToolsOpen(false)}
          userId={user.id}
          courseId={lessonCourseId}
          lesson={lesson}
          entitlementContext={entitlementContext}
        />
      )}
    </>
  );

  // ── RWEN IMAGE ──
  const RwenFace = ({ animation = 'idle', size = 64 }: { animation?: string; size?: number }) => {
    const pose =
      animation === 'celebrate' ? 'victory' as const :
      animation === 'arise'     ? 'waving' as const  :
      'idle' as const;
    return <RwenImage pose={pose} size={size} />;
  };

  // ══════════════════════════════════════
  // PHASE: HOOK
  // ══════════════════════════════════════
  if (phase === 'hook') {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: Colors.primary }]} edges={['top']}>
        {phaseIntro.show && (
          <IntroBubble id="lesson.first_phase" onDismiss={phaseIntro.markSeen} />
        )}
        <TopBar light />
        <View style={styles.hookContainer}>
          <RwenFace animation="arise" size={80} />
          <View style={styles.speechBubble}>
            <Text style={styles.rwenLine}>{lesson.hook.rwenLine}</Text>
          </View>
          <View style={styles.culturalNote}>
            <Text style={styles.culturalNoteLabel}>{t('lesson.hook.tsika_label')}</Text>
            <Text style={styles.culturalNoteText}>{lesson.hook.culturalNote}</Text>
          </View>
        </View>
        <View style={styles.bottomAction}>
          <Pressable style={styles.primaryBtn} onPress={nextPhase}>
            <Text style={styles.primaryBtnText}>{t('lesson.hook.cta')}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  // ══════════════════════════════════════
  // PHASE: CHUNKS
  // ══════════════════════════════════════
  if (phase === 'chunks') {
    const chunk = lesson.chunks[chunkIndex];
    const isLast = chunkIndex + 1 >= lesson.chunks.length;
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: Colors.primary }]} edges={['top']}>
        <TopBar light />
        <Text style={styles.chunkCounter}>
          {t('lesson.chunks.counter', { current: chunkIndex + 1, total: lesson.chunks.length })}
        </Text>
        <View style={styles.chunkCard}>
          <Text style={styles.chunkEmoji}>{chunk.emoji}</Text>
          <Text style={styles.chunkShona}>{chunk.target}</Text>
          <Text style={styles.chunkPhonetic}>{chunk.phonetic}</Text>
          <View style={styles.chunkDivider} />
          <Text style={styles.chunkEnglish}>{chunk.native}</Text>
          {chunk.literal && <Text style={styles.chunkLiteral}>{t('lesson.chunks.literal', { value: chunk.literal })}</Text>}
        </View>
        <View style={styles.bottomAction}>
          <Pressable
            style={styles.primaryBtn}
            onPress={() => isLast ? nextPhase() : setChunkIndex((i) => i + 1)}
          >
            <Text style={styles.primaryBtnText}>{isLast ? t('lesson.chunks.see_pattern') : t('lesson.chunks.got_it')}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  // ══════════════════════════════════════
  // PHASE: PATTERN
  // ══════════════════════════════════════
  if (phase === 'pattern') {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: Colors.primary }]} edges={['top']}>
        <TopBar light />
        <ScrollView contentContainerStyle={styles.patternContainer}>
          <Text style={styles.patternName}>{lesson.pattern.name}</Text>
          <Text style={styles.patternExplanation}>{lesson.pattern.explanation}</Text>
          <View style={styles.patternTable}>
            {lesson.pattern.examples.map((ex, i) => (
              <View key={i} style={styles.patternRow}>
                <Text style={styles.patternShona}>{ex.target}</Text>
                <Text style={styles.patternArrow}>→</Text>
                <Text style={styles.patternEnglish}>{ex.native}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.bottomAction}>
          <Pressable style={styles.primaryBtn} onPress={nextPhase}>
            <Text style={styles.primaryBtnText}>{t('lesson.pattern.start_practice')}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  // ══════════════════════════════════════
  // PHASE: PRACTICE
  // ══════════════════════════════════════
  if (phase === 'practice') {
    const exercise = lesson.exercises[exerciseIndex];
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: Colors.white }]} edges={['top']}>
        <TopBar />
        <Text style={styles.exerciseCounter}>
          {t('lesson.practice.counter', { current: exerciseIndex + 1, total: lesson.exercises.length })}
        </Text>
        {exercise.type === 'match_pairs' && (
          <MatchPairs
            key={exerciseIndex}
            instruction={exercise.instruction}
            pairs={exercise.pairs}
            onComplete={handleExerciseComplete}
          />
        )}
        {exercise.type === 'fill_blank' && (
          <FillBlank
            key={exerciseIndex}
            instruction={exercise.instruction}
            sentence={exercise.sentence}
            options={exercise.options}
            correct={exercise.correct}
            context={exercise.context}
            onComplete={handleExerciseComplete}
          />
        )}
        {exercise.type === 'translate' && (
          <Translate
            key={exerciseIndex}
            instruction={exercise.instruction}
            prompt={exercise.prompt}
            correct={exercise.correct}
            onComplete={handleExerciseComplete}
          />
        )}
        {exercise.type === 'build_sentence' && (
          <BuildSentence
            key={exerciseIndex}
            instruction={exercise.instruction}
            words={exercise.words}
            correct={exercise.correct}
            translation={exercise.translation}
            onComplete={handleExerciseComplete}
          />
        )}
        {exercise.type === 'multiple_choice' && (
          <MultipleChoice
            key={exerciseIndex}
            instruction={exercise.instruction}
            question={exercise.question}
            options={exercise.options}
            explanation={exercise.explanation}
            onComplete={handleExerciseComplete}
          />
        )}
      </SafeAreaView>
    );
  }

  // ══════════════════════════════════════
  // PHASE: RWEN DIALOGUE
  // ══════════════════════════════════════
  if (phase === 'dialogue') {
    const currentLine = lesson.rwenDialogue.lines[dialogueIndex];
    const isLastLine = dialogueIndex + 1 >= lesson.rwenDialogue.lines.length;

    const advanceDialogue = () => {
      setDialogueChoice(null);
      if (isLastLine) {
        nextPhase();
      } else {
        setDialogueIndex((i) => i + 1);
      }
    };

    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: Colors.primary }]} edges={['top']}>
        <TopBar light />
        <ScrollView contentContainerStyle={styles.dialogueContainer}>
          <Text style={styles.dialogueIntro}>{lesson.rwenDialogue.intro}</Text>

          {lesson.rwenDialogue.lines.slice(0, dialogueIndex + 1).map((line, i) => (
            <DialogueLineView key={i} line={line} isActive={i === dialogueIndex} />
          ))}

          {currentLine.speaker === 'user' && !dialogueChoice && (
            <View style={styles.userChoices}>
              {currentLine.userChoices?.map((choice, i) => (
                <Pressable
                  key={i}
                  style={styles.userChoice}
                  onPress={() => {
                    setDialogueChoice({ correct: choice.correct, feedback: choice.feedback });
                    if (choice.correct) setScore((s) => s + 1);
                    setTotalAnswered((t) => t + 1);
                  }}
                >
                  <Text style={styles.userChoiceShona}>{choice.target}</Text>
                  <Text style={styles.userChoiceEnglish}>{choice.native}</Text>
                </Pressable>
              ))}
            </View>
          )}

          {dialogueChoice && (
            <View style={[styles.dialogueFeedback, dialogueChoice.correct ? styles.feedbackCorrect : styles.feedbackWrong]}>
              <Text style={styles.dialogueFeedbackText}>{dialogueChoice.feedback}</Text>
            </View>
          )}
        </ScrollView>

        {(currentLine.speaker !== 'user' || dialogueChoice) && (
          <View style={styles.bottomAction}>
            <Pressable style={styles.primaryBtn} onPress={advanceDialogue}>
              <Text style={styles.primaryBtnText}>{isLastLine ? t('lesson.dialogue.to_recall') : t('lesson.dialogue.continue')}</Text>
            </Pressable>
          </View>
        )}
      </SafeAreaView>
    );
  }

  // ══════════════════════════════════════
  // PHASE: ACTIVE RECALL
  // ══════════════════════════════════════
  if (phase === 'recall') {
    const prompt = lesson.activeRecall.prompts[recallIndex];
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: Colors.white }]} edges={['top']}>
        <TopBar />
        <View style={styles.recallHeader}>
          <Text style={styles.recallTitle}>{t('lesson.recall.title')}</Text>
          <Text style={styles.recallSubtitle}>{lesson.activeRecall.instruction}</Text>
        </View>
        <Translate
          key={recallIndex}
          instruction={t('lesson.recall.counter', { current: recallIndex + 1, total: lesson.activeRecall.prompts.length })}
          prompt={prompt.prompt}
          correct={prompt.correct}
          onComplete={handleRecallComplete}
        />
      </SafeAreaView>
    );
  }

  // ══════════════════════════════════════
  // PHASE: MISSION + COMPLETE
  // ══════════════════════════════════════
  if (phase === 'mission') {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: Colors.primary }]} edges={['top']}>
        <ScrollView contentContainerStyle={styles.missionContainer}>
          <RwenFace animation="celebrate" size={100} />
          <Text style={styles.missionCompleteTitle}>{t('lesson.mission.complete_title')}</Text>
          <View style={styles.xpBadge}>
            <Text style={styles.xpBadgeText}>{t('lesson.mission.xp_badge', { count: xpEarned })}</Text>
          </View>
          <Text style={styles.missionScoreText}>{t('lesson.mission.score', { score, total: totalAnswered })}</Text>

          <View style={styles.missionCard}>
            <Text style={styles.missionCardTitle}>{t('lesson.mission.card_title_prefix')}{lesson.mission.title}</Text>
            <Text style={styles.missionTask}>{lesson.mission.task}</Text>
            <View style={styles.rwenSignoffRow}>
              <RwenFace size={32} />
              <Text style={styles.rwenSignoff}>"{lesson.mission.rwenSignoff}"</Text>
            </View>
          </View>

          {lesson.crisisHandoff && jurisdiction.crisisResources.length > 0 && (
            <View style={styles.crisisCard}>
              <Text style={styles.crisisTitle}>
                {t('lesson.crisis.header', { defaultValue: 'If you need someone to talk to' })}
              </Text>
              <Text style={styles.crisisBody}>
                {t('lesson.crisis.body', {
                  defaultValue:
                    "What this lesson touched on can sit heavy. If it brought up something hard, please reach out to one of these — they're trained for this and they're free.",
                })}
              </Text>
              {jurisdiction.crisisResources.map((r) => (
                <View key={r.name} style={styles.crisisRow}>
                  <Text style={styles.crisisName}>{r.name}</Text>
                  {!!r.phone && <Text style={styles.crisisDetail}>📞 {r.phone}</Text>}
                  {!!r.url && <Text style={styles.crisisDetail}>{r.url}</Text>}
                </View>
              ))}
            </View>
          )}

          {/* Phase 8 teaser — locked or unlocked based on AI tier */}
          {(() => {
            const aiCheck = canUseAiFeature('text', entitlementContext);
            const phase8Title = lesson.phase8?.scenario ?? lesson.title;
            if (aiCheck.allowed) {
              return (
                <Pressable
                  style={styles.phase8Card}
                  onPress={() => {
                    // For v1, route to companion with the lesson title baked into a query
                    // string. Companion can prime its system prompt from this. Real
                    // dedicated Phase 8 screen is a Phase F follow-up.
                    router.push({ pathname: '/(tabs)/companion', params: { lessonContext: phase8Title } });
                  }}
                >
                  <View style={styles.phase8Header}>
                    <Text style={styles.phase8Emoji}>🦎</Text>
                    <Text style={styles.phase8Title}>{t('lesson.phase8.unlocked_title')}</Text>
                  </View>
                  <Text style={styles.phase8Body}>
                    {t('lesson.phase8.unlocked_body', { topic: phase8Title })}
                  </Text>
                  <Text style={styles.phase8Cta}>{t('lesson.phase8.unlocked_cta')}</Text>
                </Pressable>
              );
            }
            return (
              <Pressable
                style={[styles.phase8Card, styles.phase8CardLocked]}
                onPress={() => router.push('/profile/plans')}
              >
                <View style={styles.phase8Header}>
                  <Text style={styles.phase8Emoji}>🔒</Text>
                  <Text style={styles.phase8Title}>{t('lesson.phase8.locked_title')}</Text>
                </View>
                <Text style={styles.phase8Body}>
                  {t('lesson.phase8.locked_body', { topic: phase8Title })}
                </Text>
                <Text style={styles.phase8CtaLocked}>{t('lesson.phase8.locked_cta')}</Text>
              </Pressable>
            );
          })()}
        </ScrollView>
        <View style={styles.bottomAction}>
          <Pressable style={styles.primaryBtn} onPress={() => router.back()}>
            <Text style={styles.primaryBtnText}>{t('lesson.mission.cta')}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return null;
}

function DialogueLineView({ line, isActive }: { line: DialogueLine; isActive: boolean }) {
  if (line.speaker === 'rwen') {
    return (
      <View style={dialogueStyles.rwenLine}>
        <RwenImage pose="idle" size={40} />
        <View style={dialogueStyles.rwenBubble}>
          <Text style={dialogueStyles.rwenText}>{line.rwenLine}</Text>
        </View>
      </View>
    );
  }
  if (line.speaker === 'npc') {
    return (
      <View style={dialogueStyles.npcLine}>
        <Text style={dialogueStyles.npcEmoji}>👴</Text>
        <View style={dialogueStyles.npcBubble}>
          <Text style={dialogueStyles.npcShona}>{line.target}</Text>
          <Text style={dialogueStyles.npcEnglish}>{line.native}</Text>
        </View>
      </View>
    );
  }
  return null;
}

const dialogueStyles = StyleSheet.create({
  rwenLine: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.sm, marginBottom: Spacing.md },
  rwenEmoji: { fontSize: 28 },
  rwenBubble: { flex: 1, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: BorderRadius.lg, padding: Spacing.md },
  rwenText: { color: Colors.white, fontSize: FontSize.md, lineHeight: 22 },
  npcLine: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.sm, marginBottom: Spacing.md },
  npcEmoji: { fontSize: 28 },
  npcBubble: { flex: 1, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: BorderRadius.lg, padding: Spacing.md },
  npcShona: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  npcEnglish: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.sm, marginTop: 2 },
});

const styles = StyleSheet.create({
  safe: { flex: 1 },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    gap: Spacing.md,
  },
  closeBtn: { padding: 4 },
  closeText: { fontSize: FontSize.lg, color: Colors.gray[400] },
  toolsBtn: { padding: 4 },
  toolsBtnText: { fontSize: FontSize.lg, color: Colors.gray[600] },
  progressBg: { flex: 1, height: 8, backgroundColor: Colors.gray[100], borderRadius: BorderRadius.full },
  progressFill: { height: 8, backgroundColor: Colors.secondary, borderRadius: BorderRadius.full, minWidth: 8 },
  phaseLabel: { fontSize: FontSize.xs, color: Colors.gray[400], fontWeight: FontWeight.medium, minWidth: 60, textAlign: 'right' },

  // Hook
  hookContainer: { flex: 1, padding: Spacing.lg, alignItems: 'center', justifyContent: 'center', gap: Spacing.lg },

  speechBubble: { backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: BorderRadius.lg, padding: Spacing.lg },
  rwenLine: { color: Colors.white, fontSize: FontSize.lg, lineHeight: 28, textAlign: 'center' },
  culturalNote: { backgroundColor: 'rgba(245,166,35,0.15)', borderRadius: BorderRadius.lg, padding: Spacing.md, gap: 6 },
  culturalNoteLabel: { color: Colors.xp, fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1 },
  culturalNoteText: { color: 'rgba(255,255,255,0.8)', fontSize: FontSize.md, lineHeight: 22 },

  // Chunks
  chunkCounter: { textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: FontSize.sm, fontWeight: FontWeight.bold, letterSpacing: 1, paddingTop: Spacing.sm },
  chunkCard: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: Spacing.xl, gap: Spacing.md },
  chunkEmoji: { fontSize: 56 },
  chunkShona: { fontSize: 48, fontWeight: FontWeight.extrabold, color: Colors.white, textAlign: 'center' },
  chunkPhonetic: { fontSize: FontSize.md, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' },
  chunkDivider: { width: 40, height: 2, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 1 },
  chunkEnglish: { fontSize: FontSize.xxl, fontWeight: FontWeight.semibold, color: Colors.xp, textAlign: 'center' },
  chunkLiteral: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', textAlign: 'center' },

  // Pattern
  patternContainer: { padding: Spacing.lg, gap: Spacing.lg },
  patternName: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.white },
  patternExplanation: { fontSize: FontSize.md, color: 'rgba(255,255,255,0.8)', lineHeight: 24 },
  patternTable: { gap: Spacing.sm },
  patternRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: BorderRadius.md, padding: Spacing.md },
  patternShona: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.white, flex: 1 },
  patternArrow: { color: 'rgba(255,255,255,0.4)', fontSize: FontSize.lg },
  patternEnglish: { fontSize: FontSize.md, color: 'rgba(255,255,255,0.7)', flex: 2 },

  // Practice
  exerciseCounter: { textAlign: 'center', color: Colors.gray[400], fontSize: FontSize.sm, fontWeight: FontWeight.bold, letterSpacing: 1, paddingVertical: Spacing.sm },

  // Dialogue
  dialogueContainer: { padding: Spacing.lg, gap: Spacing.md },
  dialogueIntro: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.md, fontStyle: 'italic', marginBottom: Spacing.md },
  userChoices: { gap: Spacing.sm, marginTop: Spacing.md },
  userChoice: { backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: BorderRadius.lg, padding: Spacing.md, borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
  userChoiceShona: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  userChoiceEnglish: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.sm, marginTop: 2 },
  dialogueFeedback: { padding: Spacing.md, borderRadius: BorderRadius.lg },
  feedbackCorrect: { backgroundColor: 'rgba(34,197,94,0.15)' },
  feedbackWrong: { backgroundColor: 'rgba(239,68,68,0.15)' },
  dialogueFeedbackText: { color: Colors.white, fontSize: FontSize.md },

  // Recall
  recallHeader: { padding: Spacing.lg, paddingBottom: 0 },
  recallTitle: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.primary },
  recallSubtitle: { fontSize: FontSize.sm, color: Colors.gray[500], marginTop: 4 },

  // Phase 8 result-screen card (Phase F)
  phase8Card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    margin: Spacing.lg,
    marginTop: Spacing.md,
    gap: Spacing.sm,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  phase8CardLocked: { backgroundColor: 'rgba(255,255,255,0.6)' },
  phase8Header: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  phase8Emoji: { fontSize: 24 },
  phase8Title: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[800] },
  phase8Body: { fontSize: FontSize.sm, color: Colors.gray[600], lineHeight: 20 },
  phase8Cta: { fontSize: FontSize.sm, color: Colors.secondary, fontWeight: FontWeight.bold, marginTop: 4 },
  phase8CtaLocked: { fontSize: FontSize.sm, color: Colors.xp, fontWeight: FontWeight.bold, marginTop: 4 },

  // Locked state (Phase E gating)
  lockedContainer: { flex: 1, padding: Spacing.xl, alignItems: 'center', justifyContent: 'center', gap: Spacing.lg },
  lockedEmoji: { fontSize: 64 },
  lockedTitle: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: Colors.white, textAlign: 'center' },
  lockedBody: { fontSize: FontSize.md, color: 'rgba(255,255,255,0.7)', textAlign: 'center', lineHeight: 22 },
  lockedCta: { backgroundColor: Colors.xp, paddingVertical: Spacing.md, paddingHorizontal: Spacing.xxl, borderRadius: BorderRadius.full, marginTop: Spacing.md },
  lockedCtaText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  lockedBack: { paddingVertical: Spacing.md },
  lockedBackText: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.md },

  // Mission
  missionContainer: { padding: Spacing.lg, alignItems: 'center', gap: Spacing.lg, paddingBottom: Spacing.xxl },
  missionCompleteTitle: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: Colors.white },
  xpBadge: { backgroundColor: Colors.xp, paddingHorizontal: Spacing.xl, paddingVertical: Spacing.sm, borderRadius: BorderRadius.full },
  xpBadgeText: { color: Colors.white, fontSize: FontSize.xl, fontWeight: FontWeight.extrabold },
  missionScoreText: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.md },
  missionCard: { backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: BorderRadius.lg, padding: Spacing.lg, width: '100%', gap: Spacing.md },
  missionCardTitle: { color: Colors.xp, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  missionTask: { color: Colors.white, fontSize: FontSize.lg, lineHeight: 26 },
  rwenSignoffRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, marginTop: Spacing.sm },
  rwenSignoff: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.sm, fontStyle: 'italic', flex: 1 },

  // Crisis handoff card — rendered after the mission when lesson.crisisHandoff is true.
  crisisCard: { backgroundColor: 'rgba(255,255,255,0.94)', borderRadius: BorderRadius.lg, padding: Spacing.lg, width: '100%', gap: Spacing.sm, borderLeftWidth: 4, borderLeftColor: Colors.xp },
  crisisTitle: { color: Colors.gray[900], fontSize: FontSize.md, fontWeight: FontWeight.extrabold },
  crisisBody: { color: Colors.gray[700], fontSize: FontSize.sm, lineHeight: 20 },
  crisisRow: { paddingVertical: Spacing.xs, borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.06)' },
  crisisName: { color: Colors.gray[900], fontSize: FontSize.sm, fontWeight: FontWeight.bold },
  crisisDetail: { color: Colors.gray[700], fontSize: FontSize.sm, marginTop: 2 },

  // Shared
  bottomAction: { padding: Spacing.lg, paddingBottom: Spacing.xl },
  primaryBtn: { backgroundColor: Colors.xp, paddingVertical: Spacing.md, borderRadius: BorderRadius.lg, alignItems: 'center' },
  primaryBtnText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
});
