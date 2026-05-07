import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-asking-them',
  module: 3,
  lesson: 9,
  title: 'Asking about them — Preguntar sobre ellos',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Una conversación viva no es solo hablar de ti — también es preguntar. 'Tell me about yourself' / 'What's your story?' / 'Where did you grow up?' son las llaves.",
    culturalNote: "En entrevistas en EE.UU., 'Tell me about yourself' es la pregunta de apertura clásica. Los anglos esperan una respuesta de 1-2 minutos: nombre, oficio, trayectoria, qué buscas. Para hispanohablantes la trampa es ir muy largo (con familia, lugar de nacimiento, anécdotas). Mantenlo profesional y directo. Y ojo: 'Where did you grow up?' usa pasado — no 'where you grow up'.",
  },

  chunks: [
    {
      id: 'tell_me_about_yourself',
      target: 'Tell me about yourself',
      native: 'Cuéntame de ti',
      literal: 'Dime sobre ti-mismo',
      emoji: '💬',
      phonetic: 'tel-mi-a-BÁUT-iór-SELF',
      audioRef: null,
    },
    {
      id: 'whats_your_story',
      target: "What's your story?",
      native: '¿Cuál es tu historia?',
      literal: '¿Cuál es tu historia?',
      emoji: '📖',
      phonetic: 'uats-iór-STO-ri',
      audioRef: null,
    },
    {
      id: 'where_did_you_grow_up',
      target: 'Where did you grow up?',
      native: '¿Dónde te criaste?',
      literal: '¿Dónde hiciste-tú crecer?',
      emoji: '🌱',
      phonetic: 'uér-did-iú-GRÓU-AP',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past tense questions: "Where did you ...?"',
    explanation: "Para preguntas en pasado: 'Where did you + (verbo en infinitivo)?'. 'Where did you grow up?' (no 'Where you grew up' ni 'Where you grow up'). El 'did' empuja todo el resto al infinitivo. Si te trabas, la frase sin 'did' suena gramaticalmente rota a un anglo.",
    examples: [
      { target: 'Tell me about yourself',     native: 'Cuéntame de ti' },
      { target: "What's your story?",          native: '¿Cuál es tu historia?' },
      { target: 'Where did you grow up?',      native: '¿Dónde te criaste?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Tell me about yourself', right: 'Cuéntame de ti' },
        { left: "What's your story?",      right: '¿Cuál es tu historia?' },
        { left: 'Where did you grow up?',  right: '¿Dónde te criaste?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Cuéntame de ti',
      correct: ['Tell me about yourself', 'Tell me about yourself.', 'tell me about yourself'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (cuidado con el "did")',
      prompt: '¿Dónde te criaste?',
      correct: ['Where did you grow up?', 'where did you grow up?', 'Where did you grow up'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la pregunta en pasado',
      sentence: 'Where ____ you grow up?',
      options: ['did', 'do', 'are'],
      correct: 'did',
      context: 'Para preguntas en pasado en inglés se usa "did".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la pregunta',
      words: ['Where', 'did', 'you', 'grow', 'up'],
      correct: ['Where', 'did', 'you', 'grow', 'up'],
      translation: '¿Dónde te criaste?',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cuál es la pregunta correcta?',
      options: [
        { text: 'Where did you grow up?', correct: true },
        { text: 'Where you grew up?',      correct: false },
        { text: 'Where you grow up?',      correct: false },
      ],
      explanation: 'En preguntas en pasado se usa "did + verbo en infinitivo": "Where did you grow up?".',
    },
  ],

  rwenDialogue: {
    intro: 'En una mesa redonda de un evento profesional en Buenos Aires. Tu interlocutor terminó de hablar — te toca devolver la pregunta.',
    lines: [
      { speaker: 'npc', target: "So that's me. And you?", native: 'Bueno, ese soy yo. ¿Y tú?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Tell me a bit more about yourself first — where did you grow up?", native: 'Cuéntame un poco más de ti primero — ¿dónde te criaste?', correct: true,  feedback: 'Perfecto — devolviste la pregunta y mostraste interés genuino.' },
          { target: "Me too.",                                                            native: 'Yo también.',                                                  correct: false, feedback: 'Demasiado corto — sin pregunta, la conversación se muere.' },
          { target: "Where you grow up?",                                                 native: '¿Dónde creces?',                                               correct: false, feedback: 'Olvidaste "did" — es "Where DID you grow up?".' },
        ],
      },
      { speaker: 'npc', target: "Oh — I grew up in Buenos Aires, actually.", native: 'Ah — me crié en Buenos Aires, de hecho.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Manejaste el "did" en la pregunta — la conversación está viva porque preguntaste.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Tell me about yourself (en inglés)', correct: ['Tell me about yourself', 'Tell me about yourself.', 'tell me about yourself'] },
      { prompt: 'Where did you grow up? (en inglés)', correct: ['Where did you grow up?', 'where did you grow up?', 'Where did you grow up'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica preguntas con 'did': 'Where did you grow up?' / 'What did you study?' / 'Where did you work?'. La regla: did + verbo en infinitivo.",
    rwenSignoff: '¿Cuál es tu historia? Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're at a roundtable event in Buenos Aires for Latin American professionals. Your conversation partner has just shared their story — your turn to ask them follow-ups before sharing yours.",
    rwenRole: "Andrea, 35, an Argentinian product designer who's worked with US firms. Open, generous with stories, asks follow-ups in clear English.",
    successCriteria: "User asks at least one past-tense question with 'did' ('Where did you grow up?', 'What did you study?'), shows genuine interest, doesn't dominate. The conversation is mutual.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
