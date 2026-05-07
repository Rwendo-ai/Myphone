import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-some-any',
  module: 4,
  lesson: 7,
  title: 'Some & Any — countables',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「Some」と「Any」は数や量を表します。肯定文には some、疑問文と否定文には any が基本です。",
    culturalNote: "日本語の「いくつか」「何か」の使い分けに似ています。「Would you like some coffee?」のように依頼の疑問文では some を使います — 例外的なルール。",
  },

  chunks: [
    { id: 'some_water', target: 'Some water', native: '水を少し (Mizu wo sukoshi)', literal: 'Some water', emoji: '💧', phonetic: 'sum-WAW-ter', audioRef: null },
    { id: 'any_questions', target: 'Any questions?', native: '質問はありますか？ (Shitsumon wa arimasu ka?)', literal: 'Any questions?', emoji: '❓', phonetic: 'EN-ee KWES-chuns', audioRef: null },
    { id: 'some_friends', target: 'Some friends', native: '何人かの友達 (Nannin ka no tomodachi)', literal: 'Some friends', emoji: '👥', phonetic: 'sum-FRENDS', audioRef: null },
  ],

  pattern: {
    name: 'Some / Any rule',
    explanation: "肯定文：some（I have some friends）。疑問文・否定文：any（Do you have any?  / I don't have any）。例外：依頼や提案の疑問文は some（Would you like some?）。",
    examples: [
      { target: 'I have some friends here.', native: 'ここに何人か友達がいます。' },
      { target: 'Do you have any questions?', native: '質問はありますか？' },
      { target: "I don't have any money.", native: 'お金がありません。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Some water', right: '水を少し' },
      { left: 'Any questions?', right: '質問は？' },
      { left: 'Some friends', right: '何人かの友達' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '質問はありますか？', correct: ['Any questions?', 'any questions?', 'Do you have any questions?'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'Do you have ____ money?', options: ['any', 'some', 'a'], correct: 'any' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「コーヒーいかがですか？」（依頼）の正しい英語は？', options: [
      { text: 'Would you like some coffee?', correct: true },
      { text: 'Would you like any coffee?', correct: false },
      { text: 'Do you want a coffee?', correct: false },
    ], explanation: '依頼の疑問文は some を使います（例外ルール）。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['friends', 'have', 'some', 'I'], correct: ['I', 'have', 'some', 'friends'], translation: '何人か友達がいます' },
    { type: 'translate', instruction: '英語で', prompt: '水を少し', correct: ['Some water', 'some water'] },
  ],

  rwenDialogue: {
    intro: '東京のオフィスで、海外チームとのミーティング後の質疑応答。',
    lines: [
      { speaker: 'npc', target: 'Any questions before we wrap up?', native: '終わる前に何か質問は？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes, I have some questions about the budget.', native: 'はい、予算についていくつか質問があります。', correct: true, feedback: '完璧 — 肯定文には some。' },
          { target: 'Yes, I have any questions.', native: '質問あります。', correct: false, feedback: '肯定文では「some」。' },
          { target: 'Some? Any?', native: 'いくつか？何か？', correct: false, feedback: '完全な文で：「I have some questions」。' },
        ],
      },
      { speaker: 'npc', target: "Sure, go ahead.", native: 'もちろん、どうぞ。' },
      { speaker: 'rwen', rwenLine: 'some/any マスター！肯定は some、疑問・否定は any です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '質問はありますか？ (英語で)', correct: ['Any questions?', 'Do you have any questions?'] },
      { prompt: '何人か友達がいます (英語で)', correct: ['I have some friends', 'I have some friends.'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: 'some と any を使った3つの文を作成。「I have some __」「Do you have any __?」など。',
    rwenSignoff: "Got any questions? See you next.",
  },

  phase8: {
    scenario: '東京の英語ミーティングで質疑応答に参加。',
    rwenRole: 'Susan — 40歳のアメリカ人プロマネ、効率重視。',
    successCriteria: "User uses 'some' in positive sentences and 'any' in questions/negatives, except 'some' in offer/request questions ('Would you like some...?').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
