import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-this-that',
  module: 4,
  lesson: 8,
  title: 'Zhè & Nà — this & that (with measure words)',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Pointing at something at a market and saying 'I want this one'? You'll need 'zhè' (this) or 'nà' (that), and — surprise — you still need a measure word in the middle. The pattern is: zhè/nà + measure + noun. 'Zhè ge' is the safest 'this one' you'll ever say.",
    culturalNote: "In English we say 'this book' — two words. In Mandarin it's 'zhè běn shū' — three: this + measure + book. Without the measure word, native speakers often won't even parse the sentence. 'Zhè ge' (this one) and 'nà ge' (that one) are so universal they've fused — you'll hear them constantly.",
  },

  chunks: [
    {
      id: 'zhe_ge',
      target: 'Zhè ge',
      native: 'this one',
      literal: '(这个) lit: this-[gè]',
      emoji: '👉',
      phonetic: 'jeh-↘ guh-↘ (often blurred together as "zhèige")',
      audioRef: null,
    },
    {
      id: 'na_ge',
      target: 'Nà ge',
      native: 'that one',
      literal: '(那个) lit: that-[gè]',
      emoji: '👈',
      phonetic: 'nah-↘ guh-↘ (often "nèige")',
      audioRef: null,
    },
    {
      id: 'zhe_ben_shu',
      target: 'Zhè běn shū',
      native: 'this book',
      literal: '(这本书) lit: this-[běn]-book',
      emoji: '📕',
      phonetic: 'jeh-↘ bun-↘↗ shoo-→',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Zhè/Nà + measure + noun',
    explanation: 'Demonstratives in Mandarin take a measure word, just like numbers do. Zhè + MEASURE + NOUN. Use the same measure word the noun normally takes: zhè zhāng piào (this ticket), nà zhī māo (that cat), zhè běn shū (this book).',
    examples: [
      { target: 'Zhè zhāng piào', native: 'this ticket' },
      { target: 'Nà zhī māo', native: 'that cat' },
      { target: 'Zhè bēi chá', native: 'this cup of tea' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Zhè ge', right: 'this one' },
        { left: 'Nà ge', right: 'that one' },
        { left: 'Zhè běn shū', right: 'this book' },
        { left: 'Nà zhāng piào', right: 'that ticket' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "this cat" — pointing at one nearby',
      sentence: 'Zhè _____ māo hěn kě\'ài.',
      options: ['zhī', 'běn', 'zhāng'],
      correct: 'zhī',
      context: 'Cat = animal = zhī. Even after "this/that," the right measure word follows.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'this one (pointing at any generic object)',
      correct: ['Zhè ge', 'zhe ge', 'zhèige', '这个'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'that book',
      correct: ['Nà běn shū', 'na ben shu', 'nà běn shū', '那本书'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You point at a cup of tea on the menu and want to order it. Which?',
      question: 'I want this one (the tea)',
      options: [
        { text: 'Wǒ yào zhè bēi chá.', correct: true },
        { text: 'Wǒ yào zhè chá.', correct: false },
        { text: 'Wǒ yào zhè běn chá.', correct: false },
      ],
      explanation: 'Zhè + measure + noun. Tea takes bēi. Skipping the measure (zhè chá) sounds broken; using běn turns it into a tea-book.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I want to buy that ticket."',
      words: ['mǎi', 'piào', 'Wǒ', 'nà', 'yào', 'zhāng'],
      correct: ['Wǒ', 'yào', 'mǎi', 'nà', 'zhāng', 'piào'],
      translation: 'I want to buy that ticket. (mǎi = buy, dipping tone)',
    },
  ],

  rwenDialogue: {
    intro: "You're at a small bakery counter. The display has a row of pastries on the left and a stack of small cake-boxes on the right. You want to point at things rather than name them.",
    lines: [
      {
        speaker: 'npc',
        target: 'Yào shénme?',
        native: 'What would you like?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ yào zhè ge hé nà ge.', native: 'I want this one and that one.', correct: true, feedback: 'Clean — zhè ge & nà ge cover anything when you can point. She follows your finger.' },
          { target: 'Wǒ yào zhè hé nà.', native: 'I want this and that.', correct: false, feedback: 'Without "ge" between this/that and the implied noun, it sounds unfinished. Always: zhè + measure.' },
          { target: 'Wǒ yào zhè běn hé nà běn.', native: 'I want this book and that book?', correct: false, feedback: 'Běn is for books. At a bakery you want gè — or the specific measure for the pastry.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, yígòng èrshí kuài.',
        native: 'OK, twenty yuan total.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Pointing rescues you when vocab fails — but only if you have 'zhè ge' and 'nà ge' ready. They are two of the most-used phrases in spoken Mandarin.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'this one (generic, pointing)',
        correct: ['Zhè ge', 'zhe ge', 'zhèige', '这个'],
      },
      {
        prompt: 'that ticket',
        correct: ['Nà zhāng piào', 'na zhang piao', 'nà zhāng piào', '那张票'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Point at three different things today and name them with zhè/nà: 'zhè ge ___, nà ge ___.' Even silently. Practise the bridge between pointing and naming.",
    rwenSignoff: "Pointing without zhè ge is like pointing in silence. Zàijiàn.",
  },

  phase8: {
    scenario: "A small bakery / pastry counter with a glass display. You want to order three different things by pointing — using zhè ge / nà ge for the generic ones, and the specific measure word for at least one item (a flat cake, a cup of milk tea, etc.).",
    rwenRole: "Bakery clerk Xiǎo Liú (小刘) — late 20s, friendly, fast. Will follow your finger but expects 'zhè ge' / 'nà ge' rather than silent pointing.",
    successCriteria: "User uses 'zhè ge' and 'nà ge' at least once each, AND uses one specific measure word other than gè (e.g. zhè bēi or zhè zhāng) when ordering a drink or flat item.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
