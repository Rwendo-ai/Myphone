import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-grandparents',
  module: 5,
  lesson: 4,
  title: 'Grandparents — 祖父母',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Grandmother」「Grandfather」「Grandchild」 — 祖父母世代の英語。",
    culturalNote: "日本語では「おじいちゃん／おばあちゃん」と親しみを込めますが、英語のカジュアル形は「Grandma / Grandpa」「Nana / Pop」など家庭ごとに違います。",
  },

  chunks: [
    { id: 'grandmother', target: 'Grandmother', native: '祖母 / おばあちゃん (Sobo / Obaachan)', literal: 'Grandmother', emoji: '👵', phonetic: 'GRAND-muh-thuh', audioRef: null },
    { id: 'grandfather', target: 'Grandfather', native: '祖父 / おじいちゃん (Sofu / Ojiichan)', literal: 'Grandfather', emoji: '👴', phonetic: 'GRAND-fah-thuh', audioRef: null },
    { id: 'grandchild', target: 'Grandchild', native: '孫 (Mago)', literal: 'Grandchild', emoji: '🧒', phonetic: 'GRAND-chayld', audioRef: null },
  ],

  pattern: {
    name: 'Grand- prefix',
    explanation: "「Grand-」は世代を表す接頭辞：grandmother（祖母）、grandfather（祖父）、grandchild（孫）。さらに上は「great-grandmother」（曽祖母）。",
    examples: [
      { target: 'My grandmother lives in Kyoto.', native: '祖母は京都に住んでいます。' },
      { target: 'My grandfather is 90 years old.', native: '祖父は90歳です。' },
      { target: 'I have two grandchildren.', native: '孫が2人います。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Grandmother', right: '祖母' },
      { left: 'Grandfather', right: '祖父' },
      { left: 'Grandchild', right: '孫' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '祖母', correct: ['Grandmother', 'grandmother', 'Grandma'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'My ____ is 90.', options: ['grandfather', 'grandchild', 'children'], correct: 'grandfather' },
    { type: 'multiple_choice', instruction: '正しい答え', question: 'カジュアルな「おばあちゃん」は？', options: [
      { text: 'Grandma', correct: true },
      { text: 'Grandmom', correct: false },
      { text: 'Mother-grand', correct: false },
    ], explanation: 'カジュアル：Grandma / Granny / Nana。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['Kyoto', 'in', 'lives', 'grandmother', 'My'], correct: ['My', 'grandmother', 'lives', 'in', 'Kyoto'], translation: '祖母は京都に住んでいます' },
    { type: 'translate', instruction: '英語で', prompt: '孫が2人います', correct: ['I have two grandchildren', 'I have two grandchildren.'] },
  ],

  rwenDialogue: {
    intro: 'シドニーのホストファミリーで、家族写真を見せ合います。',
    lines: [
      { speaker: 'npc', target: 'Is this your grandmother?', native: 'これおばあちゃん？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, this is my grandmother. She lives in Kyoto. She's 80.", native: 'はい、祖母です。京都に住んでいて、80歳。', correct: true, feedback: '完璧 — 詳細も加えました。' },
          { target: 'Obaachan.', native: 'おばあちゃん。', correct: false, feedback: '英語で：「my grandmother」。' },
          { target: 'Old woman.', native: 'お年寄りの女性。', correct: false, feedback: '失礼な響き — 「my grandmother」が温かい。' },
        ],
      },
      { speaker: 'npc', target: "She looks lovely!", native: '素敵な方ですね！' },
      { speaker: 'rwen', rwenLine: '祖父母の英語マスター！grand- が世代を表します。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '祖母 (英語で)', correct: ['Grandmother', 'Grandma'] },
      { prompt: '祖父は90歳です (英語で)', correct: ['My grandfather is 90', 'My grandfather is 90 years old'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の祖父母を英語で：「My grandmother/grandfather is __. She/He lives in __.」',
    rwenSignoff: 'Family wisdom flows down. See you!',
  },

  phase8: {
    scenario: 'シドニーのホームステイで家族写真を見せて祖父母を紹介。',
    rwenRole: 'Helen — ホストマザー、温かい。',
    successCriteria: "User uses 'grandmother/grandfather' (or casual 'Grandma/Grandpa'), shares 1-2 facts, uses 'she/he' pronouns correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
