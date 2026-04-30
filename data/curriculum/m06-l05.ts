import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-months',
  module: 6,
  lesson: 5,
  title: 'Months & Seasons — Mwedzi & Nguva',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Shona month names are beautiful — many describe nature, weather, or activities of that time of year. They reflect the seasons of Zimbabwe, not England. January is Ndira — named after a plant that blooms at the new year.",
    culturalNote: "Zimbabwe has two main seasons: the dry season (May–October) and the rainy season/summer (November–April). Many Shona month names reflect these agricultural rhythms — the planting, the rains, the harvest.",
  },

  chunks: [
    {
      id: 'ndira_kukadzi_kurume',
      target: 'Ndira / Kukadzi / Kurume',
      native: 'January / February / March',
      literal: 'Ndira (plant name), Kukadzi (of women), Kurume (of men/rams)',
      emoji: '🌸',
      phonetic: 'NDI-ra / ku-KA-dzi / ku-RU-me',
      audioRef: null,
    },
    {
      id: 'chikumi_chikunguru',
      target: 'Chikumi / Chikunguru',
      native: 'June / July',
      literal: 'Chi-kumi (sixth), Chi-kunguru (seventh)',
      emoji: '❄️',
      phonetic: 'chi-KU-mi / chi-kun-GU-ru',
      audioRef: null,
    },
    {
      id: 'gumiguru_zvita',
      target: 'Gumiguru / Zvita',
      native: 'October / December',
      literal: 'Gumi-guru (big ten), Zvita (things-of-year-end)',
      emoji: '🌧️🎄',
      phonetic: 'gu-mi-GU-ru / ZVI-ta',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Some months use numbered Chi- prefix',
    explanation: "Some Shona months use the Chi- prefix with numbers: Chikumi (June = 6th month), Chikunguru (July = 7th). Others have descriptive names rooted in nature and culture: Ndira, Kukadzi, Zvita.",
    examples: [
      { target: 'Ndira', native: 'January' },
      { target: 'Chikumi', native: 'June (6th month)' },
      { target: 'Zvita', native: 'December (year-end things)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the month to its English equivalent',
      pairs: [
        { left: 'Ndira', right: 'January' },
        { left: 'Chikumi', right: 'June' },
        { left: 'Zvita', right: 'December' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the month sequence',
      sentence: 'Ndira, Kukadzi, _____.',
      options: ['Kurume', 'Chikumi', 'Zvita'],
      correct: 'Kurume',
      context: 'January, February, March.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'January',
      correct: ['Ndira', 'ndira'],
    },
    {
      type: 'multiple_choice',
      instruction: "Which month means 'sixth month'?",
      question: 'Chikumi is:',
      options: [
        { text: 'June', correct: true },
        { text: 'July', correct: false },
        { text: 'October', correct: false },
      ],
      explanation: "Chi-kumi = Chi- prefix + kumi (10)... but wait — it uses 'kumi' (6 in the month system). Chikumi = June, the 6th month.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I was born in January'",
      words: ['Ndakazvarwa', 'muNdira.'],
      correct: ['Ndakazvarwa', 'muNdira.'],
      translation: 'I was born in January',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'December',
      correct: ['Zvita', 'zvita'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks about your birth month and your favourite time of year.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Wakazvarwa muwedzi upi? Uye unofarira nguva yei yegore?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndakazvarwa mu[month]. Ndinofarira [season/month] nokuti...', native: 'I was born in [month]. I enjoy [season/month] because...', correct: true, feedback: "Birth month and favourite season — two personal facts shared in Shona." },
          { target: 'Ndakazvarwa muNdira', native: 'I was born in January', correct: false, feedback: "Good — add your favourite time: 'Ndinofarira [month/season] nokuti...'" },
          { target: 'Handizivi muwedzi wangu', native: "I don't know my month", correct: false, feedback: "Try: 'Ndakazvarwa mu[your birth month].' Which month were you born?" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka! Mazuva ekuberekwa — mazuva akakosha. Your birthday in Shona.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'January', correct: ['Ndira', 'ndira'] },
      { prompt: 'December', correct: ['Zvita', 'zvita'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your birth month in Shona: 'Ndakazvarwa mu[month].' Say the current month in Shona. If you don't know it, look it up — that's learning too.",
    rwenSignoff: "The months have names in Shona. Now you know yours. Famba zvakanaka.",
  },
};

export default lesson;
