import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-asking-them',
  module: 3,
  lesson: 9,
  title: 'Asking about them — 相手のことを聞く',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "会話は自分の話だけでは続きません。「Tell me about yourself」「What's your story?」で相手の話を引き出します。",
    culturalNote: "日本では相手の話を聞き役に徹することが多いですが、英語の会話はキャッチボール。質問を返すことで相手にも興味を示すのが大切です。",
  },

  chunks: [
    { id: 'tell_me_about_yourself', target: 'Tell me about yourself', native: '自己紹介してください (Jiko shoukai shite kudasai)', literal: 'Tell me about yourself', emoji: '👂', phonetic: 'tel-mee-uh-BOWT-yor-self', audioRef: null },
    { id: 'whats_your_story', target: "What's your story?", native: 'あなたのストーリーは？ (Anata no sutoorii wa?)', literal: "What is your story?", emoji: '📖', phonetic: 'wuts-yor-STOR-ee', audioRef: null },
    { id: 'where_did_you_grow_up', target: 'Where did you grow up?', native: 'どこで育ちましたか？ (Doko de sodachimashita ka?)', literal: 'Where did you grow up? (past)', emoji: '🏡', phonetic: 'wair-did-yoo-GROH-up', audioRef: null },
  ],

  pattern: {
    name: 'Past question: Where did you...?',
    explanation: "過去の質問は「Where/What did you + 動詞?」の形。「did」+ 原形動詞（grow up, go, see）。日本語の「〜ましたか？」と同じ過去形の質問です。",
    examples: [
      { target: 'Tell me about yourself.', native: '自己紹介してください。' },
      { target: 'Where did you grow up?', native: 'どこで育ちましたか？' },
      { target: 'What do you do for fun?', native: '楽しみで何をしますか？' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Tell me about yourself', right: '自己紹介してください' },
      { left: "What's your story?", right: 'あなたのストーリーは？' },
      { left: 'Where did you grow up?', right: 'どこで育ちましたか？' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'どこで育ちましたか？', correct: ['Where did you grow up?', 'where did you grow up?'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'Where ____ you grow up?', options: ['did', 'do', 'are'], correct: 'did' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '会話を続けるための質問は？', options: [
      { text: 'Tell me about yourself.', correct: true },
      { text: 'Goodbye.', correct: false },
      { text: 'Yes.', correct: false },
    ], explanation: '相手のことを引き出す質問が会話を広げます。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['yourself', 'me', 'about', 'Tell'], correct: ['Tell', 'me', 'about', 'yourself'], translation: '自己紹介してください' },
    { type: 'translate', instruction: '英語で', prompt: 'あなたのストーリーは？', correct: ["What's your story?", 'What is your story?'] },
  ],

  rwenDialogue: {
    intro: 'ニューヨークのバーで、隣の席の人と話が始まりました。',
    lines: [
      { speaker: 'npc', target: "I'm Anna, from Berlin. And you?", native: '私はアンナ、ベルリン出身。あなたは？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm Yuki, from Tokyo. Tell me about yourself — where did you grow up?", native: '私はユキ、東京出身。あなたについて教えて — どこで育ったの？', correct: true, feedback: '完璧 — 自己紹介して、質問返しでキャッチボール開始。' },
          { target: 'I\'m Yuki.', native: '私はユキ。', correct: false, feedback: '質問を返すと会話が続きます。' },
          { target: 'OK.', native: 'オッケー。', correct: false, feedback: '会話を始めるなら自己紹介＋質問が自然。' },
        ],
      },
      { speaker: 'npc', target: "I grew up in Berlin, but I lived in Paris for five years.", native: 'ベルリンで育って、パリに5年住んでた。' },
      { speaker: 'rwen', rwenLine: '会話のキャッチボール開始！質問を返すのが英語の流儀です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '自己紹介してください (英語で)', correct: ['Tell me about yourself', 'tell me about yourself'] },
      { prompt: 'どこで育ちましたか？ (英語で)', correct: ['Where did you grow up?', 'where did you grow up?'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '次の英語の会話で「Tell me about yourself」と一回は質問してみてください。',
    rwenSignoff: 'Tell me your story next time.',
  },

  phase8: {
    scenario: 'NYのバーで一人飲みしているところに話しかけられ、お互いを知る雑談。',
    rwenRole: 'Anna — 30歳のドイツ人デザイナー、旅行好き。',
    successCriteria: "User asks 'Tell me about yourself' or 'Where did you grow up?' to return interest, uses past tense 'did' correctly, keeps the back-and-forth flowing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
