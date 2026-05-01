import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-months-seasons',
  module: 6,
  lesson: 7,
  title: 'Mois et Saisons — Months & Seasons',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "France has four real seasons that the country actually lives by — there's a spring you can feel in the markets when the asparagus arrives, an automne where every café terrace puts out blankets. Today: the twelve months and the four seasons, plus the small word that connects them — 'en' or 'au'.",
    culturalNote: "Like days, French months are NEVER capitalised — 'janvier', 'février', not 'Janvier'. To say 'in (a month)' you use 'en': 'en janvier'. Seasons mostly use 'en' too — 'en été', 'en automne', 'en hiver' — EXCEPT spring, which is the lone rebel: 'au printemps'. Yes, just spring. French likes its little exceptions.",
  },

  chunks: [
    {
      id: 'janvier_fevrier_mars',
      target: 'janvier, février, mars',
      native: 'January, February, March',
      literal: '(month names — never capitalised)',
      emoji: '❄️',
      phonetic: 'zhahn-vee-AY, fay-vree-AY, marss',
      audioRef: null,
    },
    {
      id: 'en_janvier',
      target: 'en janvier',
      native: 'in January',
      literal: 'in January',
      emoji: '📅',
      phonetic: 'ahn zhahn-vee-AY',
      audioRef: null,
    },
    {
      id: 'au_printemps',
      target: 'au printemps, en été, en automne, en hiver',
      native: 'in spring, summer, autumn, winter',
      literal: 'AT-the spring, IN summer, IN autumn, IN winter',
      emoji: '🌸',
      phonetic: 'oh prahn-TAHN, ahn nay-TAY, ahn no-TUNN, ahn nee-VAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'en + month/season — except au printemps',
    explanation: "To say 'in (a month)' or 'in (a season)', French uses 'en'. 'En janvier', 'en mars', 'en été', 'en hiver'. ONE exception: spring — 'au printemps'. That's it. Memorise the exception and the rest follows.",
    examples: [
      { target: 'Mon anniversaire est en mai', native: 'My birthday is in May' },
      { target: 'Il pleut beaucoup en automne', native: 'It rains a lot in autumn' },
      { target: 'Au printemps, les fleurs reviennent', native: 'In spring, the flowers come back' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French month or season to its English equivalent',
      pairs: [
        { left: 'mai', right: 'May' },
        { left: 'août', right: 'August' },
        { left: 'décembre', right: 'December' },
        { left: 'l\'été', right: 'summer' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "In spring, I run in the park."',
      sentence: '_____ printemps, je cours dans le parc.',
      options: ['Au', 'En', 'Le'],
      correct: 'Au',
      context: 'Spring is the one rebel — au printemps. Every other season takes "en".',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'My birthday is in July',
      correct: ['Mon anniversaire est en juillet', 'mon anniversaire est en juillet'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "In summer, it\'s hot in Paris"',
      words: ['En', 'été,', 'il', 'fait', 'chaud', 'à', 'Paris'],
      correct: ['En', 'été,', 'il', 'fait', 'chaud', 'à', 'Paris'],
      translation: 'In summer, it\'s hot in Paris.',
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'in winter' in French?",
      question: 'Choose the correct form',
      options: [
        { text: 'en hiver', correct: true },
        { text: 'au hiver', correct: false },
        { text: 'à hiver', correct: false },
      ],
      explanation: "Winter, summer, autumn all take 'en'. Only spring breaks the pattern with 'au printemps'.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'In spring (use the right preposition!)',
      correct: ['au printemps', 'Au printemps'],
    },
  ],

  rwenDialogue: {
    intro: "You meet a French neighbour at a café. He asks when your birthday is — and which season is your favourite. Your birthday is in October, and you love spring.",
    lines: [
      {
        speaker: 'npc',
        target: 'Et ton anniversaire, c\'est quand?',
        native: 'And your birthday, when is it?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'C\'est en octobre', native: 'It\'s in October', correct: true, feedback: '"En" with months — perfect. Lowercase octobre too, exactly right.' },
          { target: 'C\'est au octobre', native: '(wrong preposition)', correct: false, feedback: "Months take 'en', not 'au'. 'En octobre'." },
          { target: 'C\'est en Octobre', native: '(capital O)', correct: false, feedback: "Months are never capitalised mid-sentence — 'octobre'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Et ta saison préférée?',
        native: 'And your favourite season?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'J\'adore le printemps', native: 'I love spring', correct: true, feedback: 'Yes — and notice "le printemps" with the article when it\'s the subject of love.' },
          { target: 'J\'adore au printemps', native: '(wrong: "au" only for "in spring")', correct: false, feedback: "'Au printemps' = IN spring. To say you love spring itself, drop the 'au': 'le printemps'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Two French sentences about your life — your birthday and your favourite season. The calendar is now yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'in January (in French)', correct: ['en janvier', 'En janvier'] },
      { prompt: 'in spring (mind the exception!)', correct: ['au printemps', 'Au printemps'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell yourself, in French and out loud: which month it is now ('on est en ___'), and which season ('on est en ___ / au printemps'). Twenty seconds. Calendar in your mouth.",
    rwenSignoff: "À demain — we walk into the market and learn 'C'est combien?'.",
  },

  phase8: {
    scenario: "You're at a French dinner party. The host asks about your birthday, your favourite season, and when you usually take holidays. Each answer requires a month or season with the right preposition (en + month, en + summer/autumn/winter, OR au + printemps).",
    rwenRole: "Madame Lefèvre — host, 60s, warm and curious about your life. She asks follow-ups and gently rephrases if you say 'au janvier' or capitalise a month.",
    successCriteria: "User produces correctly: at least one 'en + month' (e.g., 'en octobre'), at least one 'en + season' (été/automne/hiver), AND uses 'au printemps' if spring comes up. No capitalised months. No 'au' before months.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
