import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-friends',
  module: 5,
  lesson: 7,
  title: 'Friends as family — 友達も家族',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Best friend」「Close friends」 — 家族のような友達の表現。",
    culturalNote: "日本語で「親友」と言うと特別な響きがありますが、英語の「best friend」も同じく特別。「friends like family」（家族のような友達）も自然な表現です。",
  },

  chunks: [
    { id: 'best_friend', target: 'Best friend', native: '親友 (Shinyuu)', literal: 'Best friend', emoji: '🤝', phonetic: 'BEST-frend', audioRef: null },
    { id: 'close_friends', target: 'Close friends', native: '仲のいい友達 (Naka no ii tomodachi)', literal: 'Close friends', emoji: '👯', phonetic: 'KLOHS-frends', audioRef: null },
    { id: 'like_family', target: 'Like family', native: '家族のように (Kazoku no you ni)', literal: 'Like family', emoji: '💞', phonetic: 'LAYK FAM-uh-lee', audioRef: null },
  ],

  pattern: {
    name: 'Friend levels',
    explanation: "友達のレベル：acquaintance（知り合い）→ friend（友達）→ close friend（仲のいい友達）→ best friend（親友）。「She's like family to me」（家族みたい）が温かい表現。",
    examples: [
      { target: "She's my best friend.", native: '彼女は親友です。' },
      { target: 'We are close friends.', native: '仲のいい友達です。' },
      { target: "He's like family.", native: '彼は家族のような存在です。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Best friend', right: '親友' },
      { left: 'Close friends', right: '仲のいい友達' },
      { left: 'Like family', right: '家族のように' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '親友', correct: ['Best friend', 'My best friend', 'best friend'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "She's like ____.", options: ['family', 'sister', 'mother'], correct: 'family' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「彼女は親友」を英語で？', options: [
      { text: "She's my best friend.", correct: true },
      { text: 'She is best.', correct: false },
      { text: 'My shinyuu.', correct: false },
    ], explanation: '完全な文で：「She\'s my best friend」。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['friends', 'are', 'close', 'We'], correct: ['We', 'are', 'close', 'friends'], translation: '仲のいい友達です' },
    { type: 'translate', instruction: '英語で', prompt: '彼は家族のような存在', correct: ["He's like family", "He is like family", "He's like family."] },
  ],

  rwenDialogue: {
    intro: 'シドニーの留学生交流会で、友達について話します。',
    lines: [
      { speaker: 'npc', target: 'Have you made friends here?', native: 'ここで友達できた？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes! Sarah is my best friend now. She's like family.", native: 'はい！サラが親友です。家族みたい。', correct: true, feedback: '完璧 — 温かい表現。' },
          { target: 'Friends yes.', native: '友達はい。', correct: false, feedback: '完全な文で。' },
          { target: 'Sarah shinyuu.', native: 'サラ親友。', correct: false, feedback: '英語：「Sarah is my best friend」。' },
        ],
      },
      { speaker: 'npc', target: "Friendship is everything when you're far from home.", native: '故郷から遠い時、友情は本当に大事。' },
      { speaker: 'rwen', rwenLine: '友達の英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '親友 (英語で)', correct: ['Best friend', 'My best friend'] },
      { prompt: '家族のように (英語で)', correct: ['Like family', 'like family'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の親友を英語で紹介。「My best friend is __. We are close friends.」',
    rwenSignoff: "I'm your friend in learning. See you!",
  },

  phase8: {
    scenario: 'シドニーの留学生交流会で友達について話す。',
    rwenRole: 'Mia — 22歳の留学生、社交的。',
    successCriteria: "User uses 'best friend / close friends / like family' naturally, gives 1-2 details about friendships.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
