import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-yes-no',
  module: 2,
  lesson: 6,
  title: 'Yes & No — はい と いいえ',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Yes」「No」「Maybe」は会話の基本。日本人が苦手な「No」もはっきり言える練習をします。",
    culturalNote: "日本では「No」を直接言うのは失礼とされ、「ちょっと…」「考えておきます」と曖昧にしますが、英語圏では「No, thanks」とはっきり言うのが親切。あいまいさは混乱を招きます。",
  },

  chunks: [
    { id: 'yes', target: 'Yes', native: 'はい (Hai)', literal: 'Yes', emoji: '✅', phonetic: 'YES', audioRef: null },
    { id: 'no', target: 'No', native: 'いいえ (Iie)', literal: 'No', emoji: '❌', phonetic: 'NOH', audioRef: null },
    { id: 'maybe', target: 'Maybe', native: 'たぶん (Tabun)', literal: 'Maybe', emoji: '🤔', phonetic: 'MAY-bee', audioRef: null },
  ],

  pattern: {
    name: 'Yes / No / Maybe',
    explanation: "丁寧に断る時は「No, thank you」または「No, thanks」。英語圏では「No」と言っても失礼にならず、むしろ正直で親切。「Maybe」は本当に迷っている時だけ使います。",
    examples: [
      { target: 'Yes, please.', native: 'はい、お願いします。' },
      { target: 'No, thanks.', native: 'いいえ、結構です。' },
      { target: 'Maybe later.', native: 'たぶん後で。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Yes', right: 'はい' },
      { left: 'No', right: 'いいえ' },
      { left: 'Maybe', right: 'たぶん' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'いいえ、結構です', correct: ['No, thanks', 'No thanks', 'No, thank you'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'Yes, ____.', options: ['please', 'sorry', 'no'], correct: 'please' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '丁寧に断る時は？', options: [
      { text: 'No, thanks.', correct: true },
      { text: 'No no no.', correct: false },
      { text: 'Maybe.', correct: false },
    ], explanation: '「No, thanks」が一番丁寧で自然です。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['thanks', 'No'], correct: ['No', 'thanks'], translation: 'いいえ、結構です' },
    { type: 'translate', instruction: '英語で', prompt: 'たぶん後で', correct: ['Maybe later', 'maybe later'] },
  ],

  rwenDialogue: {
    intro: 'カフェで店員さんに追加注文を勧められます。',
    lines: [
      { speaker: 'npc', target: 'Would you like a cookie with that?', native: 'クッキーも一緒にどうですか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'No, thanks.', native: 'いいえ、結構です。', correct: true, feedback: '完璧 — はっきり、丁寧に断れました。' },
          { target: 'Chotto...', native: 'ちょっと…', correct: false, feedback: '日本語の曖昧表現は通じません。「No, thanks」が親切。' },
          { target: 'Maybe maybe.', native: 'たぶんたぶん。', correct: false, feedback: '迷っているなら「Maybe later」、断るなら「No, thanks」。' },
        ],
      },
      { speaker: 'npc', target: 'No problem!', native: '大丈夫ですよ！' },
      { speaker: 'rwen', rwenLine: 'はっきり断る練習成功！「No, thanks」は失礼ではありません。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'はい、お願いします (英語で)', correct: ['Yes, please', 'yes please'] },
      { prompt: 'いいえ、結構です (英語で)', correct: ['No, thanks', 'No, thank you'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '今日、はっきり「No, thanks」と言う場面を1回作ってみてください。曖昧にせず。',
    rwenSignoff: "Yes or no — be clear. See you next.",
  },

  phase8: {
    scenario: 'シカゴのレストランで、サーバーが追加メニューを次々勧めてきます。Yes/Noで的確に答える練習。',
    rwenRole: 'Mike — 30代のサーバー、フレンドリーで押し売り気味。',
    successCriteria: "User uses clear 'Yes, please' / 'No, thanks' (NOT 'chotto' or vague). Doesn't accept things they don't want out of politeness. Adds 'Maybe later' if genuinely undecided.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
