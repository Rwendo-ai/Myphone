import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-evening-routine',
  module: 8,
  lesson: 7,
  title: 'Evening routine — Coming home',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「I come home」「I cook dinner」「I watch TV」 — 夜のルーティンを英語で。",
    culturalNote: "日本人の典型的な夕方：仕事から帰宅 → 夕食 → お風呂 → テレビ。これを英語で言えると、海外の友達とライフスタイルの話で盛り上がります。",
  },

  chunks: [
    { id: 'i_come_home', target: 'I come home at 6.', native: '6時に帰宅します (Roku-ji ni kitaku shimasu)', literal: 'I come home at 6', emoji: '🏡', phonetic: 'ay-KUM-HOHM-at-SIX', audioRef: null },
    { id: 'i_cook_dinner', target: 'I cook dinner.', native: '夕食を作ります (Yuushoku wo tsukurimasu)', literal: 'I cook dinner', emoji: '🍲', phonetic: 'ay-KUUK-DIN-er', audioRef: null },
    { id: 'i_watch_tv', target: 'I watch TV.', native: 'テレビを見ます (Terebi wo mimasu)', literal: 'I watch TV', emoji: '📺', phonetic: 'ay-WOCH-TEE-VEE', audioRef: null },
  ],

  pattern: {
    name: 'Evening routine verbs',
    explanation: "Come home（帰宅する）、Cook dinner（夕食を作る）、Watch TV / a movie（見る）。「Watch」は動画・スポーツ、「See」は人・建物、「Look at」は静止画 — 日本人が混乱しやすいポイント。",
    examples: [
      { target: 'I come home at 7 P.M.', native: '7時に帰宅。' },
      { target: 'I cook dinner with my partner.', native: 'パートナーと夕食を作る。' },
      { target: 'I watch TV before bed.', native: '寝る前にテレビを見る。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I come home at 6', right: '6時に帰宅' },
      { left: 'I cook dinner', right: '夕食を作る' },
      { left: 'I watch TV', right: 'テレビを見る' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '夕食を作る', correct: ['I cook dinner', 'I cook dinner.'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I ____ TV before bed.', options: ['watch', 'see', 'look'], correct: 'watch' },
    { type: 'multiple_choice', instruction: '正しい答え', question: 'テレビは watch / see / look どれ？', options: [
      { text: 'Watch TV', correct: true },
      { text: 'See TV', correct: false },
      { text: 'Look at TV', correct: false },
    ], explanation: '動く映像は watch — 「watch a movie」「watch sports」も同じ。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['dinner', 'cook', 'I'], correct: ['I', 'cook', 'dinner'], translation: '夕食を作る' },
    { type: 'translate', instruction: '英語で', prompt: '6時に帰宅します', correct: ['I come home at 6', 'I come home at six'] },
  ],

  rwenDialogue: {
    intro: 'シドニーのホストファミリーで、夜の時間の話。',
    lines: [
      { speaker: 'npc', target: "What do you do in the evening?", native: '夜は何してる？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I come home at 6, cook dinner, and watch TV with my family.", native: '6時に帰って、夕食を作って、家族とテレビ。', correct: true, feedback: '完璧 — 3動詞を連結。' },
          { target: "Home, dinner, TV.", native: '家、夕食、テレビ。', correct: false, feedback: '完全な文で。' },
          { target: 'I see TV.', native: 'テレビを見る。', correct: false, feedback: 'TV は watch。' },
        ],
      },
      { speaker: 'npc', target: "Cozy evenings.", native: '落ち着く夜ね。' },
      { speaker: 'rwen', rwenLine: '夜のルーティン英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '夕食を作る (英語で)', correct: ['I cook dinner', 'I cook dinner.'] },
      { prompt: 'テレビを見る (英語で)', correct: ['I watch TV', 'I watch TV.'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の夜のルーティンを3文の英語で。',
    rwenSignoff: 'Watch this space — see you next!',
  },

  phase8: {
    scenario: 'シドニーのホストファミリーで夜の生活を説明。',
    rwenRole: 'Helen — ホストマザー。',
    successCriteria: "User uses 'come home', 'cook dinner', 'watch TV' correctly (not 'see TV'), connects with 'and' or 'then'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
