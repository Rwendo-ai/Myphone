import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-i-dont-understand',
  module: 2,
  lesson: 5,
  title: "I don't understand — No entiendo",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Esta frase te salva la vida: 'I don't understand'. Cuando el otro habla muy rápido, dilo sin pena — los anglos respetan al que pide claridad.",
    culturalNote: "En Latinoamérica a veces fingimos entender por no incomodar — sonreímos, asentimos, esperamos pillarlo después. En EE.UU. y UK, la cultura premia decir 'I don't understand' directo. No es de mala educación: es honesto. La gente baja el ritmo, simplifica, y la conversación avanza.",
  },

  chunks: [
    {
      id: 'i_dont_understand',
      target: "I don't understand",
      native: 'No entiendo',
      literal: 'Yo no-entiendo',
      emoji: '🤷',
      phonetic: 'ai-DÓNT-an-der-STAND',
      audioRef: null,
    },
    {
      id: 'repeat_please',
      target: 'Repeat, please',
      native: 'Repita, por favor',
      literal: 'Repite, por-favor',
      emoji: '🔄',
      phonetic: 'ri-PIT-PLIS',
      audioRef: null,
    },
    {
      id: 'what_did_you_say',
      target: 'What did you say?',
      native: '¿Qué dijiste?',
      literal: '¿Qué hiciste-tú decir?',
      emoji: '👂',
      phonetic: 'uat-did-iú-SÉI',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Negative with "don\'t"',
    explanation: "Para negar en inglés en presente: 'I don't + (verbo)'. 'I don't understand' / 'I don't know' / 'I don't speak fast'. La contracción 'don't' es 'do not' juntos. En español decimos 'no entiendo' con el 'no' suelto; en inglés el 'do not/don't' va pegado al verbo.",
    examples: [
      { target: "I don't understand.", native: 'No entiendo.' },
      { target: "I don't know.",        native: 'No sé.' },
      { target: "I don't speak fast.",  native: 'No hablo rápido.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: "I don't understand", right: 'No entiendo' },
        { left: 'Repeat, please',     right: 'Repita, por favor' },
        { left: 'What did you say?',   right: '¿Qué dijo?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'No entiendo',
      correct: ["I don't understand", "i don't understand", "I do not understand", "I don't understand."],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la frase',
      sentence: "I ____ understand.",
      options: ["don't", 'no', 'not'],
      correct: "don't",
      context: 'Para negar en inglés en presente, "don\'t" va antes del verbo.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['What', 'did', 'you', 'say'],
      correct: ['What', 'did', 'you', 'say'],
      translation: '¿Qué dijiste?',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — pidiendo que repita',
      prompt: 'Repita, por favor',
      correct: ['Repeat, please', 'Repeat please', 'repeat, please', 'Repeat, please.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la respuesta correcta',
      question: 'No captaste lo que dijo el agente del aeropuerto. ¿Qué le dices?',
      options: [
        { text: "Sorry, I don't understand. Slowly, please?", correct: true },
        { text: 'Yes.',                                          correct: false },
        { text: 'OK, goodbye.',                                  correct: false },
      ],
      explanation: 'No tiene sentido decir "Yes" o "OK" si no entendiste — sé honesto: "I don\'t understand".',
    },
  ],

  rwenDialogue: {
    intro: 'Estás en migración del aeropuerto en LAX (Los Ángeles). El oficial te hace una pregunta — pero habla rápido.',
    lines: [
      { speaker: 'npc', target: "How long are you staying?", native: '¿Cuánto tiempo se queda?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry, I don't understand. Slowly, please?", native: 'Perdón, no entiendo. ¿Despacio, por favor?', correct: true,  feedback: 'Perfecto — fuiste honesto y pediste claridad. El oficial bajará el ritmo.' },
          { target: "Yes.",                                         native: 'Sí.',                                          correct: false, feedback: 'No es honesto — si no entendiste, dilo.' },
          { target: "OK, goodbye.",                                 native: 'OK, adiós.',                                   correct: false, feedback: 'Te vas sin resolver — di que no entiendes.' },
        ],
      },
      { speaker: 'npc', target: "Sure. How — long — are — you — staying?", native: 'OK. ¿Cuánto-tiempo-se-queda?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Pediste claridad sin pena — eso es valor real en otro idioma.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: "I don't understand (en inglés)", correct: ["I don't understand", "i don't understand", "I do not understand", "I don't understand."] },
      { prompt: 'Repeat, please (en inglés)',      correct: ['Repeat, please', 'Repeat please', 'repeat, please', 'Repeat, please.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica decir 'I don't understand. Slowly, please.' en voz alta. Es la frase que te abrirá miles de conversaciones en inglés.",
    rwenSignoff: 'Repite. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're at LAX immigration. The officer is asking you questions but speaking very quickly. You need to ask them to slow down without losing politeness.",
    rwenRole: "Officer Rodriguez, 45, an immigration officer who's processed thousands of travellers. Patient if you're polite, less so if you guess.",
    successCriteria: "User uses 'I don't understand' when needed, asks 'Slowly, please' or 'Repeat, please', stays polite throughout. Doesn't fake understanding by saying 'Yes' to questions they didn't catch.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
