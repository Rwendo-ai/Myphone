import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-grandparents',
  module: 5,
  lesson: 4,
  title: 'Grandparents — Abuelos',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! 'Grandmother' = abuela. 'Grandfather' = abuelo. 'Grandchild' = nieto/nieta. En inglés todo se construye con 'grand-'.",
    culturalNote: "En español tenemos 'abuela/abuelo' y los cariñosos 'abu', 'abuelita', 'nono/nona' (en zonas con influencia italiana). En inglés casual son 'grandma' y 'grandpa'. La cultura latina pone a la abuela en un pedestal — sus dichos, sus consejos, sus historias se valoran. Un anglo va a entender ese cariño cuando lo cuentes en inglés: 'My grandmother used to say...' es una apertura emocional muy poderosa.",
  },

  chunks: [
    {
      id: 'grandmother',
      target: 'Grandmother',
      native: 'Abuela',
      literal: 'Gran-madre',
      emoji: '👵',
      phonetic: 'GRAND-ma-der',
      audioRef: null,
    },
    {
      id: 'grandfather',
      target: 'Grandfather',
      native: 'Abuelo',
      literal: 'Gran-padre',
      emoji: '👴',
      phonetic: 'GRAND-fa-der',
      audioRef: null,
    },
    {
      id: 'grandchild',
      target: 'Grandchild',
      native: 'Nieto/a',
      literal: 'Gran-hijo',
      emoji: '👶',
      phonetic: 'GRAND-cháild',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Grand- prefix',
    explanation: "El prefijo 'grand-' = 'abuelo/a' o 'nieto/a'. 'Grandmother' = abuela. 'Grandfather' = abuelo. 'Grandchild' = nieto. 'Grandchildren' = nietos (plural irregular del Módulo 4). Casual: 'grandma' y 'grandpa'. La forma 'used to + verb' es útil para hablar de abuelos: 'My grandmother USED TO bake bread' = 'mi abuela horneaba pan' (costumbre del pasado).",
    examples: [
      { target: 'My grandmother',     native: 'Mi abuela' },
      { target: 'My grandfather',     native: 'Mi abuelo' },
      { target: 'My grandchildren',   native: 'Mis nietos' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Grandmother',  right: 'Abuela' },
        { left: 'Grandfather',   right: 'Abuelo' },
        { left: 'Grandchild',    right: 'Nieto/a' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mi abuela',
      correct: ['My grandmother', 'My grandma', 'my grandmother', 'my grandma'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mis nietos',
      correct: ['My grandchildren', 'my grandchildren', 'My grandchildren.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa el plural irregular',
      sentence: 'I have three ____.',
      options: ['grandchildren', 'grandchilds', 'grandkids'],
      correct: 'grandchildren',
      context: 'Plural irregular: "grandchild" → "grandchildren". (Aunque "grandkids" también es muy común casual.)',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['My', 'grandmother', 'used', 'to', 'cook'],
      correct: ['My', 'grandmother', 'used', 'to', 'cook'],
      translation: 'Mi abuela cocinaba',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mi abuela solía decir...',
      correct: ['My grandmother used to say', 'My grandmother used to say...', "My grandmother used to say..."],
    },
  ],

  rwenDialogue: {
    intro: 'En una clase de inglés en LA. La maestra te pidió compartir algo importante de tu familia.',
    lines: [
      { speaker: 'npc', target: "You said your grandmother taught you something important — tell me.", native: 'Dijiste que tu abuela te enseñó algo importante — cuéntame.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "My grandmother used to say: 'Patience is a virtue.' She told me that often.", native: 'Mi abuela solía decir: "La paciencia es una virtud". Me lo decía a menudo.', correct: true,  feedback: 'Perfecto — "used to say" para costumbre del pasado, y trajiste el dicho a inglés.' },
          { target: "Grandmother says patience virtue.",                                              native: 'Abuela dice paciencia virtud.',                                                    correct: false, feedback: 'Idea correcta pero la frase quedó rota — usa "My grandmother used to say...".' },
          { target: "Mi abuela decía...",                                                             native: 'Mi abuela decía...',                                                                correct: false, feedback: 'Quedó en español — traduce todo: "My grandmother used to say...".' },
        ],
      },
      { speaker: 'npc', target: "That's beautiful — was she from your hometown?", native: 'Qué hermoso — ¿era de tu pueblo?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! "Used to say" es la fórmula para hablar de costumbres pasadas — la abuela vive en inglés.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'My grandmother (en inglés)', correct: ['My grandmother', 'My grandma', 'my grandmother', 'my grandma'] },
      { prompt: 'My grandchildren (en inglés)', correct: ['My grandchildren', 'my grandchildren', 'My grandchildren.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Cuenta algo de tu abuela o abuelo en inglés — usa 'My grandmother used to + verb' para costumbres del pasado.",
    rwenSignoff: 'Las abuelas mandan. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're in an ESL class in Los Angeles. The teacher invites students to share a memory of a grandparent who shaped them. Bring your abuela alive in English.",
    rwenRole: "Ms Johnson, 45, your ESL teacher. Encourages students to bring family stories — values authenticity over perfect grammar.",
    successCriteria: "User uses 'my grandmother' or 'my grandfather', uses 'used to + verb' for past habits, brings a saying or memory across in English (not just stating 'she was nice'). At least 3 sentences.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
