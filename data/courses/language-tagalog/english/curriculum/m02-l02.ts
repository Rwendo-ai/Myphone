import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-hindi-ko',
  module: 2,
  lesson: 2,
  title: "Hindi ko maintindihan — I don't understand",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "A jeepney conductor in Cubao just rattled off three stops in pure Tagalog and looked at you for an answer. You have one job: buy time. 'Hindi ko maintindihan' — I don't understand — is the single phrase that saves every conversation.",
    culturalNote: "Filipinos almost never get annoyed when a foreigner admits they didn't catch something — they slow down, smile, and try again. The trap is silence. Saying 'hindi ko maintindihan' is way more polite than nodding and pretending.",
  },

  chunks: [
    {
      id: 'hindi_ko_maintindihan',
      target: 'Hindi ko maintindihan',
      native: "I don't understand",
      literal: 'Not by-me understandable',
      emoji: 'CONFUSED',
      phonetic: 'hin-DEE ko ma-in-tin-DEE-han',
      audioRef: null,
    },
    {
      id: 'pakidahan_dahan',
      target: 'Pakidahan-dahan po',
      native: 'Slowly please',
      literal: 'Please-slowly + respect',
      emoji: 'TURTLE',
      phonetic: 'pa-ki-DA-han DA-han POH',
      audioRef: null,
    },
    {
      id: 'pakiulit',
      target: 'Pakiulit po',
      native: 'Repeat please',
      literal: 'Please-repeat + respect',
      emoji: 'REPEAT',
      phonetic: 'pa-ki-OO-lit POH',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Negation 'hindi' + the polite 'paki-' prefix",
    explanation: "'Hindi' is the universal 'not / no' — slap it before any verb to negate. The magic prefix this module is 'paki-': stick it on a verb stem and the verb becomes a polite request. Pakidahan-dahan = 'please-slow-down'. Pakiulit = 'please-repeat'.",
    examples: [
      { target: 'Hindi ko alam', native: "I don't know" },
      { target: 'Pakikuha mo nga', native: 'Please get it for me' },
      { target: 'Pakidahan-dahan', native: 'Please slow down' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Hindi ko maintindihan', right: "I don't understand" },
        { left: 'Pakidahan-dahan po', right: 'Slowly please' },
        { left: 'Pakiulit po', right: 'Repeat please' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A jeepney conductor speaks too fast. What do you say first?',
      sentence: '_____ ko maintindihan.',
      options: ['Hindi', 'Pakiulit', 'Paumanhin'],
      correct: 'Hindi',
      context: "'Hindi' is the negation that makes the verb mean 'don't'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (with respect)',
      prompt: 'Slowly please (formal)',
      correct: ['Pakidahan-dahan po', 'pakidahan-dahan po', 'Pakidahan dahan po', 'pakidahan dahan po'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the phrase: 'I don't understand'",
      words: ['maintindihan', 'ko', 'Hindi'],
      correct: ['Hindi', 'ko', 'maintindihan'],
      translation: "I don't understand",
    },
    {
      type: 'multiple_choice',
      instruction: "The vendor said something twice and you still missed it. What's the best move?",
      question: 'Which phrase asks for one more try, politely?',
      options: [
        { text: 'Pakiulit po', correct: true },
        { text: 'Hindi ko maintindihan', correct: false },
        { text: 'Pasensya na', correct: false },
      ],
      explanation: "'Pakiulit po' is a direct, polite 'please repeat'. 'Hindi ko maintindihan' explains the problem; 'pakiulit' actually asks for the fix.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I don't understand",
      correct: ['Hindi ko maintindihan', 'hindi ko maintindihan'],
    },
  ],

  rwenDialogue: {
    intro: "You're on a jeepney heading from Cubao to Crossing. The kabit conductor leans in and asks something rapid-fire about your fare. You catch maybe one word.",
    lines: [
      {
        speaker: 'npc',
        target: 'Saan ka bababa, dalawa ba kayo?',
        native: 'Where are you getting off, are there two of you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paumanhin po, hindi ko maintindihan. Pakidahan-dahan po', native: "Sorry sir, I didn't understand. Please slow down", correct: true, feedback: "Beautiful — apology, the problem, then the request to fix it. That's the full move." },
          { target: 'Oo', native: 'Yes', correct: false, feedback: "Don't fake-yes. He'll charge you for two and let you off at the wrong stop." },
          { target: 'Salamat', native: 'Thank you', correct: false, feedback: 'Polite, but doesn\'t answer or buy you time.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah sige, dahan-dahan: saan... ka... bababa?',
        native: 'Ah okay, slowly: where... are you... getting off?',
      },
      {
        speaker: 'rwen',
        rwenLine: "See? He didn't sigh, he didn't switch to bad English — he just slowed down. That's exactly what these phrases unlock.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I don't understand",
        correct: ['Hindi ko maintindihan', 'hindi ko maintindihan'],
      },
      {
        prompt: 'Repeat please (formal)',
        correct: ['Pakiulit po', 'pakiulit po'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time anyone speaks too fast — in any language — say 'Pakidahan-dahan po' to yourself. Train the reflex. The phrase has to live on the tip of your tongue, not in your notes.",
    rwenSignoff: "Tara — let's keep going. Bukas ulit — until tomorrow.",
  },

  phase8: {
    scenario: "It's rush hour and you're on a jeepney from Cubao to Crossing. The conductor leans in and asks you something fast about your fare and stop. You only caught one word.",
    rwenRole: "Mang Rey — the jeepney conductor, late 40s, has been driving the same route 20 years; impatient with mumblers but extremely kind to anyone who admits they didn't catch it.",
    successCriteria: "User combines at least TWO of the chunks: a 'hindi ko maintindihan' to flag the problem AND a 'pakidahan-dahan po' or 'pakiulit po' to ask for the fix. Just saying 'opo' is failure — Rwen should drop them at the wrong stop.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
