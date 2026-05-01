import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-mixed',
  module: 4,
  lesson: 9,
  title: 'Mixed measure-words — which one fits?',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "We've met five measure words: gè, zhī, běn, zhāng, bēi. Today we mix them. The skill isn't memorising every one — it's hearing the noun and instantly picking the right bridge. A book? Běn. A cat? Zhī. A cup? Bēi. Today we drill the reflex.",
    culturalNote: "Native speakers don't think 'which measure word' — they hear the noun and the right one comes pre-attached. We build that reflex through repetition. Get the wrong one and a Chinese speaker will usually understand, but the sentence sounds slightly out of focus — like a photo with the wrong filter.",
  },

  chunks: [
    {
      id: 'yi_zhi_xiao_gou',
      target: 'Yì zhī xiǎo gǒu',
      native: 'one little dog',
      literal: '(一只小狗) lit: one-[zhī]-small-dog',
      emoji: '🐶',
      phonetic: 'yee-↘ jrr-→ shyao-↘↗ go-↘↗',
      audioRef: null,
    },
    {
      id: 'yi_ben_zhongwen_shu',
      target: 'Yì běn Zhōngwén shū',
      native: 'one Chinese book',
      literal: '(一本中文书) lit: one-[běn]-Chinese-book',
      emoji: '📖',
      phonetic: 'yee-↘ bun-↘↗ jong-→ wun-↗ shoo-→',
      audioRef: null,
    },
    {
      id: 'yi_zhang_huoche_piao',
      target: 'Yì zhāng huǒchē piào',
      native: 'one train ticket',
      literal: '(一张火车票) lit: one-[zhāng]-train-ticket',
      emoji: '🚆',
      phonetic: 'yee-↘ jahng-→ hwo-↘↗ chuh-→ pyao-↘',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Choose the measure word from the noun',
    explanation: 'Train your reflex: animal → zhī, bound book → běn, flat object → zhāng, drink in a cup → bēi, person/generic → gè. When in doubt, gè will usually be understood.',
    examples: [
      { target: 'Sān zhī māo, liǎng běn shū, yì bēi chá', native: 'three cats, two books, one cup of tea' },
      { target: 'Zhè zhāng piào, nà ge rén', native: 'this ticket, that person' },
      { target: 'Wǔ běn cídiǎn hé liǎng zhī gǒu', native: 'five dictionaries and two dogs' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the noun to its correct measure word',
      pairs: [
        { left: 'māo (cat)', right: 'zhī' },
        { left: 'shū (book)', right: 'běn' },
        { left: 'piào (ticket)', right: 'zhāng' },
        { left: 'kāfēi (coffee)', right: 'bēi' },
        { left: 'rén (person)', right: 'gè' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I want to buy three Chinese books."',
      sentence: 'Wǒ yào mǎi sān _____ Zhōngwén shū.',
      options: ['běn', 'zhāng', 'zhī'],
      correct: 'běn',
      context: 'Books are bound — běn. Zhāng would be for a Chinese-language poster; zhī is for animals.',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "two cats and one dog"',
      sentence: 'Liǎng _____ māo hé yì _____ gǒu.',
      options: ['zhī ... zhī', 'gè ... zhī', 'běn ... gè'],
      correct: 'zhī ... zhī',
      context: 'All animals — both take zhī.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'one train ticket',
      correct: ['Yì zhāng huǒchē piào', 'yi zhang huoche piao', 'yì zhāng huǒchē piào', '一张火车票'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'two cups of tea',
      correct: ['Liǎng bēi chá', 'liang bei cha', 'liǎng bēi chá', '两杯茶'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "This person bought two books and one cup of coffee."',
      words: ['rén', 'mǎi', 'le', 'liǎng', 'běn', 'shū', 'hé', 'yì', 'bēi', 'kāfēi', 'Zhè', 'gè'],
      correct: ['Zhè', 'gè', 'rén', 'mǎi', 'le', 'liǎng', 'běn', 'shū', 'hé', 'yì', 'bēi', 'kāfēi'],
      translation: 'This person bought two books and one cup of coffee. (le = completed action)',
    },
  ],

  rwenDialogue: {
    intro: "You're describing your morning to a friend over tea. You went to a bookshop, then a café, and saw your neighbour's cat on the way home. You'll need three different measure words in a row — try not to mix them up.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ jīntiān zǎoshang gàn shénme le?',
        native: 'What did you do this morning?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ mǎi le liǎng běn shū, hē le yì bēi kāfēi, kàn le yì zhī māo.', native: 'I bought two books, drank one coffee, and saw one cat.', correct: true, feedback: 'Beautiful — three different measure words, all correct. She is impressed.' },
          { target: 'Wǒ mǎi le liǎng gè shū, hē le yì gè kāfēi, kàn le yì gè māo.', native: 'I bought two books, one coffee, one cat (all gè).', correct: false, feedback: 'Understandable — but you defaulted to gè everywhere. The right ones are běn, bēi, zhī. You\'ve learned them; use them.' },
          { target: 'Wǒ mǎi le liǎng zhī shū, hē le yì běn kāfēi, kàn le yì bēi māo.', native: 'I bought two animal-books, one bound-coffee, saw one cup-cat.', correct: false, feedback: 'You swapped them — every measure word landed on the wrong noun. Slow down: animal=zhī, book=běn, cup=bēi.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wǒ yě xǐhuān nà ge xiǎo māo!',
        native: 'I love that little cat too!',
      },
      {
        speaker: 'rwen',
        rwenLine: "You just chained three measure words in one sentence. That's the reflex — the goal. From here it's just adding more bridges to your collection.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'one little dog',
        correct: ['Yì zhī xiǎo gǒu', 'yi zhi xiao gou', 'yì zhī xiǎo gǒu', '一只小狗'],
      },
      {
        prompt: 'one Chinese book',
        correct: ['Yì běn Zhōngwén shū', 'yi ben Zhongwen shu', 'yì běn zhōngwén shū', '一本中文书'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "In one sentence today (out loud or to yourself), use TWO different measure words: e.g. 'Wǒ yǒu yì zhī māo hé liǎng běn shū' — I have one cat and two books. The chain is the skill.",
    rwenSignoff: "The reflex is built one chain at a time. Zàijiàn.",
  },

  phase8: {
    scenario: "Catching up with a Mandarin-speaking friend over tea. You'll talk about your morning: a bookshop visit, a coffee, a cat you saw, a ticket you bought. You'll need to use AT LEAST four different measure words (gè, zhī, běn, zhāng, bēi) across the conversation.",
    rwenRole: "Friend Lín (林) — your age-ish, easy-going, Mandarin native, encouraging but will mirror back the wrong measure word so you notice. Asks lots of follow-ups.",
    successCriteria: "User correctly uses at least four different measure words across the chat, distinguishes liǎng from èr for 'two of,' and recovers from any misuse when Rwen-as-friend gently echoes a corrected version.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
