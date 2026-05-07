import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-venir',
  module: 8,
  lesson: 2,
  title: 'Venir — To Come',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "If ir is going away, venir is coming towards. Vengo, vienes, viene — like ir, it's irregular at the stem (the e changes to ie). Spanish loves these stem changes — quiero, puedo, vengo. Once you spot the pattern in one verb, you spot it in dozens.",
    culturalNote: "Across Latin America and Spain, 'ven' (come here, informal) is one of the warmest words you can hear — a parent calling a child, a friend waving you to their table at a Madrid terraza, a Mexico City vendor inviting you closer to look. It carries welcome the way English 'come on in' does, but in one syllable.",
  },

  chunks: [
    {
      id: 'vengo',
      target: 'Vengo',
      native: 'I come / I am coming',
      literal: '(yo) vengo — venir, e→ie stem-change, irregular yo',
      emoji: '🚶‍♂️',
      phonetic: 'BEN-goh',
      audioRef: null,
    },
    {
      id: 'vienes',
      target: 'Vienes',
      native: 'You come (informal)',
      literal: '(tú) vienes — e→ie',
      emoji: '👉',
      phonetic: 'bee-EH-nes',
      audioRef: null,
    },
    {
      id: 'ven',
      target: 'Ven',
      native: 'Come (here) — informal command',
      literal: 'Come! — informal singular',
      emoji: '👋',
      phonetic: 'BEN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Stem-changing verbs — e → ie',
    explanation: "Many Spanish verbs change their stem vowel when stressed: venir → vengo / vienes / viene. Querer → quiero / quieres. Pensar → pienso / piensas. The stem-change disappears in 'nosotros/vosotros' (venimos, queremos) — because the stress falls elsewhere. One pattern, dozens of verbs.",
    examples: [
      { target: 'Vengo de Madrid', native: 'I come from Madrid' },
      { target: '¿Vienes a la cena?', native: 'Are you coming to dinner?' },
      { target: 'Ven, te enseño.', native: "Come, I'll show you." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the form of venir to its meaning',
      pairs: [
        { left: 'Vengo', right: 'I come' },
        { left: 'Vienes', right: 'You come (informal)' },
        { left: 'Ven', right: 'Come! (informal command)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Stem-change in action',
      sentence: 'Yo _____ a la oficina a las nueve.',
      options: ['vengo', 'veno', 'vieno'],
      correct: 'vengo',
      context: 'I come to the office at nine.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Are you coming to the party?',
      correct: ['¿Vienes a la fiesta?', 'Vienes a la fiesta?', 'vienes a la fiesta?'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A friend in a Madrid plaza wants you to join their table. They say:',
      question: 'Warm informal invitation:',
      options: [
        { text: 'Ven, hay sitio.', correct: true },
        { text: 'Vienes hay sitio.', correct: false },
        { text: 'Voy, hay sitio.', correct: false },
      ],
      explanation: "'Ven' is the informal command — 'Come, there's space.' 'Vienes' alone is a statement. 'Voy' would mean you're the one going, not them.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I'm coming from work'",
      words: ['Vengo', 'del', 'trabajo.'],
      correct: ['Vengo', 'del', 'trabajo.'],
      translation: "I'm coming from work",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (informal command)',
      prompt: 'Come here',
      correct: ['Ven aquí', 'ven aquí', 'Ven', 'ven'],
    },
  ],

  rwenDialogue: {
    intro: "Saturday afternoon, 4pm at a sunny terraza in Plaza de Santa Ana, Madrid. Your friend Marta has saved a chair and waves you over.",
    lines: [
      {
        speaker: 'npc',
        target: '¡Ven, ven! He pedido cañas.',
        native: "Come, come! I've ordered beers.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ya vengo, te veo.', native: "I'm on my way, I see you.", correct: true, feedback: "'Ya vengo' is exactly the right phrase — Spanish present tense doing the work of English 'I'm coming'." },
          { target: 'Voy aquí.', native: 'I go here.', correct: false, feedback: "'Voy' is going away from where you are. Towards Marta you 'vengo' — try 'Ya vengo, te veo.'" },
          { target: 'Vengo aquí.', native: 'I come here.', correct: false, feedback: "Drop 'aquí' — 'Ya vengo' on its own is what natives say. 'Ya' adds the 'right now' feel." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Genial, vienes justo a tiempo.',
        native: 'Great, you come just in time.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Vengo, vienes, viene — the e-to-ie shift. Watch for it on querer, pensar, empezar. Same family, same trick.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I come / I am coming', correct: ['Vengo', 'vengo'] },
      { prompt: 'Come (here) — informal', correct: ['Ven', 'ven', 'Ven aquí', 'ven aquí'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Beckon someone or something today with 'Ven' — your dog, a child, a friend running late. Feel how a single syllable can carry an invitation.",
    rwenSignoff: "Ven. Vienes. Viene. The door opens with one stem-change. ¡Buen camino!",
  },

  phase8: {
    scenario: "Saturday 5:30pm at a terraza on Plaza de Santa Ana, Madrid. You've been catching up with your friend Marta and her primo Javi from Valencia just arrived. Marta asks you to wave Javi over and explain where you've come from this afternoon and where you all are going next.",
    rwenRole: "Marta — Madrid friend, late 20s, peer register (tú). Quick, warm, switches between Castilian Spanish and a bit of English when you stall — but expects you to recover into Spanish.",
    successCriteria: "User beckons Javi with 'Ven' (NOT 'Voy' — direction matters), uses 'vengo de...' to say where they're coming from, and contrasts it with 'voy a...' for the next plan. Pronouns dropped. The e→ie stem-change is correct in 'vengo' / 'vienes'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
