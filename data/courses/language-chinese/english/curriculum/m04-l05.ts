import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-measure-ben',
  module: 4,
  lesson: 5,
  title: 'Běn 本 — for books and bound things',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Look at the character 本. It's the character for tree (木) with a line at the root — it pictures the trunk, the bound base. Now imagine pages bound at a spine. That's why books, magazines, dictionaries, and notebooks all use běn.",
    culturalNote: "Chinese measure words often carry visual logic. Běn (本) — anything bound between covers. Once you know it, you'll never say 'sān gè shū' again — bookstores, libraries, and dictionaries all live in běn-world.",
  },

  chunks: [
    {
      id: 'yi_ben_shu',
      target: 'Yì běn shū',
      native: 'one book',
      literal: '(一本书) lit: one-[běn]-book',
      emoji: '📕',
      phonetic: 'yee-↘ bun-↘↗ shoo-→',
      audioRef: null,
    },
    {
      id: 'san_ben_cidian',
      target: 'Sān běn cídiǎn',
      native: 'three dictionaries',
      literal: '(三本词典) lit: three-[běn]-dictionary',
      emoji: '📖',
      phonetic: 'sahn-→ bun-↘↗ tsuh-↗ dyan-↘↗',
      audioRef: null,
    },
    {
      id: 'wu_ben_xiaoshuo',
      target: 'Wǔ běn xiǎoshuō',
      native: 'five novels',
      literal: '(五本小说) lit: five-[běn]-novel',
      emoji: '📚',
      phonetic: 'woo-↘↗ bun-↘↗ shyao-↘↗ shwo-→',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Běn (本) — bound printed things',
    explanation: 'Use běn for anything bound between covers: books, dictionaries, novels, magazines, notebooks. The character itself shows a tree-trunk root — the "bound base" — which is why it took on this meaning.',
    examples: [
      { target: 'Yì běn zázhì', native: 'one magazine' },
      { target: 'Liǎng běn bǐjìběn', native: 'two notebooks' },
      { target: 'Sì běn jiàokēshū', native: 'four textbooks' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Yì běn shū', right: 'one book' },
        { left: 'Sān běn cídiǎn', right: 'three dictionaries' },
        { left: 'Wǔ běn xiǎoshuō', right: 'five novels' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I bought two books."',
      sentence: 'Wǒ mǎi le liǎng _____ shū.',
      options: ['běn', 'zhī', 'gè'],
      correct: 'běn',
      context: 'Books are bound — běn. (And note: mǎi with the dipping tone = buy. Don\'t accidentally sell your books.)',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'one book',
      correct: ['Yì běn shū', 'yi ben shu', 'yì běn shū', '一本书'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'three dictionaries',
      correct: ['Sān běn cídiǎn', 'san ben cidian', 'sān běn cídiǎn', '三本词典'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which is the correct measure word for "novel"?',
      question: 'Five novels — pick one',
      options: [
        { text: 'Wǔ běn xiǎoshuō', correct: true },
        { text: 'Wǔ zhī xiǎoshuō', correct: false },
        { text: 'Wǔ gè xiǎoshuō', correct: false },
      ],
      explanation: 'Novels are bound between covers — běn. Zhī is for animals; gè works as a fallback but sounds untrained for printed books.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I want to buy two novels."',
      words: ['Wǒ', 'běn', 'liǎng', 'mǎi', 'yào', 'xiǎoshuō'],
      correct: ['Wǒ', 'yào', 'mǎi', 'liǎng', 'běn', 'xiǎoshuō'],
      translation: 'I want to buy two novels.',
    },
  ],

  rwenDialogue: {
    intro: "You walk into a small bookshop. The owner is shelving paperbacks. You're looking for a Chinese-English dictionary and a novel.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ hǎo, nǐ xiǎng zhǎo shénme?',
        native: 'Hello, what are you looking for?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ yào mǎi yì běn cídiǎn hé yì běn xiǎoshuō.', native: 'I want to buy one dictionary and one novel.', correct: true, feedback: 'Beautiful — běn used twice, mǎi (buy) tone correct. He nods and points to the back wall.' },
          { target: 'Wǒ yào mǎi yí gè cídiǎn hé yí gè xiǎoshuō.', native: 'One dictionary and one novel (with gè).', correct: false, feedback: 'Understandable — but in a bookshop, every Chinese speaker uses běn. Gè marks you as new to the pattern.' },
          { target: 'Wǒ yào mài yì běn cídiǎn.', native: 'I want to SELL one dictionary.', correct: false, feedback: 'Tone slip — mài (falling) is sell. Mǎi (dipping) is buy. He looks confused.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo. Cídiǎn zài zhèr — xiǎoshuō zài hòumiàn.',
        native: 'OK. Dictionaries are here — novels at the back.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice how měasure words tell a Chinese ear what kind of thing you're holding before you even finish the sentence. Běn = bound, paged, read. That's the picture.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'one book (pinyin or characters)',
        correct: ['Yì běn shū', 'yi ben shu', 'yì běn shū', '一本书'],
      },
      {
        prompt: 'three dictionaries',
        correct: ['Sān běn cídiǎn', 'san ben cidian', 'sān běn cídiǎn', '三本词典'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look at your nearest shelf or table. Count the books on it in Mandarin — 'yì běn, liǎng běn, sān běn shū.' Out loud once.",
    rwenSignoff: "Bound things — běn. Animals — zhī. Patterns are stacking. Zàijiàn.",
  },

  phase8: {
    scenario: "A small neighbourhood bookshop. The owner is sorting a new shipment. You want to buy a dictionary, ask about a specific novel, and check the price for two textbooks for a friend. Every count must use běn.",
    rwenRole: "Bookshop owner Lǎo Lín (老林) — late 50s, knows his stock by heart, mildly grumpy until he hears you using the right measure word, then warms up. Will ask follow-up questions like 'which dictionary?'",
    successCriteria: "User uses 'běn' for at least three different bound items (book/dictionary/novel/textbook), correctly distinguishes mǎi (buy) from mài (sell) by tone, and uses liǎng for 'two of.'",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
