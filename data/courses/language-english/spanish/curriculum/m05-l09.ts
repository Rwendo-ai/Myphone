import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-family-stories',
  module: 5,
  lesson: 9,
  title: 'Telling family stories — Contar historias',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Las historias de familia se cuentan con tres frases mágicas: 'A long time ago' (hace mucho tiempo), 'My grandmother used to...' (mi abuela solía...), 'He always says...' (él siempre dice...).",
    culturalNote: "La cultura latina vive de las historias familiares — sobremesa larga, anécdotas que se repiten generación tras generación, refranes de los abuelos. Cuando cuentas estas historias en inglés a un anglo, lo que más conmueve no es la gramática perfecta, sino llevar la sabiduría latina al otro idioma. 'My grandmother used to say: Patience is a virtue.' Eso resuena. La frase 'used to + verb' es la herramienta para hablar de costumbres pasadas.",
  },

  chunks: [
    {
      id: 'long_time_ago',
      target: 'A long time ago',
      native: 'Hace mucho tiempo',
      literal: 'Un largo tiempo hace',
      emoji: '⏳',
      phonetic: 'a-LONG-táim-a-GÓU',
      audioRef: null,
    },
    {
      id: 'used_to',
      target: 'My grandmother used to...',
      native: 'Mi abuela solía...',
      literal: 'Mi abuela usaba a...',
      emoji: '👵',
      phonetic: 'mai-GRAND-ma-der-IÚSD-tu',
      audioRef: null,
    },
    {
      id: 'always_says',
      target: 'He always says...',
      native: 'Él siempre dice...',
      literal: 'Él siempre dice',
      emoji: '💬',
      phonetic: 'ji-OL-uéis-SES',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Used to / Always',
    explanation: "'Used to + (verbo)' = costumbre del pasado que ya no existe. 'My grandmother used to live in the village' = mi abuela vivía en el pueblo (ya no). 'Always says + (frase)' = siempre dice (presente repetido). Para contar historias: empieza con 'A long time ago' o 'When I was a child', sigue con 'My + (familiar) used to + (verbo)'. Es la fórmula clásica.",
    examples: [
      { target: 'A long time ago, my grandmother lived in the village.', native: 'Hace mucho tiempo, mi abuela vivía en el pueblo.' },
      { target: 'My grandfather used to tell us stories.',                native: 'Mi abuelo nos contaba historias.' },
      { target: "My uncle always says: 'Patience is power.'",            native: 'Mi tío siempre dice: "La paciencia es poder".' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'A long time ago',           right: 'Hace mucho tiempo' },
        { left: 'My grandmother used to...',  right: 'Mi abuela solía...' },
        { left: 'He always says...',           right: 'Él siempre dice...' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Hace mucho tiempo',
      correct: ['A long time ago', 'a long time ago', 'A long time ago,'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mi abuelo solía cocinar',
      correct: ['My grandfather used to cook', 'My grandfather used to cook.', 'My grandpa used to cook'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la fórmula',
      sentence: 'My grandmother ____ to bake bread.',
      options: ['used', 'use', 'using'],
      correct: 'used',
      context: '"Used to + verbo" = costumbre del pasado.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['My', 'grandfather', 'used', 'to', 'tell', 'stories'],
      correct: ['My', 'grandfather', 'used', 'to', 'tell', 'stories'],
      translation: 'Mi abuelo solía contar historias',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (con dicho del abuelo)',
      prompt: 'Mi tío siempre dice: "La paciencia es poder"',
      correct: [
        "My uncle always says: 'Patience is power.'",
        'My uncle always says: "Patience is power."',
        "My uncle always says: Patience is power.",
        "my uncle always says: 'patience is power.'",
      ],
    },
  ],

  rwenDialogue: {
    intro: 'En un evento intergeneracional latino en LA. Te piden compartir una historia familiar en inglés para los nietos que solo hablan inglés.',
    lines: [
      { speaker: 'npc', target: "Tell us a family story — anything that's stayed with you.", native: 'Cuéntanos una historia familiar — cualquier cosa que te haya quedado.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A long time ago, my grandmother used to bake bread every Sunday. The whole village would smell it. She used to say: 'Bread brings family together.'", native: 'Hace mucho, mi abuela horneaba pan los domingos. Todo el pueblo lo olía. Solía decir: "El pan une a la familia".', correct: true,  feedback: 'Perfecto — "A long time ago" + "used to bake" + "used to say" + dicho. Trajiste a tu abuela al inglés con todo el calor latino.' },
          { target: "Mi abuela horneaba pan.",                                                                                                                                  native: 'Mi abuela horneaba pan.',                                                                                            correct: false, feedback: 'Quedó en español — los nietos solo hablan inglés. Traduce: "My grandmother used to bake bread".' },
          { target: "Grandmother bake bread.",                                                                                                                                   native: 'Abuela hornear pan.',                                                                                                correct: false, feedback: 'Falta "used to" + "the" — la historia necesita estructura. "My grandmother used to bake bread."' },
        ],
      },
      { speaker: 'npc', target: "That's beautiful — thank you for sharing.", native: 'Qué hermoso — gracias por compartir.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Lo lograste! Las historias familiares latinas vivirán en inglés gracias a "used to". La sabiduría se traduce.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'A long time ago (en inglés)',           correct: ['A long time ago', 'a long time ago', 'A long time ago,'] },
      { prompt: 'My grandmother used to (en inglés)',    correct: ['My grandmother used to', 'My grandma used to', 'my grandmother used to'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Cuenta una historia corta de un abuelo o abuela en inglés. Usa 'A long time ago' + 'used to + verbo'.",
    rwenSignoff: 'Las historias viven. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're at an intergenerational Latino community event in Los Angeles. They ask you to share a family story in English so the bilingual grandkids can understand.",
    rwenRole: "Mr Robinson, 60, an event organizer. American, warm, encourages story-sharing. Speaks clear English.",
    successCriteria: "User opens with 'A long time ago' or 'When I was a child', uses 'used to + verb' for past habits, brings a saying or proverb across in English. Tells a coherent 3+ sentence story.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
