import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-watashi-wa-desu',
  module: 3,
  lesson: 1,
  title: 'Watashi wa... desu — I Am...',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Greetings opened the door. Now — who are you? In Japanese, the most useful sentence pattern in the language is also one of the simplest: 「わたしは … です」. Slot anything in. Watch a stranger become someone who knows your name.",
    culturalNote: "Japanese self-introductions follow a quiet ritual. You almost always lead with your surname — Tanaka Hiroshi, not Hiroshi Tanaka — and the surname carries the weight. Pair it with a small bow and 「よろしくお願いします」 at the end (we'll get there in l10), and you've done it the way it's done.",
  },

  chunks: [
    {
      id: 'watashi_wa',
      target: 'わたしは… (Watashi wa...)',
      native: 'I (am)... / As for me...',
      literal: 'I + topic-marker',
      emoji: '🙋',
      phonetic: 'wa-TA-shi wa',
      audioRef: null,
    },
    {
      id: 'watashi_wa_desu',
      target: 'わたしは田中ひろしです (Watashi wa Tanaka Hiroshi desu)',
      native: 'I am Tanaka Hiroshi',
      literal: 'I + は + Tanaka Hiroshi + です (be/am)',
      emoji: '🪪',
      phonetic: 'wa-TA-shi wa ta-NA-ka hi-RO-shi des',
      audioRef: null,
    },
    {
      id: 'desu_ending',
      target: 'です (desu)',
      native: 'am / is / are (polite copula)',
      literal: 'polite "to be" — pronounced "des"',
      emoji: '🔚',
      phonetic: 'des (the u is whispered)',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Topic] は [X] です — Topic-marking with は',
    explanation: "は (written ha, pronounced wa when used as a particle) marks the topic — what the sentence is about. です closes the sentence politely. Stretch the same frame across nationalities, jobs, anything: 「わたしはイギリス人です」 (I am British), 「わたしは学生です」 (I am a student). One frame, infinite uses.",
    examples: [
      { target: 'わたしは田中です。', native: 'I am Tanaka. (surname only — common)' },
      { target: 'わたしはアメリカ人です。', native: 'I am American.' },
      { target: 'わたしはベンです。', native: 'I am Ben.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'わたしは…', right: 'I (am)... / As for me...' },
        { left: 'です', right: 'am / is / are (polite)' },
        { left: 'わたしは田中です', right: 'I am Tanaka' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the self-introduction',
      sentence: 'わたし___ ベンです。',
      options: ['は', 'を', 'に'],
      correct: 'は',
      context: 'は marks the topic — read as "wa" when used as a particle.',
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: 'I am Tanaka.',
      correct: ['Watashi wa Tanaka desu', 'Watashi wa Tanaka desu.', 'watashi wa tanaka desu', 'watashi wa tanaka desu.', 'わたしは田中です', 'わたしは田中です。'],
    },
    {
      type: 'multiple_choice',
      instruction: "On a Japanese name badge, which order is standard?",
      question: 'Choose how a Japanese person typically writes their full name',
      options: [
        { text: '田中ひろし (Tanaka Hiroshi — surname first)', correct: true },
        { text: 'ひろし田中 (Hiroshi Tanaka — given name first)', correct: false },
        { text: 'Either order is equally common', correct: false },
      ],
      explanation: "In Japanese, surname comes first — Tanaka (family) Hiroshi (given). Reversing it sounds Western. When you introduce yourself, lead with your surname: 「わたしは田中です」.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am Ben."',
      words: ['です', 'は', 'わたし', 'ベン'],
      correct: ['わたし', 'は', 'ベン', 'です'],
      translation: 'I am Ben.',
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: 'I am American. (use アメリカ人 / Amerikajin)',
      correct: ['Watashi wa Amerikajin desu', 'Watashi wa Amerikajin desu.', 'watashi wa amerikajin desu', 'わたしはアメリカ人です', 'わたしはアメリカ人です。'],
    },
  ],

  rwenDialogue: {
    intro: "First day at a Tokyo company. The HR officer in a charcoal suit smiles, bows, and waits for your self-introduction.",
    lines: [
      {
        speaker: 'npc',
        target: 'はじめまして。お名前は？',
        native: "Nice to meet you. Your name is...?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'わたしはベンです。', native: 'I am Ben.', correct: true, feedback: "Clear, polite, complete. The は…です frame nailed it." },
          { target: 'ベン。', native: 'Ben.', correct: false, feedback: "True — but in this setting drop the bare name and say 「わたしはベンです」 with the full polite frame." },
          { target: 'わたしベンです。', native: 'I Ben am.', correct: false, feedback: "Almost — you forgot は. 「わたしは ベン です」 marks YOU as the topic." },
        ],
      },
      {
        speaker: 'npc',
        target: 'よろしくお願いします。',
        native: "Pleased to be working with you.",
      },
      {
        speaker: 'rwen',
        rwenLine: "One frame, わたしは…です — and you just turned into someone with a name in this office. That's the doorway.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory (Romaji is fine).',
    prompts: [
      { prompt: 'I am... (just the start: I + topic marker)', correct: ['Watashi wa', 'watashi wa', 'わたしは'] },
      { prompt: 'I am Tanaka.', correct: ['Watashi wa Tanaka desu', 'Watashi wa Tanaka desu.', 'watashi wa tanaka desu', 'わたしは田中です', 'わたしは田中です。'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, say 「わたしは [your name] です」 once. Then swap your given name for your surname only — that's how a Japanese person would do it.",
    rwenSignoff: "One sentence, and you exist in Japanese. また明日 (mata ashita).",
  },

  phase8: {
    scenario: "First-day onboarding at a mid-sized publishing company in Shibuya, Tokyo. Your manager has gathered five team members in a small meeting room and asked you to introduce yourself in Japanese — even just a sentence.",
    rwenRole: "Sato-san — your new section manager (kachō), late 40s, kind but formal, expects 「わたしは…です」 with surname-first naming and a small bow.",
    successCriteria: "User says 「わたしは [name] です」 (NOT bare name, NOT dropping は or です), uses surname-first order if they have a surname they're comfortable sharing, and pronounces です as 'des' (silent u). Bonus: adds 「よろしくお願いします」 at the end if they remember it from Module 1.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
