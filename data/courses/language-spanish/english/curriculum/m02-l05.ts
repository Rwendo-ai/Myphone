import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-no-entiendo',
  module: 2,
  lesson: 5,
  title: "No entiendo — I Don't Understand",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Native Spanish speakers are fast. You're going to feel lost sometimes — and that's completely normal. These three phrases are your emergency tools. They buy you time and keep the conversation alive.",
    culturalNote: "Asking someone in Latin America to slow down or repeat is never seen as rude. It signals you're trying — and Spanish speakers respect the effort. Most will slow down happily, switch to simpler words, or even teach you the phrase you were missing. Silence and a frozen smile is much worse than 'no entiendo'.",
  },

  chunks: [
    {
      id: 'no_entiendo',
      target: 'No entiendo',
      native: "I don't understand",
      literal: 'Not I-understand',
      emoji: '😕',
      phonetic: 'no en-TYEN-doh',
      audioRef: null,
    },
    {
      id: 'mas_despacio',
      target: 'Más despacio, por favor',
      native: 'Slower, please',
      literal: 'More slowly, please',
      emoji: '🐢',
      phonetic: 'mas dehs-PAH-syo por fah-VOR',
      audioRef: null,
    },
    {
      id: 'puede_repetir',
      target: '¿Puede repetir?',
      native: 'Can you repeat? (formal)',
      literal: 'Can-you repeat',
      emoji: '🔄',
      phonetic: 'PWEH-deh reh-peh-TEER',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite requests with usted — ¿Puede...?',
    explanation: "'¿Puede...?' (can you...?, formal) is the cleanest, most polite way to ask anything. Plug in any infinitive verb: 'puede repetir' (can you repeat), 'puede hablar más despacio' (can you speak slower), 'puede ayudarme' (can you help me). The informal version with friends is 'puedes' — but with strangers, default to 'puede'.",
    examples: [
      { target: '¿Puede repetir?', native: 'Can you repeat? (formal)' },
      { target: '¿Puede hablar más despacio?', native: 'Can you speak slower? (formal)' },
      { target: '¿Puede ayudarme?', native: 'Can you help me? (formal)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'No entiendo', right: "I don't understand" },
        { left: 'Más despacio', right: 'Slower' },
        { left: '¿Puede repetir?', right: 'Can you repeat?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Make the request polite',
      sentence: 'Más despacio, _____.',
      options: ['por favor', 'gracias', 'de nada'],
      correct: 'por favor',
      context: 'A local is speaking very fast.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Slower, please',
      correct: ['Más despacio, por favor', 'más despacio, por favor', 'Más despacio por favor', 'más despacio por favor', 'Mas despacio, por favor'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone speaks very fast and you missed everything. What's the best response?",
      question: 'Choose the best response',
      options: [
        { text: '¿Puede repetir, más despacio por favor?', correct: true },
        { text: 'No sé', correct: false },
        { text: 'De nada', correct: false },
      ],
      explanation: "Asking them to repeat AND go slower gives you the best chance of catching it. Stack both tools.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Can you repeat, please?"',
      words: ['repetir,', '¿Puede', 'por favor?'],
      correct: ['¿Puede', 'repetir,', 'por favor?'],
      translation: 'Can you repeat, please?',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I don't understand",
      correct: ['No entiendo', 'no entiendo'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen speaks quickly. You need to slow the conversation down.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: '¿Estás contento aprendiendo español? ¡Qué bueno escuchar que estás haciendo el esfuerzo!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'No entiendo. Más despacio, por favor.', native: "I don't understand. Slower, please.", correct: true, feedback: "Exactly right — you named the problem and asked for what you need." },
          { target: 'Lo sé', native: 'I know', correct: false, feedback: "Only say that if you truly understood. Pretending slows your learning." },
          { target: 'No sé', native: "I don't know", correct: false, feedback: "Close — but 'no entiendo' (I don't understand) fits better than 'no sé' (I don't know) when speed is the issue." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Claro! Te dije: ¿Estás... contento... aprendiendo... español? Eso es todo.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Asking for slower speech isn't weakness — it's exactly what good learners do.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Slower, please', correct: ['Más despacio, por favor', 'más despacio, por favor', 'Mas despacio, por favor'] },
      { prompt: "I don't understand", correct: ['No entiendo', 'no entiendo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Watch 2 minutes of Spanish audio or video online today. When you get lost, say 'más despacio' out loud — even to a recording.",
    rwenSignoff: "Slow is smooth. Smooth is fluent. ¡Buen camino!",
  },

  phase8: {
    scenario: "You're in a packed colectivo on the Roma Norte–Polanco run in Mexico City and the driver is rattling off the change he owes you, his next stop, and which corner you should get off at — all in machine-gun chilango Spanish. You can't catch a single word but the colectivo's about to pull off.",
    rwenRole: "Beto — colectivo driver, ~35, fast-talking and impatient with passengers who fumble their fare; will respect a learner who admits the gap, won't respect a blank stare.",
    successCriteria: "User says 'No entiendo' to name the problem, follows with '¿Puede hablar más despacio, por favor?' (NOT just '¿Puede repetir?' — speed is the issue, not memory), and uses '¿Puede repetir?' on the second pass when he still goes too fast.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
