import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-friends',
  module: 5,
  lesson: 7,
  title: 'Friends as family — Amigos como familia',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! En la cultura latina, los amigos íntimos se vuelven familia — los llamamos 'mi hermano del alma' o 'mi otra mamá'. En inglés se dice 'like family' o 'they're like a brother/sister to me'.",
    culturalNote: "El concepto del amigo-familia ('chosen family') existe en ambas culturas, pero en Latinoamérica está más institucionalizado: padrinos, comadres, vecinos de toda la vida. En inglés casual se dice 'like a brother to me' / 'like a sister'. Y la frase 'I've missed you' (te extrañé/te eché de menos) es la apertura emocional más fuerte que puedes hacer en inglés con un amigo cercano. La cultura latina usa esta expresividad emocional libremente; el anglo la guarda para los más cercanos.",
  },

  chunks: [
    {
      id: 'best_friend',
      target: 'Best friend',
      native: 'Mejor amigo/a',
      literal: 'Mejor amigo',
      emoji: '💛',
      phonetic: 'best-FREND',
      audioRef: null,
    },
    {
      id: 'close_friends',
      target: 'Close friends',
      native: 'Amigos cercanos',
      literal: 'Cerca amigos',
      emoji: '🤝',
      phonetic: 'klóus-FRENDS',
      audioRef: null,
    },
    {
      id: 'like_family',
      target: 'Like family',
      native: 'Como familia',
      literal: 'Como familia',
      emoji: '👨‍👩‍👧',
      phonetic: 'láik-FA-mi-li',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Friend as family expressions',
    explanation: "Frases comunes: 'My best friend' / 'They're like family' / 'Like a sister to me'. Para reencuentros: 'I've missed you' (te extrañé) — está en pretérito perfecto, pero significa hasta ahora mismo. 'It's been forever!' = '¡Ha pasado una eternidad!'. Estas son las frases emocionales que abren puertas con amigos cercanos en inglés.",
    examples: [
      { target: 'My best friend',              native: 'Mi mejor amigo' },
      { target: "They're like family.",         native: 'Son como familia.' },
      { target: "She's like a sister to me.",   native: 'Es como una hermana para mí.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Best friend',     right: 'Mejor amigo' },
        { left: 'Close friends',    right: 'Amigos cercanos' },
        { left: 'Like family',      right: 'Como familia' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mi mejor amiga',
      correct: ['My best friend', 'my best friend', 'My best friend.'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Te extrañé mucho',
      correct: ["I've missed you so much", "I've missed you so much.", "I missed you so much", 'I have missed you so much'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la frase emotiva',
      sentence: "She's like a ____ to me.",
      options: ['sister', 'cousin', 'aunt'],
      correct: 'sister',
      context: '"Like a sister to me" es la fórmula afectiva clásica.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ["I've", 'missed', 'you', 'so', 'much'],
      correct: ["I've", 'missed', 'you', 'so', 'much'],
      translation: 'Te extrañé mucho',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Son como familia para mí',
      correct: [
        "They're like family to me",
        "They're like family to me.",
        "They are like family to me",
        "they're like family to me.",
      ],
    },
  ],

  rwenDialogue: {
    intro: 'Te encuentras con una amiga de la infancia en una cafetería en Bogotá — pero ahora ella vive en Sydney y solo está de visita.',
    lines: [
      { speaker: 'npc', target: "Oh my word — it's been forever! How are you?", native: '¡Caramba — ha pasado una eternidad! ¿Cómo estás?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm well — and I've missed you so much. You know you're like a sister to me.", native: 'Estoy bien — y te extrañé mucho. Sabes que eres como una hermana para mí.', correct: true,  feedback: 'Perfecto — "I\'ve missed you" + "like a sister" — emocional pero apropiado para amistad cercana.' },
          { target: "Good. Long time.",                                                              native: 'Bien. Mucho tiempo.',                                                          correct: false, feedback: 'Demasiado corto — la amiga está esperando emoción. Agrega "I\'ve missed you".' },
          { target: "Te extrañé.",                                                                    native: 'Te extrañé.',                                                                   correct: false, feedback: 'Quedó en español — traduce: "I\'ve missed you so much".' },
        ],
      },
      { speaker: 'npc', target: "Same here — you're family to me, you know that.", native: 'Igualmente — eres familia para mí, lo sabes.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Trajiste el calor latino al inglés — "like a sister" + "missed you". Eso es bilingüe emocional.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'My best friend (en inglés)',      correct: ['My best friend', 'my best friend', 'My best friend.'] },
      { prompt: "I've missed you (en inglés)",     correct: ["I've missed you", "I've missed you.", 'I have missed you', 'I missed you'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Cuéntale a alguien — aunque sea por mensaje — sobre un amigo cercano en inglés. 'My best friend is like a sister/brother to me.'",
    rwenSignoff: 'Amigos como familia. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You bump into a childhood friend at a cafe in Bogotá — she now lives in Sydney and is only visiting for a few days. Bring the warmth of Latin friendship into your English.",
    rwenRole: "Camila, 33, your childhood best friend, now Sydney-based. Switches between Spanish and English mid-sentence, but the conversation runs in English.",
    successCriteria: "User uses 'I've missed you' (or 'I missed you'), uses 'like a sister/brother to me' or 'like family', shows emotional warmth in English. Doesn't fall back into Spanish for the emotional moments.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
