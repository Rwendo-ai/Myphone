import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l07-past-stories',
  module: 10,
  lesson: 7,
  title: 'Telling past stories — Contar historias',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: contar historias del pasado. La narración personal — esos momentos que se quedan contigo.",
    culturalNote: "En español tenemos pretérito y imperfecto que distinguen una acción puntual ('fui') de una continua ('iba'). En inglés casi todo va en pasado simple en habla cotidiana — el contexto explica el matiz. Para historias en EE.UU., los anglos esperan estructura clara: comienzo + medio + final. La fórmula 'When I was a child...' o 'I'll never forget...' es la entrada clásica al modo cuento. Lo que era largo en español ('cuando yo era niño y vivía en...') se compacta en inglés ('When I was a child in...').",
  },

  chunks: [
    {
      id: 'when_i_was_a_child',
      target: 'When I was a child',
      native: 'Cuando yo era niño',
      literal: 'when I was a child',
      emoji: '👶🏾',
      phonetic: 'wen-AY-wuz-uh-CHAYLD',
      audioRef: null,
    },
    {
      id: 'never_forget',
      target: "I'll never forget...",
      native: 'Nunca olvidaré...',
      literal: "I will never forget",
      emoji: '🌟',
      phonetic: 'AYL-NEV-er-fer-GET',
      audioRef: null,
    },
    {
      id: 'was_amazing',
      target: 'It was amazing',
      native: 'Estuvo increíble',
      literal: 'it was amazing',
      emoji: '✨',
      phonetic: 'it-WUZ-uh-MAY-zing',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Story frames',
    explanation: "Las frases que abren historias en inglés: 'When I was a child...', 'I remember when...', 'I'll never forget the time...', 'A few years ago...'. Las que cierran: 'It was amazing', 'It was unforgettable', 'I still think about it'. Estructura: marco temporal → acción → reflexión.",
    examples: [
      { target: 'When I was a child, I lived in Cuba',     native: 'Cuando era niño, vivía en Cuba' },
      { target: "I'll never forget the day I arrived",      native: 'Nunca olvidaré el día que llegué' },
      { target: 'It was the best summer of my life',         native: 'Fue el mejor verano de mi vida' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'When I was a child', right: 'Cuando yo era niño' },
        { left: "I'll never forget",   right: 'Nunca olvidaré' },
        { left: 'It was amazing',       right: 'Estuvo increíble' },
        { left: 'A few years ago',      right: 'Hace unos años' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Cuando yo era niño',
      correct: ['When I was a child', 'when I was a child', 'When I was a kid'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la apertura de una historia',
      sentence: 'I\'ll never ____ that day.',
      options: ['forget', 'remember', 'know'],
      correct: 'forget',
      context: '"I\'ll never forget" es la fórmula clásica para introducir un recuerdo significativo.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Quieres contar una historia de tu niñez en una cena',
      question: 'Best opening line:',
      options: [
        { text: "When I was a child in Mexico, my grandma...", correct: true },
        { text: 'Story about my grandma.',                       correct: false },
        { text: 'Listen me.',                                     correct: false },
      ],
      explanation: '"When I was a child" abre la historia con marco temporal y lugar. Los anglos esperan esa estructura.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — fue el mejor verano de mi vida',
      words: ['life', 'summer', 'best', 'It', 'my', 'was', 'the', 'of'],
      correct: ['It', 'was', 'the', 'best', 'summer', 'of', 'my', 'life'],
      translation: 'Fue el mejor verano de mi vida',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Estuvo increíble',
      correct: ['It was amazing', 'it was amazing', 'It was amazing.'],
    },
  ],

  rwenDialogue: {
    intro: 'En una cena con amigos estadounidenses, alguien pregunta cuál fue tu mejor recuerdo de la niñez.',
    lines: [
      { speaker: 'npc', target: "What's your favorite childhood memory?", native: '¿Cuál es tu recuerdo favorito de la niñez?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "When I was a child, my grandma made tamales every Sunday. I'll never forget the smell. It was amazing.", native: 'Cuando era niña, mi abuela hacía tamales cada domingo. Nunca olvidaré el olor. Era increíble.', correct: true,  feedback: '¡Perfecto! Marco temporal + acción específica + emoción. Una mini-historia bien estructurada.' },
          { target: 'Tamales.',                                                                                                  native: 'Tamales.',                                                                                       correct: false, feedback: 'Demasiado breve. Una historia necesita contexto y emoción.' },
          { target: "I am child grandma tamales.",                                                                                 native: 'Yo soy niño abuela tamales.',                                                                    correct: false, feedback: 'Falta gramática. Empieza con "When I was a child" para dar marco temporal.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! Las historias bien contadas crean conexión. En cualquier mesa de EE.UU., una buena anécdota te abre el grupo.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Cuando yo era niño (en inglés)', correct: ['When I was a child', 'when I was a child', 'When I was a kid'] },
      { prompt: 'Nunca olvidaré (en inglés)',      correct: ["I'll never forget", 'I will never forget', "i'll never forget"] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Escribe una mini-historia en inglés (3-5 oraciones) sobre un recuerdo de tu niñez. Empieza con "When I was a child" y cierra con "It was [emotion]".',
    rwenSignoff: 'Mañana: esperanza y futuro — los sueños.',
  },

  phase8: {
    scenario: "You're at a dinner with American friends. Someone asks about your favorite childhood memory. Tell a structured 4-6 sentence story with a clear arc.",
    rwenRole: "Three friends listening attentively, asking small follow-ups.",
    successCriteria: "User opens with 'When I was a child' or 'I'll never forget', tells events in past simple, and closes with an emotional reflection ('It was amazing/unforgettable').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
