import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-age',
  module: 3,
  lesson: 2,
  title: 'Quel âge avez-vous? — Your age',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Here's a French quirk that trips every English speaker: in French you don't say 'I am 30' — you say 'I HAVE 30 years'. Age belongs to avoir, not être. Once that lands, you'll never forget it.",
    culturalNote: "English: 'I am 30.' French: 'J'ai 30 ans.' (literally 'I have 30 years'.) French uses avoir for several states English uses 'be' for: age, hunger, thirst, fear. Asking someone's age directly is a bit personal — among new acquaintances, French speakers often skirt it with 'Je suis né(e) en...' (I was born in...) instead.",
  },

  chunks: [
    {
      id: 'quel_age_avez_vous',
      target: 'Quel âge avez-vous?',
      native: 'How old are you? (formal)',
      literal: 'Which age have-you?',
      emoji: '🎂',
      phonetic: 'kel AHZH ah-vay VOO',
      audioRef: null,
    },
    {
      id: 'jai_30_ans',
      target: "J'ai 30 ans",
      native: "I'm 30 (years old)",
      literal: 'I-have 30 years',
      emoji: '🕯️',
      phonetic: 'zhay TRAHNT AHN',
      audioRef: null,
    },
    {
      id: 'je_suis_ne_en',
      target: 'Je suis né(e) en 1995',
      native: 'I was born in 1995',
      literal: 'I am born(-feminine) in 1995',
      emoji: '👶',
      phonetic: 'zhuh swee NAY ahn meel-nuhf-sahn-katr-vahn-KEHNZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Avoir for age (and not être)',
    explanation: "Age uses avoir, the 'have' verb. J'ai = I have, tu as = you have, il/elle a = he/she has. Then a number + 'ans' (years). 'Né(e)' is the past participle of naître (to be born) — male: né, female: née (silent extra -e).",
    examples: [
      { target: "J'ai 25 ans", native: "I'm 25 (literally 'I have 25 years')" },
      { target: 'Elle a 8 ans', native: "She's 8" },
      { target: 'Je suis née en 2000', native: 'I was born in 2000 (female speaker)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Quel âge avez-vous?', right: 'How old are you? (formal)' },
        { left: "J'ai 30 ans", right: "I'm 30" },
        { left: 'Je suis né(e) en 1995', right: 'I was born in 1995' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the answer — remember which verb French uses for age.',
      sentence: '_____ 28 ans.',
      options: ["J'ai", 'Je suis', 'Je vais'],
      correct: "J'ai",
      context: "Age = avoir (have), never être. 'Je suis 28' is the classic English-speaker mistake.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — give your age as 40',
      prompt: "I'm 40 years old",
      correct: ["J'ai 40 ans", "j'ai 40 ans", 'Jai 40 ans'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask a new colleague their age politely — put the words in order.',
      words: ['âge', 'Quel', 'avez-vous?'],
      correct: ['Quel', 'âge', 'avez-vous?'],
      translation: 'How old are you? (formal)',
    },
    {
      type: 'multiple_choice',
      instruction: "A French speaker asks you 'Quel âge avez-vous?' You're 35.",
      question: 'Which is the correct reply?',
      options: [
        { text: "J'ai 35 ans", correct: true },
        { text: 'Je suis 35', correct: false },
        { text: 'Je suis 35 ans', correct: false },
      ],
      explanation: "Age uses avoir + 'ans'. 'Je suis 35' is a literal-from-English error every learner makes once. Don't be that learner.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — sidestep the age question with your birth year (female speaker, 1990)',
      prompt: 'I was born in 1990 (female speaker)',
      correct: ['Je suis née en 1990', 'je suis née en 1990'],
    },
  ],

  rwenDialogue: {
    intro: "You've just bought a glass of wine in a Bordeaux bar. The owner, Madame Girard, leans on the counter, curious about you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Vous êtes en voyage? Si je peux me permettre — quel âge avez-vous?',
        native: 'On a trip? If I may ask — how old are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "J'ai 32 ans", native: "I'm 32", correct: true, feedback: 'Clean, correct, no English slip-up — exactly what she expects to hear.' },
          { target: 'Je suis 32', native: "I am 32 (English-style)", correct: false, feedback: "Classic anglophone error — French uses avoir for age, never être. Try 'J'ai 32 ans'." },
          { target: 'Je suis né en 32', native: 'I was born in 32 (the year 32?!)', correct: false, feedback: 'Almost — but you need the full year. "Je suis né(e) en 1992" works. "En 32" sounds like the year 32 AD.' },
        ],
      },
      {
        speaker: 'npc',
        target: "Trente-deux! Vous êtes jeune. Profitez bien de Bordeaux.",
        native: 'Thirty-two! You\'re young. Enjoy Bordeaux.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice she heard your number and reacted to it. The avoir habit is locking in. J'ai... ans. Always.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "How old are you? (formal — in French)",
        correct: ['Quel âge avez-vous?', 'Quel âge avez-vous', 'quel âge avez-vous?'],
      },
      {
        prompt: "I'm 25 years old (in French)",
        correct: ["J'ai 25 ans", "j'ai 25 ans"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your age out loud in French today — 'J'ai ___ ans.' Once before bed. Replace one English 'I am' habit with the French 'J'ai'.",
    rwenSignoff: "L'âge en français, c'est de l'avoir. À demain.",
  },

  phase8: {
    scenario: "Saturday night at a small Paris dinner party. Your host introduces you around the table; an older guest, Monsieur Bernard, takes a polite interest and gently asks your age — French dinner-party small talk.",
    rwenRole: "Monsieur Bernard — a retired architect, ~70, gracious and a touch old-school; he uses vous, asks 'Quel âge avez-vous?' delicately, and follows up with 'Et vous êtes né(e) où?'. He notices warmly when guests handle the avoir-for-age move correctly.",
    successCriteria: "User answers 'Quel âge avez-vous?' with 'J'ai [number] ans' (NOT 'Je suis [number]'). User can also produce 'Je suis né(e) en [year]' if asked. Female speakers use 'née', male speakers use 'né'. User does NOT confuse être and avoir on age — that's the whole game.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
