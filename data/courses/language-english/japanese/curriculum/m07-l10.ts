import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-conversation',
  module: 7,
  lesson: 10,
  title: 'A meal conversation — 食事の会話',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 7 完成！レストランでの完璧な食事会話を組み立てます。",
    culturalNote: "席案内 → メニュー → 注文 → 感想 → お会計、この流れを英語で完走できれば、海外でひとり食事も怖くありません。",
  },

  chunks: [
    { id: 'review_table_menu', target: "A table for two, please. Could we have the menu?", native: '2人席お願いします。メニューもらえますか？', literal: 'Table + menu request', emoji: '🪑', phonetic: 'a-TAY-bul-fer-TOO', audioRef: null },
    { id: 'review_id_like_modify', target: "I'd like the chicken, without onions, please.", native: 'チキンをたまねぎ抜きでお願いします。', literal: "I'd like + modification", emoji: '🍗', phonetic: "ayd-LAYK-thuh-CHIK-en", audioRef: null },
    { id: 'review_delicious_bill', target: "It was delicious. Could we have the bill, please?", native: '美味しかったです。お会計お願いします。', literal: 'Praise + bill request', emoji: '🧾', phonetic: 'it-WUZ-de-LISH-us', audioRef: null },
  ],

  pattern: {
    name: 'Full meal flow',
    explanation: "完全な食事の流れ：(1) 席「A table for X」(2) メニュー「Could we have the menu?」(3) 注文「I'd like..., without...」(4) 感想「It's delicious」(5) 会計「Could we have the bill?」",
    examples: [
      { target: 'A table for two, please.', native: '2人席お願いします。' },
      { target: "I'd like the pasta, please.", native: 'パスタお願いします。' },
      { target: 'The bill, please.', native: 'お会計お願いします。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'A table for two', right: '2人席' },
      { left: "I'd like the chicken", right: 'チキンお願い' },
      { left: 'The bill, please', right: 'お会計お願い' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'チキンをたまねぎ抜きでお願いします', correct: [
      "I'd like the chicken, without onions, please",
      "I'd like the chicken without onions, please",
      "I'd like the chicken without onions please",
    ]},
    { type: 'translate', instruction: '英語で', prompt: '美味しかったです。お会計お願いします。', correct: [
      'It was delicious. Could we have the bill, please?',
      'It was delicious. The bill, please.',
      'It was delicious. Can we have the bill, please?',
    ]},
    { type: 'build_sentence', instruction: '並べ替え', words: ['please', 'two', 'for', 'table', 'A'], correct: ['A', 'table', 'for', 'two', 'please'], translation: '2人席お願いします' },
    { type: 'fill_blank', instruction: '空欄', sentence: 'Could we have the ____, please?', options: ['bill', 'food', 'time'], correct: 'bill' },
    { type: 'multiple_choice', instruction: '正しい流れ', question: '食事の最後の自然な流れは？', options: [
      { text: "It was delicious. Could we have the bill?", correct: true },
      { text: "Done. Money.", correct: false },
      { text: "Bill bill bill.", correct: false },
    ], explanation: '感想 → お会計の流れが英語の礼儀。' },
  ],

  rwenDialogue: {
    intro: 'ロンドンのレストランで完璧な食事体験。席案内から会計まで全部英語で。',
    lines: [
      { speaker: 'npc', target: "Welcome! How many?", native: 'いらっしゃい！何名様？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A table for two, please. Could we have the menu?", native: '2人席お願い。メニューもらえる？', correct: true, feedback: '完璧な始まり！' },
          { target: "Two.", native: '2。', correct: false, feedback: '完全な文で。' },
        ],
      },
      { speaker: 'npc', target: "Right this way. Here's the menu.", native: 'こちらへ。メニューです。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd like the pasta, without garlic, please.", native: 'パスタをにんにく抜きでお願いします。', correct: true, feedback: '注文も完璧。' },
          { target: 'Pasta.', native: 'パスタ。', correct: false, feedback: '丁寧に：「I\'d like..., please」。' },
        ],
      },
      { speaker: 'npc', target: "Of course. Anything to drink?", native: 'もちろん。飲み物は？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A glass of water, please. And later, the bill.", native: '水一杯お願い。あと後でお会計。', correct: true, feedback: '完璧 — 水とお会計まで先取り。' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Module 7 完了！レストランで完璧な食事ができるようになりました。Module 8 で日常動詞を学びましょう。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください — 完全な食事フロー。',
    prompts: [
      { prompt: '2人席お願いします。メニューもらえますか？ (英語で)', correct: [
        "A table for two, please. Could we have the menu?",
        "A table for two, please. Could we have the menu",
      ]},
      { prompt: '美味しかったです。お会計お願いします。 (英語で)', correct: [
        'It was delicious. Could we have the bill, please?',
        'It was delicious. The bill, please.',
      ]},
    ],
  },

  mission: {
    title: 'Module 7 ミッション — 完璧な食事会話',
    task: '架空のレストランで5フェーズ全部英語で：席→メニュー→注文→感想→会計。',
    rwenSignoff: 'Module 7 完了！海外の食事が怖くなくなりました。',
  },

  phase8: {
    scenario: 'ロンドンのレストランで席案内から会計までフル体験。',
    rwenRole: 'Sarah — サーバー、丁寧。',
    successCriteria: "User runs full restaurant flow: table request → menu → order with modification → praise food → bill request. Uses Module 7 chunks naturally with 'please'.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
