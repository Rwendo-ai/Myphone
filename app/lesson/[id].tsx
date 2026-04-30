import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { useAuth } from '../../lib/AuthContext';
import RwenImage from '../../components/rwen/RwenImage';
import { saveLessonProgress } from '../../lib/progress';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';
import MatchPairs from '../../components/exercises/MatchPairs';
import FillBlank from '../../components/exercises/FillBlank';
import Translate from '../../components/exercises/Translate';
import BuildSentence from '../../components/exercises/BuildSentence';
import MultipleChoice from '../../components/exercises/MultipleChoice';

import m01l01 from '../../data/curriculum/m01-l01';
import m01l02 from '../../data/curriculum/m01-l02';
import m01l03 from '../../data/curriculum/m01-l03';
import m01l04 from '../../data/curriculum/m01-l04';
import m01l05 from '../../data/curriculum/m01-l05';
import m01l06 from '../../data/curriculum/m01-l06';
import m01l07 from '../../data/curriculum/m01-l07';
import m01l08 from '../../data/curriculum/m01-l08';
import m01l09 from '../../data/curriculum/m01-l09';
import m01l10 from '../../data/curriculum/m01-l10';
import m02l01 from '../../data/curriculum/m02-l01';
import m02l02 from '../../data/curriculum/m02-l02';
import m02l03 from '../../data/curriculum/m02-l03';
import m02l04 from '../../data/curriculum/m02-l04';
import m02l05 from '../../data/curriculum/m02-l05';
import m02l06 from '../../data/curriculum/m02-l06';
import m02l07 from '../../data/curriculum/m02-l07';
import m02l08 from '../../data/curriculum/m02-l08';
import m02l09 from '../../data/curriculum/m02-l09';
import m02l10 from '../../data/curriculum/m02-l10';
import m03l01 from '../../data/curriculum/m03-l01';
import m03l02 from '../../data/curriculum/m03-l02';
import m03l03 from '../../data/curriculum/m03-l03';
import m03l04 from '../../data/curriculum/m03-l04';
import m03l05 from '../../data/curriculum/m03-l05';
import m03l06 from '../../data/curriculum/m03-l06';
import m03l07 from '../../data/curriculum/m03-l07';
import m03l08 from '../../data/curriculum/m03-l08';
import m03l09 from '../../data/curriculum/m03-l09';
import m03l10 from '../../data/curriculum/m03-l10';
import m04l01 from '../../data/curriculum/m04-l01';
import m04l02 from '../../data/curriculum/m04-l02';
import m04l03 from '../../data/curriculum/m04-l03';
import m04l04 from '../../data/curriculum/m04-l04';
import m04l05 from '../../data/curriculum/m04-l05';
import m04l06 from '../../data/curriculum/m04-l06';
import m04l07 from '../../data/curriculum/m04-l07';
import m04l08 from '../../data/curriculum/m04-l08';
import m04l09 from '../../data/curriculum/m04-l09';
import m04l10 from '../../data/curriculum/m04-l10';
import m05l01 from '../../data/curriculum/m05-l01';
import m05l02 from '../../data/curriculum/m05-l02';
import m05l03 from '../../data/curriculum/m05-l03';
import m05l04 from '../../data/curriculum/m05-l04';
import m05l05 from '../../data/curriculum/m05-l05';
import m05l06 from '../../data/curriculum/m05-l06';
import m05l07 from '../../data/curriculum/m05-l07';
import m05l08 from '../../data/curriculum/m05-l08';
import m05l09 from '../../data/curriculum/m05-l09';
import m05l10 from '../../data/curriculum/m05-l10';
import m06l01 from '../../data/curriculum/m06-l01';
import m06l02 from '../../data/curriculum/m06-l02';
import m06l03 from '../../data/curriculum/m06-l03';
import m06l04 from '../../data/curriculum/m06-l04';
import m06l05 from '../../data/curriculum/m06-l05';
import m06l06 from '../../data/curriculum/m06-l06';
import m06l07 from '../../data/curriculum/m06-l07';
import m06l08 from '../../data/curriculum/m06-l08';
import m06l09 from '../../data/curriculum/m06-l09';
import m06l10 from '../../data/curriculum/m06-l10';
import m07l01 from '../../data/curriculum/m07-l01';
import m07l02 from '../../data/curriculum/m07-l02';
import m07l03 from '../../data/curriculum/m07-l03';
import m07l04 from '../../data/curriculum/m07-l04';
import m07l05 from '../../data/curriculum/m07-l05';
import m07l06 from '../../data/curriculum/m07-l06';
import m07l07 from '../../data/curriculum/m07-l07';
import m07l08 from '../../data/curriculum/m07-l08';
import m07l09 from '../../data/curriculum/m07-l09';
import m07l10 from '../../data/curriculum/m07-l10';
import m08l01 from '../../data/curriculum/m08-l01';
import m08l02 from '../../data/curriculum/m08-l02';
import m08l03 from '../../data/curriculum/m08-l03';
import m08l04 from '../../data/curriculum/m08-l04';
import m08l05 from '../../data/curriculum/m08-l05';
import m08l06 from '../../data/curriculum/m08-l06';
import m08l07 from '../../data/curriculum/m08-l07';
import m08l08 from '../../data/curriculum/m08-l08';
import m08l09 from '../../data/curriculum/m08-l09';
import m08l10 from '../../data/curriculum/m08-l10';
import m09l01 from '../../data/curriculum/m09-l01';
import m09l02 from '../../data/curriculum/m09-l02';
import m09l03 from '../../data/curriculum/m09-l03';
import m09l04 from '../../data/curriculum/m09-l04';
import m09l05 from '../../data/curriculum/m09-l05';
import m09l06 from '../../data/curriculum/m09-l06';
import m09l07 from '../../data/curriculum/m09-l07';
import m09l08 from '../../data/curriculum/m09-l08';
import m09l09 from '../../data/curriculum/m09-l09';
import m09l10 from '../../data/curriculum/m09-l10';
import m10l01 from '../../data/curriculum/m10-l01';
import m10l02 from '../../data/curriculum/m10-l02';
import m10l03 from '../../data/curriculum/m10-l03';
import m10l04 from '../../data/curriculum/m10-l04';
import m10l05 from '../../data/curriculum/m10-l05';
import m10l06 from '../../data/curriculum/m10-l06';
import m10l07 from '../../data/curriculum/m10-l07';
import m10l08 from '../../data/curriculum/m10-l08';
import m10l09 from '../../data/curriculum/m10-l09';
import m10l10 from '../../data/curriculum/m10-l10';
import { LessonData, DialogueLine } from '../../types/lesson';

