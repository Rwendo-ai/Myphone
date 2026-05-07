import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-hello',
  module: 1,
  lesson: 1,
  title: 'Hello — Hola',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! En inglés, cuando saludas a alguien, empiezas con 'Hello'. Es la primera palabra que vas a usar — y la más universal.",
    culturalNote: "El inglés no es solo de Inglaterra. Lo hablan más de mil millones de personas — en EE.UU., Reino Unido, Australia, India, Filipinas. 'Hello' funciona en todos esos países, sin importar el acento. Y olvídate del 'usted/tú': en inglés moderno casi siempre se usa 'you'.",
  },

  chunks: [
    {
      id: 'hello',
      target: 'Hello',
      native: 'Hola',
      literal: undefined,
      emoji: '👋',
      phonetic: 'jé-LOU',
      audioRef: null,
    },
    {
      id: 'how_are_you',
      target: 'How are you?',
      native: '¿Cómo estás?',
      literal: 'Cómo estás-tú?',
      emoji: '👀',
      phonetic: 'jáo-AR-iú',
      audioRef: null,
    },
    {
      id: 'im_fine_thanks',
      target: "I'm fine, thanks.",
      native: 'Estoy bien, gracias.',
      literal: 'Yo-soy bien, gracias',
      emoji: '✨',
      phonetic: 'áim-FÁIN-zenks',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Greetings',
    explanation: "En inglés, para preguntar cómo está alguien, usas 'How are you?'. Y aquí viene algo cómodo: el inglés no distingue entre 'ser' y 'estar' como el español. Solo hay un verbo: 'to be'. Así que 'How are you?' cubre todo — cómo te sientes, cómo estás de salud, cómo va tu día. La respuesta automática casi siempre es 'I'm fine, thanks.', incluso si el día está pesado. Es una fórmula social, no una pregunta médica.",
    examples: [
      { target: 'Hello',        native: 'Hola' },
      { target: 'Hi',           native: 'Hola (informal)' },
      { target: 'How are you?', native: '¿Cómo estás?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las palabras en inglés con su traducción en español',
      pairs: [
        { left: 'Hello',         right: 'Hola' },
        { left: 'How are you?',  right: '¿Cómo estás?' },
        { left: "I'm fine",      right: 'Estoy bien' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Hola',
      correct: ['Hello', 'hello', 'Hi', 'hi'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Cómo estás?',
      correct: ['How are you?', 'how are you?', 'How are you', 'how are you'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa el saludo',
      sentence: 'Hello, ____ are you?',
      options: ['how', 'who', 'what'],
      correct: 'how',
      context: 'Estás saludando a alguien por primera vez en una clase de inglés.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena las palabras para formar la respuesta',
      words: ["I'm", 'fine', 'thanks'],
      correct: ["I'm", 'fine', 'thanks'],
      translation: 'Estoy bien, gracias',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la respuesta correcta',
      question: 'Alguien te dice "How are you?" en una llamada de trabajo. ¿Qué respondes?',
      options: [
        { text: "I'm fine, thanks.", correct: true },
        { text: 'Hello.',             correct: false },
        { text: 'My name is...',      correct: false },
      ],
      explanation: "'I'm fine, thanks.' es la respuesta estándar. Funciona en todos los contextos.",
    },
  ],

  rwenDialogue: {
    intro: 'Estás en tu primer día de una clase de inglés en Los Ángeles. Tu compañera te saluda en inglés.',
    lines: [
      { speaker: 'npc',  target: 'Hello!', native: '¡Hola!' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hello, how are you?', native: 'Hola, ¿cómo estás?',          correct: true,  feedback: 'Perfecto — devolviste el saludo y abriste la conversación con una pregunta. Eso es lo que se espera en inglés.' },
          { target: 'Hi.',                  native: 'Hola.',                        correct: false, feedback: 'Sirve, pero es muy corto. Agrega "How are you?" para que la conversación fluya.' },
          { target: 'Bien.',                native: 'Bien.',                        correct: false, feedback: 'Esa es la respuesta — pero todavía no te han preguntado nada. Devuelve el saludo primero.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Lo lograste! Empezaste como un nativo — saludo + pregunta de cortesía. Es la fórmula que vas a usar miles de veces.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Hello (en inglés)', correct: ['Hello', 'hello', 'Hi', 'hi'] },
      { prompt: 'How are you? (en inglés)', correct: ['How are you?', 'How are you', 'how are you?', 'how are you'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Saluda a alguien hoy en inglés con 'Hello, how are you?' — aunque sea a tu reflejo en el espejo, o silenciosamente a tu jefe. Cuenta igual.",
    rwenSignoff: 'Mañana hablamos. ¡Que tengas buen día!',
  },

  phase8: {
    scenario: "It's your first day at an ESL class in Los Angeles. A classmate sits next to you and starts a quick first-meeting chat in English. Greet them and exchange a couple of lines.",
    rwenRole: "Ana, 28, also a Spanish-speaking student in your ESL class — but she's been there a month longer. Warm, encouraging, speaks slowly so you can follow.",
    successCriteria: "User opens with 'Hello' or 'Hi', responds appropriately to 'How are you?' with 'I'm fine, thanks' (or similar), and asks the question back at least once.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
