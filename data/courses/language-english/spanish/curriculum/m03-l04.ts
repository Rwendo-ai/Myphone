import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-family-status',
  module: 3,
  lesson: 4,
  title: 'Married? Children? — ¿Casado? ¿Hijos?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Las preguntas familiares — '¿Estás casado?' / '¿Tienes hijos?' — son temas comunes de small talk. La trampa: en español usas 'tener hijos', en inglés usas 'have children' (más fácil) PERO 'I'm married', no 'I have married'.",
    culturalNote: "En Latinoamérica preguntar por familia, hijos, estado civil al conocer a alguien es totalmente normal — incluso esperado. En EE.UU. y UK ese terreno es más privado, sobre todo en entornos de trabajo. Si tu jefe te pregunta, contesta natural; si tú preguntas a un colega anglo en la primera semana, espera reservas. En el ámbito hispano-anglo (Miami, LA, agencias bilingües) la línea es más blanda.",
  },

  chunks: [
    {
      id: 'are_you_married',
      target: 'Are you married?',
      native: '¿Estás casado/a?',
      literal: '¿Eres-tú casado?',
      emoji: '💍',
      phonetic: 'ar-iú-MA-rid',
      audioRef: null,
    },
    {
      id: 'i_have_two_children',
      target: 'I have two children',
      native: 'Tengo dos hijos',
      literal: 'Yo-tengo dos hijos',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ai-JAV-tu-CHIL-dren',
      audioRef: null,
    },
    {
      id: 'im_single',
      target: "I'm single",
      native: 'Soy soltero/a',
      literal: 'Yo-soy soltero',
      emoji: '🧑',
      phonetic: 'aim-SIN-gel',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Marital status: "to be" / Children: "to have"',
    explanation: "Un cambio de mentalidad importante: estado civil = 'to be' ('I'm married' / 'I'm single'). Hijos = 'to have' ('I have two children'). El error común: 'I have married'. NO. La boda es algo que pasó; ahora 'eres' casado, no 'tienes' casado.",
    examples: [
      { target: 'Are you married?',         native: '¿Estás casado?' },
      { target: 'Do you have children?',     native: '¿Tienes hijos?' },
      { target: "I'm single",                 native: 'Soy soltero' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Are you married?',     right: '¿Estás casado?' },
        { left: 'Do you have children?', right: '¿Tienes hijos?' },
        { left: "I'm single",            right: 'Soy soltero' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Tienes hijos?',
      correct: ['Do you have children?', 'do you have children?', 'Do you have children', 'do you have kids?'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (cuidado con el verbo)',
      prompt: 'Estoy casado',
      correct: ["I'm married", "I am married", "i'm married", "I'm married."],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa el verbo correcto',
      sentence: "I ____ two children.",
      options: ['have', 'am', 'is'],
      correct: 'have',
      context: 'Para hijos es "have". Para casado/soltero es "am".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la respuesta',
      words: ["I'm", 'married', 'and', 'I', 'have', 'two', 'children'],
      correct: ["I'm", 'married', 'and', 'I', 'have', 'two', 'children'],
      translation: 'Estoy casado y tengo dos hijos',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cómo dices "Estoy casada" en inglés?',
      options: [
        { text: "I'm married.",      correct: true },
        { text: 'I have married.',    correct: false },
        { text: 'I married.',         correct: false },
      ],
      explanation: '"I have married" suena raro. La forma correcta es "I\'m married" — estás casado, no lo tienes.',
    },
  ],

  rwenDialogue: {
    intro: 'En una cena en casa de tu jefe en Miami. Está intentando conocer al equipo más allá de la oficina.',
    lines: [
      { speaker: 'npc', target: "So, are you married? Any children?", native: 'Entonces, ¿estás casado? ¿Hijos?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm married, and I have two children.", native: 'Estoy casado y tengo dos hijos.', correct: true,  feedback: 'Perfecto — respondiste las dos preguntas en una frase, con los verbos correctos.' },
          { target: "Yes, two.",                                native: 'Sí, dos.',                         correct: false, feedback: 'Demasiado corto — agrega "I\'m married" y "I have two children" para que suene completo.' },
          { target: "I have married.",                          native: 'Tengo casado.',                     correct: false, feedback: 'Trampa de hispanohablante — es "I\'m married", NO "I have married".' },
        ],
      },
      { speaker: 'npc', target: "How lovely. How old are they?", native: 'Qué lindo. ¿Cuántos años tienen?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Mezclaste "to be" (casado) y "to have" (hijos) — dominio nivel intermedio.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: "I'm married (en inglés)",         correct: ["I'm married", "I am married", "i'm married", "I'm married."] },
      { prompt: 'I have two children (en inglés)', correct: ['I have two children', 'I have two children.', 'i have two children', 'I have 2 children'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica decir tu estado civil en inglés. Recuerda: 'I'm married' o 'I'm single'. NO 'I have married'.",
    rwenSignoff: 'Familia importa. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're at a casual dinner party at your boss's house in Miami. They're trying to get to know the team beyond the office. They ask polite personal questions about family.",
    rwenRole: "Linda, 50, your boss. Warm, curious, but professional — won't pry. Speaks clear American English.",
    successCriteria: "User uses 'I'm married' / 'I'm single' (not 'I have married'), uses 'I have X children' for kids. Comfortable with the personal but polite tone.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