const LESSONS: Record<string, LessonData> = {
  // Module 1 — Greetings & Respect
  'm01-l01-mangwanani':       m01l01,
  'm01-l02-wamuka-sei':       m01l02,
  'm01-l03-maswera-sei':      m01l03,
  'm01-l04-manheru':          m01l04,
  'm01-l05-makadii':          m01l05,
  'm01-l06-zita-rako':        m01l06,
  'm01-l07-wabva-kupi':       m01l07,
  'm01-l08-mese':             m01l08,
  'm01-l09-sara-zvakanaka':   m01l09,
  'm01-l10-conversation':     m01l10,
  // Module 2 — Survival Phrases
  'm02-l01-ndapota':          m02l01,
  'm02-l02-ndatenda':         m02l02,
  'm02-l03-ruregerero':       m02l03,
  'm02-l04-handizivi':        m02l04,
  'm02-l05-taura-zvishoma':   m02l05,
  'm02-l06-ndinoda-rubatsiro': m02l06,
  'm02-l07-zvii-mushona':     m02l07,
  'm02-l08-ndanzwisisa':      m02l08,
  'm02-l09-ndinoda':          m02l09,
  'm02-l10-survival-conversation': m02l10,
  // Module 3 — Self & Identity
  'm03-l01-ndiri':            m03l01,
  'm03-l02-ndinoshanda':      m03l02,
  'm03-l03-makore':           m03l03,
  'm03-l04-mhuri':            m03l04,
  'm03-l05-vanhu-vangu':      m03l05,
  'm03-l06-tinogara':         m03l06,
  'm03-l07-ndinoda-kudzidza': m03l07,
  'm03-l08-ndinofara':        m03l08,
  'm03-l09-zvakaita':         m03l09,
  'm03-l10-my-story':         m03l10,
  // Module 4 — Noun Classes
  'm04-l01-mu-va':            m04l01,
  'm04-l02-chi-zvi':          m04l02,
  'm04-l03-mu-mi':            m04l03,
  'm04-l04-ri-ma':            m04l04,
  'm04-l05-subject-concord':  m04l05,
  'm04-l06-possession':       m04l06,
  'm04-l07-adjectives':       m04l07,
  'm04-l08-tenses':           m04l08,
  'm04-l09-questions':        m04l09,
  'm04-l10-grammar-context':  m04l10,
  // Module 5 — Family & Kinship
  'm05-l01-baba':             m05l01,
  'm05-l02-amai':             m05l02,
  'm05-l03-siblings':         m05l03,
  'm05-l04-grandparents':     m05l04,
  'm05-l05-extended-family':  m05l05,
  'm05-l06-mudzimu':          m05l06,
  'm05-l07-spouse':           m05l07,
  'm05-l08-children':         m05l08,
  'm05-l09-talking-family':   m05l09,
  'm05-l10-rwen-family':      m05l10,
  // Module 6 — Numbers, Time & Money
  'm06-l01-numbers-1-5':      m06l01,
  'm06-l02-numbers-6-10':     m06l02,
  'm06-l03-time':             m06l03,
  'm06-l04-days':             m06l04,
  'm06-l05-months':           m06l05,
  'm06-l06-money':            m06l06,
  'm06-l07-prices':           m06l07,
  'm06-l08-larger-numbers':   m06l08,
  'm06-l09-appointments':     m06l09,
  'm06-l10-market':           m06l10,
  // Module 7 — Food, Drink & Hosting
  'm07-l01-sadza':            m07l01,
  'm07-l02-food-vocabulary':  m07l02,
  'm07-l03-drinks':           m07l03,
  'm07-l04-hunger':           m07l04,
  'm07-l05-ordering':         m07l05,
  'm07-l06-delicious':        m07l06,
  'm07-l07-hosting':          m07l07,
  'm07-l08-eating-together':  m07l08,
  'm07-l09-morning-meal':     m07l09,
  'm07-l10-rwen-dinner':      m07l10,
  // Module 8 — Action Verbs & Daily Life
  'm08-l01-kuenda':           m08l01,
  'm08-l02-kuuya':            m08l02,
  'm08-l03-kudya-verb':       m08l03,
  'm08-l04-kunwa':            m08l04,
  'm08-l05-kurara':           m08l05,
  'm08-l06-kutaura':          m08l06,
  'm08-l07-kuona':            m08l07,
  'm08-l08-kuterera':         m08l08,
  'm08-l09-kudzidza':         m08l09,
  'm08-l10-daily-routine':    m08l10,
  // Module 9 — Directions & Travel
  'm09-l01-nzira':            m09l01,
  'm09-l02-forward-back':     m09l02,
  'm09-l03-right-left':       m09l03,
  'm09-l04-near-far':         m09l04,
  'm09-l05-kombi':            m09l05,
  'm09-l06-airport':          m09l06,
  'm09-l07-hotel':            m09l07,
  'm09-l08-emergency':        m09l08,
  'm09-l09-sightseeing':      m09l09,
  'm09-l10-harare':           m09l10,
  // Module 10 — Emotions, Health & Stories
  'm10-l01-ndinofara':        m10l01,
  'm10-l02-sadness':          m10l02,
  'm10-l03-fear':             m10l03,
  'm10-l04-sickness':         m10l04,
  'm10-l05-body':             m10l05,
  'm10-l06-doctor':           m10l06,
  'm10-l07-past':             m10l07,
  'm10-l08-hope':             m10l08,
  'm10-l09-proverbs':         m10l09,
  'm10-l10-your-story':       m10l10,
};

