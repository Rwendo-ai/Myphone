import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-want-need',
  module: 8,
  lesson: 4,
  title: '"To want" & "to need" — Quiero / Necesito',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: 'want' (querer) y 'need' (necesitar). La diferencia entre deseo y necesidad. Y la versión más educada: 'I'd like'.",
    culturalNote: "En EE.UU. 'I want' suena directo, casi exigente — sobre todo en restaurantes o pidiendo favores. La versión educada es 'I'd like' (quisiera). En español 'quiero un café' es perfectamente educado en un café latinoamericano. En EE.UU. el server lo lee como cortante — usa 'I'd like' o 'Could I have'. 'I need' funciona bien para necesidades reales (medicina, ayuda, información). No abuses de 'I need' para cosas que solo quieres.",
  },

  chunks: [
    {
      id: 'i_want_coffee',
      target: 'I want coffee.',
      native: 'Quiero café.',
      literal: 'I want coffee',
      emoji: '☕',
      phonetic: 'ay-WONT-KAW-fee',
      audioRef: null,
    },
    {
      id: 'i_need_a_break',
      target: 'I need a break.',
      native: 'Necesito un descanso.',
      literal: 'I need a break',
      emoji: '😮‍💨',
      phonetic: 'ay-NEED-uh-BRAYK',
      audioRef: null,
    },
    {
      id: 'id_like_tea',
      target: "I'd like tea, please.",
      native: 'Quisiera té, por favor.',
      literal: 'I would like tea, please',
      emoji: '🍵',
      phonetic: 'ayd-LAYK-TEE-PLEEZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Want / need / would like',
    explanation: "'I want' = quiero (directo, casual). 'I need' = necesito (necesidad real). 'I'd like' = quisiera (educado, equivalente formal de 'I want'). En servicio (restaurantes, tiendas) usa siempre 'I'd like' o 'Could I have'. En conversación con amigos, 'I want' está bien.",
    examples: [
      { target: "I'd like a glass of water",   native: 'Quisiera un vaso de agua' },
      { target: 'I need help',                  native: 'Necesito ayuda' },
      { target: 'I want to learn English',     native: 'Quiero aprender inglés' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'I want',     right: 'Quiero' },
        { left: 'I need',     right: 'Necesito' },
        { left: "I'd like",   right: 'Quisiera' },
        { left: 'Could I have', right: '¿Me podría dar?' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pides café en un Starbucks. ¿Qué opción es la más educada?',
      question: 'Best phrase to use:',
      options: [
        { text: "I'd like a coffee, please.", correct: true },
        { text: 'I want coffee.',              correct: false },
        { text: 'Coffee.',                      correct: false },
      ],
      explanation: '"I\'d like" + "please" es la fórmula educada de servicio en EE.UU. "I want" suena directo a la cara del barista.',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — necesitas un médico ahora',
      sentence: 'I ____ a doctor.',
      options: ['want', 'need', 'would like'],
      correct: 'need',
      context: 'Necesidad real, no preferencia. "Need" es la palabra correcta.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — pides educadamente',
      prompt: 'Quisiera té, por favor',
      correct: ["I'd like tea, please", "I would like tea, please", "I'd like some tea, please"],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — necesito un descanso',
      words: ['break', 'need', 'a', 'I'],
      correct: ['I', 'need', 'a', 'break'],
      translation: 'Necesito un descanso',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Quiero aprender inglés',
      correct: ['I want to learn English', 'i want to learn English', 'I want to learn english'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en una farmacia CVS en Miami. Tienes dolor de cabeza y necesitas algo fuerte.',
    lines: [
      { speaker: 'npc', target: "Hi, can I help you?", native: 'Hola, ¿le puedo ayudar?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I need something for a headache. I'd like the strongest one, please.", native: 'Sí, necesito algo para dolor de cabeza. Quisiera el más fuerte, por favor.', correct: true,  feedback: '¡Perfecto! "I need" para la necesidad real, "I\'d like" para la preferencia. Combinación profesional.' },
          { target: "I want medicine.",                                                              native: 'Quiero medicina.',                                                              correct: false, feedback: '"I want" suena exigente. Y "medicine" es muy general — la farmacéutica no sabe qué darte.' },
          { target: 'Headache pills now.',                                                            native: 'Pastillas para dolor de cabeza ahora.',                                          correct: false, feedback: 'Suena a orden. Usa "I need" o "I\'d like" + "please".' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! "I need" + "I\'d like" funcionan juntas perfecto: necesidad + preferencia específica.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Necesito un descanso (en inglés)', correct: ['I need a break', 'i need a break', 'I need a break.'] },
      { prompt: 'Quisiera té, por favor (en inglés)', correct: ["I'd like tea, please", "I would like tea, please", "i'd like tea, please"] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'En tu próxima compra (café, comida, lo que sea), reemplaza mentalmente "I want" por "I\'d like" — siente la diferencia de tono.',
    rwenSignoff: 'Mañana entramos a la rutina diaria — tu mañana en inglés.',
  },

  phase8: {
    scenario: "You're at a US pharmacy describing what you need. You have a cold, want to know what's the best option, and need to ask for prescription advice.",
    rwenRole: "Diane, 50, pharmacist. Patient, gives recommendations.",
    successCriteria: "User uses 'I need' for real needs, 'I'd like' for preferences and polite requests, and 'I want' only in casual self-talk if at all.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
