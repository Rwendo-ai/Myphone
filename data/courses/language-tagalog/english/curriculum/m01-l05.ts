import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-walang-anuman',
  module: 1,
  lesson: 5,
  title: "Walang anuman — You're welcome",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "When someone says 'salamat', you don't just nod. You reply. 'Walang anuman' — literally 'it's nothing' — completes the loop. Gratitude given, gratitude received.",
    culturalNote: "Filipinos almost never let a 'salamat' hang in silence. Replying with 'walang anuman' (or the formal 'wala pong anuman') is reflex. And 'pasensya na' — 'sorry' / 'no worries' — is just as automatic. These are the lubricants of every Filipino interaction.",
  },

  chunks: [
    {
      id: 'walang_anuman',
      target: 'Walang anuman',
      native: "You're welcome",
      literal: '(There is) nothing',
      emoji: '🤲',
      phonetic: 'WA-lang a-nu-MAN',
      audioRef: null,
    },
    {
      id: 'wala_pong_anuman',
      target: 'Wala pong anuman',
      native: "You're welcome (formal)",
      literal: '(There is) no respect-marker nothing',
      emoji: '🙏',
      phonetic: 'WA-la PONG a-nu-MAN',
      audioRef: null,
    },
    {
      id: 'pasensya_na',
      target: 'Pasensya na',
      native: "Sorry / No worries / It's okay",
      literal: 'Patience already',
      emoji: '😌',
      phonetic: 'pa-SEN-sya NA',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Reciprocal politeness',
    explanation: "'Walang anuman' is the standard reply to 'salamat'. To put 'po' in: it slides BETWEEN 'wala' and 'anuman' → 'Wala pong anuman'. ('Po' likes to come early in this phrase, not at the end.) 'Pasensya na' covers both 'sorry' and a soft 'no worries' — context tells which.",
    examples: [
      { target: 'Salamat. — Walang anuman.', native: 'Thanks. — You\'re welcome.' },
      { target: 'Salamat po. — Wala pong anuman.', native: "Thanks (respectful). — You're welcome (respectful)." },
      { target: 'Pasensya na po', native: 'My apologies (respectful) / No worries (respectful)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Walang anuman', right: "You're welcome" },
        { left: 'Wala pong anuman', right: "You're welcome (formal)" },
        { left: 'Pasensya na', right: "Sorry / No worries" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "An elder says 'Salamat po' to you. You reply respectfully.",
      sentence: 'Wala _____ anuman.',
      options: ['pong', 'po', 'naman'],
      correct: 'pong',
      context: "Po slots between 'wala' and 'anuman' — and ng links them, giving 'pong'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (respectful)',
      prompt: "You're welcome (respectful)",
      correct: ['Wala pong anuman', 'wala pong anuman'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the formal 'you're welcome'",
      words: ['anuman', 'pong', 'Wala'],
      correct: ['Wala', 'pong', 'anuman'],
      translation: "You're welcome (respectful)",
    },
    {
      type: 'multiple_choice',
      instruction: "You're late to meet your tita. You arrive flustered. What do you say first?",
      question: 'Pick the right phrase',
      options: [
        { text: 'Pasensya na po', correct: true },
        { text: 'Walang anuman', correct: false },
        { text: 'Salamat po', correct: false },
      ],
      explanation: "'Pasensya na' covers 'sorry' — and to your tita, you add 'po'. 'Walang anuman' is a REPLY to thanks, not an apology.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "You're welcome (casual)",
      correct: ['Walang anuman', 'walang anuman'],
    },
  ],

  rwenDialogue: {
    intro: "You're leaving a Davao karinderya. The lola owner refilled your rice for free. You thank her — and now her reply is coming. Then she'll say something, and you need to handle it gracefully.",
    lines: [
      {
        speaker: 'user',
        target: 'Maraming salamat po',
        native: 'Thank you so much (respectful)',
      },
      {
        speaker: 'npc',
        target: 'Wala pong anuman, anak. Pasensya na po sa init.',
        native: "You're welcome, child. Sorry it's hot in here.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Walang anuman po', native: "It's nothing (respectful)", correct: true, feedback: "Great — you bounced 'pasensya na' back with a gentle 'no worries'. Filipino reflex achieved." },
          { target: 'Salamat po', native: 'Thanks (respectful)', correct: false, feedback: 'You already thanked her — now she apologised. Reply to the apology, not with another thanks.' },
          { target: 'Mabuti naman', native: "I'm fine", correct: false, feedback: "She apologised about the heat — that needs a 'no worries', not a 'how are you' answer." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Beautiful loop — salamat, walang anuman, pasensya na, walang anuman. That's the rhythm of Filipino courtesy.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "You're welcome (respectful, in Tagalog)",
        correct: ['Wala pong anuman', 'wala pong anuman'],
      },
      {
        prompt: "Sorry / No worries (in Tagalog)",
        correct: ['Pasensya na', 'pasensya na'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Reply gracefully today. If anyone thanks you, even in English, answer with 'Walang anuman' under your breath. Train the reflex.",
    rwenSignoff: "I'll ask tomorrow how it felt. Sige, ingat ka — okay, take care.",
  },

  phase8: {
    scenario: "You're in a small Davao karinderya at lunchtime. The lola owner served extra rice and apologised that the electric fan is broken in the heat. You need to thank her, then receive her welcome and her apology — and bounce both back gracefully.",
    rwenRole: "Lola Pacing — karinderya owner, 70s, calls every customer 'anak' (child); she's used to OFW returnees who've forgotten their Tagalog and adores foreigners who try.",
    successCriteria: "User thanks her with 'Maraming salamat po' (or similar with po), and when she apologises about the heat with 'pasensya na po', user replies with 'Walang anuman po' or 'Wala pong anuman' (NOT another 'salamat'). The reciprocal loop is closed.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
