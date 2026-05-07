import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l09-refranes',
  module: 10,
  lesson: 9,
  title: 'Refranes — Spanish Proverbs',
  estimatedMinutes: 6,
  xpReward: 35,

  hook: {
    rwenLine: "Refranes — the Spanish proverbs — are tiny pieces of wisdom that have travelled centuries. Drop the right one in a conversation and a Spanish-speaker will look at you differently. Three of the most beloved across Latin America: 'A caballo regalado no se le mira el diente', 'Más vale tarde que nunca', and 'El que mucho abarca poco aprieta'. Today they become yours.",
    culturalNote: "In Latin American conversation, refranes are heard from grandparents, in telenovelas, in WhatsApp groups, and in markets. They're not formal — they're folk wisdom in everyday speech. Using one correctly is a small cultural handshake. Even getting one slightly wrong but earnestly is endearing — refranes belong to everyone who speaks the language.",
  },

  chunks: [
    {
      id: 'caballo_regalado',
      target: 'A caballo regalado no se le mira el diente',
      native: "Don't look a gift horse in the mouth (literal: don't check the teeth of a gifted horse)",
      literal: 'A horse gifted, one does not look at its tooth',
      emoji: '🐴',
      phonetic: 'ah kah-BAH-yoh reh-gah-LAH-doh noh seh leh MEE-rah el dee-EHN-teh',
      audioRef: null,
    },
    {
      id: 'mas_vale_tarde',
      target: 'Más vale tarde que nunca',
      native: 'Better late than never',
      literal: 'More worth (it is) late than never',
      emoji: '⏰',
      phonetic: 'mahs VAH-leh TAR-deh keh NOON-kah',
      audioRef: null,
    },
    {
      id: 'mucho_abarca',
      target: 'El que mucho abarca poco aprieta',
      native: 'Whoever grasps too much, holds little (jack of all trades, master of none)',
      literal: 'He-who much grasps little squeezes',
      emoji: '🤲',
      phonetic: 'el keh MOO-choh ah-BAR-kah POH-koh ah-pree-EH-tah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Refranes — fixed wisdom, dropped at the right moment',
    explanation: "Refranes are fixed — you don't conjugate them or change the words. You drop them whole, the way English drops 'a stitch in time saves nine'. The skill is timing: 'Más vale tarde que nunca' said when someone finally arrives is warm; said when they're an hour late looks passive-aggressive. Read the room, then deliver.",
    examples: [
      { target: 'Más vale tarde que nunca', native: 'Better late than never (welcoming)' },
      { target: 'A caballo regalado no se le mira el diente', native: "Don't look a gift horse in the mouth" },
      { target: 'El que mucho abarca poco aprieta', native: 'Bite off more than you can chew = you hold none of it' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the refrán to its lesson',
      pairs: [
        { left: 'A caballo regalado no se le mira el diente', right: "Don't look a gift horse in the mouth" },
        { left: 'Más vale tarde que nunca', right: 'Better late than never' },
        { left: 'El que mucho abarca poco aprieta', right: "Don't take on too much" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend just arrived to dinner two hours late but with apologies and a bottle of wine. Which refrán fits?",
      question: 'Best refrán for a late but welcome arrival:',
      options: [
        { text: 'Más vale tarde que nunca', correct: true },
        { text: 'El que mucho abarca poco aprieta', correct: false },
        { text: 'A caballo regalado no se le mira el diente', correct: false },
      ],
      explanation: "'Más vale tarde que nunca' — better late than never — said warmly as they walk in is a gracious welcome rather than a complaint about the time.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Better late than never',
      correct: ['Más vale tarde que nunca', 'más vale tarde que nunca', 'Mas vale tarde que nunca', 'mas vale tarde que nunca'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the gift-horse refrán',
      sentence: 'A caballo regalado no se le mira el _____.',
      options: ['diente', 'pelo', 'ojo'],
      correct: 'diente',
      context: "Don't look a gift horse in the mouth (lit: don't look at its tooth).",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Whoever grasps too much, holds little'",
      words: ['El', 'que', 'mucho', 'abarca', 'poco', 'aprieta.'],
      correct: ['El', 'que', 'mucho', 'abarca', 'poco', 'aprieta.'],
      translation: 'Whoever grasps too much, holds little',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "Don't look a gift horse in the mouth",
      correct: ['A caballo regalado no se le mira el diente', 'a caballo regalado no se le mira el diente'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday lunch with your abuela in Cartagena. She's just told a story about a neighbour who tried to do five things at once and finished none. She turns to you and asks for the right refrán.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Y qué refrán le viene a esa historia, mijo/mija?',
        native: 'And what proverb fits that story?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'El que mucho abarca poco aprieta, abuela. Quiso hacer todo y no terminó nada.', native: "Whoever grasps too much, holds little, grandma. He wanted to do everything and finished nothing.", correct: true, feedback: "Right refrán + a one-line Spanish reason. Abuela smiles slowly — she heard you not just speak Spanish but think in it." },
          { target: 'Más vale tarde que nunca', native: 'Better late than never', correct: false, feedback: "That refrán is about timing — this story is about overreach: 'El que mucho abarca poco aprieta.'" },
          { target: 'Adiós, abuela', native: 'Goodbye, grandma', correct: false, feedback: "She asked you to pick a refrán — show you understood: 'El que mucho abarca poco aprieta.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Exactamente. Aprendiste bien, mi amor.',
        native: "Exactly. You've learned well, my love.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Three refranes — and you can already match them to real stories. That's how Spanish stops being foreign and becomes yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Better late than never', correct: ['Más vale tarde que nunca', 'más vale tarde que nunca', 'Mas vale tarde que nunca', 'mas vale tarde que nunca'] },
      { prompt: "Don't look a gift horse in the mouth", correct: ['A caballo regalado no se le mira el diente', 'a caballo regalado no se le mira el diente'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick the refrán that speaks loudest to your life right now — gift horse, late better than never, or grasping too much. Say it out loud. Then watch this week for the moment to drop it on a Spanish-speaking friend.",
    rwenSignoff: "Los refranes viven en la lengua y en la sabiduría. Hasta mañana.",
  },

  phase8: {
    scenario: "Sunday afternoon at your abuela's apartment in Cartagena. She's just finished telling you a long story about a cousin who took on three jobs and lost all of them. She fixes you with that look she has, and asks: '¿Y qué refrán le viene a esa historia?' — what proverb fits this story? You must pick one and explain briefly, in Spanish, why.",
    rwenRole: "Abuela — ~78, wisdom-keeper of the family, master of refranes; will smile gently and pour more coffee if you pick the right one with a proper Spanish reason. Wrong refrán gets a kind chuckle and a hint.",
    successCriteria: "User selects 'El que mucho abarca poco aprieta' (the overreach refrán fits the cousin who took on too much) — NOT one of the other two — and offers a one-line Spanish justification using vocabulary from the course (e.g. 'Quiso hacer todo y no terminó nada' or 'Estaba demasiado ocupado'). Right refrán + Spanish reasoning.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
