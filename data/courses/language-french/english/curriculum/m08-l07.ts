import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-evening-routine',
  module: 8,
  lesson: 7,
  title: 'Le soir — Coming home, dinner, decompression',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Mornings were reflexive. Evenings are softer — coming home, dinner, the slow unwind. Three chunks tonight, all describing what you actually do between leaving work and going to bed.",
    culturalNote: "French evenings have a rhythm. Dinner is the centrepiece — usually 19h30 to 20h30, always sit-down, often with wine even on weeknights. After dinner: 'je me détends' — I unwind. Could be télé, a book, a walk, a glass of something. The French word for it isn't quite 'relax' — it's 'detension', releasing the tension of the day.",
  },

  chunks: [
    {
      id: 'je_rentre',
      target: 'Je rentre du travail',
      native: 'I come home from work',
      literal: 'I return from-the work',
      emoji: '🏠',
      phonetic: 'zhuh RAHN-truh doo trah-VAI',
      audioRef: null,
    },
    {
      id: 'je_dine',
      target: 'Je dîne à 20h',
      native: 'I have dinner at 8pm',
      literal: 'I dine at 20h',
      emoji: '🍽️',
      phonetic: 'zhuh DEEN ah vahn-TUHR',
      audioRef: null,
    },
    {
      id: 'je_regarde_la_tele',
      target: 'Je regarde la télé',
      native: 'I watch TV',
      literal: 'I watch the tele',
      emoji: '📺',
      phonetic: 'zhuh ruh-GARD lah tay-LAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Evening verbs — rentrer, dîner, se détendre',
    explanation: "Three useful verb shapes for the evening. RENTRER (come home) is regular -er: je rentre, tu rentres, nous rentrons. DÎNER (have dinner) is similarly regular: je dîne, nous dînons. SE DÉTENDRE (unwind) is reflexive AND -re ending: je me détends, tu te détends, il/elle se détend, nous nous détendons. The reflexive pattern from L5 returns here.",
    examples: [
      { target: "Je rentre du travail vers 18h.", native: "I get home from work around 6pm." },
      { target: "Nous dînons en famille tous les soirs.", native: 'We have dinner as a family every night.' },
      { target: "Après dîner, je me détends sur le canapé.", native: "After dinner, I unwind on the sofa." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the evening phrase to its meaning',
      pairs: [
        { left: 'Je rentre du travail', right: 'I come home from work' },
        { left: 'Je dîne', right: 'I have dinner' },
        { left: 'Je me détends', right: 'I unwind' },
        { left: 'Je regarde la télé', right: 'I watch TV' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete with the right preposition',
      sentence: 'Je rentre _____ travail à 18h.',
      options: ['du', 'au', 'en'],
      correct: 'du',
      context: "Rentrer DU travail — du = de + le. You're returning FROM work.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I have dinner at 8pm',
      correct: ['Je dîne à 20h', 'je dîne à 20h', 'Je dîne à vingt heures', 'Je dîne à 20 heures'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag — "After dinner, I unwind"',
      words: ['je', 'détends', 'me', 'Après', 'dîner,'],
      correct: ['Après', 'dîner,', 'je', 'me', 'détends'],
      translation: 'After dinner, I unwind.',
    },
    {
      type: 'multiple_choice',
      instruction: "Reflexive verbs follow the same rule we learned in L5. Pick the correct form for nous.",
      question: "We unwind in the evening — which is right?",
      options: [
        { text: 'Nous nous détendons le soir.', correct: true },
        { text: 'Nous se détendons le soir.', correct: false },
        { text: 'Nous détendons le soir.', correct: false },
      ],
      explanation: "Nous → nous (yes, the same word twice — that's correct French). The reflexive pronoun for nous is also 'nous', placed before the verb.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I watch TV in the evening',
      correct: ['Je regarde la télé le soir', 'je regarde la télé le soir', 'Je regarde la télévision le soir'],
    },
  ],

  rwenDialogue: {
    intro: "Tuesday, 22h. Quick voice note exchange with your French friend Hugo — he's asking how your evening's going.",
    lines: [
      {
        speaker: 'npc',
        target: 'Salut! Tu fais quoi ce soir?',
        native: "Hey! What are you doing tonight?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Je viens de rentrer du travail. Je vais dîner et me détendre devant la télé.", native: "I've just got home from work. I'm going to have dinner and unwind in front of the TV.", correct: true, feedback: "All three of today's chunks woven together — rentrer, dîner, se détendre. Beautifully natural." },
          { target: "Je rentre, je dîne, je détends.", native: "I'm coming home, I'm having dinner, I'm unwinding.", correct: false, feedback: "So close! But 'se détendre' is reflexive — you need 'je ME détends', not just 'je détends'." },
          { target: "Je suis rentre et je suis dîné.", native: "I am come home and I am had-dinner.", correct: false, feedback: "Mixing past forms with the wrong auxiliary. Stick to the simple present we've been practising — je rentre, je dîne." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Bonne soirée! Repose-toi bien.',
        native: 'Have a good evening! Rest well.',
      },
      {
        speaker: 'rwen',
        rwenLine: "He even threw a reflexive at you on the way out — 'repose-toi'. Reflexives are everywhere once you start listening.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I come home from work at 6pm',
        correct: ['Je rentre du travail à 18h', 'je rentre du travail à 18h', 'Je rentre du travail à dix-huit heures'],
      },
      {
        prompt: 'I unwind in the evening',
        correct: ['Je me détends le soir', 'je me détends le soir'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tonight, narrate your own evening to yourself in French. 'Je rentre... je dîne... je me détends... je regarde...' Whatever you actually do — say it. Let the language live in your real life.",
    rwenSignoff: "Bonne soirée — have a good evening. À demain.",
  },

  phase8: {
    scenario: "It's 21h on a Wednesday. You're on a casual voice call with your French friend Hugo, both winding down. He asks about your evening — when you got home, what's for dinner, what you'll do before bed. You ask the same back. A relaxed two-way evening debrief.",
    rwenRole: "Hugo — old French friend, mid-30s, easy energy; opens with 'Tu fais quoi là?', shares his own evening (just got home from a run, dinner with his partner), asks how yours is going.",
    successCriteria: "User describes the evening using at least 2 of: 'je rentre du travail', 'je dîne', 'je regarde la télé', 'je me détends'. Reflexive 'me' must be present in 'je me détends'. Bonus if user asks Hugo back using 'tu' forms (tu rentres, tu dînes, tu te détends).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
