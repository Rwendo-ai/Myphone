import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06-days-week',
  module: 6,
  lesson: 6,
  title: 'Les Jours de la Semaine — Days of the Week',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The French week starts on Monday — not Sunday like in the United States. Calendars, planners, school timetables, even the way people mentally map their week: it all begins with lundi. Today we learn the seven names — and one tiny rule that English speakers always forget.",
    culturalNote: "Days of the week in French are NEVER capitalised — not at the start of a sentence (well, only there), not in dates, not in headers. 'Je travaille le lundi' (I work on Mondays). The article 'le' before a day = every Monday, habitually. Without an article = this Monday, a specific one. That tiny 'le' carries a lot of meaning.",
  },

  chunks: [
    {
      id: 'lundi_mardi_mercredi',
      target: 'lundi, mardi, mercredi',
      native: 'Monday, Tuesday, Wednesday',
      literal: 'moon-day, Mars-day, Mercury-day',
      emoji: '📅',
      phonetic: 'luhn-DEE, mar-DEE, mair-kruh-DEE',
      audioRef: null,
    },
    {
      id: 'jeudi_vendredi',
      target: 'jeudi, vendredi',
      native: 'Thursday, Friday',
      literal: 'Jupiter-day, Venus-day',
      emoji: '📆',
      phonetic: 'zhuh-DEE, vahn-druh-DEE',
      audioRef: null,
    },
    {
      id: 'samedi_dimanche',
      target: 'samedi, dimanche',
      native: 'Saturday, Sunday',
      literal: 'Saturn-day, Lord-day',
      emoji: '🛌',
      phonetic: 'sahm-DEE, dee-MAHNSH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'le lundi vs lundi — habit vs one-off',
    explanation: "With 'le' = every week, habitual. Without 'le' = this specific day. 'Je vais à la piscine LE lundi' = I go swimming every Monday. 'Je vais à la piscine lundi' = I'm going swimming this Monday (coming up). Bonus rule: never capitalise day names mid-sentence. 'mardi prochain', not 'Mardi prochain'.",
    examples: [
      { target: 'Le mardi je travaille', native: 'On Tuesdays (every Tuesday) I work' },
      { target: 'Mardi je travaille', native: 'On Tuesday (this one) I work' },
      { target: 'Aujourd\'hui c\'est jeudi', native: 'Today is Thursday' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French day to its English equivalent',
      pairs: [
        { left: 'lundi', right: 'Monday' },
        { left: 'mercredi', right: 'Wednesday' },
        { left: 'vendredi', right: 'Friday' },
        { left: 'dimanche', right: 'Sunday' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I go to the market every Saturday."',
      sentence: 'Je vais au marché _____ samedi.',
      options: ['le', 'un', 'la'],
      correct: 'le',
      context: "'Le' + day = every (day), habitually. Without it = just this Saturday.",
    },
    {
      type: 'translate',
      instruction: 'Type in French (today is Wednesday)',
      prompt: 'Today is Wednesday',
      correct: ['Aujourd\'hui c\'est mercredi', 'aujourd\'hui c\'est mercredi', 'C\'est mercredi'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Tomorrow is Friday"',
      words: ['Demain', 'c\'est', 'vendredi'],
      correct: ['Demain', 'c\'est', 'vendredi'],
      translation: 'Tomorrow is Friday.',
    },
    {
      type: 'multiple_choice',
      instruction: "Your French friend says 'Je joue au foot le samedi.' What does she mean?",
      question: 'Choose the correct meaning',
      options: [
        { text: 'I play football every Saturday', correct: true },
        { text: 'I am playing football this Saturday', correct: false },
        { text: 'I played football last Saturday', correct: false },
      ],
      explanation: "'Le samedi' (with the article) = every Saturday, habitually. Without 'le' it'd be this specific Saturday.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Tomorrow is Monday',
      correct: ['Demain c\'est lundi', 'demain c\'est lundi'],
    },
  ],

  rwenDialogue: {
    intro: "You're in a French office. A colleague asks if you can do a meeting on Thursday. Today is Tuesday — Thursday works.",
    lines: [
      {
        speaker: 'npc',
        target: 'On peut faire la réunion jeudi?',
        native: 'Can we do the meeting on Thursday?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Oui, jeudi ça marche', native: 'Yes, Thursday works', correct: true, feedback: 'Clean and natural.' },
          { target: 'Oui, le jeudi ça marche', native: 'Yes, every Thursday works', correct: false, feedback: "Watch the article — with 'le' you said 'every Thursday'. For one specific Thursday, drop the 'le'." },
          { target: 'Oui, Jeudi ça marche', native: '(capital J)', correct: false, feedback: "Days are never capitalised in French (except at the very start of a sentence)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Parfait, à jeudi!',
        native: 'Perfect, see you Thursday!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice she said 'à jeudi' — French uses 'à + day' as a goodbye when you'll see them on that day. Lock that one away.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Saturday and Sunday (in French)', correct: ['samedi et dimanche', 'samedi, dimanche'] },
      { prompt: 'Today is Friday', correct: ['Aujourd\'hui c\'est vendredi', 'aujourd\'hui c\'est vendredi', 'C\'est vendredi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Right now, say out loud which day of the week it is in French — 'Aujourd'hui c'est ___'. Then say which day tomorrow will be — 'Demain c'est ___'. Two sentences, real days, no English.",
    rwenSignoff: "À bientôt — soon we cross into months and seasons.",
  },

  phase8: {
    scenario: "You're at work in Lyon. A French colleague is trying to schedule a recurring weekly call AND a one-off catch-up. You discuss which days work for you, using both 'le + day' (habitual) and bare day (one-off) at least once each.",
    rwenRole: "Thomas — a French colleague, 30s, friendly. Wants to know which day of the week works best for the recurring meeting and which specific day for the catch-up.",
    successCriteria: "User correctly produces 'le + day' for the WEEKLY recurring meeting (e.g., 'le mardi') AND a bare day name for the SPECIFIC one-off (e.g., 'jeudi' or 'vendredi'). Days are not capitalised in writing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
