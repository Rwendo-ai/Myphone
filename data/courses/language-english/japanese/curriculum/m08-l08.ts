import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-yesterday',
  module: 8,
  lesson: 8,
  title: 'Past tense — Yesterday I...',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「Yesterday I went...」「I saw...」「It was...」 — 過去形を使って昨日のことを話します。",
    culturalNote: "日本語は「行った」「見た」と過去形が規則的ですが、英語は不規則動詞が多い：go → went, see → saw, eat → ate。覚えるしかありません。",
  },

  chunks: [
    { id: 'yesterday_i_went', target: 'Yesterday I went to the market.', native: '昨日、市場に行きました (Kinou ichiba ni ikimashita)', literal: 'Yesterday I went (past)', emoji: '🚶', phonetic: 'YES-ter-day-ay-WENT', audioRef: null },
    { id: 'i_saw_a_friend', target: 'I saw a friend.', native: '友達に会いました (Tomodachi ni aimashita)', literal: 'I saw a friend (past)', emoji: '👀', phonetic: 'ay-SAW-uh-FREND', audioRef: null },
    { id: 'it_was_great', target: 'It was great.', native: 'とても良かった (Totemo yokatta)', literal: 'It was great (past)', emoji: '👍', phonetic: 'it-WUZ-GRAYT', audioRef: null },
  ],

  pattern: {
    name: 'Past tense (irregular)',
    explanation: "不規則変化を覚える：go → went, see → saw, eat → ate, have → had, do → did, is → was。「Yesterday」「Last week」「Last year」と過去の時間表現と一緒に使います。",
    examples: [
      { target: 'Yesterday I went to Tokyo.', native: '昨日東京に行った。' },
      { target: 'I saw a movie last night.', native: '昨夜映画を見た。' },
      { target: 'It was amazing.', native: '素晴らしかった。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Went', right: '行った' },
      { left: 'Saw', right: '見た／会った' },
      { left: 'Was', right: 'だった' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '昨日、市場に行きました', correct: ['Yesterday I went to the market', 'Yesterday I went to the market.'] },
    { type: 'fill_blank', instruction: '空欄 (過去形)', sentence: 'Yesterday I ____ a friend.', options: ['saw', 'see', 'sees'], correct: 'saw' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「行った」を英語で？', options: [
      { text: 'Went', correct: true },
      { text: 'Goed', correct: false },
      { text: 'Going', correct: false },
    ], explanation: 'go の過去形は went — 不規則。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['great', 'was', 'It'], correct: ['It', 'was', 'great'], translation: '素晴らしかった' },
    { type: 'translate', instruction: '英語で', prompt: '友達に会いました', correct: ['I saw a friend', 'I saw a friend.', 'I met a friend'] },
  ],

  rwenDialogue: {
    intro: 'シドニーで月曜の朝、週末の話。',
    lines: [
      { speaker: 'npc', target: "How was your weekend?", native: '週末どうだった？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It was great! I went to the beach and saw some friends.", native: '良かった！ビーチに行って友達に会った。', correct: true, feedback: '完璧 — 過去形を3つ使えました。' },
          { target: 'I go beach.', native: '私 行く ビーチ。', correct: false, feedback: '過去形：「I went to the beach」。' },
          { target: 'Weekend yes.', native: '週末はい。', correct: false, feedback: '完全な文で。' },
        ],
      },
      { speaker: 'npc', target: "Sounds lovely.", native: 'いいね。' },
      { speaker: 'rwen', rwenLine: '過去形マスター！went / saw / was を使えました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '昨日、市場に行きました (英語で)', correct: ['Yesterday I went to the market', 'Yesterday I went to the market.'] },
      { prompt: '素晴らしかった (英語で)', correct: ['It was great', 'It was great.', 'It was amazing'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '昨日の出来事を3文の過去形英語で：「Yesterday I went...」「I saw...」「It was...」',
    rwenSignoff: 'Yesterday was good — see you tomorrow!',
  },

  phase8: {
    scenario: 'シドニーで月曜朝、同僚と週末の話。',
    rwenRole: 'Mark — 同僚、社交的。',
    successCriteria: "User uses past tense correctly: 'went', 'saw', 'was', 'had', 'did' (not 'goed' or 'eated'), opens with 'Yesterday' or 'Last weekend'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
