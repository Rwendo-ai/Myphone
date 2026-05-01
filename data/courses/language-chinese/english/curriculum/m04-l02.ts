import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-tone-words',
  module: 4,
  lesson: 2,
  title: 'Tone changes the word — mǎi vs mài',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "At a Beijing market last week, a foreigner walked up and said 'Wǒ mài píngguǒ' — I sell apples. He meant 'Wǒ mǎi' — I want to buy. The vendor laughed and pointed: 'You sell? Where's your stall?' One tone, opposite meaning.",
    culturalNote: "These pairs are called minimal pairs — same letters, different tone, totally different word. Buy and sell. Book and tree. Ask and smell. Native speakers don't 'tolerate' wrong tones the way English speakers tolerate accents — to a Mandarin ear, the wrong tone is genuinely a different word.",
  },

  chunks: [
    {
      id: 'mai_buy_sell',
      target: 'mǎi (买) vs mài (卖)',
      native: 'buy vs sell',
      literal: '(买/卖) tone 3 dipping = buy · tone 4 falling = sell',
      emoji: '🛒',
      phonetic: 'my-↘↗ (buy, dips) · my-↘ (sell, falls sharp)',
      audioRef: null,
    },
    {
      id: 'shu_book_tree',
      target: 'shū (书) vs shù (树)',
      native: 'book vs tree',
      literal: '(书/树) tone 1 flat = book · tone 4 falling = tree',
      emoji: '📚',
      phonetic: 'shoo-→ (book, flat) · shoo-↘ (tree, falls)',
      audioRef: null,
    },
    {
      id: 'wen_ask_smell',
      target: 'wèn (问) vs wén (闻)',
      native: 'ask vs smell/hear',
      literal: '(问/闻) tone 4 falling = ask · tone 2 rising = smell',
      emoji: '👃',
      phonetic: 'wun-↘ (ask, falls) · wun-↗ (smell, rises)',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Minimal pairs — tones make the word',
    explanation: 'When two words look identical in pinyin except for the tone mark, they are not "almost the same word with an accent" — they are completely different words. Treat the tone as part of the spelling, like a vowel.',
    examples: [
      { target: 'Wǒ mǎi (买)', native: 'I buy — dipping tone' },
      { target: 'Wǒ mài (卖)', native: 'I sell — falling tone' },
      { target: 'Yì běn shū (书)', native: 'A book — flat tone on shū' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the tone-marked syllable to its meaning',
      pairs: [
        { left: 'mǎi', right: 'buy' },
        { left: 'mài', right: 'sell' },
        { left: 'shū', right: 'book' },
        { left: 'shù', right: 'tree' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the sentence — you are at a market, asking to PURCHASE apples',
      sentence: 'Wǒ yào _____ píngguǒ.',
      options: ['mǎi', 'mài', 'māi'],
      correct: 'mǎi',
      context: 'Buy = mǎi (dipping, tone 3). Sell = mài (falling, tone 4). Get this wrong and the vendor thinks you have apples to sell.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin (with tones preferred) or character',
      prompt: 'book',
      correct: ['shū', 'shu', '书'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin (with tones preferred) or character',
      prompt: 'to ask (a question)',
      correct: ['wèn', 'wen', '问'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A vendor says "Wǒ mài píngguǒ." What does she mean?',
      question: 'Pick her meaning',
      options: [
        { text: 'I sell apples (it\'s her shop)', correct: true },
        { text: 'I buy apples (she\'s a customer)', correct: false },
        { text: 'I love apples', correct: false },
      ],
      explanation: 'Mài (falling tone, 卖) = sell. Mǎi (dipping, 买) = buy. The two characters even look similar — and the tone is your only spoken clue.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I want to buy a book."',
      words: ['shū', 'mǎi', 'Wǒ', 'yào', 'yì běn'],
      correct: ['Wǒ', 'yào', 'mǎi', 'yì běn', 'shū'],
      translation: 'I want to buy one book. (yào = want, yì běn = one [bound item])',
    },
  ],

  rwenDialogue: {
    intro: "You're at a fruit stall. The vendor is sorting apples. You want to buy three — but the wrong tone here will make her think you're trying to set up a competing stall.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ hǎo, nǐ yào shénme?',
        native: 'Hello, what do you want?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ yào mǎi sān ge píngguǒ.', native: 'I want to buy three apples.', correct: true, feedback: 'Perfect — mǎi (dipping) = buy. She reaches for the bag.' },
          { target: 'Wǒ yào mài sān ge píngguǒ.', native: 'I want to sell three apples.', correct: false, feedback: 'You just told her you sell apples. She\'ll either laugh or point at her own stall.' },
          { target: 'Wǒ shù sān ge píngguǒ.', native: 'I tree three apples?', correct: false, feedback: 'Shù (tree) is not a verb here. You wanted mǎi — buy.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, sān ge — shí kuài.',
        native: 'OK, three — ten yuan.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice that your whole interaction hung on one tone. Mǎi vs mài. From now on, when you learn a new word, learn its tone — they are inseparable.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'to buy (pinyin with tone)',
        correct: ['mǎi', 'mai', '买'],
      },
      {
        prompt: 'to sell (pinyin with tone)',
        correct: ['mài', 'mai', '卖'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Wǒ yào mǎi...' (I want to buy...) out loud once today, paying attention to the dip on mǎi. Even pretending you're at a market counts.",
    rwenSignoff: "Tone is spelling. Spelling is meaning. Zàijiàn.",
  },

  phase8: {
    scenario: "A small fruit and vegetable stall in a Beijing alley market. The vendor is busy weighing onions for another customer. You step up and need to clearly express that you want to BUY (not sell) some fruit — your tones will be the only thing distinguishing the two words.",
    rwenRole: "Vendor Auntie (摊主阿姨) — early 60s, has heard every foreigner mistake imaginable. Friendly but moves fast. Will gently point out if you say 'mài' instead of 'mǎi'.",
    successCriteria: "User uses 'mǎi' (buy) correctly with the dipping tone, completes a small purchase phrase like 'Wǒ yào mǎi sān ge píngguǒ', and self-corrects if Rwen plays the role of misunderstanding due to a wrong tone.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
