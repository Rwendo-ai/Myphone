import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-do-you-speak',
  module: 2,
  lesson: 4,
  title: 'Do you speak English? — ¿Hablas inglés?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Cuando estás en un país extranjero y necesitas hablar con alguien, primero preguntas si hablan tu idioma — o pides que hablen despacio.",
    culturalNote: "En Latinoamérica si llega un turista que no habla español, intentamos entender — paciencia, gestos, lo que sea. En EE.UU. el reflejo es similar pero cambia por región: en Miami, Houston o LA puedes encontrar bilingües por todos lados; en Iowa o Maine, casi nadie habla español. Saber preguntar 'Do you speak Spanish?' te abre puertas inesperadas.",
  },

  chunks: [
    {
      id: 'do_you_speak_english',
      target: 'Do you speak English?',
      native: '¿Hablas inglés?',
      literal: '¿Haces-tú hablar inglés?',
      emoji: '💬',
      phonetic: 'du-iú-SPIK-ÍN-glish',
      audioRef: null,
    },
    {
      id: 'a_little',
      target: 'A little',
      native: 'Un poco',
      literal: 'Un poquito',
      emoji: '🤏',
      phonetic: 'a-LI-tel',
      audioRef: null,
    },
    {
      id: 'slowly_please',
      target: 'Slowly, please',
      native: 'Despacio, por favor',
      literal: 'Despacio, por-favor',
      emoji: '🐢',
      phonetic: 'SLÓU-li-PLIS',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Question with "do"',
    explanation: "Las preguntas en inglés en presente usan 'Do you...?'. La fórmula: 'Do + you + (verbo)?'. 'Do you speak English?' / 'Do you understand?' / 'Do you have time?'. Es como un 'comodín' — sin él, las preguntas en inglés no salen correctas.",
    examples: [
      { target: 'Do you speak English?', native: '¿Hablas inglés?' },
      { target: 'Do you understand?',     native: '¿Entiendes?' },
      { target: 'Do you have time?',      native: '¿Tienes tiempo?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Do you speak English?', right: '¿Hablas inglés?' },
        { left: 'A little',              right: 'Un poco' },
        { left: 'Slowly, please',         right: 'Despacio, por favor' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Hablas inglés?',
      correct: ['Do you speak English?', 'do you speak English?', 'Do you speak English', 'do you speak English'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — alguien habla muy rápido',
      prompt: 'Despacio, por favor',
      correct: ['Slowly, please', 'slowly please', 'Slowly please', 'Slowly, please.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la pregunta',
      sentence: '____ you speak Spanish?',
      options: ['Do', 'Are', 'Is'],
      correct: 'Do',
      context: 'Las preguntas en presente con verbos comunes empiezan con "Do".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['Do', 'you', 'speak', 'Spanish'],
      correct: ['Do', 'you', 'speak', 'Spanish'],
      translation: '¿Hablas español?',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la respuesta correcta',
      question: '¿Cómo le pides a un anglo que hable más despacio?',
      options: [
        { text: 'Slowly, please.', correct: true },
        { text: 'Slow!',            correct: false },
        { text: 'Stop, please.',    correct: false },
      ],
      explanation: "'Slowly, please' es la forma cortés. 'Slow' suena a orden, 'Stop' significa otra cosa.",
    },
  ],

  rwenDialogue: {
    intro: 'Estás en Cancún en tu trabajo de turismo. Llegó un turista perdido buscando ayuda. Quizás puedas ayudarle.',
    lines: [
      { speaker: 'npc', target: "Hello! Excuse me...", native: '¡Hola! Disculpe...' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hi! Do you speak English?',  native: '¡Hola! ¿Habla inglés?',     correct: true,  feedback: 'Perfecto — saludaste y abriste el canal de comunicación.' },
          { target: 'English?',                    native: '¿Inglés?',                  correct: false, feedback: 'Demasiado corto — agrega "Do you speak" para que sea pregunta clara.' },
          { target: 'I speak English.',            native: 'Yo hablo inglés.',          correct: false, feedback: 'Le respondiste sin que te pregunten — primero pregúntale a él.' },
        ],
      },
      { speaker: 'npc', target: "A little. Slowly, please?", native: 'Un poco. ¿Despacio, por favor?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Te ofreciste a ayudar — y ya estás en posición de cambiar de español a inglés según haga falta.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Do you speak English? (en inglés)', correct: ['Do you speak English?', 'Do you speak English', 'do you speak English?', 'do you speak English'] },
      { prompt: 'Slowly, please (en inglés)',         correct: ['Slowly, please', 'Slowly please', 'slowly, please', 'Slowly, please.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica preguntar 'Do you speak English?' a tu reflejo o a un familiar. Acompáñalo de 'Slowly, please' por si acaso.",
    rwenSignoff: 'Despacio. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're working in tourism in Cancún. An English-speaking tourist approaches you looking for help — they speak no Spanish. Open the conversation in English to find out what they need.",
    rwenRole: "Sarah, 30, an American tourist visiting Mexico for the first time. Friendly but slightly anxious — her Spanish is zero and she's been getting lost.",
    successCriteria: "User opens with 'Hi' or 'Excuse me', asks 'Do you speak English?' (or offers their own English), uses 'Slowly, please' if needed. Tone is warm-helpful.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
