import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01',
  module: 8,
  lesson: 1,
  title: 'How Much? — Imalini? / Yima?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Imalini? Three syllables that unlock every transaction in Zimbabwe. Literally: i-mali-ni — 'it-money-what?' Say this at any market, kombi rank, or tuck-shop in Bulawayo and you've already started the conversation.",
    culturalNote: "Zimbabweans live in two currencies at once. A vendor will quote you in US dollars (USD) for crafts and curios, and in ZiG (Zimbabwe Gold, the local currency since 2024) for vegetables and bread. The same loaf might cost ZiG30 or US$1.20. 'Imalini?' is your universal opener — they'll answer in whichever currency they prefer, and you adjust from there.",
  },

  chunks: [
    {
      id: 'imalini',
      target: 'Imalini?',
      native: 'How much (is it)?',
      literal: 'i- (it) + mali (money) + -ni (what?)',
      emoji: '💰',
      phonetic: 'ee-mah-LEE-nee',
      audioRef: null,
    },
    {
      id: 'yima',
      target: 'Yima?',
      native: 'How much? (short form, very common)',
      literal: 'colloquial contraction — used at street stalls, kombis',
      emoji: '🤔',
      phonetic: 'YEE-mah',
      audioRef: null,
    },
    {
      id: 'mali',
      target: 'Imali',
      native: 'Money',
      literal: 'noun — root of imalini',
      emoji: '💵',
      phonetic: 'ee-MAH-lee',
      audioRef: null,
    },
    {
      id: 'idola',
      target: 'Idola',
      native: 'Dollar (USD)',
      literal: 'singular — borrowed from English, prefix i-',
      emoji: '💲',
      phonetic: 'ee-DOH-lah',
      audioRef: null,
    },
    {
      id: 'lokhu',
      target: 'Yimalini lokhu?',
      native: 'How much is this?',
      literal: 'yi- (it is) + malini (how much) + lokhu (this)',
      emoji: '👆',
      phonetic: 'yee-mah-LEE-nee LOH-khoo',
      audioRef: null,
    },
  ],

  pattern: {
    name: '-ni turns a noun into a question',
    explanation: "isiNdebele attaches -ni to a noun to ask 'what?' about it. Mali (money) + ni = malini (how much money?). Sikhathi (time) + ni = sikhathini (when?). The i- prefix at the front is a class-9 noun marker — most price questions take it. You'll hear 'Imalini?' (full) at shops, 'Yima?' (clipped) on the street.",
    examples: [
      { target: 'Imalini?', native: 'How much?' },
      { target: 'Yima?', native: 'How much? (street)' },
      { target: 'Yimalini lokhu?', native: 'How much is this?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the isiNdebele to the English',
      pairs: [
        { left: 'Imalini?', right: 'How much (is it)?' },
        { left: 'Imali', right: 'Money' },
        { left: 'Idola', right: 'Dollar (USD)' },
        { left: 'Yimalini lokhu?', right: 'How much is this?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pointing at tomatoes at a Bulawayo stall',
      sentence: 'Yimalini ____?',
      options: ['lokhu', 'imali', 'idola'],
      correct: 'lokhu',
      context: "Yimalini lokhu? — How much is this?",
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele (the short street form)',
      prompt: 'How much? (clipped, casual)',
      correct: ['Yima?', 'Yima', 'yima', 'yima?'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A vendor quotes you in ZiG. You wanted USD. What did you say first to start the conversation?',
      question: 'Most natural opener at a market stall:',
      options: [
        { text: 'Imalini? — How much?', correct: true },
        { text: 'Idola — Dollar', correct: false },
        { text: 'Imali — Money', correct: false },
      ],
      explanation: "'Imalini?' is the question. 'Imali' alone just means 'money' — a statement, not a question. Always lead with 'Imalini?' to open the price negotiation.",
    },
  ],

  rwenDialogue: {
    intro: "Saturday morning at a fruit stall on 6th Avenue, Bulawayo. The vendor — a woman in a yellow doek — is sorting mangoes.",
    lines: [
      { speaker: 'rwen', rwenLine: "You see ripe mangoes. Just point and ask the price. Three syllables — that's all you need." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Imalini?', native: 'How much?', correct: true, feedback: "She glances up: 'US$1 amabili' — one dollar for two. Clean, polite, perfect opener." },
          { target: 'Idola.', native: 'Dollar.', correct: false, feedback: "That's just the word 'dollar' as a statement — she'll be confused. Ask the question: 'Imalini?'" },
          { target: 'Imali.', native: 'Money.', correct: false, feedback: "You said 'money' — not 'how much?'. Add the -ni: 'Imalini?'" },
        ],
      },
      { speaker: 'npc', target: 'US$1 amabili. Or ZiG40.', native: 'One US dollar for two. Or 40 ZiG.' },
      { speaker: 'rwen', rwenLine: "Notice — she gave you BOTH currencies. That's Zimbabwe in 2025. We'll learn to pick which one to pay with in lesson 9.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory. No peeking.',
    prompts: [
      { prompt: 'How much? (full polite form)', correct: ['Imalini?', 'Imalini', 'imalini', 'imalini?'] },
      { prompt: 'How much? (short street form)', correct: ['Yima?', 'Yima', 'yima', 'yima?'] },
      { prompt: 'How much is this?', correct: ['Yimalini lokhu?', 'Yimalini lokhu', 'yimalini lokhu', 'yimalini lokhu?'] },
    ],
  },

  mission: {
    title: 'Ask three prices today',
    task: "Find any item with a price tag — a coffee shop menu, a bottle of water in a fridge, a packet of crisps. Point at it and say 'Imalini?' out loud, three different items. Train your mouth to make this question reflexive — it's the single most-used phrase in your travel kit.",
    rwenSignoff: "Imalini opens every transaction in Zimbabwe. Tomorrow we count the answer.",
  },

  phase8: {
    scenario: "Saturday 9am at a fruit stall on 6th Avenue, Bulawayo. The vendor has fresh mangoes, bananas, and avocados laid out. You want to ask the price of two different items and find out if she takes USD or ZiG.",
    rwenRole: "MaNcube — fruit vendor, mid-50s, has been at this corner since 2009. Friendly but busy. Will quote in both currencies if asked.",
    successCriteria: "User opens with 'Imalini?' or 'Yimalini lokhu?' for at least one item. Recognises the dual-currency response (USD + ZiG) without panicking. No English-only fallback.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
