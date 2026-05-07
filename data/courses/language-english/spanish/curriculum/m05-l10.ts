import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-conversation',
  module: 5,
  lesson: 10,
  title: 'A family conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "¡Hola! Cerramos el Módulo 5 con la prueba final: contar tu familia entera en inglés. Padres, hermanos, hijos, abuelos, tíos, amigos como familia. La fórmula completa.",
    culturalNote: "Para muchos hispanohablantes en EE.UU., UK o Australia, contar tu familia en inglés es un acto íntimo. Llevas la sobremesa latina al inglés — los nombres de los abuelos, las anécdotas de los tíos, los rituales del domingo. Los anglos respetan ese calor familiar — incluso lo envidian. Cuando termines este módulo, vas a poder presentar tu mundo entero en inglés. Y eso es lo más cerca que vas a estar de hablar como bilingüe completo.",
  },

  chunks: [
    {
      id: 'family_intro',
      target: 'I have a big family — my parents, two siblings, and many cousins.',
      native: 'Tengo una familia grande — mis padres, dos hermanos, y muchos primos.',
      literal: undefined,
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ai-JAV-a-BIG-FA-mi-li',
      audioRef: null,
    },
    {
      id: 'extended_family',
      target: 'My grandmother lives in our hometown, and my aunt — my father\'s sister — lives in Cartagena.',
      native: 'Mi abuela vive en nuestro pueblo, y mi tía — la hermana de mi papá — vive en Cartagena.',
      literal: undefined,
      emoji: '🏘️',
      phonetic: 'mai-GRAND-ma-der-LIVS',
      audioRef: null,
    },
    {
      id: 'family_actions',
      target: "I visit them once a month, I call my mom every day, and I miss my brother who lives abroad.",
      native: 'Los visito una vez al mes, llamo a mi mamá todos los días, y extraño a mi hermano que vive en el extranjero.',
      literal: undefined,
      emoji: '📞',
      phonetic: 'ai-VI-sit-dem',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full family flow',
    explanation: "El paquete completo: (1) Tamaño — 'I have a big/small family'. (2) Núcleo — 'my parents, my siblings'. (3) Extendida — 'my grandparents, aunts, uncles, cousins'. (4) Verbos de conexión — 'I visit, call, miss'. (5) Toques emocionales — 'like family', 'used to say'. Cuando manejas todo esto en una conversación, ya cuentas tu mundo en inglés.",
    examples: [
      { target: 'I have a big family — my parents, two siblings, and many cousins.',     native: 'Tengo una familia grande — mis padres, dos hermanos, y muchos primos.' },
      { target: "My grandmother used to live with us; she's like a second mother.",       native: 'Mi abuela vivía con nosotros; es como una segunda mamá.' },
      { target: "I miss my brother — I call him every Sunday.",                            native: 'Extraño a mi hermano — lo llamo cada domingo.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'a big family',           right: 'una familia grande' },
        { left: 'my parents',              right: 'mis padres' },
        { left: "I miss my brother",       right: 'extraño a mi hermano' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tengo una familia grande — mis padres, dos hermanos, y muchos primos.',
      correct: [
        'I have a big family — my parents, two siblings, and many cousins.',
        'I have a big family - my parents, two siblings, and many cousins.',
        'I have a big family. My parents, two siblings, and many cousins.',
        'i have a big family — my parents, two siblings, and many cousins.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mi abuela solía vivir con nosotros',
      correct: [
        'My grandmother used to live with us',
        'My grandmother used to live with us.',
        'My grandma used to live with us',
        'my grandmother used to live with us.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con el verbo emocional',
      sentence: 'I ____ my brother — I call him every Sunday.',
      options: ['miss', 'visit', 'call'],
      correct: 'miss',
      context: '"Miss" = extrañar — el verbo del cariño a distancia.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la presentación',
      words: ['I', 'have', 'a', 'big', 'family'],
      correct: ['I', 'have', 'a', 'big', 'family'],
      translation: 'Tengo una familia grande',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (frase con muchos verbos)',
      prompt: 'Los visito una vez al mes, llamo a mi mamá todos los días, y extraño a mi hermano',
      correct: [
        'I visit them once a month, I call my mom every day, and I miss my brother',
        'I visit them once a month, I call my mom every day, and I miss my brother.',
        'I visit them once a month, call my mom every day, and miss my brother.',
        'i visit them once a month, i call my mom every day, and i miss my brother.',
      ],
    },
  ],

  rwenDialogue: {
    intro: 'Sesión final del Módulo 5 con tu maestra de ESL. Te pide pintar el cuadro completo de tu familia.',
    lines: [
      { speaker: 'npc', target: "Tell me about your family — everyone, the full picture.", native: 'Cuéntame de tu familia — todos, el cuadro completo.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have a big family. My parents live in Lima with my younger brother. My older sister and I live abroad — she's in Madrid, I'm here. My grandmother used to live with us, and she's like a second mother to me. I have many cousins on my mother's side. I call my mom every day, I visit my parents twice a year, and I miss my sister — we call every weekend.", native: 'Cuadro familiar completo en inglés.', correct: true,  feedback: 'Perfecto — manejaste TODO el módulo: parents, siblings, grandmother, cousins, "used to", "like a second mother", call/visit/miss. Eso es nivel B1 en familia.' },
          { target: "My family is big.",                                                                                                                                                                                                                                                                                                                                                          native: 'Mi familia es grande.',                  correct: false, feedback: 'Demasiado corto — la maestra quiere todo el cuadro. Agrega quién, dónde, qué hacen.' },
          { target: "Mi familia es grande — mis padres, mis hermanos...",                                                                                                                                                                                                                                                                                                                          native: 'En español.',                            correct: false, feedback: 'En español — traduce todo al inglés.' },
        ],
      },
      { speaker: 'npc', target: "Wonderful — your family came alive in English. Module 5 complete.", native: 'Maravilloso — tu familia cobró vida en inglés. Módulo 5 completo.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Lo lograste! Cerraste el Módulo 5 — ya cuentas a tu familia entera en inglés. Tu mundo latino vive ahora en dos idiomas.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe la presentación familiar completa.',
    prompts: [
      { prompt: 'I have a big family (en inglés)',                  correct: ['I have a big family', 'I have a big family.', 'i have a big family'] },
      { prompt: 'My parents, my siblings, my cousins (en inglés)',   correct: ['My parents, my siblings, my cousins', 'my parents, my siblings, my cousins', 'My parents, my siblings, my cousins.'] },
    ],
  },

  mission: {
    title: 'Tarea Final del Módulo 5',
    task: "Cuenta tu familia entera en inglés — padres, hermanos, abuelos, tíos, primos. Mínimo 5 frases. Sin mirar tus apuntes.",
    rwenSignoff: 'Cerraste el Módulo 5 — tu mundo latino vive en inglés ahora. La familia es para siempre.',
  },

  phase8: {
    scenario: "Final session of Module 5 with your ESL teacher in Los Angeles. She asks you to paint the full picture of your family — parents, siblings, grandparents, aunts/uncles, cousins, all of them. Bring your Latino family world into English.",
    rwenRole: "Ms Johnson, 45, your ESL teacher. Genuinely curious about your family — she asks follow-ups about specific people. Speaks slow clear American English.",
    successCriteria: "User describes parents + siblings + at least one extended family member (grandparents/aunts/uncles/cousins). Uses 'used to', 'like family', and at least one of visit/call/miss. Coherent 5+ sentence narrative.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
