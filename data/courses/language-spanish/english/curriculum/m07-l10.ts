import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-cena-despedida',
  module: 7,
  lesson: 10,
  title: 'Cena de Despedida — Full Dinner Conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Tonight is your farewell dinner. A Mexican family that hosted you for a week. From the first 'pásele' to the last 'hasta pronto' — every phrase from Module 7 lands on this table. Greeting, ordering, complimenting, sobremesa, gratitude, goodbye. Run the whole sequence.",
    culturalNote: "A despedida (farewell) dinner in most Hispanic homes is intentional and slow. Toasts are made (¡salud!), photos are taken, leftovers are wrapped for you. Refusing the para-llevar (the leftovers) is a small offence — accept the tupperware. It is love made portable.",
  },

  chunks: [
    {
      id: 'salud',
      target: '¡Salud!',
      native: 'Cheers! / To your health!',
      literal: 'Health!',
      emoji: '🥂',
      phonetic: 'sah-LOOD',
      audioRef: null,
    },
    {
      id: 'muchisimas_gracias',
      target: 'Muchísimas gracias',
      native: 'Thank you so much (intensified)',
      literal: 'Many-est thanks',
      emoji: '🙏',
      phonetic: 'moo-CHEE-see-mahs GRAH-syahs',
      audioRef: null,
    },
    {
      id: 'hasta_pronto',
      target: 'Hasta pronto',
      native: 'See you soon',
      literal: 'Until soon',
      emoji: '👋',
      phonetic: 'AHS-tah PRON-toh',
      audioRef: null,
    },
  ],

  pattern: {
    name: '-ísimo — the absolute superlative',
    explanation: "Add -ísimo/-ísima to an adjective for maximum intensification: rico → riquísimo (extremely tasty), muchas → muchísimas (so so many), bueno → buenísimo. It's stronger than 'muy + adjective' and signals genuine emotion. End syllables shift: c→qu, g→gu, z→c.",
    examples: [
      { target: 'Estaba riquísimo', native: 'It was extremely tasty' },
      { target: 'Muchísimas gracias', native: 'Thank you so much' },
      { target: 'Sois buenísimos', native: "You all are the best (Spain plural)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the farewell phrase to its meaning',
      pairs: [
        { left: '¡Salud!', right: 'Cheers! / To your health!' },
        { left: 'Muchísimas gracias', right: 'Thank you so much' },
        { left: 'Hasta pronto', right: 'See you soon' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "The dinner is over. The host wraps leftovers and offers them to you. What do you do?",
      question: 'When offered the para-llevar (leftovers):',
      options: [
        { text: 'Accept warmly — refusing is a small offence', correct: true },
        { text: 'Politely refuse — you don\'t want to take their food', correct: false },
        { text: 'Ask if you can pay for them', correct: false },
      ],
      explanation: "Para-llevar is love made portable. Accept with 'Muchísimas gracias' — refusing rejects the gesture. Eat them tomorrow and remember this dinner.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Thank you so much',
      correct: ['Muchísimas gracias', 'muchísimas gracias', 'Muchisimas gracias'],
    },
    {
      type: 'fill_blank',
      instruction: 'Use the absolute superlative',
      sentence: 'La cena estaba riquí_____.',
      options: ['simo', 'mente', 'sito'],
      correct: 'simo',
      context: 'The dinner was extremely tasty. (rico → riquísimo)',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'See you soon, thank you so much'",
      words: ['Hasta', 'pronto,', 'muchísimas', 'gracias.'],
      correct: ['Hasta', 'pronto,', 'muchísimas', 'gracias.'],
      translation: 'See you soon, thank you so much',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Cheers! (a toast)',
      correct: ['¡Salud!', 'Salud!', 'Salud', '¡Salud'],
    },
  ],

  rwenDialogue: {
    intro: "It's 11pm in Mexico City. The Hernández family — your hosts for the week — has prepared mole poblano, arroz, frijoles. Wine is poured. The patriarch raises his glass.",
    lines: [
      {
        speaker: 'npc',
        target: 'Antes de comer — un brindis. Por nuestro huésped, que ya es de la familia. ¡Salud!',
        native: 'Before we eat — a toast. To our guest, who is already family. Cheers!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '¡Salud! Muchísimas gracias por todo. Estoy muy emocionado de cenar con ustedes.', native: 'Cheers! Thank you so much for everything. I\'m so moved to be having dinner with you.', correct: true, feedback: "Returned the toast, intensified the gratitude, named the emotion. The whole table raises glasses." },
          { target: 'Salud', native: "Cheers (flat)", correct: false, feedback: "Match the warmth: '¡Salud! Muchísimas gracias por todo.'" },
          { target: 'No tengo hambre', native: "I'm not hungry", correct: false, feedback: "Wrong moment entirely — this is a toast, not a food refusal. '¡Salud! Muchísimas gracias por todo.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'La cena está servida. ¿Cómo te ha gustado el mole?',
        native: "Dinner is served. How did you like the mole?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Estaba riquísimo. Es la mejor comida que he probado en México. ¿Tomamos un café?', native: "It was extremely tasty. It's the best food I've had in Mexico. Shall we have a coffee?", correct: true, feedback: "Compliment with -ísimo, named the country's best, opened the sobremesa. You ran the full Module 7 sequence." },
          { target: 'Está bueno', native: "It's good (flat)", correct: false, feedback: "Maximum compliment for a farewell: 'Estaba riquísimo. Es la mejor comida que he probado.'" },
          { target: 'Estoy lleno', native: "I'm full (deflecting)", correct: false, feedback: "She asked how it was — answer with -ísimo: 'Estaba riquísimo.' Then sobremesa." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Toma — te empacamos un poco para mañana. Hasta pronto, mijo.',
        native: 'Here — we packed some for you for tomorrow. See you soon, my dear.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Muchísimas gracias por todo. Hasta pronto. Han sido como mi familia esta semana.', native: 'Thank you so much for everything. See you soon. You\'ve been like family to me this week.', correct: true, feedback: "Accepted the para-llevar, intensified gratitude, named what you became to each other. Module 7 complete. The whole family is wiping eyes." },
          { target: 'Adiós', native: 'Goodbye (final)', correct: false, feedback: "'Adiós' is for goodbye-forever. This is 'hasta pronto' — see you soon. 'Muchísimas gracias por todo. Hasta pronto.'" },
          { target: 'No, gracias, no quiero', native: "No, thanks, I don't want it (refusing leftovers)", correct: false, feedback: "Refusing the para-llevar is a small offence. Accept warmly: 'Muchísimas gracias.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You greeted, ordered, complimented, lingered, toasted, accepted leftovers, said hasta pronto. Module 7 — done. La comida es relación. Food is relationship.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Thank you so much', correct: ['Muchísimas gracias', 'muchísimas gracias', 'Muchisimas gracias'] },
      { prompt: 'See you soon', correct: ['Hasta pronto', 'hasta pronto'] },
    ],
  },

  mission: {
    title: "Your Module 7 Mission",
    task: "Host or attend a meal this week. Run the Spanish food sequence in your head: Tengo hambre → ¿Me trae la carta? → Quiero... con... → Estaba riquísimo → ¿Tomamos un café? → Muchísimas gracias → Hasta pronto. The whole arc, in one meal.",
    rwenSignoff: "La sobremesa cierra Módulo 7. Module 8 — action and daily life — begins next. ¡Hasta pronto!",
  },

  phase8: {
    scenario: "It's 11pm at the Hernández family flat in Polanco, Mexico City. They've hosted you for a week. Tonight is your despedida — your farewell dinner. The mole poblano is on the table, wine is poured, the abuela is teary already. You're being asked to deliver a complete farewell in Spanish: toast, compliment, sobremesa, accept the leftovers, hasta pronto. Everything Module 7 has built toward lives in the next ten minutes.",
    rwenRole: "Don Carlos Hernández — patriarch, late 60s, raises the glass for the toast and watches to see if the foreign guest knows how to receive a Mexican family farewell with the right Spanish.",
    successCriteria: "User returns the toast with '¡Salud!' (NOT just 'salud' flat), uses '-ísimo' intensifier somewhere ('riquísimo', 'muchísimas gracias') for genuine warmth, opens sobremesa with '¿Tomamos un café?', accepts the para-llevar leftovers (NOT refuses), and closes with 'Hasta pronto' — NOT 'Adiós' which is too final.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
