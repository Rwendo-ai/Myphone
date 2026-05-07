import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-asking-help',
  module: 9,
  lesson: 9,
  title: 'Asking for help while travelling — Pidiendo ayuda',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: cómo pedir ayuda mientras viajas. Frases para cuando no conoces el área o necesitas que alguien te escriba algo.",
    culturalNote: "En EE.UU. la gente está acostumbrada a turistas, pero el ritmo es rápido. La fórmula 'Could you...' (¿podría usted...?) es la más educada y la más eficaz. 'Could you help me?' suena cien veces mejor que 'Help me' (que suena casi a emergencia). Y un truco útil: 'Could you write it down?' — pídeles que te lo escriban si tu oído no captó la palabra. Mucha gente lo hace de buena gana.",
  },

  chunks: [
    {
      id: 'could_you_help_me',
      target: 'Could you help me?',
      native: '¿Podría ayudarme?',
      literal: 'Could you help me?',
      emoji: '🙏',
      phonetic: 'KOOD-yoo-HELP-mee',
      audioRef: null,
    },
    {
      id: 'i_dont_know_area',
      target: "I don't know this area.",
      native: 'No conozco esta zona.',
      literal: 'I do-not know this area.',
      emoji: '🗺️',
      phonetic: 'ay-DOHNT-NOH-this-AIR-ee-uh',
      audioRef: null,
    },
    {
      id: 'could_you_write_it_down',
      target: 'Could you write it down?',
      native: '¿Me lo podría escribir?',
      literal: 'Could you write it down?',
      emoji: '📝',
      phonetic: 'KOOD-yoo-RYT-it-DOWN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite request: "Could you...?"',
    explanation: "'Could you + verb?' es la fórmula educada universal en inglés. Sirve para pedir cualquier favor: ayuda, información, repetir algo, escribirlo. Más cortés que 'Can you?' (que también funciona pero suena menos formal). Estructura: 'Could you + base verb + (object)?'.",
    examples: [
      { target: 'Could you repeat that, please?',     native: '¿Podría repetirlo, por favor?' },
      { target: 'Could you speak slower?',             native: '¿Podría hablar más despacio?' },
      { target: 'Could you show me on the map?',       native: '¿Me lo podría mostrar en el mapa?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja peticiones',
      pairs: [
        { left: 'Could you help me?',         right: '¿Podría ayudarme?' },
        { left: 'Could you write it down?',    right: '¿Me lo podría escribir?' },
        { left: 'Could you repeat that?',       right: '¿Podría repetirlo?' },
        { left: "I don't know this area",       right: 'No conozco esta zona' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Podría ayudarme?',
      correct: ['Could you help me?', 'Could you help me', 'could you help me?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — pides ayuda educadamente',
      sentence: '____ you help me, please?',
      options: ['Can', 'Could', 'Will'],
      correct: 'Could',
      context: '"Could you" es la fórmula más educada. "Can you" funciona también pero menos formal.',
    },
    {
      type: 'multiple_choice',
      instruction: 'No oíste la calle que te dijeron. ¿Qué pides?',
      question: 'Best phrasing:',
      options: [
        { text: 'Could you write it down, please?', correct: true },
        { text: 'Repeat!',                            correct: false },
        { text: 'I no understand.',                    correct: false },
      ],
      explanation: '"Could you write it down?" te da el nombre exacto sin riesgo de oír mal otra vez.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — no conoces la zona',
      words: ['area', "don't", 'know', 'I', 'this'],
      correct: ['I', "don't", 'know', 'this', 'area'],
      translation: 'No conozco esta zona',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Me lo podría escribir?',
      correct: ['Could you write it down?', 'Could you write it down', 'could you write it down?'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en una calle de Boston. Acabas de pedir direcciones pero hablaron muy rápido. Necesitas que escriban el nombre del lugar.',
    lines: [
      { speaker: 'user',
        userChoices: [
          { target: "I'm sorry, could you write it down? I don't know this area.", native: 'Disculpe, ¿me lo podría escribir? No conozco esta zona.', correct: true,  feedback: '¡Perfecto! Disculpa + petición + razón. Cualquier persona ayudaría.' },
          { target: 'Slower!',                                                       native: '¡Más despacio!',                                            correct: false, feedback: 'Suena a orden. "Could you speak slower, please?" es educado.' },
          { target: 'No understand.',                                                  native: 'No entender.',                                              correct: false, feedback: 'Falta gramática. "I don\'t understand" es la frase correcta.' },
        ],
      },
      { speaker: 'npc', target: "Sure, no problem. Here, I'll draw you a quick map.", native: 'Claro, no hay problema. Te dibujo un mapa rápido.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! "Could you...?" es tu mejor amiga al viajar — abre puertas y consigue ayuda.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: '¿Podría ayudarme? (en inglés)', correct: ['Could you help me?', 'Could you help me', 'could you help me?'] },
      { prompt: 'No conozco esta zona (en inglés)', correct: ["I don't know this area", 'I dont know this area', "i don't know this area"] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Memoriza cuatro frases con "Could you...": help me, repeat that, write it down, speak slower. Estas cuatro te sacan de cualquier apuro de viaje.',
    rwenSignoff: 'Mañana cerramos el módulo con una conversación completa de viaje.',
  },

  phase8: {
    scenario: "You're in Boston for the first time, lost in the North End. You stop a local for help finding a specific restaurant — you need them to repeat, write it down, and maybe show on a map.",
    rwenRole: "Tony, 50, lifelong Bostonian. Talks fast with a thick accent. Patient if asked.",
    successCriteria: "User uses 'Could you help me', 'Could you repeat that', 'Could you write it down' or similar in at least three polite requests.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
