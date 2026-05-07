import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-family-actions',
  module: 5,
  lesson: 8,
  title: 'Family verbs — Visit, call, miss',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Visit」「Call」「Miss」 — 家族との行動を表す動詞。",
    culturalNote: "日本人は「会いたい」を「miss」で表せます。海外で家族を恋しく思う気持ちを「I miss my family」で表現できます。",
  },

  chunks: [
    { id: 'visit', target: 'Visit', native: '訪ねる (Tazuneru)', literal: 'Visit', emoji: '🏃', phonetic: 'VIH-zit', audioRef: null },
    { id: 'call', target: 'Call', native: '電話する (Denwa suru)', literal: 'Call', emoji: '📞', phonetic: 'KAWL', audioRef: null },
    { id: 'miss', target: 'Miss (someone)', native: '恋しく思う (Koishiku omou)', literal: 'Miss someone', emoji: '🥺', phonetic: 'MIS', audioRef: null },
  ],

  pattern: {
    name: 'Family-action verbs',
    explanation: "「I visit my parents every month」（毎月両親を訪ねる）。「I call my mother every day」（毎日母に電話する）。「I miss my family」（家族が恋しい）。",
    examples: [
      { target: 'I visit my grandmother every month.', native: '毎月祖母を訪ねます。' },
      { target: 'I call my parents every Sunday.', native: '毎週日曜に両親に電話します。' },
      { target: 'I miss my family.', native: '家族が恋しい。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Visit', right: '訪ねる' },
      { left: 'Call', right: '電話する' },
      { left: 'Miss', right: '恋しく思う' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '家族が恋しい', correct: ['I miss my family', 'I miss my family.'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I ____ my mother every Sunday.', options: ['call', 'visit', 'miss'], correct: 'call' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「両親を訪ねる」を英語で？', options: [
      { text: 'I visit my parents.', correct: true },
      { text: 'I see-go my parents.', correct: false },
      { text: 'I parents go.', correct: false },
    ], explanation: '訪ねる = visit。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['family', 'my', 'miss', 'I'], correct: ['I', 'miss', 'my', 'family'], translation: '家族が恋しい' },
    { type: 'translate', instruction: '英語で', prompt: '毎月祖母を訪ねます', correct: ['I visit my grandmother every month', 'I visit my grandmother every month.'] },
  ],

  rwenDialogue: {
    intro: 'ロンドン留学中、ホストファミリーが家族の話を聞いてくれます。',
    lines: [
      { speaker: 'npc', target: 'Do you miss your family in Japan?', native: '日本の家族が恋しい？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I miss them. I call my mother every Sunday. I visit them every summer.", native: 'はい、恋しいです。毎週日曜に母に電話します。毎年夏に訪ねます。', correct: true, feedback: '完璧 — 3つの動詞を自然に。' },
          { target: 'Family yes miss.', native: '家族はい恋しい。', correct: false, feedback: '完全な文で：「I miss my family」。' },
          { target: 'I family go.', native: '私家族行く。', correct: false, feedback: '「I visit my family」が正解。' },
        ],
      },
      { speaker: 'npc', target: "That's lovely. Family stays close.", native: '素敵。家族は近くにいるね。' },
      { speaker: 'rwen', rwenLine: '家族の動詞マスター！visit/call/miss が使えました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '家族が恋しい (英語で)', correct: ['I miss my family', 'I miss my family.'] },
      { prompt: '毎週日曜に母に電話します (英語で)', correct: ['I call my mother every Sunday', 'I call my mother every Sunday.'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '家族との日常を3文で：「I visit __」「I call __」「I miss __」。',
    rwenSignoff: "I won't miss you — I'll see you next lesson.",
  },

  phase8: {
    scenario: 'ロンドン留学中、ホストファミリーの夕食で家族の話。',
    rwenRole: 'Helen — ホストマザー、聞き上手。',
    successCriteria: "User uses 'visit/call/miss' with family nouns, uses time expressions ('every Sunday', 'every month'), expresses feelings naturally with 'miss'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
