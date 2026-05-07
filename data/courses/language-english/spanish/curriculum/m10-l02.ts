import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02-angry-frustrated',
  module: 10,
  lesson: 2,
  title: 'Anger & Frustration — Enojo y frustración',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: enojo y frustración. Cómo expresar molestia sin pasar de la raya en EE.UU.",
    culturalNote: "Diferencia cultural muy fuerte: en muchos países latinos discutir alzando la voz es normal — no significa odio. En EE.UU. alzar la voz se interpreta como agresión seria, casi peligrosa. La fórmula segura es 'I'm frustrated' (estoy frustrado, suena profesional) en lugar de 'I'm angry' (suena más personal y fuerte). Y un truco: 'That's frustrating' es más amplio y menos personal que 'I'm angry'. En el trabajo o con desconocidos, usa frustración, no enojo.",
  },

  chunks: [
    {
      id: 'im_angry',
      target: "I'm angry",
      native: 'Estoy enojado / enojada',
      literal: 'I-am angry',
      emoji: '😠',
      phonetic: 'aym-ANG-gree',
      audioRef: null,
    },
    {
      id: 'im_frustrated',
      target: "I'm frustrated",
      native: 'Estoy frustrado / frustrada',
      literal: 'I-am frustrated',
      emoji: '😤',
      phonetic: 'aym-FRUS-tray-ted',
      audioRef: null,
    },
    {
      id: 'calm_down',
      target: 'Calm down',
      native: 'Cálmate',
      literal: 'be-calm down',
      emoji: '🌬️',
      phonetic: 'KAHM-down',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Frustration vs anger register',
    explanation: "'Frustrated' = profesional, suave, aceptable en cualquier contexto. 'Angry' = personal, intenso, mejor reservar para cosas serias. 'Annoyed' = un escalón más bajo (molesto pero no furioso). 'Upset' = combina enojo + tristeza, muy usado en EE.UU. Estructura: 'I'm + emotion + about/at/with + cause'.",
    examples: [
      { target: "I'm frustrated with the situation",  native: 'Estoy frustrado con la situación' },
      { target: "I'm a bit annoyed",                    native: 'Estoy un poco molesto' },
      { target: "I'm upset about what happened",        native: 'Estoy mal por lo que pasó' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las emociones',
      pairs: [
        { left: "I'm angry",       right: 'Estoy enojado' },
        { left: "I'm frustrated",  right: 'Estoy frustrado' },
        { left: "I'm upset",        right: 'Estoy mal' },
        { left: 'Calm down',         right: 'Cálmate' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'En una reunión laboral en EE.UU. discrepas fuerte con tu jefe. ¿Cómo lo expresas?',
      question: 'Most professional phrase:',
      options: [
        { text: "I'm a bit frustrated with this approach.", correct: true },
        { text: "I'm angry with you.",                        correct: false },
        { text: "Calm down!",                                  correct: false },
      ],
      explanation: '"Frustrated" es profesional. "Angry" suena personal. Y "Calm down" decirle a otro adulto en EE.UU. lo lee como condescendiente.',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — frustrado con la situación',
      sentence: "I'm frustrated ____ the situation.",
      options: ['with', 'at', 'on'],
      correct: 'with',
      context: '"Frustrated WITH" = frustrado con. "AT" sería para personas: "frustrated at someone".',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Estoy frustrado',
      correct: ["I'm frustrated", 'I am frustrated', "i'm frustrated"],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — un poco enojado contigo',
      words: ['you', 'with', 'angry', 'a', 'bit', "I'm"],
      correct: ["I'm", 'a', 'bit', 'angry', 'with', 'you'],
      translation: 'Estoy un poco enojado contigo',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Cálmate',
      correct: ['Calm down', 'calm down', 'Calm down.'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en una junta de trabajo en una oficina en Nueva York. Tu colega Mark cambió un plan sin avisarte y no estás contento.',
    lines: [
      { speaker: 'npc', target: "So I went ahead and changed the timeline. Hope that's OK!", native: 'Así que cambié el cronograma. ¡Espero que esté bien!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Honestly, I'm a bit frustrated. I would have liked to be consulted first.", native: 'La verdad, estoy un poco frustrado. Me hubiera gustado que me consultaras.', correct: true,  feedback: '¡Perfecto! "Frustrated" + razón. Profesional, claro, sin agresión.' },
          { target: "I'm angry with you!",                                                          native: '¡Estoy enojado contigo!',                                                       correct: false, feedback: 'Demasiado personal en una oficina de EE.UU. Usa "frustrated" — más profesional.' },
          { target: 'Calm down!',                                                                    native: '¡Cálmate!',                                                                     correct: false, feedback: 'Mark no está agitado — ese "calm down" suena condescendiente. No lo uses con otros adultos.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! En EE.UU. la frustración profesional + razón concreta = comunicación adulta. El enojo personal queda para temas serios.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Estoy frustrado (en inglés)', correct: ["I'm frustrated", 'I am frustrated', "i'm frustrated"] },
      { prompt: 'Estoy enojado (en inglés)',    correct: ["I'm angry", 'I am angry', "i'm angry"] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Identifica una situación que te frustra esta semana. Exprésala en inglés en tres formatos: "I\'m frustrated", "It\'s frustrating", "I\'m a bit annoyed". Siente la diferencia de tono.',
    rwenSignoff: 'Mañana: miedo y preocupación.',
  },

  phase8: {
    scenario: "You're in a tense workplace conversation in NYC. Your colleague made a unilateral decision that affects your project. Express your frustration professionally without escalating.",
    rwenRole: "Mark, 35, your coworker. Defensive at first, but listens.",
    successCriteria: "User uses 'I'm frustrated' or 'I'm a bit annoyed' instead of 'angry', explains the cause, and stays professional throughout.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
