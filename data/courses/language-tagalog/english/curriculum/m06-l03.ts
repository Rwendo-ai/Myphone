import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03-spanish-numbers',
  module: 6,
  lesson: 3,
  title: 'Uno, dos, tres — Spanish numbers',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Now the second number system. Spain ruled the Philippines for 333 years, and the language never let go of Spanish numbers — uno, dos, tres. Filipinos use these for time, money, and age. Today we meet them.",
    culturalNote: "When Filipinos say `alas dos ng hapon` (2 PM) or `singkwenta pesos` (50 pesos), they're speaking Spanish that became Tagalog. Spelled phonetically (singko, syete, dyes) but pure Madrid underneath. Hear the layer — that's the country's history humming under the language.",
  },

  chunks: [
    {
      id: 'uno',
      target: 'Uno',
      native: 'One (Spanish-loan)',
      literal: 'one',
      emoji: '1️⃣',
      phonetic: 'OO-no',
      audioRef: null,
    },
    {
      id: 'singko',
      target: 'Singko',
      native: 'Five (Spanish-loan)',
      literal: 'five',
      emoji: '5️⃣',
      phonetic: 'SING-ko',
      audioRef: null,
    },
    {
      id: 'dyes',
      target: 'Dyes',
      native: 'Ten (Spanish-loan)',
      literal: 'ten',
      emoji: '🔟',
      phonetic: 'DEE-yes',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'When to use Spanish-loan numbers',
    explanation: 'Use Spanish-loan numbers (uno, dos, tres, kwatro, singko, sais, syete, otso, nuwebe, dyes) for THREE things: telling TIME (`alas tres` = 3 o\'clock), counting MONEY (`singko pesos` = 5 pesos), and stating AGE in some contexts. Use NATIVE numbers (isa, dalawa, tatlo) for everything else.',
    examples: [
      { target: 'Alas dyes ng umaga', native: '10 AM (time → Spanish)' },
      { target: 'Singkwenta pesos', native: '50 pesos (money → Spanish)' },
      { target: 'Tatlong libro', native: 'Three books (things → native)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Spanish-loan number to its meaning',
      pairs: [
        { left: 'Uno', right: 'One' },
        { left: 'Singko', right: 'Five' },
        { left: 'Dyes', right: 'Ten' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "It's 5 o'clock. Which number do you use?",
      sentence: 'Alas _____ na.',
      options: ['singko', 'lima', 'sampu'],
      correct: 'singko',
      context: 'For TIME, always Spanish-loan. `Lima` would never be used for hours — even though it also means five.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (Spanish-loan number for ten)',
      prompt: 'Ten (used for time and money)',
      correct: ['Dyes', 'dyes', 'diyes', 'Diyes'],
    },
    {
      type: 'build_sentence',
      instruction: "Drag the words: 'Five pesos, please'",
      words: ['pesos', 'po', 'singko'],
      correct: ['Singko', 'pesos', 'po'],
      translation: 'Five pesos, please.',
    },
    {
      type: 'multiple_choice',
      instruction: "You're paying for three pieces of pandesal at the bakery.",
      question: "Which number is correct in 'three pandesal'?",
      options: [
        { text: 'tatlong pandesal (native, for counting things)', correct: true },
        { text: 'tres pandesal (Spanish, sounds wrong here)', correct: false },
        { text: 'kwatrong pandesal (means four anyway)', correct: false },
      ],
      explanation: "Counting BREAD (a thing) → native number. If the question were the PRICE (`tres pesos`), then Spanish.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (Spanish-loan)',
      prompt: 'One (Spanish-loan)',
      correct: ['Uno', 'uno'],
    },
  ],

  rwenDialogue: {
    intro: 'Your friend asks you what time the movie starts.',
    lines: [
      {
        speaker: 'npc',
        target: 'Anong oras ang sine?',
        native: 'What time is the movie?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Alas dyes ng gabi', native: '10 PM (Spanish-loan)', correct: true, feedback: 'Right — for time, always Spanish-loan numbers. `Sampung gabi` would sound bizarre.' },
          { target: 'Sampu ng gabi', native: '10 (native) of evening', correct: false, feedback: "Native number for time? No Filipino says this. Always `alas dyes`." },
          { target: 'Uno ng hapon', native: '1 PM', correct: false, feedback: 'Wrong number — uno is one, not ten. The system is right though.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige, magkita tayo.',
        native: 'Okay, see you there.',
      },
      {
        speaker: 'rwen',
        rwenLine: 'Two systems, one fluency. Time = Spanish, things = native. The split will become second nature.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'One (Spanish-loan, used for time/money)', correct: ['Uno', 'uno'] },
      { prompt: 'Ten (Spanish-loan)', correct: ['Dyes', 'dyes', 'diyes', 'Diyes'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Notice once today when a Spanish-loan number would feel right vs a native one. Bonus: say `alas singko` (5 o\'clock) out loud.',
    rwenSignoff: 'Galing — see you tomorrow.',
  },

  phase8: {
    scenario: "Rwen is quizzing you on the split. Various everyday situations come up — buying mangoes, asking the time, paying jeepney fare, counting people in your family. For each one you must choose: native or Spanish-loan number?",
    rwenRole: 'Rwen as gentle quizmaster, asking small situational questions like `Five mangoes — which lima?` and `2 PM — which dos?`. Encouraging, not strict.',
    successCriteria: 'User correctly applies the split: native (isa/dalawa/lima) for counting things, Spanish-loan (uno/dos/singko) for time and money, in at least 3 of 4 prompts.',
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
