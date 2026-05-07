import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-languages',
  module: 3,
  lesson: 6,
  title: 'Languages I speak — Idiomas que hablo',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! En inglés los nombres de idiomas SIEMPRE se escriben con mayúscula: Spanish, English, Portuguese, French. Los hispanohablantes (que escribimos 'español' con minúscula) suelen olvidarlo.",
    culturalNote: "Para un hispanohablante en EE.UU., poder decir 'I speak Spanish, English, and a little Portuguese' abre puertas — sobre todo en Miami, Texas, California. El bilingüismo se valora cada vez más en el mercado laboral. En llamadas con clientes anglo, mencionarlo de paso ('I work bilingually with my LATAM team') te posiciona como puente, no como aprendiz.",
  },

  chunks: [
    {
      id: 'i_speak_spanish',
      target: 'I speak Spanish',
      native: 'Hablo español',
      literal: 'Yo hablo español',
      emoji: '🗣️',
      phonetic: 'ai-SPIK-SPÁ-nish',
      audioRef: null,
    },
    {
      id: 'a_little_english',
      target: 'A little English',
      native: 'Un poco de inglés',
      literal: 'Un poquito inglés',
      emoji: '🤏',
      phonetic: 'a-LI-tel-ÍN-glish',
      audioRef: null,
    },
    {
      id: 'and_some_others',
      target: 'And some others',
      native: 'Y algunos otros',
      literal: 'Y algunos otros',
      emoji: '🌐',
      phonetic: 'and-sam-A-ders',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Languages = Capitalized',
    explanation: "Los nombres de idiomas en inglés van con mayúscula: 'Spanish', 'English', 'French'. Lo mismo con países y nacionalidades: 'Mexican', 'Colombian'. En español lo escribimos con minúscula ('español'), pero en inglés es OBLIGATORIO mayúscula. En correos profesionales escribir 'spanish' (minúscula) se ve descuidado.",
    examples: [
      { target: 'I speak Spanish and English',          native: 'Hablo español e inglés' },
      { target: 'I speak Spanish and a little English',  native: 'Hablo español y un poco de inglés' },
      { target: 'I speak Spanish, English, and some Portuguese', native: 'Hablo español, inglés y algo de portugués' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'I speak Spanish',  right: 'Hablo español' },
        { left: 'A little English', right: 'Un poco de inglés' },
        { left: 'And some others',  right: 'Y algunos otros' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (cuidado con las mayúsculas)',
      prompt: 'Hablo español e inglés',
      correct: ['I speak Spanish and English', 'I speak Spanish and English.', 'i speak Spanish and English'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Hablo un poco de inglés',
      correct: ['I speak a little English', 'I speak a little English.', "i speak a little English"],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa el idioma',
      sentence: 'I speak ____ and English.',
      options: ['Spanish', 'spanish', 'español'],
      correct: 'Spanish',
      context: 'En inglés los idiomas siempre van en mayúscula.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['I', 'speak', 'Spanish', 'and', 'a', 'little', 'English'],
      correct: ['I', 'speak', 'Spanish', 'and', 'a', 'little', 'English'],
      translation: 'Hablo español y un poco de inglés',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cuál es la forma correcta?',
      options: [
        { text: "I speak Spanish and Portuguese.",    correct: true },
        { text: 'I speak spanish and portuguese.',     correct: false },
        { text: 'I speak Español y Portugués.',        correct: false },
      ],
      explanation: 'Los idiomas en inglés siempre con mayúscula. Y los nombres deben estar EN inglés (Portuguese, no Portugués).',
    },
  ],

  rwenDialogue: {
    intro: 'En una entrevista de trabajo en Miami para un puesto bilingüe. La gerente quiere saber tus idiomas.',
    lines: [
      { speaker: 'npc', target: "What languages do you speak?", native: '¿Qué idiomas hablas?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I speak Spanish, English, and a little Portuguese.", native: 'Hablo español, inglés y un poco de portugués.', correct: true,  feedback: 'Perfecto — diste una lista clara con la modulación de "a little".' },
          { target: "Spanish, English, Portuguese.",                       native: 'Español, inglés, portugués.',                    correct: false, feedback: 'Diste los idiomas pero sin "I speak". Agrega la frase para sonar completo.' },
          { target: "I speak spanish and english.",                        native: 'Hablo español e inglés.',                        correct: false, feedback: 'En inglés los idiomas van con mayúscula — Spanish, English.' },
        ],
      },
      { speaker: 'npc', target: "Wonderful! That's so useful here.", native: '¡Maravilloso! Eso es muy útil aquí.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Tu bilingüismo es un activo — y ya sabes presentarlo en inglés con las mayúsculas correctas.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'I speak Spanish (en inglés, con mayúscula)', correct: ['I speak Spanish', 'I speak Spanish.', 'i speak Spanish'] },
      { prompt: 'A little English (en inglés)',                correct: ['A little English', 'a little English', 'A little English.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica decir tus idiomas en inglés — todos con mayúscula: 'I speak Spanish, English, and ...'.",
    rwenSignoff: 'Tu bilingüismo es valor agregado. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're in a job interview for a bilingual customer-service role in Miami. The manager asks what languages you speak.",
    rwenRole: "Maria, 38, the hiring manager. Bilingual herself, looking for someone who can handle both English-only and Spanish-only customers. Direct but warm.",
    successCriteria: "User capitalizes language names ('Spanish', 'English'), uses 'I speak ...' phrasing, modulates with 'a little' if their level is uneven. Treats bilingualism as a sellable skill, not a limitation.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
