import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l10-tu-historia',
  module: 10,
  lesson: 10,
  title: 'Tu historia — Your Spanish Story (A2 Complete)',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Lesson 100. The end of the curriculum. The beginning of your real Spanish life. Today you don't learn — today you speak. Greetings, family, food, markets, directions, time, emotions, refranes — all of it, woven into one story. Your story. In Spanish. Show me who you've become.",
    culturalNote: "Reaching the end of this curriculum means more than vocabulary — it means you've absorbed the warmth, the agreement endings, the inverted question marks, the 'estar' for emotions, the family WhatsApp choreography, and the refranes that link you to centuries of Spanish-speaking life. From '¡Hola!' to 'Tariro haiperi' would have been impossible. From '¡Hola!' to 'Más vale tarde que nunca' is who you are now.",
  },

  chunks: [
    {
      id: 'he_llegado',
      target: 'He llegado',
      native: 'I have arrived',
      literal: 'He (I have) + llegado (arrived) — present perfect',
      emoji: '🏆',
      phonetic: 'eh yeh-GAH-doh',
      audioRef: null,
    },
    {
      id: 'sigo_adelante',
      target: 'Sigo adelante',
      native: 'I keep going forward',
      literal: 'Sigo (I continue) + adelante (forward)',
      emoji: '⬆️',
      phonetic: 'SEE-goh ah-deh-LAHN-teh',
      audioRef: null,
    },
    {
      id: 'el_camino_continua',
      target: 'El camino continúa',
      native: 'The journey continues',
      literal: 'The road continues',
      emoji: '🌅',
      phonetic: 'el kah-MEE-noh kon-tee-NOO-ah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'From A2 to beyond — your Spanish in one breath',
    explanation: "You've reached A2 functional Spanish. You can greet, identify yourself, talk about family and food, navigate a market, ask directions, tell time, handle emotions, sympathise, encourage, and use refranes. The next step is no longer a lesson — it's a conversation. With real people. In real places. Starting today.",
    examples: [
      { target: 'He llegado a A2', native: 'I have reached A2' },
      { target: 'Sigo adelante', native: 'I keep going forward' },
      { target: 'El camino continúa — the journey continues', native: 'The journey continues' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the closing phrase to its meaning',
      pairs: [
        { left: 'He llegado', right: 'I have arrived' },
        { left: 'Sigo adelante', right: 'I keep going forward' },
        { left: 'El camino continúa', right: 'The journey continues' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You've finished 100 lessons. Which Spanish sentence captures the moment?",
      question: 'Your achievement in Spanish:',
      options: [
        { text: 'He aprendido español. He llegado. Sigo adelante.', correct: true },
        { text: 'No he aprendido nada', correct: false },
        { text: 'Estoy enojado', correct: false },
      ],
      explanation: "'He aprendido español.' (I have learned Spanish.) 'He llegado.' (I have arrived.) 'Sigo adelante.' (I keep going forward.) Three present-perfect sentences for your A2 moment.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I have arrived',
      correct: ['He llegado', 'he llegado', 'He llegado.', 'he llegado.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the journey statement',
      sentence: 'El camino _____ — sigo adelante.',
      options: ['continúa', 'termina', 'comienza'],
      correct: 'continúa',
      context: 'The journey continues — I keep going forward.',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'The journey continues'",
      words: ['El', 'camino', 'continúa.'],
      correct: ['El', 'camino', 'continúa.'],
      translation: 'The journey continues',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I keep going forward',
      correct: ['Sigo adelante', 'sigo adelante'],
    },
  ],

  rwenDialogue: {
    intro: "Final lesson. Final conversation. Rwen has one question — and it's the most important one.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Mi nombre es Rwen. Soy un camaleón — veo todos los colores de los idiomas. Te he visto durante todo este viaje. Ahora — quiero preguntarte una cosa importante: ¿quién eres ahora, al final del camino?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Soy un aprendiz del idioma. Aprendo español. Amo a Latinoamérica. He llegado — pero el camino continúa. Sigo adelante.', native: "I am a language learner. I learn Spanish. I love Latin America. I have arrived — but the journey continues. I keep going forward.", correct: true, feedback: "Five sentences. Identity, language, love, arrival, momentum. Your complete Spanish identity in one breath. Rwen has nothing left to teach — and everything left to celebrate." },
          { target: 'Soy estudiante', native: 'I am a student', correct: false, feedback: "Go deeper — who are you now? 'Soy un aprendiz del idioma. Amo a Latinoamérica. He llegado. El camino continúa.'" },
          { target: 'Estoy feliz', native: 'I am happy', correct: false, feedback: "True — and say more: 'Soy un aprendiz del idioma. He llegado a A2. Sigo adelante.' Complete your story." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "El camino continúa. You spoke your story — in Spanish. 100 lessons. 10 modules. From '¡Hola!' to refranes, from greetings to gratitude. The journey continues. Hasta pronto — until soon. Nos vemos.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Final recall. Everything began with this.',
    prompts: [
      { prompt: 'The journey continues', correct: ['El camino continúa', 'el camino continúa', 'El camino continua', 'el camino continua'] },
      { prompt: 'I keep going forward', correct: ['Sigo adelante', 'sigo adelante'] },
    ],
  },

  mission: {
    title: "Your A2 Mission — The Most Important One",
    task: "Speak Spanish with a real person today. Not practice — real. A friend, a community, a language exchange, a corner-shop owner. Use your Spanish, even imperfectly. Language only lives when it moves between people. El camino continúa.",
    rwenSignoff: "He llegado. Sigo adelante. Nos vemos pronto, aprendiz del idioma. We will see each other soon, language learner. ¡Que te vaya bonito — may it go beautifully for you, always.",
  },

  phase8: {
    scenario: "The closing scene of Rwendo. Late afternoon at your abuela's apartment in Cartagena — the same kitchen table from earlier lessons. She pours you a coffee, sits down across from you, and says only this: 'Cuéntame tu historia en español.' Tell me your story in Spanish. She waits. The whole journey — 100 lessons — sits in this moment.",
    rwenRole: "Abuela — ~78, the family wisdom-keeper, no longer correcting; she is listening as a Latin American grandmother hearing a stranger speak her language for the first time as their own. This is the closing rite of the curriculum. She wants to hear time, feeling, hope, and a refrán.",
    successCriteria: "User produces 5-7 sentences in Spanish that span TIME and FEELING: at least one PAST sentence (preterite or imperfect — 'cuando era niño/a', 'aprendí', 'llegué'), at least one EMOTION using estar (Estoy feliz / agradecido/a / emocionado/a — with correct gender ending), at least one HOPE construction ('Espero ver Latinoamérica', 'Quiero seguir aprendiendo'), AND closes with at least one refrán woven into the story — 'Más vale tarde que nunca', 'A caballo regalado no se le mira el diente', or 'El que mucho abarca poco aprieta'. Past + emotion + hope + refrán, then 'He llegado.' Language warrior closing form.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
