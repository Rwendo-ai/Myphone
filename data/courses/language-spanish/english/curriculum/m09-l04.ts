import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04-metro-bus',
  module: 9,
  lesson: 4,
  title: 'Metro & Autobús — Underground & Bus',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The Mexico City Metro carries 4.5 million riders a day. Buenos Aires has the Subte, the oldest in Latin America (1913). Bogotá runs the TransMilenio — buses on a dedicated grid. Different systems, same Spanish: Metro, autobús, parada (stop), línea (line). Master four words and you can ride any of them.",
    culturalNote: "In Buenos Aires it's 'Subte' (short for subterráneo), not Metro. In Bogotá there's no underground at all — the TransMilenio is fast articulated buses on dedicated lanes. In Mexico City, the Metro lines are colour-coded AND numbered: 'Línea 2 (azul)' is how locals refer to them. Specificity is the difference between arriving and getting lost.",
  },

  chunks: [
    {
      id: 'metro',
      target: 'El Metro',
      native: 'The underground / Metro',
      literal: 'The metro',
      emoji: '🚇',
      phonetic: 'el MEH-troh',
      audioRef: null,
    },
    {
      id: 'autobus',
      target: 'El autobús',
      native: 'The bus',
      literal: 'The bus',
      emoji: '🚌',
      phonetic: 'el ow-toh-BOOS',
      audioRef: null,
    },
    {
      id: 'parada',
      target: 'La parada',
      native: 'The (bus) stop',
      literal: 'The stop',
      emoji: '🚏',
      phonetic: 'lah pah-RAH-dah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tomar / Coger — to take a bus or train',
    explanation: "'Tomar el autobús' = take the bus. In Spain, it's also 'coger' (Coger el Metro). WARNING: in Mexico, Argentina, Colombia and most of Latin America, 'coger' is vulgar — stick with 'tomar' across LatAm. Take this one to the bank: tomar in LatAm, coger in Spain.",
    examples: [
      { target: 'Voy a tomar el Metro', native: "I'm going to take the Metro" },
      { target: '¿Dónde está la parada del autobús?', native: 'Where is the bus stop?' },
      { target: 'Tomo la línea 2', native: 'I take line 2' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the transport word to its meaning',
      pairs: [
        { left: 'El Metro', right: 'The underground / Metro' },
        { left: 'El autobús', right: 'The bus' },
        { left: 'La parada', right: 'The (bus) stop' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you are taking the bus (Latin America-safe)',
      sentence: 'Voy a _____ el autobús.',
      options: ['tomar', 'coger', 'hacer'],
      correct: 'tomar',
      context: "I'm going to take the bus. (Use 'tomar' in Latin America.)",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'The Metro',
      correct: ['El Metro', 'el Metro', 'el metro'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're in Buenos Aires looking for the underground. What do locals call it there?",
      question: 'In Buenos Aires the underground is called:',
      options: [
        { text: 'El Subte', correct: true },
        { text: 'El Metro', correct: false },
        { text: 'El TransMilenio', correct: false },
      ],
      explanation: "Subte (short for subterráneo) — Buenos Aires only. Metro is Mexico City and Madrid. TransMilenio is Bogotá's bus system, no underground at all.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Where is the bus stop?'",
      words: ['¿Dónde', 'está', 'la', 'parada', 'del', 'autobús?'],
      correct: ['¿Dónde', 'está', 'la', 'parada', 'del', 'autobús?'],
      translation: 'Where is the bus stop?',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'The (bus) stop',
      correct: ['La parada', 'la parada'],
    },
  ],

  rwenDialogue: {
    intro: "You're at the Mexico City Metro entrance, trying to figure out which line goes to Coyoacán. A station attendant is checking tickets.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Disculpe, ¿qué línea tomo para ir a Coyoacán?', native: 'Excuse me, which line do I take to go to Coyoacán?', correct: true, feedback: "Specific question — destination + transport mode. He answers in seconds." },
          { target: 'Coyoacán dónde', native: 'Coyoacán where', correct: false, feedback: "Ask about the line: 'Disculpe, ¿qué línea tomo para ir a Coyoacán?'" },
          { target: 'Quiero coger el Metro', native: 'I want to take the Metro (Spain verb)', correct: false, feedback: "In Mexico, 'coger' is vulgar. Use 'tomar': 'Disculpe, ¿qué línea tomo para ir a Coyoacán?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Toma la línea 3, dirección Universidad. Son tres paradas.',
        native: 'Take line 3, direction Universidad. It\'s three stops.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Línea 3, dirección Universidad, tres paradas. That's a Mexico City Metro answer in three pieces — line + direction + stops. Always check direction; the line runs both ways.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The bus', correct: ['El autobús', 'el autobús', 'el autobus'] },
      { prompt: 'The (bus) stop', correct: ['La parada', 'la parada'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine taking a bus or Metro in your nearest big city — but in Spanish. Say: 'Voy a tomar el autobús a [destination]. La parada está cerca.' Reflex first, real life later.",
    rwenSignoff: "Metro, Subte, TransMilenio — three names, one Spanish key. Hasta mañana.",
  },

  phase8: {
    scenario: "You're at the Hidalgo station in central Mexico City and you need to get to Coyoacán by Metro. You spot the uniformed station attendant near the turnstiles. You have to ask, in Spanish, which line to take — using 'tomar' (not 'coger'), naming Coyoacán correctly, and confirming the direction.",
    rwenRole: "Sergio — Mexico City Metro station attendant at Hidalgo, late 30s, knows every line and transfer by heart, will answer crisply if you use the right verb (tomar) and ask about both 'línea' and 'dirección'.",
    successCriteria: "User uses 'tomar' (NOT 'coger', which is vulgar in Mexico), asks '¿qué línea tomo para ir a [destination]?', confirms back the line number AND the dirección, and closes with 'gracias'. Bonus if they ask '¿cuántas paradas?' to anchor the journey time.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