type Phase = 'hook' | 'chunks' | 'pattern' | 'practice' | 'dialogue' | 'recall' | 'mission';

const PHASES: Phase[] = ['hook', 'chunks', 'pattern', 'practice', 'dialogue', 'recall', 'mission'];
const PHASE_LABELS: Record<Phase, string> = {
  hook: 'The Scene',
  chunks: 'New Words',
  pattern: 'The Pattern',
  practice: 'Practice',
  dialogue: 'Conversation',
  recall: 'Recall',
  mission: 'Your Mission',
};

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = LESSONS[id];
  const { user } = useAuth();

  const [phase, setPhase] = useState<Phase>('hook');
  const [chunkIndex, setChunkIndex] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [recallIndex, setRecallIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [dialogueChoice, setDialogueChoice] = useState<{ correct: boolean; feedback: string } | null>(null);
  const [saved, setSaved] = useState(false);

  if (!lesson) {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={{ padding: 20, color: Colors.gray[600] }}>Lesson not found: {id}</Text>
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
    }
  };

  const confirmQuit = () => {
    if (phase === 'hook' || phase === 'mission') {
      router.back();
      return;
    }
    Alert.alert(
      'Quit lesson?',
      'Your progress in this lesson will be lost. Are you sure?',
      [
        { text: 'Keep going', style: 'cancel' },
        { text: 'Quit', style: 'destructive', onPress: () => router.back() },
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
    <View style={styles.topBar}>
      <Pressable onPress={confirmQuit} style={styles.closeBtn}>
        <Text style={[styles.closeText, light && { color: 'rgba(255,255,255,0.7)' }]}>←</Text>
      </Pressable>
      <View style={[styles.progressBg, light && { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }, light && { backgroundColor: Colors.xp }]} />
      </View>
      <Text style={[styles.phaseLabel, light && { color: 'rgba(255,255,255,0.7)' }]}>
        {PHASE_LABELS[phase]}
      </Text>
    </View>
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
        <TopBar light />
        <View style={styles.hookContainer}>
          <RwenFace animation="arise" size={80} />
          <View style={styles.speechBubble}>
            <Text style={styles.rwenLine}>{lesson.hook.rwenLine}</Text>
          </View>
          <View style={styles.culturalNote}>
            <Text style={styles.culturalNoteLabel}>TSIKA — Cultural Context</Text>
            <Text style={styles.culturalNoteText}>{lesson.hook.culturalNote}</Text>
          </View>
        </View>
        <View style={styles.bottomAction}>
          <Pressable style={styles.primaryBtn} onPress={nextPhase}>
            <Text style={styles.primaryBtnText}>Let's learn →</Text>
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
          Word {chunkIndex + 1} of {lesson.chunks.length}
        </Text>
        <View style={styles.chunkCard}>
          <Text style={styles.chunkEmoji}>{chunk.emoji}</Text>
          <Text style={styles.chunkShona}>{chunk.shona}</Text>
          <Text style={styles.chunkPhonetic}>{chunk.phonetic}</Text>
          <View style={styles.chunkDivider} />
          <Text style={styles.chunkEnglish}>{chunk.english}</Text>
          {chunk.literal && <Text style={styles.chunkLiteral}>Literally: "{chunk.literal}"</Text>}
        </View>
        <View style={styles.bottomAction}>
          <Pressable
            style={styles.primaryBtn}
            onPress={() => isLast ? nextPhase() : setChunkIndex((i) => i + 1)}
          >
            <Text style={styles.primaryBtnText}>{isLast ? 'See the pattern →' : 'Got it →'}</Text>
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
                <Text style={styles.patternShona}>{ex.shona}</Text>
                <Text style={styles.patternArrow}>→</Text>
                <Text style={styles.patternEnglish}>{ex.english}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.bottomAction}>
          <Pressable style={styles.primaryBtn} onPress={nextPhase}>
            <Text style={styles.primaryBtnText}>Start practice →</Text>
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
          Exercise {exerciseIndex + 1} of {lesson.exercises.length}
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
                  <Text style={styles.userChoiceShona}>{choice.shona}</Text>
                  <Text style={styles.userChoiceEnglish}>{choice.english}</Text>
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
              <Text style={styles.primaryBtnText}>{isLastLine ? 'Great — now recall →' : 'Continue →'}</Text>
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
          <Text style={styles.recallTitle}>Active Recall</Text>
          <Text style={styles.recallSubtitle}>{lesson.activeRecall.instruction}</Text>
        </View>
        <Translate
          key={recallIndex}
          instruction={`${recallIndex + 1} of ${lesson.activeRecall.prompts.length}`}
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
          <Text style={styles.missionCompleteTitle}>Lesson Complete!</Text>
          <View style={styles.xpBadge}>
            <Text style={styles.xpBadgeText}>+{xpEarned} XP</Text>
          </View>
          <Text style={styles.missionScoreText}>{score} / {totalAnswered} correct</Text>

          <View style={styles.missionCard}>
            <Text style={styles.missionCardTitle}>📍 {lesson.mission.title}</Text>
            <Text style={styles.missionTask}>{lesson.mission.task}</Text>
            <View style={styles.rwenSignoffRow}>
              <RwenFace size={32} />
              <Text style={styles.rwenSignoff}>"{lesson.mission.rwenSignoff}"</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomAction}>
          <Pressable style={styles.primaryBtn} onPress={() => router.back()}>
            <Text style={styles.primaryBtnText}>Famba zvakanaka →</Text>
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
          <Text style={dialogueStyles.npcShona}>{line.shona}</Text>
          <Text style={dialogueStyles.npcEnglish}>{line.english}</Text>
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

  // Shared
  bottomAction: { padding: Spacing.lg, paddingBottom: Spacing.xl },
  primaryBtn: { backgroundColor: Colors.xp, paddingVertical: Spacing.md, borderRadius: BorderRadius.lg, alignItems: 'center' },
  primaryBtnText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
});
