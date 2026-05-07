import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-please',
  module: 2,
  lesson: 1,
  title: 'Please — Por favor',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! El Módulo 2 son las palabras de supervivencia — las que salvan cuando estás perdido o no entiendes. Empezamos con 'Please', 'Excuse me' y 'Sorry'.",
    culturalNote: "En español 'por favor' a veces se siente exagerado entre confianza ('pásame la sal por favor' suena formal). En inglés 'please' es estándar — se usa para todo, incluso pedir un café. Si lo omites, suenas brusco. Para el oído anglo, un 'Coffee.' sin 'please' parece orden de jefe; 'Coffee, please.' es lo normal.",
  },

  chunks: [
    {
      id: 'please',
      target: 'Please',
      native: 'Por favor',
      literal: undefined,
      emoji: '🙏',
      phonetic: 'PLIS',
      audioRef: null,
    },
    {
      id: 'excuse_me',
      target: 'Excuse me',
      native: 'Disculpe / Permiso',
      literal: 'Excúsame',
      emoji: '✋',
      phonetic: 'eks-KIÚS-mi',
      audioRef: null,
    },
    {
      id: 'sorry',
      target: 'Sorry',
      native: 'Perdón / Lo siento',
      literal: 'Lo-siento',
      emoji: '😔',
      phonetic: 'SO-ri',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Politeness markers',
    explanation: "Tres palabras con tres trabajos distintos: 'Please' acompaña una petición. 'Excuse me' inicia una conversación o pide pasar. 'Sorry' se disculpa por un error. En español a veces todas se juntan en 'perdón/disculpe' — en inglés mejor distinguirlas.",
    examples: [
      { target: 'A coffee, please.',           native: 'Un café, por favor.' },
      { target: 'Excuse me, where is the door?', native: 'Disculpe, ¿dónde está la puerta?' },
      { target: "Sorry, I'm late.",             native: 'Perdón, llegué tarde.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las palabras de cortesía',
      pairs: [
        { left: 'Please',     right: 'Por favor' },
        { left: 'Excuse me',  right: 'Disculpe' },
        { left: 'Sorry',      right: 'Perdón' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — pidiendo un café en un café de LA',
      prompt: 'Un café, por favor.',
      correct: ['A coffee, please.', 'A coffee please.', 'Coffee, please.', 'Coffee please.', 'a coffee, please.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — quieres pasar al lado de alguien',
      sentence: '____, can I pass?',
      options: ['Please', 'Excuse me', 'Sorry'],
      correct: 'Excuse me',
      context: "En inglés, 'Excuse me' es para abrir paso. 'Sorry' es solo cuando hiciste algo mal.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena las palabras — pidiendo perdón por llegar tarde',
      words: ['Sorry', 'I', 'am', 'late'],
      correct: ['Sorry', 'I', 'am', 'late'],
      translation: 'Perdón, llegué tarde',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Disculpe',
      correct: ['Excuse me', 'excuse me', 'Excuse me.', 'excuse me.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: 'Entras a la oficina de un compañero pero está al teléfono. ¿Qué dices para que te vea?',
      options: [
        { text: 'Excuse me.', correct: true },
        { text: 'Sorry.',     correct: false },
        { text: 'Please.',    correct: false },
      ],
      explanation: "'Excuse me' es para llamar la atención. 'Sorry' es solo cuando metiste la pata.",
    },
  ],

  rwenDialogue: {
    intro: 'Entras a un Starbucks en Los Ángeles. El barista habla solo inglés. Pídele tu café.',
    lines: [
      { speaker: 'npc', target: 'Hi, what can I get you?', native: 'Hola, ¿qué te sirvo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'A coffee, please.',          native: 'Un café, por favor.',     correct: true,  feedback: 'Perfecto — el "please" hizo tu pedido cortés.' },
          { target: 'Coffee.',                     native: 'Café.',                    correct: false, feedback: 'Suena a orden — agrega "please" para que sea petición.' },
          { target: 'Sorry, a coffee.',            native: 'Perdón, un café.',         correct: false, feedback: 'No hiciste nada mal — usa "please", no "sorry".' },
        ],
      },
      { speaker: 'npc', target: 'Coming right up.', native: 'Ya te lo preparo.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! "Please" es más fácil que "por favor" — y se usa todo el tiempo en inglés.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Please (en inglés)',    correct: ['Please', 'please', 'Please.', 'please.'] },
      { prompt: 'Excuse me (en inglés)', correct: ['Excuse me', 'excuse me', 'Excuse me.', 'excuse me.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Usa 'please' una vez hoy en inglés — aunque sea pidiéndole agua a tu pareja. Mira si te suena natural.",
    rwenSignoff: 'Nos vemos mañana — aprenderemos a dar las gracias.',
  },

  phase8: {
    scenario: "You walk into a busy Starbucks in central Los Angeles. The barista is English-speaking and slightly rushed. Order a coffee politely, using 'please' and 'excuse me' or 'sorry' if needed.",
    rwenRole: "Mike, 24, the barista. Friendly but efficient — a queue is forming behind you. Speaks fast California English.",
    successCriteria: "User uses 'please' when ordering, uses 'excuse me' to get attention OR 'sorry' if they need to apologise (e.g. for changing their order). Doesn't bark a one-word order.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
