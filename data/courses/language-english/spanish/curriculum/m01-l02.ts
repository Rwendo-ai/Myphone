import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-hi-bye',
  module: 1,
  lesson: 2,
  title: 'Hi & Bye — Casual greetings',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Hoy aprendemos las palabras de amigos: 'Hi' y 'Bye'. Son las que usas con compañeros de trabajo, en el café, con conocidos — no en una entrevista.",
    culturalNote: "En español tenemos 'hola/chao' que funcionan casi en cualquier registro. En inglés hay un corte más claro: 'Hi' y 'Bye' son casuales, 'Hello' y 'Goodbye' son neutrales. Si en tu primer día en un trabajo en EE.UU. dices 'Hi' al gerente, está bien — pero en una entrevista mejor 'Hello'.",
  },

  chunks: [
    {
      id: 'hi',
      target: 'Hi',
      native: 'Hola (informal)',
      literal: undefined,
      emoji: '👋',
      phonetic: 'JÁI',
      audioRef: null,
    },
    {
      id: 'bye',
      target: 'Bye',
      native: 'Chao',
      literal: 'Adiós (corto)',
      emoji: '👋',
      phonetic: 'BÁI',
      audioRef: null,
    },
    {
      id: 'see_you_later',
      target: 'See you later',
      native: 'Nos vemos',
      literal: 'Te veo después',
      emoji: '🔁',
      phonetic: 'SI-iú-LÉI-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Casual register',
    explanation: "El inglés tiene dos registros claros: amigable ('Hi' / 'Bye') y neutral-formal ('Hello' / 'Goodbye'). Como hispanohablante esto te ayuda — en español jugamos con tono y diminutivos para marcar cercanía, en inglés cambias la palabra completa. Con compañeros, vecinos, en cafés: 'Hi' y 'Bye'. Con un cliente nuevo o en un correo de trabajo: 'Hello' / 'Goodbye'.",
    examples: [
      { target: 'Hi',             native: 'Hola (informal)' },
      { target: 'Bye',            native: 'Chao' },
      { target: 'See you later',  native: 'Nos vemos' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Hi',             right: 'Hola (informal)' },
        { left: 'Bye',            right: 'Chao' },
        { left: 'See you later',  right: 'Nos vemos' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Nos vemos',
      correct: ['See you later', 'see you later', 'See you later.', 'see you later.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la despedida casual',
      sentence: '____, see you later!',
      options: ['Hi', 'Hello', 'Bye'],
      correct: 'Bye',
      context: 'Te estás yendo del café después de tomar un café con un amigo.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena las palabras',
      words: ['Hi', 'see', 'you', 'later'],
      correct: ['Hi', 'see', 'you', 'later'],
      translation: 'Hola, nos vemos',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Hola (informal)',
      correct: ['Hi', 'hi', 'Hi.', 'hi.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: 'Terminaste un café con tu compañera de la oficina. Te vas. ¿Qué le dices?',
      options: [
        { text: 'Bye, see you later!', correct: true },
        { text: 'Hello, how are you?', correct: false },
        { text: 'Good morning.',       correct: false },
      ],
      explanation: "'Bye' y 'See you later' son las palabras de despedida casual entre amigos o compañeros.",
    },
  ],

  rwenDialogue: {
    intro: 'Te encontraste con una compañera del call center en un café en Miami. Ya están terminando.',
    lines: [
      { speaker: 'npc', target: 'Hi! How are you?', native: '¡Hola! ¿Cómo estás?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi, I'm fine. See you later!", native: 'Hola, estoy bien. ¡Nos vemos!', correct: true,  feedback: 'Lo lograste — respondiste y dejaste abierta la próxima vez.' },
          { target: 'Good morning, sir.',             native: 'Buenos días, señor.',           correct: false, feedback: 'Demasiado formal — son compañeras, no necesitas tanto.' },
        ],
      },
      { speaker: 'npc', target: 'Bye!', native: '¡Chao!' },
      {
        speaker: 'rwen',
        rwenLine: '¡Lo lograste! Manejaste el registro casual — el que vas a usar todos los días en el trabajo.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Hi (en inglés)',            correct: ['Hi', 'hi'] },
      { prompt: 'See you later (en inglés)', correct: ['See you later', 'see you later', 'See you later.', 'see you later.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Usa 'Hi' con alguien hoy — aunque la conversación siga en español, deja entrar el 'Hi' al inicio. Mira qué tan natural se siente.",
    rwenSignoff: '¡Nos vemos mañana!',
  },

  phase8: {
    scenario: "You bump into a co-worker at the coffee machine in your bilingual call centre in Miami. Casual catch-up — say hi, exchange a quick line, and say bye when you head back to your desk.",
    rwenRole: "Carlos, 30, your bilingual co-worker. Speaks English with native-Miami fluency, slips into Spanglish sometimes. Warm, easy-going.",
    successCriteria: "User opens with 'Hi', uses 'See you later' or 'Bye' to close, and stays in casual register (no 'Good morning sir' or formal phrasing).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
