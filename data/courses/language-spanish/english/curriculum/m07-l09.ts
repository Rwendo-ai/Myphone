import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-sobremesa',
  module: 7,
  lesson: 9,
  title: 'La Sobremesa — Lingering After the Meal',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "There is a Spanish word for the time you stay at the table after the food is gone, talking. It's la sobremesa — literally 'over-the-table'. It can stretch two, three, four hours. Standing up to leave too soon ends a conversation that hadn't even started. Today we learn how to stay.",
    culturalNote: "La sobremesa is sacred in Spain, Argentina, Uruguay, and across most of the Hispanic world. Sunday lunches routinely run from 2pm to 7pm — not because of the eating, but because of what happens after. Asking 'tomamos un café?' (shall we have a coffee?) is the move that opens sobremesa.",
  },

  chunks: [
    {
      id: 'sobremesa',
      target: 'la sobremesa',
      native: 'lingering at the table after a meal — talking, no rush',
      literal: 'la sobre-mesa — over-the-table',
      emoji: '☕💬',
      phonetic: 'lah soh-breh-MEH-sah',
      audioRef: null,
    },
    {
      id: 'estoy_lleno',
      target: 'Estoy lleno / llena',
      native: "I'm full (m. / f.)",
      literal: 'I-am full (gendered)',
      emoji: '😌',
      phonetic: 'es-TOY YEH-noh',
      audioRef: null,
    },
    {
      id: 'tomamos_cafe',
      target: '¿Tomamos un café?',
      native: 'Shall we have a coffee? (the sobremesa opener)',
      literal: 'We-take a coffee?',
      emoji: '☕',
      phonetic: 'toh-MAH-mohs oon kah-FEH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Estar for current state — estoy lleno (right now)',
    explanation: "Fullness is a temporary state — use estar, not ser. Estoy lleno (I'm full now). Saying 'soy lleno' would mean 'I am, by my nature, a full person', which is nonsense. The estar/ser split is the difference between weather and climate.",
    examples: [
      { target: 'Estoy lleno', native: "I'm full (right now)" },
      { target: 'Estaba muy rico', native: "It was very tasty" },
      { target: '¿Tomamos un café?', native: 'Shall we have a coffee?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the sobremesa phrase to its meaning',
      pairs: [
        { left: 'la sobremesa', right: 'lingering at the table after a meal' },
        { left: 'Estoy lleno', right: "I'm full" },
        { left: '¿Tomamos un café?', right: 'Shall we have a coffee?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you are full right now',
      sentence: '_____ lleno, gracias. Estaba todo riquísimo.',
      options: ['Estoy', 'Soy', 'Tengo'],
      correct: 'Estoy',
      context: "I'm full, thanks. Everything was delicious. (estar — temporary state)",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Shall we have a coffee?',
      correct: ['¿Tomamos un café?', 'Tomamos un café?', '¿Tomamos un cafe?'],
    },
    {
      type: 'multiple_choice',
      instruction: "After a Sunday lunch in Madrid, the host asks '¿Tomamos un café?'. What's really happening?",
      question: 'The "¿tomamos un café?" moment is:',
      options: [
        { text: 'The official start of la sobremesa — coffee + conversation, no rush', correct: true },
        { text: 'A polite way to end the meal and leave', correct: false },
        { text: 'A request that you make the coffee', correct: false },
      ],
      explanation: "Tomamos un café = let's keep talking. It opens sobremesa — the long table conversation that's the actual point of the meal. Standing up to leave at this moment is closing a door someone just opened.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I'm full, it was delicious'",
      words: ['Estoy', 'lleno,', 'estaba', 'riquísimo.'],
      correct: ['Estoy', 'lleno,', 'estaba', 'riquísimo.'],
      translation: "I'm full, it was delicious",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'lingering at the table after a meal',
      correct: ['la sobremesa', 'sobremesa', 'La sobremesa'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday lunch is wrapping up at a Madrid family table. Plates are cleared. The host turns to you.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Estás lleno? ¿Tomamos un café?',
        native: 'Are you full? Shall we have a coffee?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Estoy lleno, estaba todo riquísimo. Sí, un café — me encanta la sobremesa.', native: "I'm full, it was all delicious. Yes, a coffee — I love sobremesa.", correct: true, feedback: "You said you were full, complimented the food, accepted the coffee, and named sobremesa. The host beams — you stayed." },
          { target: 'No, tengo que irme', native: "No, I have to go", correct: false, feedback: "Standing up at the sobremesa moment closes the door. Try 'Sí, con gusto. Me encanta la sobremesa.'" },
          { target: 'Soy lleno', native: "I am, by nature, full (ser)", correct: false, feedback: "Use estar for temporary states: 'Estoy lleno.' Soy lleno would mean you are perpetually filled with food — strange." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Eso me gusta. Aquí la sobremesa puede durar tres horas — sin prisa.',
        native: "I like that. Here the sobremesa can last three hours — no rush.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Sobremesa. The Spanish word for staying. The most important phrase in Module 7.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm full", correct: ['Estoy lleno', 'estoy lleno', 'Estoy llena', 'estoy llena'] },
      { prompt: 'Shall we have a coffee?', correct: ['¿Tomamos un café?', 'Tomamos un café?'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next meal you have with anyone, don't stand up immediately when the food is done. Stay 10 extra minutes at the table. Mentally think 'sobremesa'. Notice what gets said in those minutes — that's where the real conversation lives.",
    rwenSignoff: "Hasta mañana — la cena de despedida.",
  },

  phase8: {
    scenario: "It's 4pm on a Sunday in a small flat in Madrid's Lavapiés neighbourhood. You've just finished an enormous family lunch — paella, ensalada, two bottles of wine, flan for dessert. The host has just brought a tray of espresso cups out of the kitchen and is asking if you want a café. The wrong answer ends the afternoon. The right one opens it.",
    rwenRole: "Anfitriona Carmen — the host, mid 50s, traditional Madrileña; she lives for the sobremesa and quietly tests whether her foreign guest understands that leaving now would be a small heartbreak.",
    successCriteria: "User uses 'Estoy lleno' (NOT 'soy lleno'), accepts the coffee with '¿Tomamos un café?' / 'Sí, con gusto', references 'la sobremesa' or otherwise signals they understand the lingering ritual, and does NOT try to leave the table at the coffee invitation.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
