import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l10-conversation',
  module: 3,
  lesson: 10,
  title: 'Full introduction conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 3 完成！フル自己紹介＋質問返しのキャッチボールを実践します。",
    culturalNote: "英語のフル自己紹介は3〜5分のショートストーリー：名前、出身、仕事、住所、趣味、性格 — 流れるように一連で話せると印象的です。",
  },

  chunks: [
    { id: 'pleasure_to_meet_you', target: 'Pleasure to meet you', native: 'お会いできて嬉しいです (Oai dekite ureshii desu)', literal: 'Pleasure to meet you', emoji: '🤝', phonetic: 'PLEH-zhur-too-MEET-yoo', audioRef: null },
    { id: 'and_yourself', target: 'And yourself?', native: 'あなたは？ (Anata wa?)', literal: 'And yourself?', emoji: '↩️', phonetic: 'and-yor-SELF', audioRef: null },
    { id: 'lets_keep_in_touch', target: "Let's keep in touch", native: '連絡を取り合いましょう (Renraku wo toriaimashou)', literal: "Let's keep in touch", emoji: '📱', phonetic: 'lets-keep-in-TUTCH', audioRef: null },
  ],

  pattern: {
    name: 'Full introduction flow',
    explanation: "完璧な自己紹介の流れ：(1) 挨拶 (2) 名前 (3) 出身・住所 (4) 仕事 (5) 趣味・性格 (6) 質問返し (7) 連絡先交換。「And yourself?」は質問返しの便利フレーズ。",
    examples: [
      { target: "Pleasure to meet you. I'm Yuki from Tokyo.", native: 'お会いできて嬉しいです。東京のユキです。' },
      { target: "And yourself?", native: 'あなたは？' },
      { target: "Let's keep in touch.", native: '連絡を取り合いましょう。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Pleasure to meet you', right: 'お会いできて嬉しいです' },
      { left: 'And yourself?', right: 'あなたは？' },
      { left: "Let's keep in touch", right: '連絡を取り合いましょう' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'お会いできて嬉しいです', correct: ['Pleasure to meet you', 'pleasure to meet you'] },
    { type: 'translate', instruction: '英語で — 自己紹介の流れ', prompt: '私はユキです、東京出身、エンジニアです。', correct: [
      "I'm Yuki, from Tokyo, and I'm an engineer.",
      "I'm Yuki from Tokyo. I'm an engineer.",
      "I'm Yuki, I'm from Tokyo, I'm an engineer.",
    ]},
    { type: 'build_sentence', instruction: '並べ替え', words: ['touch', 'in', 'keep', "Let's"], correct: ["Let's", 'keep', 'in', 'touch'], translation: '連絡を取り合いましょう' },
    { type: 'fill_blank', instruction: '空欄', sentence: 'Pleasure ____ meet you.', options: ['to', 'for', 'at'], correct: 'to' },
    { type: 'multiple_choice', instruction: '正しい流れ', question: '会話を締めくくる時の自然な一言は？', options: [
      { text: "Let's keep in touch!", correct: true },
      { text: 'Bye forever.', correct: false },
      { text: 'I am going.', correct: false },
    ], explanation: '別れ際に「連絡を取り合おう」と言うのが温かい締め。' },
  ],

  rwenDialogue: {
    intro: '東京の国際イベントで、初対面のロンドン人と本格的な自己紹介。',
    lines: [
      { speaker: 'npc', target: "Hello! I'm Sarah, from London. What about you?", native: 'こんにちは！私はサラ、ロンドン出身。あなたは？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Pleasure to meet you, Sarah. I'm Yuki, from Tokyo. I'm an engineer, and I love learning. And yourself — what do you do?", native: 'お会いできて嬉しいです、サラ。私はユキ、東京出身。エンジニアで、学ぶのが好きです。あなたは？お仕事は？', correct: true, feedback: '完璧なフル自己紹介！質問返しもバッチリ。' },
          { target: "I'm Yuki.", native: '私はユキ。', correct: false, feedback: '名前だけより、出身・仕事も加えて。' },
          { target: 'Hi.', native: 'やあ。', correct: false, feedback: '初対面のフォーマル場面では「Pleasure to meet you」が自然。' },
        ],
      },
      { speaker: 'npc', target: "I'm a designer. Lovely to meet a fellow learner. Let's keep in touch.", native: '私はデザイナー。同じ学習仲間に会えて嬉しい。連絡取り合いましょう。' },
      { speaker: 'rwen', rwenLine: 'Module 3 完了！自分のことを英語で完全に伝えられるようになりました。Module 4 では文法を強化します。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください — フル自己紹介。',
    prompts: [
      { prompt: 'お会いできて嬉しいです (英語で)', correct: ['Pleasure to meet you', 'pleasure to meet you'] },
      { prompt: '連絡を取り合いましょう (英語で)', correct: ["Let's keep in touch", "let's keep in touch"] },
    ],
  },

  mission: {
    title: 'Module 3 ミッション — フル自己紹介',
    task: '鏡の前で60秒の自己紹介：名前→出身→仕事→住所→趣味→「And yourself?」 を一連で。',
    rwenSignoff: 'Module 3 完了！自分を語れる英語力がつきました。',
  },

  phase8: {
    scenario: '東京での日英国際カンファレンス。レセプションでロンドンから来たカウンターパートに自己紹介＋名刺交換。',
    rwenRole: 'James — 35歳のロンドン人プロデューサー、フォーマル＋好奇心。',
    successCriteria: "User runs the full intro: greeting → name → origin → job → hobby → 'And yourself?' → 'Let's keep in touch' at end. Uses Module 3 chunks naturally and asks at least one question.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
