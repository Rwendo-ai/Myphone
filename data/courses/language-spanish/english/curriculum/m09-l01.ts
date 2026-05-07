import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-izquierda-derecha',
  module: 9,
  lesson: 1,
  title: 'Izquierda, Derecha, Recto — The Three Anchors',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Three words unlock 80% of street directions in Spanish: izquierda (left), derecha (right), recto (straight). In the Mexico City Metro at rush hour or a Madrid backstreet at midnight, these are the three anchors. Today we set them.",
    culturalNote: "Across Latin America, addresses go street-then-number — 'Calle Reforma 250', not 'number 250 Reforma Street'. Memorise the order: type of street → name → number. Otherwise the taxi takes you to street 250 of a road called Reforma. Different country, same logic from Buenos Aires to Bogotá.",
  },

  chunks: [
    {
      id: 'izquierda',
      target: 'A la izquierda',
      native: 'To the left',
      literal: 'To the left (feminine, agrees with mano — hand)',
      emoji: '⬅️',
      phonetic: 'ah lah ees-key-EHR-dah',
      audioRef: null,
    },
    {
      id: 'derecha',
      target: 'A la derecha',
      native: 'To the right',
      literal: 'To the right (feminine, agrees with mano — hand)',
      emoji: '➡️',
      phonetic: 'ah lah deh-REH-chah',
      audioRef: null,
    },
    {
      id: 'recto',
      target: 'Todo recto',
      native: 'Straight ahead / Keep going straight',
      literal: 'All straight',
      emoji: '⬆️',
      phonetic: 'TOH-doh REK-toh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sigue / Gira + direction — the imperative for navigation',
    explanation: "'Sigue' (keep going) and 'gira' (turn) are the two informal commands you'll hear from anyone giving directions. Sigue todo recto (keep going straight). Gira a la derecha (turn right). For polite/formal (usted) it's 'siga' and 'gire' — useful with older people or strangers in Spain.",
    examples: [
      { target: 'Sigue todo recto', native: 'Keep going straight' },
      { target: 'Gira a la izquierda', native: 'Turn left' },
      { target: 'Siga a la derecha', native: 'Turn right (formal/usted)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Spanish direction to its meaning',
      pairs: [
        { left: 'A la izquierda', right: 'To the left' },
        { left: 'A la derecha', right: 'To the right' },
        { left: 'Todo recto', right: 'Straight ahead' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell someone to turn right',
      sentence: 'Gira _____ la derecha.',
      options: ['a', 'en', 'de'],
      correct: 'a',
      context: "Turn to the right.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Straight ahead',
      correct: ['Todo recto', 'todo recto', 'todo recto.', 'Todo recto.'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone tells you 'Gira a la izquierda'. What do you do?",
      question: 'Gira a la izquierda means:',
      options: [
        { text: 'Turn left', correct: true },
        { text: 'Turn right', correct: false },
        { text: 'Keep going straight', correct: false },
      ],
      explanation: "Izquierda = left. Derecha = right. They're easy to flip under pressure — drill them now so you don't end up the wrong way down a Madrid one-way.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Keep going straight, then turn left'",
      words: ['Sigue', 'todo', 'recto,', 'luego', 'gira', 'a', 'la', 'izquierda.'],
      correct: ['Sigue', 'todo', 'recto,', 'luego', 'gira', 'a', 'la', 'izquierda.'],
      translation: 'Keep going straight, then turn left',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'To the right',
      correct: ['A la derecha', 'a la derecha'],
    },
  ],

  rwenDialogue: {
    intro: "You've stepped off the Metro at Insurgentes in Mexico City and you're trying to find a café two blocks away. A vendor at the entrance sees you looking lost.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Disculpe, ¿el café está por aquí?', native: "Excuse me, is the café around here?", correct: true, feedback: "Polite opener with 'disculpe' (formal — perfect for a stranger). She'll point you the right way." },
          { target: 'Café izquierda', native: 'Café left', correct: false, feedback: "Too telegraphic — frame it as a question: 'Disculpe, ¿el café está por aquí?'" },
          { target: '¡Hola!', native: 'Hi!', correct: false, feedback: "Friendly, but she doesn't know what you need. Ask: 'Disculpe, ¿el café está por aquí?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sí, sigue todo recto dos cuadras y luego gira a la derecha. Está al lado del banco.',
        native: 'Yes, go straight two blocks and then turn right. It\'s next to the bank.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Recto, derecha, banco — three anchor words and you've got the route. Notice 'cuadras' (blocks) — that's the Latin American word; in Spain it's 'manzanas'.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'To the left', correct: ['A la izquierda', 'a la izquierda'] },
      { prompt: 'Straight ahead', correct: ['Todo recto', 'todo recto'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Walk somewhere — anywhere. At every turn, narrate it to yourself in Spanish: 'Todo recto... gira a la derecha... a la izquierda.' Build muscle memory before you ever need it on a real Mexico City sidewalk.",
    rwenSignoff: "Three words. Every street. Hasta mañana.",
  },

  phase8: {
    scenario: "You've come up from the Insurgentes Metro station in Mexico City onto a busy avenue, and a small vendor at the entrance is the closest person to ask. You need her to direct you to a café two blocks away — using todo recto, derecha or izquierda — and you have to confirm the directions back so you don't get them backwards.",
    rwenRole: "Doña Carmen — fruit vendor at the Insurgentes Metro entrance, late 50s, born in Puebla, kind but brisk because customers are stacking up; she'll give you crisp directions if you open with 'Disculpe' and confirm what she says.",
    successCriteria: "User opens politely with 'Disculpe' (formal, not 'Hola'), uses 'todo recto', 'a la derecha', 'a la izquierda' in the right order when repeating directions back, and does NOT flip izquierda/derecha under pressure. Bonus if they say 'gracias, señora' to close.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
