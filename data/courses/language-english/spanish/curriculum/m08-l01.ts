import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-be-have',
  module: 8,
  lesson: 1,
  title: '"To be" & "to have" — Yo soy / Yo tengo',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "El Módulo 8 entra al corazón del inglés diario: los verbos. Empezamos con los dos más usados — 'to be' y 'to have'. Sin estos no construyes ni una frase.",
    culturalNote: "El gran reto para hispanohablantes: en español tenemos DOS verbos para 'to be' — 'ser' (permanente: soy ingeniero) y 'estar' (temporal: estoy cansado). En inglés es UN solo verbo para los dos: 'I am'. La duda 'ser o estar' desaparece en inglés. Pero atención: el inglés conjuga 'to be' irregular — 'I am, you are, he is, we are, they are'. No es 'I be' o 'he be'. La conjugación cambia con la persona, igual que en español.",
  },

  chunks: [
    {
      id: 'i_am_happy',
      target: 'I am happy.',
      native: 'Estoy feliz / Soy feliz.',
      literal: 'I am happy',
      emoji: '😊',
      phonetic: 'ay-AM-HAP-ee',
      audioRef: null,
    },
    {
      id: 'you_have_a_friend',
      target: 'You have a friend.',
      native: 'Tienes un amigo.',
      literal: 'You have a friend',
      emoji: '🤝',
      phonetic: 'yoo-HAV-uh-FREND',
      audioRef: null,
    },
    {
      id: 'they_are_tired',
      target: 'They are tired.',
      native: 'Están cansados.',
      literal: 'They are tired',
      emoji: '😩',
      phonetic: 'thay-AHR-TY-erd',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Conjugating to be / to have',
    explanation: "'To be' (ser/estar): I am, you are, he/she/it is, we are, they are. 'To have' (tener): I have, you have, he/she/it has, we have, they have. La forma 'has' es solo para 3a persona singular (he/she/it). En contracciones: I'm, you're, he's, we're, they're. Los anglos usan contracciones todo el tiempo en habla casual.",
    examples: [
      { target: "She is my sister",        native: 'Ella es mi hermana' },
      { target: 'He has two children',     native: 'Él tiene dos hijos' },
      { target: "We're in Miami",           native: 'Estamos en Miami' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja la conjugación correcta',
      pairs: [
        { left: 'I',         right: 'am' },
        { left: 'You',       right: 'are' },
        { left: 'He / She',  right: 'is' },
        { left: 'They / We', right: 'are' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con la forma correcta de "to be"',
      sentence: 'She ____ my sister.',
      options: ['am', 'is', 'are'],
      correct: 'is',
      context: '3a persona singular (she/he/it) usa "is".',
    },
    {
      type: 'multiple_choice',
      instruction: 'Quieres decir "Él tiene dos hijos"',
      question: 'Choose the correct form:',
      options: [
        { text: 'He has two children.',  correct: true },
        { text: 'He have two children.',  correct: false },
        { text: 'He is two children.',    correct: false },
      ],
      explanation: '3a persona singular de "to have" es "has", no "have". "He is two children" significaría "Él es dos niños" — sin sentido.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Estoy feliz',
      correct: ['I am happy', "I'm happy", 'i am happy', "i'm happy", 'I am happy.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — están cansados',
      words: ['tired', 'are', 'They'],
      correct: ['They', 'are', 'tired'],
      translation: 'Están cansados',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tienes un amigo',
      correct: ['You have a friend', 'you have a friend', 'You have a friend.'],
    },
  ],

  rwenDialogue: {
    intro: 'Conoces a un compañero de trabajo nuevo en una oficina en Chicago. Te presentas.',
    lines: [
      { speaker: 'npc', target: "Hi, I'm Mark. Are you new?", native: 'Hola, soy Mark. ¿Eres nuevo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I'm Sofia. I'm from Mexico. I have two years of experience here.", native: 'Sí, soy Sofía. Soy de México. Tengo dos años de experiencia aquí.', correct: true,  feedback: '¡Perfecto! Usaste "I\'m" (to be) y "I have" (to have) correctamente.' },
          { target: "Yes, I be Sofia. I have from Mexico.",                                     native: 'Sí, yo ser Sofía. Yo tener de México.',                              correct: false, feedback: '"I be" no se usa — siempre "I am". Y "have from" no funciona — "I am from".' },
          { target: 'I has two years.',                                                          native: 'Yo tiene dos años.',                                                  correct: false, feedback: '"I has" es incorrecto — la forma con "I" es siempre "have".' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Excelente. La regla mágica: "I am" para identidad y estado, "I have" para posesión y experiencia.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Estoy feliz (en inglés)',  correct: ['I am happy', "I'm happy", 'i am happy', "i'm happy"] },
      { prompt: 'Tienes un amigo (en inglés)', correct: ['You have a friend', 'you have a friend'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Escribe tres cosas sobre ti usando "I am" y tres usando "I have". Por ejemplo: "I am Mexican. I have a dog." Practica las contracciones también: "I\'m / I\'ve".',
    rwenSignoff: 'Mañana: do y make — los dos verbos de acción más confusos.',
  },

  phase8: {
    scenario: "You're meeting a new American neighbor in Chicago. Introduce yourself: name, country, family, work — all using 'to be' and 'to have'.",
    rwenRole: "Mark, 40, your new neighbor. Friendly, asks questions about your life.",
    successCriteria: "User correctly conjugates 'to be' (am/are/is) and 'to have' (have/has) in at least four sentences each, including 3rd person singular ('she has', 'he is').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
