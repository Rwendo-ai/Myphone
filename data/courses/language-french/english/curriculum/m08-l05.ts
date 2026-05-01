import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-wake-up',
  module: 8,
  lesson: 5,
  title: 'Routine matinale — Reflexive verbs and your morning',
  estimatedMinutes: 7,
  xpReward: 25,

  hook: {
    rwenLine: "Today's lesson hides one of French's most useful patterns: reflexive verbs. The actions you do TO YOURSELF — wake up, get up, shower, brush your teeth — all carry a tiny pronoun before the verb: me, te, se, nous, vous, se. Once you see it, you'll see it everywhere.",
    culturalNote: "English doesn't mark these verbs at all. We just say 'I wake up'. French insists: je ME réveille — literally 'I wake myself'. Once you accept that the morning routine in French is a series of things you do to yourself, the rest is mechanical: the reflexive pronoun (me/te/se/nous/vous/se) sits BEFORE the conjugated verb. Always.",
  },

  chunks: [
    {
      id: 'je_me_reveille',
      target: 'Je me réveille à 7h',
      native: 'I wake up at 7am',
      literal: 'I myself wake at 7h',
      emoji: '⏰',
      phonetic: 'zhuh muh ray-VAY ah seh-TUHR',
      audioRef: null,
    },
    {
      id: 'je_me_douche',
      target: 'Je me douche',
      native: 'I shower',
      literal: 'I myself shower',
      emoji: '🚿',
      phonetic: 'zhuh muh DOOSH',
      audioRef: null,
    },
    {
      id: 'petit_dejeuner',
      target: 'Je prends le petit-déjeuner',
      native: 'I have breakfast',
      literal: 'I take the small-lunch',
      emoji: '🥐',
      phonetic: 'zhuh prahn luh puh-tee day-zhuh-NAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Reflexive pronouns BEFORE the verb',
    explanation: "Reflexive verbs in French take a pronoun matching the subject, placed BEFORE the conjugated verb. Je → me, tu → te, il/elle/on → se, nous → nous, vous → vous, ils/elles → se. Common ones: se réveiller (wake up), se lever (get up), se doucher (shower), se brosser les dents (brush teeth), s'habiller (get dressed). Memorise the pattern, not each verb separately.",
    examples: [
      { target: 'Je me lève à 7h30 et je me douche.', native: 'I get up at 7:30 and I shower.' },
      { target: 'Tu te brosses les dents avant le petit-déjeuner?', native: 'Do you brush your teeth before breakfast?' },
      { target: 'Elle s\'habille rapidement le matin.', native: 'She gets dressed quickly in the morning.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the morning action to its meaning',
      pairs: [
        { left: 'Je me réveille', right: 'I wake up' },
        { left: 'Je me lève', right: 'I get up' },
        { left: 'Je me douche', right: 'I shower' },
        { left: 'Je me brosse les dents', right: 'I brush my teeth' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the correct reflexive pronoun',
      sentence: 'Tu _____ réveilles à quelle heure?',
      options: ['te', 'me', 'se'],
      correct: 'te',
      context: 'Tu always pairs with te — the pronoun must match the subject.',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I wake up at 7am',
      correct: ['Je me réveille à 7h', 'je me réveille à 7h', 'Je me réveille à sept heures', 'Je me réveille à 7 heures'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag — "She gets up at 8 and showers"',
      words: ['se', 'douche', 'à', '8h', 'lève', 'Elle', 'et'],
      correct: ['Elle', 'se', 'lève', 'à', '8h', 'et', 'se', 'douche'],
      translation: 'She gets up at 8 and showers.',
    },
    {
      type: 'multiple_choice',
      instruction: "Where does the reflexive pronoun go in a normal positive sentence?",
      question: "Choose the correct French",
      options: [
        { text: 'Je me lève tôt.', correct: true },
        { text: 'Je lève me tôt.', correct: false },
        { text: 'Lève je me tôt.', correct: false },
      ],
      explanation: "The reflexive pronoun (me/te/se/nous/vous/se) sits between the subject and the verb. Always before, never after.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I have breakfast at 8am',
      correct: ['Je prends le petit-déjeuner à 8h', 'je prends le petit-déjeuner à 8h', 'Je prends le petit-déjeuner à huit heures', 'Je prends le petit déjeuner à 8h'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday brunch at Camille's. She's curious about your weekday morning routine — walk her through it.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tu te réveilles tôt en semaine?',
        native: "Do you wake up early on weekdays?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Oui, je me réveille à 6h30, je me douche, et je prends le petit-déjeuner.", native: "Yes, I wake up at 6:30, I shower, and I have breakfast.", correct: true, feedback: "Three reflexive pronouns in a row, all in the right place. That's the rhythm." },
          { target: "Oui, je réveille à 6h30, je douche, et je prends petit-déjeuner.", native: "Yes, I wake at 6:30, I shower, and I take breakfast.", correct: false, feedback: "Missing the reflexive pronouns! In French these verbs need 'me' before them — je ME réveille, je ME douche." },
          { target: "Oui, me je réveille à 6h30 et me douche.", native: "Yes, I wake up at 6:30 and shower.", correct: false, feedback: "Pronoun's in the wrong slot — it goes AFTER the subject, BEFORE the verb: je me réveille, not me je réveille." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wow, tôt! Moi je me lève à 8h, jamais avant.',
        native: 'Wow, early! Me, I get up at 8, never before.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear how she says 'je me lève'? That little 'me' is the whole game today. You're tracking it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I shower in the morning',
        correct: ['Je me douche le matin', 'je me douche le matin'],
      },
      {
        prompt: 'I get up at 7am',
        correct: ['Je me lève à 7h', 'je me lève à 7h', 'Je me lève à sept heures', 'Je me lève à 7 heures'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tomorrow morning, narrate your routine in French to yourself, in your head. 'Je me réveille... je me lève... je me douche... je prends le petit-déjeuner.' Even silently — your brain still wires the pattern.",
    rwenSignoff: "Dors bien — sleep well. À demain.",
  },

  phase8: {
    scenario: "You're on a video call with a French language exchange partner — it's 9pm in Paris, evening for him, and he's curious about your typical weekday morning. Walk him through it: when you wake up, what you do first, breakfast routine. Reflexive verbs throughout.",
    rwenRole: "Antoine — language-exchange partner in Paris, late 20s, friendly and patient; asks 'Tu te réveilles à quelle heure?', 'Tu te douches le matin ou le soir?', 'Tu prends le petit-déjeuner?' — and shares his own routine in return.",
    successCriteria: "User describes morning routine using at least 3 reflexive verbs (se réveiller, se lever, se doucher, se brosser les dents, s'habiller) with the correct pronoun 'me' placed BEFORE each verb. Times must use 'à + heure'. No bare verbs (je réveille / je douche) without the reflexive pronoun.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
