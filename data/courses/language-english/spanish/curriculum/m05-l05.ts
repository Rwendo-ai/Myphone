import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-aunts-uncles',
  module: 5,
  lesson: 5,
  title: 'Aunts & Uncles — Tíos',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! 'Aunt' = tía. 'Uncle' = tío. 'Cousin' = primo/a. El inglés es minimalista aquí — una palabra por cada relación, sin matices de qué lado de la familia.",
    culturalNote: "En Latinoamérica las familias extendidas son más densas — primos hermanos, primos segundos, tíos políticos, padrinos. En inglés todo se simplifica: si es hermano de tu papá o de tu mamá, es 'uncle'. Si es primo en cualquier grado, es 'cousin'. Si quieres ser específico cuando le explicas a un anglo: 'my uncle on my mother's side' = 'mi tío materno'. Pero el inglés casual no espera ese nivel de detalle.",
  },

  chunks: [
    {
      id: 'aunt',
      target: 'Aunt',
      native: 'Tía',
      literal: undefined,
      emoji: '👩',
      phonetic: 'ANT (en EE.UU.) / AAANT (UK)',
      audioRef: null,
    },
    {
      id: 'uncle',
      target: 'Uncle',
      native: 'Tío',
      literal: undefined,
      emoji: '👨',
      phonetic: 'AN-kel',
      audioRef: null,
    },
    {
      id: 'cousin',
      target: 'Cousin',
      native: 'Primo/a',
      literal: 'Pariente joven',
      emoji: '👫',
      phonetic: 'KA-sin',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family on X side',
    explanation: "Para distinguir lado materno o paterno: 'on my mother's side' / 'on my father's side'. 'My uncle on my mother's side' = mi tío materno. Si no especificas, el anglo asume que es de cualquier lado (les da igual). 'Cousin' es genérico — sirve para primo, prima, primo hermano, primo segundo. Si quieres especificar: 'my first cousin' = primo hermano, 'my second cousin' = primo segundo.",
    examples: [
      { target: "My aunt (my father's sister)",         native: 'Mi tía paterna' },
      { target: "My uncle (my mother's brother)",       native: 'Mi tío materno' },
      { target: "My cousin (my aunt's child)",          native: 'Mi primo (hijo/a de mi tía)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Aunt',   right: 'Tía' },
        { left: 'Uncle',  right: 'Tío' },
        { left: 'Cousin', right: 'Primo/a' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mi tía',
      correct: ['My aunt', 'my aunt', 'My aunt.'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mi primo (hijo de mi tía)',
      correct: ["My cousin (my aunt's child)", 'My cousin', 'my cousin'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la posesión',
      sentence: "My uncle on my ____ side.",
      options: ["mother's", 'mother', 'mom'],
      correct: "mother's",
      context: 'En inglés se usa apóstrofo + s para posesivo: "mother\'s side" (lado materno).',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['My', 'aunt', 'lives', 'in', 'Lima'],
      correct: ['My', 'aunt', 'lives', 'in', 'Lima'],
      translation: 'Mi tía vive en Lima',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cómo dices "Mi primo materno"?',
      options: [
        { text: "My cousin on my mother's side.", correct: true },
        { text: 'My cousin from my mother.',        correct: false },
        { text: 'My mother cousin.',                correct: false },
      ],
      explanation: '"On my mother\'s side" es la fórmula correcta — "from" no funciona aquí.',
    },
  ],

  rwenDialogue: {
    intro: 'Visitando la oficina anglo de tu prima en Boston. Te presenta a su jefa — y quieres explicarle cómo se conocen.',
    lines: [
      { speaker: 'npc', target: "Who is everyone? Help me understand!", native: '¿Quiénes son todos? ¡Ayúdame a entender!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "This is my cousin Lucia. Her mother is my mom's sister — so she's my aunt.", native: 'Esta es mi prima Lucía. Su mamá es la hermana de mi mamá — así que es mi tía.', correct: true,  feedback: 'Perfecto — explicaste la conexión con vocabulario completo: cousin, mother, sister, aunt.' },
          { target: "This my cousin. This my aunt. Different.",                                       native: 'Esta prima. Esta tía. Diferente.',                                              correct: false, feedback: 'Falta "is" y los enlaces — el inglés necesita explicación, no solo etiquetas.' },
          { target: "Tía y prima.",                                                                    native: 'Tía y prima.',                                                                  correct: false, feedback: 'En español — traduce: "aunt and cousin".' },
        ],
      },
      { speaker: 'npc', target: "Got it — so close family. That's lovely.", native: 'Ya entendí — familia cercana. Qué lindo.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Explicaste relaciones familiares como un anglo — con frases completas y detalles.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'My aunt (en inglés)',  correct: ['My aunt', 'my aunt', 'My aunt.'] },
      { prompt: 'My cousin (en inglés)', correct: ['My cousin', 'my cousin', 'My cousin.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Cuéntale a alguien de uno de tus tíos en inglés. 'My aunt is...' / 'My uncle works in...'. Sin saltar el 'is'.",
    rwenSignoff: 'Familia extendida. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're visiting your cousin Lucia at her office in Boston. Her American boss is curious about how you two are related — explain your family connection in English.",
    rwenRole: "Linda, 50, Lucia's American boss. Curious, friendly, wants to understand the family network. Speaks clear American English.",
    successCriteria: "User uses 'my cousin', 'my aunt', 'my uncle' correctly. Explains relationships with full sentences ('Her mother is my mom's sister'). Doesn't drop verbs.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
