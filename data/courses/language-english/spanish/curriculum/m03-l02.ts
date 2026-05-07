import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-age',
  module: 3,
  lesson: 2,
  title: 'How old are you? — ¿Cuántos años tienes?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! En español 'tienes' años. En inglés 'eres' viejo. La fórmula es completamente distinta — y es la trampa más común para hispanohablantes.",
    culturalNote: "El error clásico: traducir 'tengo 30 años' como 'I have 30 years'. Eso suena rarísimo en inglés. La forma correcta es 'I'm 30 years old' — literalmente 'soy 30 años viejo'. Memorizar este cambio te ahorra años de corregirte. En entrevistas y formularios en EE.UU., suena instantáneamente nativo.",
  },

  chunks: [
    {
      id: 'how_old_are_you',
      target: 'How old are you?',
      native: '¿Cuántos años tienes?',
      literal: '¿Qué viejo eres-tú?',
      emoji: '🎂',
      phonetic: 'jáo-OLD-ar-iú',
      audioRef: null,
    },
    {
      id: 'im_x_years_old',
      target: "I'm 30 years old",
      native: 'Tengo 30 años',
      literal: 'Yo-soy 30 años viejo',
      emoji: '🎈',
      phonetic: 'aim-ZER-ti-yirs-OLD',
      audioRef: null,
    },
    {
      id: 'twenty_five',
      target: 'Twenty-five',
      native: 'Veinticinco',
      literal: 'Veinte-cinco',
      emoji: '🔢',
      phonetic: 'TUEN-ti-FÁIV',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Age = "to be", not "to have"',
    explanation: "REGLA DE ORO: para hablar de edad en inglés se usa 'I'm', NUNCA 'I have'. 'I'm 30' o 'I'm 30 years old'. Si traduces literal del español ('I have 30 years'), te van a entender — pero suena de niño aprendiendo. Cambio mental: edad = 'to be' en inglés.",
    examples: [
      { target: "I'm 25",              native: 'Tengo 25 años' },
      { target: "I'm 30 years old",     native: 'Tengo 30 años' },
      { target: "I'm twenty-one",       native: 'Tengo veintiún años' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'How old are you?', right: '¿Cuántos años tienes?' },
        { left: "I'm 30 years old", right: 'Tengo 30 años' },
        { left: 'Twenty-five',       right: 'Veinticinco' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Cuántos años tienes?',
      correct: ['How old are you?', 'how old are you?', 'How old are you', 'how old are you'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (cuidado con el verbo)',
      prompt: 'Tengo 28 años',
      correct: ["I'm 28", "I am 28", "I'm 28 years old", "I am 28 years old", "i'm 28"],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con el verbo correcto',
      sentence: "I ____ 30 years old.",
      options: ["'m", 'have', 'has'],
      correct: "'m",
      context: 'En inglés la edad va con "to be", no con "to have".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la respuesta',
      words: ["I'm", '30', 'years', 'old'],
      correct: ["I'm", '30', 'years', 'old'],
      translation: 'Tengo 30 años',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cómo dices "Tengo 25 años" en inglés?',
      options: [
        { text: "I'm 25 years old.",  correct: true },
        { text: 'I have 25 years.',    correct: false },
        { text: '25.',                  correct: false },
      ],
      explanation: '"I have 25 years" es traducción literal y suena raro. La forma correcta usa "I\'m".',
    },
  ],

  rwenDialogue: {
    intro: 'Estás llenando un formulario para un trabajo en Miami. La asistente de RR.HH. te hace algunas preguntas en inglés.',
    lines: [
      { speaker: 'npc', target: "And how old are you?", native: '¿Y cuántos años tienes?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm 28 years old.",     native: 'Tengo 28 años.',                    correct: true,  feedback: 'Perfecto — usaste el verbo correcto en inglés ("am", no "have").' },
          { target: "28.",                     native: '28.',                                correct: false, feedback: 'En formularios suele bastar — pero en conversación agrega "I\'m" para que suene completo.' },
          { target: "I have 28 years.",        native: 'Tengo 28 años.',                    correct: false, feedback: 'Trampa común para hispanohablantes — en inglés es "I\'m 28", no "I have 28 years".' },
        ],
      },
      { speaker: 'npc', target: "Thank you. That's all we need.", native: 'Gracias. Es todo lo que necesitamos.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Esquivaste la trampa clásica del "I have X years". Ya suenas más nativo.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'How old are you? (en inglés)', correct: ['How old are you?', 'how old are you?', 'How old are you', 'how old are you'] },
      { prompt: "I'm 30 years old (en inglés)", correct: ["I'm 30 years old", "I am 30 years old", "I'm 30", "i'm 30 years old"] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica tu edad en inglés en voz alta — usando 'I'm', NO 'I have'. Esa es la trampa más común para hispanohablantes.",
    rwenSignoff: 'Nos vemos mañana — sin trampas.',
  },

  phase8: {
    scenario: "You're filling out a job application at a company in Miami. The HR assistant runs through some quick verification questions in English — name, age, address.",
    rwenRole: "Karen, 35, the HR assistant. Friendly-professional, has interviewed many bilingual candidates. Speaks clear American English.",
    successCriteria: "User uses 'I'm 28' or 'I'm 28 years old' (NOT 'I have 28 years' — the classic Spanish-speaker trap). Answers other questions cleanly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
