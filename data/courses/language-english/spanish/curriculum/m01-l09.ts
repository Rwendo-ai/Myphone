import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-goodbye',
  module: 1,
  lesson: 9,
  title: 'Goodbye — Adiós y cuídate',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Despedirse en inglés tiene varias palabras. 'Goodbye' es la formal, 'See you tomorrow' si vas a verlos al día siguiente, 'Take care' para mostrar afecto.",
    culturalNote: "En español decimos 'cuídate' con familiares y amigos cercanos. 'Take care' en inglés tiene exactamente ese tono — caluroso pero no exagerado. Es perfecto para un compañero de oficina o un amigo. Fíjate en EE.UU. y UK: la gente se despide con 'Take care' después de una conversación corta, no necesita ser íntima.",
  },

  chunks: [
    {
      id: 'goodbye',
      target: 'Goodbye',
      native: 'Adiós',
      literal: undefined,
      emoji: '👋',
      phonetic: 'gud-BÁI',
      audioRef: null,
    },
    {
      id: 'see_you_tomorrow',
      target: 'See you tomorrow',
      native: 'Nos vemos mañana',
      literal: 'Te-veo mañana',
      emoji: '📅',
      phonetic: 'SI-iú-tu-MO-rou',
      audioRef: null,
    },
    {
      id: 'take_care',
      target: 'Take care',
      native: 'Cuídate',
      literal: 'Toma cuidado',
      emoji: '💚',
      phonetic: 'téik-KÉR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Imperative goodbye',
    explanation: "'Take care' es un imperativo — literalmente 'toma cuidado' — pero su tono es cálido, no autoritario. Es exactamente como nuestro 'cuídate'. 'See you tomorrow' es práctico: deja claro cuándo se vuelven a ver. Combinarlas suena natural: 'Bye! See you tomorrow. Take care.'",
    examples: [
      { target: 'Goodbye',          native: 'Adiós' },
      { target: 'See you tomorrow', native: 'Nos vemos mañana' },
      { target: 'Take care',        native: 'Cuídate' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las despedidas',
      pairs: [
        { left: 'Goodbye',           right: 'Adiós' },
        { left: 'See you tomorrow',  right: 'Nos vemos mañana' },
        { left: 'Take care',         right: 'Cuídate' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Nos vemos mañana',
      correct: ['See you tomorrow', 'see you tomorrow', 'See you tomorrow.', 'see you tomorrow.'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Cuídate',
      correct: ['Take care', 'take care', 'Take care.', 'take care.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la despedida',
      sentence: '____ you tomorrow!',
      options: ['See', 'Meet', 'Know'],
      correct: 'See',
      context: 'Te vas para tu casa — los volverás a ver mañana en la oficina.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la despedida completa',
      words: ['Goodbye', 'and', 'take', 'care'],
      correct: ['Goodbye', 'and', 'take', 'care'],
      translation: 'Adiós y cuídate',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: 'Son las 5pm. Apagas la computadora y te vas. ¿Qué le dices a tus compañeros?',
      options: [
        { text: 'Goodbye! See you tomorrow.',  correct: true },
        { text: 'Hi! How are you?',             correct: false },
        { text: 'Good morning.',                correct: false },
      ],
      explanation: "Al despedirse al final del día se usa 'Goodbye' o 'See you tomorrow'.",
    },
  ],

  rwenDialogue: {
    intro: 'Son las 5pm — terminaste tu turno en el call center bilingüe en Buenos Aires. Te vas. Una compañera te alcanza en la salida.',
    lines: [
      { speaker: 'npc', target: "Hey, you're heading out? Goodbye!", native: '¿Ya te vas? ¡Chao!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Goodbye! See you tomorrow. Take care.", native: 'Adiós. Nos vemos mañana. Cuídate.', correct: true,  feedback: 'Perfecto — tres frases, todas con calor humano. Bien hecho.' },
          { target: 'Good morning!',                          native: '¡Buenos días!',                       correct: false, feedback: 'Es de tarde y te vas — eso es despedida, no saludo.' },
          { target: "What's your name?",                      native: '¿Cómo te llamas?',                    correct: false, feedback: 'Trabajan juntos — preguntar el nombre es raro a esta altura.' },
        ],
      },
      { speaker: 'npc', target: "Take care! See you tomorrow.", native: '¡Cuídate! Nos vemos mañana.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Cerraste el día con calidez — el "take care" es exactamente nuestro "cuídate".',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Goodbye (en inglés)',        correct: ['Goodbye', 'goodbye', 'Goodbye.', 'goodbye.'] },
      { prompt: 'See you tomorrow (en inglés)', correct: ['See you tomorrow', 'see you tomorrow', 'See you tomorrow.', 'see you tomorrow.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Esta noche al despedirte de alguien, intenta cerrar en inglés con 'Goodbye' o 'Take care'.",
    rwenSignoff: 'Adiós. Nos vemos mañana.',
  },

  phase8: {
    scenario: "It's 5pm and you're packing up to leave the bilingual call centre in Buenos Aires. A co-worker catches you at the door — exchange a proper goodbye in English.",
    rwenRole: "Tinashe, 30, your work neighbour from the next desk. Friendly, casual-professional, sees you every weekday.",
    successCriteria: "User uses 'Goodbye' or 'See you tomorrow', adds 'Take care' or similar warm closing, and stays in casual-professional register (not stiff-formal, not like meeting a stranger).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
