import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-how-are-you-formal',
  module: 1,
  lesson: 8,
  title: 'Polite "How are you?" forms',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! El inglés tiene saludos formales para entrevistas, reuniones, primeros encuentros con clientes. 'How do you do?' suena anticuado pero todavía se usa — sobre todo con británicos.",
    culturalNote: "En español tienes 'tú' y 'usted' — el respeto vive ahí. En inglés no hay esa distinción de pronombre, así que el respeto se marca con vocabulario y entonación. 'Pleased to meet you' (en lugar de 'Nice to meet you'), 'I hope you're well' al inicio de un correo. Para entrevistas en EE.UU. o UK, este registro abre puertas.",
  },

  chunks: [
    {
      id: 'how_do_you_do',
      target: 'How do you do?',
      native: 'Mucho gusto / ¿Cómo está usted?',
      literal: 'Cómo haces tú?',
      emoji: '🎩',
      phonetic: 'jáo-du-iú-DU',
      audioRef: null,
    },
    {
      id: 'pleased_to_meet_you',
      target: 'Pleased to meet you',
      native: 'Es un placer conocerle',
      literal: 'Complacido de conocerte',
      emoji: '🤝',
      phonetic: 'PLISD-tu-MIT-iú',
      audioRef: null,
    },
    {
      id: 'i_hope_youre_well',
      target: "I hope you're well",
      native: 'Espero que esté bien',
      literal: 'Yo-espero tú-estás bien',
      emoji: '🌟',
      phonetic: 'ái-JÓUP-iór-UEL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Formal vs casual',
    explanation: "Casual: 'How are you?' / 'Hi' / 'Nice to meet you'. Formal: 'How do you do?' / 'Pleased to meet you' / 'I hope you're well'. Para hispanohablantes, el formal es como pasar de 'tú' a 'usted' — pero con cambio de palabras, no de conjugación. En entrevistas y correos profesionales en inglés, este registro es la diferencia entre verse listo o verde.",
    examples: [
      { target: 'How do you do?',           native: 'Mucho gusto' },
      { target: 'Pleased to meet you',      native: 'Es un placer conocerle' },
      { target: "I hope you're well",       native: 'Espero que esté bien' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja los saludos formales',
      pairs: [
        { left: 'How do you do?',         right: 'Mucho gusto / ¿Cómo está usted?' },
        { left: 'Pleased to meet you',    right: 'Es un placer conocerle' },
        { left: "I hope you're well",     right: 'Espero que esté bien' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (formal)',
      prompt: '¿Cómo está usted? (en una entrevista)',
      correct: ['How do you do?', 'how do you do?', 'How do you do', 'how do you do'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — saludando a un cliente nuevo',
      prompt: 'Es un placer conocerle',
      correct: ['Pleased to meet you', 'pleased to meet you', 'Pleased to meet you.', 'pleased to meet you.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa el inicio formal',
      sentence: 'I ____ you\'re well.',
      options: ['hope', 'know', 'see'],
      correct: 'hope',
      context: 'Estás escribiendo el inicio de un correo profesional.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la respuesta formal — saludando al gerente',
      words: ['Pleased', 'to', 'meet', 'you'],
      correct: ['Pleased', 'to', 'meet', 'you'],
      translation: 'Es un placer conocerle',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (formal)',
      prompt: 'Espero que esté bien',
      correct: ["I hope you're well", "i hope you're well", "I hope you are well", "i hope you are well"],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en una entrevista de trabajo en una multinacional en Ciudad de México. El gerente regional acaba de llegar a saludarte.',
    lines: [
      { speaker: 'npc', target: "Good morning. How do you do?", native: 'Buenos días. Mucho gusto.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "How do you do? Pleased to meet you.", native: 'Mucho gusto. Es un placer conocerle.', correct: true,  feedback: 'Perfecto — devolviste con el mismo registro y agregaste la fórmula formal.' },
          { target: "Hi! What's up?",                        native: '¡Hola! ¿Qué onda?',                    correct: false, feedback: 'Demasiado casual — en una entrevista usa el registro formal.' },
          { target: "How are you?",                          native: '¿Cómo estás?',                          correct: false, feedback: "Bien pero no está al nivel — en entrevistas usa 'How do you do?' o 'It's a pleasure to meet you'." },
        ],
      },
      { speaker: 'npc', target: "Pleased to meet you too. Please have a seat.", native: 'Igualmente. Por favor tome asiento.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Empezaste la entrevista con el registro correcto — el gerente notó que sabes navegar el ámbito profesional anglo.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: "How do you do? (en inglés, formal)", correct: ['How do you do?', 'how do you do?', 'How do you do', 'how do you do'] },
      { prompt: "Pleased to meet you (en inglés)",     correct: ['Pleased to meet you', 'pleased to meet you', 'Pleased to meet you.', 'pleased to meet you.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica el registro formal — aunque sea respondiendo un correo de trabajo, abre con 'I hope you're well'.",
    rwenSignoff: 'Nos vemos mañana — con confianza.',
  },

  phase8: {
    scenario: "You're being interviewed for a job at a multinational company in Mexico City. The hiring manager has just walked into the room and shaken your hand.",
    rwenRole: "Mr Adebayo, 50, the regional director from the London office. Professional, polite-formal, well-mannered. Has interviewed many candidates and notices register.",
    successCriteria: "User uses formal phrasing: opens with 'How do you do?' or similar, says 'Pleased to meet you' (not 'Nice to meet you'), and avoids casual phrases like 'Hi' or 'What's up'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
