import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l09-salawikain',
  module: 10,
  lesson: 9,
  title: 'Mga salawikain — Filipino Proverbs',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Every Filipino lola has a saying for every moment. **Salawikain** — proverbs — are the country's collective wisdom, polished by generations. Today you learn three. Drop one at the right moment, and you don't just speak Tagalog — you carry it.",
    culturalNote: "Salawikain are quoted at weddings, eulogies, classroom lessons, and Sunday tables. The patience proverb 'kapag may tiyaga, may nilaga' is the unofficial motto of Filipino perseverance — *tiyaga* (patience) earns *nilaga* (slow-cooked stew). Wisdom and food, fused.",
  },

  chunks: [
    {
      id: 'kapag_may_tiyaga',
      target: 'Kapag may tiyaga, may nilaga',
      native: 'If you have patience, you have stew (patience pays off)',
      literal: 'If have patience, have slow-stew',
      emoji: '🍲',
      phonetic: 'KA-pag may ti-YA-ga, may ni-LA-ga',
      audioRef: null,
    },
    {
      id: 'ang_hindi_marunong_lumingon',
      target: 'Ang hindi marunong lumingon sa pinanggalingan, hindi makakarating sa paroroonan',
      native: "Those who don't look back at where they came from won't reach where they're going",
      literal: 'The not knowing to-look-back at where-came-from, not will-reach at where-going',
      emoji: '🧭',
      phonetic: 'ang hin-DI ma-RU-nong lu-MI-ngon sa pi-NANG-ga-li-ngan',
      audioRef: null,
    },
    {
      id: 'walang_matigas_na_tinapay',
      target: 'Walang matigas na tinapay sa mainit na kape',
      native: 'No bread is too hard for hot coffee (everything softens with effort)',
      literal: 'None hard linker bread in hot linker coffee',
      emoji: '☕',
      phonetic: 'wa-LANG ma-TI-gas na ti-na-PAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Salawikain — wisdom in shape',
    explanation: "Salawikain follow patterns: **kapag X, may Y** ('if X, then Y'), or **ang hindi X, hindi Y** ('the one who does not X, will not Y'), or sharp images like *walang matigas na tinapay sa mainit na kape*. They use rhyme (tiyaga/nilaga), opposites, and food metaphors. You don't need to invent — you just need to know when to drop one.",
    examples: [
      { target: 'Kapag may tiyaga, may nilaga', native: 'Patience earns the stew' },
      { target: 'Ang hindi lumingon sa pinanggalingan...', native: "The one who doesn't honour their roots..." },
      { target: 'Walang matigas na tinapay sa mainit na kape', native: 'Hot coffee softens hard bread' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the salawikain to its meaning',
      pairs: [
        { left: 'Kapag may tiyaga, may nilaga', right: 'Patience pays off' },
        { left: 'Ang hindi marunong lumingon...', right: "Honour where you came from" },
        { left: 'Walang matigas na tinapay sa mainit na kape', right: 'Effort softens any hardship' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You\'re encouraging a friend studying for an exam. Drop the patience proverb.',
      sentence: 'Kapag may _____, may nilaga.',
      options: ['tiyaga', 'galit', 'ulo'],
      correct: 'tiyaga',
      context: 'Tiyaga = patience. The whole proverb hinges on it.',
    },
    {
      type: 'translate',
      instruction: 'Type the patience salawikain in Tagalog',
      prompt: 'If you have patience, you have stew (the perseverance proverb)',
      correct: ['Kapag may tiyaga, may nilaga', 'kapag may tiyaga, may nilaga', 'Kapag may tiyaga may nilaga'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to build the patience proverb',
      words: ['nilaga', 'tiyaga,', 'Kapag', 'may', 'may'],
      correct: ['Kapag', 'may', 'tiyaga,', 'may', 'nilaga'],
      translation: 'If you have patience, you have stew',
    },
    {
      type: 'multiple_choice',
      instruction: "Your titá says someone forgot the family who raised them. Which salawikain fits?",
      question: 'Pick the right proverb',
      options: [
        { text: 'Ang hindi marunong lumingon sa pinanggalingan, hindi makakarating sa paroroonan', correct: true },
        { text: 'Kapag may tiyaga, may nilaga', correct: false },
        { text: 'Sana umulan', correct: false },
      ],
      explanation: "This one is the 'honour your roots' proverb — exactly what your titá meant.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'No bread is too hard for hot coffee (the effort-softens-everything proverb, just the saying)',
      correct: ['Walang matigas na tinapay sa mainit na kape', 'walang matigas na tinapay sa mainit na kape'],
    },
  ],

  rwenDialogue: {
    intro: "Your kaibigan is exhausted from studying for the bar exam. She slumps over a cup of coffee. You sit beside her.",
    lines: [
      {
        speaker: 'npc',
        target: 'Hindi ko na kaya. Sobrang hirap.',
        native: "I can't anymore. It's so hard.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Kapag may tiyaga, may nilaga, kaibigan.', native: 'If you have patience, you have stew, friend.', correct: true, feedback: "Perfect drop. The right salawikain at the right moment is more powerful than any pep talk." },
          { target: 'Galit ako.', native: "I'm angry.", correct: false, feedback: 'Wrong feeling — she needs encouragement, not anger.' },
          { target: 'Masaya ako.', native: "I'm happy.", correct: false, feedback: "Disconnected from her moment. A salawikain would land better here." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Salamat... totoo ngà. Tutuloy ko.',
        native: 'Thanks... it really is true. I\'ll keep going.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You spoke a salawikain like a tita who knows. That's wisdom borrowed from generations.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The patience salawikain (full proverb)', correct: ['Kapag may tiyaga, may nilaga', 'kapag may tiyaga, may nilaga', 'Kapag may tiyaga may nilaga'] },
      { prompt: 'The "hot coffee softens hard bread" salawikain', correct: ['Walang matigas na tinapay sa mainit na kape', 'walang matigas na tinapay sa mainit na kape'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Memorise one salawikain — your favourite of today's three. Repeat it three times out loud. The next time someone you love is struggling, drop it.",
    rwenSignoff: "Kapag may tiyaga, may nilaga. You've had the tiyaga. Tomorrow, the nilaga.",
  },

  phase8: {
    scenario: "You're at a Filipino kaibigan's birthday salu-salo (gathering). Someone at the table is venting — a tough season at work, a long road ahead. The conversation pauses. You've just learned three salawikain. Drop one at the right moment.",
    rwenRole: "Tita Beth — your friend's aunt, 60s, the family wisdom-keeper, who quietly watches who knows the salawikain.",
    successCriteria: "User correctly delivers one of the three salawikain (tiyaga/nilaga, lumingon sa pinanggalingan, or matigas na tinapay) at a moment that fits the conversation. Bonus: explains in one line why they chose that one.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
