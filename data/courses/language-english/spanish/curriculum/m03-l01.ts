import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-i-am',
  module: 3,
  lesson: 1,
  title: 'I am... — Soy...',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! 'I am' es la base de cualquier presentación. En inglés solo hay un verbo para 'ser/estar': 'to be'. Una palabra para todo.",
    culturalNote: "Para hispanohablantes esto es liberador. En español pasamos años decidiendo: '¿es soy o estoy?'. En inglés solo hay 'I am'. 'I am tired' = 'estoy cansado'. 'I am Mexican' = 'soy mexicano'. 'I am a student' = 'soy estudiante'. La misma palabra cubre estado pasajero y identidad permanente. Un dolor de cabeza menos.",
  },

  chunks: [
    {
      id: 'i_am',
      target: 'I am',
      native: 'Soy / Estoy',
      literal: 'Yo soy/estoy',
      emoji: '👤',
      phonetic: 'AI-am',
      audioRef: null,
    },
    {
      id: 'im_a_student',
      target: "I'm a student",
      native: 'Soy estudiante',
      literal: 'Yo-soy un estudiante',
      emoji: '🎓',
      phonetic: 'aim-a-STIÚ-dent',
      audioRef: null,
    },
    {
      id: 'im_from_mexico',
      target: "I'm from Mexico",
      native: 'Soy de México',
      literal: 'Yo-soy de México',
      emoji: '🌍',
      phonetic: 'aim-FROM-MEK-si-cou',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"I am" / "I\'m"',
    explanation: "'I am' = 'soy' Y 'estoy'. Sin distinguir. Y aquí va una pista: en inglés un sustantivo casi siempre necesita 'a' (un/una): 'I'm a student' (no 'I'm student'). Sin 'a' suena cortante o gramaticalmente roto.",
    examples: [
      { target: "I am Sofía",          native: 'Soy Sofía' },
      { target: "I'm a student",        native: 'Soy estudiante' },
      { target: "I'm from Argentina",   native: 'Soy de Argentina' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: "I am",            right: 'Soy / Estoy' },
        { left: "I'm a student",   right: 'Soy estudiante' },
        { left: "I'm from Mexico", right: 'Soy de México' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Soy Sofía',
      correct: ['I am Sofía', 'I am Sofia', "I'm Sofía", "I'm Sofia", "i'm Sofía"],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Soy estudiante',
      correct: ["I'm a student", "I am a student", "i'm a student", "i am a student"],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con el artículo correcto',
      sentence: "I'm ____ teacher.",
      options: ['a', 'the', '—'],
      correct: 'a',
      context: 'En inglés, los oficios casi siempre llevan "a" (un/una).',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la presentación',
      words: ["I'm", 'a', 'student', 'from', 'Mexico'],
      correct: ["I'm", 'a', 'student', 'from', 'Mexico'],
      translation: 'Soy estudiante de México',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cómo dices "Soy mexicana" en inglés?',
      options: [
        { text: "I'm Mexican.",    correct: true },
        { text: 'I Mexican.',      correct: false },
        { text: 'I have Mexican.', correct: false },
      ],
      explanation: 'Necesitas "am" entre "I" y el adjetivo. "I Mexican" no es inglés correcto.',
    },
  ],

  rwenDialogue: {
    intro: 'Estás en una clase de inglés en Los Ángeles. La maestra te pide presentarte ante el grupo.',
    lines: [
      { speaker: 'npc', target: "Welcome! Please tell us about yourself.", native: '¡Bienvenido! Cuéntanos un poco de ti.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi, I'm Diego. I'm a student from Mexico.", native: 'Hola, soy Diego. Soy estudiante de México.', correct: true,  feedback: 'Perfecto — diste nombre, oficio, origen, todo en una frase.' },
          { target: "Diego. Student. Mexico.",                    native: 'Diego. Estudiante. México.',                    correct: false, feedback: 'Diste la información pero suena duro. Agrega "I\'m a..." para sonar natural.' },
          { target: "I Diego from Mexico.",                       native: 'Yo Diego de México.',                            correct: false, feedback: 'Olvidaste "am" — en inglés es obligatorio. "I am Diego" o "I\'m Diego".' },
        ],
      },
      { speaker: 'npc', target: "Lovely to meet you, Diego.", native: 'Mucho gusto, Diego.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Lo lograste! Una sola frase con nombre, oficio y origen — perfecto para clases de ESL, entrevistas, networking.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: "I'm a student (en inglés)",  correct: ["I'm a student", "I am a student", "i'm a student", "I'm a student."] },
      { prompt: "I'm from Mexico (en inglés)", correct: ["I'm from Mexico", "I am from Mexico", "i'm from Mexico", "I'm from Mexico."] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica tu presentación: 'Hi, I'm (nombre). I'm a (oficio) from (país).' Tres datos, una sola frase.",
    rwenSignoff: 'Soy Rwen. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're at a first-day ESL class in Los Angeles. The teacher asks each student to introduce themselves to the group in English. Give your full intro in one go.",
    rwenRole: "Ms Johnson, 45, your ESL teacher — encouraging, patient, asks gentle follow-ups. Speaks slow clear American English.",
    successCriteria: "User uses 'I'm' (not 'I' alone), includes name + occupation/role + country, uses 'a' before the occupation noun ('I'm a student', not 'I'm student').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
