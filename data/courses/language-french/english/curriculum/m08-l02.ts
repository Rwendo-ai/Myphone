import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-faire',
  module: 8,
  lesson: 2,
  title: 'Faire — To do, to make, and a thousand things in between',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "English splits one French verb into two: do and make. Faire does both — and a hundred everyday tasks besides. Cooking, sport, laundry, the dishes, the shopping. If it's an activity, faire is probably driving the sentence.",
    culturalNote: "Where English says 'I cook', French says je fais la cuisine — literally 'I make the kitchen'. Where English says 'I do laundry', French says je fais la lessive. The verb to remember when reaching for any household chore is faire — it doesn't translate one-to-one, you just learn the pairings.",
  },

  chunks: [
    {
      id: 'je_fais_du_sport',
      target: 'Je fais du sport',
      native: 'I do sport / I work out',
      literal: 'I do of-the sport',
      emoji: '🏃',
      phonetic: 'zhuh feh doo SPOR',
      audioRef: null,
    },
    {
      id: 'faire_la_cuisine',
      target: 'Faire la cuisine',
      native: 'To cook',
      literal: 'To-do the kitchen',
      emoji: '🍳',
      phonetic: 'fehr lah kwee-ZEEN',
      audioRef: null,
    },
    {
      id: 'que_fais_tu',
      target: 'Que fais-tu?',
      native: 'What are you doing?',
      literal: 'What do-you?',
      emoji: '🤔',
      phonetic: 'kuh feh TOO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Faire idioms — chores, sports, weather',
    explanation: "Faire conjugates: je fais, tu fais, il/elle fait, nous faisons, vous faites, ils/elles font. It pairs with everyday activities where English would use 'do', 'make', 'go', or even nothing at all. Three big buckets: chores (faire la lessive — do laundry), sports/activities (faire du vélo — go cycling), and weather (il fait beau — it's nice out).",
    examples: [
      { target: 'Je fais la lessive le dimanche.', native: 'I do laundry on Sundays.' },
      { target: 'Il fait beau aujourd\'hui.', native: "It's nice out today. (lit. it makes beautiful)" },
      { target: 'Nous faisons du vélo le week-end.', native: 'We go cycling on weekends.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the activity to its meaning',
      pairs: [
        { left: 'Faire la cuisine', right: 'To cook' },
        { left: 'Faire la lessive', right: 'To do laundry' },
        { left: 'Faire du sport', right: 'To work out' },
        { left: 'Faire les courses', right: 'To do the shopping' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A friend texts: "Que ___-tu ce soir?"',
      sentence: 'Que _____-tu ce soir?',
      options: ['fais', 'fait', 'font'],
      correct: 'fais',
      context: "Tu form of faire is 'fais' — same spelling as je fais but you'll never confuse them in context.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I cook on Sundays',
      correct: ['Je fais la cuisine le dimanche', 'je fais la cuisine le dimanche', 'Je fais la cuisine les dimanches'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag — "It\'s cold today" (weather uses faire)',
      words: ['fait', 'aujourd\'hui', 'froid', 'Il'],
      correct: ['Il', 'fait', 'froid', 'aujourd\'hui'],
      translation: "It's cold today.",
    },
    {
      type: 'multiple_choice',
      instruction: "Your flatmate asks 'Tu fais quelque chose ce week-end?' You want to say 'I'm going cycling on Saturday.'",
      question: 'Which is natural French?',
      options: [
        { text: 'Je fais du vélo samedi', correct: true },
        { text: 'Je vais vélo samedi', correct: false },
        { text: 'Je cycle samedi', correct: false },
      ],
      explanation: "Sports and activities in French use 'faire du / de la' — faire du vélo, faire de la natation. There's no verb 'cycler' in everyday speech.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — nous form',
      prompt: 'We do the shopping on Saturdays',
      correct: ['Nous faisons les courses le samedi', 'nous faisons les courses le samedi', 'Nous faisons les courses les samedis'],
    },
  ],

  rwenDialogue: {
    intro: "Saturday morning. Your French flatmate Léa is making coffee in the kitchen and turns to ask what you've got planned.",
    lines: [
      {
        speaker: 'npc',
        target: 'Alors, qu\'est-ce que tu fais aujourd\'hui?',
        native: "So, what are you doing today?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Je fais les courses, et après je fais du sport.', native: "I'm doing the shopping, and then I'm working out.", correct: true, feedback: "Two faire idioms in one sentence — exactly how a French person would answer." },
          { target: 'Je fais shopping et je fais sport.', native: 'I do shopping and I do sport.', correct: false, feedback: "Almost — but you need 'les courses' (with article) and 'du sport' (with partitive du). Faire never goes bare." },
          { target: 'Je vais courses et je vais sport.', native: 'I go shopping and I go sport.', correct: false, feedback: "Aller is for movement (going somewhere). Faire is the verb for the activity itself." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Cool! Il fait beau, profites-en.',
        native: "Cool! It's nice out, make the most of it.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Did you catch 'il fait beau'? Even the weather uses faire. The verb just won't sit still.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'What are you doing? (informal)',
        correct: ['Que fais-tu?', 'Que fais-tu', 'Qu\'est-ce que tu fais?', 'Qu\'est-ce que tu fais', 'que fais-tu?'],
      },
      {
        prompt: "I'm cooking",
        correct: ['Je fais la cuisine', 'je fais la cuisine'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use faire three different ways today — out loud or in your head. One chore (faire la vaisselle), one activity (faire du sport), one weather comment (il fait beau / il fait chaud). Three faires, one day.",
    rwenSignoff: "I'll check tomorrow. Bonne journée — have a good day.",
  },

  phase8: {
    scenario: "Sunday brunch at a friend's flat in Lyon. Léa has just sat down with coffee and wants to compare weekends — what you cooked, whether you exercised, what chores you got through, what the weather's been like. Faire territory from start to finish.",
    rwenRole: "Léa — French flatmate, late 20s, casual; asks open faire-questions ('Tu as fait quoi hier?', 'Tu fais du sport en ce moment?'), shares her own weekend in faire-heavy sentences.",
    successCriteria: "User uses faire in at least 3 distinct constructions: a chore (faire la cuisine / la lessive / la vaisselle / les courses), an activity (faire du sport / du vélo / de la natation), and either a weather comment (il fait beau/froid/chaud) or a question with faire (qu'est-ce que tu fais). No swapping in 'aller' or bare verbs where faire belongs.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
