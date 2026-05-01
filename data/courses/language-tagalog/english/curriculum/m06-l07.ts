import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-months-seasons',
  module: 6,
  lesson: 7,
  title: 'Mga buwan — Months & seasons',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Twelve months, all Spanish-loan: Enero, Pebrero, Marso, Abril, Mayo, Hunyo, Hulyo, Agosto, Setyembre, Oktubre, Nobyembre, Disyembre. And the Philippines doesn't have four seasons — only two: `tag-init` (hot) and `tag-ulan` (rainy).",
    culturalNote: "Tag-init (March-May) is mango season and Holy Week. Tag-ulan (June-November) brings typhoons. December gets a fake third season — `tag-lamig` (cold) — which is `cold` only by tropical standards (~24°C). Filipinos still wear hoodies and complain happily.",
  },

  chunks: [
    {
      id: 'enero',
      target: 'Enero',
      native: 'January',
      literal: 'January (from Spanish enero)',
      emoji: '🎆',
      phonetic: 'eh-NEH-ro',
      audioRef: null,
    },
    {
      id: 'hulyo',
      target: 'Hulyo',
      native: 'July',
      literal: 'July (from Spanish julio)',
      emoji: '🌧️',
      phonetic: 'HOOL-yo',
      audioRef: null,
    },
    {
      id: 'tag_init',
      target: 'Tag-init',
      native: 'Hot/dry season',
      literal: 'time-of-heat',
      emoji: '☀️',
      phonetic: 'tag-EE-nit',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Months and seasons',
    explanation: 'Months are Spanish-loan: Enero, Pebrero, Marso, Abril, Mayo, Hunyo, Hulyo, Agosto, Setyembre, Oktubre, Nobyembre, Disyembre. Seasons are native compounds with `tag-` (time of): `tag-init` (hot/dry, Mar-May), `tag-ulan` (rainy, Jun-Nov), `tag-lamig` (cool, Dec-Feb). To say `in May` use `sa Mayo`.',
    examples: [
      { target: 'Sa Mayo', native: 'In May' },
      { target: 'Tag-ulan na', native: "It's rainy season already" },
      { target: 'Disyembre ang Pasko', native: 'Christmas is in December' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog month/season to its meaning',
      pairs: [
        { left: 'Enero', right: 'January' },
        { left: 'Hulyo', right: 'July' },
        { left: 'Tag-init', right: 'Hot/dry season' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Mango season is March to May.',
      sentence: 'Sa _____, maraming mangga.',
      options: ['tag-init', 'tag-ulan', 'tag-lamig'],
      correct: 'tag-init',
      context: 'Hot/dry season = mango harvest. Filipino mangoes are world-famous in this period.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'July',
      correct: ['Hulyo', 'hulyo', 'Julyo', 'julyo'],
    },
    {
      type: 'build_sentence',
      instruction: "Drag: 'My birthday is in May'",
      words: ['ko', 'kaarawan', 'Sa', 'Mayo', 'ang'],
      correct: ['Sa', 'Mayo', 'ang', 'kaarawan', 'ko'],
      translation: 'My birthday is in May.',
    },
    {
      type: 'multiple_choice',
      instruction: "It's June and pouring rain. What season is it?",
      question: "Which season?",
      options: [
        { text: 'Tag-ulan', correct: true },
        { text: 'Tag-init', correct: false },
        { text: 'Tag-lamig', correct: false },
      ],
      explanation: 'June starts the rainy season — typhoons usually peak July-October.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'January',
      correct: ['Enero', 'enero'],
    },
  ],

  rwenDialogue: {
    intro: "Your tita is asking when your birthday is so she can plan a small handaan (party).",
    lines: [
      {
        speaker: 'npc',
        target: 'Anak, kailan ang kaarawan mo?',
        native: 'Child, when is your birthday?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sa Mayo po, tita', native: 'In May, auntie (polite)', correct: true, feedback: 'Clean Spanish-loan month + the polite `po`. Tita will plan a handaan.' },
          { target: 'Mahangin', native: 'Windy', correct: false, feedback: "That's weather, not a month." },
          { target: 'Sa tag-init', native: 'In hot season', correct: false, feedback: "True if you're born March-May, but tita asked for the month." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sa Mayo pala — magluluto ako ng pancit!',
        native: "May, then — I'll cook pancit!",
      },
      {
        speaker: 'rwen',
        rwenLine: 'Twelve Spanish-loan months, two native seasons. The Philippines split between European calendar and tropical reality.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'January (in Tagalog)', correct: ['Enero', 'enero'] },
      { prompt: 'Hot/dry season (in Tagalog)', correct: ['Tag-init', 'tag-init', 'taginit', 'Taginit'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Say your birth month in Tagalog out loud once today. `Sa ___ ang kaarawan ko.`',
    rwenSignoff: 'Hanggang bukas — see you in the dry season of your studies.',
  },

  phase8: {
    scenario: "Tita Marissa is on the phone planning her birthday handaan. She wants to know when YOUR birthday is too so the family can plan ahead. She also chats about whether it'll be tag-init or tag-ulan when the party comes around.",
    rwenRole: 'Tita Marissa — warm aunt, ~50yo, big handaan-organiser; chatty about months, seasons, and weather.',
    successCriteria: 'User states their birth month in Tagalog using a Spanish-loan month name (Enero through Disyembre) AND mentions one season (tag-init/tag-ulan/tag-lamig) correctly.',
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
