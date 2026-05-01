import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-name',
  module: 1,
  lesson: 6,
  title: 'Ano ang pangalan mo? — Your name',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Time to introduce yourself. 'Ano ang pangalan mo?' asks the question. 'Ako si...' answers it. That little 'si' is a name-marker — Tagalog sticks it before every personal name.",
    culturalNote: "When Filipinos hear 'Ako si Sarah', the 'si' is doing real grammatical work — it's marking what follows as a person's name. Drop the 'si' and you sound off, like saying 'I am Sarah dog' instead of 'I am Sarah'. The 'si' is the proper-noun handle.",
  },

  chunks: [
    {
      id: 'ano_ang_pangalan_mo',
      target: 'Ano ang pangalan mo?',
      native: "What's your name?",
      literal: 'What the name your(singular)?',
      emoji: '❓',
      phonetic: 'a-NO ang pa-NGA-lan MO',
      audioRef: null,
    },
    {
      id: 'ako_si',
      target: 'Ako si...',
      native: 'I am...',
      literal: 'I name-marker...',
      emoji: '👤',
      phonetic: 'a-KO SI',
      audioRef: null,
    },
    {
      id: 'ikinagagalak_kong_makilala_ka',
      target: 'Ikinagagalak kong makilala ka',
      native: 'Pleased to meet you',
      literal: '(It is) my-pleasure to-meet you',
      emoji: '🤝',
      phonetic: 'i-ki-na-ga-ga-LAK kong ma-ki-LA-la KA',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Si' — the proper-name marker",
    explanation: "Tagalog uses 'si' before any personal name in subject position. 'Ako si Sarah' = 'I am Sarah'. 'Si Mark ang kaibigan ko' = 'Mark is my friend'. No 'si' before names sounds wrong to Filipino ears — like a missing article.",
    examples: [
      { target: 'Ako si Anna', native: 'I am Anna' },
      { target: 'Ako si Mr. Reyes', native: 'I am Mr. Reyes' },
      { target: 'Ako si Lola Inday', native: 'I am Lola Inday' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Ano ang pangalan mo?', right: "What's your name?" },
        { left: 'Ako si...', right: 'I am...' },
        { left: 'Ikinagagalak kong makilala ka', right: 'Pleased to meet you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Introduce yourself: your name is Maya.',
      sentence: 'Ako _____ Maya.',
      options: ['si', 'po', 'ang'],
      correct: 'si',
      context: "Always 'si' before a personal name when introducing yourself.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "What's your name? (casual)",
      correct: ['Ano ang pangalan mo?', 'Ano ang pangalan mo', 'ano ang pangalan mo?', 'ano ang pangalan mo'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: I am Sarah',
      words: ['Sarah', 'Ako', 'si'],
      correct: ['Ako', 'si', 'Sarah'],
      translation: 'I am Sarah',
    },
    {
      type: 'multiple_choice',
      instruction: 'You meet your new tita-in-law for the first time. After your name, what do you add?',
      question: 'Pick the polite follow-up',
      options: [
        { text: 'Ikinagagalak kong makilala ka', correct: true },
        { text: 'Salamat po', correct: false },
        { text: 'Walang anuman', correct: false },
      ],
      explanation: "'Pleased to meet you' is the standard follow-up at first introductions. Salamat is for thanks; walang anuman is a reply to thanks.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (use your own first name where it says NAME)',
      prompt: 'I am NAME',
      correct: ['Ako si NAME', 'ako si NAME'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a Quezon City office on day one. A new colleague — same age as you, friendly — walks up to your desk and extends a hand.",
    lines: [
      {
        speaker: 'npc',
        target: 'Hi! Ano ang pangalan mo?',
        native: "Hi! What's your name?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ako si Alex. Ikinagagalak kong makilala ka.', native: "I'm Alex. Pleased to meet you.", correct: true, feedback: "Textbook intro — name with 'si', then the warm follow-up. He'll like you immediately." },
          { target: 'Alex', native: 'Alex', correct: false, feedback: "Too clipped. Wrap it in 'Ako si Alex' — Tagalog wants the full frame." },
          { target: 'Ako Alex', native: 'I Alex', correct: false, feedback: "You dropped the 'si' — that's the proper-name marker. Always include it." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ikinagagalak ko rin. Ako si Marco.',
        native: "Pleased to meet you too. I'm Marco.",
      },
      {
        speaker: 'rwen',
        rwenLine: "And there's your mirror — 'Ako si Marco'. Same frame, his name. You'll hear that pattern everywhere now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "What's your name? (in Tagalog, casual)",
        correct: ['Ano ang pangalan mo?', 'Ano ang pangalan mo', 'ano ang pangalan mo?', 'ano ang pangalan mo'],
      },
      {
        prompt: 'Pleased to meet you (in Tagalog)',
        correct: ['Ikinagagalak kong makilala ka', 'ikinagagalak kong makilala ka'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Introduce yourself in Tagalog today, even just to your mirror. 'Ako si [your name]'. Feel the 'si' click into place before your name.",
    rwenSignoff: "I'll ask tomorrow how it sounded. Ingat — take care.",
  },

  phase8: {
    scenario: "It's 9am on day one at a Quezon City BPO office. A friendly new colleague — same level as you, around your age — walks up and introduces themselves. You need to introduce yourself back, in Tagalog, with the proper 'si' marker.",
    rwenRole: "Marco — your new desk-mate, late 20s, easygoing, switches comfortably between English and Tagalog; he's quietly impressed when a foreigner introduces themselves with 'Ako si...' instead of just blurting their name.",
    successCriteria: "User introduces themselves with 'Ako si [name]' (the 'si' must be present, NOT 'Ako [name]' or just '[name]'), and adds 'Ikinagagalak kong makilala ka' or a clear pleased-to-meet-you follow-up.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
