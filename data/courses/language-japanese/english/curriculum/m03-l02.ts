import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-shigoto',
  module: 3,
  lesson: 2,
  title: 'Shigoto — My Job',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Japan, what you do is part of how people place you. 「お仕事は？」 — what's your work? — comes early. Not because they're nosy. Because work is identity. We're going to give you a clean answer for it.",
    culturalNote: "Japanese business cards (meishi) are a small ritual — you receive them with two hands, study them, never shove them in your back pocket. The card says your company FIRST, then your role, then your name. That order tells you everything about how Japan sees professional identity.",
  },

  chunks: [
    {
      id: 'shigoto_wa',
      target: 'お仕事は？ (O-shigoto wa?)',
      native: 'What do you do? (lit. "Your work...?")',
      literal: 'honorific-お + work + は (topic) — trailing off politely',
      emoji: '💼',
      phonetic: 'o-shi-GO-to wa',
      audioRef: null,
    },
    {
      id: 'engineer_desu',
      target: 'エンジニアです (Enjinia desu)',
      native: 'I am an engineer',
      literal: 'engineer + です',
      emoji: '👩‍💻',
      phonetic: 'en-JI-ni-a des',
      audioRef: null,
    },
    {
      id: 'kaishain_desu',
      target: '会社員です (Kaishain desu)',
      native: 'I am a company employee / I work for a company',
      literal: 'company-person + です — the all-purpose answer',
      emoji: '🏢',
      phonetic: 'KAI-sha-in des',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Job + です — naming what you do',
    explanation: "In Japanese you state your job as a noun + です — no verb 'work' needed in the answer. 学生です (I'm a student). 先生です (I'm a teacher). 会社員です (I'm a company employee). 「会社員」 is a soft, common, default — useful when you don't want to spell out your role.",
    examples: [
      { target: '学生です。', native: 'I am a student. (gakusei desu)' },
      { target: '先生です。', native: 'I am a teacher. (sensei desu)' },
      { target: '会社員です。', native: 'I work for a company. (kaishain desu)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'お仕事は？', right: 'What do you do?' },
        { left: 'エンジニアです', right: 'I am an engineer' },
        { left: '会社員です', right: 'I work for a company' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say "I am a teacher"',
      sentence: 'わたしは先生___。',
      options: ['です', 'は', 'を'],
      correct: 'です',
      context: 'です closes the sentence politely.',
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: 'What do you do? (the polite trailing question)',
      correct: ['O-shigoto wa?', 'Oshigoto wa?', 'oshigoto wa', 'oshigoto wa?', 'お仕事は？', 'お仕事は'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone hands you their meishi (business card). What's the proper way to receive it?",
      question: 'Choose the correct etiquette',
      options: [
        { text: 'With two hands, look at it, hold it, do not pocket it during the conversation', correct: true },
        { text: 'Take it with one hand and slip it straight into your wallet', correct: false },
        { text: 'Wave it back politely and refuse — too formal', correct: false },
      ],
      explanation: "Two hands, look, acknowledge, keep it visible on the table during the meeting. Treating the card like the person is treating the person like the person.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am an engineer"',
      words: ['です', 'は', 'わたし', 'エンジニア'],
      correct: ['わたし', 'は', 'エンジニア', 'です'],
      translation: 'I am an engineer.',
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: 'I work for a company. (use 会社員 / kaishain)',
      correct: ['Watashi wa kaishain desu', 'Watashi wa kaishain desu.', 'kaishain desu', 'Kaishain desu.', 'わたしは会社員です', '会社員です'],
    },
  ],

  rwenDialogue: {
    intro: "A reception at a tech conference in Tokyo. You've just exchanged business cards with someone from another company.",
    lines: [
      {
        speaker: 'npc',
        target: 'お仕事は何ですか？',
        native: "What do you do for work?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'エンジニアです。', native: 'I am an engineer.', correct: true, feedback: "Clean. Job + です is all the answer needed at a conference." },
          { target: 'はい。', native: 'Yes.', correct: false, feedback: "They asked WHAT, not yes/no. Slot a job into [job] です — even 「会社員です」 works." },
          { target: 'エンジニア。', native: 'Engineer.', correct: false, feedback: "Add です. In a polite work setting, 「エンジニアです」 lands much better than the bare noun." },
        ],
      },
      {
        speaker: 'npc',
        target: 'そうですか。よろしくお願いします。',
        native: "I see. Pleased to meet you.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Job + です. That's the formula. Use 会社員 when you want a soft answer, your real role when you want to be specific. Either lands.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am a company employee.', correct: ['Kaishain desu', 'Kaishain desu.', 'kaishain desu', 'Watashi wa kaishain desu', '会社員です', 'わたしは会社員です'] },
      { prompt: 'What do you do? (polite trailing form)', correct: ['O-shigoto wa?', 'Oshigoto wa?', 'oshigoto wa', 'お仕事は？', 'お仕事は'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud: 「わたしは [your job] です」. If you're between jobs, try 「会社員です」 or 「学生です」 — both are honest and complete.",
    rwenSignoff: "What you do is part of who you are — and now you can say it. また明日.",
  },

  phase8: {
    scenario: "Networking drinks at a fintech conference in Roppongi, Tokyo. You and a stranger have just bowed and exchanged meishi. They glance at your card and ask what you actually do day-to-day.",
    rwenRole: "Yamada-san — sales lead at a partner firm, late 30s, professional but warming up over a beer, expects job + です as the core, with optional company name added.",
    successCriteria: "User answers 「[job] です」 (NOT bare noun, NOT 'I work' as a verb), pronounces です as 'des', and uses 会社員 if they want a generic answer or a specific role like エンジニア / 学生 / 先生 if appropriate. Receives meishi with both hands without pocketing it.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
