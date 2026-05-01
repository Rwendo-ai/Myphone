import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-tomorrow',
  module: 8,
  lesson: 9,
  title: 'Demain — Talking about tomorrow with futur proche',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "If passé composé was 'have + past participle', futur proche is even simpler: aller + infinitive. Je vais manger. Je vais voir. Je vais partir. The verb you already learned in lesson 3 is now also your time machine forward.",
    culturalNote: "French has two future tenses. Futur proche (aller + infinitive) is what people actually say in conversation — for tomorrow, next week, even next year if it feels concrete. Futur simple (a single conjugated form: je mangerai) is mostly written, formal, or used for distant or hypothetical futures. So when you talk about tomorrow's plans with a friend, you sound natural with futur proche — and you don't need to learn another conjugation today.",
  },

  chunks: [
    {
      id: 'demain_je_vais',
      target: 'Demain je vais travailler',
      native: "Tomorrow I'm going to work",
      literal: 'Tomorrow I go work(infinitive)',
      emoji: '📅',
      phonetic: 'duh-MAHN zhuh veh trah-vah-YAY',
      audioRef: null,
    },
    {
      id: 'la_semaine_prochaine',
      target: 'La semaine prochaine',
      native: 'Next week',
      literal: 'The week next',
      emoji: '📆',
      phonetic: 'lah suh-MEN proh-SHEN',
      audioRef: null,
    },
    {
      id: 'a_demain',
      target: 'À demain',
      native: 'See you tomorrow',
      literal: 'Until tomorrow',
      emoji: '👋',
      phonetic: 'ah duh-MAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Futur proche — aller + infinitive',
    explanation: "Conjugate aller (je vais, tu vas, il va, nous allons, vous allez, ils vont) + add the infinitive of any verb. That's it. 'Je vais manger' = I'm going to eat. 'Nous allons partir' = we're going to leave. Negative: 'Je ne vais pas manger.' Common time markers: demain, ce soir, la semaine prochaine, l'année prochaine, dans deux jours.",
    examples: [
      { target: 'Demain, je vais voir mes amis.', native: "Tomorrow, I'm going to see my friends." },
      { target: 'La semaine prochaine, nous allons partir en vacances.', native: "Next week, we're going on holiday." },
      { target: 'Tu vas faire quoi ce week-end?', native: "What are you going to do this weekend?" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French time expression to its meaning',
      pairs: [
        { left: 'Demain', right: 'Tomorrow' },
        { left: 'Ce soir', right: 'Tonight' },
        { left: 'La semaine prochaine', right: 'Next week' },
        { left: "L'année prochaine", right: 'Next year' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the futur proche',
      sentence: 'Demain, je _____ travailler.',
      options: ['vais', 'veux', 'fais'],
      correct: 'vais',
      context: 'Futur proche = aller + infinitive. Je vais + travailler.',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "Tomorrow I'm going to see my friends",
      correct: ['Demain je vais voir mes amis', 'demain je vais voir mes amis', 'Demain, je vais voir mes amis'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag — "Next week, we\'re going to travel"',
      words: ['voyager', 'allons', 'prochaine,', 'nous', 'La', 'semaine'],
      correct: ['La', 'semaine', 'prochaine,', 'nous', 'allons', 'voyager'],
      translation: "Next week, we're going to travel.",
    },
    {
      type: 'multiple_choice',
      instruction: "A friend asks about your plans tonight. You're not going out — staying in.",
      question: 'Pick the natural negative futur proche',
      options: [
        { text: 'Je ne vais pas sortir ce soir.', correct: true },
        { text: 'Je vais ne pas sortir ce soir.', correct: false },
        { text: 'Je ne sortirai pas ce soir.', correct: false },
      ],
      explanation: "Negation wraps around the conjugated verb (vais), not the infinitive: ne + vais + pas + infinitive. The third option is grammatically fine but uses futur simple — too formal for casual chat about tonight.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "We're going to travel next week",
      correct: ['Nous allons voyager la semaine prochaine', 'nous allons voyager la semaine prochaine', 'On va voyager la semaine prochaine'],
    },
  ],

  rwenDialogue: {
    intro: "Friday afternoon. Your French friend Léa is making weekend plans. She wants to know what you're up to.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tu vas faire quoi ce week-end?',
        native: 'What are you going to do this weekend?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Demain je vais voir un film, et dimanche je vais manger chez mes parents.', native: "Tomorrow I'm going to see a film, and Sunday I'm going to eat at my parents'.", correct: true, feedback: "Two futur proche verbs back-to-back — exactly how a French speaker would lay out their weekend." },
          { target: "Demain je verrai un film et je mangerai chez mes parents.", native: "Tomorrow I will see a film and I will eat at my parents'.", correct: false, feedback: "Grammatically correct but futur simple — feels formal in casual chat. Friends use futur proche for the weekend: je vais voir, je vais manger." },
          { target: "Demain je vais voir film et je vais manger chez parents.", native: "Tomorrow I am going to see film and I am going to eat at parents.", correct: false, feedback: "Almost! French needs articles: UN film, MES parents. Otherwise the futur proche structure is right." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah cool! On va peut-être boire un verre dimanche soir alors?',
        native: 'Ah cool! Maybe we can grab a drink Sunday night then?',
      },
      {
        speaker: 'rwen',
        rwenLine: "She slipped 'on va boire' — futur proche with 'on' for a casual we. That's everywhere in spoken French.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Tomorrow I'm going to work",
        correct: ['Demain je vais travailler', 'demain je vais travailler', 'Demain, je vais travailler'],
      },
      {
        prompt: 'See you tomorrow',
        correct: ['À demain', 'à demain', 'À demain!'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Plan tomorrow in French — even silently. Three sentences with 'je vais + infinitive'. 'Demain je vais me lever à 7h, je vais aller au travail, je vais dîner avec...' Stack them up.",
    rwenSignoff: "À demain — and now you can say it knowing exactly what tense it is.",
  },

  phase8: {
    scenario: "Friday evening, drinks with your French friend Léa at a wine bar in Belleville. She's mapping out the weekend and asks what you're up to — Saturday, Sunday, even next week. You compare plans, suggest meeting up, decide on a film or a brunch. Futur proche the whole way.",
    rwenRole: "Léa — French friend, late 20s, a planner, energetic; asks 'Tu vas faire quoi demain?', 'On va se voir cette semaine?', proposes plans using 'on va' and waits for you to counter-propose.",
    successCriteria: "User uses futur proche (aller + infinitive) for at least 3 plans, with at least 2 different time markers (demain, ce week-end, la semaine prochaine, dimanche soir, etc.). User responds to a proposal using futur proche or 'à + time' (à demain / à dimanche). NO futur simple (no 'je verrai', 'je mangerai').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
