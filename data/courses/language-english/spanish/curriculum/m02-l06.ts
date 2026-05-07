import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-yes-no',
  module: 2,
  lesson: 6,
  title: 'Yes & No — Sí y No',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! 'Yes' y 'No' son dos palabras simples — pero el inglés espera que las acompañes con algo más, no las uses solas.",
    culturalNote: "En español 'sí' y 'no' funcionan solos sin sonar bruscos. En inglés un 'Yes' o 'No' pelado puede sonar cortante — sobre todo en preguntas formales. La fórmula completa: 'Yes, I am' / 'No, I don't'. Y 'maybe' funciona igual que en español: para esquivar comprometerse.",
  },

  chunks: [
    {
      id: 'yes',
      target: 'Yes',
      native: 'Sí',
      literal: undefined,
      emoji: '✅',
      phonetic: 'IES',
      audioRef: null,
    },
    {
      id: 'no',
      target: 'No',
      native: 'No',
      literal: undefined,
      emoji: '❌',
      phonetic: 'NOU',
      audioRef: null,
    },
    {
      id: 'maybe',
      target: 'Maybe',
      native: 'Tal vez / Quizás',
      literal: 'Puede-ser',
      emoji: '🤔',
      phonetic: 'MÉI-bi',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Short answers',
    explanation: "En inglés el 'Yes/No' suele venir con una mini-cláusula: 'Yes, I am' / 'No, I don't' / 'Yes, I do'. Esto suaviza la respuesta. Es como en español: a un '¿Vienes?' rara vez respondes solo 'Sí' — agregas 'Sí, claro' o 'Sí, voy'. El inglés hace lo mismo con su patrón propio.",
    examples: [
      { target: 'Yes, I do.',    native: 'Sí.' },
      { target: "No, I don't.", native: 'No.' },
      { target: "Maybe later.",   native: 'Tal vez más tarde.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Yes',    right: 'Sí' },
        { left: 'No',     right: 'No' },
        { left: 'Maybe',  right: 'Tal vez' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tal vez',
      correct: ['Maybe', 'maybe', 'Maybe.', 'maybe.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la respuesta corta',
      sentence: 'Yes, ____ am.',
      options: ['I', 'me', 'my'],
      correct: 'I',
      context: "En respuestas cortas en inglés se repite el sujeto: 'Yes, I am'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la respuesta',
      words: ['Yes', 'I', 'do'],
      correct: ['Yes', 'I', 'do'],
      translation: 'Sí (lo hago)',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tal vez más tarde',
      correct: ['Maybe later', 'Maybe later.', 'maybe later', 'maybe later.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la mejor respuesta',
      question: 'Te preguntan: "Are you over 18?" ¿Cómo respondes?',
      options: [
        { text: 'Yes, I am.',     correct: true },
        { text: 'Maybe.',          correct: false },
        { text: "I don't know.",  correct: false },
      ],
      explanation: '"Maybe" no aplica — sabes tu edad. La respuesta completa es "Yes, I am".',
    },
  ],

  rwenDialogue: {
    intro: 'Vas a comprar una botella de vino en una tienda en Texas. La cajera te pregunta tu edad.',
    lines: [
      { speaker: 'npc', target: "Are you over 21?", native: '¿Tienes más de 21?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes, I am.',     native: 'Sí.',                          correct: true,  feedback: 'Perfecto — respuesta corta completa, no solo "Yes".' },
          { target: 'Maybe.',          native: 'Tal vez.',                     correct: false, feedback: '"Maybe" no funciona aquí — sabes tu edad.' },
          { target: "I don't know.",  native: 'No sé.',                       correct: false, feedback: 'Quedaste mal — di "Yes, I am" si tienes la edad.' },
        ],
      },
      { speaker: 'npc', target: "Great. Can I see your ID?", native: 'Bien. ¿Me muestras tu identificación?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! "Yes, I am" suena natural en inglés — más completo que un "Yes" pelado.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Yes, I am (en inglés)', correct: ['Yes, I am', 'Yes I am', 'yes, i am', 'Yes, I am.'] },
      { prompt: "No, I don't (en inglés)", correct: ["No, I don't", "No I don't", "no, i don't", "No, I don't."] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica responder 'Yes, I am' / 'No, I don't' en lugar de solo 'Yes' o 'No'. Suena más completo en inglés.",
    rwenSignoff: 'Sí. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're buying wine at a liquor store in Houston. The cashier needs to verify your age and asks a few yes/no questions.",
    rwenRole: "Karen, 50, the cashier. Friendly but follows the rules — needs ID for liquor purchases. Speaks clear Texan English.",
    successCriteria: "User answers with short complete forms: 'Yes, I am' / 'No, I don't' (not just 'Yes' or 'No'). Uses 'Maybe' only when genuinely unsure.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
