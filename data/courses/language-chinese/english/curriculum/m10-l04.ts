import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04-sick',
  module: 10,
  lesson: 4,
  title: "Wǒ bù shūfu — I'm Not Well",
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "When your body breaks in a foreign country, you need fewer words than you think. 'Wǒ bù shūfu' — three syllables that pharmacists, taxi drivers, and friends across all of China will instantly understand. Today: the body's distress signal.",
    culturalNote: "'Téng' (疼) — to hurt — is one of Mandarin's most productive patterns. Just say [body part] + téng. Tóu téng = head hurt = headache. Dùzi téng = stomach hurt. No 'I have a' or 'pain' — just the body part and the verb. Brutal efficiency.",
  },

  chunks: [
    {
      id: 'wo_bu_shufu',
      target: 'Wǒ bù shūfu',
      native: "I don't feel well",
      literal: '(我不舒服) lit: I-not-comfortable',
      emoji: '🤒',
      phonetic: 'WAW boo SHOO-foo',
      audioRef: null,
    },
    {
      id: 'wo_tou_teng',
      target: 'Wǒ tóu téng',
      native: 'I have a headache',
      literal: '(我头疼) lit: I-head-hurt',
      emoji: '🤕',
      phonetic: 'WAW toe TUNG',
      audioRef: null,
    },
    {
      id: 'wo_yao_kan_yisheng',
      target: 'Wǒ yào kàn yīshēng',
      native: 'I need to see a doctor',
      literal: '(我要看医生) lit: I-want-look-doctor',
      emoji: '🏥',
      phonetic: 'WAW yao KAHN ee-SHUNG',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Body part] + téng (疼)',
    explanation: 'To say a body part hurts, just stick "téng" after it. No verb conjugation, no "I have a [pain]". Productive across the whole body — once you know téng, you know all aches.',
    examples: [
      { target: 'Tóu téng', native: 'Head hurts (headache)' },
      { target: 'Dùzi téng', native: 'Stomach hurts' },
      { target: 'Yá téng', native: 'Tooth hurts' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to its meaning',
      pairs: [
        { left: 'Wǒ bù shūfu', right: "I don't feel well" },
        { left: 'Wǒ tóu téng', right: 'I have a headache' },
        { left: 'Wǒ yào kàn yīshēng', right: 'I need to see a doctor' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "My stomach hurts."',
      sentence: 'Wǒ dùzi _____.',
      options: ['téng', 'shūfu', 'kàn'],
      correct: 'téng',
      context: '"Téng" (疼) is the universal "hurts" verb — works for any body part.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I don't feel well",
      correct: ['Wǒ bù shūfu', 'Wo bu shufu', 'wo bu shufu', '我不舒服'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "I need to see a doctor."',
      words: ['yīshēng', 'Wǒ', 'kàn', 'yào'],
      correct: ['Wǒ', 'yào', 'kàn', 'yīshēng'],
      translation: 'I need to see a doctor',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I have a headache',
      correct: ['Wǒ tóu téng', 'Wo tou teng', 'wo tou teng', '我头疼'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Why does "kàn" (look) mean "see (a doctor)"?',
      question: 'Pick the right answer.',
      options: [
        { text: 'Mandarin uses "look at a doctor" idiomatically — same as English "see a doctor"', correct: true },
        { text: '"Kàn" actually means "consult"', correct: false },
        { text: 'It\'s a typo for "kàng"', correct: false },
      ],
      explanation: 'Both Mandarin and English happen to use a sight verb for medical visits — kàn yīshēng / see a doctor.',
    },
  ],

  rwenDialogue: {
    intro: "You wake up in your Shanghai hotel. Pounding head, stomach off. Reception calls to check on breakfast. You answer.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nín hǎo, zǎocān...',
        native: 'Hello, breakfast is...',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ bù shūfu. Wǒ yào kàn yīshēng.', native: "I don't feel well. I need a doctor.", correct: true, feedback: 'Two clear sentences — they will sort the rest. Exactly the language a hotel needs.' },
          { target: 'Wǒ hěn gāoxìng', native: "I'm happy", correct: false, feedback: 'Wrong moment.' },
          { target: 'Bié dānxīn', native: "Don't worry", correct: false, feedback: "You ARE the one in need here — flag it." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, wǒ jiào yīshēng',
        native: "OK, I'll call a doctor",
      },
      {
        speaker: 'rwen',
        rwenLine: "Three syllables — 'bù shūfu' — and the world mobilises around you. You just survived sick-in-Shanghai with seven words.",
        rwenAnimation: 'reassuring',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I don't feel well",
        correct: ['Wǒ bù shūfu', 'Wo bu shufu', 'wo bu shufu', '我不舒服'],
      },
      {
        prompt: 'I have a headache',
        correct: ['Wǒ tóu téng', 'Wo tou teng', 'wo tou teng', '我头疼'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Map your body to téng. Tóu téng. Dùzi téng. Yá téng. Whisper them through — the day you actually need them, the words will be there.",
    rwenSignoff: "I hope you never need these words. But knowing them is its own kind of safety. See you tomorrow.",
  },

  phase8: {
    scenario: "Day three of your Shanghai trip. You've eaten something off — head pounding, stomach turning. The hotel sends you to a nearby clinic. The receptionist greets you in Chinese.",
    rwenRole: "Clinic receptionist in Shanghai, professional, kind, speaks no English. Will fill out a form based on what you say.",
    successCriteria: "User uses 'Wǒ bù shūfu', specifies what hurts using [body part] + téng, and uses 'Wǒ yào kàn yīshēng' to request a doctor.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
