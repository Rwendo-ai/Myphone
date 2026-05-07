import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-be-have',
  module: 8,
  lesson: 1,
  title: '"To be" & "to have" — I am / I have',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「to be」（〜である）と「to have」（持っている）— 英語の中で最もよく使う動詞2つ。",
    culturalNote: "日本語では「私は学生です」も「友達がいます」も同じ「です・ます」で済みますが、英語では be 動詞（am/is/are）と have を使い分けます。これが英語学習の最初の壁。",
  },

  chunks: [
    { id: 'i_am_happy', target: 'I am happy.', native: '私は幸せです (Watashi wa shiawase desu)', literal: 'I am happy', emoji: '😊', phonetic: 'ay-AM-HAP-ee', audioRef: null },
    { id: 'you_have_a_friend', target: 'You have a friend.', native: 'あなたには友達がいます (Anata ni wa tomodachi ga imasu)', literal: 'You have a friend', emoji: '🤝', phonetic: 'yoo-HAV-uh-FREND', audioRef: null },
    { id: 'they_are_tired', target: 'They are tired.', native: '彼らは疲れています (Karera wa tsukarete imasu)', literal: 'They are tired', emoji: '😩', phonetic: 'thay-AHR-TY-erd', audioRef: null },
  ],

  pattern: {
    name: 'Be vs Have',
    explanation: "be（am/is/are）= 状態を表す（〜である、〜にいる）。have = 所有を表す（持っている）。日本人の典型的な間違い：「I have happy」（誤）→ 「I am happy」（正）。",
    examples: [
      { target: 'I am a student.', native: '私は学生です。' },
      { target: 'I have a brother.', native: '兄がいます。' },
      { target: 'She is tired.', native: '彼女は疲れています。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I am happy', right: '私は幸せ' },
      { left: 'You have a friend', right: '友達がいる' },
      { left: 'They are tired', right: '彼らは疲れている' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '私は幸せです', correct: ['I am happy', 'I am happy.', "I'm happy"] },
    { type: 'fill_blank', instruction: '空欄 (be / have)', sentence: 'I ____ a brother.', options: ['have', 'am', 'are'], correct: 'have' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「私は疲れている」を英語で？', options: [
      { text: 'I am tired.', correct: true },
      { text: 'I have tired.', correct: false },
      { text: 'I tired.', correct: false },
    ], explanation: '状態は be 動詞。「I have tired」は典型的日本人ミス。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['tired', 'are', 'They'], correct: ['They', 'are', 'tired'], translation: '彼らは疲れている' },
    { type: 'translate', instruction: '英語で', prompt: '兄がいます', correct: ['I have a brother', 'I have a brother.', 'I have an older brother'] },
  ],

  rwenDialogue: {
    intro: 'シドニーの英会話レッスンで be / have のドリル。',
    lines: [
      { speaker: 'npc', target: "Tell me 3 things — use 'I am' and 'I have'.", native: '「I am」と「I have」を使って3つ。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I am Japanese. I am happy. I have two siblings.", native: '日本人。幸せ。兄弟2人。', correct: true, feedback: '完璧 — be は状態、have は所有。' },
          { target: "I have happy. I am siblings.", native: '幸せを持ってる。兄弟である。', correct: false, feedback: '逆 — happy は状態 (am)、siblings は所有 (have)。' },
          { target: "I happy. I siblings.", native: '私幸せ。私兄弟。', correct: false, feedback: '動詞 (am/have) を必ず付けて。' },
        ],
      },
      { speaker: 'npc', target: "Excellent — you got the pattern.", native: 'パーフェクト — パターン掴みましたね。' },
      { speaker: 'rwen', rwenLine: 'be と have マスター！状態と所有を使い分けられました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '私は幸せです (英語で)', correct: ['I am happy', "I'm happy"] },
      { prompt: '兄がいます (英語で)', correct: ['I have a brother', 'I have an older brother'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分について「I am __」3つと「I have __」3つを英語で。',
    rwenSignoff: 'I am Rwen. I have many lessons for you.',
  },

  phase8: {
    scenario: '英会話ドリルクラスで be / have の使い分け練習。',
    rwenRole: 'Mrs. Brown — 英語講師、文法担当。',
    successCriteria: "User uses 'be' (am/is/are) for states and 'have' for possession, doesn't say 'I have happy' or 'I am brother', self-corrects when wrong.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
