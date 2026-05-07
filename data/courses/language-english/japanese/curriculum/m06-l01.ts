import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-numbers-1-10',
  module: 6,
  lesson: 1,
  title: 'Numbers 1-10 — One to Ten',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "1から10までの英語。基礎中の基礎です。",
    culturalNote: "日本語の「一・二・三」と同じく、英語の数字も会話の基礎。電話番号、価格、時間、すべての場面で使います。",
  },

  chunks: [
    { id: 'one_five', target: 'One, two, three, four, five', native: '一、二、三、四、五 (Ichi, ni, san, shi/yon, go)', literal: 'One, two, three, four, five', emoji: '🖐️', phonetic: 'wun, too, three, for, fyv', audioRef: null },
    { id: 'six_ten', target: 'Six, seven, eight, nine, ten', native: '六、七、八、九、十 (Roku, shichi/nana, hachi, kyuu, juu)', literal: 'Six, seven, eight, nine, ten', emoji: '🔟', phonetic: 'siks, SEH-vn, ayt, nyn, ten', audioRef: null },
    { id: 'how_many', target: 'How many?', native: '何個？ (Nanko?)', literal: 'How many?', emoji: '❓', phonetic: 'how-MEH-nee', audioRef: null },
  ],

  pattern: {
    name: 'Numbers 1-10',
    explanation: "英語の数字は1音節〜2音節で短い。「seven」だけ2音節。発音練習が大事 — three (TH 音)、five（V 音）など日本語にない音もあります。",
    examples: [
      { target: 'One, two, three.', native: '一、二、三。' },
      { target: 'Five, six, seven.', native: '五、六、七。' },
      { target: 'How many? Three.', native: '何個？ 三個。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'One', right: '一' },
      { left: 'Five', right: '五' },
      { left: 'Ten', right: '十' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '三', correct: ['Three', 'three'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'One, two, ____, four.', options: ['three', 'tree', 'thri'], correct: 'three' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '8 を英語で？', options: [
      { text: 'Eight', correct: true },
      { text: 'Aito', correct: false },
      { text: 'Octo', correct: false },
    ], explanation: '8 = eight (発音: ayt)。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['five', 'four', 'three', 'two', 'One'], correct: ['One', 'two', 'three', 'four', 'five'], translation: '一、二、三、四、五' },
    { type: 'translate', instruction: '英語で', prompt: '何個？', correct: ['How many?', 'how many?'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのカフェで、注文の確認。',
    lines: [
      { speaker: 'npc', target: 'How many coffees?', native: 'コーヒー何杯？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Two, please.', native: '二杯お願いします。', correct: true, feedback: '完璧 — 数字＋please。' },
          { target: 'Ni.', native: '二。', correct: false, feedback: '英語：「Two」。' },
          { target: 'Some.', native: 'いくつか。', correct: false, feedback: '具体的な数字で。' },
        ],
      },
      { speaker: 'npc', target: "Two coffees, coming up.", native: 'コーヒー二杯、お持ちします。' },
      { speaker: 'rwen', rwenLine: '数字の基礎マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '一から五 (英語で)', correct: ['One, two, three, four, five', 'one two three four five'] },
      { prompt: '六から十 (英語で)', correct: ['Six, seven, eight, nine, ten', 'six seven eight nine ten'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '1から10まで英語で3回声に出して数える。',
    rwenSignoff: 'One, two, three — see you next.',
  },

  phase8: {
    scenario: 'ロンドンのカフェで複数の注文。',
    rwenRole: 'Jamie — 25歳のバリスタ。',
    successCriteria: "User uses numbers 1-10 correctly for orders, pronounces 'three' (TH) and 'eight' clearly, adds 'please' to requests.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
